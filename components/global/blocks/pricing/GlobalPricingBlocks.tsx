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
    ArrowRight, 
    Check, 
    X, 
    Search, 
    Settings, 
    Activity, 
    ShieldCheck, 
    BarChart3, 
    Layers, 
    Wrench, 
    FileSearch, 
    AlertCircle, 
    Info,
    CheckCircle2,
    Zap,
    TrendingUp,
    LayoutDashboard,
    ClipboardList
} from 'lucide-react';

// --- Helpers ---
const resolveCtaLabel = (cta: any) => typeof cta === 'string' ? cta : cta.label;
const resolveCtaHref = (cta: any) => typeof cta === 'string' ? '#' : cta.href;

// --- Blocks ---

// 1. Hero Block
export function GlobalPricingHeroBlock({ content, className }: { content: any, className?: string }) {
    const { eyebrow, title, description, primaryCta, secondaryCta, helperBullets } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-4xl">
                    <SectionEyebrow className="mb-4 text-neutral-400">{eyebrow}</SectionEyebrow>
                    <SectionTitle size="lg" className="mb-8 tracking-tight leading-[1.1] max-w-3xl">
                        {title}
                    </SectionTitle>
                    <SectionDescription className="mb-12 text-neutral-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                        {description}
                    </SectionDescription>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
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

                    {helperBullets && (
                        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-10 border-t border-neutral-100">
                            {helperBullets.map((bullet: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <div className="h-1 w-1 rounded-full bg-neutral-300" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{bullet}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 2. Model Overview Block
export function GlobalPricingModelOverviewBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, layers } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/50 ${className}`}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader title={title} description={description} align="left" className="mb-20" />
                <div className="grid gap-6 md:grid-cols-3">
                    {layers.map((layer: any, idx: number) => (
                        <CardBase key={idx} className="p-8 bg-white border-neutral-100 shadow-sm rounded-3xl relative transition-transform hover:-translate-y-1">
                            <div className="mb-8 h-12 w-12 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white">
                                {idx === 0 && <Search size={22} />}
                                {idx === 1 && <Settings size={22} />}
                                {idx === 2 && <Activity size={22} />}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">{layer.title}</h3>
                            <BodyText className="text-sm text-neutral-500 mb-8 font-medium italic">"{layer.description}"</BodyText>
                            <div className="pt-6 border-t border-neutral-50">
                                <p className="text-[11px] font-black uppercase tracking-widest text-neutral-400">{layer.note}</p>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 3. Analysis Pricing Block
export function GlobalPricingAnalysisBlock({ content, className }: { content: any, className?: string }) {
    const { title, range, description, includes, excludes, factors, note } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <SectionEyebrow className="mb-4 text-neutral-400">Layer 01</SectionEyebrow>
                        <SectionTitle size="md" className="mb-6 tracking-tight">{title}</SectionTitle>
                        <div className="inline-block px-4 py-2 rounded-xl bg-neutral-900 text-white text-lg font-bold mb-8 tracking-tight">
                            {range}
                        </div>
                        <SectionDescription className="mb-10 text-neutral-600 leading-relaxed text-base">
                            {description}
                        </SectionDescription>
                        
                        <div className="space-y-4 bg-neutral-50/50 p-8 rounded-3xl border border-neutral-100">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-neutral-400 mb-4">Price Drivers</h4>
                            <div className="grid gap-3">
                                {factors.map((factor: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
                                        <span className="text-sm font-semibold text-neutral-800 tracking-tight">{factor}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <CardBase className="p-10 bg-white border-neutral-100 shadow-sm rounded-[3rem]">
                        <div className="grid gap-12 sm:grid-cols-2">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-6">What is included</h4>
                                <ul className="space-y-4">
                                    {includes.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm font-bold text-neutral-800 tracking-tight">
                                            <Check size={16} className="text-neutral-900 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-300 mb-6">What is excluded</h4>
                                <ul className="space-y-4">
                                    {excludes.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm font-medium text-neutral-400 tracking-tight">
                                            <X size={16} className="text-neutral-200 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-neutral-50">
                            <BodyText className="text-[12px] text-neutral-400 leading-relaxed italic">"{note}"</BodyText>
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 4. Setup Bands Block
export function GlobalPricingSetupBandsBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, bands } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/20 ${className}`}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader title={title} description={description} align="center" className="mb-20" />
                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {bands.map((band: any, idx: number) => (
                        <CardBase key={idx} className="flex flex-col p-8 bg-white border-neutral-100 rounded-[2.5rem] shadow-sm group hover:border-neutral-200 transition-all">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-2">{band.title}</h3>
                                <div className="text-2xl font-black text-neutral-900 tracking-tight mb-6">{band.range}</div>
                                <BodyText className="text-sm text-neutral-600 leading-relaxed font-medium italic">"{band.fit}"</BodyText>
                            </div>
                            
                            <div className="mt-auto space-y-8">
                                <div className="pt-8 border-t border-neutral-50">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-5">Typical Scope</h4>
                                    <ul className="space-y-3">
                                        {band.scope.map((item: string, sIdx: number) => (
                                            <li key={sIdx} className="flex items-start gap-3 text-[13px] font-bold text-neutral-800 tracking-tight">
                                                <Zap size={14} className="text-neutral-900 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100/50">
                                    <p className="text-[11px] font-bold text-neutral-500 italic">{band.logicNote}</p>
                                </div>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 5. Maintenance Bands Block
export function GlobalPricingMaintenanceBandsBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, bands, footerNote } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader title={title} description={description} align="center" className="mb-20" />
                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {bands.map((band: any, idx: number) => (
                        <CardBase key={idx} className="flex flex-col p-8 border-neutral-100 rounded-[2.5rem] hover:shadow-xl hover:shadow-black/5 transition-all">
                            <div className="mb-8">
                                <h3 className="text-lg font-bold text-neutral-900 mb-1">{band.title}</h3>
                                <div className="text-xl md:text-2xl font-black text-neutral-900 tracking-tight mb-4">{band.range} <span className="text-xs text-neutral-400 font-bold">/ MONTH</span></div>
                                <BodyText className="text-[13px] text-neutral-500 leading-relaxed font-medium mb-6">{band.fit}</BodyText>
                            </div>

                            <div className="mt-auto space-y-8">
                                <div className="pt-8 border-t border-neutral-50">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-5">Support Level</h4>
                                    <ul className="space-y-3">
                                        {band.scope.map((item: string, sIdx: number) => (
                                            <li key={sIdx} className="flex items-start gap-3 text-[12px] font-bold text-neutral-700 tracking-tight">
                                                <CheckCircle2 size={14} className="text-neutral-300 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p className="text-[11px] font-bold text-neutral-400 italic font-medium">{band.logicNote}</p>
                            </div>
                        </CardBase>
                    ))}
                </div>
                {footerNote && (
                    <div className="mt-16 text-center">
                        <p className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-neutral-100 bg-neutral-50/50 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                            <Info size={12} className="text-neutral-900" />
                            {footerNote}
                        </p>
                    </div>
                )}
            </ContentContainer>
        </SectionWrapper>
    );
}

// 6. Additional Development Block
export function GlobalPricingAdditionalDevelopmentBlock({ content, className }: { content: any, className?: string }) {
    const { title, range, description, includes, excludes, logicNote } = content;
    return (
        <SectionWrapper className={`bg-neutral-900 text-white overflow-hidden relative ${className}`}>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-neutral-800/20 to-transparent pointer-events-none" />
            <ContentContainer className="py-24 md:py-32 relative z-10">
                <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                    <div>
                        <SectionEyebrow className="mb-4 text-neutral-500">Service Boundary</SectionEyebrow>
                        <SectionTitle size="md" className="text-white mb-6 tracking-tight">{title}</SectionTitle>
                        <div className="inline-block px-4 py-2 rounded-xl bg-white text-neutral-900 text-lg font-black mb-8">
                            {range}
                        </div>
                        <SectionDescription className="text-neutral-400 mb-10 max-w-xl text-base">
                            {description}
                        </SectionDescription>
                        
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-lg">
                            <p className="text-[12px] font-semibold text-neutral-400 leading-relaxed italic">
                                "{logicNote}"
                            </p>
                        </div>
                    </div>
                    
                    <CardBase className="p-10 bg-neutral-800 border-neutral-700/50 rounded-[3rem]">
                        <div className="grid gap-12 sm:grid-cols-2">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-500 mb-6">Eligible Items</h4>
                                <ul className="space-y-4">
                                    {includes.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm font-bold text-neutral-200 tracking-tight">
                                            <Check size={16} className="text-neutral-500 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-600 mb-6">Maintenance Boundary</h4>
                                <ul className="space-y-4">
                                    {excludes.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm font-medium text-neutral-500 tracking-tight">
                                            <X size={16} className="text-neutral-700 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 7. Factors Block
export function GlobalPricingFactorsBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, factors } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader title={title} description={description} align="center" className="mb-20" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {factors.map((factor: any, idx: number) => (
                        <CardBase key={idx} className="p-8 border-neutral-100 hover:bg-neutral-50 transition-colors rounded-3xl group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white mb-6 group-hover:scale-110 transition-transform">
                                {idx === 0 && <Layers size={18} />}
                                {idx === 1 && <Settings size={18} />}
                                {idx === 2 && <Zap size={18} />}
                                {idx === 3 && <LayoutDashboard size={18} />}
                                {idx === 4 && <ClipboardList size={18} />}
                                {idx === 5 && <TrendingUp size={18} />}
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight">{factor.title}</h3>
                            <p className="text-xs text-neutral-500 leading-relaxed font-medium">{factor.description}</p>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 8. Scope Comparisons Block
export function GlobalPricingScopeComparisonsBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, examples } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/50 ${className}`}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader title={title} description={description} align="center" className="mb-20" />
                <div className="grid gap-12 max-w-5xl mx-auto">
                    {examples.map((example: any, idx: number) => (
                        <div key={idx} className="relative grid md:grid-cols-[1.2fr_1fr] items-center gap-12 md:gap-24">
                            <div className="relative">
                                <span className="absolute -top-12 -left-4 text-6xl font-black text-neutral-100/50 -z-10">0{idx + 1}</span>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-6 tracking-tight">{example.title}</h3>
                                <ul className="space-y-4">
                                    {example.scope.map((item: string, sIdx: number) => (
                                        <li key={sIdx} className="flex items-center gap-3 text-sm font-bold text-neutral-800 tracking-tight">
                                            <div className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-sm text-center">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4">Alignment</h4>
                                <div className="text-lg font-black text-neutral-900 tracking-tight px-6 py-3 rounded-2xl bg-neutral-50 border border-neutral-100/50">
                                    {example.alignment}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 9. FAQ Block
export function GlobalPricingFaqBlock({ content, className }: { content: any, className?: string }) {
    const { title, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader title={title} align="center" className="mb-20" />
                <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
                    {items.map((item: any, idx: number) => (
                        <CardBase key={idx} className="p-10 bg-white border-neutral-100 shadow-sm rounded-[2.5rem] flex flex-col h-full hover:shadow-xl hover:shadow-black/5 transition-all border-l-4 border-l-neutral-400">
                            <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight leading-snug">
                                {item.question}
                            </h3>
                            <BodyText className="text-[13px] text-neutral-500 font-medium leading-relaxed mt-auto italic">
                                "{item.answer}"
                            </BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 10. Final CTA Block
export function GlobalPricingFinalCtaBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, primaryCta, secondaryCta, secondaryLinks, expectationNote } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <CardBase className="p-16 md:p-24 bg-neutral-900 rounded-[4rem] text-center max-w-5xl mx-auto border-none shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                        <SectionTitle size="md" className="text-white mb-6 tracking-tight max-w-2xl mx-auto leading-tight">{title}</SectionTitle>
                        <SectionDescription className="text-neutral-500 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                            {description}
                        </SectionDescription>
                        
                        <div className="flex flex-col items-center gap-12">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                                <Link href={resolveCtaHref(primaryCta)} className="w-full sm:w-auto">
                                    <PrimaryButton className="w-full sm:w-auto min-w-[260px] !py-5 font-bold uppercase tracking-tight bg-white text-neutral-900 hover:bg-neutral-200">
                                        {resolveCtaLabel(primaryCta)}
                                    </PrimaryButton>
                                </Link>
                                <Link href={resolveCtaHref(secondaryCta)} className="w-full sm:w-auto">
                                    <SecondaryButton className="w-full sm:w-auto min-w-[260px] !py-5 font-bold uppercase tracking-tight border-neutral-800 text-white hover:bg-white/5">
                                        {resolveCtaLabel(secondaryCta)}
                                    </SecondaryButton>
                                </Link>
                            </div>

                            <p className="text-[11px] text-neutral-500 italic font-bold tracking-tight bg-neutral-800/50 px-6 py-2 rounded-full">
                                {expectationNote}
                            </p>
                            
                            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-12 border-t border-neutral-800/50 w-full max-w-2xl mx-auto">
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
