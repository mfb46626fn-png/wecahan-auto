import * as React from 'react';

type CheckboxInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    className?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export const CheckboxInput = React.forwardRef<HTMLInputElement, CheckboxInputProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                type="checkbox"
                className={mergeClasses(
                    'h-5 w-5 rounded border-gray-300 bg-white',
                    'text-gray-900',
                    'focus:ring-2 focus:ring-gray-900 focus:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:opacity-50',
                    'transition duration-150 ease-in-out',
                    className,
                )}
                {...props}
            />
        );
    },
);

CheckboxInput.displayName = 'CheckboxInput';
