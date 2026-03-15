import { NextRequest, NextResponse } from 'next/server'
import type { SiteFamily } from '../../../types/site'
import {
    centerInquiryOptions,
    trInquiryOptions,
    globalInquiryOptions,
} from '../../../lib/brief/inquiry-options'

type BriefPayload = {
    fullName?: string
    workEmail?: string
    company?: string
    inquiryType?: string
    message?: string
    consent?: boolean
    siteFamily?: SiteFamily
}

type BriefField =
    | 'fullName'
    | 'workEmail'
    | 'company'
    | 'inquiryType'
    | 'message'
    | 'consent'
    | 'siteFamily'

type FieldErrors = Partial<Record<BriefField, string>>
type FieldErrorCodes = Partial<Record<BriefField, string>>

const MAX_LENGTHS = {
    fullName: 120,
    workEmail: 160,
    company: 160,
    inquiryType: 120,
    message: 3000,
} as const

const inquiryOptionsByFamily: Record<SiteFamily, string[]> = {
    center: centerInquiryOptions.map((option) => option.value),
    tr: trInquiryOptions.map((option) => option.value),
    global: globalInquiryOptions.map((option) => option.value),
}

function jsonError(
    status: number,
    message: string,
    errorCode?: string,
    fieldErrors?: FieldErrors,
    fieldErrorCodes?: FieldErrorCodes,
) {
    return NextResponse.json(
        {
            ok: false,
            message,
            errorCode,
            fieldErrors: fieldErrors && Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
            fieldErrorCodes: fieldErrorCodes && Object.keys(fieldErrorCodes).length > 0 ? fieldErrorCodes : undefined,
        },
        { status },
    )
}

function getTrimmedString(value: unknown) {
    return typeof value === 'string' ? value.trim() : ''
}

function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: NextRequest) {
    const contentType = request.headers.get('content-type') || ''

    if (!contentType.includes('application/json')) {
        return jsonError(415, 'İstek tipi geçersiz. JSON bekleniyor.', 'INVALID_CONTENT_TYPE')
    }

    let body: BriefPayload

    try {
        body = await request.json()
    } catch {
        return jsonError(400, 'Geçersiz JSON body gönderildi.', 'INVALID_JSON')
    }

    const fieldErrors: FieldErrors = {}
    const fieldErrorCodes: FieldErrorCodes = {}

    const siteFamily = body.siteFamily
    const fullName = getTrimmedString(body.fullName)
    const workEmail = getTrimmedString(body.workEmail)
    const company = getTrimmedString(body.company)
    const inquiryType = getTrimmedString(body.inquiryType)
    const message = getTrimmedString(body.message)
    const consent = body.consent

    // Site Family Validation
    if (!siteFamily || !['center', 'tr', 'global'].includes(siteFamily)) {
        fieldErrors.siteFamily = 'Geçerli bir site family değeri gereklidir.'
        fieldErrorCodes.siteFamily = 'INVALID_SITE_FAMILY'
    }

    // Full Name Validation
    if (!fullName) {
        fieldErrors.fullName = 'Ad soyad zorunludur.'
        fieldErrorCodes.fullName = 'REQUIRED'
    } else if (fullName.length < 2) {
        fieldErrors.fullName = 'Ad soyad en az 2 karakter olmalıdır.'
        fieldErrorCodes.fullName = 'TOO_SHORT'
    } else if (fullName.length > MAX_LENGTHS.fullName) {
        fieldErrors.fullName = `Ad soyad en fazla ${MAX_LENGTHS.fullName} karakter olabilir.`
        fieldErrorCodes.fullName = 'TOO_LONG'
    }

    // Work Email Validation
    if (!workEmail) {
        fieldErrors.workEmail = 'E-posta adresi zorunludur.'
        fieldErrorCodes.workEmail = 'REQUIRED'
    } else if (!isValidEmail(workEmail)) {
        fieldErrors.workEmail = 'Geçerli bir e-posta adresi girin.'
        fieldErrorCodes.workEmail = 'INVALID_EMAIL'
    } else if (workEmail.length > MAX_LENGTHS.workEmail) {
        fieldErrors.workEmail = `E-posta adresi en fazla ${MAX_LENGTHS.workEmail} karakter olabilir.`
        fieldErrorCodes.workEmail = 'TOO_LONG'
    }

    // Company Validation
    if (!company) {
        fieldErrors.company = 'Şirket adı zorunludur.'
        fieldErrorCodes.company = 'REQUIRED'
    } else if (company.length < 2) {
        fieldErrors.company = 'Şirket adı en az 2 karakter olmalıdır.'
        fieldErrorCodes.company = 'TOO_SHORT'
    } else if (company.length > MAX_LENGTHS.company) {
        fieldErrors.company = `Şirket adı en fazla ${MAX_LENGTHS.company} karakter olabilir.`
        fieldErrorCodes.company = 'TOO_LONG'
    }

    // Inquiry Type Validation
    if (!inquiryType) {
        fieldErrors.inquiryType = 'Bir talep türü seçin.'
        fieldErrorCodes.inquiryType = 'REQUIRED'
    } else if (inquiryType.length < 2) {
        fieldErrors.inquiryType = 'Talep türü geçersiz.'
        fieldErrorCodes.inquiryType = 'INVALID_OPTION'
    } else if (inquiryType.length > MAX_LENGTHS.inquiryType) {
        fieldErrors.inquiryType = 'Talep türü çok uzun.'
        fieldErrorCodes.inquiryType = 'TOO_LONG'
    } else if (
        siteFamily &&
        ['center', 'tr', 'global'].includes(siteFamily) &&
        !inquiryOptionsByFamily[siteFamily as SiteFamily].includes(inquiryType)
    ) {
        fieldErrors.inquiryType = 'Seçilen talep türü bu site için geçerli değil.'
        fieldErrorCodes.inquiryType = 'INVALID_OPTION'
    }

    // Message Validation
    if (!message) {
        fieldErrors.message = 'Mesaj alanı zorunludur.'
        fieldErrorCodes.message = 'REQUIRED'
    } else if (message.length < 10) {
        fieldErrors.message = 'Mesaj en az 10 karakter olmalıdır.'
        fieldErrorCodes.message = 'TOO_SHORT'
    } else if (message.length > MAX_LENGTHS.message) {
        fieldErrors.message = `Mesaj en fazla ${MAX_LENGTHS.message} karakter olabilir.`
        fieldErrorCodes.message = 'TOO_LONG'
    }

    // Consent Validation
    if (consent !== true) {
        fieldErrors.consent = 'Devam etmek için onay vermelisiniz.'
        fieldErrorCodes.consent = 'REQUIRED'
    }

    if (Object.keys(fieldErrors).length > 0) {
        return jsonError(400, 'Form doğrulama hatası.', 'VALIDATION_ERROR', fieldErrors, fieldErrorCodes)
    }

    console.log('[brief-submission]', {
        siteFamily,
        fullName,
        workEmail,
        company,
        inquiryType,
        message,
        consent,
        receivedAt: new Date().toISOString(),
    })

    return NextResponse.json({
        ok: true,
        message: 'Brief başarıyla alındı.',
    })
}