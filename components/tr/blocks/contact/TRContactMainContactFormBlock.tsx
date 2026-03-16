"use client";

import React, { useState, useRef } from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { FormField } from '../../../shared/forms/FormField';
import { TextInput } from '../../../shared/forms/TextInput';
import { SelectInput } from '../../../shared/forms/SelectInput';
import { TextArea } from '../../../shared/forms/TextArea';
import { CheckboxField } from '../../../shared/forms/CheckboxField';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { trContactContent } from '../../../../content/tr/contact';

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
            // Map our form values to the backend expected payload
            const payload = {
                siteFamily: 'tr',
                fullName: values.name,
                workEmail: values.email,
                company: values.company,
                inquiryType: values.inquiryType,
                // Include sector and phone in the message for visibility in backend logs
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
                // Map backend field errors back to our local field names if necessary
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

                // Focus first error field
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
                        {/* Subtle decorative background element */}
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
