import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingContactCtaBlock() {
    const { contactCta } = trAccountingContent;

    const resolveCta = (cta: typeof contactCta.primaryCta) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const resolveHref = (cta: typeof contactCta.primaryCta, fallback: string) => {
        return typeof cta === 'string' ? fallback : cta.href;
    };

    return (
        <SectionWrapper className="bg-white border-t border-neutral-100">
            <ContentContainer className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="bg-neutral-50/50 border-neutral-100 p-8 md:p-16 text-center rounded-[3rem] overflow-hidden relative"
                    >
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-black/[0.02] rounded-full blur-3xl -translate-y-1/2" />
                        
                        <div className="relative z-10">
                            <SectionHeader
                                title={contactCta.title}
                                description={contactCta.description}
                                align="center"
                                maxWidth="md"
                                className="mb-12"
                            />

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                                <a 
                                    href={resolveHref(contactCta.primaryCta, '/fiyatlandirma#brief-form')} 
                                    className="w-full sm:w-auto"
                                >
                                    <PrimaryButton className="w-full sm:w-auto !px-12 !py-4 shadow-xl shadow-black/10">
                                        {resolveCta(contactCta.primaryCta)}
                                    </PrimaryButton>
                                </a>
                                <a 
                                    href={resolveHref(contactCta.secondaryCta, 'https://wa.me/')} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <SecondaryButton className="w-full sm:w-auto !px-12 !py-4 bg-white">
                                        {resolveCta(contactCta.secondaryCta)}
                                    </SecondaryButton>
                                </a>
                            </div>

                            {contactCta.helperText && (
                                <BodyText className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                                    {contactCta.helperText}
                                </BodyText>
                            )}
                        </div>

                        {/* Bottom Branding / Trust Indicator */}
                        <div className="mt-16 pt-8 border-t border-neutral-100/50">
                            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-900">
                                    Analyze
                                </span>
                                <div className="w-1 h-1 rounded-full bg-neutral-300" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-900">
                                    Automate
                                </span>
                                <div className="w-1 h-1 rounded-full bg-neutral-300" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-900">
                                    Maintain
                                </span>
                            </div>
                        </div>
                    </CardBase>
                </div>
                
                {/* Final Safety Note */}
                <div className="mt-16 text-center">
                    <p className="max-w-2xl mx-auto text-[10px] font-bold text-neutral-300 uppercase tracking-[0.2em] leading-loose">
                        Verileriniz gizlilik prensiplerimiz çerçevesinde korunur. <br />
                        İlk görüşme için teknik altyapı hazırlamanıza gerek yoktur.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
