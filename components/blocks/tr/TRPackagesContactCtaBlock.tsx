import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionTitle } from '../../shared/typography/SectionTitle';
import { SectionDescription } from '../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trPackagesContent } from '../../../content/tr/packages';

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
                    {/* Decorative Background Elements */}
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
