import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { trPricingContent } from '../../../content/tr/pricing';

export function TRPricingFaqBlock() {
    const { faq } = trPricingContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={faq.title}
                    description="Fiyatlandırma, kapsam ve süreçler hakkında en çok merak edilen soruları şeffaf bir şekilde cevaplıyoruz."
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="max-w-3xl mx-auto space-y-4">
                    {faq.questions.map((item, index) => (
                        <details 
                            key={index} 
                            className="group rounded-2xl border border-neutral-100 bg-neutral-50/30 p-6 transition-all duration-300 hover:border-neutral-200 open:bg-white open:border-neutral-200 open:shadow-xl open:shadow-neutral-100"
                        >
                            <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-lg font-bold text-neutral-900 focus:outline-none">
                                <span>{item.question}</span>
                                <span className="flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-neutral-400">
                                    <svg 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 20 20" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path 
                                            d="M5 7.5L10 12.5L15 7.5" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </summary>
                            <div className="mt-4 pt-4 border-t border-neutral-100">
                                <p className="text-sm font-medium text-neutral-500 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </details>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-neutral-400 font-medium italic">
                        * Sorunuz burada yoksa bizimle her zaman iletişime geçebilirsiniz.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}

// Add CSS to hide the default details marker across browsers
// Note: This is usually handled globally, but including here for completeness in a single-file rule
// summary::-webkit-details-marker { display: none; }
