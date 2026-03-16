import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { trContactContent, CtaConfig } from '../../../../content/tr/contact';

export function TRContactContactCtaBlock() {
    const { contactCta } = trContactContent;

    const resolveCtaLabel = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const resolveCtaHref = (cta: CtaConfig, fallback: string) => {
        return typeof cta === 'string' ? fallback : cta.href;
    };

    return (
        <SectionWrapper className="bg-white border-t border-neutral-100">
            <ContentContainer className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="bg-neutral-900 border-neutral-800 p-10 md:p-20 text-center rounded-[3rem] overflow-hidden relative shadow-2xl shadow-black/20"
                    >
                        {/* Dramatic decorative background glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
                        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px]" />
                        
                        <div className="relative z-10">
                            <SectionHeader
                                title={<span className="text-white">{contactCta.title}</span>}
                                description={<span className="text-neutral-400">{contactCta.description}</span>}
                                align="center"
                                maxWidth="md"
                                className="mb-12"
                            />

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                                <a 
                                    href={resolveCtaHref(contactCta.primaryCta, '#form')} 
                                    className="w-full sm:w-auto"
                                >
                                    <PrimaryButton className="w-full sm:w-auto !px-12 !py-4.5 bg-white text-neutral-900 border-white hover:bg-neutral-100 shadow-xl shadow-black/10 text-sm font-bold tracking-tight">
                                        {resolveCtaLabel(contactCta.primaryCta)}
                                    </PrimaryButton>
                                </a>
                                <a 
                                    href={resolveCtaHref(contactCta.secondaryCta, 'https://wa.me/')} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <SecondaryButton className="w-full sm:w-auto !px-12 !py-4.5 bg-neutral-800 text-white border-neutral-700 hover:bg-neutral-700 text-sm font-bold tracking-tight">
                                        {resolveCtaLabel(contactCta.secondaryCta)}
                                    </SecondaryButton>
                                </a>
                            </div>

                            {contactCta.helperText && (
                                <BodyText className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.3em] inline-block px-4 py-1.5 border border-neutral-800 rounded-full">
                                    {contactCta.helperText}
                                </BodyText>
                            )}
                        </div>
                    </CardBase>
                </div>
                
                {/* Final Professional Affirmation */}
                <div className="mt-16 text-center">
                    <p className="max-w-xl mx-auto text-[10px] font-bold text-neutral-300 uppercase tracking-[0.25em] leading-relaxed">
                        Gerçek zamanlı operasyon analizi ve dijital dönüşüm süreçlerinde <br />
                        Türkiye genelinde yanınızdayız.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
