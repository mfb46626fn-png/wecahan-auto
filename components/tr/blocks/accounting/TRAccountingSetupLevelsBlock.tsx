import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingSetupLevelsBlock() {
    const { setupLevels } = trAccountingContent;

    return (
        <SectionWrapper className="bg-white border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={setupLevels.title}
                    description={setupLevels.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {setupLevels.items.map((level, index) => {
                        const isRecommended = index === 1; // Orta Seviye Kurulum
                        
                        return (
                            <CardBase 
                                key={index} 
                                size="lg" 
                                className={`group flex flex-col h-full transition-all duration-500 rounded-[2.5rem] p-8 md:p-10 ${
                                    isRecommended 
                                        ? 'border-neutral-900 bg-neutral-900 text-white shadow-2xl shadow-neutral-300' 
                                        : 'border-neutral-100 bg-neutral-50/30 hover:bg-white hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-200/40'
                                }`}
                            >
                                {isRecommended && (
                                    <div className="mb-8">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10">
                                            En Dengeli Başlangıç
                                        </span>
                                    </div>
                                )}

                                <div className="mb-10">
                                    <div className={`mb-6 flex items-center gap-3 ${isRecommended ? 'text-white/40' : 'text-neutral-400'}`}>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Seviye 0{index + 1}</span>
                                        <div className={`h-[1px] flex-grow ${isRecommended ? 'bg-white/10' : 'bg-neutral-100'}`} />
                                    </div>
                                    <h3 className={`text-2xl font-bold mb-4 tracking-tight ${isRecommended ? 'text-white' : 'text-neutral-900'}`}>
                                        {level.title}
                                    </h3>
                                    <p className={`text-sm font-semibold leading-relaxed ${isRecommended ? 'text-white/60' : 'text-neutral-500'}`}>
                                        {level.suitableFor}
                                    </p>
                                </div>

                                <div className={`mt-auto pt-10 border-t ${isRecommended ? 'border-white/10' : 'border-neutral-100'}`}>
                                    <h4 className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-6 ${isRecommended ? 'text-white/40' : 'text-neutral-300'}`}>
                                        Kurulum Kapsamı
                                    </h4>
                                    <ul className="space-y-4">
                                        {level.included.map((item, sIndex) => (
                                            <li key={sIndex} className="flex items-start gap-3 text-sm font-semibold leading-snug">
                                                <span className={`flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full ${isRecommended ? 'bg-white/40' : 'bg-neutral-200'}`} aria-hidden="true" />
                                                <span className={isRecommended ? 'text-white/80' : 'text-neutral-700'}>
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardBase>
                        );
                    })}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] italic">
                        * Tüm kurulumlar ofisinizin mevcut dijital olgunluğuna göre optimize edilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
