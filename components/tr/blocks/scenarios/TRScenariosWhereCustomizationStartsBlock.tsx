import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trScenariosContent } from '../../../../content/tr/scenarios';

export function TRScenariosWhereCustomizationStartsBlock() {
    const { whereCustomizationStarts } = trScenariosContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={whereCustomizationStarts.title}
                    description={whereCustomizationStarts.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    {/* Standard Scenarios Side */}
                    <CardBase 
                        size="lg"
                        className="bg-neutral-50 border-neutral-100 p-8 md:p-12 rounded-[2.5rem] flex flex-col"
                    >
                        <div className="mb-8">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-neutral-200 text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">
                                Ortak Zemin
                            </span>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">
                                Standart Senaryo Mantığı
                            </h3>
                            <BodyText size="sm" className="text-neutral-500 leading-relaxed">
                                Buradaki örnekler, sektörünüzdeki en yaygın operasyonel darboğazları çözmek için kurgulanan "genel geçer" akışlardır. Temel yapı taşları birçok işletme için benzerdir.
                            </BodyText>
                        </div>

                        <ul className="space-y-4 mt-auto">
                            {['Genel akış kurgusu', 'Temel tetikleyici mekanizmalar', 'Sektöre özel kategori kalıpları', 'Standart bildirim yapıları'].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-neutral-600">
                                    <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CardBase>

                    {/* Customization Side */}
                    <CardBase 
                        size="lg"
                        className="bg-neutral-900 border-neutral-800 p-8 md:p-12 rounded-[2.5rem] flex flex-col text-white"
                    >
                        <div className="mb-8">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">
                                Özel İhtiyaç
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                Özelleştirme Nerede Başlar?
                            </h3>
                            <BodyText size="sm" className="text-neutral-400 leading-relaxed">
                                İşinizin ölçeği büyüdükçe veya mevcut araç setiniz karmaşıklaştıkça, bu şablonları sizin için özel olarak terzi dikimi bir hale getiriyoruz.
                            </BodyText>
                        </div>

                        <div className="space-y-6 mt-auto">
                            {whereCustomizationStarts.points.map((point, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                                        {index + 1}
                                    </div>
                                    <p className="text-[13px] font-medium text-neutral-300 leading-snug">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardBase>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-[0.3em]">
                        Her kurulum, işletmenizin dnasını yansıtacak şekilde optimize edilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
