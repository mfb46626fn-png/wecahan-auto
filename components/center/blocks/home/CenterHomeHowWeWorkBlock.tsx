import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';

interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

export interface CenterHomeHowWeWorkBlockProps {
    content: {
        title: string;
        description: string;
        steps: ProcessStep[];
    };
    className?: string;
}

/**
 * CenterHomeHowWeWorkBlock - Illustrates the systematic 4-step approach of WeCaHan Auto.
 * Analysis -> Setup -> Maintenance -> Expansion.
 * Designed for the Center site (auto.wecahan.com) brand vitrine.
 */
export function CenterHomeHowWeWorkBlock({ content, className }: CenterHomeHowWeWorkBlockProps) {
    const { title, description, steps } = content;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32 bg-slate-50/40 rounded-[3rem]">
                <SectionHeader
                    title={title}
                    description={description}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-8 md:gap-4 lg:grid-cols-4 md:grid-cols-2 relative">
                    {/* Subtle Connecting Line for Desktop Flow (Optional/Static) */}
                    <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-px bg-slate-200 -z-10" />

                    {steps.map((item, index) => (
                        <div key={index} className="relative group">
                            <CardBase 
                                size="lg" 
                                className="flex flex-col h-full bg-white border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 rounded-[2.5rem] p-8"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-black text-white shadow-lg shadow-black/10 transition-transform group-hover:scale-110">
                                    {item.step}
                                </div>
                                
                                <h3 className="mb-4 text-xl font-bold text-slate-900 tracking-tight">
                                    {item.title}
                                </h3>
                                
                                <BodyText className="text-slate-500 leading-relaxed font-medium">
                                    {item.description}
                                </BodyText>
                                
                                {/* Status Indicator (Subtle branding) */}
                                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2">
                                    <div className="h-1 w-1 rounded-full bg-slate-300" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">
                                        Phase {item.step}
                                    </span>
                                </div>
                            </CardBase>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
