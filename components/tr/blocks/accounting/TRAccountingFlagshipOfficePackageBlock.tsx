import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { trAccountingContent } from '../../../../content/tr/accounting';

type CtaConfig = string | { label: string; href: string };

const resolveCta = (cta: CtaConfig, defaultHref: string) => {
    if (typeof cta === 'string') {
        return { label: cta, href: defaultHref };
    }
    return cta;
};

export function TRAccountingFlagshipOfficePackageBlock() {
    const { flagshipOfficePackage } = trAccountingContent;

    const primaryCta = resolveCta(flagshipOfficePackage.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(flagshipOfficePackage.secondaryCta, '/muhasebe-ofisleri/#solution-modules');

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={flagshipOfficePackage.title}
                    description={flagshipOfficePackage.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="max-w-5xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="relative overflow-hidden border-neutral-100 shadow-2xl shadow-neutral-100 bg-neutral-50/30 rounded-[2.5rem]"
                    >
                        {/* Featured Vertical Label */}
                        <div className="absolute top-0 right-0">
                            <div className="bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-bl-2xl">
                                Ana Çözüm Omurgası
                            </div>
                        </div>

                        <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] p-2 md:p-6 lg:p-10">
                            {/* Left: Scope List */}
                            <div className="flex flex-col">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8 flex items-center gap-3">
                                    <span className="w-6 h-[1px] bg-neutral-200" />
                                    Paket Kapsamı
                                </h3>
                                <ul className="space-y-5">
                                    {flagshipOfficePackage.scope.map((item, index) => (
                                        <li key={index} className="flex items-start gap-4 text-sm font-semibold text-neutral-800 leading-snug">
                                            <span className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-[10px] text-neutral-900 font-bold shadow-sm">
                                                0{index + 1}
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right: Suitable For & CTAs */}
                            <div className="flex flex-col bg-white border border-neutral-100 rounded-[2rem] p-8 md:p-10 shadow-sm">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8 flex items-center gap-3">
                                    <span className="w-6 h-[1px] bg-neutral-200" />
                                    Kime Uygun?
                                </h3>
                                <ul className="space-y-4 mb-12">
                                    {flagshipOfficePackage.suitableFor.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-600 leading-relaxed">
                                            <div className="mt-2.5 h-1 w-1 rounded-full bg-neutral-900 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto space-y-4">
                                    <a href={primaryCta.href} className="block">
                                        <PrimaryButton fullWidth className="!py-5 text-base font-bold shadow-lg shadow-black/5">
                                            {primaryCta.label}
                                        </PrimaryButton>
                                    </a>
                                    <a href={secondaryCta.href} className="block text-center">
                                        <SecondaryButton fullWidth className="!py-5 text-base font-bold bg-neutral-50 border-neutral-100">
                                            {secondaryCta.label}
                                        </SecondaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardBase>
                    
                    <p className="mt-10 text-center text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                        * Ofis yapınıza ve mevcut araçlarınıza göre modüler olarak yapılandırılır.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
