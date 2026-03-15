import type { SiteConfig } from '../../types/site.ts';

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