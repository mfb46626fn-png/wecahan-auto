import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trClinicsContent } from '../../../content/tr/clinics';

export function TRClinicsSolutionModulesBlock() {
    const { solutionModules } = trClinicsContent;

    return (
        <SectionWrapper className="bg-neutral-50/50">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={solutionModules.title}
                    description={solutionModules.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-6 md:grid-cols-2 lg:gap-8 lg:max-w-6xl lg:mx-auto">
                    {solutionModules.items.map((module, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col bg-white border-white shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                {module.title}
                            </h3>
                            
                            <BodyText className="text-sm text-neutral-500 mb-8 italic">
                                {module.description}
                            </BodyText>
                            
                            <div className="mt-auto pt-6 border-t border-neutral-100">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
                                    Modül Kapsamı
                                </h4>
                                <ul className="space-y-3">
                                    {module.points.map((point, pIndex) => (
                                        <li key={pIndex} className="flex items-start gap-3 text-sm font-medium text-neutral-700">
                                            <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-black/20" aria-hidden="true" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
