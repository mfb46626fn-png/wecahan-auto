import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { trClinicsContent } from '../../../content/tr/clinics';

export function TRClinicsFitCheckBlock() {
    const { fitNotFit } = trClinicsContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={fitNotFit.title}
                    description={fitNotFit.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
                    {/* Fit Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                Sizin İçin Doğruyuz, Eğer...
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {fitNotFit.fit.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-700">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                                Verimli Ortaklık
                            </p>
                        </div>
                    </CardBase>

                    {/* Not Fit Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-neutral-200 text-neutral-400">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                Henüz Doğru Zaman Değilse...
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {fitNotFit.notFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-500">
                                    <span className="flex-shrink-0 mt-1.5 h-1.25 w-1.25 rounded-full bg-neutral-200" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-200">
                                Beklenti Yönetimi
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-xl mx-auto text-sm text-neutral-400 font-medium italic">
                        * Bu filtreleme, kliniğinizin vaktini ve yatırımını korumak, sadece yüksek verim alabileceğiniz senaryolarda el sıkışmak içindir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
