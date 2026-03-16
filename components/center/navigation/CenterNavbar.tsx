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
                    <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 z-10">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            WeCaHan
                        </span>
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

                    {/* Mobile Menu Panel */}
                    <div className={mergeClasses(
                        "fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 gap-8",
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}>
                        <a href="/#what-we-automate" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-900 border-b border-gray-50 pb-4">
                            {t.services}
                        </a>
                        <a href="/why-us" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-900 border-b border-gray-50 pb-4">
                            {t.whyUs}
                        </a>
                        <a href="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-900 border-b border-gray-50 pb-4">
                            {t.contact}
                        </a>

                        {/* Language Switch - Mobile */}
                        <div className="flex items-center gap-4 mt-auto pb-8">
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
                            className="w-full py-4 text-base font-bold"
                            onClick={() => {
                                setIsMenuOpen(false);
                                window.location.href = '/contact';
                            }}
                        >
                            {t.cta}
                        </PrimaryButton>
                    </div>
                </nav>
            </ContentContainer>
        </header>
    );
}
