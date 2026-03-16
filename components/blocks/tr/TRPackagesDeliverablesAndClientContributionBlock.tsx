import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trPackagesContent } from '../../../content/tr/packages';

export function TRPackagesDeliverablesAndClientContributionBlock() {
    const { deliverablesAndClientContribution } = trPackagesContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title="Teslimatlar ve Katkı Süreci"
                    description="Şeffaf bir iş birliği için neleri teslim edeceğimizi ve hangi noktalarda sizin desteğinize ihtiyaç duyacağımızı netleştiriyoruz."
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-5xl lg:mx-auto">
                    {/* Deliverables Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white">
                                <span className="text-sm font-bold">✓</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {deliverablesAndClientContribution.deliverablesTitle}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {deliverablesAndClientContribution.deliverables.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                                    <BodyText className="text-sm font-semibold text-neutral-800">
                                        {item}
                                    </BodyText>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Bizim Sorumluluğumuz
                            </p>
                        </div>
                    </CardBase>

                    {/* Client Contribution Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-neutral-200 text-neutral-500">
                                <span className="text-sm font-bold">!</span>
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900">
                                {deliverablesAndClientContribution.contributionTitle}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {deliverablesAndClientContribution.contribution.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-300" aria-hidden="true" />
                                    <BodyText className="text-sm font-medium text-neutral-600">
                                        {item}
                                    </BodyText>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-8 border-t border-neutral-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                Müşteri Katkısı
                            </p>
                        </div>
                    </CardBase>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
