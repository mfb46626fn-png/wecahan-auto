"use client";

import * as React from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../../shared/ui/Logo';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { ContentContainer } from '../../shared/layout/ContentContainer';

type CenterLocale = 'tr' | 'en';

type CenterNavbarProps = {
    className?: string;
};

const translations = {
    tr: {
        services: 'Hizmetlerimiz',
        whyUs: 'Neden Biz?',
        contact: 'İletişim',
        cta: 'Hemen Başla',
    },
    en: {
        services: 'Services',
        whyUs: 'Why Us?',
        contact: 'Contact',
        cta: 'Get Started',
    }
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function CenterNavbar({ className }: CenterNavbarProps) {
    const [locale, setLocale] = React.useState<CenterLocale>('en');
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

    React.useEffect(() => {
        const getInitialLocale = (): CenterLocale => {
            if (typeof document !== 'undefined') {
                // Read NEXT_LOCALE cookie
                const cookieValue = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('NEXT_LOCALE='))
                    ?.split('=')[1];
                
                if (cookieValue === 'tr' || cookieValue === 'en') {
                    return cookieValue as CenterLocale;
                }

                // Fallback to browser language
                const browserLang = navigator.language.split('-')[0];
                if (browserLang === 'tr') return 'tr';
            }
            return 'en';
        };

        setLocale(getInitialLocale());
    }, []);

    const handleLanguageSwitch = (newLocale: CenterLocale) => {
        if (newLocale === locale) return;
        
        // Save preference to cookie (1 year)
        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
        
        // Refresh to apply changes server-side across all content blocks
        window.location.reload();
    };

    const t = translations[locale];

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
                    <a href="/" className="transition-opacity hover:opacity-80 z-10">
                        <Logo variant="navbar" />
                    </a>

                    {/* Desktop Navigation Links - Centered */}
                    <div className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
                        <a href="/#what-we-automate" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            {t.services}
                        </a>
                        <a href="/why-us" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            {t.whyUs}
                        </a>
                        <a href="/contact" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            {t.contact}
                        </a>
                    </div>

                    {/* CTA & Mobile Toggle Area */}
                    <div className="flex items-center gap-4 md:gap-6 z-10">
                        {/* Language Switch - Desktop */}
                        <div className="hidden items-center gap-2 md:flex">
                            <button 
                                onClick={() => handleLanguageSwitch('tr')}
                                className={mergeClasses(
                                    "text-xs tracking-wider transition-colors px-1",
                                    locale === 'tr' ? "text-gray-900 font-bold" : "text-gray-400 font-medium hover:text-gray-600"
                                )}
                                aria-label="Türkçe"
                                aria-pressed={locale === 'tr'}
                            >
                                TR
                            </button>
                            <span className="text-gray-200 text-[10px]">|</span>
                            <button 
                                onClick={() => handleLanguageSwitch('en')}
                                className={mergeClasses(
                                    "text-xs tracking-wider transition-colors px-1",
                                    locale === 'en' ? "text-gray-900 font-bold" : "text-gray-400 font-medium hover:text-gray-600"
                                )}
                                aria-label="English"
                                aria-pressed={locale === 'en'}
                            >
                                EN
                            </button>
                        </div>

                        <PrimaryButton 
                            className="hidden md:flex !px-4 !py-2 !text-sm"
                            onClick={() => window.location.href = '/contact'}
                        >
                            {t.cta}
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

                    <div className={mergeClasses(
                        "fixed inset-0 bg-white z-[60] transition-transform duration-300 ease-in-out md:hidden flex flex-col h-[100dvh]",
                        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 invisible"
                    )}>
                        {/* Drawer Header */}
                        <div className="flex h-20 items-center justify-between px-6 border-b border-gray-50">
                            <a href="/" onClick={() => setIsMenuOpen(false)}>
                                <Logo variant="navbar" />
                            </a>
                            <button 
                                className="p-2 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Drawer Body - Scrollable */}
                        <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-8">
                            <a 
                                href="/#what-we-automate" 
                                onClick={() => setIsMenuOpen(false)} 
                                className="text-3xl font-bold text-gray-900 tracking-tight"
                            >
                                {t.services}
                            </a>
                            <a 
                                href="/why-us" 
                                onClick={() => setIsMenuOpen(false)} 
                                className="text-3xl font-bold text-gray-900 tracking-tight"
                            >
                                {t.whyUs}
                            </a>
                            <a 
                                href="/contact" 
                                onClick={() => setIsMenuOpen(false)} 
                                className="text-3xl font-bold text-gray-900 tracking-tight"
                            >
                                {t.contact}
                            </a>
                        </div>

                        {/* Drawer Footer - Sticky at bottom */}
                        <div className="mt-auto p-6 bg-gray-50/50 border-t border-gray-100 flex flex-col gap-6">
                            {/* Language Switch */}
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => handleLanguageSwitch('tr')}
                                    className={mergeClasses(
                                        "text-sm tracking-widest transition-colors",
                                        locale === 'tr' ? "text-gray-900 font-bold underline underline-offset-8 decoration-2" : "text-gray-400 font-medium"
                                    )}
                                >
                                    TÜRKÇE
                                </button>
                                <span className="text-gray-200">|</span>
                                <button 
                                    onClick={() => handleLanguageSwitch('en')}
                                    className={mergeClasses(
                                        "text-sm tracking-widest transition-colors",
                                        locale === 'en' ? "text-gray-900 font-bold underline underline-offset-8 decoration-2" : "text-gray-400 font-medium"
                                    )}
                                >
                                    ENGLISH
                                </button>
                            </div>

                            <PrimaryButton 
                                className="w-full py-4 text-base font-bold shadow-xl shadow-black/5"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    window.location.href = '/contact';
                                }}
                            >
                                {t.cta}
                            </PrimaryButton>
                        </div>
                    </div>
                </nav>
            </ContentContainer>
        </header>
    );
}
