import { DEFAULT_SITE_FAMILY, SITE_CONFIGS } from '../../config/routing/site-family-map';
import type { SiteFamily, SiteHostMatcher } from '../../types/site';

/**
 * Normalizes hostname by removing port and converting to lowercase
 */
function normalizeHostname(hostname: string): string {
    return hostname.split(':')[0].trim().toLowerCase();
}

function matchesHostname(hostname: string, matcher: SiteHostMatcher): boolean {
    const normalizedMatcherValue = matcher.value.trim().toLowerCase();

    if (!hostname || !normalizedMatcherValue) {
        return false;
    }

    if (matcher.mode === 'exact') {
        return hostname === normalizedMatcherValue;
    }

    if (matcher.mode === 'subdomain') {
        return hostname.endsWith(`.${normalizedMatcherValue}`);
    }

    return false;
}

export function detectSiteFamily(hostname: string): SiteFamily {
    const cleanHostname = normalizeHostname(hostname);

    if (!cleanHostname) {
        return DEFAULT_SITE_FAMILY;
    }

    // Local development support
    if (cleanHostname === 'tr.localhost') return 'tr';
    if (cleanHostname === 'global.localhost') return 'global';
    if (cleanHostname === 'localhost') return 'center';

    // Production matching
    const matchedSite = SITE_CONFIGS.find((siteConfig) =>
        siteConfig.domains.matches.some((matcher) =>
            matchesHostname(cleanHostname, matcher),
        ),
    );

    return matchedSite?.family ?? DEFAULT_SITE_FAMILY;
}