import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { trPricingContent } from '../../../content/tr/pricing';

export function TRPricingAdditionalDevelopmentBlock() {
    const { additionalDevLogic, hero } = trPricingContent;

    const resolveCtaLabel = (cta: string | { label: string; href: string }) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={additionalDevLogic.title}
                    description="Bakım süreçlerinden bağımsız, sisteminize yeni yetenekler ve modüller eklemek istediğinizde uyguladığımız şeffaf fiyatlandırma mantığı."
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="border-neutral-100 bg-neutral-50/30 overflow-hidden"
                    >
                        <div className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">
                                        Fiyat Mantığı
                                    </h3>
                                    <p className="text-3xl font-black text-neutral-900">
                                        {additionalDevLogic.band}
                                    </p>
                                </div>
                                <div className="max-w-sm">
                                    <p className="text-sm font-medium text-neutral-500 leading-relaxed italic">
                                        * {additionalDevLogic.whyWideRange}
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-12 md:grid-cols-2">
                                {/* Scope Section */}
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-6">
                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-[10px]">✓</span>
                                        Bu Kalem Neleri Kapsayabilir?
                                    </h4>
                                    <ul className="space-y-4">
                                        {additionalDevLogic.scope.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-700">
                                                <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-300" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Not Included Section */}
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-6">
                                        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-neutral-200 text-neutral-400 text-[10px]">×</span>
                                        Bu Kalem Neleri Kapsamaz?
                                    </h4>
                                    <ul className="space-y-4">
                                        {additionalDevLogic.notIncluded.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-500 line-through decoration-neutral-300">
                                                <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-100" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-16 pt-10 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#brief-form" className="w-full sm:w-auto">
                                    <PrimaryButton className="w-full sm:w-auto !px-12">
                                        {resolveCtaLabel(hero.primaryCta)}
                                    </PrimaryButton>
                                </a>
                                <a href="#what-affects-price" className="w-full sm:w-auto">
                                    <SecondaryButton className="w-full sm:w-auto !px-12">
                                        Fiyat Faktörlerini Gör
                                    </SecondaryButton>
                                </a>
                            </div>
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
