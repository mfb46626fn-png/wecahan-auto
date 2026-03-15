import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionTitle } from '../../shared/typography/SectionTitle';
import { SectionDescription } from '../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { CardBase } from '../../shared/ui/CardBase';

type CtaConfig = string | { label: string; href: string };

export interface GlobalFinalCtaBlockProps {
    content: {
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        helperText?: string;
    };
    className?: string;
}

export function GlobalFinalCtaBlock({ content, className }: GlobalFinalCtaBlockProps) {
    const { title, description, primaryCta, secondaryCta, helperText } = content;

    const resolveCtaLabel = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-20">
                <CardBase className="flex flex-col items-center text-center p-8 md:p-12 lg:p-16 bg-neutral-50 border border-neutral-200 shadow-sm transition-shadow">
                    <SectionTitle
                        size="lg"
                        className="mb-4 text-neutral-900 max-w-3xl tracking-tight"
                    >
                        {title}
                    </SectionTitle>

                    <SectionDescription
                        maxWidth="lg"
                        className="mb-8 text-neutral-600 max-w-2xl leading-relaxed"
                    >
                        {description}
                    </SectionDescription>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <PrimaryButton className="w-full sm:w-auto min-w-[200px]">
                            {resolveCtaLabel(primaryCta)}
                        </PrimaryButton>

                        {secondaryCta && (
                            <SecondaryButton className="w-full sm:w-auto min-w-[200px]">
                                {resolveCtaLabel(secondaryCta)}
                            </SecondaryButton>
                        )}
                    </div>

                    {helperText && (
                        <p className="mt-8 text-sm font-medium text-neutral-500">
                            {helperText}
                        </p>
                    )}
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
