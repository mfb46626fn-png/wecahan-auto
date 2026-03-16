import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trScenariosContent } from '../../../../content/tr/scenarios';

export function TRScenariosHowTheseFlowsUsuallyWorkBlock() {
    const { howTheseFlowsWork } = trScenariosContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={howTheseFlowsWork.title}
                    description={howTheseFlowsWork.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 md:grid-cols-2 lg:max-w-6xl lg:mx-auto relative">
                    {/* Decorative connecting lines for desktop grid */}
                    <div className="hidden lg:block absolute top-[50%] left-0 w-full h-px bg-neutral-100 -translate-y-1/2 -z-10" />
                    <div className="hidden lg:block absolute top-0 left-[50%] w-px h-full bg-neutral-100 -translate-x-1/2 -z-10" />

                    {howTheseFlowsWork.steps.map((step, index) => (
                        <CardBase 
                            key={index}
                            size="lg"
                            className="bg-white border-neutral-100 p-8 md:p-12 hover:shadow-lg hover:shadow-neutral-100/50 transition-all duration-500 rounded-[2rem] flex flex-col items-center text-center"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-xl shadow-black/10">
                                <span className="text-lg font-black tracking-tight leading-none">
                                    0{index + 1}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">
                                {step.title}
                            </h3>
                            
                            <BodyText size="sm" className="text-neutral-500 leading-relaxed font-medium">
                                {step.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>

                {/* Bottom trust indicator / summary */}
                <div className="mt-20 pt-10 border-t border-neutral-100 text-center">
                    <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-50 border border-neutral-100 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                        <span className="h-1 w-1 rounded-full bg-neutral-900 animate-pulse" />
                        Bu mantık, her sektörde güvenli ve ölçeklenebilir bir temel oluşturur.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
