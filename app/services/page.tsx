import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHostname } from '../../lib/site/get-hostname';
import { detectSiteFamily } from '../../lib/site/detect-site-family';
import { GlobalSiteShell } from '../../components/global/layout/GlobalSiteShell';
import { globalServicesContent } from '../../content/global/services';

// Blocks
import { 
    GlobalServicesPageHeroBlock,
    GlobalServicesPageMeaningBlock,
    GlobalServicesPageCoreCategoriesBlock,
    GlobalServicesPagePrimaryFocusBlock,
    GlobalServicesPageExtendedServicesBlock,
    GlobalServicesPageDeliveryModelBlock,
    GlobalServicesPageUseCaseBridgeBlock,
    GlobalServicesPagePricingBridgeBlock,
    GlobalServicesPageFitBlock,
    GlobalServicesPageFinalCtaBlock
} from '../../components/global/blocks/services/GlobalServicesPageBlocks';

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== 'global') {
        return {};
    }

    const { seo } = globalServicesContent;
    
    return {
        title: seo.title,
        description: seo.description,
    };
}

export default async function ServicesPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // Only allow access if the site family is global
    if (siteFamily !== 'global') {
        notFound();
    }

    const content = globalServicesContent;

    return (
        <GlobalSiteShell>
            {/* 1. Hero */}
            <GlobalServicesPageHeroBlock content={content.hero} />
            
            {/* 2. What This Page Means */}
            <GlobalServicesPageMeaningBlock content={content.pageMeaning} />
            
            {/* 3. Core Service Categories */}
            <GlobalServicesPageCoreCategoriesBlock content={content.coreCategories} />
            
            {/* 4. Accounting Firms as Primary Focus */}
            <GlobalServicesPagePrimaryFocusBlock content={content.primaryFocus} />
            
            {/* 5. Extended Operational Services */}
            <GlobalServicesPageExtendedServicesBlock content={content.extendedServices} />
            
            {/* 6. Delivery Model Across Services */}
            <GlobalServicesPageDeliveryModelBlock content={content.deliveryModel} />
            
            {/* 7. Use-Case Bridge */}
            <GlobalServicesPageUseCaseBridgeBlock content={content.useCaseBridge} />
            
            {/* 8. Pricing / Scope Bridge */}
            <GlobalServicesPagePricingBridgeBlock content={content.pricingBridge} />
            
            {/* 9. Fit / Not Fit */}
            <GlobalServicesPageFitBlock content={content.fit} />
            
            {/* 10. Final CTA */}
            <GlobalServicesPageFinalCtaBlock content={content.cta} />
        </GlobalSiteShell>
    );
}
