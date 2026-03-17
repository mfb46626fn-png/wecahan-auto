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
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white font-bold text-sm shadow-xl shadow-black/10 group-hover:scale-105 transition-transform duration-500">
                                W
                            </div>
                            <span className="text-2xl font-black tracking-tighter text-gray-900">
                                WeCaHan
                            </span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-gray-500 font-medium">
                            Operational automation for accounting firms. We reduce admin drag through structured workflow systems and specialized implementation.
                        </p>
                    </div>

                    {/* Solutions & Navigation Area */}
                    <div>
                        <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                            Solutions
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/accounting-firms" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Accounting Firms
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/use-cases" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Use Cases
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Investment Model
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Next Steps & Support Area */}
                    <div>
                        <h3 className="mb-6 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
                            Establish Context
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/book-a-call" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Book Discovery Call
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Direct Inquiry
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright section match TR */}
                <div className="mt-20 flex flex-col items-center justify-between border-t border-gray-100 pt-10 sm:flex-row gap-6">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        &copy; {currentYear} WeCaHan Auto. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            Global Operational Analysis
                        </span>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    );
}
