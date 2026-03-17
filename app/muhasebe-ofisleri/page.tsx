import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { 
    TRAccountingHeroBlock,
    TRAccountingCommonWorkflowProblemsBlock,
    TRAccountingWhatWeHelpImproveBlock,
    TRAccountingFlagshipOfficePackageBlock,
    TRAccountingSolutionModulesBlock,
    TRAccountingSetupLevelsBlock,
    TRAccountingMaintenanceLevelsBlock,
    TRAccountingIncludedScopeBlock,
    TRAccountingNotIncludedBlock,
    TRAccountingExampleWorkflowBlock,
    TRAccountingPricingLogicBlock,
    TRAccountingFitCheckBlock,
    TRAccountingContactCtaBlock
} from "../../components/tr/blocks/accounting/TRAccountingBlocks";

import { trAccountingContent } from "../../content/tr/accounting";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getHostname } from "../../lib/site/get-hostname";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== "tr") {
        return {};
    }

    return {
        title: trAccountingContent.seo.title,
        description: trAccountingContent.seo.description,
    };
}

export default async function TRAccountingPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // This route is only accessible on the Turkish site family
    if (siteFamily !== "tr") {
        notFound();
    }

    return (
        <TrSiteShell>
            <TRAccountingHeroBlock />
            <TRAccountingCommonWorkflowProblemsBlock />
            <TRAccountingWhatWeHelpImproveBlock />
            <TRAccountingFlagshipOfficePackageBlock />
            <TRAccountingSolutionModulesBlock />
            <TRAccountingSetupLevelsBlock />
            <TRAccountingMaintenanceLevelsBlock />
            <TRAccountingIncludedScopeBlock />
            <TRAccountingNotIncludedBlock />
            <TRAccountingExampleWorkflowBlock />
            <TRAccountingPricingLogicBlock />
            <TRAccountingFitCheckBlock />
            <TRAccountingContactCtaBlock />
        </TrSiteShell>
    );
}
