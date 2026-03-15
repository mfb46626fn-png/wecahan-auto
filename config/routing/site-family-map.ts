import type { SiteConfig, SiteFamily } from '../../types/site';
import { centerSiteConfig } from '../sites/center';
import { trSiteConfig } from '../sites/tr';
import { globalSiteConfig } from '../sites/global';

export const DEFAULT_SITE_FAMILY: SiteFamily = 'center';

export const SITE_CONFIG_BY_FAMILY: Record<SiteFamily, SiteConfig> = {
    center: centerSiteConfig,
    tr: trSiteConfig,
    global: globalSiteConfig,
};

export const SITE_CONFIGS: SiteConfig[] = [
    SITE_CONFIG_BY_FAMILY.center,
    SITE_CONFIG_BY_FAMILY.tr,
    SITE_CONFIG_BY_FAMILY.global,
];