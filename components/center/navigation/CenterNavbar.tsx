"use client";

import * as React from 'react';
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

                    {/* CTA Area */}
                    <div className="flex items-center gap-6 z-10">
                        {/* Language Switch */}
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
                            className="!px-4 !py-2 !text-sm"
                            onClick={() => window.location.href = '/contact'}
                        >
                            {t.cta}
                        </PrimaryButton>
                    </div>
                </nav>
            </ContentContainer>
        </header>
    );
}
