import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trClinicsContent } from '../../../content/tr/clinics';

export function TRClinicsSetupLevelsBlock() {
    const { setupLevels } = trClinicsContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={setupLevels.title}
                    description={setupLevels.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {setupLevels.items.map((level, index) => {
                        const isRecommended = index === 1; // Middle one: Orta Seviye Kurulum
                        
                        return (
                            <CardBase 
                                key={index} 
                                size="lg" 
                                className={`flex flex-col h-full transition-all duration-300 ${
                                    isRecommended 
                                        ? 'border-black shadow-2xl shadow-neutral-200 ring-1 ring-black' 
                                        : 'border-neutral-100 bg-neutral-50/50'
                                }`}
                            >
                                {isRecommended && (
                                    <div className="mb-6">
                                        <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest">
                                            En Dengeli Başlangıç
                                        </span>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                        {level.title}
                                    </h3>
                                    <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                                        {level.suitableFor}
                                    </p>
                                </div>

                                <div className="mt-auto pt-8 border-t border-neutral-100">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-5">
                                        Örnek Kurulum Kapsamı
                                    </h4>
                                    <ul className="space-y-4">
                                        {level.scope.map((item, sIndex) => (
                                            <li key={sIndex} className="flex items-start gap-3 text-sm font-semibold text-neutral-700">
                                                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-300" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardBase>
                        );
                    })}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-neutral-400 font-medium italic">
                        * Tüm kurulumlar kliniğinizin dijital araçlarına ve işleyişine göre özel olarak konfigüre edilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
