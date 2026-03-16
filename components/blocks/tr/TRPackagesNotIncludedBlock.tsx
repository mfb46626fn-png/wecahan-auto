import * as React from 'react';
import { SectionWrapper } from '../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { SectionHeader } from '../../shared/layout/SectionHeader';
import { CardBase } from '../../shared/ui/CardBase';
import { BodyText } from '../../shared/typography/BodyText';
import { trPackagesContent } from '../../../content/tr/packages';

export function TRPackagesNotIncludedBlock() {
    const { notIncluded } = trPackagesContent;

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-16 md:py-24">
                <SectionHeader
                    title={notIncluded.title}
                    description={notIncluded.description}
                    align="center"
                    maxWidth="md"
                    className="mb-12 md:mb-16"
                />

                <CardBase 
                    size="lg" 
                    className="max-w-4xl mx-auto border-neutral-100 bg-neutral-50/20"
                >
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-neutral-200 text-neutral-400">
                                <span className="text-sm font-bold">×</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-neutral-900">
                                    Hizmet Sınırlarımız
                                </h3>
                                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">
                                    Daha Sağlıklı Bir İş Birliği İçin Sorumluluk Alanlarımız
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
                            {notIncluded.limits.map((limit, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all group">
                                    <div className="flex-shrink-0 mt-1 h-5 w-5 rounded-full border border-neutral-100 flex items-center justify-center group-hover:border-neutral-300 transition-all">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 group-hover:bg-neutral-400" />
                                    </div>
                                    <BodyText className="text-sm font-medium text-neutral-500 leading-snug">
                                        {limit}
                                    </BodyText>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-10 border-t border-neutral-100">
                            <div className="bg-white p-6 rounded-2xl border border-neutral-100 border-dashed text-center">
                                <p className="text-xs text-neutral-400 font-medium italic">
                                    * Belirlenen sınırlar dışında kalan her türlü talep için dürüstçe geri bildirim veriyor ve gerekirse doğru iş ortaklarına yönlendiriyoruz.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardBase>
            </ContentContainer>
        </SectionWrapper>
    );
}
