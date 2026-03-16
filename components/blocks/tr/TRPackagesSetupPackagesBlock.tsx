import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trPackagesContent } from '../../../content/tr/packages';

export function TRPackagesSetupPackagesBlock() {
    const { setupPackages } = trPackagesContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    eyebrow="Aşama 2"
                    title={setupPackages.title}
                    description={setupPackages.description}
                    align="center"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
                    {setupPackages.packages.map((pkg, index) => {
                        const isRecommended = index === 1; // Orta Seviye Kurulum
                        
                        return (
                            <CardBase 
                                key={index} 
                                size="lg" 
                                className={`flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-100 ${
                                    isRecommended 
                                        ? 'border-black ring-1 ring-black relative z-10' 
                                        : 'border-neutral-100 bg-neutral-50/50'
                                }`}
                            >
                                {isRecommended && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                            En Çok Tercih Edilen
                                        </span>
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                        {pkg.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 mb-4 min-h-[40px]">
                                        {pkg.description}
                                    </p>
                                    <div className="pt-4 border-t border-neutral-100">
                                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-2">Uygun Yapı</p>
                                        <p className="text-xs font-semibold text-neutral-700 leading-relaxed">
                                            {pkg.suitableFor}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-8 flex-grow">
                                    {/* Included Section */}
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                            Neler Dahil?
                                        </h4>
                                        <ul className="space-y-3">
                                            {pkg.included.map((item, iIndex) => (
                                                <li key={iIndex} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-black" />
                                                    <BodyText className="text-sm font-semibold text-neutral-800">
                                                        {item}
                                                    </BodyText>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Example Scope */}
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                            Örnek Kapsam
                                        </h4>
                                        <ul className="space-y-3">
                                            {pkg.exampleScope.map((item, eIndex) => (
                                                <li key={eIndex} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-300" />
                                                    <BodyText className="text-xs text-neutral-600 italic">
                                                        {item}
                                                    </BodyText>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Deliverables */}
                                    <div className="pt-6 border-t border-neutral-100">
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                            Teslim Çıktıları
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-2">
                                            {pkg.deliverables.map((item, dIndex) => (
                                                <li key={dIndex} className="flex items-center gap-2">
                                                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                                                    <span className="text-[11px] font-bold text-neutral-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-neutral-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-neutral-900" />
                                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest italic">
                                            Kapsam Odaklı Kurulum
                                        </span>
                                    </div>
                                </div>
                            </CardBase>
                        );
                    })}
                </div>

                <div className="mt-16 md:mt-24 text-center">
                    <div className="max-w-2xl mx-auto p-10 rounded-[2.5rem] bg-neutral-50/50 border border-neutral-100">
                        <BodyText className="text-sm text-neutral-500 mb-8">
                            Kurulum seviyesi belirlendikten sonra, sistemin sürekliliğini sağlamak için ihtiyaç duyulan aylık bakım yapısına geçilir.
                        </BodyText>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/fiyatlandirma">
                                <span className="text-sm font-bold text-black border-b-2 border-black pb-1 hover:text-neutral-600 hover:border-neutral-400 transition-all cursor-pointer">
                                    Fiyatlandırma Mantığını Gör →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
