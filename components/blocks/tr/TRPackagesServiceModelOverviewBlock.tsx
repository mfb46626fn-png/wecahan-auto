import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { trPackagesContent } from '../../../content/tr/packages';

export function TRPackagesServiceModelOverviewBlock() {
    const { serviceModelOverview } = trPackagesContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer>
                <SectionHeader
                    eyebrow={serviceModelOverview.eyebrow}
                    title={serviceModelOverview.title}
                    description={serviceModelOverview.description}
                    align="center"
                    className="mb-16"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {serviceModelOverview.items.map((item, index) => (
                        <CardBase 
                            key={index}
                            size="md"
                            className="bg-white border-neutral-100 hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white text-sm font-bold">
                                        0{index + 1}
                                    </span>
                                    <div className="h-0.5 flex-grow mx-4 bg-neutral-100 rounded-full lg:block hidden last:hidden" aria-hidden="true" />
                                </div>
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
