import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { TRPackagesHeroBlock } from "../../components/blocks/tr/TRPackagesHeroBlock";
import { TRPackagesServiceModelOverviewBlock } from "../../components/blocks/tr/TRPackagesServiceModelOverviewBlock";
import { TRPackagesAutomationAnalysisBlock } from "../../components/blocks/tr/TRPackagesAutomationAnalysisBlock";
import { TRPackagesSetupPackagesBlock } from "../../components/blocks/tr/TRPackagesSetupPackagesBlock";
import { TRPackagesMaintenancePackagesBlock } from "../../components/blocks/tr/TRPackagesMaintenancePackagesBlock";
import { TRPackagesAdditionalDevelopmentBlock } from "../../components/blocks/tr/TRPackagesAdditionalDevelopmentBlock";
import { TRPackagesIncludedScopeBlock } from "../../components/blocks/tr/TRPackagesIncludedScopeBlock";
import { TRPackagesNotIncludedBlock } from "../../components/blocks/tr/TRPackagesNotIncludedBlock";
import { TRPackagesDeliverablesAndClientContributionBlock } from "../../components/blocks/tr/TRPackagesDeliverablesAndClientContributionBlock";
import { TRPackagesFitCheckBlock } from "../../components/blocks/tr/TRPackagesFitCheckBlock";
import { TRPackagesContactCtaBlock } from "../../components/blocks/tr/TRPackagesContactCtaBlock";
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
