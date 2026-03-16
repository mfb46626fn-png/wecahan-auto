import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingSolutionModulesBlock() {
    const { solutionModules } = trAccountingContent;

    return (
        <SectionWrapper className="bg-neutral-50/70 border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={solutionModules.title}
                    description={solutionModules.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 md:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    {solutionModules.items.map((module, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col bg-white border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/30 transition-all duration-500 rounded-[2rem]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-2 w-2 rounded-full bg-neutral-900" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                    Modül {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 mb-2 tracking-tight">
                                {module.title}
                            </h3>
                            
                            <BodyText className="text-sm text-neutral-500 mb-10 italic leading-relaxed">
                                {module.description}
                            </BodyText>
                            
                            <div className="mt-auto pt-8 border-t border-neutral-100/60">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300 mb-5">
                                    Modül Odakları
                                </h4>
                                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                                    {module.points.map((point, pIndex) => (
                                        <li key={pIndex} className="flex items-start gap-2.5 text-[13px] font-semibold text-neutral-700 leading-snug">
                                            <span className="flex-shrink-0 mt-1 h-3 w-3 rounded border border-neutral-200 bg-neutral-50 flex items-center justify-center text-[8px] text-neutral-400">
                                                •
                                            </span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
