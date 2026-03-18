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
    CheckSquare,
    Zap,
    BarChart3,
    HeartPulse,
    Shield
} from 'lucide-react';

type CtaConfig = string | { label: string; href: string };

const resolveCtaLabel = (cta: CtaConfig) => typeof cta === 'string' ? cta : cta.label;
const resolveCtaHref = (cta: CtaConfig) => typeof cta === 'string' ? '#' : cta.href;

// --- Blocks ---

// 1. Hero Block
export function GlobalAccountingHeroBlock({ content, className }: { content: any, className?: string }) {
    const { eyebrow, title, description, primaryCta, secondaryCta, helperText } = content;
    
    const outcomeItems = [
        { icon: <Search size={18} className="text-neutral-400" />, label: "Workflow Review" },
        { icon: <Settings size={18} className="text-neutral-400" />, label: "Standard Setup" },
        { icon: <Activity size={18} className="text-neutral-400" />, label: "Maintenance" },
        { icon: <ShieldCheck size={18} className="text-neutral-400" />, label: "Expansion" },
    ];

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="flex flex-col items-center text-center py-16 md:py-24 lg:py-32">
                {eyebrow && <SectionEyebrow className="mb-4">{eyebrow}</SectionEyebrow>}
                <SectionTitle size="lg" className="mb-6 max-w-4xl tracking-tight leading-[1.1]">
                    {title}
                </SectionTitle>
                <SectionDescription maxWidth="lg" className="mb-10 max-w-2xl text-neutral-600 text-lg leading-relaxed">
                    {description}
                </SectionDescription>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Link href={resolveCtaHref(primaryCta)} className="w-full sm:w-auto">
                        <PrimaryButton className="w-full min-w-[200px] !px-8 !py-3 font-bold uppercase tracking-tight shadow-lg shadow-black/5">
                            {resolveCtaLabel(primaryCta)}
                        </PrimaryButton>
                    </Link>
                    <Link href={resolveCtaHref(secondaryCta)} className="w-full sm:w-auto">
                        <SecondaryButton className="w-full min-w-[200px] !px-8 !py-3 font-bold uppercase tracking-tight bg-white border-neutral-200">
                            {resolveCtaLabel(secondaryCta)}
                        </SecondaryButton>
                    </Link>
                </div>

                {helperText && (
                    <p className="mt-8 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">
                        {helperText}
                    </p>
                )}

                <div className="mt-12 md:mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 w-full max-w-5xl border-t border-neutral-100 pt-8 md:pt-12">
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

// 2. Frictions Block
export function GlobalAccountingFrictionsBlock({ content, className }: { content: any, className?: string }) {
    const { eyebrow, title, description, items } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/30 ${className}`}>
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader eyebrow={eyebrow} title={title} description={description} align="center" className="mb-10 md:mb-20 lg:mb-24" />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item: any, idx: number) => (
                        <CardBase key={idx} className="p-6 md:p-8 border-neutral-100 bg-white hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">
                                    Issue {String(idx + 1).padStart(2, '0')}
                                </div>
                                <div className="h-1.5 w-1.5 rounded-full bg-neutral-200" />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 mb-3 tracking-tight">{item.title}</h3>
                            <BodyText className="text-sm text-neutral-500 leading-relaxed italic">"{item.description}"</BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 3. Improvements Block
export function GlobalAccountingImprovementsBlock({ content, className }: { content: any, className?: string }) {
    const { eyebrow, title, description, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader eyebrow={eyebrow} title={title} description={description} align="center" className="mb-10 md:mb-20 lg:mb-24" />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="flex flex-col gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-900 text-white">
                                <Check size={20} />
                            </div>
                            <h3 className="text-lg font-bold text-neutral-900 tracking-tight">{item.title}</h3>
                            <BodyText className="text-sm text-neutral-600 leading-relaxed">{item.description}</BodyText>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 4. Flagship Package Block
export function GlobalAccountingFlagshipPackageBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, scope, suitableFor, primaryCta, secondaryCta } = content;
    return (
        <SectionWrapper className={`bg-neutral-900 text-white ${className}`}>
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <div className="grid gap-10 md:gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                        <SectionEyebrow className="mb-4 text-neutral-500">Flagship Solution</SectionEyebrow>
                        <SectionTitle size="md" className="mb-6 text-white max-w-xl">{title}</SectionTitle>
                        <SectionDescription className="mb-10 text-neutral-400 max-w-xl">{description}</SectionDescription>
                        
                        <div className="grid gap-8 sm:grid-cols-2">
                            <div>
                                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-4">Core Scope</h4>
                                <ul className="space-y-3">
                                    {scope.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-[13px] font-semibold text-neutral-300">
                                            <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500 mb-4">Ideal For</h4>
                                <ul className="space-y-3">
                                    {suitableFor.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-[13px] font-semibold text-neutral-300">
                                            <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-700" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <CardBase className="p-6 md:p-10 lg:p-12 bg-neutral-800 border-neutral-700/50 shadow-2xl rounded-[2.5rem]">
                        <div className="flex flex-col gap-6">
                            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-700">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-neutral-900">
                                        <PhoneCall size={20} />
                                    </div>
                                    <h4 className="text-lg font-bold text-white tracking-tight">Structured Discovery</h4>
                                </div>
                                <BodyText className="text-sm text-neutral-400 mb-8">Discuss your workflow bottlenecks with our implementation team.</BodyText>
                                <Link href={resolveCtaHref(primaryCta)} className="block w-full">
                                    <PrimaryButton className="w-full !py-4 font-black uppercase tracking-widest text-xs">
                                        {resolveCtaLabel(primaryCta)}
                                    </PrimaryButton>
                                </Link>
                            </div>
                            
                            <div className="text-center">
                                <p className="text-[11px] font-bold text-neutral-500 mb-4 tracking-widest uppercase italic">Or share your requirements first</p>
                                <Link href={resolveCtaHref(secondaryCta)} className="block w-full">
                                    <SecondaryButton className="w-full !py-4 font-black uppercase tracking-widest text-xs bg-transparent border-neutral-700 text-neutral-300 hover:bg-neutral-700">
                                        {resolveCtaLabel(secondaryCta)}
                                    </SecondaryButton>
                                </Link>
                            </div>
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 5. Solution Modules Block
export function GlobalAccountingSolutionModulesBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader title={title} description={description} align="center" className="mb-10 md:mb-20 lg:mb-24" />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item: any, idx: number) => (
                        <CardBase key={idx} className="p-6 md:p-8 border-neutral-100 hover:shadow-lg transition-all">
                            <h3 className="text-[15px] font-bold text-neutral-900 mb-3 tracking-tight leading-tight">{item.title}</h3>
                            <BodyText className="text-[13px] text-neutral-500 mb-6 font-medium">{item.description}</BodyText>
                            <ul className="space-y-2 pt-6 border-t border-neutral-50">
                                {item.points.map((point: string, pIdx: number) => (
                                    <li key={pIdx} className="flex items-start gap-3 text-[12px] font-bold text-neutral-700">
                                        <CheckCircle size={14} className="text-neutral-300 mt-0.5" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

const CheckCircle = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 6L9 17l-5-5" />
    </svg>
);

// 6. Setup Levels Block
export function GlobalAccountingSetupLevelsBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, items } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/50 ${className}`}>
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader title={title} description={description} align="center" className="mb-10 md:mb-20 lg:mb-24" />
                <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
                    {items.map((item: any, idx: number) => (
                        <CardBase key={idx} className="flex flex-col p-6 md:p-8 bg-white border-neutral-100 rounded-[2rem]">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-neutral-900 tracking-tight mb-2">{item.title}</h3>
                                <BodyText className="text-xs text-neutral-500 font-bold uppercase tracking-widest">{item.suitableFor}</BodyText>
                            </div>
                            <BodyText className="text-sm text-neutral-600 mb-8 leading-relaxed italic">"{item.description}"</BodyText>
                            <ul className="space-y-3 mt-auto pt-8 border-t border-neutral-50">
                                {item.included.map((inc: string, iIdx: number) => (
                                    <li key={iIdx} className="flex items-start gap-3 text-[13px] font-semibold text-neutral-800">
                                        <Zap size={14} className="text-neutral-900 mt-1" />
                                        {inc}
                                    </li>
                                ))}
                            </ul>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 7. Maintenance Levels Block
export function GlobalAccountingMaintenanceLevelsBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader title={title} description={description} align="center" className="mb-10 md:mb-20 lg:mb-24" />
                <div className="grid gap-8 sm:grid-cols-3 max-w-6xl mx-auto">
                    {items.map((item: any, idx: number) => (
                        <CardBase key={idx} className="flex flex-col p-6 md:p-8 border-neutral-100 rounded-[2rem]">
                            <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                            <BodyText className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-6">{item.bestFor}</BodyText>
                            <BodyText className="text-[13px] text-neutral-500 mb-8 font-medium italic">"{item.description}"</BodyText>
                            
                            <div className="space-y-8 mt-auto pt-8 border-t border-neutral-50">
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3">Included</h4>
                                    <ul className="space-y-3">
                                        {item.included.map((inc: string, iIdx: number) => (
                                            <li key={iIdx} className="flex items-start gap-3 text-[12px] font-bold text-neutral-800">
                                                <HeartPulse size={14} className="text-neutral-900 mt-0.5" />
                                                {inc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {item.notIncluded.length > 0 && (
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-300 mb-3">Not Included</h4>
                                        <ul className="space-y-3">
                                            {item.notIncluded.map((not: string, nIdx: number) => (
                                                <li key={nIdx} className="flex items-start gap-3 text-[12px] font-semibold text-neutral-400">
                                                    <div className="h-[1px] w-2 bg-neutral-200 mt-2" />
                                                    {not}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 8. Included / Excluded Block
export function GlobalAccountingIncludedExcludedBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, included, notIncluded } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/20 ${className}`}>
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <SectionHeader title={title} description={description} align="center" className="mb-10 md:mb-20 lg:mb-24" />
                <div className="grid gap-12 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white">
                                <Check size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">Technical Standards</h3>
                        </div>
                        <ul className="space-y-6">
                            {included.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-4 text-sm font-semibold text-neutral-700">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-900 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 text-neutral-300">
                                <X size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">Service Boundaries</h3>
                        </div>
                        <ul className="space-y-6">
                            {notIncluded.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-4 text-sm font-medium text-neutral-500">
                                    <div className="mt-2 h-[1px] w-2 bg-neutral-300 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 9. Example Workflow Block
export function GlobalAccountingExampleWorkflowBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <SectionHeader title={title} description={description} align="center" className="mb-10 md:mb-20 lg:mb-24" />
                <div className="grid gap-16 max-w-4xl mx-auto">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="relative">
                            <h3 className="text-2xl font-bold text-neutral-900 mb-10 tracking-tight">{item.title}</h3>
                            <div className="grid gap-4 sm:grid-cols-5">
                                {item.steps.map((step: string, sIdx: number) => (
                                    <div key={sIdx} className="group relative flex flex-col gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 border border-neutral-100 text-[10px] font-black text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                                            {String(sIdx + 1).padStart(2, '0')}
                                        </div>
                                        <p className="text-[12px] font-bold text-neutral-700 leading-snug">{step}</p>
                                        {sIdx < item.steps.length - 1 && (
                                            <div className="hidden sm:block absolute top-5 left-10 right-0 h-[1px] bg-neutral-100 -z-10" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 10. Pricing Logic Block
export function GlobalAccountingPricingLogicBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, factors, primaryCta, secondaryCta } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/30 ${className}`}>
            <ContentContainer className="py-12 md:py-24">
                <div className="grid gap-10 md:gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                    <div>
                        <SectionEyebrow className="mb-4 text-neutral-400">Investment Model</SectionEyebrow>
                        <SectionTitle size="md" className="mb-6 tracking-tight">{title}</SectionTitle>
                        <SectionDescription className="mb-10 text-neutral-500 leading-relaxed max-w-xl">{description}</SectionDescription>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href={resolveCtaHref(primaryCta)}>
                                <PrimaryButton className="!py-3 !px-6 text-xs font-black uppercase tracking-widest">{resolveCtaLabel(primaryCta)}</PrimaryButton>
                            </Link>
                            <Link href={resolveCtaHref(secondaryCta)}>
                                <SecondaryButton className="!py-3 !px-6 text-xs font-black uppercase tracking-widest bg-white border-neutral-200">{resolveCtaLabel(secondaryCta)}</SecondaryButton>
                            </Link>
                        </div>
                    </div>
                    
                    <CardBase className="p-6 md:p-10 bg-white border-neutral-100 shadow-sm rounded-[2rem]">
                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-8">What Affects the Scope</h4>
                        <div className="grid gap-6">
                            {factors.map((factor: string, idx: number) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                                    <span className="text-sm font-bold text-neutral-800 tracking-tight">{factor}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 pt-8 border-t border-neutral-50">
                            <BodyText className="text-[11px] text-neutral-400 italic">"Final pricing is determined after the workflow review and structural blueprint phase."</BodyText>
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 11. Fit Block
export function GlobalAccountingFitBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, goodFit, notGoodFit } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <SectionHeader title={title} description={description} align="center" className="mb-10 md:mb-20 lg:mb-24" />
                <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
                    <CardBase className="flex flex-col p-6 md:p-10 bg-white border-neutral-100 rounded-[2.5rem] shadow-sm">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-900 text-white">
                                <span className="font-bold text-sm">✓</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">Good Fit Indicators</h3>
                        </div>
                        <ul className="space-y-5 flex-grow">
                            {goodFit.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-900 flex-shrink-0" />
                                    <span className="text-sm font-semibold text-neutral-800 leading-relaxed italic">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardBase>
                    
                    <CardBase className="flex flex-col p-6 md:p-10 bg-neutral-50/50 border-neutral-100 rounded-[2.5rem] shadow-sm">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 text-neutral-300">
                                <span className="font-bold text-sm">×</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">A Different Seeking...</h3>
                        </div>
                        <ul className="space-y-5 flex-grow">
                            {notGoodFit.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-2 h-[1px] w-2 bg-neutral-300 flex-shrink-0" />
                                    <span className="text-sm font-medium text-neutral-500 leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 12. Final CTA Block
export function GlobalAccountingFinalCtaBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, primaryCta, secondaryCta, helperText } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <CardBase className="relative overflow-hidden flex flex-col p-6 md:p-16 bg-black border-none shadow-2xl rounded-[2.5rem]">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-neutral-800/30 blur-3xl" />
                    <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div>
                            <SectionTitle size="lg" className="mb-6 text-white max-w-2xl tracking-tight leading-[1.1]">{title}</SectionTitle>
                            <SectionDescription className="mb-0 text-neutral-300 max-w-xl leading-relaxed text-lg">{description}</SectionDescription>
                        </div>

                        <div className="flex flex-col gap-5 p-2 bg-neutral-800/30 rounded-[2rem] border border-neutral-700/30 backdrop-blur-sm">
                            <Link href={resolveCtaHref(primaryCta)} className="group flex items-center justify-between p-6 rounded-2xl bg-white transition-all hover:bg-neutral-50">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                                        <PhoneCall size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-neutral-900">{resolveCtaLabel(primaryCta)}</h4>
                                        <p className="text-xs text-neutral-500 mt-0.5">Structured 15-min consultation</p>
                                    </div>
                                </div>
                                <ArrowRight size={20} className="text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
                            </Link>

                            <Link href={resolveCtaHref(secondaryCta)} className="group flex items-center justify-between p-6 rounded-2xl bg-transparent border border-neutral-700/50 transition-all hover:border-neutral-500 hover:bg-neutral-700/20">
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 text-neutral-400">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-neutral-300">{resolveCtaLabel(secondaryCta)}</h4>
                                        <p className="text-xs text-neutral-500 mt-0.5">Send your workflow context</p>
                                    </div>
                                </div>
                                <ArrowRight size={20} className="text-neutral-600 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all" />
                            </Link>
                        </div>
                    </div>
                    {helperText && (
                        <div className="mt-12 pt-8 border-t border-neutral-800/50 relative z-10">
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400">{helperText}</p>
                        </div>
                    )}
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
