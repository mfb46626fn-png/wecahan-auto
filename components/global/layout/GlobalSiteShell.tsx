import * as React from 'react';
import { SiteShell } from '../../shared/layout/SiteShell';
import { GlobalNavbar } from '../navigation/GlobalNavbar';
import { FooterGlobal } from '../navigation/FooterGlobal';

type GlobalSiteShellProps = React.PropsWithChildren<{
    className?: string;
    mainClassName?: string;
}>;

export function GlobalSiteShell({
    children,
    className,
    mainClassName,
}: GlobalSiteShellProps) {
    return (
        <SiteShell
            className={className}
            mainClassName={mainClassName}
            header={<GlobalNavbar />}
            footer={<FooterGlobal />}
        >
            {children}
        </SiteShell>
    );
}
