import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';

interface WorkflowItemContent {
    step: string;
    title: string;
    description: string;
}

export interface CenterWorkflowBlockProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        items: WorkflowItemContent[];
    };
    className?: string;
}

export function CenterWorkflowBlock({ content, className }: CenterWorkflowBlockProps) {
    const { eyebrow, title, description, items } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24 bg-gray-50/50 rounded-3xl">
                <SectionHeader
                    align="center"
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />

                <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <CardBase key={index} className="relative flex h-full flex-col p-6 md:p-8 border-transparent shadow-sm hover:shadow-md transition-shadow">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                                {item.step}
                            </div>
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
