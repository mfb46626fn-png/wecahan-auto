import { cookies, headers } from 'next/headers';

export type CenterLocale = 'tr' | 'en';

const DEFAULT_LOCALE: CenterLocale = 'en';
const SUPPORTED_LOCALES: CenterLocale[] = ['tr', 'en'];

function isValidLocale(locale: string | null | undefined): locale is CenterLocale {
    return !!locale && SUPPORTED_LOCALES.includes(locale as CenterLocale);
}

/**
 * Resolves the locale for the Center Site Family.
 * 
 * Priority:
 * 1. manualLocale: Explicit override from a consumer.
 * 2. NEXT_LOCALE cookie: Saved user preference.
 * 3. accept-language header: Browser language detection.
 * 4. DEFAULT_LOCALE: Fallback to English (en).
 */
export async function getCenterLocale(manualLocale?: string): Promise<CenterLocale> {
    // 1. Explicit Manual Override
    if (isValidLocale(manualLocale)) {
        return manualLocale;
    }

    // 2. Cookie Preference (NEXT_LOCALE is standard for Next.js i18n)
    try {
        const cookieStore = await cookies();
        const savedLocale = cookieStore.get('NEXT_LOCALE')?.value;
        if (isValidLocale(savedLocale)) {
            return savedLocale;
        }
    } catch {
        // Fallback for non-request contexts if any
    }

    // 3. Browser Language (Accept-Language)
    try {
        const headerStore = await headers();
        const acceptLanguage = headerStore.get('accept-language');
        
        if (acceptLanguage) {
            // e.g., "en-US,en;q=0.9,tr;q=0.8" -> take first 2 chars
            const preferred = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase();
            if (isValidLocale(preferred)) {
                return preferred;
            }
        }
    } catch {
        // Fallback for non-request contexts
    }

    // 4. Global Fallback
    return DEFAULT_LOCALE;
}
