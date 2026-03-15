import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { BodyText } from '../../shared/typography/BodyText';
import { trPricingContent } from '../../../content/tr/pricing';

export function TRPricingAnalysisBlock() {
    const { analysisPricing, hero } = trPricingContent;

    const resolveCtaLabel = (cta: string | { label: string; href: string }) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer>
                <SectionHeader
                    eyebrow="Adım 1"
                    title={analysisPricing.title}
                    description="Otomasyon inşasına başlamadan önce mevcut süreçlerinizi analiz ediyor ve en verimli teknoloji haritasını çıkarıyoruz."
                    align="center"
                    className="mb-16"
                />

                <CardBase size="lg" className="bg-white border-neutral-200 overflow-hidden shadow-sm max-w-5xl mx-auto">
                    {/* Header: Price Band */}
                    <div className="bg-black p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between border-b border-neutral-800">
                        <div>
                            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">
                                Yatırım Aralığı
                            </p>
                            <h3 className="text-3xl font-bold text-white">
                                {analysisPricing.band}
                            </h3>
                        </div>
                        <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-4">
                            <a href="#brief-form">
                                <PrimaryButton className="bg-white hover:bg-neutral-100 text-black border-none !px-8">
                                    {resolveCtaLabel(hero.primaryCta)}
                                </PrimaryButton>
                            </a>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid gap-12 md:grid-cols-3">
                            {/* What's Included */}
                            <div>
                                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    Neleri Kapsar?
                                </h4>
                                <ul className="space-y-4">
                                    {analysisPricing.scope.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 mt-1 h-1 w-1 rounded-full bg-neutral-300" />
                                            <BodyText className="text-sm text-neutral-600">
                                                {item}
                                            </BodyText>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* What's Not Included */}
                            <div>
                                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    Neler Dahil Değil?
                                </h4>
                                <ul className="space-y-4">
                                    {analysisPricing.notIncluded.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 mt-1 h-1 w-1 rounded-full bg-neutral-300" />
                                            <BodyText className="text-sm text-neutral-500 line-through decoration-neutral-300">
                                                {item}
                                            </BodyText>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Factors */}
                            <div>
                                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    Bandı Ne Etkiler?
                                </h4>
                                <ul className="space-y-4">
                                    {analysisPricing.factors.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 mt-1.5 text-blue-500">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <BodyText className="text-sm text-neutral-600 font-medium">
                                                {item}
                                            </BodyText>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 pt-10 border-t border-neutral-100 flex flex-col items-center text-center">
                            <BodyText className="text-sm text-neutral-500 max-w-2xl mb-8">
                                Analiz süreci sonunda, kliniğiniz veya ofisiniz için en uygun otomasyon seviyesi netleşir ve kurulum aşamasına tam hakimiyetle geçilir.
                            </BodyText>
                            <a href="#setup-packages">
                                <SecondaryButton className="!px-10">
                                    {resolveCtaLabel(hero.secondaryCta)}
                                </SecondaryButton>
                            </a>
                        </div>
                    </div>
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
