import * as React from 'react';

type FieldHintProps = React.PropsWithChildren<{
    className?: string;
}>;

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function FieldHint({ children, className }: FieldHintProps) {
    return (
        <p
            className={mergeClasses(
                'mt-1.5 text-xs text-gray-500',
                className,
            )}
        >
            {children}
        </p>
    );
}
