import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { trContactContent } from '../../../../content/tr/contact';

export function TRContactFitReminderBlock() {
    const { fitReminder } = trContactContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={fitReminder.title}
                    description={fitReminder.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 lg:grid-cols-2 lg:max-w-6xl lg:mx-auto">
                    {/* Good Fit Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-neutral-50/30 border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:border-neutral-900 group"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-900 text-white shadow-xl shadow-black/10 group-hover:scale-110 transition-transform">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    {fitReminder.goodFitTitle}
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mt-1">
                                    VERİMLİ EŞLEŞME
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-5 flex-grow">
                            {fitReminder.goodFitPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden="true" />
                                    <span className="text-sm font-semibold text-neutral-700 leading-relaxed">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CardBase>

                    {/* Bad Fit Section */}
                    <CardBase 
                        size="lg" 
                        className="flex flex-col h-full bg-white border-neutral-100 shadow-sm rounded-[2.5rem] p-8 md:p-12 hover:bg-neutral-50/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-10 opacity-60">
                            <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-neutral-200 text-neutral-300">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                                    {fitReminder.badFitTitle}
                                </h3>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mt-1">
                                    BEKLENTİ UYUMU
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-5 flex-grow">
                            {fitReminder.badFitPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-2.5 h-1 w-1 rounded-full bg-neutral-300" aria-hidden="true" />
                                    <span className="text-sm font-medium text-neutral-500 leading-relaxed">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CardBase>
                </div>

                <div className="mt-20 text-center">
                    <p className="max-w-xl mx-auto text-[10px] font-bold text-neutral-300 uppercase tracking-[0.25em] leading-relaxed">
                        Niyetimiz, kısıtlı vaktinizi en doğru odakla değerlendirmektir.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
