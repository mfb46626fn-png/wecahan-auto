import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { trPricingContent } from '../../../content/tr/pricing';

export function TRPricingWhoThisIsForBlock() {
    const { whoThisIsFor } = trPricingContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={whoThisIsFor.title}
                    description={whoThisIsFor.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {whoThisIsFor.items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full transition-all duration-300 border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-xl hover:shadow-neutral-100 hover:border-neutral-200"
                        >
                            <div className="mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-black text-white mb-6">
                                    <span className="text-lg font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            
                            <div className="mt-auto pt-8 border-t border-neutral-100/50">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                                    Müşteri Profili
                                </p>
                            </div>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-2xl mx-auto text-sm text-neutral-400 font-medium italic">
                        * Bu model, özellikle şeffaflık ve sürdürülebilirlik odaklı işletmeler için maksimum verim sağlar.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
