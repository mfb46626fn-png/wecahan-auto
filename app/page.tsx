import type { Metadata } from "next";
import { 
    HeroBlockTR,
    TRServicesBlock,
    TRWorkflowBlock,
    TRBriefFormBlock,
    TRFinalCtaBlock 
} from "../components/tr/blocks/home/TRHomeBlocks";

import { 
    HeroBlockGlobal,
    GlobalServicesBlock,
    GlobalWorkflowBlock,
    GlobalBriefFormBlock,
    GlobalFinalCtaBlock
} from "../components/global/blocks/home/GlobalHomeBlocks";

import { TrSiteShell } from "../components/tr/layout/TrSiteShell";
import { GlobalSiteShell } from "../components/global/layout/GlobalSiteShell";

// Center Home Blocks
import { 
    CenterHomeHeroBlock,
    CenterHomeWhatWeAutomateBlock,
    CenterHomeHowWeWorkBlock,
    CenterHomeExampleWorkflowScenariosBlock,
    CenterHomeWhyThisStructureWorksBlock,
    CenterHomeSelectedUseCaseExamplesBlock,
    CenterBriefFormBlock,
    CenterFinalCtaBlock 
} from "../components/center/blocks/home/CenterHomeBlocks";
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
            <CenterBriefFormBlock content={centerHomeContent.briefForm} />
            <CenterFinalCtaBlock content={centerHomeContent.finalCta} />
        </CenterSiteShell>
    );
}