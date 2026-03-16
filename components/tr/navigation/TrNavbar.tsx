import * as React from 'react';
import Link from 'next/link';
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
                'w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50',
                className,
            )}
        >
            <ContentContainer size="xl">
                <nav className="relative flex h-20 items-center justify-between">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-90 relative z-10">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            WeCaHan
                        </span>
                    </Link>

                    {/* Desktop Navigation Links - Centered */}
                    <div className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-4 lg:gap-6 md:flex whitespace-nowrap">
                        <Link href="/klinikler" className="text-[13px] font-semibold text-gray-500 transition-colors hover:text-gray-900">
                            Klinikler
                        </Link>
                        <Link href="/muhasebe-ofisleri" className="text-[13px] font-semibold text-gray-500 transition-colors hover:text-gray-900">
                            Muhasebe
                        </Link>
                        <Link href="/paketler" className="text-[13px] font-semibold text-gray-500 transition-colors hover:text-gray-900">
                            Paketler
                        </Link>
                        <Link href="/fiyatlandirma" className="text-[13px] font-semibold text-gray-500 transition-colors hover:text-gray-900">
                            Fiyatlandırma
                        </Link>
                        <Link href="/ornek-senaryolar" className="text-[13px] font-semibold text-gray-500 transition-colors hover:text-gray-900">
                            Senaryolar
                        </Link>
                        <Link href="/iletisim" className="text-[13px] font-semibold text-gray-500 transition-colors hover:text-gray-900">
                            İletişim
                        </Link>
                    </div>

                    {/* CTA Area */}
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="hidden lg:block">
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                                <SecondaryButton className="!px-4 !py-2 !text-[12px] font-bold whitespace-nowrap bg-white border-gray-100 uppercase tracking-tight">
                                    WhatsApp
                                </SecondaryButton>
                            </a>
                        </div>
                        <Link href="/iletisim#form">
                            <PrimaryButton className="!px-5 !py-2 !text-[12px] font-bold whitespace-nowrap uppercase tracking-tight shadow-lg shadow-black/5">
                                Analiz Al
                            </PrimaryButton>
                        </Link>
                    </div>
                </nav>
            </ContentContainer>
        </header>
    );
}
