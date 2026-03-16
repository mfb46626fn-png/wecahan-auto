import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trPackagesContent } from '../../../content/tr/packages';

export function TRPackagesAdditionalDevelopmentBlock() {
    const { additionalDevelopment } = trPackagesContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={additionalDevelopment.title}
                    description={additionalDevelopment.description}
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
                            <div className="grid gap-12 md:grid-cols-2">
                                {/* Examples Section */}
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-6">
                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-[10px]">✓</span>
                                        Ek Geliştirme Örnekleri
                                    </h4>
                                    <ul className="space-y-4">
                                        {additionalDevelopment.examples.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-700">
                                                <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-300" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* What is NOT included Section */}
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-6">
                                        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-neutral-200 text-neutral-400 text-[10px]">×</span>
                                        Bu Kapsama Girmez
                                    </h4>
                                    <ul className="space-y-4">
                                        {additionalDevelopment.notThis.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-500 line-through decoration-neutral-300">
                                                <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-100" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Why Separate Rationale */}
                            <div className="mt-12 pt-10 border-t border-neutral-100">
                                <div className="p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                                    <p className="text-xs font-semibold text-neutral-500 leading-relaxed italic">
                                        <span className="font-bold text-neutral-900 not-italic uppercase tracking-widest text-[10px] mr-2">Neden Ayrı?</span> 
                                        {additionalDevelopment.whySeparate}
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
