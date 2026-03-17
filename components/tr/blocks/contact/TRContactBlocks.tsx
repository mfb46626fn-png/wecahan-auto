"use client";

import React, { useState, useRef } from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { FormField } from '../../../shared/forms/FormField';
import { TextInput } from '../../../shared/forms/TextInput';
import { SelectInput } from '../../../shared/forms/SelectInput';
import { TextArea } from '../../../shared/forms/TextArea';
import { CheckboxField } from '../../../shared/forms/CheckboxField';
import { trContactContent, CtaConfig } from '../../../../content/tr/contact';

// --- Helpers ---
const resolveCtaLabel = (cta: CtaConfig) => {
    return typeof cta === 'string' ? cta : cta.label;
};

const resolveCtaHref = (cta: CtaConfig, fallback: string) => {
    return typeof cta === 'string' ? fallback : cta.href;
};

// --- Blocks ---

/**
 * 1. Hero Block
 */
export function TRContactHeroBlock() {
    const { hero } = trContactContent;

    return (
        <SectionWrapper className="bg-white overflow-hidden relative border-b border-neutral-100">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 -z-10 opacity-60" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-100/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 -z-10" />

            <ContentContainer className="pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader
                        eyebrow={hero.eyebrow}
                        title={hero.title}
                        description={hero.description}
                        align="center"
                        maxWidth="lg"
                        className="mb-12"
                    />

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a href={resolveCtaHref(hero.primaryCta, '#form')} className="w-full sm:w-auto">
                            <PrimaryButton className="w-full sm:w-auto !px-12 !py-4.5 shadow-xl shadow-black/5 hover:shadow-black/10 transition-all font-bold text-sm tracking-tight">
                                {resolveCtaLabel(hero.primaryCta)}
                            </PrimaryButton>
                        </a>
                        <a href={resolveCtaHref(hero.secondaryCta, 'https://wa.me/')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <SecondaryButton className="w-full sm:w-auto !px-12 !py-4.5 bg-white border-neutral-200 font-bold text-sm tracking-tight">
                                {resolveCtaLabel(hero.secondaryCta)}
                            </SecondaryButton>
                        </a>
                    </div>

                    {hero.helperText && (
                        <div className="flex flex-col items-center justify-center gap-3">
                            <div className="flex items-center gap-4 opacity-40">
                                <div className="h-px w-6 bg-neutral-300" />
                                <svg className="w-3 h-3 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7h2v2h-2v-2zm0-4h2v3h-2V9z" />
                                </svg>
                                <div className="h-px w-6 bg-neutral-300" />
                            </div>
                            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.25em] leading-relaxed">
                                {hero.helperText}
                            </p>
                        </div>
                    )}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. Options Overview Block
 */
export function TRContactOptionsOverviewBlock() {
    const { contactOptionsOverview } = trContactContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={contactOptionsOverview.title}
                    description={contactOptionsOverview.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16"
                />

                <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
                    {contactOptionsOverview.options.map((option, index) => (
                        <CardBase
                            key={option.id}
                            size="lg"
                            className={`group relative h-full flex flex-col p-8 md:p-10 transition-all duration-500 rounded-[2.5rem] border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-black/5 hover:border-neutral-900 overflow-hidden ${
                                index === 0 ? 'bg-white ring-1 ring-neutral-200/50' : 'bg-white/60'
                            }`}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-900/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-neutral-900/10 transition-colors" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 shadow-inner ${
                                        index === 0 ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-400'
                                    }`}>
                                        {option.id === 'form' && (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        )}
                                        {option.id === 'whatsapp' && (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                            </svg>
                                        )}
                                        {option.id === 'email' && (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">
                                        {option.title}
                                    </h3>
                                    <BodyText className="text-neutral-500 font-medium leading-relaxed">
                                        {option.description}
                                    </BodyText>
                                </div>

                                <div className="mt-auto">
                                    <div className="mb-6 pb-6 border-b border-neutral-100">
                                        <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">
                                            EN UYGUN KULLANIM:
                                        </p>
                                        <p className="text-xs font-bold text-neutral-600">
                                            {option.bestFor}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between group/cta">
                                        <span className={`text-sm font-bold tracking-tight transition-colors ${
                                            index === 0 ? 'text-neutral-900 underline underline-offset-8 decoration-neutral-200 group-hover:decoration-neutral-900' : 'text-neutral-500 group-hover:text-neutral-900'
                                        }`}>
                                            {resolveCtaLabel(option.cta)}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                            index === 0 ? 'bg-neutral-900 text-white translate-x-0' : 'bg-neutral-100 text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white'
                                        }`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <a 
                                href={typeof option.cta === 'string' ? (option.id === 'form' ? '#form' : '#') : option.cta.href}
                                className="absolute inset-0 z-20"
                                aria-label={resolveCtaLabel(option.cta)}
                            />
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 3. Main Contact Form Block
 */
type FormValues = {
    name: string;
    company: string;
    email: string;
    phone: string;
    sector: string;
    inquiryType: string;
    message: string;
    consent: boolean;
};

const INITIAL_VALUES: FormValues = {
    name: '',
    company: '',
    email: '',
    phone: '',
    sector: '',
    inquiryType: '',
    message: '',
    consent: false,
};

export function TRContactMainContactFormBlock() {
    const { mainContactForm } = trContactContent;
    const { fields } = mainContactForm;

    const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState('');
    const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

    const formRef = useRef<HTMLFormElement>(null);
    const fieldRefs: Partial<Record<keyof FormValues, React.RefObject<any>>> = {
        name: useRef<HTMLInputElement>(null),
        company: useRef<HTMLInputElement>(null),
        email: useRef<HTMLInputElement>(null),
        phone: useRef<HTMLInputElement>(null),
        sector: useRef<HTMLSelectElement>(null),
        inquiryType: useRef<HTMLSelectElement>(null),
        message: useRef<HTMLTextAreaElement>(null),
        consent: useRef<HTMLInputElement>(null),
    };

    const updateField = (key: keyof FormValues, value: string | boolean) => {
        setValues((prev) => ({ ...prev, [key]: value }));
        if (fieldErrors[key]) {
            setFieldErrors((prev) => {
                const next = { ...prev };
                delete next[key];
                return next;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');
        setSubmitSuccess('');
        setFieldErrors({});

        if (!values.consent) {
            setSubmitError('Devam etmek için onay vermelisiniz.');
            setIsSubmitting(false);
            fieldRefs.consent?.current?.focus();
            return;
        }

        try {
            const payload = {
                siteFamily: 'tr',
                fullName: values.name,
                workEmail: values.email,
                company: values.company,
                inquiryType: values.inquiryType,
                message: `[Sektör: ${values.sector}] [Telefon: ${values.phone}]\n\n${values.message}`,
                consent: values.consent,
            };

            const response = await fetch('/api/brief', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok || !result.ok) {
                const backendFieldErrors = result.fieldErrors || {};
                const mappedErrors: Partial<Record<keyof FormValues, string>> = {};

                if (backendFieldErrors.fullName) mappedErrors.name = backendFieldErrors.fullName;
                if (backendFieldErrors.workEmail) mappedErrors.email = backendFieldErrors.workEmail;
                if (backendFieldErrors.company) mappedErrors.company = backendFieldErrors.company;
                if (backendFieldErrors.inquiryType) mappedErrors.inquiryType = backendFieldErrors.inquiryType;
                if (backendFieldErrors.message) mappedErrors.message = backendFieldErrors.message;
                if (backendFieldErrors.consent) mappedErrors.consent = backendFieldErrors.consent;

                setFieldErrors(mappedErrors);
                setSubmitError(result.message || mainContactForm.errorMessage);

                const firstErrorKey = Object.keys(mappedErrors)[0] as keyof FormValues;
                if (firstErrorKey && fieldRefs[firstErrorKey]) {
                    fieldRefs[firstErrorKey]!.current?.focus();
                }

                return;
            }

            setSubmitSuccess(mainContactForm.successMessage);
            setValues(INITIAL_VALUES);
            formRef.current?.reset();
        } catch (error) {
            setSubmitError(mainContactForm.errorMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="form" className="scroll-mt-20">
            <SectionWrapper className="bg-white">
                <ContentContainer className="py-20 md:py-32">
                    <div className="max-w-3xl mx-auto">
                        <SectionHeader
                            title={mainContactForm.title}
                            description={mainContactForm.description}
                            align="center"
                            maxWidth="lg"
                            className="mb-16"
                        />

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-neutral-50/50 border border-neutral-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-900/5 rounded-full -mr-32 -mt-32 blur-3xl" />

                            <div className="relative z-10 space-y-8">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <FormField label={fields.name.label} error={fieldErrors.name} htmlFor="name">
                                        <TextInput
                                            ref={fieldRefs.name}
                                            id="name"
                                            value={values.name}
                                            onChange={(e) => updateField('name', e.target.value)}
                                            placeholder={fields.name.placeholder}
                                            required
                                            aria-invalid={!!fieldErrors.name}
                                        />
                                    </FormField>

                                    <FormField label={fields.company.label} error={fieldErrors.company} htmlFor="company">
                                        <TextInput
                                            ref={fieldRefs.company}
                                            id="company"
                                            value={values.company}
                                            onChange={(e) => updateField('company', e.target.value)}
                                            placeholder={fields.company.placeholder}
                                            required
                                            aria-invalid={!!fieldErrors.company}
                                        />
                                    </FormField>

                                    <FormField label={fields.email.label} error={fieldErrors.email} htmlFor="email">
                                        <TextInput
                                            ref={fieldRefs.email}
                                            id="email"
                                            type="email"
                                            value={values.email}
                                            onChange={(e) => updateField('email', e.target.value)}
                                            placeholder={fields.email.placeholder}
                                            required
                                            aria-invalid={!!fieldErrors.email}
                                        />
                                    </FormField>

                                    <FormField label={fields.phone.label} error={fieldErrors.phone} htmlFor="phone">
                                        <TextInput
                                            ref={fieldRefs.phone}
                                            id="phone"
                                            value={values.phone}
                                            onChange={(e) => updateField('phone', e.target.value)}
                                            placeholder={fields.phone.placeholder}
                                            aria-invalid={!!fieldErrors.phone}
                                        />
                                    </FormField>

                                    <FormField label={fields.sector.label} error={fieldErrors.sector} htmlFor="sector">
                                        <SelectInput
                                            ref={fieldRefs.sector}
                                            id="sector"
                                            value={values.sector}
                                            onChange={(e) => updateField('sector', e.target.value)}
                                            required
                                            aria-invalid={!!fieldErrors.sector}
                                        >
                                            <option value="">Seçiniz</option>
                                            {fields.sector.options.map((opt) => (
                                                <option key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </SelectInput>
                                    </FormField>

                                    <FormField label={fields.inquiryType.label} error={fieldErrors.inquiryType} htmlFor="inquiryType">
                                        <SelectInput
                                            ref={fieldRefs.inquiryType}
                                            id="inquiryType"
                                            value={values.inquiryType}
                                            onChange={(e) => updateField('inquiryType', e.target.value)}
                                            required
                                            aria-invalid={!!fieldErrors.inquiryType}
                                        >
                                            <option value="">Seçiniz</option>
                                            {fields.inquiryType.options.map((opt) => (
                                                <option key={opt.value} value={opt.value}>
                                                    {opt.label}
                                                </option>
                                            ))}
                                        </SelectInput>
                                    </FormField>
                                </div>

                                <FormField 
                                    label={fields.message.label} 
                                    error={fieldErrors.message} 
                                    htmlFor="message"
                                >
                                    <TextArea
                                        ref={fieldRefs.message}
                                        id="message"
                                        value={values.message}
                                        onChange={(e) => updateField('message', e.target.value)}
                                        placeholder={fields.message.placeholder}
                                        rows={5}
                                        required
                                        aria-invalid={!!fieldErrors.message}
                                    />
                                    <p className="mt-2 text-[10px] font-medium text-neutral-400 italic">
                                        {fields.message.hint}
                                    </p>
                                </FormField>

                                <CheckboxField
                                    ref={fieldRefs.consent}
                                    id="consent"
                                    checked={values.consent}
                                    onChange={(e) => updateField('consent', e.target.checked)}
                                    label={fields.consent.label}
                                    error={fieldErrors.consent}
                                    required
                                />

                                <div className="pt-4 border-t border-neutral-100">
                                    <PrimaryButton
                                        type="submit"
                                        className="w-full !py-4 font-bold tracking-tight shadow-xl shadow-black/5 hover:shadow-black/10 transition-all"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Gönderiliyor...' : mainContactForm.submitLabel}
                                    </PrimaryButton>

                                    {submitSuccess && (
                                        <div className="mt-6 p-4 rounded-2xl bg-green-50 border border-green-100 text-green-700 text-sm font-medium text-center">
                                            {submitSuccess}
                                        </div>
                                    )}

                                    {submitError && (
                                        <div className="mt-6 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-700 text-sm font-medium text-center">
                                            {submitError}
                                        </div>
                                    )}

                                    <p className="mt-6 text-[10px] font-bold text-neutral-400 text-center uppercase tracking-widest leading-loose">
                                        {mainContactForm.helperText}
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </ContentContainer>
            </SectionWrapper>
        </div>
    );
}

/**
 * 4. What Happens Next Block
 */
export function TRContactWhatHappensNextBlock() {
    const { whatHappensNext } = trContactContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={whatHappensNext.title}
                    description={whatHappensNext.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto relative">
                    <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-px bg-neutral-200 -z-10" />

                    {whatHappensNext.steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <CardBase 
                                size="lg"
                                className="h-full bg-white border-neutral-100 p-8 hover:shadow-xl hover:shadow-black/5 hover:border-neutral-900 transition-all duration-500 rounded-[2rem] flex flex-col pt-16"
                            >
                                <div className="absolute top-6 left-8 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-sm font-black tracking-tight">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">
                                    {step.title}
                                </h3>
                                
                                <BodyText size="sm" className="text-neutral-500 leading-relaxed font-medium">
                                    {step.description}
                                </BodyText>
                            </CardBase>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-neutral-100 shadow-sm text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                        <span className="flex h-2 w-2 rounded-full bg-neutral-900 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
                        </span>
                        Süreç, ihtiyacınız olan hıza ve kapsama göre esnetilebilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 5. Fit Reminder Block
 */
export function TRContactFitReminderBlock() {
    const { fitReminder } = trContactContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={fitReminder.title}
                    description={fitReminder.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-neutral-50/30 border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:border-neutral-900 group"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 text-white shadow-xl shadow-black/10 group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    {fitReminder.goodFitTitle}
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mt-1">
                                    VERİMLİ EŞLEŞME
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-5 flex-grow">
                            {fitReminder.goodFitPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-neutral-700 leading-relaxed">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CardBase>

                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12 hover:bg-neutral-50/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-10 opacity-60">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-neutral-200 text-neutral-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    {fitReminder.badFitTitle}
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mt-1">
                                    BEKLENTİ UYUMU
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-5 flex-grow">
                            {fitReminder.badFitPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-2.5 h-1 w-1 rounded-full bg-neutral-300" aria-hidden="true" />
                                    <span className="text-sm font-medium text-neutral-500 leading-relaxed">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CardBase>
                </div>

                <div className="mt-20 text-center">
                    <p className="max-w-xl mx-auto text-[10px] font-bold text-neutral-300 uppercase tracking-[0.25em] leading-relaxed">
                        Niyetimiz, kısıtlı vaktinizi en doğru odakla değerlendirmektir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 6. FAQ Micro Block
 */
export function TRContactFaqMicroBlock() {
    const { faqMicro } = trContactContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={faqMicro.title}
                    description={faqMicro.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
                    {faqMicro.items.map((item, index) => (
                        <CardBase 
                            key={index}
                            size="lg" 
                            className="bg-white border-neutral-100 p-8 md:p-10 rounded-[2rem] hover:shadow-xl hover:shadow-black/5 transition-all duration-500 border-l-4 border-l-neutral-900 shadow-sm flex flex-col h-full"
                        >
                            <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight leading-snug">
                                {item.question}
                            </h3>
                            <BodyText size="sm" className="text-neutral-500 font-medium leading-relaxed mt-auto">
                                {item.answer}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="inline-flex items-center gap-2 text-[10px] font-bold text-neutral-400 uppercase tracking-widest bg-white px-6 py-2 rounded-full border border-neutral-100 shadow-sm">
                        <svg className="w-3 h-3 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                        Başka bir teknik sorunuz mu var? WhatsApp üzerinden hızlıca sorabilirsiniz.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 7. Contact CTA Block
 */
export function TRContactContactCtaBlock() {
    const { contactCta } = trContactContent;

    return (
        <SectionWrapper className="bg-white border-t border-neutral-100">
            <ContentContainer className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="bg-neutral-900 border-neutral-800 p-10 md:p-20 text-center rounded-[3rem] overflow-hidden relative shadow-2xl shadow-black/20"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
                        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px]" />
                        
                        <div className="relative z-10">
                            <SectionHeader
                                title={<span className="text-white">{contactCta.title}</span>}
                                description={<span className="text-neutral-400">{contactCta.description}</span>}
                                align="center"
                                maxWidth="md"
                                className="mb-12"
                            />

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                                <a 
                                    href={resolveCtaHref(contactCta.primaryCta, '#form')} 
                                    className="w-full sm:w-auto"
                                >
                                    <PrimaryButton className="w-full sm:w-auto !px-12 !py-4.5 bg-white text-neutral-900 border-white hover:bg-neutral-100 shadow-xl shadow-black/10 text-sm font-bold tracking-tight">
                                        {resolveCtaLabel(contactCta.primaryCta)}
                                    </PrimaryButton>
                                </a>
                                <a 
                                    href={resolveCtaHref(contactCta.secondaryCta, 'https://wa.me/')} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <SecondaryButton className="w-full sm:w-auto !px-12 !py-4.5 bg-neutral-800 text-white border-neutral-700 hover:bg-neutral-700 text-sm font-bold tracking-tight">
                                        {resolveCtaLabel(contactCta.secondaryCta)}
                                    </SecondaryButton>
                                </a>
                            </div>

                            {contactCta.helperText && (
                                <BodyText className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.3em] inline-block px-4 py-1.5 border border-neutral-800 rounded-full">
                                    {contactCta.helperText}
                                </BodyText>
                            )}
                        </div>
                    </CardBase>
                </div>
                
                <div className="mt-16 text-center">
                    <p className="max-w-xl mx-auto text-[10px] font-bold text-neutral-300 uppercase tracking-[0.25em] leading-relaxed">
                        Gerçek zamanlı operasyon analizi ve dijital dönüşüm süreçlerinde <br />
                        Türkiye genelinde yanınızdayız.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
