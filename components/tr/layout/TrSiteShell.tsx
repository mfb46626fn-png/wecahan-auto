import * as React from 'react';
import { SiteShell } from '../../shared/layout/SiteShell';
import { TrNavbar } from '../navigation/TrNavbar';
import { FooterTR } from '../navigation/FooterTR';

type TrSiteShellProps = React.PropsWithChildren<{
    className?: string;
    mainClassName?: string;
}>;

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
            {children}
        </SiteShell>
    );
}
