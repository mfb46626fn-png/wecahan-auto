import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingExampleWorkflowBlock() {
    const { exampleWorkflow } = trAccountingContent;

    return (
        <SectionWrapper className="bg-white border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={exampleWorkflow.title}
                    description={exampleWorkflow.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-12 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    {exampleWorkflow.items.map((workflow, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="group flex flex-col h-full bg-white border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500 rounded-[2.5rem] p-8 md:p-12"
                        >
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-2 w-2 rounded-full bg-neutral-900" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                        İşleyiş Senaryosu 0{index + 1}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight">
                                    {workflow.title}
                                </h3>
                                <p className="text-sm font-semibold text-neutral-500 italic leading-relaxed">
                                    {workflow.description}
                                </p>
                            </div>

                            <div className="relative space-y-8 pl-8">
                                {/* Vertical Line Connection */}
                                <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-neutral-100" />
                                
                                {workflow.steps.map((step, sIndex) => (
                                    <div key={sIndex} className="relative flex items-start gap-4">
                                        {/* Step Circle */}
                                        <div className="absolute -left-[28px] top-0.5 flex items-center justify-center w-[22px] h-[22px] rounded-full bg-white border border-neutral-200 text-neutral-400 text-[10px] font-bold z-10 group-hover:border-neutral-900 group-hover:text-neutral-900 transition-colors duration-300">
                                            {sIndex + 1}
                                        </div>
                                        
                                        <BodyText className="text-[14px] font-semibold text-neutral-700 pt-0.5 leading-snug">
                                            {step}
                                        </BodyText>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-10 border-t border-neutral-100/60 flex items-center justify-between">
                                <div className="flex gap-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`h-1 w-1 rounded-full ${index === i - 1 ? 'bg-neutral-900' : 'bg-neutral-200'}`} />
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                                    Otomasyon Akış Mantığı
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="max-w-xl mx-auto text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] italic leading-relaxed">
                        * Bu akışlar ofisinizin mevcut alışkanlıklarına ve müşteri grubuna göre özel olarak konfigüre edilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
