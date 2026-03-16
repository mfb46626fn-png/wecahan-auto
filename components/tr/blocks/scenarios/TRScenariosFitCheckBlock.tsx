import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { trScenariosContent } from '../../../../content/tr/scenarios';

export function TRScenariosFitCheckBlock() {
    const { fitCheck } = trScenariosContent;

    return (
        <SectionWrapper className="bg-neutral-50/20">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={fitCheck.title}
                    description={fitCheck.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    {/* Good Fit Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 text-white shadow-xl shadow-black/10">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    Bu Akışlar Size Uygun, Eğer...
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                                    Stratejik Eşleşme
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-6 flex-grow">
                            {fitCheck.goodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-neutral-700 leading-relaxed italic">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-12 pt-8 border-t border-neutral-50">
                            <p className="text-[11px] font-medium text-neutral-400 leading-snug">
                                Senaryolar aracılığıyla kendi sürecini hayal edebilen yapılar, en hızlı verimi alan ekiplerimizdir.
                            </p>
                        </div>
                    </CardBase>

                    {/* Not Good Fit Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-neutral-50/50 border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12 group"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-neutral-200 text-neutral-300 group-hover:border-neutral-900 group-hover:text-neutral-900 transition-all duration-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    Henüz Hazır Değilseniz, Eğer...
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                                    Beklenti Dengesi
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-6 flex-grow">
                            {fitCheck.notGoodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-2 h-1 w-1 rounded-full bg-neutral-300" aria-hidden="true" />
                                    <span className="text-sm font-medium text-neutral-500 leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 pt-8 border-t border-neutral-100">
                            <p className="text-[11px] font-medium text-neutral-400 leading-snug">
                                Otomasyon bir "araç" değil, bir "çalışma kültürü" dönüşümüdür. Ekip katılımı ve süreç analizi başarımızın anahtarıdır.
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-20 text-center">
                    <p className="max-w-xl mx-auto text-[11px] font-bold text-neutral-300 uppercase tracking-[0.2em] italic leading-relaxed">
                        * Bu sayfa, çözüm kapsamımızı ve yaklaşımımızı şeffaflaştırmak için tasarlanmıştır. Doğru kurgu, doğru beklentiyle başlar.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
