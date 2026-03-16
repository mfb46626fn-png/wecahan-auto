import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { Briefcase, AlertCircle, Zap, CheckCircle2 } from 'lucide-react';

interface UseCaseCard {
    context: string;
    problem: string;
    logic: string;
    expectedClarity: string;
}

export interface CenterHomeSelectedUseCaseExamplesBlockProps {
    content: {
        title: string;
        description: string;
        useCases: UseCaseCard[];
    };
    className?: string;
}

/**
 * CenterHomeSelectedUseCaseExamplesBlock - Contextual examples of operational automation.
 * Helps visitors relate to common business scenarios (Clinics, Recurring Services, etc.)
 */
export function CenterHomeSelectedUseCaseExamplesBlock({ content, className }: CenterHomeSelectedUseCaseExamplesBlockProps) {
    const { title, description, useCases } = content;

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

                <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
                    {useCases.map((useCase, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full border-slate-100 bg-slate-50/30 hover:bg-white hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 rounded-[2.5rem] p-8 md:p-10 group"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2.5 bg-slate-900 rounded-xl text-white shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform">
                                    <Briefcase size={18} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                                    {useCase.context}
                                </h3>
                            </div>

                            <div className="space-y-6">
                                <div className="relative pl-6 border-l-2 border-slate-100 group-hover:border-slate-200 transition-colors">
                                    <div className="absolute -left-[9px] top-0 p-1 bg-white rounded-full">
                                        <AlertCircle size={14} className="text-slate-300" />
                                    </div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Contextual Problem</h4>
                                    <p className="text-[14px] font-bold text-slate-500 leading-relaxed italic">
                                        "{useCase.problem}"
                                    </p>
                                </div>

                                <div className="relative pl-6 border-l-2 border-slate-100 group-hover:border-slate-200 transition-colors">
                                    <div className="absolute -left-[9px] top-0 p-1 bg-white rounded-full">
                                        <Zap size={14} className="text-slate-300" />
                                    </div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Applied Logic</h4>
                                    <BodyText className="text-[14px] font-black text-slate-700 leading-snug">
                                        {useCase.logic}
                                    </BodyText>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-100/50">
                                    <div className="flex items-center gap-2 mb-3">
                                        <CheckCircle2 size={16} className="text-slate-900" />
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900">Expected Outcome</h4>
                                    </div>
                                    <p className="text-[13px] font-bold text-slate-500 leading-relaxed">
                                        {useCase.expectedClarity}
                                    </p>
                                </div>
                            </div>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border border-slate-100">
                        <div className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-pulse" />
                        <p className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-400">
                            Custom layouts available for unique operational workflows
                        </p>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
