import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingNotIncludedBlock() {
    const { notIncluded } = trAccountingContent;

    return (
        <SectionWrapper className="bg-neutral-50/50 border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={notIncluded.title}
                    description={notIncluded.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <CardBase 
                    size="lg" 
                    className="max-w-4xl mx-auto border-neutral-200 bg-white shadow-sm rounded-[2.5rem] overflow-hidden"
                >
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 text-neutral-400">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                                    Kapsam Sınır Yönetimi
                                </h3>
                                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mt-1.5">
                                    Sorumluluk ve Uzmanlık Alanlarımızın Çerçevesi
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
                            {notIncluded.notIncluded.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-5 rounded-2xl border border-transparent hover:border-neutral-100 hover:bg-neutral-50/50 transition-all group">
                                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full border border-neutral-200 flex items-center justify-center bg-white group-hover:border-neutral-300 transition-all">
                                        <div className="w-1.5 h-[1px] bg-neutral-300 group-hover:bg-neutral-500" />
                                    </div>
                                    <BodyText className="text-sm font-semibold text-neutral-500 leading-relaxed">
                                        {item}
                                    </BodyText>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-12 border-t border-neutral-100">
                            <div className="bg-neutral-50/50 p-6 md:p-8 rounded-3xl border border-neutral-100 border-dashed text-center">
                                <p className="text-xs text-neutral-400 font-bold italic leading-relaxed uppercase tracking-wider">
                                    * Belirlenen sınırlar, hizmet kalitemizi ve odak noktamızı korumak için esnetilmemektedir. Büyük ölçekli ve farklı uzmanlık gerektiren talepleriniz için çözüm ortaklarımıza yönlendirme yapabiliriz.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
