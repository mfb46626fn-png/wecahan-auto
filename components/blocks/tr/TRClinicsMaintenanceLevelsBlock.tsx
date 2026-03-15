import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { trClinicsContent } from '../../../content/tr/clinics';

export function TRClinicsMaintenanceLevelsBlock() {
    const { maintenanceLevels, whatsIncluded } = trClinicsContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={maintenanceLevels.title}
                    description={maintenanceLevels.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {maintenanceLevels.items.map((level, index) => {
                        const isRecommended = index === 1; // Middle one: Standart Bakım
                        
                        return (
                            <CardBase 
                                key={index} 
                                size="lg" 
                                className={`flex flex-col h-full bg-white transition-all duration-300 ${
                                    isRecommended 
                                        ? 'border-black shadow-2xl shadow-neutral-200 ring-1 ring-black' 
                                        : 'border-neutral-100 shadow-sm'
                                }`}
                            >
                                {isRecommended && (
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                                            En Dengeli Bakım Modeli
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                        {level.title}
                                    </h3>
                                    <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
                                        Bakım Kapsamı
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {level.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3 text-sm font-semibold text-neutral-700">
                                            <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-6 border-t border-neutral-100">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                        Süreklilik Odaklı Destek
                                    </p>
                                </div>
                            </CardBase>
                        );
                    })}
                </div>

                {/* Boundary Note */}
                <div className="mt-16 max-w-2xl mx-auto text-center">
                    <CardBase size="sm" className="bg-white/50 border-neutral-100">
                        <p className="text-xs font-medium text-neutral-500 leading-relaxed italic">
                            <span className="font-bold text-neutral-900 not-italic">Önemli Not:</span> {whatsIncluded.notIncluded[whatsIncluded.notIncluded.length - 1]}
                        </p>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
