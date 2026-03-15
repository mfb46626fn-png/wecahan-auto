import * as React from 'react';

type SectionDescriptionProps = React.PropsWithChildren<{
    className?: string;
    maxWidth?: 'sm' | 'md' | 'lg';
}>;

const maxWidthMap: Record<NonNullable<SectionDescriptionProps['maxWidth']>, string> = {
    sm: 'max-w-lg',
    md: 'max-w-2xl',
    lg: 'max-w-3xl',
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function SectionDescription({
    children,
    className,
    maxWidth = 'md',
}: SectionDescriptionProps) {
    return (
        <p
            className={mergeClasses(
                'text-base leading-relaxed text-gray-600 md:text-lg',
                maxWidthMap[maxWidth],
                className,
            )}
        >
            {children}
        </p>
    );
}
