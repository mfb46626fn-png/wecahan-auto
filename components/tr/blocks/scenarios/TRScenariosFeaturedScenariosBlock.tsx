import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { trScenariosContent, CtaConfig } from '../../../../content/tr/scenarios';

export function TRScenariosFeaturedScenariosBlock() {
    const { featuredScenarios } = trScenariosContent;

    const resolveCta = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const resolveHref = (cta: CtaConfig, fallback: string) => {
        return typeof cta === 'string' ? fallback : cta.href;
    };

    return (
        <SectionWrapper className="bg-neutral-50/30 border-t border-neutral-100">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={featuredScenarios.title}
                    description={featuredScenarios.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
                    {featuredScenarios.items.map((scenario) => (
                        <CardBase 
                            key={scenario.id}
                            size="lg"
                            className="flex flex-col bg-white border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/20 transition-all duration-500 rounded-[2.5rem] p-8 md:p-12"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className={`h-2 w-2 rounded-full ${scenario.category === 'clinics' ? 'bg-blue-500' : 'bg-orange-500'}`} />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                    {scenario.category === 'clinics' ? 'Klinik Akışı' : 'Muhasebe Akışı'}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-neutral-900 mb-2 tracking-tight">
                                {scenario.title}
                            </h3>
                            <p className="text-sm font-semibold text-neutral-500 mb-8 italic">
                                {scenario.subtitle}
                            </p>

                            <div className="space-y-10">
                                {/* Problem Section */}
                                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-3">
                                        Temel Problem
                                    </h4>
                                    <BodyText className="text-sm text-neutral-600 font-medium leading-relaxed">
                                        {scenario.problem}
                                    </BodyText>
                                </div>

                                {/* Flow Steps */}
                                <div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-5">
                                        Örnek Akış Adımları
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {scenario.flowSteps.map((step, sIndex) => (
                                            <div key={sIndex} className="flex items-center">
                                                <div className="px-4 py-2 rounded-xl bg-white border border-neutral-100 text-[13px] font-bold text-neutral-700 shadow-sm">
                                                    {step}
                                                </div>
                                                {sIndex < scenario.flowSteps.length - 1 && (
                                                    <span className="mx-2 text-neutral-300 font-bold">→</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Outcome & Suitability */}
                                <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-neutral-100">
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">
                                            Beklenen Sonuç
                                        </h4>
                                        <BodyText className="text-[13px] font-bold text-neutral-800 leading-relaxed">
                                            {scenario.expectedOutcome}
                                        </BodyText>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">
                                            Kime Uygun?
                                        </h4>
                                        <ul className="space-y-2">
                                            {scenario.suitableFor.map((item, iIndex) => (
                                                <li key={iIndex} className="flex items-start gap-2 text-xs font-semibold text-neutral-500 leading-tight">
                                                    <span className="text-neutral-300 transform translate-y-0.5">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-neutral-100">
                                <a 
                                    href={resolveHref(scenario.primaryCta, '/fiyatlandirma#brief-form')}
                                    className="block w-full sm:w-auto"
                                >
                                    <PrimaryButton className="w-full sm:w-auto !px-8 !py-3.5 text-sm font-bold shadow-lg shadow-black/5">
                                        {resolveCta(scenario.primaryCta)}
                                    </PrimaryButton>
                                </a>
                            </div>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-[0.3em]">
                        Buradaki akışlar özelleştirilebilir şablonlardır.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
