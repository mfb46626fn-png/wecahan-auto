"use client";

import * as React from 'react';
import { Menu, X } from 'lucide-react';
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
                    <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 relative z-10">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            WeCaHan
                        </span>
                    </a>

                    {/* Desktop Navigation Links - ABSOLUTELY CENTERED */}
                    <div className="hidden absolute left-1/2 -translate-x-1/2 items-center gap-8 md:flex">
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

                    {/* CTA Area & Hamburger */}
                    <div className="flex items-center gap-4 md:gap-6 relative z-10">
                        {/* Language Switch - Desktop */}
                        <div className="hidden items-center gap-2 md:flex">
                            <button 
                                onClick={() => handleLanguageSwitch('tr')}
                                className={mergeClasses(
                                    "text-xs tracking-wider transition-colors px-1",
                                    locale === 'tr' ? "text-gray-900 font-black" : "text-gray-400 font-medium hover:text-gray-600"
                                )}
                            >
                                TR
                            </button>
                            <span className="text-gray-200 text-[10px]">|</span>
                            <button 
                                onClick={() => handleLanguageSwitch('en')}
                                className={mergeClasses(
                                    "text-xs tracking-wider transition-colors px-1",
                                    locale === 'en' ? "text-gray-900 font-black" : "text-gray-400 font-medium hover:text-gray-600"
                                )}
                            >
                                EN
                            </button>
                        </div>

                        <div className="hidden md:block">
                            <PrimaryButton 
                                className="!px-4 !py-2 !text-sm"
                                onClick={() => window.location.href = '/contact'}
                            >
                                {t.cta}
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

                <div className="flex-1 overflow-y-auto py-10 px-6">
                    <nav className="flex flex-col gap-8">
                        <a 
                            href="/#what-we-automate" 
                            className="text-2xl font-bold text-gray-900"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.services}
                        </a>
                        <a 
                            href="/why-us" 
                            className="text-2xl font-bold text-gray-900"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.whyUs}
                        </a>
                        <a 
                            href="/contact" 
                            className="text-2xl font-bold text-gray-900"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.contact}
                        </a>
                    </nav>

                    <div className="mt-12 pt-12 border-t border-gray-100">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Language</p>
                        <div className="flex gap-8">
                            <button 
                                onClick={() => handleLanguageSwitch('tr')}
                                className={mergeClasses(
                                    "text-lg font-bold transition-all",
                                    locale === 'tr' ? "text-black scale-110" : "text-gray-300"
                                )}
                            >
                                TR / Türkçe
                            </button>
                            <button 
                                onClick={() => handleLanguageSwitch('en')}
                                className={mergeClasses(
                                    "text-lg font-bold transition-all",
                                    locale === 'en' ? "text-black scale-110" : "text-gray-300"
                                )}
                            >
                                EN / English
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-100">
                    <PrimaryButton 
                        className="w-full !py-4 !text-base"
                        onClick={() => {
                            setIsMenuOpen(false);
                            window.location.href = '/contact';
                        }}
                    >
                        {t.cta}
                    </PrimaryButton>
                </div>
            </div>
        </header>
    );
}
