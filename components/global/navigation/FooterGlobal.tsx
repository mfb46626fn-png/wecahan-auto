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
                'w-full border-t border-gray-100 bg-white py-16 md:py-24',
                className,
            )}
        >
            <ContentContainer size="xl">
                <div className="grid gap-12 md:grid-cols-4 lg:gap-16">
                    {/* Brand & Mission Area */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                                W
                            </div>
                            <span className="text-xl font-bold tracking-tight text-gray-900">
                                WeCaHan Auto
                            </span>
                        </Link>
                        <p className="max-w-sm text-base leading-relaxed text-gray-500">
                            Operational automation for accounting firms. We reduce admin drag through structured workflow systems, scoped implementation, and ongoing system refinement.
                        </p>
                    </div>

                    {/* Solutions & Navigation Area */}
                    <div>
                        <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-gray-900">
                            Solutions
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/accounting-firms" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                    Accounting Firms
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/use-cases" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                    Use Cases
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                    Investment Model
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Next Steps & Support Area */}
                    <div>
                        <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-gray-900">
                            Establish Context
                        </h3>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href="/book-a-call" className="text-sm font-bold text-neutral-900 border-b-2 border-neutral-100 pb-1 transition-colors hover:border-neutral-900">
                                    Book Discovery Call
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                    Direct Inquiry
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-50 pt-10 sm:flex-row gap-6">
                    <p className="text-sm font-medium text-gray-400">
                        &copy; {currentYear} WeCaHan Auto. Operational clarity for forward-thinking firms.
                    </p>
                </div>
            </ContentContainer>
        </footer>
    );
}
