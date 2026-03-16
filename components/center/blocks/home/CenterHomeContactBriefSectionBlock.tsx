import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import Link from 'next/link';

type CtaConfig = string | { label: string; href: string };

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

/**
 * CenterHomeContactBriefSectionBlock - The final call-to-action for auto.wecahan.com.
 * Designed to be professional, low-pressure, and brand-consistent.
 */
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
    const secondary = resolveCta(secondaryCta, '#brief'); // Or another relevant anchor/page

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32 lg:py-40">
                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="relative overflow-hidden bg-white border-slate-100 shadow-2xl shadow-slate-200/60 rounded-[3rem] p-10 md:p-20 text-center"
                    >
                        {/* Subtle Background Geometric Pattern (Optional) */}
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

// Internal CardBase to avoid import depth if possible, but we have shared CardBase.
// Using shared CardBase from layout/ui primitives.
import { CardBase } from '../../../shared/ui/CardBase';
