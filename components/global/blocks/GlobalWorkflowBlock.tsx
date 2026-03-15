import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';

interface WorkflowItem {
    step: string;
    title: string;
    description: string;
}

export interface GlobalWorkflowBlockProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        items: WorkflowItem[];
    };
    className?: string;
}

export function GlobalWorkflowBlock({ content, className }: GlobalWorkflowBlockProps) {
    const { eyebrow, title, description, items } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24 border-y border-neutral-100 bg-neutral-50/50">
                <SectionHeader
                    align="center"
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />

                <div className="mt-16 md:mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            className="relative flex h-full flex-col p-8 bg-transparent shadow-none border-none sm:border-l sm:border-neutral-200 sm:rounded-none sm:pl-8 sm:pr-0 sm:py-4 transition-all hover:bg-white hover:shadow-sm sm:hover:bg-transparent sm:hover:shadow-none"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold tracking-widest text-white shadow-sm">
                                {item.step}
                            </div>
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
