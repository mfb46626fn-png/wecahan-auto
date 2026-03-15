import * as React from 'react';

type PrimaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    fullWidth?: boolean;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export const PrimaryButton = React.forwardRef<HTMLButtonElement, PrimaryButtonProps>(
    ({ className, fullWidth = false, type = 'button', disabled, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled}
                className={mergeClasses(
                    'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-tight',
                    'bg-black text-white transition-opacity duration-200',
                    'hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black/20 focus:ring-offset-2',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    fullWidth && 'w-full',
                    className,
                )}
                {...props}
            >
                {children}
            </button>
        );
    },
);

PrimaryButton.displayName = 'PrimaryButton';