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

                    {/* Desktop Navigation Links */}
                    <div className="hidden items-center gap-8 md:flex">
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

                    {/* CTA Area */}
                    <div className="flex items-center gap-4 relative z-10">
                        <PrimaryButton className="hidden sm:flex !px-5 !py-2.5 !text-sm">
                            Book a Discovery Call
                        </PrimaryButton>

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

                    {/* Mobile Menu Panel */}
                    <div className={mergeClasses(
                        "fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 gap-8 overflow-y-auto",
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}>
                        {navLinks.map((link, idx) => (
                            <a 
                                key={idx}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl font-bold text-gray-900 border-b border-gray-50 pb-4"
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="mt-auto pb-8">
                            <PrimaryButton 
                                className="w-full py-4 text-base font-bold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Book a Discovery Call
                            </PrimaryButton>
                        </div>
                    </div>
                </nav>
            </ContentContainer>
        </header>
    );
}
