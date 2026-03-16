import { MetadataRoute } from 'next';

/**
 * Sitemap generator for the TR site family.
 * Centralizes all active Turkish routes to ensure search engine visibility
 * during the launch phase of tr.auto.wecahan.com.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const TR_BASE_URL = 'https://tr.auto.wecahan.com';
    const lastModified = new Date();

    return [
        {
            url: `${TR_BASE_URL}/`,
            lastModified,
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${TR_BASE_URL}/klinikler`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${TR_BASE_URL}/muhasebe-ofisleri`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${TR_BASE_URL}/paketler`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${TR_BASE_URL}/fiyatlandirma`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${TR_BASE_URL}/ornek-senaryolar`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${TR_BASE_URL}/iletisim`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
    ];
}
