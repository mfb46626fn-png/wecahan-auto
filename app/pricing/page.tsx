import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHostname } from '../../lib/site/get-hostname';
import { detectSiteFamily } from '../../lib/site/detect-site-family';
import { GlobalSiteShell } from '../../components/global/layout/GlobalSiteShell';
import { globalPricingContent } from '../../content/global/pricing';

// Blocks
import { 
    GlobalPricingHeroBlock,
    GlobalPricingModelOverviewBlock,
    GlobalPricingAnalysisBlock,
    GlobalPricingSetupBandsBlock,
    GlobalPricingMaintenanceBandsBlock,
    GlobalPricingAdditionalDevelopmentBlock,
    GlobalPricingFactorsBlock,
    GlobalPricingScopeComparisonsBlock,
    GlobalPricingFaqBlock,
    GlobalPricingFinalCtaBlock
} from '../../components/global/blocks/pricing/GlobalPricingBlocks';

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== 'global') {
        return {};
    }

    const { seo } = globalPricingContent;
    
    return {
        title: seo.title,
        description: seo.description,
    };
}

export default async function PricingPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // Only allow access if the site family is global
    if (siteFamily !== 'global') {
        notFound();
    }

    const content = globalPricingContent;

    return (
        <GlobalSiteShell>
            {/* 1. Hero */}
            <GlobalPricingHeroBlock content={content.hero} />
            
            {/* 2. Model Overview */}
            <GlobalPricingModelOverviewBlock content={content.modelOverview} />
            
            {/* 3. Workflow Review / Analysis */}
            <GlobalPricingAnalysisBlock content={content.analysisPricing} />
            
            {/* 4. Setup Bands */}
            <GlobalPricingSetupBandsBlock content={content.setupPricing} />
            
            {/* 5. Maintenance Bands */}
            <GlobalPricingMaintenanceBandsBlock content={content.maintenancePricing} />
            
            {/* 6. Additional Development */}
            <GlobalPricingAdditionalDevelopmentBlock content={content.additionalDevelopment} />
            
            {/* 7. Price Factors */}
            <GlobalPricingFactorsBlock content={content.priceFactors} />
            
            {/* 8. Scope Comparisons */}
            <GlobalPricingScopeComparisonsBlock content={content.scopeComparisons} />
            
            {/* 9. Pricing FAQ */}
            <GlobalPricingFaqBlock content={content.faq} />
            
            {/* 10. Final CTA */}
            <GlobalPricingFinalCtaBlock content={content.cta} />
        </GlobalSiteShell>
    );
}
