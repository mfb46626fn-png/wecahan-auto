import * as React from 'react';
import { PrimaryButton } from '../../shared/ui/PrimaryButton';
import { ContentContainer } from '../../shared/layout/ContentContainer';

type CenterNavbarProps = {
    className?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function CenterNavbar({ className }: CenterNavbarProps) {
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
                            WeCaHan
                        </span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Hizmetlerimiz
                        </a>
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            Neden Biz?
                        </a>
                        <a href="#" className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            İletişim
                        </a>
                    </div>

                    {/* CTA Area */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <span className="text-sm font-medium text-gray-400">TR / EN</span>
                        </div>
                        <PrimaryButton className="!px-4 !py-2 !text-sm">
                            Hemen Başla
                        </PrimaryButton>
                    </div>
                </nav>
            </ContentContainer>
        </header>
    );
}
