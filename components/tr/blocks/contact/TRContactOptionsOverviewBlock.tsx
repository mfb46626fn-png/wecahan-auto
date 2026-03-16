import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trContactContent } from '../../../../content/tr/contact';

export function TRContactOptionsOverviewBlock() {
    const { contactOptionsOverview } = trContactContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={contactOptionsOverview.title}
                    description={contactOptionsOverview.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16"
                />

                <div className="grid gap-6 md:grid-cols-3 max-w-7xl mx-auto">
                    {contactOptionsOverview.options.map((option, index) => (
                        <CardBase
                            key={option.id}
                            size="lg"
                            className={`group relative h-full flex flex-col p-8 md:p-10 transition-all duration-500 rounded-[2.5rem] border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-black/5 hover:border-neutral-900 overflow-hidden ${
                                index === 0 ? 'bg-white ring-1 ring-neutral-200/50' : 'bg-white/60'
                            }`}
                        >
                            {/* Visual background accents */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-900/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-neutral-900/10 transition-colors" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-8">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 shadow-inner ${
                                        index === 0 ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-400'
                                    }`}>
                                        {option.id === 'form' && (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        )}
                                        {option.id === 'whatsapp' && (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                            </svg>
                                        )}
                                        {option.id === 'email' && (
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">
                                        {option.title}
                                    </h3>
                                    <BodyText className="text-neutral-500 font-medium leading-relaxed">
                                        {option.description}
                                    </BodyText>
                                </div>

                                <div className="mt-auto">
                                    <div className="mb-6 pb-6 border-b border-neutral-100">
                                        <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">
                                            EN UYGUN KULLANIM:
                                        </p>
                                        <p className="text-xs font-bold text-neutral-600">
                                            {option.bestFor}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between group/cta">
                                        <span className={`text-sm font-bold tracking-tight transition-colors ${
                                            index === 0 ? 'text-neutral-900 underline underline-offset-8 decoration-neutral-200 group-hover:decoration-neutral-900' : 'text-neutral-500 group-hover:text-neutral-900'
                                        }`}>
                                            {typeof option.cta === 'string' ? option.cta : option.cta.label}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                            index === 0 ? 'bg-neutral-900 text-white translate-x-0' : 'bg-neutral-100 text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white'
                                        }`}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Anchor tag to wrap the whole card for better UX */}
                            <a 
                                href={typeof option.cta === 'string' ? (option.id === 'form' ? '#form' : '#') : option.cta.href}
                                className="absolute inset-0 z-20"
                                aria-label={typeof option.cta === 'string' ? option.cta : option.cta.label}
                            />
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
