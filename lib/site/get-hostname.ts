import { headers } from 'next/headers';

function normalizeHostname(value: string | null | undefined): string {
    if (!value) return '';

    const firstValue = value.split(',')[0]?.trim() ?? '';
    const hostnameOnly = firstValue.split(':')[0]?.trim() ?? '';

    return hostnameOnly.toLowerCase();
}

export async function getHostname(): Promise<string> {
    const headerStore = await headers();

    const forwardedHost = headerStore.get('x-forwarded-host');
    const host = headerStore.get('host');

    return normalizeHostname(forwardedHost ?? host);
}