import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { trPricingContent } from '../../../content/tr/pricing';

export function TRPricingWhatAffectsPriceBlock() {
    const { howPricingIsCalculated } = trPricingContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={howPricingIsCalculated.title}
                    description={howPricingIsCalculated.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
                    {howPricingIsCalculated.factors.map((factor, index) => (
                        <CardBase 
                            key={index}
                            size="md"
                            className="bg-white border-neutral-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-200"
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                                    {factor.title}
                                </h3>
                                <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                                    {factor.description}
                                </p>
                            </div>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-xl mx-auto text-[13px] text-neutral-400 font-medium italic">
                        * Bu değişkenler işletmenizin ihtiyaçlarına göre analiz aşamasında netleştirilir ve paket seçiminizi belirler.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
