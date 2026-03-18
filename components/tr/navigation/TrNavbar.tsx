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

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

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

                    {/* CTA Area */}
                    <div className="flex items-center gap-3 relative z-10">
                        <div className="hidden lg:block">
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                                <SecondaryButton className="!px-4 !py-2 !text-[12px] font-bold whitespace-nowrap bg-white border-gray-100 uppercase tracking-tight">
                                    WhatsApp
                                </SecondaryButton>
                            </a>
                        </div>
                        <Link href="/iletisim#form" className="hidden sm:block">
                            <PrimaryButton className="!px-5 !py-2 !text-[12px] font-bold whitespace-nowrap uppercase tracking-tight shadow-lg shadow-black/5">
                                Analiz Al
                            </PrimaryButton>
                        </Link>

                        {/* Mobile Toggle Button */}
                        <button 
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    <div className={mergeClasses(
                        "fixed inset-0 bg-white z-[60] transition-transform duration-300 ease-in-out md:hidden flex flex-col h-[100dvh]",
                        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 invisible"
                    )}>
                        {/* Drawer Header */}
                        <div className="flex h-20 items-center justify-between px-6 border-b border-gray-50">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                                    W
                                </div>
                                <span className="text-xl font-bold tracking-tight text-gray-900">
                                    WeCaHan
                                </span>
                            </Link>
                            <button 
                                className="p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Drawer Body - Scrollable */}
                        <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-bold text-gray-900 border-b border-gray-50 pb-4 tracking-tight"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Drawer Footer - Sticky at bottom */}
                        <div className="mt-auto p-6 bg-gray-50/50 border-t border-gray-100 flex flex-col gap-4">
                            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="block w-full">
                                <SecondaryButton className="w-full py-4 text-base font-bold bg-white border-gray-100 uppercase tracking-tight">
                                    WhatsApp
                                </SecondaryButton>
                            </a>
                            <Link href="/iletisim#form" onClick={() => setIsMenuOpen(false)} className="block w-full">
                                <PrimaryButton className="w-full py-4 text-base font-bold uppercase tracking-tight shadow-xl shadow-black/5">
                                    Analiz Al
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </nav>
            </ContentContainer>
        </header>
    );
}
