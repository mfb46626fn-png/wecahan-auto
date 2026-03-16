import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trPackagesContent } from '../../../content/tr/packages';

export function TRPackagesFitCheckBlock() {
    const { fitCheck } = trPackagesContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title="Doğru Eşleşme Analizi"
                    description="Hangi durumlarda en yüksek verimi alacağımızı ve hangi beklentilerin bizim modelimize uygun olmadığını dürüstçe paylaşıyoruz."
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
                    {/* Good Fit Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {fitCheck.goodFitTitle}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {fitCheck.goodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                    <BodyText className="text-sm font-semibold text-neutral-800">
                                        {item}
                                    </BodyText>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                İdeal İş Birliği
                            </p>
                        </div>
                    </CardBase>

                    {/* Not Good Fit Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-neutral-200 text-neutral-500">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {fitCheck.notGoodFitTitle}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {fitCheck.notGoodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-200" aria-hidden="true" />
                                    <BodyText className="text-sm font-medium text-neutral-600">
                                        {item}
                                    </BodyText>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Beklenti Filtresi
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-xl mx-auto text-sm text-neutral-400 font-medium italic">
                        * Bu analiz, her iki tarafın vaktini ve yatırımını korumak, sadece yüksek verim alabileceğimiz senaryolarda el sıkışmak içindir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
