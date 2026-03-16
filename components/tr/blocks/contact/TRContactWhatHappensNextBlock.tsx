import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trContactContent } from '../../../../content/tr/contact';

export function TRContactWhatHappensNextBlock() {
    const { whatHappensNext } = trContactContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={whatHappensNext.title}
                    description={whatHappensNext.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto relative">
                    {/* Visual bridge line for desktop */}
                    <div className="hidden lg:block absolute top-[2.75rem] left-0 w-full h-px bg-neutral-200 -z-10" />

                    {whatHappensNext.steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <CardBase 
                                size="lg"
                                className="h-full bg-white border-neutral-100 p-8 hover:shadow-xl hover:shadow-black/5 hover:border-neutral-900 transition-all duration-500 rounded-[2rem] flex flex-col pt-16"
                            >
                                {/* Step indicator */}
                                <div className="absolute top-6 left-8 flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-sm font-black tracking-tight">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">
                                    {step.title}
                                </h3>
                                
                                <BodyText size="sm" className="text-neutral-500 leading-relaxed font-medium">
                                    {step.description}
                                </BodyText>
                            </CardBase>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-neutral-100 shadow-sm text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                        <span className="flex h-2 w-2 rounded-full bg-neutral-900 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
                        </span>
                        Süreç, ihtiyacınız olan hıza ve kapsama göre esnetilebilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
