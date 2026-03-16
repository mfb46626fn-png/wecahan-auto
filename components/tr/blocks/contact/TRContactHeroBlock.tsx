import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { trContactContent, CtaConfig } from '../../../../content/tr/contact';

export function TRContactHeroBlock() {
    const { hero } = trContactContent;

    const resolveCtaLabel = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const resolveCtaHref = (cta: CtaConfig, fallback: string) => {
        return typeof cta === 'string' ? fallback : cta.href;
    };

    return (
        <SectionWrapper className="bg-white overflow-hidden relative border-b border-neutral-100">
            {/* Soft, premium background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 -z-10 opacity-60" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neutral-100/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 -z-10" />

            <ContentContainer className="pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36">
                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader
                        eyebrow={hero.eyebrow}
                        title={hero.title}
                        description={hero.description}
                        align="center"
                        maxWidth="lg"
                        className="mb-12"
                    />

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <a href={resolveCtaHref(hero.primaryCta, '#form')} className="w-full sm:w-auto">
                            <PrimaryButton className="w-full sm:w-auto !px-12 !py-4.5 shadow-xl shadow-black/5 hover:shadow-black/10 transition-all font-bold text-sm tracking-tight">
                                {resolveCtaLabel(hero.primaryCta)}
                            </PrimaryButton>
                        </a>
                        <a href={resolveCtaHref(hero.secondaryCta, 'https://wa.me/')} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <SecondaryButton className="w-full sm:w-auto !px-12 !py-4.5 bg-white border-neutral-200 font-bold text-sm tracking-tight">
                                {resolveCtaLabel(hero.secondaryCta)}
                            </SecondaryButton>
                        </a>
                    </div>

                    {hero.helperText && (
                        <div className="flex flex-col items-center justify-center gap-3">
                            <div className="flex items-center gap-4 opacity-40">
                                <div className="h-px w-6 bg-neutral-300" />
                                <svg className="w-3 h-3 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-1-7h2v2h-2v-2zm0-4h2v3h-2V9z" />
                                </svg>
                                <div className="h-px w-6 bg-neutral-300" />
                            </div>
                            <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.25em] leading-relaxed">
                                {hero.helperText}
                            </p>
                        </div>
                    )}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
