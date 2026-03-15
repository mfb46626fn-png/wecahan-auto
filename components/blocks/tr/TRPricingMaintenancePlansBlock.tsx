import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { trPricingContent } from '../../../content/tr/pricing';

export function TRPricingMaintenancePlansBlock() {
    const { maintenancePlans, hero } = trPricingContent;

    const resolveCtaLabel = (cta: string | { label: string; href: string }) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    return (
        <div id="maintenance-plans">
            <SectionWrapper className="bg-neutral-50/50">
                <ContentContainer className="py-16 md:py-24">
                    <SectionHeader
                        eyebrow="Adım 3"
                        title={maintenancePlans.title}
                        description={maintenancePlans.description}
                        align="center"
                        className="mb-16 md:mb-24"
                    />

                    <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
                        {maintenancePlans.plans.map((plan, index) => {
                            const isRecommended = index === 1; // Standart Bakım
                            
                            return (
                                <CardBase 
                                    key={index} 
                                    size="lg" 
                                    className={`flex flex-col h-full bg-white transition-all duration-500 hover:translate-y-[-8px] ${
                                        isRecommended 
                                            ? 'border-black shadow-2xl shadow-neutral-200 ring-1 ring-black relative z-10' 
                                            : 'border-neutral-100 shadow-sm'
                                    }`}
                                >
                                    {isRecommended && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <span className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                                En Dengeli Bakım Modeli
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                            {plan.title}
                                        </h3>
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-2xl font-black text-neutral-900">
                                                {plan.band}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-neutral-500 leading-relaxed min-h-[40px]">
                                            {plan.suitableFor}
                                        </p>
                                    </div>

                                    <div className="space-y-6 flex-grow">
                                        <div className="pt-6 border-t border-neutral-100">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                                Plan Kapsamı
                                            </h4>
                                            <ul className="space-y-4">
                                                {plan.scope.map((item, sIndex) => (
                                                    <li key={sIndex} className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-black" />
                                                        <span className="text-sm font-semibold text-neutral-700">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
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
                        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                            <p className="text-xs font-semibold text-neutral-500 leading-relaxed italic">
                                <span className="font-bold text-neutral-900 not-italic">Önemli Not:</span> {maintenancePlans.note}
                            </p>
                        </div>
                        
                        <div className="mt-12">
                            <a href="#included-scope">
                                <SecondaryButton className="!px-10">
                                    Detaylı Kapsamı Gör
                                </SecondaryButton>
                            </a>
                        </div>
                    </div>
                </ContentContainer>
            </SectionWrapper>
        </div>
    );
}
