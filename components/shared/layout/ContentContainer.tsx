import * as React from 'react';

type ContentContainerProps = React.PropsWithChildren<{
    className?: string;
    size?: 'md' | 'lg' | 'xl';
}>;

const maxWidthMap: Record<NonNullable<ContentContainerProps['size']>, string> = {
    md: 'max-w-3xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function ContentContainer({
    children,
    className,
    size = 'lg',
}: ContentContainerProps) {
    return (
        <div
            className={mergeClasses(
                'mx-auto w-full px-4 sm:px-6 lg:px-8',
                maxWidthMap[size],
                className,
            )}
        >
            {children}
        </div>
    );
}
