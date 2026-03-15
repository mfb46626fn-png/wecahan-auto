import * as React from 'react';

type SecondaryButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    fullWidth?: boolean;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export const SecondaryButton = React.forwardRef<HTMLButtonElement, SecondaryButtonProps>(
    ({ className, fullWidth = false, type = 'button', disabled, children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                type={type}
                disabled={disabled}
                className={mergeClasses(
                    'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-tight',
                    'border border-black/15 bg-white text-black transition-colors duration-200',
                    'hover:bg-black/[0.03] focus:outline-none focus:ring-2 focus:ring-black/15 focus:ring-offset-2',
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

SecondaryButton.displayName = 'SecondaryButton';