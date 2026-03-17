import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { 
    TRPricingHeroBlock,
    TRPricingModelOverviewBlock,
    TRPricingAnalysisBlock,
    TRPricingSetupPackagesBlock,
    TRPricingMaintenancePlansBlock,
    TRPricingIncludedScopeBlock,
    TRPricingWhatAffectsPriceBlock,
    TRPricingAdditionalDevelopmentBlock,
    TRPricingWhoThisIsForBlock,
    TRPricingFaqBlock,
    TRPricingContactCtaBlock
} from "../../components/tr/blocks/pricing/TrPricingBlocks";

import { trPricingContent } from "../../content/tr/pricing";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getHostname } from "../../lib/site/get-hostname";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== "tr") {
        return {};
    }

    return {
        title: trPricingContent.seo.title,
        description: trPricingContent.seo.description,
    };
}

export default async function TRPricingPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // This route is only accessible on the Turkish site family
    if (siteFamily !== "tr") {
        notFound();
    }

    return (
        <TrSiteShell>
            <TRPricingHeroBlock />
            <TRPricingModelOverviewBlock />
            <TRPricingAnalysisBlock />
            <TRPricingSetupPackagesBlock />
            <TRPricingMaintenancePlansBlock />
            <TRPricingIncludedScopeBlock />
            <TRPricingWhatAffectsPriceBlock />
            <TRPricingAdditionalDevelopmentBlock />
            <TRPricingWhoThisIsForBlock />
            <TRPricingFaqBlock />
            <TRPricingContactCtaBlock />
        </TrSiteShell>
    );
}
