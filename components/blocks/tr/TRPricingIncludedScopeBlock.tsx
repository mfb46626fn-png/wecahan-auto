import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { trPricingContent } from '../../../content/tr/pricing';

export function TRPricingIncludedScopeBlock() {
    const { whatsIncluded, whatsNotIncluded } = trPricingContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title="Hizmet Kapsamı ve Sınırlar"
                    description="Fiyatlandırmanın neyi kapsayıp neyi kapsamadığını dürüstçe ortaya koyuyor, sisli satış alanlarını en baştan temizliyoruz."
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
                    {/* Included Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full border-neutral-100 bg-neutral-50/30"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {whatsIncluded.title}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {whatsIncluded.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-700">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Standart Operasyonel Kapsam
                            </p>
                        </div>
                    </CardBase>

                    {/* Not Included Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full border-neutral-100 bg-white"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-neutral-200 text-neutral-500">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {whatsNotIncluded.title}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {whatsNotIncluded.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-500">
                                    <span className="flex-shrink-0 mt-1.5 h-1.25 w-1.25 rounded-full bg-neutral-200" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Ek Geliştirme / Kapsam Dışı
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-2xl mx-auto text-sm text-neutral-400 font-medium italic">
                        * Belirlenen sınırlar, odak noktamızı dağıtmadan en yüksek verimi sağlamak için şeffaf bir çerçeve sunar.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
