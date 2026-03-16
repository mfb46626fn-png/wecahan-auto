import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingMaintenanceLevelsBlock() {
    const { maintenanceLevels } = trAccountingContent;

    return (
        <SectionWrapper className="bg-neutral-50/50 border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={maintenanceLevels.title}
                    description={maintenanceLevels.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {maintenanceLevels.items.map((level, index) => {
                        const isRecommended = index === 1; // Standart Bakım
                        
                        return (
                            <CardBase 
                                key={index} 
                                size="lg" 
                                className={`flex flex-col h-full bg-white transition-all duration-500 rounded-[2.5rem] p-8 md:p-10 ${
                                    isRecommended 
                                        ? 'border-neutral-900 shadow-2xl shadow-neutral-200 ring-1 ring-neutral-900' 
                                        : 'border-neutral-100 shadow-sm hover:shadow-md'
                                }`}
                            >
                                {isRecommended && (
                                    <div className="mb-8">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                                            En Yaygın Tercih
                                        </span>
                                    </div>
                                )}

                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight">
                                        {level.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-neutral-500 leading-relaxed mb-6">
                                        {level.description}
                                    </p>
                                    
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-100">
                                        <span className="h-1 w-1 rounded-full bg-neutral-400" />
                                        <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">{level.bestFor}</span>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300 mb-4">
                                            Dahil Hizmetler
                                        </h4>
                                        <ul className="space-y-3">
                                            {level.included.map((item, sIndex) => (
                                                <li key={sIndex} className="flex items-start gap-3 text-sm font-semibold text-neutral-700 leading-snug">
                                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden="true" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {level.notIncluded.length > 0 && (
                                        <div className="pt-6 border-t border-dashed border-neutral-100">
                                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300 mb-4">
                                                Kapsam Dışı
                                            </h4>
                                            <ul className="space-y-3 opacity-60">
                                                {level.notIncluded.map((item, nIndex) => (
                                                    <li key={nIndex} className="flex items-start gap-3 text-sm font-medium text-neutral-400 leading-snug">
                                                        <span className="flex-shrink-0 mt-2 h-[1px] w-2 bg-neutral-300" aria-hidden="true" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </CardBase>
                        );
                    })}
                </div>

                <div className="mt-20 max-w-2xl mx-auto">
                    <CardBase size="sm" className="bg-white/80 backdrop-blur-sm border-neutral-100 p-6 rounded-2xl flex items-center gap-6">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 14H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <p className="text-xs font-bold text-neutral-500 leading-relaxed italic">
                            <span className="not-italic text-neutral-900">Operasyonel Not:</span> Bakım modelleri, mevcut sistemin stabilitesini korumaya odaklıdır; sıfırdan proje veya modül geliştirmeleri bakım kapsamı dışında, ayrı proje olarak değerlendirilir.
                        </p>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
