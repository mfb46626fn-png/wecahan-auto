import type { SiteConfig } from '../../types/site.ts';

export const trSiteConfig: SiteConfig = {
    family: 'tr',
    label: 'TR',
    brand: {
        name: 'WeCaHan Automation',
        legalName: 'WeCaHan',
    },
    locale: {
        language: 'tr',
        region: 'TR',
        htmlLang: 'tr',
    },
    domains: {
        primary: 'tr.auto.wecahan.com',
        matches: [
            {
                value: 'tr.auto.wecahan.com',
                mode: 'exact',
            },
        ],
    },
};