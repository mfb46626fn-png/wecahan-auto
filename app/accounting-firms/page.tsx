import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHostname } from '../../lib/site/get-hostname';
import { detectSiteFamily } from '../../lib/site/detect-site-family';
import { GlobalSiteShell } from '../../components/global/layout/GlobalSiteShell';
import { globalAccountingFirmsContent } from '../../content/global/accounting-firms';

// Blocks
import { 
    GlobalAccountingHeroBlock,
    GlobalAccountingFrictionsBlock,
    GlobalAccountingImprovementsBlock,
    GlobalAccountingFlagshipPackageBlock,
    GlobalAccountingSolutionModulesBlock,
    GlobalAccountingSetupLevelsBlock,
    GlobalAccountingMaintenanceLevelsBlock,
    GlobalAccountingIncludedExcludedBlock,
    GlobalAccountingExampleWorkflowBlock,
    GlobalAccountingPricingLogicBlock,
    GlobalAccountingFitBlock,
    GlobalAccountingFinalCtaBlock
} from '../../components/global/blocks/accounting/GlobalAccountingBlocks';

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== 'global') {
        return {};
    }

    const { seo } = globalAccountingFirmsContent;
    
    return {
        title: seo.title,
        description: seo.description,
    };
}

export default async function AccountingFirmsPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // Only allow access if the site family is global
    if (siteFamily !== 'global') {
        notFound();
    }

    const content = globalAccountingFirmsContent;

    return (
        <GlobalSiteShell>
            {/* 1. Hero */}
            <GlobalAccountingHeroBlock content={content.hero} />
            
            {/* 2. Frictions */}
            <GlobalAccountingFrictionsBlock content={content.frictions} />
            
            {/* 3. Improvements */}
            <GlobalAccountingImprovementsBlock content={content.improvements} />
            
            {/* 4. Flagship Package */}
            <GlobalAccountingFlagshipPackageBlock content={content.flagshipPackage} />
            
            {/* 5. Solution Modules */}
            <GlobalAccountingSolutionModulesBlock content={content.solutionModules} />
            
            {/* 6. Setup Levels */}
            <GlobalAccountingSetupLevelsBlock content={content.setupLevels} />
            
            {/* 7. Maintenance Levels */}
            <GlobalAccountingMaintenanceLevelsBlock content={content.maintenanceLevels} />
            
            {/* 8. Included / Excluded (Scope) */}
            <GlobalAccountingIncludedExcludedBlock content={content.includedExcluded} />
            
            {/* 9. Example Workflow */}
            <GlobalAccountingExampleWorkflowBlock content={content.exampleWorkflow} />
            
            {/* 10. Pricing Logic */}
            <GlobalAccountingPricingLogicBlock content={content.pricingLogic} />
            
            {/* 11. Fit Check */}
            <GlobalAccountingFitBlock content={content.fit} />
            
            {/* 12. Final CTA */}
            <GlobalAccountingFinalCtaBlock content={content.cta} />
        </GlobalSiteShell>
    );
}
