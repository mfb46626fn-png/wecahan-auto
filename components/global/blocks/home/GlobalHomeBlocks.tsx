"use client";

import * as React from 'react';
import { useState, useRef } from "react";
import Link from 'next/link';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { SectionEyebrow } from '../../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../../shared/typography/SectionTitle';
import { SectionDescription } from '../../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { CheckboxField } from '../../../shared/forms/CheckboxField';
import { FormField } from '../../../shared/forms/FormField';
import { SelectInput } from '../../../shared/forms/SelectInput';
import { TextArea } from '../../../shared/forms/TextArea';
import { TextInput } from '../../../shared/forms/TextInput';
import { 
    CheckCircle2, 
    Search, 
    Settings, 
    ShieldCheck, 
    Activity, 
    AlertCircle, 
    Target, 
    ArrowRight, 
    PhoneCall, 
    FileText 
} from 'lucide-react';
import { globalInquiryOptions } from "../../../../lib/brief/inquiry-options";
import { globalBriefPlaceholders } from "../../../../lib/brief/placeholders";
import { globalHomeContent } from '../../../../content/global/home';

type CtaConfig = string | { label: string; href: string };

/**
 * 1. HeroBlockGlobal
 */
export interface HeroBlockGlobalProps {
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

export function HeroBlockGlobal({ content, className }: HeroBlockGlobalProps) {
    const {
        eyebrow,
        title,
        description,
        primaryCta,
        secondaryCta,
        helperText,
    } = content;

    const resolveCtaLabel = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const outcomeItems = [
        { icon: <Search size={18} className="text-neutral-400" />, label: "Workflow Review" },
        { icon: <Settings size={18} className="text-neutral-400" />, label: "Custom Setup" },
        { icon: <Activity size={18} className="text-neutral-400" />, label: "Maintenance" },
        { icon: <ShieldCheck size={18} className="text-neutral-400" />, label: "Expansion" },
    ];

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="flex flex-col items-center text-center py-12 md:py-16 lg:py-20">
                {eyebrow && (
                    <SectionEyebrow className="mb-4">
                        {eyebrow}
                    </SectionEyebrow>
                )}
                
                {title && (
                    <SectionTitle size="lg" className="mb-6 max-w-4xl tracking-tight leading-[1.1]">
                        {title}
                    </SectionTitle>
                )}
                
                {description && (
                    <SectionDescription maxWidth="lg" className="mb-10 max-w-2xl text-neutral-600 text-lg leading-relaxed">
                        {description}
                    </SectionDescription>
                )}
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    {primaryCta && (
                        <Link href="/book-a-call" className="w-full sm:w-auto">
                            <PrimaryButton className="w-full min-w-[200px] !px-8 !py-3 font-bold uppercase tracking-tight shadow-lg shadow-black/5">
                                {resolveCtaLabel(primaryCta)}
                            </PrimaryButton>
                        </Link>
                    )}
                    
                    {secondaryCta && (
                        <Link href="/contact" className="w-full sm:w-auto">
                            <SecondaryButton className="w-full min-w-[200px] !px-8 !py-3 font-bold uppercase tracking-tight bg-white border-neutral-200">
                                {resolveCtaLabel(secondaryCta)}
                            </SecondaryButton>
                        </Link>
                    )}
                </div>

                {helperText && (
                    <p className="mt-8 text-sm font-semibold text-neutral-400 tracking-widest uppercase">
                        {helperText}
                    </p>
                )}

                {/* Operational Outcome Strip */}
                <div className="mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 w-full max-w-5xl border-t border-neutral-100 pt-12">
                    {outcomeItems.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">
                                {item.icon}
                            </div>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. GlobalServicesBlock
 */
interface ServiceItem {
    title: string;
    description: string;
    label?: string;
}

interface ServicesContent {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
}

export interface GlobalServicesBlockProps {
    content: ServicesContent;
    frictionsContent?: ServicesContent;
    className?: string;
}

export function GlobalServicesBlock({ content, frictionsContent, className }: GlobalServicesBlockProps) {
    const services = content;
    const frictions = frictionsContent || globalHomeContent.frictions;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-8 md:py-12">
                {/* 1. Core Operational Frictions Section */}
                {frictions && (
                    <div className="mb-16 lg:mb-24">
                        <SectionHeader
                            align="center"
                            eyebrow={frictions.eyebrow}
                            title={frictions.title}
                            description={frictions.description}
                        />

                        <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {frictions.items.map((item, index) => (
                                <CardBase 
                                    key={index} 
                                    className="flex h-full flex-col p-6 md:p-8 bg-neutral-50/50 border border-neutral-100/80 shadow-none grayscale hover:grayscale-0 transition-all duration-300"
                                >
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
                                        <AlertCircle size={20} />
                                    </div>
                                    <h3 className="mb-3 text-lg font-bold text-neutral-800">
                                        {item.title}
                                    </h3>
                                    <BodyText className="text-neutral-500 text-sm leading-relaxed font-medium">
                                        {item.description}
                                    </BodyText>
                                </CardBase>
                            ))}
                        </div>
                    </div>
                )}

                {/* 2. Service Pillars Section */}
                <div className="border-t border-neutral-100 pt-16 md:pt-20 text-center">
                    <SectionHeader
                        align="center"
                        eyebrow={services.eyebrow}
                        title={services.title}
                        description={services.description}
                    />

                    <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.items.map((item, index) => (
                            <CardBase 
                                key={index} 
                                className="flex h-full flex-col p-6 md:p-8 bg-white border border-neutral-100 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-sm self-center md:self-start">
                                    <Target size={24} />
                                </div>
                                {item.label && (
                                    <span className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 text-center md:text-left">
                                        {item.label}
                                    </span>
                                )}
                                <h3 className="mb-3 text-lg font-bold text-neutral-900 text-center md:text-left">
                                    {item.title}
                                </h3>
                                <BodyText className="text-neutral-600 leading-relaxed font-medium text-center md:text-left">
                                    {item.description}
                                </BodyText>
                            </CardBase>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 3. GlobalWorkflowBlock
 */
interface WorkflowItem {
    step: string;
    title: string;
    description: string;
}

interface WorkflowContent {
    eyebrow: string;
    title: string;
    description: string;
    items: WorkflowItem[];
}

interface BenefitItem {
    title: string;
    description: string;
}

interface BenefitsContent {
    eyebrow: string;
    title: string;
    description: string;
    items: BenefitItem[];
}

export interface GlobalWorkflowBlockProps {
    content: WorkflowContent;
    benefitsContent?: BenefitsContent;
    className?: string;
}

export function GlobalWorkflowBlock({ content, benefitsContent, className }: GlobalWorkflowBlockProps) {
    const workflow = content;
    const benefits = benefitsContent || globalHomeContent.benefits;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-16 border-t border-neutral-100 bg-neutral-50/50">
                
                {/* 1. Why This Model Works Section */}
                {benefits && (
                    <div className="mb-16 lg:mb-24">
                        <SectionHeader
                            align="center"
                            eyebrow={benefits.eyebrow}
                            title={benefits.title}
                            description={benefits.description}
                        />

                        <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {benefits.items.map((item, index) => (
                                <CardBase 
                                    key={index} 
                                    className="flex h-full flex-col p-6 md:p-8 bg-white border border-neutral-100 shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 text-neutral-900 ring-4 ring-neutral-100/50">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <h3 className="mb-3 text-lg font-bold text-neutral-900">
                                        {item.title}
                                    </h3>
                                    <BodyText className="text-neutral-600 leading-relaxed font-medium">
                                        {item.description}
                                    </BodyText>
                                </CardBase>
                            ))}
                        </div>
                    </div>
                )}

                {/* 2. How We Work Section */}
                <div className="pt-16 lg:pt-20 border-t border-neutral-200/60">
                    <SectionHeader
                        align="center"
                        eyebrow={workflow.eyebrow}
                        title={workflow.title}
                        description={workflow.description}
                    />

                    <div className="mt-12 md:mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {workflow.items.map((item, index) => (
                            <div key={index} className="relative flex flex-col items-center text-center group">
                                {/* Connector Line (Desktop Only) */}
                                {index < workflow.items.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-3rem)] h-px bg-neutral-200 z-0" />
                                )}
                                
                                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white border border-neutral-200 text-2xl font-black text-neutral-900 shadow-sm group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                                    {item.step}
                                </div>
                                <h3 className="mb-3 text-lg font-bold text-neutral-900">
                                    {item.title}
                                </h3>
                                <BodyText className="text-neutral-500 text-sm leading-relaxed max-w-[200px]">
                                    {item.description}
                                </BodyText>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center">
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-300">
                            <span>Analysis</span>
                            <ArrowRight size={10} />
                            <span>Construction</span>
                            <ArrowRight size={10} />
                            <span>Validation</span>
                            <ArrowRight size={10} />
                            <span>Maintenance</span>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 4. GlobalBriefFormBlock
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

type GlobalBriefFormBlockProps = {
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

export function GlobalBriefFormBlock({
    content,
}: GlobalBriefFormBlockProps) {
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
            setSubmitError("You must agree before submitting this brief.");
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
                    siteFamily: "global",
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
            <ContentContainer className="py-16 md:py-24">
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div className="space-y-12">
                        <SectionHeader
                            eyebrow={content.eyebrow}
                            title={content.title}
                            description={content.description}
                            align="left"
                            className="max-w-xl"
                        />

                        <div className="space-y-10">
                            <div>
                                <h3 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-neutral-900 border-b border-neutral-100 pb-4">
                                    Define Your Next Step
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-white">
                                            <PhoneCall size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">Book a Discovery Call</h4>
                                            <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
                                                Best if you have complex or multi-layered operational needs and prefer a direct consultation.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
                                            <FileText size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-neutral-400 uppercase tracking-wide">Send Workflow Brief</h4>
                                            <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
                                                Start here to document your current bottlenecks (onboarding, chasing, visibility) for our review.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-neutral-900 border-b border-neutral-100 pb-4">
                                    Ideal Fit for This Step
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        "Accounting firms with growing recurring admin load",
                                        "Teams struggling with manual document chase cycles",
                                        "Inconsistent or bottlenecked client onboarding",
                                        "Lack of clear ownership/visibility over task stages"
                                    ].map((fit, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 size={16} className="text-neutral-300" />
                                            <span className="text-sm font-medium text-neutral-600">{fit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-6 -left-6 z-0 hidden lg:block h-32 w-32 rounded-3xl bg-neutral-50" />
                        
                        <form
                            onSubmit={handleSubmit}
                            className="relative z-10 space-y-6 rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-xl shadow-black/[0.02] sm:p-10"
                        >
                            <div className="mb-8 border-b border-neutral-50 pb-8">
                                <h3 className="text-xl font-bold tracking-tight text-neutral-900 uppercase flex items-center gap-3">
                                    Submit Workflow Brief
                                    <ArrowRight size={20} className="text-neutral-300" />
                                </h3>
                                <p className="mt-2 text-sm text-neutral-500">
                                    Fill out the following details to begin our operational review.
                                </p>
                            </div>

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
                                        placeholder={globalBriefPlaceholders.fullName}
                                        autoComplete="name"
                                        aria-invalid={!!fieldErrors.fullName}
                                        aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
                                        className="!bg-neutral-50 border-transparent focus:bg-white"
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
                                        placeholder={globalBriefPlaceholders.workEmail}
                                        autoComplete="email"
                                        aria-invalid={!!fieldErrors.workEmail}
                                        aria-describedby={fieldErrors.workEmail ? "workEmail-error" : undefined}
                                        className="!bg-neutral-50 border-transparent focus:bg-white"
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
                                        placeholder={globalBriefPlaceholders.company}
                                        autoComplete="organization"
                                        aria-invalid={!!fieldErrors.company}
                                        aria-describedby={fieldErrors.company ? "company-error" : undefined}
                                        className="!bg-neutral-50 border-transparent focus:bg-white"
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
                                        className="!bg-neutral-50 border-transparent focus:bg-white"
                                    >
                                        <option value="">
                                            {globalBriefPlaceholders.inquiryTypePlaceholder}
                                        </option>
                                        {globalInquiryOptions.map((option) => (
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
                                    placeholder={globalBriefPlaceholders.message}
                                    rows={5}
                                    aria-invalid={!!fieldErrors.message}
                                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                                    className="!bg-neutral-50 border-transparent focus:bg-white"
                                />
                            </FormField>

                            <CheckboxField
                                ref={consentRef}
                                id="consent"
                                checked={values.consent}
                                onChange={(event) => updateField("consent", event.target.checked)}
                                label={globalBriefPlaceholders.consentLabel}
                                error={fieldErrors.consent}
                                aria-invalid={!!fieldErrors.consent}
                            />

                            <div className="space-y-6 pt-4">
                                <PrimaryButton 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full !py-5 uppercase font-bold tracking-widest text-base shadow-xl shadow-black/10"
                                >
                                    {isSubmitting ? "Sending..." : content.submitLabel}
                                </PrimaryButton>

                                <div className="space-y-2">
                                    {content.helperText ? (
                                        <BodyText className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                                            {content.helperText}
                                        </BodyText>
                                    ) : null}

                                    {content.privacyNote ? (
                                        <BodyText className="text-[10px] text-neutral-400 leading-tight">
                                            {content.privacyNote}
                                        </BodyText>
                                    ) : null}
                                </div>

                                {submitError ? (
                                    <p role="alert" className="text-sm font-bold text-red-600 bg-red-50 p-4 rounded-xl border border-red-100">
                                        {submitError}
                                    </p>
                                ) : null}

                                {submitSuccess ? (
                                    <div role="status" className="bg-green-50 p-6 rounded-2xl border border-green-100">
                                        <p className="text-base font-bold text-green-700 uppercase tracking-wide mb-2">Success</p>
                                        <p className="text-sm text-green-600 font-medium">
                                            {submitSuccess}
                                        </p>
                                    </div>
                                ) : null}
                            </div>
                        </form>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 5. GlobalFinalCtaBlock
 */
export interface GlobalFinalCtaBlockProps {
    content: {
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        helperText?: string;
    };
    className?: string;
}

export function GlobalFinalCtaBlock({ content, className }: GlobalFinalCtaBlockProps) {
    const { title, description, primaryCta, secondaryCta, helperText } = content;

    const resolveCtaLabel = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const resolveCtaHref = (cta: CtaConfig) => {
        return typeof cta === 'string' ? '#' : cta.href;
    };

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24">
                <div className="relative overflow-hidden flex flex-col p-10 md:p-16 bg-[#0A0A0A] border border-white/10 shadow-3xl rounded-[2.5rem]">
                    {/* Decorative Gradient Overlay */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-white/[0.03] blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-black blur-[80px] pointer-events-none" />
                    
                    <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="space-y-6">
                            <SectionTitle
                                size="lg"
                                className="text-white max-w-2xl tracking-tight leading-[1.05] font-bold"
                            >
                                {title}
                            </SectionTitle>
                            
                            <SectionDescription
                                maxWidth="lg"
                                className="mb-0 text-neutral-400 max-w-xl leading-relaxed text-lg font-medium opacity-90"
                            >
                                {description}
                            </SectionDescription>
                        </div>

                        <div className="flex flex-col gap-4 p-3 bg-white/[0.04] rounded-[2.5rem] border border-white/10 backdrop-blur-2xl">
                            <Link 
                                href="/book-a-call"
                                className="group flex items-center justify-between p-7 rounded-[1.8rem] bg-white transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-black/20"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-lg shadow-black/10">
                                        <PhoneCall size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-[14px] font-bold text-neutral-900 tracking-tight">
                                            {resolveCtaLabel(primaryCta)}
                                        </h4>
                                        <p className="text-[11px] text-neutral-500 mt-1 font-semibold uppercase tracking-wider">Structured 15-min consultation</p>
                                    </div>
                                </div>
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent group-hover:text-neutral-900 transition-all">
                                    <ArrowRight size={18} className="text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all" />
                                </div>
                            </Link>

                            {secondaryCta && (
                                <Link 
                                    href="/contact"
                                    className="group flex items-center justify-between p-7 rounded-[1.8rem] bg-white/[0.03] border border-white/10 transition-all hover:bg-white/[0.07] hover:border-white/20"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-neutral-300 border border-white/10 group-hover:bg-white/10 group-hover:text-white transition-all">
                                            <FileText size={22} />
                                        </div>
                                        <div>
                                            <h4 className="text-[14px] font-bold text-white tracking-tight">
                                                {resolveCtaLabel(secondaryCta)}
                                            </h4>
                                            <p className="text-[11px] text-neutral-400 mt-1 font-semibold uppercase tracking-wider opacity-80">Submit your operational brief</p>
                                        </div>
                                    </div>
                                    <ArrowRight size={20} className="text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </Link>
                            )}
                        </div>
                    </div>

                    {helperText && (
                        <div className="mt-14 pt-8 border-t border-white/10 relative z-10 flex items-center justify-between">
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500/80">
                                {helperText}
                            </p>
                        </div>
                    )}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
