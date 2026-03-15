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

export interface TRWorkflowBlockProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        items: WorkflowItem[];
    };
    className?: string;
}

export function TRWorkflowBlock({ content, className }: TRWorkflowBlockProps) {
    const { eyebrow, title, description, items } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24 bg-neutral-50 rounded-2xl md:rounded-3xl border border-neutral-200/60">
                <SectionHeader
                    align="center"
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                />

                <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <CardBase key={index} className="relative flex h-full flex-col p-6 md:p-8 bg-white border border-neutral-100 shadow-sm">
                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded bg-neutral-900 text-sm font-bold text-white">
                                {item.step}
                            </div>
                            <h3 className="mb-3 text-lg font-bold text-neutral-900">
                                {item.title}
                            </h3>
                            <BodyText className="text-neutral-600">
                                {item.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
