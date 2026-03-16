import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { Target, Eye, Cog, Users } from 'lucide-react';

interface BenefitCard {
    title: string;
    description: string;
}

export interface CenterHomeWhyThisStructureWorksBlockProps {
    content: {
        title: string;
        description: string;
        benefits: BenefitCard[];
    };
    className?: string;
}

/**
 * CenterHomeWhyThisStructureWorksBlock - Explains the tangible outcomes of operational automation.
 * Focused on results: Visibility, coordination, and reduced repetitive effort.
 */
export function CenterHomeWhyThisStructureWorksBlock({ content, className }: CenterHomeWhyThisStructureWorksBlockProps) {
    const { title, description, benefits } = content;

    // Mapping icons to benefits based on common themes
    const getIcon = (index: number) => {
        switch (index) {
            case 0: return <Target className="h-6 w-6 text-slate-900" />;
            case 1: return <Eye className="h-6 w-6 text-slate-900" />;
            case 2: return <Cog className="h-6 w-6 text-slate-900" />;
            case 3: return <Users className="h-6 w-6 text-slate-900" />;
            default: return <Target className="h-6 w-6 text-slate-900" />;
        }
    };

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-20 md:py-32 bg-slate-900 rounded-[3rem] text-white">
                <SectionHeader
                    title={<span className="text-white">{title}</span>}
                    description={<span className="text-slate-400">{description}</span>}
                    align="center"
                    maxWidth="lg"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-7xl lg:mx-auto">
                    {benefits.map((benefit, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all duration-500 rounded-[2rem] p-8 group"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl shadow-black/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                                {getIcon(index)}
                            </div>
                            
                            <h3 className="mb-4 text-lg font-bold text-white tracking-tight group-hover:text-slate-200 transition-colors">
                                {benefit.title}
                            </h3>
                            
                            <BodyText className="text-slate-400 text-sm leading-relaxed font-medium">
                                {benefit.description}
                            </BodyText>

                            <div className="mt-auto pt-8 flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-slate-600 group-hover:bg-slate-400 transition-colors" />
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600 group-hover:text-slate-400 transition-colors">
                                    Operational Outcome
                                </span>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
