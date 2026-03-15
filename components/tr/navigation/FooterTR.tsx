import * as React from 'react';
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
                'w-full border-t border-gray-200 bg-white py-12 md:py-16',
                className,
            )}
        >
            <ContentContainer size="xl">
                <div className="grid gap-8 md:grid-cols-4 lg:gap-12">
                    {/* Brand & Mission Area */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                                W
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900">
                                WeCaHan
                            </span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                            Sağlık ve finans profesyonelleri için operasyonel mükemmellik.
                            Klinik ve ofislerinizi kendi kendine yeten sistemlere dönüştürüyoruz.
                        </p>
                    </div>

                    {/* Navigation Links Area */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Hizmetler
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Klinik Otomasyonu
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Muhasebe Ofisleri
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Örnek Senaryolar
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Paketler & Fiyatlar
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Legal Area */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                            İletişim
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Ücretsiz Analiz
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Kullanım Şartları
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Gizlilik Politikası
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-100 pt-8 sm:flex-row gap-4">
                    <p className="text-sm text-gray-400">
                        &copy; {currentYear} WeCaHan Auto. Tüm hakları saklıdır.
                    </p>
                </div>
            </ContentContainer>
        </footer>
    );
}
