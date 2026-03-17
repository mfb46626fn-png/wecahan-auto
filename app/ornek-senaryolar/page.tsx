import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { 
    TRScenariosHeroBlock,
    TRScenariosWhyScenariosMatterBlock,
    TRScenariosScenarioCategoriesBlock,
    TRScenariosFeaturedScenariosBlock,
    TRScenariosHowTheseFlowsUsuallyWorkBlock,
    TRScenariosWhereCustomizationStartsBlock,
    TRScenariosFitCheckBlock,
    TRScenariosContactCtaBlock
} from "../../components/tr/blocks/scenarios/TRScenariosBlocks";

import { trScenariosContent } from "../../content/tr/scenarios";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getHostname } from "../../lib/site/get-hostname";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== "tr") {
        return {};
    }

    return {
        title: trScenariosContent.seo.title,
        description: trScenariosContent.seo.description,
    };
}

export default async function TRScenariosPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // This route is only accessible on the Turkish site family
    if (siteFamily !== "tr") {
        notFound();
    }

    return (
        <TrSiteShell>
            <TRScenariosHeroBlock />
            <TRScenariosWhyScenariosMatterBlock />
            <TRScenariosScenarioCategoriesBlock />
            <TRScenariosFeaturedScenariosBlock />
            <TRScenariosHowTheseFlowsUsuallyWorkBlock />
            <TRScenariosWhereCustomizationStartsBlock />
            <TRScenariosFitCheckBlock />
            <TRScenariosContactCtaBlock />
        </TrSiteShell>
    );
}
