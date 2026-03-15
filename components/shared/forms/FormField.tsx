import * as React from 'react';
import { FieldLabel } from './FieldLabel';
import { FieldHint } from './FieldHint';
import { FieldError } from './FieldError';

type FormFieldProps = React.PropsWithChildren<{
    className?: string;
    label?: string;
    htmlFor?: string;
    required?: boolean;
    hint?: string;
    error?: string;
}>;

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function FormField({
    children,
    className,
    label,
    htmlFor,
    required,
    hint,
    error,
}: FormFieldProps) {
    return (
        <div className={mergeClasses('flex flex-col', className)}>
            {label && (
                <FieldLabel htmlFor={htmlFor} required={required} className="mb-2">
                    {label}
                </FieldLabel>
            )}
            
            {children}
            
            {hint && !error && <FieldHint>{hint}</FieldHint>}
            {error && <FieldError>{error}</FieldError>}
        </div>
    );
}
