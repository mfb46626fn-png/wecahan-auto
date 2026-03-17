"use client";

import { useState, useRef } from "react";
import { ContentContainer } from "../../../shared/layout/ContentContainer";
import { SectionHeader } from "../../../shared/layout/SectionHeader";
import { SectionWrapper } from "../../../shared/layout/SectionWrapper";
import { BodyText } from "../../../shared/typography/BodyText";
import { CheckboxField } from "../../../shared/forms/CheckboxField";
import { FormField } from "../../../shared/forms/FormField";
import { SelectInput } from "../../../shared/forms/SelectInput";
import { TextArea } from "../../../shared/forms/TextArea";
import { TextInput } from "../../../shared/forms/TextInput";
import { PrimaryButton } from "../../../shared/ui/PrimaryButton";
import { globalInquiryOptions } from "../../../../lib/brief/inquiry-options";
import { globalBriefPlaceholders } from "../../../../lib/brief/placeholders";
import { PhoneCall, FileText, CheckCircle2, ArrowRight } from "lucide-react";

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
        } catch {
            setSubmitError("Something went wrong while sending your brief.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <SectionWrapper>
            <ContentContainer className="py-20 md:py-32">
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    {/* Qualification & Guidance Surface */}
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

                    {/* Brief Form Surface */}
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