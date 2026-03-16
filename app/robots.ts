import { MetadataRoute } from 'next';

/**
 * Robots configuration for the TR site family.
 * Ensures tr.auto.wecahan.com is correctly indexable by search engines
 * while pointing to the centralized Turkish sitemap.
 */
export default function robots(): MetadataRoute.Robots {
    const TR_BASE_URL = 'https://tr.auto.wecahan.com';
    
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/', // Prevent indexing of API routes
        },
        sitemap: `${TR_BASE_URL}/sitemap.xml`,
    };
}
