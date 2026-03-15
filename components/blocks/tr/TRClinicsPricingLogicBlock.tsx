import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { trClinicsContent } from '../../../content/tr/clinics';

type CtaConfig = string | { label: string; href: string };

const resolveCta = (cta: CtaConfig, defaultHref: string) => {
    if (typeof cta === 'string') {
        return { label: cta, href: defaultHref };
    }
    return cta;
};

export function TRClinicsPricingLogicBlock() {
    const { pricingLogic } = trClinicsContent;
    const resolvedCta = resolveCta(pricingLogic.cta, '/fiyatlandirma');

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={pricingLogic.title}
                    description={pricingLogic.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="max-w-4xl mx-auto">
                    <CardBase size="lg" className="bg-neutral-50/50 border-neutral-100 p-8 md:p-12">
                        <div className="grid gap-12 md:grid-cols-2">
                            {/* Left: Factors Header */}
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                                    Fiyatı Belirleyen Ana Unsurlar
                                </h3>
                                <BodyText className="text-neutral-600 mb-8">
                                    Size özel bir kapsam çıkarabilmemiz için operasyonunuzun hacmini ve ihtiyaç duyduğunuz otomasyon derinliğini analiz ediyoruz.
                                </BodyText>
                                
                                <div className="space-y-4">
                                    <a href={resolvedCta.href} className="block">
                                        <PrimaryButton fullWidth>
                                            {resolvedCta.label}
                                        </PrimaryButton>
                                    </a>
                                    <a href="#brief-form" className="block">
                                        <SecondaryButton fullWidth>
                                            Sürecimi Paylaş
                                        </SecondaryButton>
                                    </a>
                                </div>
                            </div>

                            {/* Right: Factors List */}
                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 shadow-sm">
                                <ul className="space-y-5">
                                    {pricingLogic.factors.map((factor, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 mt-1 h-2 w-2 rounded-full bg-black/20" />
                                            <span className="text-sm font-semibold text-neutral-800">
                                                {factor}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-8 pt-6 border-t border-neutral-100">
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                                        Modüler ve Ölçeklenebilir Yapı
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
