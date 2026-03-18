import * as React from 'react';
import Link from 'next/link';
import { ContentContainer } from '../../shared/layout/ContentContainer';

type FooterTRProps = {
    className?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function FooterTR({ className }: FooterTRProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className={mergeClasses(
                'w-full border-t border-gray-100 bg-white py-12 md:py-20',
                className,
            )}
        >
            <ContentContainer size="xl">
                <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
                    {/* Brand & Mission Area */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white font-bold text-sm shadow-xl shadow-black/10 group-hover:scale-105 transition-transform duration-500">
                                W
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-gray-900">
                                WeCaHan
                            </span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-gray-500 font-medium">
                            Sağlık ve finans profesyonelleri için operasyonel mükemmellik.
                            Klinik ve ofislerinizi kendi kendine yeten sistemlere dönüştürüyoruz.
                        </p>
                    </div>

                    {/* Navigation Links Area */}
                    <div>
                        <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                            Çözümler
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/klinikler" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Klinikler
                                </Link>
                            </li>
                            <li>
                                <Link href="/muhasebe-ofisleri" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Muhasebe Ofisleri
                                </Link>
                            </li>
                            <li>
                                <Link href="/paketler" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Paketler
                                </Link>
                            </li>
                            <li>
                                <Link href="/fiyatlandirma" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Fiyatlandırma
                                </Link>
                            </li>
                            <li>
                                <Link href="/ornek-senaryolar" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Örnek Senaryolar
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Transition Area */}
                    <div>
                        <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                            İletişim
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/iletisim" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Başvuru Formu
                                </Link>
                            </li>
                            <li>
                                <Link href="/iletisim#form" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Ücretsiz Analiz
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="https://wa.me/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900"
                                >
                                    WhatsApp Destek
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Area */}
                    <div>
                        <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                            Kurumsal
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/privacy" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Gizlilik Politikası
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Kullanım Şartları
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Location */}
                <div className="mt-20 flex flex-col items-center justify-between border-t border-gray-100 pt-10 sm:flex-row gap-6">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        &copy; {currentYear} WeCaHan Auto. Tüm hakları saklıdır.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            Türkiye Geneli Operasyon Analizi
                        </span>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    );
}
