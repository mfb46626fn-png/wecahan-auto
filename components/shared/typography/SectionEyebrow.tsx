import * as React from 'react';

type SectionEyebrowProps = React.PropsWithChildren<{
    className?: string;
}>;

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
    return (
        <p
            className={mergeClasses(
                'text-xs font-semibold uppercase tracking-widest text-gray-500',
                className,
            )}
        >
            {children}
        </p>
    );
}
