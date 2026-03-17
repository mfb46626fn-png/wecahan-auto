import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHostname } from '../../lib/site/get-hostname';
import { detectSiteFamily } from '../../lib/site/detect-site-family';
import { GlobalSiteShell } from '../../components/global/layout/GlobalSiteShell';
import { globalBookACallContent } from '../../content/global/book-a-call';

// Blocks
import { 
    GlobalBookCallHeroBlock,
    GlobalBookCallPurposeBlock,
    GlobalBookCallBestFitBlock,
    GlobalBookCallNotFitBlock,
    GlobalBookCallCoverageBlock,
    GlobalBookCallAfterCallBlock,
    GlobalBookCallComparisonBlock,
    GlobalBookCallSchedulingBlock,
    GlobalBookCallSecondaryCtaBlock
} from '../../components/global/blocks/book-a-call/GlobalBookCallBlocks';

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== 'global') {
        return {};
    }

    const { seo } = globalBookACallContent;
    
    return {
        title: seo.title,
        description: seo.description,
    };
}

export default async function BookACallPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // Only allow access if the site family is global
    if (siteFamily !== 'global') {
        notFound();
    }

    const content = globalBookACallContent;

    return (
        <GlobalSiteShell>
            {/* 1. Hero */}
            <GlobalBookCallHeroBlock content={content.hero} />
            
            {/* 2. Purpose */}
            <GlobalBookCallPurposeBlock content={content.callPurpose} />
            
            {/* 3. Best Fit Check */}
            <GlobalBookCallBestFitBlock content={content.bestFit} />
            
            {/* 4. Not Fit Check */}
            <GlobalBookCallNotFitBlock content={content.notFit} />
            
            {/* 5. Coverage */}
            <GlobalBookCallCoverageBlock content={content.callCoverage} />
            
            {/* 6. After Call Process */}
            <GlobalBookCallAfterCallBlock content={content.afterCall} />
            
            {/* 7. Comparison (Call vs Brief) */}
            <GlobalBookCallComparisonBlock content={content.callVsBrief} />
            
            {/* 8. Scheduling */}
            <GlobalBookCallSchedulingBlock content={content.scheduling} />
            
            {/* 9. Secondary CTA */}
            <GlobalBookCallSecondaryCtaBlock content={content.secondaryCta} />
        </GlobalSiteShell>
    );
}
