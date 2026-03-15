import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionTitle } from '../../shared/typography/SectionTitle';
import { SectionDescription } from '../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { CardBase } from '../../shared/ui/CardBase';

type CtaConfig = string | { label: string; href: string };

export interface CenterFinalCtaBlockProps {
    content: {
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        helperText?: string;
    };
    className?: string;
}

export function CenterFinalCtaBlock({ content, className }: CenterFinalCtaBlockProps) {
    const { title, description, primaryCta, secondaryCta, helperText } = content;

    const resolveCtaLabel = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-12 md:py-20">
                <CardBase className="flex flex-col items-center text-center p-8 md:p-12 bg-gray-50 border-gray-100 shadow-sm">
                    <SectionTitle
                        size="lg"
                        className="mb-4 text-gray-900 max-w-2xl"
                    >
                        {title}
                    </SectionTitle>

                    <SectionDescription
                        maxWidth="lg"
                        className="mb-8 text-gray-600 max-w-xl"
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
                        <p className="mt-6 text-sm text-gray-400">
                            {helperText}
                        </p>
                    )}
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
