import * as React from 'react';
import { SectionWrapper } from '../../../shared/layout/SectionWrapper';
import { ContentContainer } from '../../../shared/layout/ContentContainer';
import { SectionHeader } from '../../../shared/layout/SectionHeader';
import { CardBase } from '../../../shared/ui/CardBase';
import { BodyText } from '../../../shared/typography/BodyText';
import { PrimaryButton } from '../../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../../shared/ui/SecondaryButton';
import { trAccountingContent } from '../../../../content/tr/accounting';

export function TRAccountingPricingLogicBlock() {
    const { pricingLogic } = trAccountingContent;

    const resolveCta = (cta: typeof pricingLogic.primaryCta) => {
        return typeof cta === 'string' ? cta : cta.label;
    };

    return (
        <SectionWrapper className="bg-white">
            <ContentContainer className="py-20 md:py-28">
                <SectionHeader
                    title={pricingLogic.title}
                    description={pricingLogic.description}
                    align="center"
                    maxWidth="md"
                    className="mb-16 md:mb-24"
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl lg:mx-auto mb-16">
                    {pricingLogic.factors.map((factor, index) => (
                        <CardBase 
                            key={index}
                            size="md"
                            className="bg-neutral-50/50 border-neutral-100 hover:bg-white hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-500 rounded-[2rem] flex flex-col group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-white border border-neutral-100 text-neutral-400 text-[10px] font-bold group-hover:border-neutral-900 group-hover:text-neutral-900 transition-colors">
                                    0{index + 1}
                                </span>
                                <div className="h-[1px] flex-grow bg-neutral-100" />
                            </div>
                            <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                                {factor}
                            </h4>
                        </CardBase>
                    ))}
                </div>

                {/* Pricing Framework CTA Card */}
                <CardBase 
                    size="lg" 
                    className="max-w-4xl mx-auto bg-neutral-900 border-neutral-800 p-8 md:p-14 text-center rounded-[3rem] shadow-2xl shadow-neutral-200"
                >
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                            Ofisiniz İçin En Verimli Modeli Birlikte Kuralım
                        </h3>
                        <BodyText className="text-neutral-400 max-w-xl mx-auto leading-relaxed">
                            Fiyatlandırma modelimiz bir kara kutu değildir. Önce mevcut evrak ve müşteri takip hacminizi analiz ederiz, ardından size en uygun basamakla kurulumu gerçekleştiririz.
                        </BodyText>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/fiyatlandirma" className="w-full sm:w-auto">
                            <PrimaryButton className="w-full sm:w-auto !bg-white !text-black border-white hover:!bg-neutral-50">
                                {resolveCta(pricingLogic.primaryCta)}
                            </PrimaryButton>
                        </a>
                        <a href="#fitness-check" className="w-full sm:w-auto">
                            <SecondaryButton className="w-full sm:w-auto !text-white !border-white/20 hover:!bg-white/10">
                                {resolveCta(pricingLogic.secondaryCta)}
                            </SecondaryButton>
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-neutral-700" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                            Şeffaf, Modüler ve Ölçeklenebilir Yapı
                        </p>
                    </div>
                </CardBase>

                <div className="mt-20 text-center">
                    <p className="max-w-2xl mx-auto text-[11px] font-bold text-neutral-400 uppercase tracking-[0.15em] italic leading-relaxed">
                        * Tüm otomasyon yatırımlarımız; kurulum (bir defalık), bakım (aylık) ve ek geliştirme (ihtiyaca bağlı) kalemlerinden oluşur.
                    </p>
                </div>
            </ContentContainer>
        </SectionWrapper>
    );
}
