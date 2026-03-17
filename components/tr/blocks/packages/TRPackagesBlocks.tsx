"use client";

import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { SectionEyebrow } from '../../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../../shared/typography/SectionTitle';
import { SectionDescription } from '../../../shared/typography/SectionDescription';
import { BodyText } from '../../../shared/typography/BodyText';
import { CardBase } from '../../../shared/ui/CardBase';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { trPackagesContent } from '../../../../content/tr/packages';

// --- Helpers ---
type CtaConfig = string | { label: string; href: string };

const resolveCta = (cta: CtaConfig, defaultHref: string) => {
    if (typeof cta === 'string') {
        return { label: cta, href: defaultHref };
    }
    return cta;
};

// --- Blocks ---

/**
 * 1. Hero Block
 */
export function TRPackagesHeroBlock() {
    const { hero, serviceModelOverview } = trPackagesContent;

    const primaryCta = resolveCta(hero.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(hero.secondaryCta, '/fiyatlandirma');

    return (
        <SectionWrapper className="overflow-hidden bg-white">
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="flex flex-col items-start text-left">
                        {hero.eyebrow && (
                            <SectionEyebrow className="mb-4">
                                {hero.eyebrow}
                            </SectionEyebrow>
                        )}

                        <SectionTitle size="lg" className="mb-6 max-w-2xl">
                            {hero.title}
                        </SectionTitle>

                        <SectionDescription maxWidth="lg" className="mb-10 text-neutral-600">
                            {hero.description}
                        </SectionDescription>

                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <a href={primaryCta.href} className="w-full sm:w-auto">
                                <PrimaryButton fullWidth className="!px-10 !py-4 text-base">
                                    {primaryCta.label}
                                </PrimaryButton>
                            </a>

                            <a href={secondaryCta.href} className="w-full sm:w-auto">
                                <SecondaryButton fullWidth className="!px-10 !py-4 text-base">
                                    {secondaryCta.label}
                                </SecondaryButton>
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-neutral-200" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                                Şeffaf Üretim ve Bakım modeli
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-neutral-100/50 blur-2xl" aria-hidden="true" />

                        <div className="relative space-y-4">
                            <div className="grid gap-4">
                                {serviceModelOverview.items.map((item, index) => (
                                    <CardBase
                                        key={index}
                                        className="group p-5 border-neutral-100 bg-white transition-all duration-300 hover:border-black hover:shadow-xl hover:shadow-neutral-100"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-neutral-50 flex items-center justify-center text-sm font-bold text-neutral-400 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                                0{index + 1}
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-neutral-900 mb-1">
                                                    {item.title}
                                                </h3>
                                                <p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardBase>
                                ))}
                            </div>

                            <div className="pt-4 flex items-center justify-between px-2">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                                        Ürünleşmiş Akış Yapısı
                                    </span>
                                </div>
                                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                                    Kapsam Garantili
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. Service Model Overview Block
 */
export function TRPackagesServiceModelOverviewBlock() {
    const { serviceModelOverview } = trPackagesContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer>
                <SectionHeader
                    eyebrow={serviceModelOverview.eyebrow}
                    title={serviceModelOverview.title}
                    description={serviceModelOverview.description}
                    align="center"
                    className="mb-16"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {serviceModelOverview.items.map((item, index) => (
                        <CardBase
                            key={index}
                            size="md"
                            className="bg-white border-neutral-100 hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex flex-col h-full">
                                <div className="mb-6 flex items-center justify-between">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white text-sm font-bold">
                                        0{index + 1}
                                    </span>
                                    <div className="h-0.5 flex-grow mx-4 bg-neutral-100 rounded-full lg:block hidden last:hidden" aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-neutral-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 3. Automation Analysis Block
 */
export function TRPackagesAutomationAnalysisBlock() {
    const { automationAnalysis } = trPackagesContent;

    const sections = [
        {
            title: 'Neleri Kapsar?',
            items: automationAnalysis.included,
            dotColor: 'bg-green-500',
        },
        {
            title: 'Neler Dahil Değil?',
            items: automationAnalysis.notIncluded,
            dotColor: 'bg-red-400',
            isNegative: true,
        },
        {
            title: 'Teslim Çıktısı',
            items: automationAnalysis.deliverables,
            dotColor: 'bg-blue-500',
        },
        {
            title: 'Kime Uygun?',
            items: automationAnalysis.bestFor,
            dotColor: 'bg-purple-500',
        }
    ];

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer>
                <SectionHeader
                    eyebrow="Aşama 1"
                    title={automationAnalysis.title}
                    description={automationAnalysis.description}
                    align="center"
                    className="mb-16"
                />

                <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                    {sections.map((section, sectionIdx) => (
                        <CardBase
                            key={sectionIdx}
                            size="lg"
                            className="bg-neutral-50/50 border-neutral-100 p-8 md:p-10 flex flex-col h-full"
                        >
                            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-8 flex items-center gap-3">
                                <span className={`w-2 h-2 rounded-full ${section.dotColor}`} />
                                {section.title}
                            </h4>

                            <ul className="space-y-5 flex-grow">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-start gap-4">
                                        <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-300" />
                                        <BodyText
                                            className={`text-sm leading-relaxed ${section.isNegative
                                                    ? 'text-neutral-500 line-through decoration-neutral-300'
                                                    : 'text-neutral-600'
                                                }`}
                                        >
                                            {item}
                                        </BodyText>
                                    </li>
                                ))}
                            </ul>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 text-white shadow-xl shadow-neutral-200">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest">
                            Yatırım Öncesi Netlik Katmanı
                        </span>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 4. Setup Packages Block
 */
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
                                className={`flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-100 ${isRecommended
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

/**
 * 5. Maintenance Packages Block
 */
export function TRPackagesMaintenancePackagesBlock() {
    const { maintenancePackages } = trPackagesContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    eyebrow="Aşama 3"
                    title={maintenancePackages.title}
                    description={maintenancePackages.description}
                    align="center"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
                    {maintenancePackages.packages.map((pkg, index) => {
                        const isRecommended = index === 1; // Standart Bakım

                        return (
                            <CardBase
                                key={index}
                                size="lg"
                                className={`flex flex-col h-full bg-white transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-100 ${isRecommended
                                        ? 'border-black ring-1 ring-black relative z-10'
                                        : 'border-neutral-100 shadow-sm'
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
                                    <p className="text-sm text-neutral-600 mb-6 min-h-[40px]">
                                        {pkg.description}
                                    </p>
                                    <div className="pt-4 border-t border-neutral-100">
                                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">En İyi Performans</p>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-neutral-100/50">
                                            <span className="text-[11px] font-bold text-neutral-700">{pkg.bestFor}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8 flex-grow">
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                            Neler Dahil?
                                        </h4>
                                        <ul className="space-y-3">
                                            {pkg.included.map((item, iIndex) => (
                                                <li key={iIndex} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                                                    <BodyText className="text-sm font-semibold text-neutral-800">
                                                        {item}
                                                    </BodyText>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                                        <div className="pt-6 border-t border-neutral-100">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                                Neler Dahil Değil?
                                            </h4>
                                            <ul className="space-y-3">
                                                {pkg.notIncluded.map((item, nIndex) => (
                                                    <li key={nIndex} className="flex items-start gap-3 opacity-60">
                                                        <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-300" />
                                                        <BodyText className="text-xs text-neutral-500 line-through decoration-neutral-300">
                                                            {item}
                                                        </BodyText>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-10 pt-8 border-t border-neutral-100 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-neutral-900" />
                                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest italic">
                                            Süreklilik Odaklı
                                        </span>
                                    </div>
                                </div>
                            </CardBase>
                        );
                    })}
                </div>

                <div className="mt-16 md:mt-24 text-center">
                    <div className="max-w-2xl mx-auto p-8 rounded-[2rem] bg-white border border-neutral-100 shadow-sm">
                        <p className="text-sm text-neutral-500 leading-relaxed italic">
                            <span className="font-bold text-neutral-900 not-italic uppercase tracking-widest text-[10px] mr-2">Önemli Not:</span>
                            {maintenancePackages.note}
                        </p>
                    </div>

                    <div className="mt-12">
                        <a href="/iletisim">
                            <span className="text-sm font-bold text-black border-b-2 border-black pb-1 hover:text-neutral-600 hover:border-neutral-400 transition-all cursor-pointer">
                                Destek İhtiyacınızı İletin →
                            </span>
                        </a>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 6. Additional Development Block
 */
export function TRPackagesAdditionalDevelopmentBlock() {
    const { additionalDevelopment } = trPackagesContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={additionalDevelopment.title}
                    description={additionalDevelopment.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="max-w-4xl mx-auto">
                    <CardBase
                        size="lg"
                        className="border-neutral-100 bg-neutral-50/30 overflow-hidden"
                    >
                        <div className="p-8 md:p-12">
                            <div className="grid gap-12 md:grid-cols-2">
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-6">
                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-[10px]">✓</span>
                                        Ek Geliştirme Örnekleri
                                    </h4>
                                    <ul className="space-y-4">
                                        {additionalDevelopment.examples.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-700">
                                                <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-300" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-6">
                                        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-neutral-200 text-neutral-400 text-[10px]">×</span>
                                        Bu Kapsama Girmez
                                    </h4>
                                    <ul className="space-y-4">
                                        {additionalDevelopment.notThis.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-500 line-through decoration-neutral-300">
                                                <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-100" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 border-t border-neutral-100">
                                <div className="p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                                    <p className="text-xs font-semibold text-neutral-500 leading-relaxed italic">
                                        <span className="font-bold text-neutral-900 not-italic uppercase tracking-widest text-[10px] mr-2">Neden Ayrı?</span>
                                        {additionalDevelopment.whySeparate}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 7. Included Scope Block
 */
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

/**
 * 8. Not Included Block
 */
export function TRPackagesNotIncludedBlock() {
    const { notIncluded } = trPackagesContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={notIncluded.title}
                    description={notIncluded.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <CardBase
                    size="lg"
                    className="max-w-4xl mx-auto border-neutral-100 bg-neutral-50/20"
                >
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-neutral-200 text-neutral-400">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900">
                                    Hizmet Sınırlarımız
                                </h3>
                                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">
                                    Daha Sağlıklı Bir İş Birliği İçin Sorumluluk Alanlarımız
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
                            {notIncluded.limits.map((limit, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all group">
                                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full border border-neutral-100 flex items-center justify-center group-hover:border-neutral-300 transition-all">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 group-hover:bg-neutral-400" />
                                    </div>
                                    <BodyText className="text-sm font-medium text-neutral-500 leading-snug">
                                        {limit}
                                    </BodyText>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-10 border-t border-neutral-100">
                            <div className="bg-white p-6 rounded-2xl border border-neutral-100 border-dashed text-center">
                                <p className="text-xs text-neutral-400 font-medium italic">
                                    * Belirlenen sınırlar dışında kalan her türlü talep için dürüstçe geri bildirim veriyor ve gerekirse doğru iş ortaklarına yönlendiriyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 9. Deliverables and Client Contribution Block
 */
export function TRPackagesDeliverablesAndClientContributionBlock() {
    const { deliverablesAndClientContribution } = trPackagesContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title="Teslimatlar ve Katkı Süreci"
                    description="Şeffaf bir iş birliği için neleri teslim edeceğimizi ve hangi noktalarda sizin desteğinize ihtiyaç duyacağımızı netleştiriyoruz."
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
                    <CardBase
                        size="lg"
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {deliverablesAndClientContribution.deliverablesTitle}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {deliverablesAndClientContribution.deliverables.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                                    <BodyText className="text-sm font-semibold text-neutral-800">
                                        {item}
                                    </BodyText>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Bizim Sorumluluğumuz
                            </p>
                        </div>
                    </CardBase>

                    <CardBase
                        size="lg"
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-neutral-200 text-neutral-500">
                                <span className="text-sm font-bold">!</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {deliverablesAndClientContribution.contributionTitle}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {deliverablesAndClientContribution.contribution.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-300" aria-hidden="true" />
                                    <BodyText className="text-sm font-medium text-neutral-600">
                                        {item}
                                    </BodyText>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Müşteri Katkısı
                            </p>
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 10. Fit Check Block
 */
export function TRPackagesFitCheckBlock() {
    const { fitCheck } = trPackagesContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title="Doğru Eşleşme Analizi"
                    description="Hangi durumlarda en yüksek verimi alacağımızı ve hangi beklentilerin bizim modelimize uygun olmadığını dürüstçe paylaşıyoruz."
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
                    <CardBase
                        size="lg"
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {fitCheck.goodFitTitle}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {fitCheck.goodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                    <BodyText className="text-sm font-semibold text-neutral-800">
                                        {item}
                                    </BodyText>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                İdeal İş Birliği
                            </p>
                        </div>
                    </CardBase>

                    <CardBase
                        size="lg"
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-neutral-200 text-neutral-500">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {fitCheck.notGoodFitTitle}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {fitCheck.notGoodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-200" aria-hidden="true" />
                                    <BodyText className="text-sm font-medium text-neutral-600">
                                        {item}
                                    </BodyText>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Beklenti Filtresi
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-xl mx-auto text-sm text-neutral-400 font-medium italic">
                        * Bu analiz, her iki tarafın vaktini ve yatırımını korumak, sadece yüksek verim alabileceğimiz senaryolarda el sıkışmak içindir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 11. Contact CTA Block
 */
export function TRPackagesContactCtaBlock() {
    const { contactCta } = trPackagesContent;

    const resolveCtaLabel = (cta: string | { label: string; href: string }) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const resolveCtaHref = (cta: string | { label: string; href: string }) => {
        return typeof cta === 'string' ? '#' : cta.href;
    };

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <CardBase
                    size="lg"
                    className="flex flex-col items-center text-center p-10 md:p-20 bg-neutral-900 border-neutral-800 text-white overflow-hidden relative shadow-2xl shadow-neutral-200 rounded-[2.5rem]"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-500/10 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <SectionTitle size="lg" className="!text-white mb-6">
                            {contactCta.title}
                        </SectionTitle>

                        <SectionDescription className="!text-neutral-400 mb-10 max-w-xl mx-auto">
                            {contactCta.description}
                        </SectionDescription>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                            <a href={resolveCtaHref(contactCta.primaryCta)} className="w-full sm:w-auto">
                                <PrimaryButton className="w-full sm:w-auto !px-12 !py-4 !bg-white !text-black hover:!bg-neutral-100 border-none text-base font-bold transition-all hover:scale-105 active:scale-95">
                                    {resolveCtaLabel(contactCta.primaryCta)}
                                </PrimaryButton>
                            </a>

                            <a href={resolveCtaHref(contactCta.secondaryCta)} className="w-full sm:w-auto">
                                <SecondaryButton className="w-full sm:w-auto !px-12 !py-4 !border-neutral-700 !bg-transparent !text-white hover:!bg-neutral-800 transition-all hover:scale-105 active:scale-95">
                                    {resolveCtaLabel(contactCta.secondaryCta)}
                                </SecondaryButton>
                            </a>
                        </div>

                        {contactCta.helperText && (
                            <BodyText className="mt-8 text-neutral-500 text-sm font-medium">
                                {contactCta.helperText}
                            </BodyText>
                        )}
                    </div>
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
