import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { Activity, ArrowDown } from 'lucide-react';

interface WorkflowScenario {
    title: string;
    problem: string;
    logic: string;
    flow: string[];
}

export interface CenterHomeExampleWorkflowScenariosBlockProps {
    content: {
        title: string;
        description: string;
        scenarios: WorkflowScenario[];
    };
    className?: string;
}

/**
 * CenterHomeExampleWorkflowScenariosBlock - Showcases practical automation logic.
 * Designed for auto.wecahan.com to demonstrate how manual problems are solved by logic.
 */
export function CenterHomeExampleWorkflowScenariosBlock({ content, className }: CenterHomeExampleWorkflowScenariosBlockProps) {
    const { title, description, scenarios } = content;

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

                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    {scenarios.map((scenario, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="group flex flex-col h-full bg-white border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-500 rounded-[3rem] p-8 md:p-12 overflow-hidden relative"
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500">
                                <Activity size={160} strokeWidth={1} />
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                                        Scenario 0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                                    {scenario.title}
                                </h3>

                                <div className="space-y-6 mb-12">
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Problem</h4>
                                        <p className="text-[13px] font-bold text-slate-500 italic leading-relaxed">
                                            "{scenario.problem}"
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Automation Logic</h4>
                                        <p className="text-[14px] font-black text-slate-700 leading-snug">
                                            {scenario.logic}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-4 relative">
                                    {/* Visual Connector Line */}
                                    <div className="absolute left-[11px] top-4 bottom-4 w-px bg-slate-100" />

                                    {scenario.flow.map((step, sIndex) => (
                                        <div key={sIndex} className="relative flex items-center gap-4 group/step">
                                            <div className="relative flex items-center justify-center h-6 w-6 rounded-full bg-white border-2 border-slate-100 text-[10px] font-black text-slate-400 z-10 group-hover:border-slate-900 group-hover:text-slate-900 transition-colors duration-300">
                                                {sIndex + 1}
                                            </div>
                                            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500 pt-0.5">
                                                {step}
                                            </span>
                                            {sIndex < scenario.flow.length - 1 && (
                                                <div className="absolute left-[10px] top-6 opacity-0 group-hover/step:opacity-100 transition-opacity">
                                                    <ArrowDown size={12} className="text-slate-900" />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-auto pt-10 border-t border-slate-50 flex items-center justify-between">
                                <div className="flex gap-1.5">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`h-1 w-1 rounded-full ${index === i - 1 ? 'bg-slate-900' : 'bg-slate-200'}`} />
                                    ))}
                                </div>
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">
                                    Operational Flow Design
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
