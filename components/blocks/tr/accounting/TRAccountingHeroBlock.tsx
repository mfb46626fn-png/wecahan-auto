import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionEyebrow } from '../../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../../shared/typography/SectionTitle';
import { SectionDescription } from '../../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { CardBase } from '../../../shared/ui/CardBase';
import { trAccountingContent } from '../../../../content/tr/accounting';

type CtaConfig = string | { label: string; href: string };

const resolveCta = (cta: CtaConfig, defaultHref: string) => {
    if (typeof cta === 'string') {
        return { label: cta, href: defaultHref };
    }
    return cta;
};

export function TRAccountingHeroBlock() {
    const { hero, flagshipOfficePackage } = trAccountingContent;

    const primaryCta = resolveCta(hero.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(hero.secondaryCta, '/fiyatlandirma');

    return (
        <SectionWrapper className="overflow-hidden bg-neutral-50/70 border-b border-neutral-100">
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    {/* Left Content Area */}
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

                    {/* Right Side: Systemized Package Info */}
                    <div className="relative">
                        {/* Subtle decorative background */}
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

                        {/* Floating Status Badge - More "Record" look */}
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
