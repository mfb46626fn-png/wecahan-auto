import * as React from 'react';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { SecondaryButton } from '../../shared/ui/SecondaryButton';
import { ContentContainer } from '../../shared/layout/ContentContainer';

type TrNavbarProps = {
    className?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function TrNavbar({ className }: TrNavbarProps) {
    return (
        <header
            className={mergeClasses(
                'w-full border-b border-gray-100 bg-white/80 backdrop-blur-md',
                className,
            )}
        >
            <ContentContainer size="xl">
                <nav className="flex h-20 items-center justify-between">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            WeCaHan
                        </span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Klinik Otomasyonu
                        </a>
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Muhasebe Ofisleri
                        </a>
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Paketler
                        </a>
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Senaryolar
                        </a>
                    </div>

                    {/* CTA Area */}
                    {/* TR site has more result-oriented CTA balance as per docs */}
                    <div className="flex items-center gap-3">
                        <div className="hidden lg:block">
                            <SecondaryButton className="!px-4 !py-2 !text-sm">
                                WhatsApp'tan Sor
                            </SecondaryButton>
                        </div>
                        <PrimaryButton className="!px-4 !py-2 !text-sm">
                            Ücretsiz Analiz
                        </PrimaryButton>
                    </div>
                </nav>
            </ContentContainer>
        </header>
    );
}
