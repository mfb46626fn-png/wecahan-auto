import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { TRPricingHeroBlock } from "../../components/blocks/tr/TRPricingHeroBlock";
import { TRPricingModelOverviewBlock } from "../../components/blocks/tr/TRPricingModelOverviewBlock";
import { TRPricingAnalysisBlock } from "../../components/blocks/tr/TRPricingAnalysisBlock";
import { TRPricingSetupPackagesBlock } from "../../components/blocks/tr/TRPricingSetupPackagesBlock";
import { TRPricingMaintenancePlansBlock } from "../../components/blocks/tr/TRPricingMaintenancePlansBlock";
import { TRPricingIncludedScopeBlock } from "../../components/blocks/tr/TRPricingIncludedScopeBlock";
import { TRPricingWhatAffectsPriceBlock } from "../../components/blocks/tr/TRPricingWhatAffectsPriceBlock";
import { TRPricingAdditionalDevelopmentBlock } from "../../components/blocks/tr/TRPricingAdditionalDevelopmentBlock";
import { TRPricingWhoThisIsForBlock } from "../../components/blocks/tr/TRPricingWhoThisIsForBlock";
import { TRPricingFaqBlock } from "../../components/blocks/tr/TRPricingFaqBlock";
import { TRPricingContactCtaBlock } from "../../components/blocks/tr/TRPricingContactCtaBlock";
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
