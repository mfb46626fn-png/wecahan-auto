import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingFitCheckBlock() {
    const { fitCheck } = trAccountingContent;

    return (
        <SectionWrapper className="bg-neutral-50/30">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={fitCheck.title}
                    description={fitCheck.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    {/* Good Fit Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black text-white shadow-lg shadow-black/10">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    Doğru Adrestesiniz, Eğer...
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                                    Verimli Operasyon
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-5 flex-grow">
                            {fitCheck.goodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-neutral-800 leading-relaxed italic">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-12 pt-8 border-t border-neutral-50">
                            <p className="text-[11px] font-medium text-neutral-400 leading-snug">
                                Bu yapıdaki ofislerde otomasyon sistemlerimiz en yüksek ROI (yatırım getirisi) değerini üretir.
                            </p>
                        </div>
                    </CardBase>

                    {/* Not Good Fit Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-neutral-50/50 border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12 group"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-10 h-10 rounded-2xl border-2 border-neutral-200 text-neutral-300 group-hover:border-neutral-900 group-hover:text-neutral-900 transition-colors duration-500">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    Arayışınız Farklıysa...
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                                    Beklenti Yönetimi
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-5 flex-grow">
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
                                Biz bir yazılım evi değiliz; mevcut operasyonunuzu düzenleyen ve otonom hale getiren bir çözüm ortağıyız.
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-20 text-center">
                    <p className="max-w-xl mx-auto text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] italic leading-relaxed">
                        * Doğru eşleşme, başarılı bir dijital dönüşümün ilk şartıdır. Ofisinizin vaktini ve yatırımını korumayı önceliklendiriyoruz.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
