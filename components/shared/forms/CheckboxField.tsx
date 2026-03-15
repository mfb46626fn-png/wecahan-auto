import * as React from 'react';
import { CheckboxInput } from './CheckboxInput';
import { FieldLabel } from './FieldLabel';
import { FieldHint } from './FieldHint';
import { FieldError } from './FieldError';

type CheckboxFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    className?: string;
    label?: string;
    hint?: string;
    error?: string;
    containerClassName?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export const CheckboxField = React.forwardRef<HTMLInputElement, CheckboxFieldProps>(
    (
        {
            className,
            containerClassName,
            label,
            hint,
            error,
            id,
            required,
            ...props
        },
        ref,
    ) => {
        // Id is needed to link label and input. If not provided, we rely on the user to wrap it or provide one.
        // It's best practice to provide an ID.

        return (
            <div className={mergeClasses('flex items-start', containerClassName)}>
                <div className="flex h-6 items-center">
                    <CheckboxInput
                        ref={ref}
                        id={id}
                        required={required}
                        className={className}
                        {...props}
                    />
                </div>
                <div className="ml-3 text-sm leading-6">
                    {label && (
                        <FieldLabel htmlFor={id} required={required} className="!text-gray-900 cursor-pointer">
                            {label}
                        </FieldLabel>
                    )}
                    {hint && !error && <FieldHint className="!mt-0">{hint}</FieldHint>}
                    {error && <FieldError className="!mt-0">{error}</FieldError>}
                </div>
            </div>
        );
    },
);

CheckboxField.displayName = 'CheckboxField';
