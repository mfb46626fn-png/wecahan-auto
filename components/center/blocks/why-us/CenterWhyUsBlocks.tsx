import * as React from 'react';
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
import { Check, ShieldCheck, Activity, Search, Layers, Settings, ArrowUpRight } from 'lucide-react';
import type { WhyUsContent } from '../../../../content/center/why-us';

/**
 * 1. CenterWhyUsHeroBlock
 */
interface CenterWhyUsHeroBlockProps {
    content: WhyUsContent['hero'];
    className?: string;
}

export function CenterWhyUsHeroBlock({ content, className }: CenterWhyUsHeroBlockProps) {
    const { title, description, trustStatement } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="relative py-24 md:py-32 lg:py-40">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
                
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <SectionEyebrow className="mb-6 !text-indigo-500 font-bold tracking-[0.2em] uppercase">
                        Structure over Chaos
                    </SectionEyebrow>
                    
                    <SectionTitle size="lg" className="mb-8 leading-[1.1] !text-slate-900 font-black tracking-tight">
                        {title}
                    </SectionTitle>
                    
                    <SectionDescription maxWidth="lg" className="mb-12 !text-slate-500 font-medium leading-relaxed">
                        {description}
                    </SectionDescription>

                    <div className="flex items-center gap-3">
                        <div className="h-px w-8 bg-slate-200" />
                        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
                            {trustStatement}
                        </p>
                        <div className="h-px w-8 bg-slate-200" />
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. CenterWhyUsOptimizationBlock
 */
interface CenterWhyUsOptimizationBlockProps {
    content: WhyUsContent['optimization'];
    className?: string;
}

export function CenterWhyUsOptimizationBlock({ content, className }: CenterWhyUsOptimizationBlockProps) {
    const { title, description, items } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />
                
                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, index) => (
                        <CardBase 
                            key={index}
                            size="lg"
                            className="flex flex-col h-full border-slate-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-100/30 transition-all duration-300 bg-white"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg">
                                <Activity className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                            <BodyText className="text-slate-500 text-sm leading-relaxed font-medium">
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
 * 3. CenterWhyUsMethodologyBlock
 */
interface CenterWhyUsMethodologyBlockProps {
    content: WhyUsContent['methodology'];
    className?: string;
}

export function CenterWhyUsMethodologyBlock({ content, className }: CenterWhyUsMethodologyBlockProps) {
    const { title, description, pillars } = content;
    
    const getPillarIcon = (index: number) => {
        switch (index) {
            case 0: return <Search className="h-5 w-5" />;
            case 1: return <Layers className="h-5 w-5" />;
            case 2: return <Settings className="h-5 w-5" />;
            case 3: return <ArrowUpRight className="h-5 w-5" />;
            default: return <Check className="h-5 w-5" />;
        }
    };

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32 bg-slate-50/50 rounded-[3rem] border border-slate-100">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />
                
                <div className="grid gap-8 md:gap-4 lg:grid-cols-4 md:grid-cols-2 relative">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="relative group">
                            <CardBase 
                                size="lg"
                                className="flex flex-col h-full bg-white border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 rounded-[2.5rem] p-8"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition-transform group-hover:scale-110">
                                    {getPillarIcon(index)}
                                </div>
                                <h3 className="mb-4 text-xl font-bold text-slate-900 tracking-tight">
                                    {pillar.title}
                                </h3>
                                <BodyText className="text-slate-500 leading-relaxed font-medium">
                                    {pillar.description}
                                </BodyText>
                            </CardBase>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 4. CenterWhyUsPhilosophyBlock
 */
interface CenterWhyUsPhilosophyBlockProps {
    content: WhyUsContent['philosophy'];
    className?: string;
}

export function CenterWhyUsPhilosophyBlock({ content, className }: CenterWhyUsPhilosophyBlockProps) {
    const { title, description, logicPoints } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden relative">
                    {/* Visual Decor */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
                    
                    <div className="relative z-10">
                        <SectionHeader
                            title={<span className="text-white">{title}</span>}
                            description={<span className="text-slate-400">{description}</span>}
                            align="left"
                            maxWidth="lg"
                            className="mb-12"
                        />
                        
                        <div className="grid gap-4 sm:grid-cols-2">
                            {logicPoints.map((point, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className="h-2 w-2 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform" />
                                    <span className="text-sm font-medium text-slate-200">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 5. CenterWhyUsTransparencyBlock
 */
interface CenterWhyUsTransparencyBlockProps {
    content: WhyUsContent['transparency'];
    className?: string;
}

export function CenterWhyUsTransparencyBlock({ content, className }: CenterWhyUsTransparencyBlockProps) {
    const { title, description, proofPoints } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />
                
                <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
                    {proofPoints.map((point, index) => (
                        <CardBase 
                            key={index}
                            size="lg"
                            className="flex flex-col items-center text-center p-10 border-slate-100 hover:border-slate-200 rounded-[2.5rem] bg-slate-50/30"
                        >
                            <div className="mb-6 p-4 rounded-full bg-indigo-50 text-indigo-600">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-500 mb-4">
                                {point.label}
                            </span>
                            <p className="text-lg font-bold text-slate-900 leading-tight">
                                {point.value}
                            </p>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 6. CenterWhyUsIdealFitBlock
 */
interface CenterWhyUsIdealFitBlockProps {
    content: WhyUsContent['idealFit'];
    className?: string;
}

export function CenterWhyUsIdealFitBlock({ content, className }: CenterWhyUsIdealFitBlockProps) {
    const { title, description, criteria } = content;
    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />
                
                <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
                    {criteria.map((item, index) => (
                        <CardBase 
                            key={index}
                            size="lg"
                            className={`flex flex-col p-8 rounded-[2.5rem] border-2 transition-all duration-300 ${
                                item.isFit 
                                    ? 'border-emerald-50 hover:border-emerald-100 bg-emerald-50/10' 
                                    : 'border-slate-50 hover:border-slate-100 bg-slate-50/10'
                            }`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`h-3 w-3 rounded-full ${item.isFit ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                                    {item.type}
                                </h3>
                                <div className="ml-auto">
                                    <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                                        item.isFit ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'
                                    }`}>
                                        {item.isFit ? 'Target' : 'Non-Target'}
                                    </span>
                                </div>
                            </div>
                            <BodyText className="text-slate-500 font-medium leading-relaxed">
                                {item.reason}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 7. CenterWhyUsContactBridgeBlock
 */
interface CenterWhyUsContactBridgeBlockProps {
    content: WhyUsContent['contactBridge'];
    className?: string;
}

export function CenterWhyUsContactBridgeBlock({ content, className }: CenterWhyUsContactBridgeBlockProps) {
    const { title, description, primaryCta, secondaryCta } = content;
    
    const resolveCta = (cta: string | { label: string; href: string }, defaultHref: string) => {
        if (typeof cta === 'string') {
            return { label: cta, href: defaultHref };
        }
        return cta;
    };

    const primary = resolveCta(primaryCta, '/contact');
    const secondary = secondaryCta ? resolveCta(secondaryCta, '/') : null;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto bg-white border border-slate-100 shadow-2xl shadow-slate-200/60 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
                    
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                        {title}
                    </h2>
                    
                    <p className="text-slate-500 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href={primary.href} className="w-full sm:w-auto">
                            <PrimaryButton className="w-full sm:w-auto !px-12 !py-4 font-bold uppercase tracking-tight shadow-xl shadow-slate-200">
                                {primary.label}
                            </PrimaryButton>
                        </Link>
                        
                        {secondary && (
                            <Link href={secondary.href} className="w-full sm:w-auto">
                                <SecondaryButton className="w-full sm:w-auto !px-12 !py-4 font-bold uppercase tracking-tight border-slate-200 text-slate-600 hover:bg-slate-50">
                                    {secondary.label}
                                </SecondaryButton>
                            </Link>
                        )}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
