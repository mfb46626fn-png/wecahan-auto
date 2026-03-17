"use client";

import * as React from 'react';
import Link from 'next/link';
import { useState, useRef } from "react";
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
    Check, 
    Activity, 
    ArrowDown, 
    Target, 
    Eye, 
    Cog, 
    Users, 
    Briefcase, 
    AlertCircle, 
    Zap, 
    CheckCircle2 
} from 'lucide-react';
import { centerInquiryOptions } from "../../../../lib/brief/inquiry-options";
import { centerBriefPlaceholders } from "../../../../lib/brief/placeholders";

/**
 * 1. CenterHomeHeroBlock
 */
type CtaConfig = string | { label: string; href: string };

export interface CenterHomeHeroBlockProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        trustLine?: string;
    };
    className?: string;
}

export function CenterHomeHeroBlock({ content, className }: CenterHomeHeroBlockProps) {
    const {
        eyebrow,
        title,
        description,
        primaryCta,
        secondaryCta,
        trustLine,
    } = content;

    const resolveCta = (cta: CtaConfig) => {
        if (typeof cta === 'string') {
            return {
                label: cta,
                href: '#contact',
            };
        }
        return cta;
    };

    const primary = resolveCta(primaryCta);
    const secondary = secondaryCta ? resolveCta(secondaryCta) : null;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="relative py-16 md:py-20 lg:py-24">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {eyebrow && (
                        <div className="mb-6">
                            <SectionEyebrow className="!text-slate-400 font-bold tracking-[0.2em] uppercase">
                                {eyebrow}
                            </SectionEyebrow>
                        </div>
                    )}
                    
                    {title && (
                        <SectionTitle size="lg" className="mb-8 leading-[1.1] !text-slate-900 font-black tracking-tight">
                            {title}
                        </SectionTitle>
                    )}
                    
                    {description && (
                        <SectionDescription maxWidth="lg" className="mb-12 !text-slate-500 font-medium leading-relaxed">
                            {description}
                        </SectionDescription>
                    )}
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        {primary && (
                            <Link href={primary.href} className="w-full sm:w-auto">
                                <PrimaryButton className="w-full sm:w-auto !px-10 !py-4 font-bold uppercase tracking-tight shadow-2xl shadow-slate-200">
                                    {primary.label}
                                </PrimaryButton>
                            </Link>
                        )}
                        
                        {secondary && (
                            <Link href={secondary.href} className="w-full sm:w-auto">
                                <SecondaryButton className="w-full sm:w-auto !px-10 !py-4 font-bold uppercase tracking-tight border-slate-200 text-slate-600 hover:bg-slate-50">
                                    {secondary.label}
                                </SecondaryButton>
                            </Link>
                        )}
                    </div>

                    {trustLine && (
                        <div className="mt-12 flex items-center gap-3">
                            <div className="h-px w-8 bg-slate-200" />
                            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
                                {trustLine}
                            </p>
                            <div className="h-px w-8 bg-slate-200" />
                        </div>
                    )}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. CenterHomeWhatWeAutomateBlock
 */
interface ServiceCategory {
    title: string;
    description: string;
    examples: string[];
}

export interface CenterHomeWhatWeAutomateBlockProps {
    content: {
        title: string;
        description: string;
        categories: ServiceCategory[];
    };
    className?: string;
}

export function CenterHomeWhatWeAutomateBlock({ content, className }: CenterHomeWhatWeAutomateBlockProps) {
    const { title, description, categories } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-20">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-300 group bg-white/50 backdrop-blur-sm"
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-black transition-colors">
                                    {category.title}
                                </h3>
                                <BodyText className="text-slate-500 mb-8 leading-relaxed">
                                    {category.description}
                                </BodyText>
                                
                                <div className="mt-auto pt-6 border-t border-slate-50">
                                    <ul className="space-y-3">
                                        {category.examples.map((example, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                                                <Check className="h-3.5 w-3.5 text-slate-300 mt-0.5 shrink-0" />
                                                <span>{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 3. CenterHomeHowWeWorkBlock
 */
interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

export interface CenterHomeHowWeWorkBlockProps {
    content: {
        title: string;
        description: string;
        steps: ProcessStep[];
    };
    className?: string;
}

export function CenterHomeHowWeWorkBlock({ content, className }: CenterHomeHowWeWorkBlockProps) {
    const { title, description, steps } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-20 bg-slate-50/40 rounded-[3rem]">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 md:gap-4 lg:grid-cols-4 md:grid-cols-2 relative">
                    <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-px bg-slate-200 -z-10" />

                    {steps.map((item, index) => (
                        <div key={index} className="relative group">
                            <CardBase 
                                size="lg" 
                                className="flex flex-col h-full bg-white border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 rounded-[2.5rem] p-8"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white shadow-lg shadow-black/10 transition-transform group-hover:scale-110">
                                    {item.step}
                                </div>
                                
                                <h3 className="mb-4 text-xl font-bold text-slate-900 tracking-tight">
                                    {item.title}
                                </h3>
                                
                                <BodyText className="text-slate-500 leading-relaxed font-medium">
                                    {item.description}
                                </BodyText>
                                
                                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2">
                                    <div className="h-1 w-1 rounded-full bg-slate-300" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                                        Phase {item.step}
                                    </span>
                                </div>
                            </CardBase>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 4. CenterHomeExampleWorkflowScenariosBlock
 */
interface WorkflowScenario {
    title: string;
    problem: string;
    logic: string;
    flow: string[];
}

export interface CenterHomeExampleWorkflowScenariosBlockProps {
    content: {
        title: string;
        description: string;
        scenarios: WorkflowScenario[];
    };
    className?: string;
}

export function CenterHomeExampleWorkflowScenariosBlock({ content, className }: CenterHomeExampleWorkflowScenariosBlockProps) {
    const { title, description, scenarios } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-20">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    {scenarios.map((scenario, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="group flex flex-col h-full bg-white border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 rounded-[3rem] p-8 md:p-12 overflow-hidden relative"
                        >
                            <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                                <Activity size={160} strokeWidth={1} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                                        Scenario 0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                                    {scenario.title}
                                </h3>

                                <div className="space-y-6 mb-12">
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problem</h4>
                                        <p className="text-[13px] font-bold text-slate-500 italic leading-relaxed">
                                            "{scenario.problem}"
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Automation Logic</h4>
                                        <p className="text-[14px] font-black text-slate-700 leading-snug">
                                            {scenario.logic}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 relative">
                                    <div className="absolute left-[11px] top-4 bottom-4 w-px bg-slate-100" />

                                    {scenario.flow.map((step, sIndex) => (
                                        <div key={sIndex} className="relative flex items-center gap-4 group/step">
                                            <div className="relative flex items-center justify-center h-6 w-6 rounded-full bg-white border-2 border-slate-100 text-[10px] font-black text-slate-400 z-10 group-hover:border-slate-900 group-hover:text-slate-900 transition-colors duration-300">
                                                {sIndex + 1}
                                            </div>
                                            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 pt-0.5">
                                                {step}
                                            </span>
                                            {sIndex < scenario.flow.length - 1 && (
                                                <div className="absolute left-[10px] top-6 opacity-0 group-hover/step:opacity-100 transition-opacity">
                                                    <ArrowDown size={12} className="text-slate-900" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto pt-10 border-t border-slate-50 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`h-1 w-1 rounded-full ${index === i - 1 ? 'bg-slate-900' : 'bg-slate-200'}`} />
                                    ))}
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">
                                    Operational Flow Design
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 5. CenterHomeWhyThisStructureWorksBlock
 */
interface BenefitCard {
    title: string;
    description: string;
}

export interface CenterHomeWhyThisStructureWorksBlockProps {
    content: {
        title: string;
        description: string;
        benefits: BenefitCard[];
    };
    className?: string;
}

export function CenterHomeWhyThisStructureWorksBlock({ content, className }: CenterHomeWhyThisStructureWorksBlockProps) {
    const { title, description, benefits } = content;

    const getIcon = (index: number) => {
        switch (index) {
            case 0: return <Target className="h-6 w-6 text-slate-900" />;
            case 1: return <Eye className="h-6 w-6 text-slate-900" />;
            case 2: return <Cog className="h-6 w-6 text-slate-900" />;
            case 3: return <Users className="h-6 w-6 text-slate-900" />;
            default: return <Target className="h-6 w-6 text-slate-900" />;
        }
    };

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-20 bg-slate-900 rounded-[3rem] text-white">
                <SectionHeader
                    title={<span className="text-white">{title}</span>}
                    description={<span className="text-slate-400">{description}</span>}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl lg:mx-auto">
                    {benefits.map((benefit, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-500 rounded-[2rem] p-8 group"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                                {getIcon(index)}
                            </div>
                            
                            <h3 className="mb-4 text-lg font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                                {benefit.title}
                            </h3>
                            
                            <BodyText className="text-slate-400 text-sm leading-relaxed font-medium">
                                {benefit.description}
                            </BodyText>

                            <div className="mt-auto pt-8 flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-slate-600 group-hover:bg-slate-400 transition-colors" />
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 group-hover:text-slate-400 transition-colors">
                                    Operational Outcome
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 6. CenterHomeSelectedUseCaseExamplesBlock
 */
interface UseCaseCard {
    context: string;
    problem: string;
    logic: string;
    expectedClarity: string;
}

export interface CenterHomeSelectedUseCaseExamplesBlockProps {
    content: {
        title: string;
        description: string;
        useCases: UseCaseCard[];
    };
    className?: string;
}

export function CenterHomeSelectedUseCaseExamplesBlock({ content, className }: CenterHomeSelectedUseCaseExamplesBlockProps) {
    const { title, description, useCases } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-20">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
                    {useCases.map((useCase, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full border-slate-100 bg-slate-50/30 hover:bg-white hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 rounded-[2.5rem] p-8 md:p-10 group"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2.5 bg-slate-900 rounded-xl text-white shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform">
                                    <Briefcase size={18} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                                    {useCase.context}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <div className="relative pl-6 border-l-2 border-slate-100 group-hover:border-slate-200 transition-colors">
                                    <div className="absolute -left-[9px] top-0 p-1 bg-white rounded-full">
                                        <AlertCircle size={14} className="text-slate-300" />
                                    </div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Contextual Problem</h4>
                                    <p className="text-[14px] font-bold text-slate-500 leading-relaxed italic">
                                        "{useCase.problem}"
                                    </p>
                                </div>

                                <div className="relative pl-6 border-l-2 border-slate-100 group-hover:border-slate-200 transition-colors">
                                    <div className="absolute -left-[9px] top-0 p-1 bg-white rounded-full">
                                        <Zap size={14} className="text-slate-300" />
                                    </div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Applied Logic</h4>
                                    <BodyText className="text-[14px] font-black text-slate-700 leading-snug">
                                        {useCase.logic}
                                    </BodyText>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-100/50">
                                    <div className="flex items-center gap-2 mb-3">
                                        <CheckCircle2 size={16} className="text-slate-900" />
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900">Expected Outcome</h4>
                                    </div>
                                    <p className="text-[13px] font-bold text-slate-500 leading-relaxed">
                                        {useCase.expectedClarity}
                                    </p>
                                </div>
                            </div>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border border-slate-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-pulse" />
                        <p className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400">
                            Custom layouts available for unique operational workflows
                        </p>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 7. CenterHomeContactBriefSectionBlock
 */
export interface CenterHomeContactBriefSectionBlockProps {
    content: {
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta: CtaConfig;
        helperText: string;
    };
    className?: string;
}

export function CenterHomeContactBriefSectionBlock({ content, className }: CenterHomeContactBriefSectionBlockProps) {
    const { title, description, primaryCta, secondaryCta, helperText } = content;

    const resolveCta = (cta: CtaConfig, defaultHref: string) => {
        if (typeof cta === 'string') {
            return {
                label: cta,
                href: defaultHref,
            };
        }
        return cta;
    };

    const primary = resolveCta(primaryCta, '/iletisim');
    const secondary = resolveCta(secondaryCta, '#brief');

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24 lg:py-28">
                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="relative overflow-hidden bg-white border-slate-100 shadow-2xl shadow-slate-200/60 rounded-[3rem] p-10 md:p-20 text-center"
                    >
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

                        <SectionHeader
                            title={title}
                            description={description}
                            align="center"
                            maxWidth="lg"
                            className="mb-12"
                        />

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                            {primary && (
                                <Link href={primary.href} className="w-full sm:w-auto">
                                    <PrimaryButton className="w-full sm:w-auto !px-12 !py-4 font-bold uppercase tracking-tight shadow-xl shadow-slate-200">
                                        {primary.label}
                                    </PrimaryButton>
                                </Link>
                            )}
                            
                            {secondary && (
                                <Link href={secondary.href} className="w-full sm:w-auto">
                                    <SecondaryButton className="w-full sm:w-auto !px-12 !py-4 font-bold uppercase tracking-tight border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors">
                                        {secondary.label}
                                    </SecondaryButton>
                                </Link>
                            )}
                        </div>

                        {helperText && (
                            <div className="flex flex-col items-center gap-3">
                                <div className="h-px w-12 bg-slate-100" />
                                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                                    {helperText}
                                </p>
                            </div>
                        )}
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 8. HeroBlockCenter
 */
export type HeroBlockCenterProps = {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        helperText?: string;
    };
    className?: string;
};

export function HeroBlockCenter({ content, className }: HeroBlockCenterProps) {
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

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="flex flex-col items-center text-center py-12 md:py-16 lg:py-20">
                {eyebrow && (
                    <SectionEyebrow className="mb-4">
                        {eyebrow}
                    </SectionEyebrow>
                )}
                
                {title && (
                    <SectionTitle size="lg" className="mb-6 max-w-3xl">
                        {title}
                    </SectionTitle>
                )}
                
                {description && (
                    <SectionDescription maxWidth="lg" className="mb-10 max-w-2xl text-gray-500">
                        {description}
                    </SectionDescription>
                )}
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    {primaryCta && (
                        <PrimaryButton className="w-full sm:w-auto !px-8 !py-3">
                            {resolveCtaLabel(primaryCta)}
                        </PrimaryButton>
                    )}
                    
                    {secondaryCta && (
                        <SecondaryButton className="w-full sm:w-auto !px-8 !py-3">
                            {resolveCtaLabel(secondaryCta)}
                        </SecondaryButton>
                    )}
                </div>

                {helperText && (
                    <p className="mt-6 text-sm text-gray-400">
                        {helperText}
                    </p>
                )}
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 9. CenterWorkflowBlock
 */
interface WorkflowItemContent {
    step: string;
    title: string;
    description: string;
}

export interface CenterWorkflowBlockProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        items: WorkflowItemContent[];
    };
    className?: string;
}

export function CenterWorkflowBlock({ content, className }: CenterWorkflowBlockProps) {
    const { eyebrow, title, description, items } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-16 bg-gray-50/50 rounded-3xl">
                <SectionHeader
                    align="center"
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />

                <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <CardBase key={index} className="relative flex h-full flex-col p-6 md:p-8 border-transparent shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                                {item.step}
                            </div>
                            <h3 className="mb-3 text-lg font-bold text-gray-900">
                                {item.title}
                            </h3>
                            <BodyText className="text-gray-600">
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
 * 10. CenterServicesBlock
 */
interface ServiceItemContent {
    title: string;
    description: string;
    label?: string;
}

export interface CenterServicesBlockProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        items: ServiceItemContent[];
    };
    className?: string;
}

export function CenterServicesBlock({ content, className }: CenterServicesBlockProps) {
    const { eyebrow, title, description, items } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-16">
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
                                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    {item.label}
                                </span>
                            )}
                            <h3 className="mb-3 text-lg font-bold text-gray-900">
                                {item.title}
                            </h3>
                            <BodyText className="text-gray-600">
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
 * 11. CenterBriefFormBlock
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
                    siteFamily: "center",
                    fullName: values.fullName,
                    workEmail: values.workEmail,
                    company: values.company,
                    inquiryType: values.inquiryType,
                    message: values.message,
                    consent: values.consent,
                }),
            });

            let result: {
                ok?: boolean;
                message?: string;
                errorCode?: string;
                fieldErrors?: Record<string, string>;
                fieldErrorCodes?: Record<string, string>;
                errors?: string[];
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

/**
 * 12. CenterFinalCtaBlock
 */
export interface CenterFinalCtaBlockProps {
    content: {
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        helperText?: string;
    };
    className?: string;
}

export function CenterFinalCtaBlock({ content, className }: CenterFinalCtaBlockProps) {
    const { title, description, primaryCta, secondaryCta, helperText } = content;

    const resolveCtaLabel = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-20">
                <CardBase className="flex flex-col items-center text-center p-8 md:p-12 bg-gray-50 border-gray-100 shadow-sm">
                    <SectionTitle
                        size="lg"
                        className="mb-4 text-gray-900 max-w-2xl"
                    >
                        {title}
                    </SectionTitle>

                    <SectionDescription
                        maxWidth="lg"
                        className="mb-8 text-gray-600 max-w-xl"
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
                        <p className="mt-6 text-sm text-gray-400">
                            {helperText}
                        </p>
                    )}
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
