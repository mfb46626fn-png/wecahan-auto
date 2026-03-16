import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { trScenariosContent, CtaConfig } from '../../../../content/tr/scenarios';

export function TRScenariosContactCtaBlock() {
    const { contactCta } = trScenariosContent;

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
                        className="bg-neutral-50/50 border-neutral-100 p-8 md:p-16 text-center rounded-[3rem] overflow-hidden relative shadow-sm"
                    >
                        {/* Soft decorative background element */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-neutral-900/[0.03] rounded-full blur-[100px] -translate-y-1/2" />
                        
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
                                    href={resolveCtaHref(contactCta.primaryCta, '/fiyatlandirma#brief-form')} 
                                    className="w-full sm:w-auto"
                                >
                                    <PrimaryButton className="w-full sm:w-auto !px-12 !py-4 shadow-xl shadow-black/10 text-sm font-bold">
                                        {resolveCtaLabel(contactCta.primaryCta)}
                                    </PrimaryButton>
                                </a>
                                <a 
                                    href={resolveCtaHref(contactCta.secondaryCta, 'https://wa.me/')} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <SecondaryButton className="w-full sm:w-auto !px-12 !py-4 bg-white text-sm font-bold">
                                        {resolveCtaLabel(contactCta.secondaryCta)}
                                    </SecondaryButton>
                                </a>
                            </div>

                            {contactCta.helperText && (
                                <BodyText className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">
                                    {contactCta.helperText}
                                </BodyText>
                            )}
                        </div>

                        {/* Professional Closure Detail */}
                        <div className="mt-16 pt-8 border-t border-neutral-100/60">
                            <div className="flex flex-wrap items-center justify-center gap-6 opacity-30 grayscale contrast-125">
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-900">
                                    Strategic
                                </span>
                                <div className="w-1 h-1 rounded-full bg-neutral-400" />
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-900">
                                    Operational
                                </span>
                                <div className="w-1 h-1 rounded-full bg-neutral-400" />
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-900">
                                    Automated
                                </span>
                            </div>
                        </div>
                    </CardBase>
                </div>
                
                {/* Final Safety/Context Note */}
                <div className="mt-16 text-center">
                    <p className="max-w-xl mx-auto text-[10px] font-bold text-neutral-300 uppercase tracking-[0.2em] leading-relaxed">
                        Kendi iş akışınızı örnek senaryolarla karşılaştırmak veya <br />
                        mevcut dağınıklığı nasıl toparlayacağımızı konuşmak için değerlendirme alabilirsiniz.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
