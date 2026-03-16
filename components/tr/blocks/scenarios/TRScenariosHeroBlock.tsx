import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { trScenariosContent } from '../../../../content/tr/scenarios';

export function TRScenariosHeroBlock() {
    const { hero } = trScenariosContent;

    const resolveCta = (cta: typeof hero.primaryCta) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const resolveHref = (cta: typeof hero.primaryCta, fallback: string) => {
        return typeof cta === 'string' ? fallback : cta.href;
    };

    return (
        <SectionWrapper className="bg-white border-b border-neutral-100 overflow-hidden">
            <ContentContainer className="py-20 md:py-32 lg:py-40">
                <div className="max-w-4xl mx-auto text-center relative">
                    {/* Subtle decorative background blur */}
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
