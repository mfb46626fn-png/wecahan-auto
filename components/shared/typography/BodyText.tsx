import * as React from 'react';

type BodyTextProps = React.PropsWithChildren<{
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}>;

const sizeMap: Record<NonNullable<BodyTextProps['size']>, string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function BodyText({
    children,
    className,
    size = 'md',
}: BodyTextProps) {
    return (
        <p
            className={mergeClasses(
                'leading-relaxed text-gray-600',
                sizeMap[size],
                className,
            )}
        >
            {children}
        </p>
    );
}
