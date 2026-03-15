import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';

interface ServiceItem {
    title: string;
    description: string;
    label?: string;
}

export interface GlobalServicesBlockProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        items: ServiceItem[];
    };
    className?: string;
}

export function GlobalServicesBlock({ content, className }: GlobalServicesBlockProps) {
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

                <div className="mt-12 md:mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            className="flex h-full flex-col p-8 bg-white border border-neutral-100 shadow-sm transition-shadow hover:shadow-md"
                        >
                            {item.label && (
                                <span className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
                                    {item.label}
                                </span>
                            )}
                            <h3 className="mb-4 text-xl font-semibold tracking-tight text-neutral-900">
                                {item.title}
                            </h3>
                            <BodyText className="text-neutral-600 leading-relaxed">
                                {item.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
