import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trClinicsContent } from '../../../content/tr/clinics';

export function TRClinicsWhatWeHelpImproveBlock() {
    const { improvements } = trClinicsContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={improvements.title}
                    description={improvements.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {improvements.items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full border-neutral-100 hover:border-black transition-colors duration-300"
                        >
                            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
                                İyileştirme Alanı {index + 1}
                            </div>
                            
                            <h3 className="text-xl font-bold text-neutral-900 mb-4">
                                {item.title}
                            </h3>
                            
                            <BodyText className="text-sm leading-relaxed text-neutral-600">
                                {item.description}
                            </BodyText>
                            
                            <div className="mt-8 pt-6 border-t border-neutral-100">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                                    Operasyonel Hedef: Verimlilik
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
