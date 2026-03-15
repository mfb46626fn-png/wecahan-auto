import type { SiteConfig } from '../../types/site.ts';

export const globalSiteConfig: SiteConfig = {
    family: 'global',
    label: 'Global',
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
        primary: 'global.auto.wecahan.com',
        matches: [
            {
                value: 'global.auto.wecahan.com',
                mode: 'exact',
            },
        ],
    },
};