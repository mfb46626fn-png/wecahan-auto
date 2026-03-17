import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { 
    TRClinicsHeroBlock,
    TRClinicsPainPointsBlock,
    TRClinicsWhatWeHelpImproveBlock,
    TRClinicsFlagshipPackageBlock,
    TRClinicsSolutionModulesBlock,
    TRClinicsSetupLevelsBlock,
    TRClinicsMaintenanceLevelsBlock,
    TRClinicsIncludedScopeBlock,
    TRClinicsExampleWorkflowBlock,
    TRClinicsPricingLogicBlock,
    TRClinicsFitCheckBlock,
    TRClinicsContactCtaBlock
} from "../../components/tr/blocks/clinics/TRClinicsBlocks";

import { trClinicsContent } from "../../content/tr/clinics";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getHostname } from "../../lib/site/get-hostname";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== "tr") {
        return {};
    }

    return {
        title: trClinicsContent.seo.title,
        description: trClinicsContent.seo.description,
    };
}

export default async function TRClinicsPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // This route is only accessible on the Turkish site family
    if (siteFamily !== "tr") {
        notFound();
    }

    return (
        <TrSiteShell>
            <TRClinicsHeroBlock />
            <TRClinicsPainPointsBlock />
            <TRClinicsWhatWeHelpImproveBlock />
            <TRClinicsFlagshipPackageBlock />
            <TRClinicsSolutionModulesBlock />
            <TRClinicsSetupLevelsBlock />
            <TRClinicsMaintenanceLevelsBlock />
            <TRClinicsIncludedScopeBlock />
            <TRClinicsExampleWorkflowBlock />
            <TRClinicsPricingLogicBlock />
            <TRClinicsFitCheckBlock />
            <TRClinicsContactCtaBlock />
        </TrSiteShell>
    );
}
