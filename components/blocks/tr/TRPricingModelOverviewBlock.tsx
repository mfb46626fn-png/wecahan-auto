import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { trPricingContent } from '../../../content/tr/pricing';

export function TRPricingModelOverviewBlock() {
    const { pricingPhilosophy } = trPricingContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer>
                <SectionHeader
                    title={pricingPhilosophy.title}
                    description={pricingPhilosophy.description}
                    align="center"
                    className="mb-16"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {pricingPhilosophy.items.map((item, index) => (
                        <CardBase 
                            key={index}
                            size="md"
                            className="bg-neutral-50/50 border-neutral-100 hover:bg-white hover:border-neutral-200 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white text-xs font-bold mb-4">
                                    0{index + 1}
                                </span>
                                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
