import * as React from 'react';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { ContentContainer } from '../../shared/layout/ContentContainer';

type GlobalNavbarProps = {
    className?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function GlobalNavbar({ className }: GlobalNavbarProps) {
    return (
        <header
            className={mergeClasses(
                'w-full border-b border-gray-100 bg-white/80 backdrop-blur-md',
                className,
            )}
        >
            <ContentContainer size="xl">
                <nav className="flex h-20 items-center justify-between">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-xs">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight text-gray-900">
                            WeCaHan Auto
                        </span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Services
                        </a>
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Accounting Firms
                        </a>
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Pricing
                        </a>
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Use Cases
                        </a>
                    </div>

                    {/* CTA Area */}
                    <div className="flex items-center gap-4">
                        <PrimaryButton className="!px-5 !py-2.5 !text-sm">
                            Book a Discovery Call
                        </PrimaryButton>
                    </div>
                </nav>
            </ContentContainer>
        </header>
    );
}
