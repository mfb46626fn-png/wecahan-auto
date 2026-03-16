import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingIncludedScopeBlock() {
    const { includedScope } = trAccountingContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={includedScope.title}
                    description={includedScope.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    {/* Dahil Olan Standartlar */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full border-neutral-100 bg-neutral-50/20 rounded-[2rem]"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white shadow-lg shadow-neutral-200">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                                Sistem Standartları
                            </h3>
                        </div>

                        <ul className="space-y-5">
                            {includedScope.included.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 text-sm font-semibold text-neutral-700 leading-relaxed">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-10 border-t border-neutral-100/60">
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-neutral-300" />
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                    Operasyonel Omurga
                                </p>
                            </div>
                        </div>
                    </CardBase>

                    {/* Sınırlar ve Yaklaşım */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full border-neutral-100 bg-white rounded-[2rem]"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200 text-neutral-400">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                                Hizmet Sınırları
                            </h3>
                        </div>

                        <ul className="space-y-5">
                            {includedScope.notIncluded.map((item, index) => (
                                <li key={index} className="flex items-start gap-4 text-sm font-medium text-neutral-500 leading-relaxed">
                                    <span className="flex-shrink-0 mt-2 h-[1px] w-2 bg-neutral-300" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-10 border-t border-neutral-100/60">
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-neutral-200" />
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300">
                                    Kapsam Yönetimi
                                </p>
                            </div>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-20 text-center">
                    <p className="max-w-2xl mx-auto text-[11px] font-bold text-neutral-400 uppercase tracking-[0.15em] italic leading-relaxed">
                        * Belirlenen standartlar, muhasebe ofisinizin otomasyon sürecini sağlıklı ve öngörülebilir bir düzlemde tutmak için kurgulanmıştır.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
