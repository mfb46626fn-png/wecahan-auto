"use client";

import * as React from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { ContentContainer } from '../../shared/layout/ContentContainer';

type GlobalNavbarProps = {
    className?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function GlobalNavbar({ className }: GlobalNavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { href: "/accounting-firms", label: "Accounting Firms" },
        { href: "/services", label: "Services" },
        { href: "/pricing", label: "Pricing" },
        { href: "/use-cases", label: "Use Cases" },
        { href: "/contact", label: "Contact" },
    ];

    const ctaConfig = {
        label: "Book a Discovery Call",
        href: "/book-a-call"
    };

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
                    <Link href="/" className="flex items-center gap-2 relative z-10 transition-opacity hover:opacity-90">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            WeCaHan
                        </span>
                    </Link>
...
                    {/* Desktop Navigation Links - Centered Like TR */}
                    <div className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-4 lg:gap-8 md:flex whitespace-nowrap">
                        {navLinks.map((link, idx) => (
                            <Link 
                                key={idx}
                                href={link.href} 
                                className="text-[13px] font-bold text-neutral-500 transition-colors hover:text-neutral-900"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Area */}
                    <div className="flex items-center gap-3 relative z-10">
                        <Link href={ctaConfig.href} className="hidden sm:block">
                            <PrimaryButton className="!px-5 !py-2 !text-[11px] font-bold whitespace-nowrap uppercase tracking-widest shadow-lg shadow-black/5">
                                {ctaConfig.label}
                            </PrimaryButton>
                        </Link>

                        {/* Mobile Toggle Button */}
                        <button 
                            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Panel - Fullscreen Drawer */}
                    <div className={mergeClasses(
                        "fixed inset-0 bg-white z-[60] transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) md:hidden flex flex-col h-[100dvh]",
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}>
                        {/* Drawer Header */}
                        <div className="flex h-20 items-center justify-between px-6 border-b border-neutral-50">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                                    W
                                </div>
                                <span className="text-xl font-bold tracking-tight text-gray-900">
                                    WeCaHan
                                </span>
                            </Link>
                            <button 
                                className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors focus:outline-none"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Drawer Body - Scrollable */}
                        <div className="flex-1 overflow-y-auto px-6 py-12 flex flex-col gap-2">
                            {navLinks.map((link, idx) => (
                                <Link 
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-bold text-neutral-900 py-3 border-b border-neutral-50 tracking-tight transition-colors hover:text-neutral-500"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Drawer Footer - Sticky at bottom */}
                        <div className="mt-auto p-6 bg-neutral-50 border-t border-neutral-100 flex flex-col gap-4">
                            <Link href={ctaConfig.href} onClick={() => setIsMenuOpen(false)}>
                                <PrimaryButton 
                                    className="w-full py-4 text-xs font-bold uppercase tracking-widest shadow-xl shadow-black/5"
                                >
                                    {ctaConfig.label}
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </nav>
            </ContentContainer>
        </header>
    );
}
