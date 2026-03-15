import type { Metadata } from "next";
import { CenterBriefFormBlock } from "../components/center/blocks/CenterBriefFormBlock";
import { CenterFinalCtaBlock } from "../components/center/blocks/CenterFinalCtaBlock";
import { HeroBlockCenter } from "../components/center/blocks/HeroBlockCenter";
import { CenterServicesBlock } from "../components/center/blocks/CenterServicesBlock";
import { CenterWorkflowBlock } from "../components/center/blocks/CenterWorkflowBlock";
import { CenterSiteShell } from "../components/center/layout/CenterSiteShell";
import { GlobalBriefFormBlock } from "../components/global/blocks/GlobalBriefFormBlock";
import { GlobalFinalCtaBlock } from "../components/global/blocks/GlobalFinalCtaBlock";
import { HeroBlockGlobal } from "../components/global/blocks/HeroBlockGlobal";
import { GlobalServicesBlock } from "../components/global/blocks/GlobalServicesBlock";
import { GlobalWorkflowBlock } from "../components/global/blocks/GlobalWorkflowBlock";
import { GlobalSiteShell } from "../components/global/layout/GlobalSiteShell";
import { HeroBlockTR } from "../components/tr/blocks/HeroBlockTR";
import { TRBriefFormBlock } from "../components/tr/blocks/TRBriefFormBlock";
import { TRFinalCtaBlock } from "../components/tr/blocks/TRFinalCtaBlock";
import { TRServicesBlock } from "../components/tr/blocks/TRServicesBlock";
import { TRWorkflowBlock } from "../components/tr/blocks/TRWorkflowBlock";
import { TrSiteShell } from "../components/tr/layout/TrSiteShell";
import { centerHomeContent } from "../content/center/home";
import { globalHomeContent } from "../content/global/home";
import { trHomeContent } from "../content/tr/home";
import { detectSiteFamily } from "../lib/site/detect-site-family";
import { getHostname } from "../lib/site/get-hostname";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily === "tr") {
        return {
            title: trHomeContent.seo.title,
            description: trHomeContent.seo.description,
        };
    }

    if (siteFamily === "global") {
        return {
            title: globalHomeContent.seo.title,
            description: globalHomeContent.seo.description,
        };
    }

    return {
        title: centerHomeContent.seo.title,
        description: centerHomeContent.seo.description,
    };
}

export default async function HomePage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily === "tr") {
        return (
            <TrSiteShell>
                <HeroBlockTR content={trHomeContent.hero} />
                <TRServicesBlock content={trHomeContent.services} />
                <TRWorkflowBlock content={trHomeContent.workflow} />
                <TRBriefFormBlock content={trHomeContent.briefForm} />
                <TRFinalCtaBlock content={trHomeContent.finalCta} />
            </TrSiteShell>
        );
    }

    if (siteFamily === "global") {
        return (
            <GlobalSiteShell>
                <HeroBlockGlobal content={globalHomeContent.hero} />
                <GlobalServicesBlock content={globalHomeContent.services} />
                <GlobalWorkflowBlock content={globalHomeContent.workflow} />
                <GlobalBriefFormBlock content={globalHomeContent.briefForm} />
                <GlobalFinalCtaBlock content={globalHomeContent.finalCta} />
            </GlobalSiteShell>
        );
    }

    return (
        <CenterSiteShell>
            <HeroBlockCenter content={centerHomeContent.hero} />
            <CenterServicesBlock content={centerHomeContent.services} />
            <CenterWorkflowBlock content={centerHomeContent.workflow} />
            <CenterBriefFormBlock content={centerHomeContent.briefForm} />
            <CenterFinalCtaBlock content={centerHomeContent.finalCta} />
        </CenterSiteShell>
    );
}