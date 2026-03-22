import * as React from 'react';
import Link from 'next/link';
import { Logo } from '../../shared/ui/Logo';
import { BrandingSignature } from '../../shared/ui/BrandingSignature';
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
        description: "İşletmeler için net, sürdürülebilir ve düşük sürtünmeli operasyon yapıları tasarlıyoruz. Sistemsel disiplin ve süreç mantığı ile ölçeklenebilir bir gelecek.",
        sections: {
            navigation: {
                title: "Navigasyon",
                links: [
                    { label: "Neden Biz?", href: "/why-us" },
                    { label: "İletişim", href: "/contact" }
                ]
            },
            legal: {
                title: "Kurumsal",
                links: [
                    { label: "Gizlilik Politikası", href: "/privacy" },
                    { label: "Kullanım Şartları", href: "/terms" }
                ]
            }
        },
        copyrightLabel: "WeCaHan Auto. Tüm hakları saklıdır."
    },
    en: {
        description: "We design clear, sustainable, and low-friction operational structures for businesses. A scalable future through systematic discipline and process logic.",
        sections: {
            navigation: {
                title: "Navigation",
                links: [
                    { label: "Why Us", href: "/why-us" },
                    { label: "Contact", href: "/contact" }
                ]
            },
            legal: {
                title: "Corporate",
                links: [
                    { label: "Privacy Policy", href: "/privacy" },
                    { label: "Terms of Service", href: "/terms" }
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
                'w-full border-t border-slate-100 bg-white py-16 md:py-24',
                className,
            )}
        >
            <ContentContainer size="xl">
                <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
                    {/* Brand Area */}
                    <div className="md:col-span-2">
                        <div className="mb-6">
                            <Logo variant="footer" />
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-slate-500 font-medium">
                            {t.description}
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                            {t.sections.navigation.title}
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {t.sections.navigation.links.map((link, idx) => (
                                <li key={idx}>
                                    <Link 
                                        href={link.href} 
                                        className="text-sm font-semibold text-slate-600 transition-colors hover:text-black"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                            {t.sections.legal.title}
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {t.sections.legal.links.map((link, idx) => (
                                <li key={idx}>
                                    <Link 
                                        href={link.href} 
                                        className="text-sm font-semibold text-slate-600 transition-colors hover:text-black"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright Line */}
                <div className="mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">
                        &copy; {currentYear} {t.copyrightLabel}
                    </p>
                    <BrandingSignature />
                </div>
            </ContentContainer>
        </footer>
    );
}
