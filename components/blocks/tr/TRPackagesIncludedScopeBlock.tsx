import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { trPackagesContent } from '../../../content/tr/packages';

export function TRPackagesIncludedScopeBlock() {
    const { includedScope } = trPackagesContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={includedScope.title}
                    description={includedScope.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <CardBase 
                    size="lg" 
                    className="max-w-4xl mx-auto border-neutral-100 bg-white"
                >
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white shadow-lg shadow-neutral-200">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900">
                                    Standart Hizmet Omurgası
                                </h3>
                                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">
                                    Tüm Paketlerde Sunulan Ortak Değer
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
                            {includedScope.checklist.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors group">
                                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-black group-hover:bg-black transition-all">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-white" />
                                    </div>
                                    <span className="text-sm font-semibold text-neutral-700 leading-snug">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-10 border-t border-neutral-100 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                                    Kalite Standartları Dahil
                                </span>
                            </div>
                            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest italic">
                                Sürdürülebilir Mimari Tasarımı
                            </span>
                        </div>
                    </div>
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
