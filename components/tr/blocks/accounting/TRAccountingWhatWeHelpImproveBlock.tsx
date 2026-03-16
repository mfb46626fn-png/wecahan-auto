import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingWhatWeHelpImproveBlock() {
    const { whatWeHelpImprove } = trAccountingContent;

    return (
        <SectionWrapper className="bg-neutral-50/30 border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={whatWeHelpImprove.title}
                    description={whatWeHelpImprove.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {whatWeHelpImprove.items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="group flex flex-col h-full bg-white border-neutral-100 hover:border-neutral-900 transition-all duration-500"
                        >
                            <div className="mb-6 flex flex-col gap-1">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                    Hedef Alan {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="h-1 w-8 bg-neutral-900 mt-2 transform origin-left group-hover:w-12 transition-all duration-500" />
                            </div>
                            
                            <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            
                            <BodyText className="text-sm leading-relaxed text-neutral-500 font-medium">
                                {item.description}
                            </BodyText>

                            <div className="mt-auto pt-8">
                                <span className="inline-flex items-center gap-2 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Operasyonel Düzen
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
