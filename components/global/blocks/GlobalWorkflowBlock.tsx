import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { CheckCircle2, ArrowRight } from 'lucide-react';
// We import the content as a fallback to show benefits without changing app/page.tsx yet
import { globalHomeContent } from '../../../content/global/home';

interface WorkflowItem {
    step: string;
    title: string;
    description: string;
}

interface WorkflowContent {
    eyebrow: string;
    title: string;
    description: string;
    items: WorkflowItem[];
}

interface BenefitItem {
    title: string;
    description: string;
}

interface BenefitsContent {
    eyebrow: string;
    title: string;
    description: string;
    items: BenefitItem[];
}

export interface GlobalWorkflowBlockProps {
    content: WorkflowContent;
    benefitsContent?: BenefitsContent; // Optional expansion for backward compatibility
    className?: string;
}

export function GlobalWorkflowBlock({ content, benefitsContent, className }: GlobalWorkflowBlockProps) {
    const workflow = content;
    // Fallback to globalHomeContent if benefitsContent is not provided via props
    const benefits = benefitsContent || globalHomeContent.benefits;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32 border-t border-neutral-100 bg-neutral-50/50">
                
                {/* 1. Why This Model Works Section */}
                {benefits && (
                    <div className="mb-24 lg:mb-36">
                        <SectionHeader
                            align="center"
                            eyebrow={benefits.eyebrow}
                            title={benefits.title}
                            description={benefits.description}
                        />

                        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {benefits.items.map((item, index) => (
                                <CardBase 
                                    key={index} 
                                    className="flex h-full flex-col p-8 bg-white border border-neutral-100 shadow-sm transition-shadow hover:shadow-md"
                                >
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 text-neutral-900 ring-4 ring-neutral-100/50">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold tracking-tight text-neutral-900 uppercase">
                                        {item.title}
                                    </h3>
                                    <BodyText className="text-neutral-600 leading-relaxed font-medium">
                                        {item.description}
                                    </BodyText>
                                </CardBase>
                            ))}
                        </div>
                    </div>
                )}

                {/* 2. How We Work Section */}
                <div className="pt-20 lg:pt-24 border-t border-neutral-200/60">
                    <SectionHeader
                        align="center"
                        eyebrow={workflow.eyebrow}
                        title={workflow.title}
                        description={workflow.description}
                    />

                    <div className="mt-16 md:mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {workflow.items.map((item, index) => (
                            <div key={index} className="relative flex flex-col items-start md:items-center text-left md:text-center group">
                                {/* Connector Line (Desktop Only) */}
                                {index < workflow.items.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-neutral-200" />
                                )}
                                
                                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white border border-neutral-200 text-2xl font-black text-neutral-900 shadow-sm group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-300">
                                    {item.step}
                                </div>
                                <h3 className="mb-4 text-lg font-bold tracking-tight text-neutral-900 uppercase">
                                    {item.title}
                                </h3>
                                <BodyText className="text-neutral-500 text-sm leading-relaxed max-w-[200px]">
                                    {item.description}
                                </BodyText>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 flex justify-center">
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-300">
                            <span>Analysis</span>
                            <ArrowRight size={12} />
                            <span>Construction</span>
                            <ArrowRight size={12} />
                            <span>Validation</span>
                            <ArrowRight size={12} />
                            <span>Maintenance</span>
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
