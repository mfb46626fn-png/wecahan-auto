"use client";

import * as React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navLinks = [
        { href: "/klinikler", label: "Klinikler" },
        { href: "/muhasebe-ofisleri", label: "Muhasebe" },
        { href: "/paketler", label: "Paketler" },
        { href: "/fiyatlandirma", label: "Fiyatlandırma" },
        { href: "/ornek-senaryolar", label: "Senaryolar" },
        { href: "/iletisim", label: "İletişim" },
    ];

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
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href}
                                href={link.href} 
                                className="text-[13px] font-semibold text-gray-500 transition-colors hover:text-gray-900"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Area & Hamburger */}
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="hidden lg:block">
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                                <SecondaryButton className="!px-4 !py-2 !text-[12px] font-bold whitespace-nowrap bg-white border-gray-100 uppercase tracking-tight">
                                    WhatsApp
                                </SecondaryButton>
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <Link href="/iletisim#form">
                                <PrimaryButton className="!px-5 !py-2 !text-[12px] font-bold whitespace-nowrap uppercase tracking-tight shadow-lg shadow-black/5">
                                    Analiz Al
                                </PrimaryButton>
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button 
                            className="p-2 md:hidden text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </ContentContainer>

            {/* Mobile Sidebar Overlay */}
            <div className={mergeClasses(
                "fixed inset-0 bg-white z-[60] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="flex h-20 items-center justify-between px-6 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            WeCaHan
                        </span>
                    </div>
                    <button 
                        className="p-2 text-gray-600"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto py-12 px-6">
                    <nav className="flex flex-col gap-8">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href}
                                href={link.href} 
                                className="text-2xl font-bold text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="p-6 border-t border-gray-100 flex flex-col gap-3">
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="w-full">
                        <SecondaryButton className="w-full !py-4 !text-sm font-bold uppercase tracking-tight">
                            WhatsApp
                        </SecondaryButton>
                    </a>
                    <Link href="/iletisim#form" className="w-full" onClick={() => setIsMenuOpen(false)}>
                        <PrimaryButton className="w-full !py-4 !text-sm font-bold uppercase tracking-tight">
                            Ücretsiz Analiz Al
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </header>
    );
}
