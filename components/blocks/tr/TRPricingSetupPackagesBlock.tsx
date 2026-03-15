import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { BodyText } from '../../shared/typography/BodyText';
import { trPricingContent } from '../../../content/tr/pricing';

export function TRPricingSetupPackagesBlock() {
    const { setupPackages, hero } = trPricingContent;

    const resolveCtaLabel = (cta: string | { label: string; href: string }) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    return (
        <div id="setup-packages">
            <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    eyebrow="Adım 2"
                    title={setupPackages.title}
                    description={setupPackages.description}
                    align="center"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
                    {setupPackages.levels.map((level, index) => {
                        const isRecommended = index === 1; // Orta Seviye Kurulum
                        
                        return (
                            <CardBase 
                                key={index} 
                                size="lg" 
                                className={`flex flex-col h-full transition-all duration-500 hover:translate-y-[-8px] ${
                                    isRecommended 
                                        ? 'border-black shadow-2xl shadow-neutral-200 ring-1 ring-black relative z-10' 
                                        : 'border-neutral-100 bg-neutral-50/50'
                                }`}
                            >
                                {isRecommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                            En Çok Tercih Edilen
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                        {level.title}
                                    </h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-2xl font-black text-neutral-900">
                                            {level.band}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-neutral-500 leading-relaxed min-h-[40px]">
                                        {level.suitableFor}
                                    </p>
                                </div>

                                <div className="space-y-6 flex-grow">
                                    <div className="pt-6 border-t border-neutral-100">
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                            Neler Dahil?
                                        </h4>
                                        <ul className="space-y-4">
                                            {level.scope.map((item, sIndex) => (
                                                <li key={sIndex} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-black" />
                                                    <span className="text-sm font-semibold text-neutral-700">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-neutral-100 italic">
                                        <p className="text-[11px] text-neutral-400 font-medium">
                                            {level.whyThisBand}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-neutral-100">
                                    <a href="#brief-form" className="block w-full">
                                        <PrimaryButton 
                                            fullWidth 
                                            className={`!py-4 text-sm ${!isRecommended ? '!bg-white !text-black border border-neutral-200 hover:!bg-neutral-50' : ''}`}
                                        >
                                            {resolveCtaLabel(hero.primaryCta)}
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </CardBase>
                        );
                    })}
                </div>

                <div className="mt-16 md:mt-24 text-center">
                    <div className="max-w-2xl mx-auto p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100">
                        <BodyText className="text-sm text-neutral-500 mb-6">
                            Kurulum sonrasında sistemlerin sürekliliği ve performansı için bakım paketlerimizi incelemeyi unutmayın.
                        </BodyText>
                        <a href="#maintenance-plans">
                            <SecondaryButton className="!px-10">
                                Bakım Planlarını Gör
                            </SecondaryButton>
                        </a>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    </div>
    );
}
