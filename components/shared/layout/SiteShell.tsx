import * as React from 'react';

type SiteShellProps = React.PropsWithChildren<{
    className?: string;
    mainClassName?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}>;

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function SiteShell({
    children,
    className,
    mainClassName,
    header,
    footer,
}: SiteShellProps) {
    return (
        <div className={mergeClasses('flex min-h-screen flex-col bg-slate-50', className)}>
            {header && <header className="sticky top-0 z-50 w-full">{header}</header>}
            
            <main className={mergeClasses('flex-1', mainClassName)}>
                {children}
            </main>
            
            {footer && <footer className="w-full">{footer}</footer>}
        </div>
    );
}
