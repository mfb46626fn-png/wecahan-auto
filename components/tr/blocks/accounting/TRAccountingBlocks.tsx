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
import { trAccountingContent } from '../../../../content/tr/accounting';

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
export function TRAccountingHeroBlock() {
    const { hero, flagshipOfficePackage } = trAccountingContent;

    const primaryCta = resolveCta(hero.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(hero.secondaryCta, '/fiyatlandirma');

    return (
        <SectionWrapper className="overflow-hidden bg-neutral-50/70 border-b border-neutral-100">
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div className="flex flex-col items-start text-left">
                        {hero.eyebrow && (
                            <SectionEyebrow className="mb-4">
                                {hero.eyebrow}
                            </SectionEyebrow>
                        )}
                        
                        <SectionTitle size="lg" className="mb-6 max-w-2xl tracking-tight leading-[1.1]">
                            {hero.title}
                        </SectionTitle>
                        
                        <SectionDescription maxWidth="lg" className="mb-10 text-neutral-600 leading-relaxed italic border-l-2 border-neutral-200 pl-6">
                            {hero.description}
                        </SectionDescription>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                            <a href={primaryCta.href} className="w-full sm:w-auto">
                                <PrimaryButton fullWidth className="!px-10 !py-4 text-base font-bold shadow-lg shadow-black/5 hover:shadow-black/10 transition-all">
                                    {primaryCta.label}
                                </PrimaryButton>
                            </a>
                            
                            <a href={secondaryCta.href} className="w-full sm:w-auto">
                                <SecondaryButton fullWidth className="!px-10 !py-4 text-base font-bold bg-white">
                                    {secondaryCta.label}
                                </SecondaryButton>
                            </a>
                        </div>

                        {hero.helperText && (
                            <p className="mt-8 text-sm font-medium text-neutral-400 flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-neutral-300" aria-hidden="true" />
                                {hero.helperText}
                            </p>
                        )}
                    </div>

                    <div className="relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white rounded-full blur-[100px] -z-10" />
                        
                        <CardBase size="lg" className="relative shadow-xl shadow-neutral-200/40 border-neutral-100 bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 md:p-10">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6 flex items-center gap-2">
                                        <span className="w-4 h-[1px] bg-neutral-200" />
                                        Amiral Çözüm Paketi
                                    </h3>
                                    <div className="mb-6">
                                        <h4 className="text-xl font-bold text-neutral-900 mb-2">
                                            {flagshipOfficePackage.title}
                                        </h4>
                                        <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                                            {flagshipOfficePackage.description}
                                        </p>
                                    </div>
                                    <ul className="space-y-4">
                                        {flagshipOfficePackage.scope.slice(0, 4).map((item, index) => (
                                            <li key={index} className="flex items-start gap-3 text-sm font-semibold text-neutral-700 leading-tight">
                                                <div className="flex-shrink-0 mt-0.5 flex h-4 w-4 items-center justify-center rounded-sm border border-neutral-200 bg-neutral-50 text-[10px] text-neutral-400">
                                                    0{index + 1}
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="pt-8 border-t border-neutral-100/60">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 flex items-center gap-2">
                                        <span className="w-4 h-[1px] bg-neutral-200" />
                                        Odak Alanları
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Evrak Takibi', 'Düzenli Hatırlatma', 'Görev Görünürlüğü', 'Ofis Akışı'].map((tag) => (
                                            <span 
                                                key={tag} 
                                                className="px-4 py-2 rounded-lg bg-neutral-50 border border-neutral-100 text-[11px] font-bold text-neutral-500 tracking-tight"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardBase>

                        <div className="absolute -bottom-8 -right-4 hidden sm:block">
                            <div className="rounded-xl border border-neutral-100 bg-white p-5 shadow-2xl flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-neutral-900 flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                        <path d="M13 3L6 10L3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-0.5">Operasyon</p>
                                    <p className="text-sm font-bold text-neutral-900">Kuruluma Hazır Sistem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 2. Common Workflow Problems Block
 */
export function TRAccountingCommonWorkflowProblemsBlock() {
    const { commonWorkflowProblems } = trAccountingContent;

    return (
        <SectionWrapper className="bg-white border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={commonWorkflowProblems.title}
                    description={commonWorkflowProblems.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {commonWorkflowProblems.items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="group flex flex-col h-full bg-neutral-50/50 border-neutral-100/60 hover:border-neutral-200 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500"
                        >
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-900 text-white text-[10px] font-bold tracking-widest">
                                    P{String(index + 1).padStart(2, '0')}
                                </div>
                                <div className="h-[1px] flex-grow bg-neutral-200/60" />
                            </div>
                            
                            <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight leading-snug">
                                {item.title}
                            </h3>
                            
                            <BodyText className="text-sm leading-relaxed text-neutral-500 font-medium italic">
                                "{item.description}"
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
export function TRAccountingWhatWeHelpImproveBlock() {
    const { whatWeHelpImprove } = trAccountingContent;

    return (
        <SectionWrapper className="bg-neutral-50/30 border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={whatWeHelpImprove.title}
                    description={whatWeHelpImprove.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {whatWeHelpImprove.items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="group flex flex-col h-full bg-white border-neutral-100 hover:border-neutral-900 transition-all duration-500"
                        >
                            <div className="mb-6 flex flex-col gap-1">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                    Hedef Alan {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="h-1 w-8 bg-neutral-900 mt-2 transform origin-left group-hover:w-12 transition-all duration-500" />
                            </div>
                            
                            <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            
                            <BodyText className="text-sm leading-relaxed text-neutral-500 font-medium">
                                {item.description}
                            </BodyText>

                            <div className="mt-auto pt-8">
                                <span className="inline-flex items-center gap-2 text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Operasyonel Düzen
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
 * 4. Flagship Office Package Block
 */
export function TRAccountingFlagshipOfficePackageBlock() {
    const { flagshipOfficePackage } = trAccountingContent;

    const primaryCta = resolveCta(flagshipOfficePackage.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(flagshipOfficePackage.secondaryCta, '/muhasebe-ofisleri/#solution-modules');

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={flagshipOfficePackage.title}
                    description={flagshipOfficePackage.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="max-w-5xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="relative overflow-hidden border-neutral-100 shadow-2xl shadow-neutral-100 bg-neutral-50/30 rounded-[2.5rem]"
                    >
                        <div className="absolute top-0 right-0">
                            <div className="bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 rounded-bl-2xl">
                                Ana Çözüm Omurgası
                            </div>
                        </div>

                        <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] p-2 md:p-6 lg:p-10">
                            <div className="flex flex-col">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8 flex items-center gap-3">
                                    <span className="w-6 h-[1px] bg-neutral-200" />
                                    Paket Kapsamı
                                </h3>
                                <ul className="space-y-5">
                                    {flagshipOfficePackage.scope.map((item, index) => (
                                        <li key={index} className="flex items-start gap-4 text-sm font-semibold text-neutral-800 leading-snug">
                                            <span className="flex-shrink-0 mt-0.5 h-6 w-6 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-[10px] text-neutral-900 font-bold shadow-sm">
                                                0{index + 1}
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-col bg-white border border-neutral-100 rounded-[2rem] p-8 md:p-10 shadow-sm">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8 flex items-center gap-3">
                                    <span className="w-6 h-[1px] bg-neutral-200" />
                                    Kime Uygun?
                                </h3>
                                <ul className="space-y-4 mb-12">
                                    {flagshipOfficePackage.suitableFor.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-sm font-medium text-neutral-600 leading-relaxed">
                                            <div className="mt-2.5 h-1 w-1 rounded-full bg-neutral-900 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto space-y-4">
                                    <a href={primaryCta.href} className="block">
                                        <PrimaryButton fullWidth className="!py-5 text-base font-bold shadow-lg shadow-black/5">
                                            {primaryCta.label}
                                        </PrimaryButton>
                                    </a>
                                    <a href={secondaryCta.href} className="block text-center">
                                        <SecondaryButton fullWidth className="!py-5 text-base font-bold bg-neutral-50 border-neutral-100">
                                            {secondaryCta.label}
                                        </SecondaryButton>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardBase>
                    
                    <p className="mt-10 text-center text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                        * Ofis yapınıza ve mevcut araçlarınıza göre modüler olarak yapılandırılır.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 5. Solution Modules Block
 */
export function TRAccountingSolutionModulesBlock() {
    const { solutionModules } = trAccountingContent;

    return (
        <SectionWrapper className="bg-neutral-50/70 border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={solutionModules.title}
                    description={solutionModules.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 md:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    {solutionModules.items.map((module, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col bg-white border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/30 transition-all duration-500 rounded-[2rem]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-2 w-2 rounded-full bg-neutral-900" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                    Modül {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-neutral-900 mb-2 tracking-tight">
                                {module.title}
                            </h3>
                            
                            <BodyText className="text-sm text-neutral-500 mb-10 italic leading-relaxed">
                                {module.description}
                            </BodyText>
                            
                            <div className="mt-auto pt-8 border-t border-neutral-100/60">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300 mb-5">
                                    Modül Odakları
                                </h4>
                                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                                    {module.points.map((point, pIndex) => (
                                        <li key={pIndex} className="flex items-start gap-2.5 text-[13px] font-semibold text-neutral-700 leading-snug">
                                            <span className="flex-shrink-0 mt-1 h-3 w-3 rounded border border-neutral-200 bg-neutral-50 flex items-center justify-center text-[8px] text-neutral-400">
                                                •
                                            </span>
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
export function TRAccountingSetupLevelsBlock() {
    const { setupLevels } = trAccountingContent;

    return (
        <SectionWrapper className="bg-white border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={setupLevels.title}
                    description={setupLevels.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {setupLevels.items.map((level, index) => {
                        const isRecommended = index === 1; // Orta Seviye Kurulum
                        
                        return (
                            <CardBase 
                                key={index} 
                                size="lg" 
                                className={`group flex flex-col h-full transition-all duration-500 rounded-[2.5rem] p-8 md:p-10 ${
                                    isRecommended 
                                        ? 'border-neutral-900 bg-neutral-900 text-white shadow-2xl shadow-neutral-300' 
                                        : 'border-neutral-100 bg-neutral-50/30 hover:bg-white hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-200/40'
                                }`}
                            >
                                {isRecommended && (
                                    <div className="mb-8">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10">
                                            En Dengeli Başlangıç
                                        </span>
                                    </div>
                                )}

                                <div className="mb-10">
                                    <div className={`mb-6 flex items-center gap-3 ${isRecommended ? 'text-white/40' : 'text-neutral-400'}`}>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Seviye 0{index + 1}</span>
                                        <div className={`h-[1px] flex-grow ${isRecommended ? 'bg-white/10' : 'bg-neutral-100'}`} />
                                    </div>
                                    <h3 className={`text-2xl font-bold mb-4 tracking-tight ${isRecommended ? 'text-white' : 'text-neutral-900'}`}>
                                        {level.title}
                                    </h3>
                                    <p className={`text-sm font-semibold leading-relaxed ${isRecommended ? 'text-white/60' : 'text-neutral-500'}`}>
                                        {level.suitableFor}
                                    </p>
                                </div>

                                <div className={`mt-auto pt-10 border-t ${isRecommended ? 'border-white/10' : 'border-neutral-100'}`}>
                                    <h4 className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-6 ${isRecommended ? 'text-white/40' : 'text-neutral-300'}`}>
                                        Kurulum Kapsamı
                                    </h4>
                                    <ul className="space-y-4">
                                        {level.included.map((item, sIndex) => (
                                            <li key={sIndex} className="flex items-start gap-3 text-sm font-semibold leading-snug">
                                                <span className={`flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full ${isRecommended ? 'bg-white/40' : 'bg-neutral-200'}`} aria-hidden="true" />
                                                <span className={isRecommended ? 'text-white/80' : 'text-neutral-700'}>
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardBase>
                        );
                    })}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] italic">
                        * Tüm kurulumlar ofisinizin mevcut dijital olgunluğuna göre optimize edilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 7. Maintenance Levels Block
 */
export function TRAccountingMaintenanceLevelsBlock() {
    const { maintenanceLevels } = trAccountingContent;

    return (
        <SectionWrapper className="bg-neutral-50/50 border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={maintenanceLevels.title}
                    description={maintenanceLevels.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-3">
                    {maintenanceLevels.items.map((level, index) => {
                        const isRecommended = index === 1; // Standart Bakım
                        
                        return (
                            <CardBase 
                                key={index} 
                                size="lg" 
                                className={`flex flex-col h-full bg-white transition-all duration-500 rounded-[2.5rem] p-8 md:p-10 ${
                                    isRecommended 
                                        ? 'border-neutral-900 shadow-2xl shadow-neutral-200 ring-1 ring-neutral-900' 
                                        : 'border-neutral-100 shadow-sm hover:shadow-md'
                                }`}
                            >
                                {isRecommended && (
                                    <div className="mb-8">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                                            En Yaygın Tercih
                                        </span>
                                    </div>
                                )}

                                <div className="mb-10">
                                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight">
                                        {level.title}
                                    </h3>
                                    <p className="text-sm font-semibold text-neutral-500 leading-relaxed mb-6">
                                        {level.description}
                                    </p>
                                    
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-100">
                                        <span className="h-1 w-1 rounded-full bg-neutral-400" />
                                        <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">{level.bestFor}</span>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300 mb-4">
                                            Dahil Hizmetler
                                        </h4>
                                        <ul className="space-y-3">
                                            {level.included.map((item, sIndex) => (
                                                <li key={sIndex} className="flex items-start gap-3 text-sm font-semibold text-neutral-700 leading-snug">
                                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden="true" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {level.notIncluded.length > 0 && (
                                        <div className="pt-6 border-t border-dashed border-neutral-100">
                                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-300 mb-4">
                                                Kapsam Dışı
                                            </h4>
                                            <ul className="space-y-3 opacity-60">
                                                {level.notIncluded.map((item, nIndex) => (
                                                    <li key={nIndex} className="flex items-start gap-3 text-sm font-medium text-neutral-400 leading-snug">
                                                        <span className="flex-shrink-0 mt-2 h-[1px] w-2 bg-neutral-300" aria-hidden="true" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </CardBase>
                        );
                    })}
                </div>

                <div className="mt-20 max-w-2xl mx-auto">
                    <CardBase size="sm" className="bg-white/80 backdrop-blur-sm border-neutral-100 p-6 rounded-2xl flex items-center gap-6">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M10 14H10.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <p className="text-xs font-bold text-neutral-500 leading-relaxed italic">
                            <span className="not-italic text-neutral-900">Operasyonel Not:</span> Bakım modelleri, mevcut sistemin stabilitesini korumaya odaklıdır; sıfırdan proje veya modül geliştirmeleri bakım kapsamı dışında, ayrı proje olarak değerlendirilir.
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

/**
 * 9. Not Included Block
 */
export function TRAccountingNotIncludedBlock() {
    const { notIncluded } = trAccountingContent;

    return (
        <SectionWrapper className="bg-neutral-50/50 border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={notIncluded.title}
                    description={notIncluded.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <CardBase 
                    size="lg" 
                    className="max-w-4xl mx-auto border-neutral-200 bg-white shadow-sm rounded-[2.5rem] overflow-hidden"
                >
                    <div className="p-8 md:p-12 lg:p-16">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 text-neutral-400">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                                    Kapsam Sınır Yönetimi
                                </h3>
                                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mt-1.5">
                                    Sorumluluk ve Uzmanlık Alanlarımızın Çerçevesi
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
                            {notIncluded.notIncluded.map((item, index) => (
                                <div key={index} className="flex items-start gap-4 p-5 rounded-2xl border border-transparent hover:border-neutral-100 hover:bg-neutral-50/50 transition-all group">
                                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full border border-neutral-200 flex items-center justify-center bg-white group-hover:border-neutral-300 transition-all">
                                        <div className="w-1.5 h-[1px] bg-neutral-300 group-hover:bg-neutral-500" />
                                    </div>
                                    <BodyText className="text-sm font-semibold text-neutral-500 leading-relaxed">
                                        {item}
                                    </BodyText>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-12 border-t border-neutral-100">
                            <div className="bg-neutral-50/50 p-6 md:p-8 rounded-3xl border border-neutral-100 border-dashed text-center">
                                <p className="text-xs text-neutral-400 font-bold italic leading-relaxed uppercase tracking-wider">
                                    * Belirlenen sınırlar, hizmet kalitemizi ve odak noktamızı korumak için esnetilmemektedir. Büyük ölçekli ve farklı uzmanlık gerektiren talepleriniz için çözüm ortaklarımıza yönlendirme yapabiliriz.
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
 * 10. Example Workflow Block
 */
export function TRAccountingExampleWorkflowBlock() {
    const { exampleWorkflow } = trAccountingContent;

    return (
        <SectionWrapper className="bg-white border-b border-neutral-100">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={exampleWorkflow.title}
                    description={exampleWorkflow.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-12 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    {exampleWorkflow.items.map((workflow, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="group flex flex-col h-full bg-white border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/40 transition-all duration-500 rounded-[2.5rem] p-8 md:p-12"
                        >
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-2 w-2 rounded-full bg-neutral-900" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                        İşleyiş Senaryosu 0{index + 1}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight">
                                    {workflow.title}
                                </h3>
                                <p className="text-sm font-semibold text-neutral-500 italic leading-relaxed">
                                    {workflow.description}
                                </p>
                            </div>

                            <div className="relative space-y-8 pl-8">
                                <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-neutral-100" />
                                
                                {workflow.steps.map((step, sIndex) => (
                                    <div key={sIndex} className="relative flex items-start gap-4">
                                        <div className="absolute -left-[28px] top-0.5 flex items-center justify-center w-[22px] h-[22px] rounded-full bg-white border border-neutral-200 text-neutral-400 text-[10px] font-bold z-10 group-hover:border-neutral-900 group-hover:text-neutral-900 transition-colors duration-300">
                                            {sIndex + 1}
                                        </div>
                                        
                                        <BodyText className="text-[14px] font-semibold text-neutral-700 pt-0.5 leading-snug">
                                            {step}
                                        </BodyText>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-10 border-t border-neutral-100/60 flex items-center justify-between">
                                <div className="flex gap-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`h-1 w-1 rounded-full ${index === i - 1 ? 'bg-neutral-900' : 'bg-neutral-200'}`} />
                                    ))}
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300">
                                    Otomasyon Akış Mantığı
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="max-w-xl mx-auto text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] italic leading-relaxed">
                        * Bu akışlar ofisinizin mevcut alışkanlıklarına ve müşteri grubuna göre özel olarak konfigüre edilir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 11. Pricing Logic Block
 */
export function TRAccountingPricingLogicBlock() {
    const { pricingLogic } = trAccountingContent;

    const resolveCtaLabel = (cta: typeof pricingLogic.primaryCta) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={pricingLogic.title}
                    description={pricingLogic.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl lg:mx-auto mb-16">
                    {pricingLogic.factors.map((factor, index) => (
                        <CardBase 
                            key={index}
                            size="md"
                            className="bg-neutral-50/50 border-neutral-100 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-500 rounded-[2rem] flex flex-col group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white border border-neutral-100 text-neutral-400 text-[10px] font-bold group-hover:border-neutral-900 group-hover:text-neutral-900 transition-colors">
                                    0{index + 1}
                                </span>
                                <div className="h-[1px] flex-grow bg-neutral-100" />
                            </div>
                            <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                                {factor}
                            </h4>
                        </CardBase>
                    ))}
                </div>

                <CardBase 
                    size="lg" 
                    className="max-w-4xl mx-auto bg-neutral-900 border-neutral-800 p-8 md:p-14 text-center rounded-[3rem] shadow-2xl shadow-neutral-200"
                >
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                            Ofisiniz İçin En Verimli Modeli Birlikte Kuralım
                        </h3>
                        <BodyText className="text-neutral-400 max-w-xl mx-auto leading-relaxed">
                            Fiyatlandırma modelimiz bir kara kutu değildir. Önce mevcut evrak ve müşteri takip hacminizi analiz ederiz, ardından size en uygun basamakla kurulumu gerçekleştiririz.
                        </BodyText>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/fiyatlandirma" className="w-full sm:w-auto">
                            <PrimaryButton className="w-full sm:w-auto !bg-white !text-black border-white hover:!bg-neutral-50">
                                {resolveCtaLabel(pricingLogic.primaryCta)}
                            </PrimaryButton>
                        </a>
                        <a href="#fitness-check" className="w-full sm:w-auto">
                            <SecondaryButton className="w-full sm:w-auto !text-white !border-white/20 hover:!bg-white/10">
                                {resolveCtaLabel(pricingLogic.secondaryCta)}
                            </SecondaryButton>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-neutral-700" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                            Şeffaf, Modüler ve Ölçeklenebilir Yapı
                        </p>
                    </div>
                </CardBase>

                <div className="mt-20 text-center">
                    <p className="max-w-2xl mx-auto text-[11px] font-bold text-neutral-400 uppercase tracking-[0.15em] italic leading-relaxed">
                        * Tüm otomasyon yatırımlarımız; kurulum (bir defalık), bakım (aylık) ve ek geliştirme (ihtiyaca bağlı) kalemlerinden oluşur.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 12. Fit Check Block
 */
export function TRAccountingFitCheckBlock() {
    const { fitCheck } = trAccountingContent;

    return (
        <SectionWrapper className="bg-neutral-50/30" id="fitness-check">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={fitCheck.title}
                    description={fitCheck.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black text-white shadow-lg shadow-black/10">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    Doğru Adrestesiniz, Eğer...
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                                    Verimli Operasyon
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-5 flex-grow">
                            {fitCheck.goodFit.map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-neutral-800 leading-relaxed italic">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="mt-12 pt-8 border-t border-neutral-50">
                            <p className="text-[11px] font-medium text-neutral-400 leading-snug">
                                Bu yapıdaki ofislerde otomasyon sistemlerimiz en yüksek ROI (yatırım getirisi) değerini üretir.
                            </p>
                        </div>
                    </CardBase>

                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-neutral-50/50 border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12 group"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-10 h-10 rounded-2xl border-2 border-neutral-200 text-neutral-300 group-hover:border-neutral-900 group-hover:text-neutral-900 transition-colors duration-500">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    Arayışınız Farklıysa...
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-1">
                                    Beklenti Yönetimi
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-5 flex-grow">
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
                                Biz bir yazılım evi değiliz; mevcut operasyonunuzu düzenleyen ve otonom hale getiren bir çözüm ortağıyız.
                            </p>
                        </div>
                    </CardBase>
                </div>

                <div className="mt-20 text-center">
                    <p className="max-w-xl mx-auto text-[11px] font-bold text-neutral-400 uppercase tracking-[0.2em] italic leading-relaxed">
                        * Doğru eşleşme, başarılı bir dijital dönüşümün ilk şartıdır. Ofisinizin vaktini ve yatırımını korumayı önceliklendiriyoruz.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

/**
 * 12. Contact CTA Block
 */
export function TRAccountingContactCtaBlock() {
    const { contactCta } = trAccountingContent;

    const resolveCtaLabel = (cta: typeof contactCta.primaryCta) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const resolveHref = (cta: typeof contactCta.primaryCta, fallback: string) => {
        return typeof cta === 'string' ? fallback : cta.href;
    };

    return (
        <SectionWrapper className="bg-white border-t border-neutral-100">
            <ContentContainer className="py-24 md:py-32">
                <div className="max-w-4xl mx-auto">
                    <CardBase 
                        size="lg" 
                        className="bg-neutral-50/50 border-neutral-100 p-8 md:p-16 text-center rounded-[3rem] overflow-hidden relative"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-black/[0.02] rounded-full blur-3xl -translate-y-1/2" />
                        
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
                                    <PrimaryButton className="w-full sm:w-auto !px-12 !py-4 shadow-xl shadow-black/10">
                                        {resolveCtaLabel(contactCta.primaryCta)}
                                    </PrimaryButton>
                                </a>
                                <a 
                                    href={resolveHref(contactCta.secondaryCta, 'https://wa.me/')} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <SecondaryButton className="w-full sm:w-auto !px-12 !py-4 bg-white">
                                        {resolveCtaLabel(contactCta.secondaryCta)}
                                    </SecondaryButton>
                                </a>
                            </div>

                            {contactCta.helperText && (
                                <BodyText className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                                    {contactCta.helperText}
                                </BodyText>
                            )}
                        </div>

                        <div className="mt-16 pt-8 border-t border-neutral-100/50">
                            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-900">
                                    Analyze
                                </span>
                                <div className="w-1 h-1 rounded-full bg-neutral-300" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-900">
                                    Automate
                                </span>
                                <div className="w-1 h-1 rounded-full bg-neutral-300" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-900">
                                    Maintain
                                </span>
                            </div>
                        </div>
                    </CardBase>
                </div>
                
                <div className="mt-16 text-center">
                    <p className="max-w-2xl mx-auto text-[10px] font-bold text-neutral-300 uppercase tracking-[0.2em] leading-loose">
                        Verileriniz gizlilik prensiplerimiz çerçevesinde korunur. <br />
                        İlk görüşme için teknik altyapı hazırlamanıza gerek yoktur.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
