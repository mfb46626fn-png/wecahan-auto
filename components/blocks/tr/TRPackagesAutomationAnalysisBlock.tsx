import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trPackagesContent } from '../../../content/tr/packages';

export function TRPackagesAutomationAnalysisBlock() {
    const { automationAnalysis } = trPackagesContent;

    const sections = [
        {
            title: 'Neleri Kapsar?',
            items: automationAnalysis.included,
            dotColor: 'bg-green-500',
        },
        {
            title: 'Neler Dahil Değil?',
            items: automationAnalysis.notIncluded,
            dotColor: 'bg-red-400',
            isNegative: true,
        },
        {
            title: 'Teslim Çıktısı',
            items: automationAnalysis.deliverables,
            dotColor: 'bg-blue-500',
        },
        {
            title: 'Kime Uygun?',
            items: automationAnalysis.bestFor,
            dotColor: 'bg-purple-500',
        }
    ];

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer>
                <SectionHeader
                    eyebrow="Aşama 1"
                    title={automationAnalysis.title}
                    description={automationAnalysis.description}
                    align="center"
                    className="mb-16"
                />

                <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
                    {sections.map((section, sectionIdx) => (
                        <CardBase 
                            key={sectionIdx}
                            size="lg"
                            className="bg-neutral-50/50 border-neutral-100 p-8 md:p-10 flex flex-col h-full"
                        >
                            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-8 flex items-center gap-3">
                                <span className={`w-2 h-2 rounded-full ${section.dotColor}`} />
                                {section.title}
                            </h4>
                            
                            <ul className="space-y-5 flex-grow">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-start gap-4">
                                        <span className="flex-shrink-0 mt-1.5 h-1 w-1 rounded-full bg-neutral-300" />
                                        <BodyText 
                                            className={`text-sm leading-relaxed ${
                                                section.isNegative 
                                                    ? 'text-neutral-500 line-through decoration-neutral-300' 
                                                    : 'text-neutral-600'
                                            }`}
                                        >
                                            {item}
                                        </BodyText>
                                    </li>
                                ))}
                            </ul>
                        </CardBase>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-900 text-white shadow-xl shadow-neutral-200">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest">
                            Yatırım Öncesi Netlik Katmanı
                        </span>
                    </div>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
