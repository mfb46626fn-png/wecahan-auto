import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { TRClinicsHeroBlock } from "../../components/blocks/tr/TRClinicsHeroBlock";
import { TRClinicsPainPointsBlock } from "../../components/blocks/tr/TRClinicsPainPointsBlock";
import { TRClinicsWhatWeHelpImproveBlock } from "../../components/blocks/tr/TRClinicsWhatWeHelpImproveBlock";
import { TRClinicsFlagshipPackageBlock } from "../../components/blocks/tr/TRClinicsFlagshipPackageBlock";
import { TRClinicsSolutionModulesBlock } from "../../components/blocks/tr/TRClinicsSolutionModulesBlock";
import { TRClinicsSetupLevelsBlock } from "../../components/blocks/tr/TRClinicsSetupLevelsBlock";
import { TRClinicsMaintenanceLevelsBlock } from "../../components/blocks/tr/TRClinicsMaintenanceLevelsBlock";
import { TRClinicsIncludedScopeBlock } from "../../components/blocks/tr/TRClinicsIncludedScopeBlock";
import { TRClinicsExampleWorkflowBlock } from "../../components/blocks/tr/TRClinicsExampleWorkflowBlock";
import { TRClinicsPricingLogicBlock } from "../../components/blocks/tr/TRClinicsPricingLogicBlock";
import { TRClinicsFitCheckBlock } from "../../components/blocks/tr/TRClinicsFitCheckBlock";
import { TRClinicsContactCtaBlock } from "../../components/blocks/tr/TRClinicsContactCtaBlock";
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
