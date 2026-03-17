import * as React from 'react';
import Link from 'next/link';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { BodyText } from '../../../shared/typography/BodyText';
import { CardBase } from '../../../shared/ui/CardBase';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { CheckCircle2, XCircle, ArrowRight, Mail, PhoneCall, FileText, ChevronDown } from 'lucide-react';

// --- Types ---

type CTA = {
    label: string;
    href: string;
};

type HeroContent = {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CTA;
    secondaryCta: CTA;
    helperBullets: string[];
};

type PathItem = {
    title: string;
    bestUse: string;
    whyItWorks: string;
    cta: CTA;
};

type PathsContent = {
    title: string;
    items: PathItem[];
};

type BriefFormContent = {
    title: string;
    description: string;
    helperNotes: string[];
    submitLabel: string;
};

type StepItem = {
    title: string;
    description: string;
};

type NextStepsContent = {
    title: string;
    items: StepItem[];
};

type ColumnContent = {
    title: string;
    points: string[];
};

type VsCallContent = {
    title: string;
    note: string;
    contactColumn: ColumnContent;
    callColumn: ColumnContent;
};

type FitBlock = {
    title: string;
    points: string[];
};

type FitReminderContent = {
    betterFitIf: FitBlock;
    lessUsefulIf: FitBlock;
};

type FaqItem = {
    question: string;
    answer: string;
};

type FaqContent = {
    title: string;
    items: FaqItem[];
};

type SecondaryCtaContent = {
    title: string;
    description: string;
    primaryCta: CTA;
    secondaryLinks: CTA[];
};

// --- Blocks ---

/**
 * 1. Hero Block
 * Context-first positioning.
 */
export function GlobalContactHeroBlock({ content, className }: { content: HeroContent, className?: string }) {
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <div className="mx-auto max-w-4xl text-center">
                    <SectionHeader 
                        eyebrow={content.eyebrow}
                        title={content.title}
                        description={content.description}
                        align="center"
                    />
                    
                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href={content.primaryCta.href} className="w-full sm:w-auto">
                            <PrimaryButton className="w-full sm:w-auto px-10">
                                {content.primaryCta.label}
                            </PrimaryButton>
                        </Link>
                        <Link 
                            href={content.secondaryCta.href}
                            className="text-sm font-bold uppercase tracking-widest text-neutral-500 transition-colors hover:text-neutral-900"
                        >
                            {content.secondaryCta.label}
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10">
                        {content.helperBullets.map((bullet, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-neutral-400">
                                <CheckCircle2 size={16} />
                                <span className="text-xs font-bold uppercase tracking-wider">{bullet}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. Contact Paths Block
 * Three paths: Brief, Call, Email.
 */
export function GlobalContactPathsBlock({ content, className }: { content: PathsContent, className?: string }) {
    const icons = [FileText, PhoneCall, Mail];
    
    return (
        <SectionWrapper className={`bg-neutral-50/50 ${className}`}>
            <ContentContainer className="py-20 md:py-32">
                <h2 className="mb-12 text-center text-sm font-black uppercase tracking-[0.3em] text-neutral-400">
                    {content.title}
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {content.items.map((item, idx) => {
                        const Icon = icons[idx] || Mail;
                        const isPrimary = idx === 0;
                        
                        return (
                            <CardBase 
                                key={idx} 
                                className={`flex flex-col p-8 md:p-10 ${isPrimary ? 'border-neutral-900 bg-white ring-1 ring-neutral-900' : 'bg-white'}`}
                            >
                                <div className={`mb-8 flex h-12 w-12 items-center justify-center rounded-xl ${isPrimary ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="mb-4 text-xl font-bold tracking-tight text-neutral-900">
                                    {item.title}
                                </h3>
                                <div className="mb-6 space-y-4">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Best Use</span>
                                        <BodyText size="sm" className="text-neutral-600 leading-relaxed font-normal">
                                            {item.bestUse}
                                        </BodyText>
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Benefit</span>
                                        <BodyText size="sm" className="max-w-[14rem] text-neutral-500 font-normal">
                                            {item.whyItWorks}
                                        </BodyText>
                                    </div>
                                </div>
                                <div className="mt-auto pt-4">
                                    <Link 
                                        href={item.cta.href}
                                        className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] transition-all hover:gap-3 ${isPrimary ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-900'}`}
                                    >
                                        {item.cta.label}
                                        <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </CardBase>
                        );
                    })}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 3. Brief Form Block (Skeleton/Surface)
 * Holds the actual form via children slot.
 */
export function GlobalContactBriefFormBlock({ content, children, className }: { content: BriefFormContent, children?: React.ReactNode, className?: string }) {
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                    <div className="space-y-10">
                        <SectionHeader 
                            title={content.title}
                            description={content.description}
                            align="left"
                        />
                        
                        <div className="space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-900 border-b border-neutral-100 pb-4">
                                Guidance for Review
                            </h3>
                            <div className="space-y-4">
                                {content.helperNotes.map((note, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
                                            <CheckCircle2 size={12} />
                                        </div>
                                        <span className="text-sm font-medium text-neutral-600 leading-relaxed">{note}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-neutral-50 p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-4 text-neutral-900">
                                <FileText size={20} />
                                <span className="text-sm font-bold uppercase tracking-wider">Workflow Logic First</span>
                            </div>
                            <p className="text-sm text-neutral-500 leading-relaxed font-normal">
                                We review friction points from a logic and operational load perspective. A short context sharing is enough to begin.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Shadow/Decorative element */}
                        <div className="absolute -inset-4 z-0 rounded-[2.5rem] bg-neutral-100/50 blur-xl md:-inset-8" />
                        
                        <div className="relative z-10 w-full rounded-[2rem] border border-neutral-200 bg-white p-6 shadow-2xl shadow-black/5 md:p-12">
                            {children ? (
                                children
                            ) : (
                                <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                                    <div className="mb-4 h-12 w-12 animate-pulse rounded-xl bg-neutral-100" />
                                    <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                                        Form Slot Active
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 4. Next Steps Block
 * What happens after submission.
 */
export function GlobalContactNextStepsBlock({ content, className }: { content: NextStepsContent, className?: string }) {
    return (
        <SectionWrapper className={`bg-neutral-900 text-white ${className}`}>
            <ContentContainer className="py-20 md:py-32">
                <div className="mb-16 max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                        {content.title}
                    </h2>
                </div>
                
                <div className="grid gap-8 md:grid-cols-4">
                    {content.items.map((step, idx) => (
                        <div key={idx} className="group relative">
                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-4xl font-black italic text-white/10 group-hover:text-white/20 transition-colors">
                                    0{idx + 1}
                                </span>
                                {idx < content.items.length - 1 && (
                                    <div className="hidden md:block h-px flex-1 bg-white/10 ml-8" />
                                )}
                            </div>
                            <h4 className="mb-3 text-lg font-bold tracking-tight text-white">{step.title}</h4>
                            <p className="text-sm leading-relaxed text-neutral-400 font-normal">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 5. Contact vs Call Block
 * Distinction between the two paths.
 */
export function GlobalContactVsCallBlock({ content, className }: { content: VsCallContent, className?: string }) {
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900">
                            {content.title}
                        </h2>
                        <p className="mx-auto max-w-2xl text-base text-neutral-500">
                            {content.note}
                        </p>
                    </div>

                    <div className="grid gap-12 md:grid-cols-2 md:items-center">
                        {/* Contact Column */}
                        <div className="rounded-3xl border border-neutral-100 bg-neutral-50/50 p-8 md:p-12">
                            <h3 className="mb-8 text-xl font-bold tracking-tight text-neutral-900">
                                {content.contactColumn.title}
                            </h3>
                            <ul className="space-y-4">
                                {content.contactColumn.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="text-sm font-medium text-neutral-600 leading-snug">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Call Column */}
                        <div className="rounded-3xl border border-neutral-900 bg-white p-8 shadow-2xl shadow-black/5 md:p-12">
                            <h3 className="mb-8 text-xl font-bold tracking-tight text-neutral-900">
                                {content.callColumn.title}
                            </h3>
                            <ul className="space-y-4">
                                {content.callColumn.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <span className="text-sm font-medium text-neutral-900 leading-snug">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 6. Fit Reminder Block
 * Qualification checklist.
 */
export function GlobalContactFitReminderBlock({ content, className }: { content: FitReminderContent, className?: string }) {
    return (
        <SectionWrapper className={`bg-neutral-50/30 ${className}`}>
            <ContentContainer className="py-20 md:py-32">
                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Better Fit If */}
                    <CardBase className="border-none bg-neutral-100/50 p-8 md:p-12">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-900 text-white">
                                <CheckCircle2 size={20} />
                            </div>
                            <h3 className="text-lg font-bold tracking-tight text-neutral-900">{content.betterFitIf.title}</h3>
                        </div>
                        <ul className="space-y-4">
                            {content.betterFitIf.points.map((point, idx) => (
                                <li key={idx} className="flex items-center gap-3 border-b border-neutral-200/50 pb-4 last:border-0 last:pb-0">
                                    <span className="text-sm font-semibold text-neutral-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </CardBase>

                    {/* Less Useful If */}
                    <CardBase className="border-none bg-white p-8 md:p-12">
                        <div className="mb-8 flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
                                <XCircle size={20} />
                            </div>
                            <h3 className="text-lg font-bold tracking-tight text-neutral-900">{content.lessUsefulIf.title}</h3>
                        </div>
                        <ul className="space-y-4">
                            {content.lessUsefulIf.points.map((point, idx) => (
                                <li key={idx} className="flex items-center gap-3 border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
                                    <span className="text-sm font-medium text-neutral-400">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 7. FAQ Block
 * Micro Q&A for the contact page.
 */
export function GlobalContactFaqBlock({ content, className }: { content: FaqContent, className?: string }) {
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <div className="mx-auto max-w-3xl">
                    <h2 className="mb-12 text-center text-sm font-black uppercase tracking-[0.3em] text-neutral-400">
                        {content.title}
                    </h2>
                    <div className="space-y-6">
                        {content.items.map((item, idx) => (
                            <div key={idx} className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
                                <h4 className="mb-3 text-base font-bold tracking-tight text-neutral-900 flex items-center justify-between">
                                    {item.question}
                                    <ChevronDown size={16} className="text-neutral-300" />
                                </h4>
                                <p className="text-sm leading-relaxed text-neutral-500 font-normal">
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 8. Secondary CTA Block
 * Alternatives for those who don't fill the form.
 */
export function GlobalContactSecondaryCtaBlock({ content, className }: { content: SecondaryCtaContent, className?: string }) {
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="mb-20 md:mb-32">
                <CardBase className="bg-neutral-900 p-10 text-center text-white md:p-16">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                            {content.title}
                        </h2>
                        <p className="mb-10 text-base text-neutral-400 font-normal">
                            {content.description}
                        </p>
                        
                        <div className="flex flex-col items-center justify-center gap-8">
                            <Link href={content.primaryCta.href} className="w-full sm:w-auto">
                                <PrimaryButton className="w-full sm:w-auto px-10">
                                    {content.primaryCta.label}
                                </PrimaryButton>
                            </Link>
                            
                            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                                {content.secondaryLinks.map((link, idx) => (
                                    <Link 
                                        key={idx}
                                        href={link.href}
                                        className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
