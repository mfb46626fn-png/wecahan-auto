import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CenterSiteShell } from "../../components/center/layout/CenterSiteShell";
import { getHostname } from "../../lib/site/get-hostname";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getCenterPageContent } from "../../config/sites/center";
import { WhyUsContent } from "../../content/center/why-us";

// Center Why Us Blocks
import {
    CenterWhyUsHeroBlock,
    CenterWhyUsOptimizationBlock,
    CenterWhyUsMethodologyBlock,
    CenterWhyUsPhilosophyBlock,
    CenterWhyUsTransparencyBlock,
    CenterWhyUsIdealFitBlock,
    CenterWhyUsContactBridgeBlock
} from "../../components/center/blocks/why-us/CenterWhyUsBlocks";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== "center") {
        return {};
    }

    const content = await getCenterPageContent('why-us') as WhyUsContent;
    return {
        title: content.seo.title,
        description: content.seo.description,
    };
}

export default async function WhyUsPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // Only accessible on the Center site
    if (siteFamily !== "center") {
        notFound();
    }

    const content = await getCenterPageContent('why-us') as WhyUsContent;

    return (
        <CenterSiteShell>
            <main className="min-h-screen bg-white">
                <CenterWhyUsHeroBlock content={content.hero} />
                <CenterWhyUsOptimizationBlock content={content.optimization} />
                <CenterWhyUsMethodologyBlock content={content.methodology} />
                <CenterWhyUsPhilosophyBlock content={content.philosophy} />
                <CenterWhyUsTransparencyBlock content={content.transparency} />
                <CenterWhyUsIdealFitBlock content={content.idealFit} />
                <CenterWhyUsContactBridgeBlock content={content.contactBridge} />
            </main>
        </CenterSiteShell>
    );
}
