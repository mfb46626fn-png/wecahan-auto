import * as React from 'react';

type FieldErrorProps = React.PropsWithChildren<{
    className?: string;
}>;

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function FieldError({ children, className }: FieldErrorProps) {
    if (!children) return null;

    return (
        <p
            className={mergeClasses(
                'mt-1.5 text-xs font-medium text-red-500',
                className,
            )}
        >
            {children}
        </p>
    );
}
