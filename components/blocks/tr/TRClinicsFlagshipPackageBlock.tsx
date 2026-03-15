import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
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

export function TRClinicsFlagshipPackageBlock() {
    const { flagshipPackage } = trClinicsContent;

    const primaryCta = resolveCta(flagshipPackage.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(flagshipPackage.secondaryCta, '#iletisim');

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={flagshipPackage.title}
                    description={flagshipPackage.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="relative overflow-hidden border-neutral-200 shadow-xl shadow-neutral-100"
                    >
                        {/* Featured Badge */}
                        <div className="absolute top-0 right-0">
                            <div className="bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-bl-xl">
                                Amiral Paket
                            </div>
                        </div>

                        <div className="grid gap-12 md:grid-cols-2">
                            {/* Left: Scope List */}
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">
                                    Paket Kapsamı
                                </h3>
                                <ul className="space-y-4">
                                    {flagshipPackage.scope.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-800">
                                            <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center text-[10px] text-black border border-neutral-200">
                                                ✓
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right: Suitable For & CTAs */}
                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">
                                    Kimler İçin Uygun?
                                </h3>
                                <ul className="space-y-3 mb-10">
                                    {flagshipPackage.suitableFor.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                                            <span className="flex-shrink-0 mt-2 h-1 w-1 rounded-full bg-neutral-300" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto space-y-3">
                                    <a href={primaryCta.href} className="block">
                                        <PrimaryButton fullWidth className="!py-4 text-base">
                                            {primaryCta.label}
                                        </PrimaryButton>
                                    </a>
                                    <a href={secondaryCta.href} className="block">
                                        <SecondaryButton fullWidth className="!py-4 text-base">
                                            {secondaryCta.label}
                                        </SecondaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardBase>
                    
                    <p className="mt-8 text-center text-xs font-medium text-neutral-400">
                        * Bu paket, kliniğinize özel ihtiyaçlara göre modüler olarak genişletilebilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
