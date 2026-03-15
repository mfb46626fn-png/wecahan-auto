import * as React from 'react';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    ({ className, type = 'text', ...props }, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                className={mergeClasses(
                    'block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900',
                    'placeholder:text-gray-400',
                    'transition-colors duration-200',
                    'focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900',
                    'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
                    className,
                )}
                {...props}
            />
        );
    },
);

TextInput.displayName = 'TextInput';
