"use client";

import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { trScenariosContent, CtaConfig } from '../../../../content/tr/scenarios';

// --- Helpers ---
const resolveCta = (cta: CtaConfig) => {
    return typeof cta === 'string' ? cta : cta.label;
};

const resolveHref = (cta: CtaConfig, fallback: string) => {
    return typeof cta === 'string' ? fallback : cta.href;
};

// --- Blocks ---

/**
 * 1. Hero Block
 */
export function TRScenariosHeroBlock() {
    const { hero } = trScenariosContent;

    return (
        <SectionWrapper className="bg-white border-b border-neutral-100 overflow-hidden">
            <ContentContainer className="py-20 md:py-32 lg:py-40">
                <div className="max-w-4xl mx-auto text-center relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-neutral-50 rounded-full blur-[120px] -z-10" />

                    <SectionHeader
                        eyebrow={hero.eyebrow}
                        title={hero.title}
                        description={hero.description}
                        align="center"
                        maxWidth="lg"
                        className="mb-12"
                    />

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <a href={resolveHref(hero.primaryCta, '/fiyatlandirma#brief-form')} className="w-full sm:w-auto">
                            <PrimaryButton className="w-full sm:w-auto !px-10 !py-4 shadow-xl shadow-black/5 hover:shadow-black/10 transition-all font-bold">
                                {resolveCta(hero.primaryCta)}
                            </PrimaryButton>
                        </a>
                        <a href={resolveHref(hero.secondaryCta, '/paketler')} className="w-full sm:w-auto">
                            <SecondaryButton className="w-full sm:w-auto !px-10 !py-4 bg-white font-bold border-neutral-200">
                                {resolveCta(hero.secondaryCta)}
                            </SecondaryButton>
                        </a>
                    </div>

                    {hero.helperText && (
                        <div className="flex items-center justify-center gap-4 opacity-50">
                            <div className="h-px w-8 bg-neutral-300" />
                            <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.3em] whitespace-nowrap">
                                {hero.helperText}
                            </p>
                            <div className="h-px w-8 bg-neutral-300" />
                        </div>
                    )}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. Why Scenarios Matter Block
 */
export function TRScenariosWhyScenariosMatterBlock() {
    const { whyScenariosMatter } = trScenariosContent;

    return (
        <SectionWrapper className="bg-neutral-50/40">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={whyScenariosMatter.title}
                    description={whyScenariosMatter.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-20"
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {whyScenariosMatter.items.map((item, index) => (
                        <CardBase 
                            key={index}
                            size="lg"
                            className="bg-white border-neutral-100 p-8 md:p-10 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-all duration-300 rounded-[2rem]"
                        >
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white text-xs font-bold ring-8 ring-neutral-50">
                                0{index + 1}
                            </div>
                            
                            <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            
                            <BodyText size="sm" className="text-neutral-500 leading-relaxed font-medium">
                                {item.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-20 pt-10 border-t border-neutral-100 text-center">
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
                        Doğru otomasyon, yalnızca teknoloji değil; <br className="hidden sm:block" />
                        iyileştirilmiş ve somutlaşmış bir iş akışıdır.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 3. Scenario Categories Block
 */
export function TRScenariosScenarioCategoriesBlock() {
    const { scenarioCategories } = trScenariosContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-12 md:py-16">
                <SectionHeader
                    title="Sektörlere Göre Örnek Senaryolar"
                    description="Operasyonel süreçlerinizi somutlaştırmak için iş kolunuza en yakın kategoriyi seçerek örnekleri inceleyebilirsiniz."
                    align="center"
                    maxWidth="md"
                    className="mb-12"
                />

                <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                    {scenarioCategories.map((category) => (
                        <CardBase 
                            key={category.id}
                            size="lg"
                            className="group hover:border-neutral-900 transition-all duration-500 bg-neutral-50/30 border-neutral-100 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-900/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-neutral-900/10 transition-colors" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white border border-neutral-100 text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-6 shadow-sm">
                                    {category.id === 'clinics' ? 'Sağlık / Klinik' : 'Finans / Ofis'}
                                </div>
                                
                                <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">
                                    {category.title}
                                </h3>
                                
                                <BodyText className="text-neutral-500 leading-relaxed font-medium mb-8 max-w-sm">
                                    {category.description}
                                </BodyText>

                                <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 group-hover:gap-3 transition-all">
                                    <span>Örnekleri İncele</span>
                                    <svg 
                                        className="w-4 h-4" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 4. Featured Scenarios Block
 */
export function TRScenariosFeaturedScenariosBlock() {
    const { featuredScenarios } = trScenariosContent;

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
                                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-3">
                                        Temel Problem
                                    </h4>
                                    <BodyText className="text-sm text-neutral-600 font-medium leading-relaxed">
                                        {scenario.problem}
                                    </BodyText>
                                </div>

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

/**
 * 5. How These Flows Work Block
 */
export function TRScenariosHowTheseFlowsUsuallyWorkBlock() {
    const { howTheseFlowsWork } = trScenariosContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={howTheseFlowsWork.title}
                    description={howTheseFlowsWork.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 md:grid-cols-2 lg:max-w-6xl lg:mx-auto relative">
                    <div className="hidden lg:block absolute top-[50%] left-0 w-full h-px bg-neutral-100 -translate-y-1/2 -z-10" />
                    <div className="hidden lg:block absolute top-0 left-[50%] w-px h-full bg-neutral-100 -translate-x-1/2 -z-10" />

                    {howTheseFlowsWork.steps.map((step, index) => (
                        <CardBase 
                            key={index}
                            size="lg"
                            className="bg-white border-neutral-100 p-8 md:p-12 hover:shadow-lg hover:shadow-neutral-100/50 transition-all duration-500 rounded-[2rem] flex flex-col items-center text-center"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 text-white shadow-xl shadow-black/10">
                                <span className="text-lg font-black tracking-tight leading-none">
                                    0{index + 1}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">
                                {step.title}
                            </h3>
                            
                            <BodyText size="sm" className="text-neutral-500 leading-relaxed font-medium">
                                {step.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-20 pt-10 border-t border-neutral-100 text-center">
                    <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-50 border border-neutral-100 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                        <span className="h-1 w-1 rounded-full bg-neutral-900 animate-pulse" />
                        Bu mantık, her sektörde güvenli ve ölçeklenebilir bir temel oluşturur.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 6. Where Customization Starts Block
 */
export function TRScenariosWhereCustomizationStartsBlock() {
    const { whereCustomizationStarts } = trScenariosContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={whereCustomizationStarts.title}
                    description={whereCustomizationStarts.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    <CardBase 
                        size="lg"
                        className="bg-neutral-50 border-neutral-100 p-8 md:p-12 rounded-[2.5rem] flex flex-col"
                    >
                        <div className="mb-8">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-neutral-200 text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4">
                                Ortak Zemin
                            </span>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">
                                Standart Senaryo Mantığı
                            </h3>
                            <BodyText size="sm" className="text-neutral-500 leading-relaxed">
                                Buradaki örnekler, sektörünüzdeki en yaygın operasyonel darboğazları çözmek için kurgulanan "genel geçer" akışlardır. Temel yapı taşları birçok işletme için benzerdir.
                            </BodyText>
                        </div>

                        <ul className="space-y-4 mt-auto">
                            {['Genel akış kurgusu', 'Temel tetikleyici mekanizmalar', 'Sektöre özel kategori kalıpları', 'Standart bildirim yapıları'].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-xs font-semibold text-neutral-600">
                                    <svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CardBase>

                    <CardBase 
                        size="lg"
                        className="bg-neutral-900 border-neutral-800 p-8 md:p-12 rounded-[2.5rem] flex flex-col text-white"
                    >
                        <div className="mb-8">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">
                                Özel İhtiyaç
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                Özelleştirme Nerede Başlar?
                            </h3>
                            <BodyText size="sm" className="text-neutral-400 leading-relaxed">
                                İşinizin ölçeği büyüdükçe veya mevcut araç setiniz karmaşıklaştıkça, bu şablonları sizin için özel olarak terzi dikimi bir hale getiriyoruz.
                            </BodyText>
                        </div>

                        <div className="space-y-6 mt-auto">
                            {whereCustomizationStarts.points.map((point, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                                        {index + 1}
                                    </div>
                                    <p className="text-[13px] font-medium text-neutral-300 leading-snug">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardBase>
                </div>

                <div className="mt-20 text-center">
                    <p className="text-[10px] font-bold text-neutral-300 uppercase tracking-[0.3em]">
                        Her kurulum, işletmenizin dnasını yansıtacak şekilde optimize edilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 7. Fit Check Block
 */
export function TRScenariosFitCheckBlock() {
    const { fitCheck } = trScenariosContent;

    return (
        <SectionWrapper className="bg-neutral-50/20">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={fitCheck.title}
                    description={fitCheck.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 text-white shadow-xl shadow-black/10">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    Bu Akışlar Size Uygun, Eğer...
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                                    Stratejik Eşleşme
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-6 flex-grow">
                            {fitCheck.goodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-neutral-700 leading-relaxed italic">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-12 pt-8 border-t border-neutral-50">
                            <p className="text-[11px] font-medium text-neutral-400 leading-snug">
                                Senaryolar aracılığıyla kendi sürecini hayal edebilen yapılar, en hızlı verimi alan ekiplerimizdir.
                            </p>
                        </div>
                    </CardBase>

                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-neutral-50/50 border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12 group"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-neutral-200 text-neutral-300 group-hover:border-neutral-900 group-hover:text-neutral-900 transition-all duration-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    Henüz Hazır Değilseniz, Eğer...
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                                    Beklenti Dengesi
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-6 flex-grow">
                            {fitCheck.notGoodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-2 h-1 w-1 rounded-full bg-neutral-300" aria-hidden="true" />
                                    <span className="text-sm font-medium text-neutral-500 leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-12 pt-8 border-t border-neutral-100">
                            <p className="text-[11px] font-medium text-neutral-400 leading-snug">
                                Otomasyon bir "araç" değil, bir "çalışma kültürü" dönüşümüdür. Ekip katılımı ve süreç analizi başarımızın anahtarıdır.
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-20 text-center">
                    <p className="max-w-xl mx-auto text-[11px] font-bold text-neutral-300 uppercase tracking-[0.2em] italic leading-relaxed">
                        * Bu sayfa, çözüm kapsamımızı ve yaklaşımımızı şeffaflaştırmak için tasarlanmıştır. Doğru kurgu, doğru beklentiyle başlar.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 8. Contact CTA Block
 */
export function TRScenariosContactCtaBlock() {
    const { contactCta } = trScenariosContent;

    return (
        <SectionWrapper className="bg-white border-t border-neutral-100">
            <ContentContainer className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="bg-neutral-50/50 border-neutral-100 p-8 md:p-16 text-center rounded-[3rem] overflow-hidden relative shadow-sm"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-neutral-900/[0.03] rounded-full blur-[100px] -translate-y-1/2" />
                        
                        <div className="relative z-10">
                            <SectionHeader
                                title={contactCta.title}
                                description={contactCta.description}
                                align="center"
                                maxWidth="md"
                                className="mb-12"
                            />

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                                <a 
                                    href={resolveHref(contactCta.primaryCta, '/fiyatlandirma#brief-form')} 
                                    className="w-full sm:w-auto"
                                >
                                    <PrimaryButton className="w-full sm:w-auto !px-12 !py-4 shadow-xl shadow-black/10 text-sm font-bold">
                                        {resolveCta(contactCta.primaryCta)}
                                    </PrimaryButton>
                                </a>
                                <a 
                                    href={resolveHref(contactCta.secondaryCta, 'https://wa.me/')} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <SecondaryButton className="w-full sm:w-auto !px-12 !py-4 bg-white text-sm font-bold">
                                        {resolveCta(contactCta.secondaryCta)}
                                    </SecondaryButton>
                                </a>
                            </div>

                            {contactCta.helperText && (
                                <BodyText className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em]">
                                    {contactCta.helperText}
                                </BodyText>
                            )}
                        </div>

                        <div className="mt-16 pt-8 border-t border-neutral-100/60">
                            <div className="flex flex-wrap items-center justify-center gap-6 opacity-30 grayscale contrast-125">
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-900">
                                    Strategic
                                </span>
                                <div className="w-1 h-1 rounded-full bg-neutral-400" />
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-900">
                                    Operational
                                </span>
                                <div className="w-1 h-1 rounded-full bg-neutral-400" />
                                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-neutral-900">
                                    Automated
                                </span>
                            </div>
                        </div>
                    </CardBase>
                </div>
                
                <div className="mt-16 text-center">
                    <p className="max-w-xl mx-auto text-[10px] font-bold text-neutral-300 uppercase tracking-[0.2em] leading-relaxed">
                        Kendi iş akışınızı örnek senaryolarla karşılaştırmak veya <br />
                        mevcut dağınıklığı nasıl toparlayacağımızı konuşmak için değerlendirme alabilirsiniz.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
