import * as React from 'react';

type SectionTitleProps = React.PropsWithChildren<{
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}>;

const sizeMap: Record<NonNullable<SectionTitleProps['size']>, string> = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function SectionTitle({
    children,
    className,
    size = 'md',
}: SectionTitleProps) {
    return (
        <h2
            className={mergeClasses(
                'font-bold leading-tight tracking-tight text-gray-900',
                sizeMap[size],
                className,
            )}
        >
            {children}
        </h2>
    );
}
