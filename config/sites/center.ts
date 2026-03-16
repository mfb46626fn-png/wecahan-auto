import type { SiteConfig } from '../../types/site.ts';
import { getCenterLocale, type CenterLocale } from '../../lib/site/get-center-locale';
import { getCenterHomeContent } from '../../content/center/home';
import { getCenterWhyUsContent } from '../../content/center/why-us';
import { getCenterContactContent } from '../../content/center/contact';

export const centerSiteConfig: SiteConfig = {
    family: 'center',
    label: 'Center',
    brand: {
        name: 'WeCaHan Automation',
        legalName: 'WeCaHan',
    },
    locale: {
        language: 'en',
        region: 'global',
        htmlLang: 'en',
    },
    domains: {
        primary: 'auto.wecahan.com',
        matches: [
            {
                value: 'auto.wecahan.com',
                mode: 'exact',
            },
        ],
    },
};

/**
 * Center-specific page keys for content resolution.
 */
export type CenterPageKey = 'home' | 'why-us' | 'contact';

/**
 * Resolves the active locale for the Center site, 
 * using a manual override if provided, or falling back to the resolver.
 */
export async function resolveCenterLocaleForConfig(manualLocale?: string): Promise<CenterLocale> {
    return await getCenterLocale(manualLocale);
}

/**
 * Unified entry point for fetching locale-aware Center page content.
 */
export async function getCenterPageContent(pageKey: CenterPageKey, manualLocale?: string) {
    const locale = await resolveCenterLocaleForConfig(manualLocale);

    switch (pageKey) {
        case 'home':
            return getCenterHomeContent(locale);
        case 'why-us':
            return getCenterWhyUsContent(locale);
        case 'contact':
            return getCenterContactContent(locale);
        default:
            return getCenterHomeContent(locale);
    }
}