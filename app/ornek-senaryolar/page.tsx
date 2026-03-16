import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { TRScenariosHeroBlock } from "../../components/tr/blocks/scenarios/TRScenariosHeroBlock";
import { TRScenariosWhyScenariosMatterBlock } from "../../components/tr/blocks/scenarios/TRScenariosWhyScenariosMatterBlock";
import { TRScenariosScenarioCategoriesBlock } from "../../components/tr/blocks/scenarios/TRScenariosScenarioCategoriesBlock";
import { TRScenariosFeaturedScenariosBlock } from "../../components/tr/blocks/scenarios/TRScenariosFeaturedScenariosBlock";
import { TRScenariosHowTheseFlowsUsuallyWorkBlock } from "../../components/tr/blocks/scenarios/TRScenariosHowTheseFlowsUsuallyWorkBlock";
import { TRScenariosWhereCustomizationStartsBlock } from "../../components/tr/blocks/scenarios/TRScenariosWhereCustomizationStartsBlock";
import { TRScenariosFitCheckBlock } from "../../components/tr/blocks/scenarios/TRScenariosFitCheckBlock";
import { TRScenariosContactCtaBlock } from "../../components/tr/blocks/scenarios/TRScenariosContactCtaBlock";
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
