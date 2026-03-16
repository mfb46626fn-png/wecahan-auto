import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionEyebrow } from '../../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../../shared/typography/SectionTitle';
import { SectionDescription } from '../../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import Link from 'next/link';

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

/**
 * CenterHomeHeroBlock - The primary entry point for auto.wecahan.com.
 * Focused on brand identity, clarity, and low-pressure navigation.
 */
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
                href: '#contact', // Default fallback for brand vitrine
            };
        }
        return cta;
    };

    const primary = resolveCta(primaryCta);
    const secondary = secondaryCta ? resolveCta(secondaryCta) : null;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="relative py-24 md:py-32 lg:py-40">
                {/* Subtle Background Accent */}
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
