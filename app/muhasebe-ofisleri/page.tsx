import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { TRAccountingHeroBlock } from "../../components/blocks/tr/accounting/TRAccountingHeroBlock";
import { TRAccountingCommonWorkflowProblemsBlock } from "../../components/tr/blocks/accounting/TRAccountingCommonWorkflowProblemsBlock";
import { TRAccountingWhatWeHelpImproveBlock } from "../../components/tr/blocks/accounting/TRAccountingWhatWeHelpImproveBlock";
import { TRAccountingFlagshipOfficePackageBlock } from "../../components/tr/blocks/accounting/TRAccountingFlagshipOfficePackageBlock";
import { TRAccountingSolutionModulesBlock } from "../../components/tr/blocks/accounting/TRAccountingSolutionModulesBlock";
import { TRAccountingSetupLevelsBlock } from "../../components/tr/blocks/accounting/TRAccountingSetupLevelsBlock";
import { TRAccountingMaintenanceLevelsBlock } from "../../components/tr/blocks/accounting/TRAccountingMaintenanceLevelsBlock";
import { TRAccountingIncludedScopeBlock } from "../../components/tr/blocks/accounting/TRAccountingIncludedScopeBlock";
import { TRAccountingNotIncludedBlock } from "../../components/tr/blocks/accounting/TRAccountingNotIncludedBlock";
import { TRAccountingExampleWorkflowBlock } from "../../components/tr/blocks/accounting/TRAccountingExampleWorkflowBlock";
import { TRAccountingPricingLogicBlock } from "../../components/tr/blocks/accounting/TRAccountingPricingLogicBlock";
import { TRAccountingFitCheckBlock } from "../../components/tr/blocks/accounting/TRAccountingFitCheckBlock";
import { TRAccountingContactCtaBlock } from "../../components/tr/blocks/accounting/TRAccountingContactCtaBlock";
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
