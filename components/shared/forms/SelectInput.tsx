import * as React from 'react';

type SelectInputProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    className?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export const SelectInput = React.forwardRef<HTMLSelectElement, SelectInputProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <select
                ref={ref}
                className={mergeClasses(
                    'block w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900',
                    'appearance-none',
                    'bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7280%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E")]',
                    'bg-[length:1.25rem_1.25rem] bg-[position:right_1rem_center] bg-no-repeat',
                    'transition-colors duration-200',
                    'focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900',
                    'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
                    className,
                )}
                {...props}
            >
                {children}
            </select>
        );
    },
);

SelectInput.displayName = 'SelectInput';
