import * as React from 'react';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import { getCenterLocale } from '../../../lib/site/get-center-locale';

type FooterCenterProps = {
    className?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

const translations = {
    tr: {
        description: "Operasyonel netlik ve sistem disiplini ile hizmet işletmelerinizi otonom yapılara dönüştürüyoruz. Sürdürülebilir büyüme için mantık odaklı çözümler.",
        sections: {
            navigation: {
                title: "Navigasyon",
                links: [
                    { label: "Ana Sayfa", href: "/" },
                    { label: "Neden Biz?", href: "/why-us" },
                    { label: "İletişim", href: "/contact" }
                ]
            },
            legal: {
                title: "Kurumsal",
                links: [
                    { label: "Gizlilik Politikası", href: "#" }
                ]
            }
        },
        copyrightLabel: "WeCaHan Auto. Tüm hakları saklıdır."
    },
    en: {
        description: "We transform service businesses into autonomous structures through operational clarity and system discipline. Logic-led solutions for sustainable growth.",
        sections: {
            navigation: {
                title: "Navigation",
                links: [
                    { label: "Home", href: "/" },
                    { label: "Why Us", href: "/why-us" },
                    { label: "Contact", href: "/contact" }
                ]
            },
            legal: {
                title: "Corporate",
                links: [
                    { label: "Privacy Policy", href: "#" }
                ]
            }
        },
        copyrightLabel: "WeCaHan Auto. All rights reserved."
    }
};

export async function FooterCenter({ className }: FooterCenterProps) {
    const locale = await getCenterLocale();
    const t = translations[locale] || translations.en;
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className={mergeClasses(
                'w-full border-t border-slate-200 bg-white py-12 md:py-16',
                className,
            )}
        >
            <ContentContainer size="xl">
                <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
                    {/* Brand & Mission Area */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-sm">
                                W
                            </div>
                            <span className="text-xl font-bold tracking-tight text-slate-900">
                                WeCaHan <span className="text-indigo-600">Auto</span>
                            </span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                            {t.description}
                        </p>
                    </div>

                    {/* Navigation Area */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                            {t.sections.navigation.title}
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {t.sections.navigation.links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="text-sm text-slate-600 transition-colors hover:text-indigo-600">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Area */}
                    <div>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                            {t.sections.legal.title}
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {t.sections.legal.links.map((link, idx) => (
                                <li key={idx}>
                                    <a href={link.href} className="text-sm text-slate-600 transition-colors hover:text-indigo-600">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-100 pt-8 sm:flex-row gap-4">
                    <p className="text-xs text-slate-400 font-medium">
                        &copy; {currentYear} {t.copyrightLabel}
                    </p>
                </div>
            </ContentContainer>
        </footer>
    );
}
