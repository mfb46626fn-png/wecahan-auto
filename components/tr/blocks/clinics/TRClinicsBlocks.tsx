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
import { trClinicsContent } from '../../../../content/tr/clinics';
import { trInquiryOptions } from "../../../../lib/brief/inquiry-options";
import { trBriefPlaceholders } from "../../../../lib/brief/placeholders";

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
export function TRClinicsHeroBlock() {
    const { hero, flagshipPackage } = trClinicsContent;

    const primaryCta = resolveCta(hero.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(hero.secondaryCta, '#paketler');

    return (
        <SectionWrapper className="overflow-hidden bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24 lg:py-32">
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
                        
                        <CardBase size="lg" className="relative shadow-2xl shadow-neutral-200/50 border-neutral-100">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">
                                        Klinik Çözüm Kapsamı
                                    </h3>
                                    <ul className="space-y-3">
                                        {flagshipPackage.scope.slice(0, 4).map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-700">
                                                <span className="flex-shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="pt-6 border-t border-neutral-100">
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 mb-4">
                                        Odak Noktası
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['WhatsApp Hatları', 'Hasta Takibi', 'Randevu Teyit', 'No-show Kaybı'].map((tag) => (
                                            <span 
                                                key={tag} 
                                                className="px-3 py-1.5 rounded-full bg-neutral-100 text-xs font-bold text-neutral-600"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardBase>

                        <div className="absolute -bottom-6 -right-6 hidden sm:block">
                            <div className="rounded-2xl bg-black px-6 py-4 shadow-xl">
                                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Status</p>
                                <p className="text-sm font-bold text-white whitespace-nowrap">Satışa Hazır Akışlar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. Pain Points Block
 */
export function TRClinicsPainPointsBlock() {
    const { painPoints } = trClinicsContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer>
                <SectionHeader
                    title={painPoints.title}
                    description={painPoints.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {painPoints.items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full bg-neutral-50 border-neutral-100 hover:border-neutral-200 transition-colors duration-300"
                        >
                            <div className="mb-5 flex items-center justify-center w-10 h-10 rounded-xl bg-black text-white text-sm font-bold">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            
                            <h3 className="text-lg font-bold text-neutral-900 mb-3">
                                {item.title}
                            </h3>
                            
                            <BodyText className="text-sm leading-relaxed text-neutral-600">
                                {item.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 3. What We Help Improve Block
 */
export function TRClinicsWhatWeHelpImproveBlock() {
    const { improvements } = trClinicsContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={improvements.title}
                    description={improvements.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {improvements.items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full border-neutral-100 hover:border-black transition-colors duration-300"
                        >
                            <div className="mb-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
                                İyileştirme Alanı {index + 1}
                            </div>
                            
                            <h3 className="text-xl font-bold text-neutral-900 mb-4">
                                {item.title}
                            </h3>
                            
                            <BodyText className="text-sm leading-relaxed text-neutral-600">
                                {item.description}
                            </BodyText>
                            
                            <div className="mt-8 pt-6 border-t border-neutral-100">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                                    Operasyonel Hedef: Verimlilik
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 4. Flagship Package Block
 */
export function TRClinicsFlagshipPackageBlock() {
    const { flagshipPackage } = trClinicsContent;

    const primaryCta = resolveCta(flagshipPackage.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(flagshipPackage.secondaryCta, '#iletisim');

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={flagshipPackage.title}
                    description={flagshipPackage.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="relative overflow-hidden border-neutral-200 shadow-xl shadow-neutral-100"
                    >
                        <div className="absolute top-0 right-0">
                            <div className="bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-bl-xl">
                                Amiral Paket
                            </div>
                        </div>

                        <div className="grid gap-12 md:grid-cols-2">
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">
                                    Paket Kapsamı
                                </h3>
                                <ul className="space-y-4">
                                    {flagshipPackage.scope.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-800">
                                            <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-neutral-100 flex items-center justify-center text-[10px] text-black border border-neutral-200">
                                                ✓
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-6">
                                    Kimler İçin Uygun?
                                </h3>
                                <ul className="space-y-3 mb-10">
                                    {flagshipPackage.suitableFor.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
                                            <span className="flex-shrink-0 mt-2 h-1 w-1 rounded-full bg-neutral-300" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto space-y-3">
                                    <a href={primaryCta.href} className="block">
                                        <PrimaryButton fullWidth className="!py-4 text-base">
                                            {primaryCta.label}
                                        </PrimaryButton>
                                    </a>
                                    <a href={secondaryCta.href} className="block">
                                        <SecondaryButton fullWidth className="!py-4 text-base">
                                            {secondaryCta.label}
                                        </SecondaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardBase>
                    
                    <p className="mt-8 text-center text-xs font-medium text-neutral-400">
                        * Bu paket, kliniğinize özel ihtiyaçlara göre modüler olarak genişletilebilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 5. Solution Modules Block
 */
export function TRClinicsSolutionModulesBlock() {
    const { solutionModules } = trClinicsContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={solutionModules.title}
                    description={solutionModules.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-6 md:grid-cols-2 lg:gap-8 lg:max-w-6xl lg:mx-auto">
                    {solutionModules.items.map((module, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col bg-white border-white shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                {module.title}
                            </h3>
                            
                            <BodyText className="text-sm text-neutral-500 mb-8 italic">
                                {module.description}
                            </BodyText>
                            
                            <div className="mt-auto pt-6 border-t border-neutral-100">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                    Modül Kapsamı
                                </h4>
                                <ul className="space-y-3">
                                    {module.points.map((point, pIndex) => (
                                        <li key={pIndex} className="flex items-start gap-3 text-sm font-medium text-neutral-700">
                                            <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black/20" aria-hidden="true" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 6. Setup Levels Block
 */
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
                        const isRecommended = index === 1;
                        
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

/**
 * 7. Maintenance Levels Block
 */
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
                        const isRecommended = index === 1;
                        
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

/**
 * 8. Included Scope Block
 */
export function TRClinicsIncludedScopeBlock() {
    const { whatsIncluded } = trClinicsContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={whatsIncluded.title}
                    description={whatsIncluded.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
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
                                Hizmete Dahil Olanlar
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {whatsIncluded.included.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-700">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Operasyonel Standart
                            </p>
                        </div>
                    </CardBase>

                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full border-neutral-100 bg-white"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-neutral-200 text-neutral-400">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                Hizmete Dahil Olmayanlar
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {whatsIncluded.notIncluded.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-500">
                                    <span className="flex-shrink-0 mt-1.5 h-1.25 w-1.25 rounded-full bg-neutral-200" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                                Kapsam Dışı / Ek Geliştirme
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-2xl mx-auto text-sm text-neutral-400 font-medium italic">
                        * Belirlenen sınırlar, projenizin zamanında ve sağlıklı bir şekilde yayına alınmasını sağlamak için standartlaştırılmıştır.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 9. Example Workflow Block
 */
export function TRClinicsExampleWorkflowBlock() {
    const { exampleWorkflows } = trClinicsContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={exampleWorkflows.title}
                    description={exampleWorkflows.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    {exampleWorkflows.items.map((workflow, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full bg-white border-white shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                    {workflow.title}
                                </h3>
                                <p className="text-sm font-medium text-neutral-500 italic">
                                    {workflow.description}
                                </p>
                            </div>

                            <div className="mt-auto space-y-4">
                                {workflow.steps.map((step, sIndex) => (
                                    <div key={sIndex} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-900 text-white text-[10px] font-bold">
                                            {sIndex + 1}
                                        </div>
                                        <BodyText className="text-sm font-semibold text-neutral-700 pt-0.5">
                                            {step}
                                        </BodyText>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-6 border-t border-neutral-100">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">
                                    İşleyiş Senaryosu {index + 1}
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 10. Pricing Logic Block
 */
export function TRClinicsPricingLogicBlock() {
    const { pricingLogic } = trClinicsContent;
    const resolvedCta = resolveCta(pricingLogic.cta, '/fiyatlandirma');

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={pricingLogic.title}
                    description={pricingLogic.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="max-w-4xl mx-auto">
                    <CardBase size="lg" className="bg-neutral-50/50 border-neutral-100 p-8 md:p-12">
                        <div className="grid gap-12 md:grid-cols-2">
                            <div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                                    Fiyatı Belirleyen Ana Unsurlar
                                </h3>
                                <BodyText className="text-neutral-600 mb-8">
                                    Size özel bir kapsam çıkarabilmemiz için operasyonunuzun hacmini ve ihtiyaç duyduğunuz otomasyon derinliğini analiz ediyoruz.
                                </BodyText>
                                
                                <div className="space-y-4">
                                    <a href={resolvedCta.href} className="block">
                                        <PrimaryButton fullWidth>
                                            {resolvedCta.label}
                                        </PrimaryButton>
                                    </a>
                                    <a href="#brief-form" className="block">
                                        <SecondaryButton fullWidth>
                                            Sürecimi Paylaş
                                        </SecondaryButton>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 md:p-8 border border-neutral-100 shadow-sm">
                                <ul className="space-y-5">
                                    {pricingLogic.factors.map((factor, index) => (
                                        <li key={index} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 mt-1 h-2 w-2 rounded-full bg-black/20" />
                                            <span className="text-sm font-semibold text-neutral-800">
                                                {factor}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-8 pt-6 border-t border-neutral-100">
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                                        Modüler ve Ölçeklenebilir Yapı
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
 * 11. Fit Check Block
 */
export function TRClinicsFitCheckBlock() {
    const { fitNotFit } = trClinicsContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={fitNotFit.title}
                    description={fitNotFit.description}
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
                                Sizin İçin Doğruyuz, Eğer...
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {fitNotFit.fit.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-700">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                                Verimli Ortaklık
                            </p>
                        </div>
                    </CardBase>

                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-neutral-200 text-neutral-400">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                Henüz Doğru Zaman Değilse...
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {fitNotFit.notFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-500">
                                    <span className="flex-shrink-0 mt-1.5 h-1.25 w-1.25 rounded-full bg-neutral-200" aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-200">
                                Beklenti Yönetimi
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-16 text-center">
                    <p className="max-w-xl mx-auto text-sm text-neutral-400 font-medium italic">
                        * Bu filtreleme, kliniğinizin vaktini ve yatırımını korumak, sadece yüksek verim alabileceğiniz senaryolarda el sıkışmak içindir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 12. Contact CTA Block
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

export function TRClinicsContactCtaBlock() {
    const { finalCta } = trClinicsContent;
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

            setSubmitSuccess("Briefiniz başarıyla gönderildi. Sizinle en kısa sürede iletişime geçeceğiz.");
            setValues(INITIAL_VALUES);
        } catch {
            setSubmitError("Bir şeyler ters gitti.");
        } finally {
            setIsSubmitting(false);
        }
    }

    const primaryCtaLabel = typeof finalCta.primaryCta === 'string' ? finalCta.primaryCta : finalCta.primaryCta.label;
    const primaryCtaHref = typeof finalCta.primaryCta === 'string' ? 'https://wa.me/' : finalCta.primaryCta.href;
    const submitLabel = typeof finalCta.secondaryCta === 'string' ? finalCta.secondaryCta : finalCta.secondaryCta.label;

    return (
        <div id="brief-form">
            <SectionWrapper className="bg-white">
                <ContentContainer className="py-16 md:py-24">
                    <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start max-w-6xl mx-auto">
                        <div className="flex flex-col">
                            <SectionHeader title={finalCta.title} description={finalCta.description} align="left" className="mb-10" />
                            <div className="space-y-6 mb-12">
                                {[
                                    "Klinik operasyonunuza göre özel analiz yapıyoruz.",
                                    "Herkese aynı şablonu değil, size uygun akışı öneriyoruz.",
                                    "Önce süreci anlıyor, sonra teknoloji katmanını kuruyoruz."
                                ].map((point, index) => (
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
                                <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer">
                                    <PrimaryButton className="bg-[#25D366] hover:bg-[#20ba59] border-none text-white !px-10">
                                        {primaryCtaLabel}
                                    </PrimaryButton>
                                </a>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-neutral-200 bg-neutral-50/50 p-6 shadow-sm sm:p-10">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <FormField label="Ad Soyad" error={fieldErrors.fullName} htmlFor="fullName">
                                    <TextInput ref={fullNameRef} id="fullName" value={values.fullName} onChange={(e) => updateField("fullName", e.target.value)} placeholder={trBriefPlaceholders.fullName} />
                                </FormField>
                                <FormField label="İş E-postası" error={fieldErrors.workEmail} htmlFor="workEmail">
                                    <TextInput ref={workEmailRef} id="workEmail" type="email" value={values.workEmail} onChange={(e) => updateField("workEmail", e.target.value)} placeholder={trBriefPlaceholders.workEmail} />
                                </FormField>
                                <FormField label="Klinik / Şirket Adı" error={fieldErrors.company} htmlFor="company">
                                    <TextInput ref={companyRef} id="company" value={values.company} onChange={(e) => updateField("company", e.target.value)} placeholder={trBriefPlaceholders.company} />
                                </FormField>
                                <FormField label="İhtiyaç Türü" error={fieldErrors.inquiryType} htmlFor="inquiryType">
                                    <SelectInput ref={inquiryTypeRef} id="inquiryType" value={values.inquiryType} onChange={(e) => updateField("inquiryType", e.target.value)}>
                                        <option value="">{trBriefPlaceholders.inquiryTypePlaceholder}</option>
                                        {trInquiryOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                                    </SelectInput>
                                </FormField>
                            </div>
                            <FormField label="Zorlandığınız süreçleri kısaca anlatın" error={fieldErrors.message} htmlFor="message">
                                <TextArea ref={messageRef} id="message" value={values.message} onChange={(e) => updateField("message", e.target.value)} placeholder={trBriefPlaceholders.message} rows={4} />
                            </FormField>
                            <CheckboxField ref={consentRef} id="consent" checked={values.consent} onChange={(e) => updateField("consent", e.target.checked)} label={trBriefPlaceholders.consentLabel} error={fieldErrors.consent} />
                            <div className="space-y-4">
                                <PrimaryButton type="submit" disabled={isSubmitting} fullWidth>{isSubmitting ? "Gönderiliyor..." : submitLabel}</PrimaryButton>
                                {finalCta.helperText && <BodyText className="text-xs text-neutral-500 text-center">{finalCta.helperText}</BodyText>}
                                {submitError && <p className="text-sm font-medium text-red-600 text-center">{submitError}</p>}
                                {submitSuccess && <p className="text-sm font-medium text-green-600 text-center">{submitSuccess}</p>}
                            </div>
                        </form>
                    </div>
                </ContentContainer>
            </SectionWrapper>
        </div>
    );
}
