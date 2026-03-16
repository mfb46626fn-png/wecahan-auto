import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionEyebrow } from '../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../shared/typography/SectionTitle';
import { SectionDescription } from '../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { CardBase } from '../../shared/ui/CardBase';
import { trPackagesContent } from '../../../content/tr/packages';

type CtaConfig = string | { label: string; href: string };

const resolveCta = (cta: CtaConfig, defaultHref: string) => {
    if (typeof cta === 'string') {
        return { label: cta, href: defaultHref };
    }
    return cta;
};

export function TRPackagesHeroBlock() {
    const { hero, serviceModelOverview } = trPackagesContent;

    const primaryCta = resolveCta(hero.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(hero.secondaryCta, '/fiyatlandirma');

    return (
        <SectionWrapper className="overflow-hidden bg-white">
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    {/* Left: Branding & Value Proposition */}
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

                        {/* Social Proof / Trust Line */}
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

                    {/* Right: Service Model Strip/Visual */}
                    <div className="relative">
                        {/* Decorative background element */}
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

                            {/* Trust Indicator */}
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
