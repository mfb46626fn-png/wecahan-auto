import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { SectionEyebrow } from '../../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../../shared/typography/SectionTitle';
import { SectionDescription } from '../../../shared/typography/SectionDescription';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import Link from 'next/link';
import { 
    PhoneCall, 
    FileText, 
    Check, 
    X, 
    ArrowRight, 
    Clock, 
    User, 
    Lightbulb,
    Target,
    ShieldCheck,
    Calendar,
    MousePointerClick
} from 'lucide-react';

// --- Helpers ---
const resolveCtaLabel = (cta: any) => typeof cta === 'string' ? cta : cta.label;
const resolveCtaHref = (cta: any) => typeof cta === 'string' ? '#' : cta.href;

// --- Blocks ---

// 1. Hero Block
export function GlobalBookCallHeroBlock({ content, className }: { content: any, className?: string }) {
    const { eyebrow, title, description, primaryCta, secondaryCta } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionEyebrow className="mb-4 text-neutral-400">{eyebrow}</SectionEyebrow>
                    <SectionTitle size="lg" className="mb-8 tracking-tight leading-[1.1]">{title}</SectionTitle>
                    <SectionDescription className="mb-12 text-neutral-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </SectionDescription>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <Link href={resolveCtaHref(primaryCta)} className="w-full sm:w-auto">
                            <PrimaryButton className="w-full min-w-[220px] !px-8 !py-4 font-bold uppercase tracking-tight shadow-xl shadow-black/5">
                                {resolveCtaLabel(primaryCta)}
                            </PrimaryButton>
                        </Link>
                        <Link href={resolveCtaHref(secondaryCta)} className="w-full sm:w-auto">
                            <SecondaryButton className="w-full min-w-[220px] !px-8 !py-4 font-bold uppercase tracking-tight bg-white border-neutral-200">
                                {resolveCtaLabel(secondaryCta)}
                            </SecondaryButton>
                        </Link>
                    </div>

                    <div className="mt-16 pt-12 border-t border-neutral-100 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">Duration</span>
                            <span className="text-sm font-bold text-neutral-900">15-20 Min</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">Focus</span>
                            <span className="text-sm font-bold text-neutral-900">Workflow Context</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">Goal</span>
                            <span className="text-sm font-bold text-neutral-900">Fit Assessment</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2">Next Step</span>
                            <span className="text-sm font-bold text-neutral-900">Scoped Scope</span>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 2. Purpose Block
export function GlobalBookCallPurposeBlock({ content, className }: { content: any, className?: string }) {
    const { title, items } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/50 ${className}`}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader title={title} align="left" className="mb-16" />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {items.map((item: any, idx: number) => (
                        <CardBase key={idx} className="p-8 bg-white border-neutral-100 shadow-sm rounded-3xl hover:shadow-md transition-shadow">
                            <div className="mb-6 h-10 w-10 rounded-2xl bg-neutral-900 flex items-center justify-center text-white">
                                {idx === 0 && <Target size={20} />}
                                {idx === 1 && <ShieldCheck size={20} />}
                                {idx === 2 && <MousePointerClick size={20} />}
                                {idx === 3 && <Lightbulb size={20} />}
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight">{item.title}</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed font-medium">{item.description}</p>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 3. Best Fit Block
export function GlobalBookCallBestFitBlock({ content, className }: { content: any, className?: string }) {
    const { title, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32 border-b border-neutral-100">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:items-start">
                    <div>
                        <SectionEyebrow className="mb-4 text-neutral-400">Target Audience</SectionEyebrow>
                        <SectionTitle size="md" className="mb-6 tracking-tight leading-tight">{title}</SectionTitle>
                        <BodyText className="text-neutral-500 leading-relaxed font-medium italic">
                            Discovery calls are most effective when your firm has already identified a clear administrative drag.
                        </BodyText>
                    </div>
                    <div className="grid gap-4">
                        {items.map((item: any, idx: number) => (
                            <CardBase key={idx} className="p-6 md:p-8 bg-white border-neutral-100 rounded-3xl flex items-start gap-6 group hover:border-neutral-200 transition-colors">
                                <div className="mt-1 h-6 w-6 rounded-full bg-neutral-900 flex items-center justify-center text-white flex-shrink-0">
                                    <Check size={14} />
                                </div>
                                <div>
                                    <h4 className="text-base font-bold text-neutral-900 mb-1 tracking-tight">{item.title}</h4>
                                    <p className="text-sm text-neutral-500 leading-relaxed">{item.description}</p>
                                </div>
                            </CardBase>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 4. Not Fit Block
export function GlobalBookCallNotFitBlock({ content, className }: { content: any, className?: string }) {
    const { title, items } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/30 ${className}`}>
            <ContentContainer className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <SectionHeader title={title} align="center" className="mb-16" />
                    <div className="grid gap-6 md:grid-cols-2">
                        {items.map((item: any, idx: number) => (
                            <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-200/50 bg-white/50">
                                <X size={18} className="mt-1 text-neutral-300 flex-shrink-0" />
                                <div>
                                    <h4 className="text-sm font-bold text-neutral-900 mb-1 tracking-tight">{item.title}</h4>
                                    <p className="text-xs text-neutral-500 leading-relaxed font-medium">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 5. Coverage Block
export function GlobalBookCallCoverageBlock({ content, className }: { content: any, className?: string }) {
    const { title, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader title={title} align="center" className="mb-20 md:mb-28" />
                <div className="max-w-5xl mx-auto relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-100 -translate-y-1/2 hidden md:block" />
                    <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative z-10">
                        {items.map((item: any, idx: number) => (
                            <div key={idx} className="flex flex-col items-center text-center">
                                <div className="mb-6 h-12 w-12 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center text-neutral-900 font-bold text-sm">
                                    0{idx + 1}
                                </div>
                                <h4 className="text-sm font-bold text-neutral-900 mb-3 tracking-tight px-2">{item.title}</h4>
                                <p className="text-xs text-neutral-500 leading-relaxed font-medium">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 6. After Call Block
export function GlobalBookCallAfterCallBlock({ content, className }: { content: any, className?: string }) {
    const { title, items } = content;
    return (
        <SectionWrapper className={`bg-neutral-900 text-white ${className}`}>
            <ContentContainer className="py-24 md:py-32">
                <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:items-center">
                    <div>
                        <SectionEyebrow className="mb-4 text-neutral-500">Post-Call Process</SectionEyebrow>
                        <SectionTitle size="md" className="mb-8 text-white tracking-tight">{title}</SectionTitle>
                        <BodyText className="text-neutral-400 leading-relaxed">
                            We ensure that discovery calls lead to meaningful operational progression or a clean status, avoiding unnecessary sales loops.
                        </BodyText>
                    </div>
                    <div className="space-y-6">
                        {items.map((item: any, idx: number) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-neutral-800/50 border border-neutral-700/30 backdrop-blur-sm group hover:bg-neutral-800 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="h-2 w-2 rounded-full bg-neutral-500 group-hover:bg-white transition-colors" />
                                    <h4 className="text-base font-bold tracking-tight">{item.title}</h4>
                                </div>
                                <p className="text-sm text-neutral-400 leading-relaxed pl-6">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 7. Comparison Block
export function GlobalBookCallComparisonBlock({ content, className }: { content: any, className?: string }) {
    const { title, call, brief } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader title={title} align="center" className="mb-16 md:mb-24" />
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Call Card */}
                    <CardBase className="p-10 md:p-12 bg-white border-neutral-100 shadow-sm rounded-[2.5rem] flex flex-col">
                        <div className="mb-8">
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3 block">Option A</span>
                            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight mb-4">{call.title}</h3>
                            <p className="text-sm text-neutral-500 font-medium italic">"Ideal for immediate context mapping."</p>
                        </div>
                        <div className="flex-grow space-y-4 mb-10">
                            <p className="text-[11px] font-black uppercase tracking-widest text-neutral-800 mb-2">Best for when:</p>
                            {call.bestFor.map((item: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="h-1 w-1 rounded-full bg-neutral-900" />
                                    <span className="text-sm font-bold text-neutral-700 tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                        <PrimaryButton className="w-full !py-4 font-bold uppercase tracking-tight">Schedule Call</PrimaryButton>
                    </CardBase>

                    {/* Brief Card */}
                    <CardBase className="p-10 md:p-12 bg-neutral-50/50 border-neutral-200/50 shadow-sm rounded-[2.5rem] flex flex-col">
                        <div className="mb-8">
                            <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3 block">Option B</span>
                            <h3 className="text-2xl font-bold text-neutral-900 tracking-tight mb-4">{brief.title}</h3>
                            <p className="text-sm text-neutral-500 font-medium italic">"Ideal for data-heavy logic sharing."</p>
                        </div>
                        <div className="flex-grow space-y-4 mb-10">
                            <p className="text-[11px] font-black uppercase tracking-widest text-neutral-800 mb-2">Best for when:</p>
                            {brief.bestFor.map((item: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="h-1 w-1 rounded-full bg-neutral-400" />
                                    <span className="text-sm font-semibold text-neutral-500 tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                        <SecondaryButton className="w-full !py-4 font-bold uppercase tracking-tight bg-white border-neutral-200">Send Brief</SecondaryButton>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 8. Scheduling Block
export function GlobalBookCallSchedulingBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, qualificationNote, helperItems } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/30 ${className}`}>
            <ContentContainer className="py-20 md:py-32">
                <div id="scheduling" className="scroll-mt-24">
                    <SectionHeader title={title} description={description} align="center" className="mb-16 md:mb-24" />
                    <div className="grid lg:grid-cols-[1fr_0.4fr] gap-12 lg:items-start max-w-6xl mx-auto">
                        {/* Embed Placeholder Slot */}
                        <div className="w-full min-h-[600px] bg-white border border-neutral-100 rounded-[2.5rem] shadow-sm flex items-center justify-center relative overflow-hidden">
                            <div className="text-neutral-300 text-center p-12">
                                <Calendar size={48} className="mx-auto mb-6 opacity-20" />
                                <p className="text-sm font-semibold italic">Scheduler Embed Surface</p>
                                <p className="text-xs mt-2 opacity-50">(TidyCal / Calendly Slot)</p>
                            </div>
                        </div>

                        {/* Helper Notes */}
                        <div className="space-y-6 lg:sticky lg:top-32">
                            <CardBase className="p-8 bg-neutral-900 text-white border-none rounded-[2rem] shadow-xl">
                                <h4 className="text-[11px] font-black uppercase tracking-widest text-neutral-500 mb-6">Discovery Prep</h4>
                                <div className="space-y-8">
                                    {helperItems.map((item: any, idx: number) => (
                                        <div key={idx}>
                                            <div className="flex items-center gap-3 mb-2">
                                                {idx === 0 && <Clock size={14} className="text-neutral-400" />}
                                                {idx === 1 && <User size={14} className="text-neutral-400" />}
                                                {idx === 2 && <Lightbulb size={14} className="text-neutral-400" />}
                                                <h5 className="text-[13px] font-bold tracking-tight text-white">{item.title}</h5>
                                            </div>
                                            <p className="text-xs text-neutral-400 leading-relaxed pl-6 font-medium">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardBase>
                            <div className="p-6 rounded-2xl bg-white border border-neutral-200/50">
                                <p className="text-[11px] text-neutral-400 italic font-medium leading-relaxed">
                                    {qualificationNote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 9. Secondary CTA Block
export function GlobalBookCallSecondaryCtaBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, primaryCta, secondaryLinks } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <CardBase className="relative overflow-hidden p-12 md:p-20 bg-neutral-50 border-neutral-200/50 rounded-[3rem] text-center max-w-5xl mx-auto">
                    <div className="absolute top-0 left-0 -ml-16 -mt-16 h-48 w-48 rounded-full bg-white blur-3xl opacity-50" />
                    <div className="relative z-10">
                        <SectionTitle size="md" className="mb-6 tracking-tight">{title}</SectionTitle>
                        <SectionDescription className="mb-12 text-neutral-500 max-w-xl mx-auto leading-relaxed">
                            {description}
                        </SectionDescription>
                        
                        <div className="flex flex-col items-center gap-10">
                            <Link href={resolveCtaHref(primaryCta)}>
                                <PrimaryButton className="w-full sm:w-auto min-w-[240px] !py-4 font-bold uppercase tracking-tight shadow-lg shadow-black/5">
                                    {resolveCtaLabel(primaryCta)}
                                </PrimaryButton>
                            </Link>
                            
                            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-10 border-t border-neutral-200/60 w-full max-w-2xl mx-auto">
                                {secondaryLinks.map((link: any, idx: number) => (
                                    <Link key={idx} href={link.href} className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors">
                                        {link.label}
                                        <ArrowRight size={14} className="text-neutral-200 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all" />
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
