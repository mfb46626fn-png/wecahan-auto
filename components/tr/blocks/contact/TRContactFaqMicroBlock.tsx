import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { trContactContent } from '../../../../content/tr/contact';

export function TRContactFaqMicroBlock() {
    const { faqMicro } = trContactContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-24 md:py-32">
                <SectionHeader
                    title={faqMicro.title}
                    description={faqMicro.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
                    {faqMicro.items.map((item, index) => (
                        <CardBase 
                            key={index}
                            size="lg" 
                            className="bg-white border-neutral-100 p-8 md:p-10 rounded-[2rem] hover:shadow-xl hover:shadow-black/5 transition-all duration-500 border-l-4 border-l-neutral-900 shadow-sm flex flex-col h-full"
                        >
                            <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight leading-snug">
                                {item.question}
                            </h3>
                            <BodyText size="sm" className="text-neutral-500 font-medium leading-relaxed mt-auto">
                                {item.answer}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="inline-flex items-center gap-2 text-[10px] font-bold text-neutral-400 uppercase tracking-widest bg-white px-6 py-2 rounded-full border border-neutral-100 shadow-sm">
                        <svg className="w-3 h-3 text-neutral-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                        Başka bir teknik sorunuz mu var? WhatsApp üzerinden hızlıca sorabilirsiniz.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
