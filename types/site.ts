export const SITE_FAMILIES = ['center', 'tr', 'global'] as const;

export type SiteFamily = (typeof SITE_FAMILIES)[number];

export type SiteHostMatchMode = 'exact' | 'subdomain';

export interface SiteHostMatcher {
    value: string;
    mode: SiteHostMatchMode;
}

export interface SiteBrand {
    name: string;
    legalName?: string;
}

export interface SiteLocale {
    language: string;
    region: string;
    htmlLang: string;
}

export interface SiteDomains {
    primary: string;
    matches: SiteHostMatcher[];
}

export interface SiteConfig {
    family: SiteFamily;
    label: string;
    brand: SiteBrand;
    locale: SiteLocale;
    domains: SiteDomains;
}
