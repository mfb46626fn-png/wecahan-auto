import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionEyebrow } from '../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../shared/typography/SectionTitle';
import { SectionDescription } from '../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';

type CtaConfig = string | { label: string; href: string };

export interface HeroBlockGlobalProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        helperText?: string;
    };
    className?: string;
}

export function HeroBlockGlobal({ content, className }: HeroBlockGlobalProps) {
    const {
        eyebrow,
        title,
        description,
        primaryCta,
        secondaryCta,
        helperText,
    } = content;

    const resolveCtaLabel = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="flex flex-col items-start lg:items-center text-left lg:text-center py-20 md:py-28 lg:py-36">
                {eyebrow && (
                    <SectionEyebrow className="mb-6">
                        {eyebrow}
                    </SectionEyebrow>
                )}
                
                {title && (
                    <SectionTitle size="lg" className="mb-6 max-w-4xl tracking-tight">
                        {title}
                    </SectionTitle>
                )}
                
                {description && (
                    <SectionDescription maxWidth="lg" className="mb-10 max-w-2xl text-neutral-600">
                        {description}
                    </SectionDescription>
                )}
                
                <div className="flex flex-col sm:flex-row items-start lg:items-center justify-start lg:justify-center gap-4 w-full sm:w-auto">
                    {primaryCta && (
                        <PrimaryButton className="w-full sm:w-auto min-w-[200px] !px-8 !py-4 shadow-sm">
                            {resolveCtaLabel(primaryCta)}
                        </PrimaryButton>
                    )}
                    
                    {secondaryCta && (
                        <SecondaryButton className="w-full sm:w-auto min-w-[200px] !px-8 !py-4">
                            {resolveCtaLabel(secondaryCta)}
                        </SecondaryButton>
                    )}
                </div>

                {helperText && (
                    <p className="mt-8 text-sm font-medium text-neutral-500">
                        {helperText}
                    </p>
                )}
            </ContentContainer>
        </SectionWrapper>
    );
}
