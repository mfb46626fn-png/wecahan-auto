import type { Metadata } from "next";
import { GlobalBriefFormBlock } from "../components/global/blocks/home/GlobalBriefFormBlock";
import { GlobalFinalCtaBlock } from "../components/global/blocks/home/GlobalFinalCtaBlock";
import { HeroBlockGlobal } from "../components/global/blocks/home/HeroBlockGlobal";
import { GlobalServicesBlock } from "../components/global/blocks/home/GlobalServicesBlock";
import { GlobalWorkflowBlock } from "../components/global/blocks/home/GlobalWorkflowBlock";
import { GlobalSiteShell } from "../components/global/layout/GlobalSiteShell";
import { 
    HeroBlockTR,
    TRServicesBlock,
    TRWorkflowBlock,
    TRBriefFormBlock,
    TRFinalCtaBlock 
} from "../components/tr/blocks/home/TRHomeBlocks";

import { TrSiteShell } from "../components/tr/layout/TrSiteShell";

// Center Home Blocks
import { CenterHomeHeroBlock } from "../components/center/blocks/home/CenterHomeHeroBlock";
import { CenterHomeWhatWeAutomateBlock } from "../components/center/blocks/home/CenterHomeWhatWeAutomateBlock";
import { CenterHomeHowWeWorkBlock } from "../components/center/blocks/home/CenterHomeHowWeWorkBlock";
import { CenterHomeExampleWorkflowScenariosBlock } from "../components/center/blocks/home/CenterHomeExampleWorkflowScenariosBlock";
import { CenterHomeWhyThisStructureWorksBlock } from "../components/center/blocks/home/CenterHomeWhyThisStructureWorksBlock";
import { CenterHomeSelectedUseCaseExamplesBlock } from "../components/center/blocks/home/CenterHomeSelectedUseCaseExamplesBlock";
import { CenterHomeContactBriefSectionBlock } from "../components/center/blocks/home/CenterHomeContactBriefSectionBlock";
import { CenterSiteShell } from "../components/center/layout/CenterSiteShell";

import { globalHomeContent } from "../content/global/home";
import { trHomeContent } from "../content/tr/home";
import { CenterHomeContent } from "../content/center/home";
import { detectSiteFamily } from "../lib/site/detect-site-family";
import { getHostname } from "../lib/site/get-hostname";
import { getCenterPageContent } from "../config/sites/center";

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

    // Default to Center Site Family with locale-aware content
    const centerHomeContent = await getCenterPageContent('home') as CenterHomeContent;
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
                <HeroBlockGlobal 
                    content={globalHomeContent.hero} 
                />
                
                <GlobalServicesBlock 
                    content={globalHomeContent.services} 
                    frictionsContent={globalHomeContent.frictions}
                />
                
                <GlobalWorkflowBlock 
                    content={globalHomeContent.workflow} 
                    benefitsContent={globalHomeContent.benefits}
                />
                
                <GlobalBriefFormBlock 
                    content={globalHomeContent.briefForm} 
                />
                
                <GlobalFinalCtaBlock 
                    content={globalHomeContent.finalCta} 
                />
            </GlobalSiteShell>
        );
    }

    // Default to Center Site Family with locale-aware content
    const centerHomeContent = await getCenterPageContent('home') as CenterHomeContent;

    return (
        <CenterSiteShell>
            <CenterHomeHeroBlock content={centerHomeContent.hero} />
            <CenterHomeWhatWeAutomateBlock content={centerHomeContent.whatWeAutomate} />
            <CenterHomeHowWeWorkBlock content={centerHomeContent.howWeWork} />
            <CenterHomeExampleWorkflowScenariosBlock content={centerHomeContent.exampleWorkflows} />
            <CenterHomeWhyThisStructureWorksBlock content={centerHomeContent.whyStructureWorks} />
            <CenterHomeSelectedUseCaseExamplesBlock content={centerHomeContent.selectedUseCases} />
            <CenterHomeContactBriefSectionBlock content={centerHomeContent.contactBrief} />
        </CenterSiteShell>
    );
}