import * as React from 'react';
import { SiteShell } from '../../shared/layout/SiteShell';
import { TrNavbar } from '../navigation/TrNavbar';
import { FooterTR } from '../navigation/FooterTR';

type TrSiteShellProps = React.PropsWithChildren<{
    className?: string;
    mainClassName?: string;
}>;

/**
 * TR-specific site shell that provides the standardized navigation and footer 
 * for the Turkish site family. It ensures consistency across all sales, 
 * solutions, and contact pages.
 */
export function TrSiteShell({
    children,
    className,
    mainClassName,
}: TrSiteShellProps) {
    return (
        <SiteShell
            className={className}
            mainClassName={mainClassName}
            header={<TrNavbar />}
            footer={<FooterTR />}
        >
            {/* 
              Standardized content area for TR host. 
              All blocks (Hero, Features, etc.) are rendered as children here.
            */}
            {children}
        </SiteShell>
    );
}
