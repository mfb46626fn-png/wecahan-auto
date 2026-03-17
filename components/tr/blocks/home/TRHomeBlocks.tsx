"use client";

import * as React from 'react';
import { useState, useRef } from "react";
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { SectionEyebrow } from '../../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../../shared/typography/SectionTitle';
import { SectionDescription } from '../../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { FormField } from '../../../shared/forms/FormField';
import { TextInput } from '../../../shared/forms/TextInput';
import { SelectInput } from '../../../shared/forms/SelectInput';
import { TextArea } from '../../../shared/forms/TextArea';
import { CheckboxField } from '../../../shared/forms/CheckboxField';
import { trInquiryOptions } from "../../../../lib/brief/inquiry-options";
import { trBriefPlaceholders } from "../../../../lib/brief/placeholders";

// --- Types ---
type CtaConfig = string | { label: string; href: string };

const resolveCtaLabel = (cta: CtaConfig) => {
    return typeof cta === 'string' ? cta : cta.label;
};

// --- Blocks ---

/**
 * 1. Hero Block TR
 */
export interface HeroBlockTrProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        helperText?: string;
    };
    className?: string;
}

export function HeroBlockTR({ content, className }: HeroBlockTrProps) {
    const {
        eyebrow,
        title,
        description,
        primaryCta,
        secondaryCta,
        helperText,
    } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="flex flex-col items-center text-center py-12 md:py-16 lg:py-20">
                {eyebrow && (
                    <SectionEyebrow className="mb-4">
                        {eyebrow}
                    </SectionEyebrow>
                )}
                
                {title && (
                    <SectionTitle size="lg" className="mb-6 max-w-4xl">
                        {title}
                    </SectionTitle>
                )}
                
                {description && (
                    <SectionDescription maxWidth="lg" className="mb-10 max-w-2xl text-gray-600">
                        {description}
                    </SectionDescription>
                )}
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    {primaryCta && (
                        <PrimaryButton className="w-full sm:w-auto min-w-[200px] !px-8 !py-3">
                            {resolveCtaLabel(primaryCta)}
                        </PrimaryButton>
                    )}
                    
                    {secondaryCta && (
                        <SecondaryButton className="w-full sm:w-auto min-w-[200px] !px-8 !py-3">
                            {resolveCtaLabel(secondaryCta)}
                        </SecondaryButton>
                    )}
                </div>

                {helperText && (
                    <p className="mt-8 text-sm text-gray-500 font-medium">
                        {helperText}
                    </p>
                )}
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. Services Block TR
 */
interface ServiceItem {
    title: string;
    description: string;
    label?: string;
}

export interface TRServicesBlockProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        items: ServiceItem[];
    };
    className?: string;
}

export function TRServicesBlock({ content, className }: TRServicesBlockProps) {
    const { eyebrow, title, description, items } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-8 md:py-12">
                <SectionHeader
                    align="center"
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />

                <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <CardBase key={index} className="flex h-full flex-col p-6 md:p-8">
                            {item.label && (
                                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                                    {item.label}
                                </span>
                            )}
                            <h3 className="mb-3 text-lg font-bold text-neutral-900">
                                {item.title}
                            </h3>
                            <BodyText className="text-neutral-600">
                                {item.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 3. Workflow Block TR
 */
interface WorkflowItem {
    step: string;
    title: string;
    description: string;
}

export interface TRWorkflowBlockProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        items: WorkflowItem[];
    };
    className?: string;
}

export function TRWorkflowBlock({ content, className }: TRWorkflowBlockProps) {
    const { eyebrow, title, description, items } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-16 bg-neutral-50 rounded-2xl md:rounded-3xl border border-neutral-200/60">
                <SectionHeader
                    align="center"
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />

                <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <CardBase key={index} className="relative flex h-full flex-col p-6 md:p-8 bg-white border border-neutral-100 shadow-sm">
                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded bg-neutral-900 text-sm font-bold text-white">
                                {item.step}
                            </div>
                            <h3 className="mb-3 text-lg font-bold text-neutral-900">
                                {item.title}
                            </h3>
                            <BodyText className="text-neutral-600">
                                {item.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 4. Brief Form Block TR
 */
type BriefFormContent = {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    helperText?: string;
    privacyNote?: string;
    successMessage?: string;
};

type TRBriefFormBlockProps = {
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

export function TRBriefFormBlock({
    content,
}: TRBriefFormBlockProps) {
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
                    "Something went wrong while submitting the brief.";

                setSubmitError(firstError);

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
        } catch {
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
                                    placeholder={trBriefPlaceholders.workEmail}
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
                                    placeholder={trBriefPlaceholders.company}
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
                            label="Brief"
                            error={fieldErrors.message}
                            htmlFor="message"
                        >
                            <TextArea
                                ref={messageRef}
                                id="message"
                                value={values.message}
                                onChange={(event) => updateField("message", event.target.value)}
                                placeholder={trBriefPlaceholders.message}
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
                            label={trBriefPlaceholders.consentLabel}
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

/**
 * 5. Final CTA Block TR
 */
export interface TRFinalCtaBlockProps {
    content: {
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        helperText?: string;
    };
    className?: string;
}

export function TRFinalCtaBlock({ content, className }: TRFinalCtaBlockProps) {
    const { title, description, primaryCta, secondaryCta, helperText } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-8 md:py-12">
                <CardBase className="flex flex-col items-center text-center p-8 md:p-12 bg-neutral-100 border-neutral-200">
                    <SectionTitle
                        size="lg"
                        className="mb-4 text-neutral-900 max-w-2xl"
                    >
                        {title}
                    </SectionTitle>

                    <SectionDescription
                        maxWidth="lg"
                        className="mb-8 text-neutral-600 max-w-xl"
                    >
                        {description}
                    </SectionDescription>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <PrimaryButton className="w-full sm:w-auto min-w-[200px]">
                            {resolveCtaLabel(primaryCta)}
                        </PrimaryButton>

                        {secondaryCta && (
                            <SecondaryButton className="w-full sm:w-auto min-w-[200px]">
                                {resolveCtaLabel(secondaryCta)}
                            </SecondaryButton>
                        )}
                    </div>

                    {helperText && (
                        <p className="mt-6 text-sm font-medium text-neutral-500">
                            {helperText}
                        </p>
                    )}
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
