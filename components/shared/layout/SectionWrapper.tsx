import * as React from 'react';

type SectionWrapperProps = React.PropsWithChildren<{
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}>;

const spacingMap: Record<NonNullable<SectionWrapperProps['size']>, string> = {
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function SectionWrapper({
    children,
    className,
    size = 'md',
}: SectionWrapperProps) {
    return (
        <section
            className={mergeClasses(
                'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
                spacingMap[size],
                className,
            )}
        >
            {children}
        </section>
    );
}
