import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingCommonWorkflowProblemsBlock() {
    const { commonWorkflowProblems } = trAccountingContent;

    return (
        <SectionWrapper className="bg-white border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={commonWorkflowProblems.title}
                    description={commonWorkflowProblems.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {commonWorkflowProblems.items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="group flex flex-col h-full bg-neutral-50/50 border-neutral-100/60 hover:border-neutral-200 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500"
                        >
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-white text-[10px] font-bold tracking-widest">
                                    P{String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="h-[1px] flex-grow bg-neutral-200/60" />
                            </div>
                            
                            <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight leading-snug">
                                {item.title}
                            </h3>
                            
                            <BodyText className="text-sm leading-relaxed text-neutral-500 font-medium italic">
                                "{item.description}"
                            </BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
