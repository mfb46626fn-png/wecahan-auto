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
    Target, 
    Zap, 
    ShieldCheck, 
    Layers, 
    Activity, 
    FileSearch, 
    Wrench, 
    AlertCircle, 
    Info,
    CheckCircle2,
    Briefcase,
    TrendingUp,
    LayoutDashboard,
    ClipboardList,
    Workflow,
    Search
} from 'lucide-react';

// --- Helpers ---
const resolveCtaLabel = (cta: any) => typeof cta === 'string' ? cta : cta.label;
const resolveCtaHref = (cta: any) => typeof cta === 'string' ? '#' : cta.href;

// --- Blocks ---

// 1. Hero Block
export function GlobalUseCasesHeroBlock({ content, className }: { content: any, className?: string }) {
    const { eyebrow, title, description, primaryCta, secondaryCta, helperBullets } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="pt-16 pb-12 md:pt-32 md:pb-24 lg:pt-32 lg:pb-32">
                <div className="max-w-4xl">
                    <SectionEyebrow className="mb-4 text-neutral-400">{eyebrow}</SectionEyebrow>
                    <SectionTitle size="lg" className="mb-6 md:mb-8 tracking-tight leading-[1.1] max-w-3xl">
                        {title}
                    </SectionTitle>
                    <SectionDescription className="mb-10 md:mb-12 text-neutral-500 text-lg md:text-xl leading-relaxed max-w-2xl">
                        {description}
                    </SectionDescription>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 md:mb-12">
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
                        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 md:pt-10 border-t border-neutral-100">
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

// 2. Why It Matters Block
export function GlobalUseCasesWhyItMattersBlock({ content, className }: { content: any, className?: string }) {
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
                                {idx === 1 && <Workflow size={18} />}
                                {idx === 2 && <Search size={18} />}
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

// 3. Category Navigation Block (Static UI for now)
export function GlobalUseCasesCategoryNavigationBlock({ content, className }: { content: any, className?: string }) {
    const { title, categories } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-8 md:py-12 border-b border-neutral-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400">{title}</h2>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat: any, idx: number) => (
                            <button 
                                key={cat.id} 
                                className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all ${
                                    idx === 0 
                                    ? 'bg-neutral-900 text-white shadow-lg shadow-black/10' 
                                    : 'bg-neutral-50 text-neutral-400 border border-neutral-100 hover:bg-neutral-100'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 4. Accounting firm Use Cases Block
export function GlobalUseCasesAccountingCasesBlock({ content, className }: { content: any, className?: string }) {
    const { title, intro, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <SectionHeader title={title} description={intro} align="left" className="mb-12 md:mb-20" />
                <div className="space-y-16 md:space-y-24 lg:space-y-32">
                    {items.map((item: any, idx: number) => (
                        <div key={idx} className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
                            <div>
                                <div className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-4">
                                    Case Study {String(idx + 1).padStart(2, '0')}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 md:mb-6 tracking-tight leading-tight">
                                    {item.title}
                                </h3>
                                <div className="space-y-6 md:space-y-8">
                                    <div className="p-5 md:p-6 rounded-2xl bg-neutral-50 border border-neutral-100">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3">The Context</h4>
                                        <p className="text-sm text-neutral-700 font-medium leading-relaxed italic">"{item.context}"</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-3">Recurring Friction</h4>
                                        <p className="text-sm text-neutral-600 font-medium leading-relaxed">{item.friction}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4">Expected Outcomes</h4>
                                        <ul className="grid gap-3">
                                            {item.outcome.map((point: string, pIdx: number) => (
                                                <li key={pIdx} className="flex items-center gap-3">
                                                    <div className="h-1 w-1 rounded-full bg-neutral-900" />
                                                    <span className="text-[12px] font-bold text-neutral-800 tracking-tight">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-5 md:pt-6 border-t border-neutral-100">
                                        <Link href={resolveCtaHref(item.cta)}>
                                            <button className="group flex items-center gap-2 text-sm font-bold text-neutral-900 tracking-tight hover:text-neutral-500 transition-colors">
                                                {resolveCtaLabel(item.cta)}
                                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <CardBase className="p-6 md:p-10 lg:p-12 bg-white border-neutral-100 shadow-sm rounded-[3rem] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-50 -mr-16 -mt-16 rounded-full blur-3xl opacity-50" />
                                <div className="relative z-10">
                                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-6 md:mb-10 text-center">Example Workflow Structure</h4>
                                    <div className="space-y-4">
                                        {item.workflow.map((step: string, sIdx: number) => (
                                            <div key={sIdx} className="flex items-center gap-4 group">
                                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100 text-[10px] font-black text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                                                    {String(sIdx + 1).padStart(2, '0')}
                                                </div>
                                                <div className="h-px flex-grow bg-neutral-50 group-hover:bg-neutral-100 transition-colors" />
                                                <div className="text-right">
                                                    <span className="text-[13px] font-bold text-neutral-800 tracking-tight">{step}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="mt-12 pt-8 md:mt-16 md:pt-10 border-t border-neutral-50">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-300 mb-6 text-center italic">Best Fit For</h4>
                                        <div className="flex flex-wrap justify-center gap-3">
                                            {item.bestFit.map((fit: string, fIdx: number) => (
                                                <span key={fIdx} className="px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-100 text-[11px] font-bold text-neutral-500 uppercase tracking-tight">
                                                    {fit}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardBase>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 5. Adjacent Use Cases Block
export function GlobalUseCasesAdjacentCasesBlock({ content, className }: { content: any, className?: string }) {
    const { title, intro, items } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/30 ${className}`}>
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <SectionHeader title={title} description={intro} align="left" className="mb-10 md:mb-16" />
                <div className="grid gap-8 md:grid-cols-2">
                    {items.map((item: any, idx: number) => (
                        <CardBase key={idx} className="p-6 md:p-10 bg-white border-neutral-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-neutral-900 mb-6 tracking-tight">{item.title}</h3>
                            <div className="space-y-6">
                                <p className="text-sm text-neutral-500 font-medium leading-relaxed italic">"{item.context}"</p>
                                <div className="pt-6 border-t border-neutral-50">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4">Core Workflow</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {item.workflow.map((step: string, sIdx: number) => (
                                            <div key={sIdx} className="flex items-center gap-2">
                                                <span className="text-[12px] font-bold text-neutral-800">{step}</span>
                                                {sIdx < item.workflow.length - 1 && <ArrowRight size={12} className="text-neutral-300" />}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-neutral-50">
                                    <Link href={resolveCtaHref(item.cta)}>
                                        <button className="text-[11px] font-black uppercase tracking-widest text-neutral-900 hover:text-neutral-500 transition-colors">
                                            {resolveCtaLabel(item.cta)}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 6. Meaning Block (What these show)
export function GlobalUseCasesMeaningBlock({ content, className }: { content: any, className?: string }) {
    const { title, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <SectionHeader title={title} align="center" className="mb-10 md:mb-16" />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item: any, idx: number) => (
                        <CardBase key={idx} className="p-6 md:p-8 border-neutral-100 rounded-3xl group hover:bg-neutral-50 transition-colors">
                            <h3 className="text-[15px] font-bold text-neutral-900 mb-3 tracking-tight">{item.title}</h3>
                            <p className="text-[13px] text-neutral-500 leading-relaxed font-medium">{item.description}</p>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 7. Fit & Adaptation Block
export function GlobalUseCasesFitAdaptationBlock({ content, className }: { content: any, className?: string }) {
    const { goodFit, adaptationNote } = content;
    return (
        <SectionWrapper className={`bg-neutral-50/50 ${className}`}>
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div>
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="h-8 w-8 rounded-full bg-neutral-900 flex items-center justify-center text-white">
                                <Check size={16} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-neutral-900">{goodFit.title}</h3>
                        </div>
                        <div className="space-y-4">
                            {goodFit.points.map((item: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <ArrowRight size={14} className="mt-1 text-neutral-300 flex-shrink-0" />
                                    <span className="text-sm font-semibold text-neutral-700 leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="h-8 w-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400">
                                <Info size={16} />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-neutral-900">{adaptationNote.title}</h3>
                        </div>
                        <div className="space-y-4">
                            {adaptationNote.points.map((item: string, idx: number) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="h-1.5 w-1.5 rounded-full bg-neutral-100 mt-1.5 flex-shrink-0" />
                                    <span className="text-sm font-medium text-neutral-400 leading-snug italic">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// 8. Final CTA Block
export function GlobalUseCasesFinalCtaBlock({ content, className }: { content: any, className?: string }) {
    const { title, description, primaryCta, secondaryCta, secondaryLinks, helperNotes } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <CardBase className="p-10 md:p-20 lg:p-24 bg-neutral-900 rounded-[4rem] text-center max-w-5xl mx-auto border-none shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                    <div className="relative z-10">
                        <SectionTitle size="md" className="text-white mb-4 md:mb-6 tracking-tight max-w-2xl mx-auto leading-tight">{title}</SectionTitle>
                        <SectionDescription className="text-neutral-500 mb-10 md:mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                            {description}
                        </SectionDescription>
                        
                        <div className="flex flex-col items-center gap-10 md:gap-12">
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

                            {helperNotes && (
                                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                                    {helperNotes.map((note: string, idx: number) => (
                                        <p key={idx} className="text-[10px] text-neutral-500 italic font-bold tracking-widest uppercase">
                                            {note}
                                        </p>
                                    ))}
                                </div>
                            )}
                            
                            {secondaryLinks && (
                                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 pt-10 md:pt-12 border-t border-neutral-800/50 w-full max-w-2xl mx-auto">
                                    {secondaryLinks.map((link: any, idx: number) => (
                                        <Link key={idx} href={link.href} className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
                                            {link.label}
                                            <ArrowRight size={14} className="text-neutral-700 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
