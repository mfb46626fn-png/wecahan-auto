import * as React from 'react';

type SectionWrapperProps = React.ComponentPropsWithoutRef<'section'> & {
    size?: 'sm' | 'md' | 'lg';
};


const spacingMap: Record<NonNullable<SectionWrapperProps['size']>, string> = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-20',
    lg: 'py-20 md:py-28',
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function SectionWrapper({
    children,
    className,
    size = 'md',
    ...props
}: SectionWrapperProps) {
    return (
        <section
            {...props}
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
