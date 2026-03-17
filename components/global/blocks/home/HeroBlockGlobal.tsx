import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionEyebrow } from '../../../shared/typography/SectionEyebrow';
import { SectionTitle } from '../../../shared/typography/SectionTitle';
import { SectionDescription } from '../../../shared/typography/SectionDescription';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { CheckCircle2, Search, Settings, ShieldCheck, Activity } from 'lucide-react';

type CtaConfig = string | { label: string; href: string };

export interface HeroBlockGlobalProps {
    content: {
        eyebrow: string;
        title: string;
        description: string;
        primaryCta: CtaConfig;
        secondaryCta?: CtaConfig;
        helperText?: string;
    };
    className?: string;
}

export function HeroBlockGlobal({ content, className }: HeroBlockGlobalProps) {
    const {
        eyebrow,
        title,
        description,
        primaryCta,
        secondaryCta,
        helperText,
    } = content;

    const resolveCtaLabel = (cta: CtaConfig) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    const outcomeItems = [
        { icon: <Search size={18} className="text-neutral-400" />, label: "Workflow Review" },
        { icon: <Settings size={18} className="text-neutral-400" />, label: "Custom Setup" },
        { icon: <Activity size={18} className="text-neutral-400" />, label: "Maintenance" },
        { icon: <ShieldCheck size={18} className="text-neutral-400" />, label: "Expansion" },
    ];

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="flex flex-col items-center text-center py-16 md:py-24 lg:py-32">
                {eyebrow && (
                    <SectionEyebrow className="mb-4">
                        {eyebrow}
                    </SectionEyebrow>
                )}
                
                {title && (
                    <SectionTitle size="lg" className="mb-6 max-w-4xl tracking-tight leading-[1.1]">
                        {title}
                    </SectionTitle>
                )}
                
                {description && (
                    <SectionDescription maxWidth="lg" className="mb-10 max-w-2xl text-neutral-600 text-lg leading-relaxed">
                        {description}
                    </SectionDescription>
                )}
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    {primaryCta && (
                        <PrimaryButton className="w-full sm:w-auto min-w-[200px] !px-8 !py-3 font-bold uppercase tracking-tight shadow-lg shadow-black/5">
                            {resolveCtaLabel(primaryCta)}
                        </PrimaryButton>
                    )}
                    
                    {secondaryCta && (
                        <SecondaryButton className="w-full sm:w-auto min-w-[200px] !px-8 !py-3 font-bold uppercase tracking-tight bg-white border-neutral-200">
                            {resolveCtaLabel(secondaryCta)}
                        </SecondaryButton>
                    )}
                </div>

                {helperText && (
                    <p className="mt-8 text-sm font-semibold text-neutral-400 tracking-widest uppercase">
                        {helperText}
                    </p>
                )}

                {/* Operational Outcome Strip */}
                <div className="mt-20 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 w-full max-w-5xl border-t border-neutral-100 pt-12">
                    {outcomeItems.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-50 border border-neutral-100 text-neutral-400">
                                {item.icon}
                            </div>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-tight">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
