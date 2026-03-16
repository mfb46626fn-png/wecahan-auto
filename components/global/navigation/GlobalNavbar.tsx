"use client";

import * as React from 'react';
import { Menu, X } from 'lucide-react';
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

    const navLinks = [
        { href: "#", label: "Services" },
        { href: "#", label: "Accounting Firms" },
        { href: "#", label: "Pricing" },
        { href: "#", label: "Use Cases" },
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
                    <div className="flex items-center gap-2 relative z-10">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            WeCaHan Auto
                        </span>
                    </div>

                    {/* Desktop Navigation Links - ABSOLUTELY CENTERED */}
                    <div className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-8 md:flex whitespace-nowrap">
                        {navLinks.map((link, idx) => (
                            <a 
                                key={idx}
                                href={link.href} 
                                className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA Area & Hamburger */}
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="hidden md:block">
                            <PrimaryButton className="!px-5 !py-2.5 !text-sm">
                                Book a Discovery Call
                            </PrimaryButton>
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
                        {navLinks.map((link, idx) => (
                            <a 
                                key={idx}
                                href={link.href} 
                                className="text-2xl font-bold text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="p-6 border-t border-gray-100">
                    <PrimaryButton 
                        className="w-full !py-4 !text-base"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Book a Discovery Call
                    </PrimaryButton>
                </div>
            </div>
        </header>
    );
}
