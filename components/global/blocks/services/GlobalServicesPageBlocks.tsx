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
    ArrowRight, 
    Check, 
    X, 
    Layers, 
    ShieldCheck, 
    Clock, 
    LayoutDashboard,
    FileSearch,
    Wrench,
    Zap,
    TrendingUp,
    Briefcase,
    Target,
    ListChecks,
    Activity,
    ClipboardList
} from 'lucide-react';

// --- Helpers ---
const resolveCtaLabel = (cta: any) => typeof cta === 'string' ? cta : cta.label;
const resolveCtaHref = (cta: any) => typeof cta === 'string' ? '#' : cta.href;

// --- Blocks ---

// 1. Hero Block
export function GlobalServicesPageHeroBlock({ content, className }: { content: any, className?: string }) {
    const { eyebrow, title, description, primaryCta, secondaryCta, bridgeCta } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="pt-16 pb-12 md:pt-32 md:pb-24 lg:pt-32 lg:pb-32">
                <div className="max-w-4xl">
                    <SectionEyebrow className="mb-4 text-neutral-400">{eyebrow}</SectionEyebrow>
                    <SectionTitle size="lg" className="mb-6 md:mb-8 tracking-tight leading-[1.1] max-w-3xl">{title}</SectionTitle>
                    <SectionDescription className="mb-10 md:mb-12 text-neutral-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                        {description}
                    </SectionDescription>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 md:mb-16">
                        <Link href={resolveCtaHref(primaryCta)} className="w-full sm:w-auto">
                            <PrimaryButton className="w-full sm:w-auto min-w-[220px] !px-8 !py-4 font-bold uppercase tracking-tight shadow-xl shadow-black/5">
                                {resolveCtaLabel(primaryCta)}
                            </PrimaryButton>
                        </Link>
                        <Link href={resolveCtaHref(secondaryCta)} className="w-full sm:w-auto">
                            <SecondaryButton className="w-full sm:w-auto min-w-[220px] !px-8 !py-4 font-bold uppercase tracking-tight bg-white border-neutral-200">
                                {resolveCtaLabel(secondaryCta)}
                            </SecondaryButton>
                        </Link>
                    </div>

                    <div className="pt-8 md:pt-10 border-t border-neutral-100">
                        <Link href={resolveCtaHref(bridgeCta)} className="group flex items-center gap-3 text-sm font-bold text-neutral-900 tracking-tight transition-colors hover:text-neutral-500">
                            <span className="h-2 w-2 rounded-full bg-neutral-900 group-hover:bg-neutral-300 transition-colors" />
                            {resolveCtaLabel(bridgeCta)}
                            <ArrowRight size={16} className="text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 2. Page Meaning Block
export function GlobalServicesPageMeaningBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, items } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/50 ${className}`}>
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <SectionHeader title={title} description={description} align="left" className="mb-10 md:mb-16" />
                <div className="grid gap-6 md:grid-cols-3">
                    {items.map((item: any, idx: number) => (
                        <CardBase key={idx} className="p-6 md:p-8 bg-white border-neutral-100 shadow-sm rounded-3xl group hover:border-neutral-200 transition-colors">
                            <div className="mb-6 h-10 w-10 rounded-2xl bg-neutral-900 flex items-center justify-center text-white">
                                {idx === 0 && <Target size={18} />}
                                {idx === 1 && <Zap size={18} />}
                                {idx === 2 && <ShieldCheck size={18} />}
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

// 3. Core Categories Block
export function GlobalServicesPageCoreCategoriesBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <SectionHeader title={title} description={description} align="center" className="mb-12 md:mb-20" />
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="flex flex-col p-6 md:p-8 rounded-[2.5rem] border border-neutral-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb-8">
                                <div className="h-12 w-12 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-900 mb-6">
                                    {idx === 0 && <ArrowRight size={24} />}
                                    {idx === 1 && <Clock size={24} />}
                                    {idx === 2 && <ClipboardList size={24} />}
                                    {idx === 3 && <Layers size={24} />}
                                    {idx === 4 && <LayoutDashboard size={24} />}
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed font-medium line-clamp-3">{item.description}</p>
                            </div>
                            {item.points && (
                                <div className="mt-auto pt-6 border-t border-neutral-50 space-y-3">
                                    {item.points.map((point: string, pIdx: number) => (
                                        <div key={pIdx} className="flex items-center gap-3">
                                            <div className="h-1 w-1 rounded-full bg-neutral-300" />
                                            <span className="text-[11px] font-black uppercase tracking-widest text-neutral-500">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 4. Primary Focus Block
export function GlobalServicesPagePrimaryFocusBlock({ content, className }: { content: any, className?: string }) {
    const { title, highlight, description, cta } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 lg:py-32 bg-neutral-900 rounded-[3rem] overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neutral-800/20 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10 px-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8">
                        <Briefcase size={12} className="text-neutral-500" />
                        Flagship Specialization
                    </div>
                    <SectionTitle size="md" className="text-white mb-4 md:mb-6 tracking-tight">{title}</SectionTitle>
                    <p className="text-neutral-400 text-lg md:text-xl font-medium mb-8 md:mb-10 max-w-2xl mx-auto italic leading-relaxed">
                        "{highlight}"
                    </p>
                    <SectionDescription className="text-neutral-500 text-sm md:text-base mb-10 md:mb-12 max-w-2xl mx-auto">
                        {description}
                    </SectionDescription>
                    <Link href={resolveCtaHref(cta)}>
                        <PrimaryButton className="w-full sm:w-auto min-w-[240px] !py-4 font-bold uppercase tracking-tight bg-white text-neutral-900 hover:bg-neutral-200">
                            {resolveCtaLabel(cta)}
                        </PrimaryButton>
                    </Link>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 5. Extended Services Block
export function GlobalServicesPageExtendedServicesBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <SectionHeader title={title} description={description} align="left" className="mb-12 md:mb-20" />
                <div className="grid gap-12 lg:grid-cols-3">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="flex flex-col">
                            <div className="mb-6 flex items-center justify-between">
                                <span className="text-4xl font-black text-neutral-100 opacity-50">0{idx + 1}</span>
                                <div className="h-px flex-grow mx-6 bg-neutral-100" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">{item.title}</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed font-medium">{item.description}</p>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 6. Delivery Model Block
export function GlobalServicesPageDeliveryModelBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, items } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/50 ${className}`}>
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <SectionHeader title={title} description={description} align="center" className="mb-12 md:mb-20" />
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-0">
                    {items.map((item: any, idx: number) => (
                        <CardBase key={idx} className="p-6 md:p-8 bg-white border-neutral-100 rounded-2xl flex flex-col items-center text-center shadow-sm">
                            <div className="mb-8 h-12 w-12 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-900 font-bold text-sm">
                                {idx + 1}
                            </div>
                            <h4 className="text-base font-bold text-neutral-900 mb-3 tracking-tight">{item.title}</h4>
                            <p className="text-xs text-neutral-500 leading-relaxed font-medium">{item.description}</p>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 7. Use Case Bridge Block
export function GlobalServicesPageUseCaseBridgeBlock({ content, className }: { content: any, className?: string }) {
    const { title, items, cta } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24 lg:py-32 border-b border-neutral-100">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-20 gap-8">
                    <div className="max-w-xl">
                        <SectionEyebrow className="mb-4 text-neutral-400">Proof of Concept</SectionEyebrow>
                        <SectionTitle size="md" className="tracking-tight">{title}</SectionTitle>
                    </div>
                    <Link href={resolveCtaHref(cta)}>
                        <SecondaryButton className="font-bold uppercase tracking-tight bg-white border-neutral-200 !px-8 !py-4">
                            {resolveCtaLabel(cta)}
                        </SecondaryButton>
                    </Link>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="p-6 md:p-8 rounded-[2rem] bg-neutral-50/30 border border-neutral-100/50 hover:bg-neutral-100 transition-colors cursor-pointer group">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px w-8 bg-neutral-200 group-hover:w-12 transition-all" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Example {idx + 1}</span>
                            </div>
                            <h4 className="text-base font-bold text-neutral-900 mb-3 tracking-tight">{item.title}</h4>
                            <p className="text-sm text-neutral-500 leading-relaxed font-medium">{item.description}</p>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 8. Pricing Bridge Block
export function GlobalServicesPagePricingBridgeBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, logicBlocks, cta } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader title={title} description={description} align="center" className="mb-12 md:mb-20" />
                    <div className="grid gap-6 md:grid-cols-3 mb-10 md:mb-16">
                        {logicBlocks.map((block: any, idx: number) => (
                            <div key={idx} className="p-6 md:p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm text-left">
                                <h4 className="flex items-center gap-3 text-sm font-bold text-neutral-900 mb-4 tracking-tight">
                                    {idx === 0 && <FileSearch size={16} className="text-neutral-400" />}
                                    {idx === 1 && <Wrench size={16} className="text-neutral-400" />}
                                    {idx === 2 && <Activity size={16} className="text-neutral-400" />}
                                    {block.title}
                                </h4>
                                <p className="text-xs text-neutral-500 leading-relaxed font-medium">{block.description}</p>
                            </div>
                        ))}
                    </div>
                    <Link href={resolveCtaHref(cta)}>
                        <PrimaryButton className="w-full sm:w-auto min-w-[240px] !py-4 font-bold uppercase tracking-tight shadow-md text-sm">
                            {resolveCtaLabel(cta)}
                        </PrimaryButton>
                    </Link>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 9. Fit Block
export function GlobalServicesPageFitBlock({ content, className }: { content: any, className?: string }) {
    const { title, goodFit, notFit } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/50 ${className}`}>
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <SectionHeader title={title} align="center" className="mb-12 md:mb-20" />
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Good Fit */}
                    <CardBase className="p-6 md:p-10 bg-white border-neutral-100 shadow-sm rounded-[2rem]">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-8 w-8 rounded-full bg-neutral-900 flex items-center justify-center text-white">
                                <Check size={16} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">Ideal Context</h3>
                        </div>
                        <div className="space-y-4">
                            {goodFit.map((item: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <ArrowRight size={14} className="mt-1 text-neutral-300 flex-shrink-0" />
                                    <span className="text-sm font-semibold text-neutral-700 leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>
                    </CardBase>

                    {/* Not Fit */}
                    <CardBase className="p-6 md:p-10 bg-white border-neutral-100 shadow-sm rounded-[2rem]">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-8 w-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400">
                                <X size={16} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-neutral-900">Non-Focus Areas</h3>
                        </div>
                        <div className="space-y-4">
                            {notFit.map((item: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <X size={14} className="mt-1 text-neutral-200 flex-shrink-0" />
                                    <span className="text-sm font-medium text-neutral-500 leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 10. Final CTA Block
export function GlobalServicesPageFinalCtaBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, primaryCta, secondaryCta, secondaryLinks, trustNote } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <CardBase className="p-8 md:p-16 lg:p-24 bg-neutral-900 rounded-[3.5rem] text-center max-w-5xl mx-auto border-none shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-50" />
                    <div className="relative z-10">
                        <SectionTitle size="md" className="text-white mb-4 md:mb-6 tracking-tight max-w-2xl mx-auto">{title}</SectionTitle>
                        <SectionDescription className="text-neutral-500 mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed font-medium">
                            {description}
                        </SectionDescription>
                        
                        <div className="flex flex-col items-center gap-10 md:gap-12">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                                <Link href={resolveCtaHref(primaryCta)} className="w-full sm:w-auto">
                                    <PrimaryButton className="w-full sm:w-auto min-w-[260px] !py-5 font-bold uppercase tracking-tight bg-white text-neutral-900 hover:bg-neutral-200 shadow-xl shadow-white/5">
                                        {resolveCtaLabel(primaryCta)}
                                    </PrimaryButton>
                                </Link>
                                <Link href={resolveCtaHref(secondaryCta)} className="w-full sm:w-auto">
                                    <SecondaryButton className="w-full sm:w-auto min-w-[260px] !py-5 font-bold uppercase tracking-tight border-neutral-800 text-white hover:bg-white/5">
                                        {resolveCtaLabel(secondaryCta)}
                                    </SecondaryButton>
                                </Link>
                            </div>

                            <p className="text-[11px] text-neutral-500 italic font-medium max-w-sm">
                                {trustNote}
                            </p>
                            
                            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-10 md:pt-12 border-t border-neutral-800/60 w-full max-w-2xl mx-auto">
                                {secondaryLinks.map((link: any, idx: number) => (
                                    <Link key={idx} href={link.href} className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
                                        {link.label}
                                        <ArrowRight size={14} className="text-neutral-700 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
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
