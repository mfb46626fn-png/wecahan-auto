import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHostname } from '../../lib/site/get-hostname';
import { detectSiteFamily } from '../../lib/site/detect-site-family';
import { GlobalSiteShell } from '../../components/global/layout/GlobalSiteShell';
import { globalUseCasesContent } from '../../content/global/use-cases';

// Blocks
import { 
    GlobalUseCasesHeroBlock,
    GlobalUseCasesWhyItMattersBlock,
    GlobalUseCasesCategoryNavigationBlock,
    GlobalUseCasesAccountingCasesBlock,
    GlobalUseCasesAdjacentCasesBlock,
    GlobalUseCasesMeaningBlock,
    GlobalUseCasesFitAdaptationBlock,
    GlobalUseCasesFinalCtaBlock
} from '../../components/global/blocks/use-cases/GlobalUseCasesBlocks';

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== 'global') {
        return {};
    }

    const { seo } = globalUseCasesContent;
    
    return {
        title: seo.title,
        description: seo.description,
    };
}

export default async function UseCasesPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // Only allow access if the site family is global
    if (siteFamily !== 'global') {
        notFound();
    }

    const content = globalUseCasesContent;

    return (
        <GlobalSiteShell>
            {/* 1. Hero */}
            <GlobalUseCasesHeroBlock content={content.hero} />
            
            {/* 2. Why Use Cases Matter */}
            <GlobalUseCasesWhyItMattersBlock content={content.whyUseCasesMatter} />
            
            {/* 3. Category Navigation */}
            <GlobalUseCasesCategoryNavigationBlock content={content.categoryNavigation} />
            
            {/* 4. Accounting Firm Use Cases */}
            <GlobalUseCasesAccountingCasesBlock content={content.accountingFirmUseCases} />
            
            {/* 5. Adjacent Operational Use Cases */}
            <GlobalUseCasesAdjacentCasesBlock content={content.adjacentUseCases} />
            
            {/* 6. Meaning / What these show */}
            <GlobalUseCasesMeaningBlock content={content.whatTheseShow} />
            
            {/* 7. Fit & Adaptation Note */}
            <GlobalUseCasesFitAdaptationBlock content={content.fitAdaptation} />
            
            {/* 8. Final CTA */}
            <GlobalUseCasesFinalCtaBlock content={content.cta} />
        </GlobalSiteShell>
    );
}
