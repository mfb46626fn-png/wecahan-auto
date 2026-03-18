"use client";

import * as React from 'react';
import { useState, useRef } from "react";
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
import { CheckboxField } from "../../../shared/forms/CheckboxField";
import { FormField } from "../../../shared/forms/FormField";
import { SelectInput } from "../../../shared/forms/SelectInput";
import { TextArea } from "../../../shared/forms/TextArea";
import { TextInput } from "../../../shared/forms/TextInput";
import { trPricingContent } from '../../../../content/tr/pricing';
import { trInquiryOptions } from "../../../../lib/brief/inquiry-options";
import { trBriefPlaceholders } from "../../../../lib/brief/placeholders";

// --- Helpers ---
const resolveCtaLabel = (cta: string | { label: string; href: string }) => {
    return typeof cta === 'string' ? cta : cta.label;
};

const resolveCta = (cta: string | { label: string; href: string }, defaultHref: string) => {
    if (typeof cta === 'string') {
        return { label: cta, href: defaultHref };
    }
    return cta;
};

const resolveCtaHref = (cta: string | { label: string; href: string }, fallback: string) => {
    return typeof cta === 'string' ? fallback : cta.href;
};

// --- Blocks ---

/**
 * 1. Hero Block
 */
export function TRPricingHeroBlock() {
    const { hero, pricingPhilosophy } = trPricingContent;

    const primaryCta = resolveCta(hero.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(hero.secondaryCta, '#setup-packages');

    return (
        <SectionWrapper className="overflow-hidden bg-neutral-50/50">
            <ContentContainer className="py-12 md:py-24 lg:py-32">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
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
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-neutral-200/50 blur-2xl" aria-hidden="true" />
                        
                        <CardBase size="lg" className="relative shadow-2xl shadow-neutral-200/50 border-neutral-100 bg-white">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">
                                        {pricingPhilosophy.title}
                                    </h3>
                                    <div className="grid gap-4">
                                        {pricingPhilosophy.items.map((item, index) => (
                                            <div key={index} className="group relative pl-4 border-l-2 border-neutral-100 hover:border-black transition-colors">
                                                <h4 className="text-sm font-bold text-neutral-900 mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs text-neutral-500 leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center overflow-hidden">
                                                <div className="w-full h-full bg-neutral-200 animate-pulse" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest text-right">
                                        Şeffaf Süreç Mantığı
                                    </p>
                                </div>
                            </div>
                        </CardBase>

                        <div className="absolute -bottom-6 -right-6 hidden sm:block">
                            <div className="rounded-2xl bg-black px-6 py-4 shadow-xl">
                                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Model</p>
                                <p className="text-sm font-bold text-white whitespace-nowrap">Kapsam Odaklı</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. Model Overview Block
 */
export function TRPricingModelOverviewBlock() {
    const { pricingPhilosophy } = trPricingContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer>
                <SectionHeader
                    title={pricingPhilosophy.title}
                    description={pricingPhilosophy.description}
                    align="center"
                    className="mb-10 md:mb-16"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {pricingPhilosophy.items.map((item, index) => (
                        <CardBase 
                            key={index}
                            size="md"
                            className="bg-neutral-50/50 border-neutral-100 hover:bg-white hover:border-neutral-200 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white text-xs font-bold mb-4">
                                    0{index + 1}
                                </span>
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
 * 3. Analysis Block
 */
export function TRPricingAnalysisBlock() {
    const { analysisPricing, hero } = trPricingContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer>
                <SectionHeader
                    eyebrow="Adım 1"
                    title={analysisPricing.title}
                    description="Otomasyon inşasına başlamadan önce mevcut süreçlerinizi analiz ediyor ve en verimli teknoloji haritasını çıkarıyoruz."
                    align="center"
                    className="mb-10 md:mb-16"
                />

                <CardBase size="lg" className="bg-white border-neutral-200 overflow-hidden shadow-sm max-w-5xl mx-auto">
                    <div className="bg-black p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between border-b border-neutral-800">
                        <div>
                            <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">
                                Yatırım Aralığı
                            </p>
                            <h3 className="text-3xl font-bold text-white">
                                {analysisPricing.band}
                            </h3>
                        </div>
                        <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-4">
                            <a href="#brief-form">
                                <PrimaryButton className="bg-white hover:bg-neutral-100 text-black border-none !px-8">
                                    {resolveCtaLabel(hero.primaryCta)}
                                </PrimaryButton>
                            </a>
                        </div>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="grid gap-12 md:grid-cols-3">
                            <div>
                                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    Neleri Kapsar?
                                </h4>
                                <ul className="space-y-4">
                                    {analysisPricing.scope.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 mt-1 h-1 w-1 rounded-full bg-neutral-300" />
                                            <BodyText className="text-sm text-neutral-600">
                                                {item}
                                            </BodyText>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                    Neler Dahil Değil?
                                </h4>
                                <ul className="space-y-4">
                                    {analysisPricing.notIncluded.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 mt-1 h-1 w-1 rounded-full bg-neutral-300" />
                                            <BodyText className="text-sm text-neutral-500 line-through decoration-neutral-300">
                                                {item}
                                            </BodyText>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-5 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    Bandı Ne Etkiler?
                                </h4>
                                <ul className="space-y-4">
                                    {analysisPricing.factors.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="flex-shrink-0 mt-1.5 text-blue-500">
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <BodyText className="text-sm text-neutral-600 font-medium">
                                                {item}
                                            </BodyText>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 pt-10 border-t border-neutral-100 flex flex-col items-center text-center">
                            <BodyText className="text-sm text-neutral-500 max-w-2xl mb-8">
                                Analiz süreci sonunda, kliniğiniz veya ofisiniz için en uygun otomasyon seviyesi netleşir ve kurulum aşamasına tam hakimiyetle geçilir.
                            </BodyText>
                            <a href="#setup-packages">
                                <SecondaryButton className="!px-10">
                                    {resolveCtaLabel(hero.secondaryCta)}
                                </SecondaryButton>
                            </a>
                        </div>
                    </div>
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 4. Setup Packages Block
 */
export function TRPricingSetupPackagesBlock() {
    const { setupPackages, hero } = trPricingContent;

    return (
        <div id="setup-packages">
            <SectionWrapper className="bg-white">
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader
                    eyebrow="Adım 2"
                    title={setupPackages.title}
                    description={setupPackages.description}
                    align="center"
                    className="mb-10 md:mb-20 lg:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
                    {setupPackages.levels.map((level, index) => {
                        const isRecommended = index === 1;
                        
                        return (
                            <CardBase 
                                key={index} 
                                size="lg" 
                                className={`flex flex-col h-full transition-all duration-500 hover:translate-y-[-8px] ${
                                    isRecommended 
                                        ? 'border-black shadow-2xl shadow-neutral-200 ring-1 ring-black relative z-10' 
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
                                        {level.title}
                                    </h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-2xl font-black text-neutral-900">
                                            {level.band}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-neutral-500 leading-relaxed min-h-[40px]">
                                        {level.suitableFor}
                                    </p>
                                </div>

                                <div className="space-y-6 flex-grow">
                                    <div className="pt-6 border-t border-neutral-100">
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                            Neler Dahil?
                                        </h4>
                                        <ul className="space-y-4">
                                            {level.scope.map((item, sIndex) => (
                                                <li key={sIndex} className="flex items-start gap-3">
                                                    <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-black" />
                                                    <span className="text-sm font-semibold text-neutral-700">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-6 border-t border-neutral-100 italic">
                                        <p className="text-[11px] text-neutral-400 font-medium">
                                            {level.whyThisBand}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-neutral-100">
                                    <a href="#brief-form" className="block w-full">
                                        <PrimaryButton 
                                            fullWidth 
                                            className={`!py-4 text-sm ${!isRecommended ? '!bg-white !text-black border border-neutral-200 hover:!bg-neutral-50' : ''}`}
                                        >
                                            {resolveCtaLabel(hero.primaryCta)}
                                        </PrimaryButton>
                                    </a>
                                </div>
                            </CardBase>
                        );
                    })}
                </div>

                <div className="mt-16 md:mt-24 text-center">
                    <div className="max-w-2xl mx-auto p-8 rounded-[2rem] bg-neutral-50 border border-neutral-100">
                        <BodyText className="text-sm text-neutral-500 mb-6">
                            Kurulum sonrasında sistemlerin sürekliliği ve performansı için bakım paketlerimizi incelemeyi unutmayın.
                        </BodyText>
                        <a href="#maintenance-plans">
                            <SecondaryButton className="!px-10">
                                Bakım Planlarını Gör
                            </SecondaryButton>
                        </a>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    </div>
    );
}

/**
 * 5. Maintenance Plans Block
 */
export function TRPricingMaintenancePlansBlock() {
    const { maintenancePlans, hero } = trPricingContent;

    return (
        <div id="maintenance-plans">
            <SectionWrapper className="bg-neutral-50/50">
                <ContentContainer className="py-12 md:py-24">
                    <SectionHeader
                        eyebrow="Adım 3"
                        title={maintenancePlans.title}
                        description={maintenancePlans.description}
                        align="center"
                        className="mb-10 md:mb-20 lg:mb-24"
                    />

                    <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
                        {maintenancePlans.plans.map((plan, index) => {
                            const isRecommended = index === 1;
                            
                            return (
                                <CardBase 
                                    key={index} 
                                    size="lg" 
                                    className={`flex flex-col h-full bg-white transition-all duration-500 hover:translate-y-[-8px] ${
                                        isRecommended 
                                            ? 'border-black shadow-2xl shadow-neutral-200 ring-1 ring-black relative z-10' 
                                            : 'border-neutral-100 shadow-sm'
                                    }`}
                                >
                                    {isRecommended && (
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <span className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest shadow-lg">
                                                En Dengeli Bakım Modeli
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-8">
                                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                            {plan.title}
                                        </h3>
                                        <div className="flex items-baseline gap-1 mb-4">
                                            <span className="text-2xl font-black text-neutral-900">
                                                {plan.band}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-neutral-500 leading-relaxed min-h-[40px]">
                                            {plan.suitableFor}
                                        </p>
                                    </div>

                                    <div className="space-y-6 flex-grow">
                                        <div className="pt-6 border-t border-neutral-100">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                                Plan Kapsamı
                                            </h4>
                                            <ul className="space-y-4">
                                                {plan.scope.map((item, sIndex) => (
                                                    <li key={sIndex} className="flex items-start gap-3">
                                                        <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-black" />
                                                        <span className="text-sm font-semibold text-neutral-700">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-10 pt-8 border-t border-neutral-100">
                                        <a href="#brief-form" className="block w-full">
                                            <PrimaryButton 
                                                fullWidth 
                                                className={`!py-4 text-sm ${!isRecommended ? '!bg-white !text-black border border-neutral-200 hover:!bg-neutral-50' : ''}`}
                                            >
                                                {resolveCtaLabel(hero.primaryCta)}
                                            </PrimaryButton>
                                        </a>
                                    </div>
                                </CardBase>
                            );
                        })}
                    </div>

                    <div className="mt-16 md:mt-24 text-center">
                        <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                            <p className="text-xs font-semibold text-neutral-500 leading-relaxed italic">
                                <span className="font-bold text-neutral-900 not-italic">Önemli Not:</span> {maintenancePlans.note}
                            </p>
                        </div>
                        
                        <div className="mt-12">
                            <a href="#included-scope">
                                <SecondaryButton className="!px-10">
                                    Detaylı Kapsamı Gör
                                </SecondaryButton>
                            </a>
                        </div>
                    </div>
                </ContentContainer>
            </SectionWrapper>
        </div>
    );
}

/**
 * 6. Included Scope Block
 */
export function TRPricingIncludedScopeBlock() {
    const { whatsIncluded, whatsNotIncluded } = trPricingContent;

    return (
        <SectionWrapper id="included-scope" className="bg-white">
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader
                    title="Hizmet Kapsamı ve Sınırlar"
                    description="Fiyatlandırmanın neyi kapsayıp neyi kapsamadığını dürüstçe ortaya koyuyor, sisli satış alanlarını en baştan temizliyoruz."
                    align="center"
                    maxWidth="md"
                    className="mb-10 md:mb-16"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full border-neutral-100 bg-neutral-50/30"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {whatsIncluded.title}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {whatsIncluded.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-700">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Standart Operasyonel Kapsam
                            </p>
                        </div>
                    </CardBase>

                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full border-neutral-100 bg-white"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-neutral-200 text-neutral-500">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {whatsNotIncluded.title}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {whatsNotIncluded.items.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-500">
                                    <span className="flex-shrink-0 mt-1.5 h-1.25 w-1.25 rounded-full bg-neutral-200" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Ek Geliştirme / Kapsam Dışı
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-2xl mx-auto text-sm text-neutral-400 font-medium italic">
                        * Belirlenen sınırlar, odak noktamızı dağıtmadan en yüksek verimi sağlamak için şeffaf bir çerçeve sunar.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 7. What Affects Price Block
 */
export function TRPricingWhatAffectsPriceBlock() {
    const { howPricingIsCalculated } = trPricingContent;

    return (
        <SectionWrapper id="what-affects-price" className="bg-neutral-50/50">
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader
                    title={howPricingIsCalculated.title}
                    description={howPricingIsCalculated.description}
                    align="center"
                    maxWidth="md"
                    className="mb-10 md:mb-16"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto">
                    {howPricingIsCalculated.factors.map((factor, index) => (
                        <CardBase 
                            key={index}
                            size="md"
                            className="bg-white border-neutral-100 shadow-sm transition-all duration-300 hover:shadow-md hover:border-neutral-200"
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="text-lg font-bold text-neutral-900 mb-3">
                                    {factor.title}
                                </h3>
                                <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                                    {factor.description}
                                </p>
                            </div>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-xl mx-auto text-[13px] text-neutral-400 font-medium italic">
                        * Bu değişkenler işletmenizin ihtiyaçlarına göre analiz aşamasında netleştirilir ve paket seçiminizi belirler.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 8. Additional Development Block
 */
export function TRPricingAdditionalDevelopmentBlock() {
    const { additionalDevLogic, hero } = trPricingContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader
                    title={additionalDevLogic.title}
                    description="Bakım süreçlerinden bağımsız, sisteminize yeni yetenekler ve modüller eklemek istediğinizde uyguladığımız şeffaf fiyatlandırma mantığı."
                    align="center"
                    maxWidth="md"
                    className="mb-10 md:mb-16 lg:mb-20"
                />

                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="border-neutral-100 bg-neutral-50/30 overflow-hidden"
                    >
                        <div className="p-8 md:p-12">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-2">
                                        Fiyat Mantığı
                                    </h3>
                                    <p className="text-3xl font-black text-neutral-900">
                                        {additionalDevLogic.band}
                                    </p>
                                </div>
                                <div className="max-w-sm">
                                    <p className="text-sm font-medium text-neutral-500 leading-relaxed italic">
                                        * {additionalDevLogic.whyWideRange}
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-12 md:grid-cols-2">
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold text-neutral-900 mb-6">
                                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black text-white text-[10px]">✓</span>
                                        Bu Kalem Neleri Kapsayabilir?
                                    </h4>
                                    <ul className="space-y-4">
                                        {additionalDevLogic.scope.map((item, index) => (
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
                                        Bu Kalem Neleri Kapsamaz?
                                    </h4>
                                    <ul className="space-y-4">
                                        {additionalDevLogic.notIncluded.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-500 line-through decoration-neutral-300">
                                                <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-100" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-16 pt-10 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a href="#brief-form" className="w-full sm:w-auto">
                                    <PrimaryButton className="w-full sm:w-auto !px-12">
                                        {resolveCtaLabel(hero.primaryCta)}
                                    </PrimaryButton>
                                </a>
                                <a href="#what-affects-price" className="w-full sm:w-auto">
                                    <SecondaryButton className="w-full sm:w-auto !px-12">
                                        Fiyat Faktörlerini Gör
                                    </SecondaryButton>
                                </a>
                            </div>
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 9. Who This Is For Block
 */
export function TRPricingWhoThisIsForBlock() {
    const { whoThisIsFor } = trPricingContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader
                    title={whoThisIsFor.title}
                    description={whoThisIsFor.description}
                    align="center"
                    maxWidth="md"
                    className="mb-10 md:mb-16 lg:mb-20"
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {whoThisIsFor.items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full transition-all duration-300 border-neutral-100 bg-neutral-50/50 hover:bg-white hover:shadow-xl hover:shadow-neutral-100 hover:border-neutral-200"
                        >
                            <div className="mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-black text-white mb-6">
                                    <span className="text-lg font-bold">{index + 1}</span>
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                            
                            <div className="mt-auto pt-8 border-t border-neutral-100/50">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                                    Müşteri Profili
                                </p>
                            </div>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-2xl mx-auto text-sm text-neutral-400 font-medium italic">
                        * Bu model, özellikle şeffaflık ve sürdürülebilirlik odaklı işletmeler için maksimum verim sağlar.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 10. FAQ Block
 */
export function TRPricingFaqBlock() {
    const { faq } = trPricingContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-12 md:py-24">
                <SectionHeader
                    title={faq.title}
                    description="Fiyatlandırma, kapsam ve süreçler hakkında en çok merak edilen soruları şeffaf bir şekilde cevaplıyoruz."
                    align="center"
                    maxWidth="md"
                    className="mb-10 md:mb-16"
                />

                <div className="max-w-3xl mx-auto space-y-4">
                    {faq.questions.map((item, index) => (
                        <details 
                            key={index} 
                            className="group rounded-2xl border border-neutral-100 bg-neutral-50/30 p-6 transition-all duration-300 hover:border-neutral-200 open:bg-white open:border-neutral-200 open:shadow-xl open:shadow-neutral-100"
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-lg font-bold text-neutral-900 focus:outline-none">
                                <span>{item.question}</span>
                                <span className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-neutral-400">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </summary>
                            <div className="mt-4 pt-4 border-t border-neutral-100">
                                <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 11. Contact CTA Block
 */
type FormValues = {
    fullName: string;
    workEmail: string;
    company: string;
    inquiryType: string;
    message: string;
    consent: boolean;
};

const INITIAL_VALUES: FormValues = {
    fullName: "",
    workEmail: "",
    company: "",
    inquiryType: "",
    message: "",
    consent: false,
};

export function TRPricingContactCtaBlock() {
    const { finalCta } = trPricingContent;
    const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [submitSuccess, setSubmitSuccess] = useState("");
    const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormValues | "siteFamily", string>>>({});

    const fullNameRef = useRef<HTMLInputElement>(null);
    const workEmailRef = useRef<HTMLInputElement>(null);
    const companyRef = useRef<HTMLInputElement>(null);
    const inquiryTypeRef = useRef<HTMLSelectElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);
    const consentRef = useRef<HTMLInputElement>(null);

    const fieldRefs: Record<string, React.RefObject<any>> = {
        fullName: fullNameRef,
        workEmail: workEmailRef,
        company: companyRef,
        inquiryType: inquiryTypeRef,
        message: messageRef,
        consent: consentRef,
    };

    function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
        setValues((current) => ({ ...current, [key]: value }));
        if (fieldErrors[key]) {
            setFieldErrors((current) => {
                const newErrors = { ...current };
                delete newErrors[key];
                return newErrors;
            });
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");
        setSubmitSuccess("");
        setFieldErrors({});

        if (!values.consent) {
            setSubmitError("Devam etmeden önce onay vermelisiniz.");
            setIsSubmitting(false);
            consentRef.current?.focus();
            return;
        }

        try {
            const response = await fetch("/api/brief", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    siteFamily: "tr",
                    ...values
                }),
            });

            const result = (await response.json()) as any;

            if (!response.ok || !result.ok) {
                if (result.fieldErrors) setFieldErrors(result.fieldErrors);
                setSubmitError(result.errors?.[0] || result.message || "Bir hata oluştu.");
                const firstInvalidKey = Object.keys(fieldRefs).find(key => (result.fieldErrors || {})[key]);
                if (firstInvalidKey) fieldRefs[firstInvalidKey].current?.focus();
                return;
            }

            setSubmitSuccess("Briefiniz başarıyla gönderildi.");
            setValues(INITIAL_VALUES);
        } catch {
            setSubmitError("Bir şeyler ters gitti.");
        } finally {
            setIsSubmitting(false);
        }
    }

    const whatsappHref = resolveCtaHref(finalCta.secondaryCta, 'https://wa.me/');

    return (
        <div id="brief-form">
            <SectionWrapper className="bg-white">
                <ContentContainer className="py-16 md:py-24">
                    <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start max-w-6xl mx-auto">
                        <div className="flex flex-col">
                            <SectionHeader title={finalCta.title} description={finalCta.description} align="left" className="mb-10" />
                            <div className="space-y-6 mb-12">
                                {finalCta.trustPoints.map((point, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                                            <span className="text-xs font-bold">{index + 1}</span>
                                        </div>
                                        <BodyText className="text-sm font-semibold text-neutral-700">{point}</BodyText>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-8 border-t border-neutral-100">
                                <p className="text-sm font-bold text-neutral-900 mb-4">Hızlı temas mı istiyorsunuz?</p>
                                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                                    <PrimaryButton className="bg-[#25D366] hover:bg-[#20ba59] border-none text-white !px-10">
                                        {resolveCtaLabel(finalCta.secondaryCta)}
                                    </PrimaryButton>
                                </a>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-neutral-200 bg-neutral-50/10 p-6 shadow-sm sm:p-10">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <FormField label="Ad Soyad" error={fieldErrors.fullName} htmlFor="fullName">
                                    <TextInput ref={fullNameRef} id="fullName" value={values.fullName} onChange={(e) => updateField("fullName", e.target.value)} placeholder={trBriefPlaceholders.fullName} />
                                </FormField>
                                <FormField label="İş E-postası" error={fieldErrors.workEmail} htmlFor="workEmail">
                                    <TextInput ref={workEmailRef} id="workEmail" type="email" value={values.workEmail} onChange={(e) => updateField("workEmail", e.target.value)} placeholder={trBriefPlaceholders.workEmail} />
                                </FormField>
                                <FormField label="Şirket Adı" error={fieldErrors.company} htmlFor="company">
                                    <TextInput ref={companyRef} id="company" value={values.company} onChange={(e) => updateField("company", e.target.value)} placeholder={trBriefPlaceholders.company} />
                                </FormField>
                                <FormField label="İhtiyaç Türü" error={fieldErrors.inquiryType} htmlFor="inquiryType">
                                    <SelectInput ref={inquiryTypeRef} id="inquiryType" value={values.inquiryType} onChange={(e) => updateField("inquiryType", e.target.value)}>
                                        <option value="">{trBriefPlaceholders.inquiryTypePlaceholder}</option>
                                        {trInquiryOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                                    </SelectInput>
                                </FormField>
                            </div>
                            <FormField label="Sürecinizi kısaca anlatın" error={fieldErrors.message} htmlFor="message">
                                <TextArea ref={messageRef} id="message" value={values.message} onChange={(e) => updateField("message", e.target.value)} placeholder={trBriefPlaceholders.message} rows={4} />
                            </FormField>
                            <CheckboxField ref={consentRef} id="consent" checked={values.consent} onChange={(e) => updateField("consent", e.target.checked)} label={trBriefPlaceholders.consentLabel} error={fieldErrors.consent} />
                            <PrimaryButton type="submit" disabled={isSubmitting} fullWidth>{isSubmitting ? "Gönderiliyor..." : resolveCtaLabel(finalCta.primaryCta)}</PrimaryButton>
                            {submitError && <p className="text-sm font-medium text-red-600 text-center">{submitError}</p>}
                            {submitSuccess && <p className="text-sm font-medium text-green-600 text-center">{submitSuccess}</p>}
                        </form>
                    </div>
                </ContentContainer>
            </SectionWrapper>
        </div>
    );
}
