import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trClinicsContent } from '../../../content/tr/clinics';

export function TRClinicsExampleWorkflowBlock() {
    const { exampleWorkflows } = trClinicsContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={exampleWorkflows.title}
                    description={exampleWorkflows.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    {exampleWorkflows.items.map((workflow, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full bg-white border-white shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                    {workflow.title}
                                </h3>
                                <p className="text-sm font-medium text-neutral-500 italic">
                                    {workflow.description}
                                </p>
                            </div>

                            <div className="mt-auto space-y-4">
                                {workflow.steps.map((step, sIndex) => (
                                    <div key={sIndex} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900 text-white text-[10px] font-bold">
                                            {sIndex + 1}
                                        </div>
                                        <BodyText className="text-sm font-semibold text-neutral-700 pt-0.5">
                                            {step}
                                        </BodyText>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-6 border-t border-neutral-100">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">
                                    İşleyiş Senaryosu {index + 1}
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
