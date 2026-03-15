import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trClinicsContent } from '../../../content/tr/clinics';

export function TRClinicsPainPointsBlock() {
    const { painPoints } = trClinicsContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer>
                <SectionHeader
                    title={painPoints.title}
                    description={painPoints.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-20"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {painPoints.items.map((item, index) => (
                        <CardBase 
                            key={index} 
                            size="lg" 
                            className="flex flex-col h-full bg-neutral-50 border-neutral-100 hover:border-neutral-200 transition-colors duration-300"
                        >
                            <div className="mb-5 flex items-center justify-center w-10 h-10 rounded-xl bg-black text-white text-sm font-bold">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            
                            <h3 className="text-lg font-bold text-neutral-900 mb-3">
                                {item.title}
                            </h3>
                            
                            <BodyText className="text-sm leading-relaxed text-neutral-600">
                                {item.description}
                            </BodyText>
                        </CardBase>
                    ))}
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
