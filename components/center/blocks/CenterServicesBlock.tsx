import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';

interface ServiceItemContent {
    title: string;
    description: string;
    label?: string;
}

export interface CenterServicesBlockProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        items: ServiceItemContent[];
    };
    className?: string;
}

export function CenterServicesBlock({ content, className }: CenterServicesBlockProps) {
    const { eyebrow, title, description, items } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    align="center"
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />

                <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <CardBase key={index} className="flex h-full flex-col p-6 md:p-8">
                            {item.label && (
                                <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    {item.label}
                                </span>
                            )}
                            <h3 className="mb-3 text-lg font-bold text-gray-900">
                                {item.title}
                            </h3>
                            <BodyText className="text-gray-600">
                                {item.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
