import { twMerge } from 'tailwind-merge';

type CardBaseProps = React.PropsWithChildren<{
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}>;

const paddingMap: Record<NonNullable<CardBaseProps['size']>, string> = {
    sm: 'p-4',
    md: 'p-5 md:p-6',
    lg: 'p-6 md:p-8',
};

export function CardBase({
    children,
    className,
    size = 'md',
}: CardBaseProps) {
    return (
        <div
            className={twMerge(
                'rounded-2xl border border-gray-200 bg-white',
                paddingMap[size],
                className,
            )}
        >
            {children}
        </div>
    );
}
