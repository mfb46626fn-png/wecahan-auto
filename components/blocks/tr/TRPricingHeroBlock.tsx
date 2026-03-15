import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionEyebrow } from '../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../shared/typography/SectionTitle';
import { SectionDescription } from '../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { CardBase } from '../../shared/ui/CardBase';
import { trPricingContent } from '../../../content/tr/pricing';

type CtaConfig = string | { label: string; href: string };

const resolveCta = (cta: CtaConfig, defaultHref: string) => {
    if (typeof cta === 'string') {
        return { label: cta, href: defaultHref };
    }
    return cta;
};

export function TRPricingHeroBlock() {
    const { hero, pricingPhilosophy } = trPricingContent;

    const primaryCta = resolveCta(hero.primaryCta, '#brief-form');
    const secondaryCta = resolveCta(hero.secondaryCta, '#setup-packages');

    return (
        <SectionWrapper className="overflow-hidden bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24 lg:py-32">
                <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    {/* Left Content Area */}
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

                    {/* Right Info Box Area: Pricing Philosophy */}
                    <div className="relative">
                        {/* Decorative background element */}
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

                        {/* Small floating badge */}
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
