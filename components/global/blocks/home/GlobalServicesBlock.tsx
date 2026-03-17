import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { AlertCircle, Target } from 'lucide-react';
// We import the content as a fallback to show frictions without changing app/page.tsx yet
import { globalHomeContent } from '../../../../content/global/home';

interface ServiceItem {
    title: string;
    description: string;
    label?: string;
}

interface ServicesContent {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
}

export interface GlobalServicesBlockProps {
    content: ServicesContent;
    frictionsContent?: ServicesContent; // Optional expansion for backward compatibility
    className?: string;
}

export function GlobalServicesBlock({ content, frictionsContent, className }: GlobalServicesBlockProps) {
    const services = content;
    // Fallback to globalHomeContent if frictionsContent is not provided via props
    const frictions = frictionsContent || globalHomeContent.frictions;

    return (
        <SectionWrapper className={className}>
            <ContentContainer className="py-16 md:py-24">
                {/* 1. Core Operational Frictions Section */}
                {frictions && (
                    <div className="mb-24 lg:mb-32">
                        <SectionHeader
                            align="center"
                            eyebrow={frictions.eyebrow}
                            title={frictions.title}
                            description={frictions.description}
                        />

                        <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {frictions.items.map((item, index) => (
                                <CardBase 
                                    key={index} 
                                    className="flex h-full flex-col p-6 md:p-8 bg-neutral-50/50 border border-neutral-100/80 shadow-none grayscale hover:grayscale-0 transition-all duration-300"
                                >
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-400">
                                        <AlertCircle size={20} />
                                    </div>
                                    <h3 className="mb-3 text-lg font-bold text-neutral-800">
                                        {item.title}
                                    </h3>
                                    <BodyText className="text-neutral-500 text-sm leading-relaxed font-medium">
                                        {item.description}
                                    </BodyText>
                                </CardBase>
                            ))}
                        </div>
                    </div>
                )}

                {/* 2. Service Pillars Section */}
                <div className="border-t border-neutral-100 pt-20 md:pt-24 text-center">
                    <SectionHeader
                        align="center"
                        eyebrow={services.eyebrow}
                        title={services.title}
                        description={services.description}
                    />

                    <div className="mt-12 md:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {services.items.map((item, index) => (
                            <CardBase 
                                key={index} 
                                className="flex h-full flex-col p-6 md:p-8 bg-white border border-neutral-100 shadow-sm transition-shadow hover:shadow-md"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-sm self-center md:self-start">
                                    <Target size={24} />
                                </div>
                                {item.label && (
                                    <span className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 text-center md:text-left">
                                        {item.label}
                                    </span>
                                )}
                                <h3 className="mb-3 text-lg font-bold text-neutral-900 text-center md:text-left">
                                    {item.title}
                                </h3>
                                <BodyText className="text-neutral-600 leading-relaxed font-medium text-center md:text-left">
                                    {item.description}
                                </BodyText>
                            </CardBase>
                        ))}
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
