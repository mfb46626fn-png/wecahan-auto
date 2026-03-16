import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trScenariosContent } from '../../../../content/tr/scenarios';

export function TRScenariosWhyScenariosMatterBlock() {
    const { whyScenariosMatter } = trScenariosContent;

    return (
        <SectionWrapper className="bg-neutral-50/40">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={whyScenariosMatter.title}
                    description={whyScenariosMatter.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-20"
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {whyScenariosMatter.items.map((item, index) => (
                        <CardBase 
                            key={index}
                            size="lg"
                            className="bg-white border-neutral-100 p-8 md:p-10 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-all duration-300 rounded-[2rem]"
                        >
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white text-xs font-bold ring-8 ring-neutral-50">
                                0{index + 1}
                            </div>
                            
                            <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            
                            <BodyText size="sm" className="text-neutral-500 leading-relaxed font-medium">
                                {item.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>

                {/* Bottom philosophical anchor */}
                <div className="mt-20 pt-10 border-t border-neutral-100 text-center">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
                        Doğru otomasyon, yalnızca teknoloji değil; <br className="hidden sm:block" />
                        iyileştirilmiş ve somutlaşmış bir iş akışıdır.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
