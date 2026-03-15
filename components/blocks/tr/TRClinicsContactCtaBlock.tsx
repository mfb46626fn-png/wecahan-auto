"use client";

import { useState, useRef } from "react";
import { SectionWrapper } from "../../shared/layout/SectionWrapper";
import { ContentContainer } from "../../shared/layout/ContentContainer";
import { SectionHeader } from "../../shared/layout/SectionHeader";
import { BodyText } from "../../shared/typography/BodyText";
import { CheckboxField } from "../../shared/forms/CheckboxField";
import { FormField } from "../../shared/forms/FormField";
import { SelectInput } from "../../shared/forms/SelectInput";
import { TextArea } from "../../shared/forms/TextArea";
import { TextInput } from "../../shared/forms/TextInput";
import { PrimaryButton } from "../../shared/ui/PrimaryButton";
import { SecondaryButton } from "../../shared/ui/SecondaryButton";
import { trClinicsContent } from "../../../content/tr/clinics";
import { trInquiryOptions } from "../../../lib/brief/inquiry-options";
import { trBriefPlaceholders } from "../../../lib/brief/placeholders";

type FormValues = {
    fullName: string;
    workEmail: string;
    company: string;
    inquiryType: string;
    message: string;
    consent: boolean;
};

const INITIAL_VALUES: FormValues = {
    fullName: "",
    workEmail: "",
    company: "",
    inquiryType: "",
    message: "",
    consent: false,
};

export function TRClinicsContactCtaBlock() {
    const { finalCta } = trClinicsContent;
    const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [submitSuccess, setSubmitSuccess] = useState("");
    const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormValues | "siteFamily", string>>>({});

    const fullNameRef = useRef<HTMLInputElement>(null);
    const workEmailRef = useRef<HTMLInputElement>(null);
    const companyRef = useRef<HTMLInputElement>(null);
    const inquiryTypeRef = useRef<HTMLSelectElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const consentRef = useRef<HTMLInputElement>(null);

    const fieldRefs: Record<string, React.RefObject<any>> = {
        fullName: fullNameRef,
        workEmail: workEmailRef,
        company: companyRef,
        inquiryType: inquiryTypeRef,
        message: messageRef,
        consent: consentRef,
    };

    function updateField<K extends keyof FormValues>(
        key: K,
        value: FormValues[K],
    ) {
        setValues((current) => ({
            ...current,
            [key]: value,
        }));

        if (fieldErrors[key]) {
            setFieldErrors((current) => {
                const newErrors = { ...current };
                delete newErrors[key];
                return newErrors;
            });
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setIsSubmitting(true);
        setSubmitError("");
        setSubmitSuccess("");
        setFieldErrors({});

        if (!values.consent) {
            setSubmitError("Devam etmeden önce onay vermelisiniz.");
            setIsSubmitting(false);
            consentRef.current?.focus();
            return;
        }

        try {
            const response = await fetch("/api/brief", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    siteFamily: "tr",
                    fullName: values.fullName,
                    workEmail: values.workEmail,
                    company: values.company,
                    inquiryType: values.inquiryType,
                    message: values.message,
                    consent: values.consent,
                }),
            });

            const result = (await response.json()) as {
                ok?: boolean;
                message?: string;
                errors?: string[];
                fieldErrors?: Record<string, string>;
            };

            if (!response.ok || !result.ok) {
                let newErrors = fieldErrors;
                if (result.fieldErrors) {
                    setFieldErrors(result.fieldErrors);
                    newErrors = result.fieldErrors;
                }

                const firstError =
                    result.errors?.[0] ||
                    result.message ||
                    "Brief gönderilirken bir hata oluştu.";

                setSubmitError(firstError);

                const firstInvalidKey = Object.keys(fieldRefs).find(key => newErrors[key]);
                if (firstInvalidKey) {
                    fieldRefs[firstInvalidKey].current?.focus();
                }

                return;
            }

            setSubmitSuccess("Briefiniz başarıyla gönderildi. Sizinle en kısa sürede iletişime geçeceğiz.");
            setValues(INITIAL_VALUES);
            setFieldErrors({});
        } catch {
            setSubmitError("Bir şeyler ters gitti. Lütfen daha sonra tekrar deneyin.");
        } finally {
            setIsSubmitting(false);
        }
    }

    const primaryCtaLabel = typeof finalCta.primaryCta === 'string' ? finalCta.primaryCta : finalCta.primaryCta.label;
    const primaryCtaHref = typeof finalCta.primaryCta === 'string' ? 'https://wa.me/' : finalCta.primaryCta.href;

    const submitLabel = typeof finalCta.secondaryCta === 'string' ? finalCta.secondaryCta : finalCta.secondaryCta.label;

    return (
        <div id="brief-form">
            <SectionWrapper className="bg-white">
                <ContentContainer className="py-16 md:py-24">
                    <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start max-w-6xl mx-auto">
                    {/* Left: Content & WhatsApp */}
                    <div className="flex flex-col">
                        <SectionHeader
                            title={finalCta.title}
                            description={finalCta.description}
                            align="left"
                            className="mb-10"
                        />

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                                    <span className="text-xs font-bold">1</span>
                                </div>
                                <BodyText className="text-sm font-semibold text-neutral-700">
                                    Klinik operasyonunuza göre özel analiz yapıyoruz.
                                </BodyText>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                                    <span className="text-xs font-bold">2</span>
                                </div>
                                <BodyText className="text-sm font-semibold text-neutral-700">
                                    Herkese aynı şablonu değil, size uygun akışı öneriyoruz.
                                </BodyText>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                                    <span className="text-xs font-bold">3</span>
                                </div>
                                <BodyText className="text-sm font-semibold text-neutral-700">
                                    Önce süreci anlıyor, sonra teknoloji katmanını kuruyoruz.
                                </BodyText>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-neutral-100">
                            <p className="text-sm font-bold text-neutral-900 mb-4">
                                Hızlı temas mı istiyorsunuz?
                            </p>
                            <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer" className="inline-block">
                                <PrimaryButton className="bg-[#25D366] hover:bg-[#20ba59] border-none text-white">
                                    {primaryCtaLabel}
                                </PrimaryButton>
                            </a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-3xl border border-neutral-200 bg-neutral-50/50 p-6 shadow-sm sm:p-10"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <FormField 
                                label="Ad Soyad"
                                error={fieldErrors.fullName}
                                htmlFor="fullName"
                            >
                                <TextInput
                                    ref={fullNameRef}
                                    id="fullName"
                                    value={values.fullName}
                                    onChange={(event) =>
                                        updateField("fullName", event.target.value)
                                    }
                                    placeholder={trBriefPlaceholders.fullName}
                                    autoComplete="name"
                                    aria-invalid={!!fieldErrors.fullName}
                                />
                            </FormField>

                            <FormField 
                                label="İş E-postası"
                                error={fieldErrors.workEmail}
                                htmlFor="workEmail"
                            >
                                <TextInput
                                    ref={workEmailRef}
                                    id="workEmail"
                                    type="email"
                                    value={values.workEmail}
                                    onChange={(event) =>
                                        updateField("workEmail", event.target.value)
                                    }
                                    placeholder={trBriefPlaceholders.workEmail}
                                    autoComplete="email"
                                    aria-invalid={!!fieldErrors.workEmail}
                                />
                            </FormField>

                            <FormField 
                                label="Klinik / Şirket Adı"
                                error={fieldErrors.company}
                                htmlFor="company"
                            >
                                <TextInput
                                    ref={companyRef}
                                    id="company"
                                    value={values.company}
                                    onChange={(event) =>
                                        updateField("company", event.target.value)
                                    }
                                    placeholder={trBriefPlaceholders.company}
                                    autoComplete="organization"
                                    aria-invalid={!!fieldErrors.company}
                                />
                            </FormField>

                            <FormField 
                                label="İhtiyaç Türü"
                                error={fieldErrors.inquiryType}
                                htmlFor="inquiryType"
                            >
                                <SelectInput
                                    ref={inquiryTypeRef}
                                    id="inquiryType"
                                    value={values.inquiryType}
                                    onChange={(event) =>
                                        updateField("inquiryType", event.target.value)
                                    }
                                    aria-invalid={!!fieldErrors.inquiryType}
                                >
                                    <option value="">
                                        {trBriefPlaceholders.inquiryTypePlaceholder}
                                    </option>
                                    {trInquiryOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </SelectInput>
                            </FormField>
                        </div>

                        <FormField 
                            label="Zorlandığınız süreçleri kısaca anlatın"
                            error={fieldErrors.message}
                            htmlFor="message"
                        >
                            <TextArea
                                ref={messageRef}
                                id="message"
                                value={values.message}
                                onChange={(event) => updateField("message", event.target.value)}
                                placeholder={trBriefPlaceholders.message}
                                rows={4}
                                aria-invalid={!!fieldErrors.message}
                            />
                        </FormField>

                        <CheckboxField
                            ref={consentRef}
                            id="consent"
                            checked={values.consent}
                            onChange={(event) => updateField("consent", event.target.checked)}
                            label={trBriefPlaceholders.consentLabel}
                            error={fieldErrors.consent}
                            aria-invalid={!!fieldErrors.consent}
                        />

                        <div className="space-y-4">
                            <PrimaryButton type="submit" disabled={isSubmitting} fullWidth>
                                {isSubmitting ? "Gönderiliyor..." : submitLabel}
                            </PrimaryButton>

                            {finalCta.helperText && (
                                <BodyText className="text-xs text-neutral-500 text-center">
                                    {finalCta.helperText}
                                </BodyText>
                            )}

                            {submitError && (
                                <p role="alert" className="text-sm font-medium text-red-600 text-center">
                                    {submitError}
                                </p>
                            )}

                            {submitSuccess && (
                                <p role="status" className="text-sm font-medium text-green-600 text-center">
                                    {submitSuccess}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </ContentContainer>
        </SectionWrapper>
    </div>
    );
}
