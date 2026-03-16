import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trScenariosContent } from '../../../../content/tr/scenarios';

export function TRScenariosScenarioCategoriesBlock() {
    const { scenarioCategories } = trScenariosContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-12 md:py-16">
                <SectionHeader
                    title="Sektörlere Göre Örnek Senaryolar"
                    description="Operasyonel süreçlerinizi somutlaştırmak için iş kolunuza en yakın kategoriyi seçerek örnekleri inceleyebilirsiniz."
                    align="center"
                    maxWidth="md"
                    className="mb-12"
                />

                <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                    {scenarioCategories.map((category) => (
                        <CardBase 
                            key={category.id}
                            size="lg"
                            className="group hover:border-neutral-900 transition-all duration-500 bg-neutral-50/30 border-neutral-100 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
                        >
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-900/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-neutral-900/10 transition-colors" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white border border-neutral-100 text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-6 shadow-sm">
                                    {category.id === 'clinics' ? 'Sağlık / Klinik' : 'Finans / Ofis'}
                                </div>
                                
                                <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">
                                    {category.title}
                                </h3>
                                
                                <BodyText className="text-neutral-500 leading-relaxed font-medium mb-8 max-w-sm">
                                    {category.description}
                                </BodyText>

                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 group-hover:gap-3 transition-all">
                                    <span>Örnekleri İncele</span>
                                    <svg 
                                        className="w-4 h-4" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
