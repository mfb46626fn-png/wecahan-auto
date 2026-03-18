import './globals.css'
import type { ReactNode } from 'react'
import { headers, cookies } from 'next/headers'
import { detectSiteFamily } from '../lib/site/detect-site-family'

function normalizeHostname(value: string | null | undefined): string {
    if (!value) return '';
    const firstValue = value.split(',')[0]?.trim() ?? '';
    return firstValue.split(':')[0]?.trim()?.toLowerCase() ?? '';
}

export default async function RootLayout({ children }: { children: ReactNode }) {
    const headerStore = await headers();
    const cookieStore = await cookies();
    
    const forwardedHost = headerStore.get('x-forwarded-host');
    const host = headerStore.get('host');
    const hostname = normalizeHostname(forwardedHost ?? host);
    
    const siteFamily = detectSiteFamily(hostname);
    
    // Determine language
    let lang = 'en';
    if (siteFamily === 'tr') {
        lang = 'tr';
    } else if (siteFamily === 'center') {
        const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;
        lang = localeCookie === 'tr' ? 'tr' : 'en';
    }

    return (
        <html lang={lang}>
            <body>{children}</body>
        </html>
    )
}