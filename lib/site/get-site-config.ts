import { SITE_CONFIG_BY_FAMILY } from '../../config/routing/site-family-map';
import type { SiteConfig, SiteFamily } from '../../types/site';
import { detectSiteFamily } from '../../lib/site/detect-site-family';

export function getSiteConfigByFamily(family: SiteFamily): SiteConfig {
    return SITE_CONFIG_BY_FAMILY[family];
}

export function getSiteConfig(hostname: string): SiteConfig {
    const family = detectSiteFamily(hostname);

    return getSiteConfigByFamily(family);
}