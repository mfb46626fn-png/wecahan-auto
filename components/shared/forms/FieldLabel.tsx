import * as React from 'react';

type FieldLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    className?: string;
    required?: boolean;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function FieldLabel({
    children,
    className,
    required = false,
    ...props
}: FieldLabelProps) {
    return (
        <label
            className={mergeClasses(
                'block text-sm font-medium text-gray-700',
                className,
            )}
            {...props}
        >
            {children}
            {required && (
                <span className="ml-0.5 text-red-500" aria-hidden="true">
                    *
                </span>
            )}
        </label>
    );
}
