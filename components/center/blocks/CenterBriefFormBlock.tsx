"use client";

import { useState, useRef } from "react";
import { ContentContainer } from "../../shared/layout/ContentContainer";
import { SectionHeader } from "../../shared/layout/SectionHeader";
import { SectionWrapper } from "../../shared/layout/SectionWrapper";
import { BodyText } from "../../shared/typography/BodyText";
import { CheckboxField } from "../../shared/forms/CheckboxField";
import { FormField } from "../../shared/forms/FormField";
import { SelectInput } from "../../shared/forms/SelectInput";
import { TextArea } from "../../shared/forms/TextArea";
import { TextInput } from "../../shared/forms/TextInput";
import { PrimaryButton } from "../../shared/ui/PrimaryButton";
import { centerInquiryOptions } from "../../../lib/brief/inquiry-options";
import { centerBriefPlaceholders } from "../../../lib/brief/placeholders";

type BriefFormContent = {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    helperText?: string;
    privacyNote?: string;
    successMessage?: string;
};

type CenterBriefFormBlockProps = {
    content: BriefFormContent;
};

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

export function CenterBriefFormBlock({
    content,
}: CenterBriefFormBlockProps) {
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

        // Clear field error if it exists
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
            setSubmitError("You must agree before submitting this brief.");
            setIsSubmitting(false);
            // Focus consent checkbox
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
                    siteFamily: "center",
                    fullName: values.fullName,
                    workEmail: values.workEmail,
                    company: values.company,
                    inquiryType: values.inquiryType,
                    message: values.message,
                    consent: values.consent,
                }),
            });

            // Handle potential empty or non-JSON responses gracefully
            let result: {
                ok?: boolean;
                message?: string;
                errorCode?: string;
                fieldErrors?: Record<string, string>;
                fieldErrorCodes?: Record<string, string>;
                errors?: string[]; // Backward compatibility for legacy arrays if any
            } = {};

            try {
                const text = await response.text();
                if (text) {
                    result = JSON.parse(text);
                }
            } catch (err) {
                console.error("Failed to parse API response", err);
            }

            if (!response.ok || !result.ok) {
                let newErrors = fieldErrors;
                if (result.fieldErrors) {
                    setFieldErrors(result.fieldErrors);
                    newErrors = result.fieldErrors;
                }

                // Robust error message selection: 1. Field-level array, 2. Explicit message, 3. Error code fallback, 4. Generic fallback
                const errorCodeMessages: Record<string, string> = {
                    INVALID_CONTENT_TYPE: "İstek tipi geçersiz. Lütfen tekrar deneyin.",
                    INVALID_JSON: "Gönderim sırasında veri işlenemedi. Lütfen tekrar deneyin.",
                    VALIDATION_ERROR: "Lütfen form alanlarını kontrol edin.",
                };

                const fallbackMessage = result.errorCode 
                    ? (errorCodeMessages[result.errorCode] || "Bir hata oluştu. Lütfen tekrar deneyin.")
                    : "Something went wrong while submitting the brief.";

                const finalError =
                    result.errors?.[0] ||
                    result.message ||
                    fallbackMessage;

                setSubmitError(finalError);
                
                // Focus the first invalid field
                const firstInvalidKey = Object.keys(fieldRefs).find(key => newErrors[key]);
                if (firstInvalidKey) {
                    fieldRefs[firstInvalidKey].current?.focus();
                }
                
                return;
            }

            setSubmitSuccess(
                content.successMessage || "Your brief has been submitted successfully.",
            );
            setValues(INITIAL_VALUES);
            setFieldErrors({});
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitError("Something went wrong while sending your brief.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <SectionWrapper>
            <ContentContainer>
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <SectionHeader
                        eyebrow={content.eyebrow}
                        title={content.title}
                        description={content.description}
                        align="left"
                    />

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <FormField 
                                label="Full name" 
                                error={fieldErrors.fullName}
                                // Add stable ID for error to link with aria-describedby
                                htmlFor="fullName"
                            >
                                <TextInput
                                    ref={fullNameRef}
                                    id="fullName"
                                    value={values.fullName}
                                    onChange={(event) =>
                                        updateField("fullName", event.target.value)
                                    }
                                    placeholder={centerBriefPlaceholders.fullName}
                                    autoComplete="name"
                                    aria-invalid={!!fieldErrors.fullName}
                                    aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
                                />
                            </FormField>

                            <FormField 
                                label="Work email" 
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
                                    placeholder={centerBriefPlaceholders.workEmail}
                                    autoComplete="email"
                                    aria-invalid={!!fieldErrors.workEmail}
                                    aria-describedby={fieldErrors.workEmail ? "workEmail-error" : undefined}
                                />
                            </FormField>

                            <FormField 
                                label="Company"
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
                                    placeholder={centerBriefPlaceholders.company}
                                    autoComplete="organization"
                                    aria-invalid={!!fieldErrors.company}
                                    aria-describedby={fieldErrors.company ? "company-error" : undefined}
                                />
                            </FormField>

                            <FormField 
                                label="Project type"
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
                                    aria-describedby={fieldErrors.inquiryType ? "inquiryType-error" : undefined}
                                >
                                    <option value="">
                                        {centerBriefPlaceholders.inquiryTypePlaceholder}
                                    </option>
                                    {centerInquiryOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </SelectInput>
                            </FormField>
                        </div>

                        <FormField 
                            label="Brief"
                            error={fieldErrors.message}
                            htmlFor="message"
                        >
                            <TextArea
                                ref={messageRef}
                                id="message"
                                value={values.message}
                                onChange={(event) => updateField("message", event.target.value)}
                                placeholder={centerBriefPlaceholders.message}
                                rows={6}
                                aria-invalid={!!fieldErrors.message}
                                aria-describedby={fieldErrors.message ? "message-error" : undefined}
                            />
                        </FormField>

                        <CheckboxField
                            ref={consentRef}
                            id="consent"
                            checked={values.consent}
                            onChange={(event) => updateField("consent", event.target.checked)}
                            label={centerBriefPlaceholders.consentLabel}
                            error={fieldErrors.consent}
                            aria-invalid={!!fieldErrors.consent}
                        />

                        <div className="space-y-3">
                            <PrimaryButton type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : content.submitLabel}
                            </PrimaryButton>

                            {content.helperText ? (
                                <BodyText className="text-sm text-neutral-600">
                                    {content.helperText}
                                </BodyText>
                            ) : null}

                            {content.privacyNote ? (
                                <BodyText className="text-sm text-neutral-500">
                                    {content.privacyNote}
                                </BodyText>
                            ) : null}

                            {submitError ? (
                                <p role="alert" className="text-sm font-medium text-red-600">
                                    {submitError}
                                </p>
                            ) : null}

                            {submitSuccess ? (
                                <p role="status" className="text-sm font-medium text-green-600">
                                    {submitSuccess}
                                </p>
                            ) : null}
                        </div>
                    </form>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}