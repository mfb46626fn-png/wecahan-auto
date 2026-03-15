import * as React from 'react';
import { SiteShell } from '../../shared/layout/SiteShell';
import { CenterNavbar } from '../navigation/CenterNavbar';
import { FooterCenter } from '../navigation/FooterCenter';

type CenterSiteShellProps = React.PropsWithChildren<{
    className?: string;
    mainClassName?: string;
}>;

export function CenterSiteShell({
    children,
    className,
    mainClassName,
}: CenterSiteShellProps) {
    return (
        <SiteShell
            className={className}
            mainClassName={mainClassName}
            header={<CenterNavbar />}
            footer={<FooterCenter />}
        >
            {children}
        </SiteShell>
    );
}
