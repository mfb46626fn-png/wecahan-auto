import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { 
    TRPackagesHeroBlock,
    TRPackagesServiceModelOverviewBlock,
    TRPackagesAutomationAnalysisBlock,
    TRPackagesSetupPackagesBlock,
    TRPackagesMaintenancePackagesBlock,
    TRPackagesAdditionalDevelopmentBlock,
    TRPackagesIncludedScopeBlock,
    TRPackagesNotIncludedBlock,
    TRPackagesDeliverablesAndClientContributionBlock,
    TRPackagesFitCheckBlock,
    TRPackagesContactCtaBlock
} from "../../components/tr/blocks/packages/TRPackagesBlocks";

import { trPackagesContent } from "../../content/tr/packages";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getHostname } from "../../lib/site/get-hostname";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== "tr") {
        return {};
    }

    return {
        title: trPackagesContent.seo.title,
        description: trPackagesContent.seo.description,
    };
}

export default async function TRPackagesPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // This route is only accessible on the Turkish site family
    if (siteFamily !== "tr") {
        notFound();
    }

    return (
        <TrSiteShell>
            <TRPackagesHeroBlock />
            <TRPackagesServiceModelOverviewBlock />
            <TRPackagesAutomationAnalysisBlock />
            <TRPackagesSetupPackagesBlock />
            <TRPackagesMaintenancePackagesBlock />
            <TRPackagesAdditionalDevelopmentBlock />
            <TRPackagesIncludedScopeBlock />
            <TRPackagesNotIncludedBlock />
            <TRPackagesDeliverablesAndClientContributionBlock />
            <TRPackagesFitCheckBlock />
            <TRPackagesContactCtaBlock />
        </TrSiteShell>
    );
}
