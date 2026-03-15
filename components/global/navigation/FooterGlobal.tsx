import * as React from 'react';
import { ContentContainer } from '../../shared/layout/ContentContainer';

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
                                WeCaHan Auto
                            </span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-gray-500">
                            Autonomous operational systems for modern healthcare and financial practices.
                            We build self-sustaining infrastructures.
                        </p>
                    </div>

                    {/* Navigation Links Area */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Solutions
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Clinic Automation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Accounting Firms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Operational Services
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Use Cases
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Legal Area */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
                            Company
                        </h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Book a Call
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright */}
                <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-100 pt-8 sm:flex-row gap-4">
                    <p className="text-sm text-gray-400">
                        &copy; {currentYear} WeCaHan Auto. All rights reserved.
                    </p>
                </div>
            </ContentContainer>
        </footer>
    );
}
