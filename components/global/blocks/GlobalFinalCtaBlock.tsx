import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionTitle } from '../../shared/typography/SectionTitle';
import { SectionDescription } from '../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { CardBase } from '../../shared/ui/CardBase';
import { PhoneCall, FileText, ArrowRight } from 'lucide-react';

type CtaConfig = string | { label: string; href: string };

export interface GlobalFinalCtaBlockProps {
    content: {
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        helperText?: string;
    };
    className?: string;
}

export function GlobalFinalCtaBlock({ content, className }: GlobalFinalCtaBlockProps) {
    const { title, description, primaryCta, secondaryCta, helperText } = content;

    const resolveCtaLabel = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const resolveCtaHref = (cta: CtaConfig) => {
        return typeof cta === 'string' ? '#' : cta.href;
    };

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32">
                <CardBase className="relative overflow-hidden flex flex-col p-10 md:p-16 bg-neutral-900 border-none shadow-2xl rounded-[2.5rem]">
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-neutral-800/50 blur-3xl" />
                    
                    <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                        <div>
                            <SectionTitle
                                size="lg"
                                className="mb-6 text-white max-w-2xl tracking-tight leading-[1.1]"
                            >
                                {title}
                            </SectionTitle>
                            
                            <SectionDescription
                                maxWidth="lg"
                                className="mb-0 text-neutral-400 max-w-xl leading-relaxed text-lg"
                            >
                                {description}
                            </SectionDescription>
                            
                            <div className="mt-10 flex items-center gap-6">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-10 w-10 rounded-full border-2 border-neutral-900 bg-neutral-800" />
                                    ))}
                                </div>
                                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-500">
                                    Trusted by Forward-Thinking Firms
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 p-2 bg-neutral-800/30 rounded-[2rem] border border-neutral-700/30 backdrop-blur-sm">
                            {/* Primary Path: Discovery Call */}
                            <a 
                                href={resolveCtaHref(primaryCta)}
                                className="group flex items-center justify-between p-6 rounded-2xl bg-white transition-all hover:bg-neutral-50"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-lg shadow-black/20">
                                        <PhoneCall size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-[13px] font-bold text-neutral-900">
                                            {resolveCtaLabel(primaryCta)}
                                        </h4>
                                        <p className="text-xs text-neutral-500 mt-0.5">Structured 15-min consultation</p>
                                    </div>
                                </div>
                                <ArrowRight size={20} className="text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
                            </a>

                            {/* Secondary Path: Workflow Brief */}
                            {secondaryCta && (
                                <a 
                                    href={resolveCtaHref(secondaryCta)}
                                    className="group flex items-center justify-between p-6 rounded-2xl bg-transparent border border-neutral-700/50 transition-all hover:border-neutral-500 hover:bg-neutral-700/20"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-800 text-neutral-400 border border-neutral-700">
                                            <FileText size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-[13px] font-bold text-neutral-300">
                                                {resolveCtaLabel(secondaryCta)}
                                            </h4>
                                            <p className="text-xs text-neutral-500 mt-0.5">Submit your operational pain points</p>
                                        </div>
                                    </div>
                                    <ArrowRight size={20} className="text-neutral-600 group-hover:text-neutral-300 group-hover:translate-x-1 transition-all" />
                                </a>
                            )}
                        </div>
                    </div>

                    {helperText && (
                        <div className="mt-12 pt-8 border-t border-neutral-800/50 relative z-10">
                            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-neutral-600">
                                {helperText}
                            </p>
                        </div>
                    )}
                </CardBase>

            </ContentContainer>
        </SectionWrapper>
    );
}
