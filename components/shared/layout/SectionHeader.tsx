import * as React from 'react';
import { SectionEyebrow } from '../typography/SectionEyebrow';
import { SectionTitle } from '../typography/SectionTitle';
import { SectionDescription } from '../typography/SectionDescription';

type SectionHeaderProps = {
    className?: string;
    eyebrow?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    align?: 'left' | 'center';
    maxWidth?: 'sm' | 'md' | 'lg';
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(' ');
}

export function SectionHeader({
    className,
    eyebrow,
    title,
    description,
    align = 'left',
    maxWidth = 'md',
}: SectionHeaderProps) {
    if (!eyebrow && !title && !description) return null;

    const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
    const flexAlignClass = align === 'center' ? 'items-center' : 'items-start';

    return (
        <div
            className={mergeClasses(
                'flex flex-col',
                flexAlignClass,
                alignClass,
                className,
            )}
        >
            {eyebrow && <SectionEyebrow className="mb-3">{eyebrow}</SectionEyebrow>}
            
            {title && (
                <SectionTitle size="md">
                    {title}
                </SectionTitle>
            )}
            
            {description && (
                <SectionDescription maxWidth={maxWidth} className="mt-4">
                    {description}
                </SectionDescription>
            )}
        </div>
    );
}
