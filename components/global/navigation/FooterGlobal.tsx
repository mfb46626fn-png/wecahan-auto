import * as React from 'react';
import { ContentContainer } from '../../shared/layout/ContentContainer';
import Link from 'next/link';

type FooterGlobalProps = {
    className?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function FooterGlobal({ className }: FooterGlobalProps) {
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
                    <div className="md:col-span-1 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white font-bold text-sm shadow-xl shadow-black/10 group-hover:scale-105 transition-transform duration-500">
                                W
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-neutral-900">
                                WeCaHan
                            </span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-neutral-500 font-medium">
                            Operational automation for accounting firms. We reduce admin drag through structured workflow systems and specialized implementation logic.
                        </p>
                    </div>

                    {/* Main Navigation Area */}
                    <div>
                        <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
                            Main
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/" className="text-[13px] font-bold text-neutral-600 transition-colors hover:text-neutral-900">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/accounting-firms" className="text-[13px] font-bold text-neutral-600 transition-colors hover:text-neutral-900">
                                    Accounting Firms
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-[13px] font-bold text-neutral-600 transition-colors hover:text-neutral-900">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-[13px] font-bold text-neutral-600 transition-colors hover:text-neutral-900">
                                    Pricing Model
                                </Link>
                            </li>
                            <li>
                                <Link href="/why-us" className="text-[13px] font-bold text-neutral-600 transition-colors hover:text-neutral-900">
                                    Why Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Explore & Legal Area */}
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-1">
                        <div>
                            <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
                                Explore
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link href="/use-cases" className="text-[13px] font-bold text-neutral-600 transition-colors hover:text-neutral-900">
                                        Use Cases
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-[13px] font-bold text-neutral-600 transition-colors hover:text-neutral-900">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/book-a-call" className="text-[13px] font-bold text-neutral-600 transition-colors hover:text-neutral-900">
                                        Book a Call
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
                                Legal
                            </h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link href="/privacy" className="text-[13px] font-bold text-neutral-600 transition-colors hover:text-neutral-900">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-[13px] font-bold text-neutral-600 transition-colors hover:text-neutral-900">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright section match TR */}
                <div className="mt-20 flex flex-col items-center justify-between border-t border-neutral-100 pt-10 sm:flex-row gap-6">
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                        &copy; {currentYear} WeCaHan Auto. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[9px] font-black text-neutral-400 uppercase tracking-[0.2em]">
                            Global Operational Analysis
                        </span>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    );
}
