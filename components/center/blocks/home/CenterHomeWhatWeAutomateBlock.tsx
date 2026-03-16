import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { Check } from 'lucide-react';

interface ServiceCategory {
    title: string;
    description: string;
    examples: string[];
}

export interface CenterHomeWhatWeAutomateBlockProps {
    content: {
        title: string;
        description: string;
        categories: ServiceCategory[];
    };
    className?: string;
}

/**
 * CenterHomeWhatWeAutomateBlock - Showcases the primary operational areas WeCaHan Auto automates.
 * Designed for the Center site (auto.wecahan.com) with a clean, grid-based mapping of services.
 */
export function CenterHomeWhatWeAutomateBlock({ content, className }: CenterHomeWhatWeAutomateBlockProps) {
    const { title, description, categories } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-300 group bg-white/50 backdrop-blur-sm"
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-black transition-colors">
                                    {category.title}
                                </h3>
                                <BodyText className="text-slate-500 mb-8 leading-relaxed">
                                    {category.description}
                                </BodyText>
                                
                                <div className="mt-auto pt-6 border-t border-slate-50">
                                    <ul className="space-y-3">
                                        {category.examples.map((example, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                                                <Check className="h-3.5 w-3.5 text-slate-300 mt-0.5 shrink-0" />
                                                <span>{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
