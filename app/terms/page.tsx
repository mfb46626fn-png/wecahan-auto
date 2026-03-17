import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHostname } from '../../lib/site/get-hostname';
import { detectSiteFamily } from '../../lib/site/detect-site-family';

// Shells
import { GlobalSiteShell } from '../../components/global/layout/GlobalSiteShell';
import { TrSiteShell } from '../../components/tr/layout/TrSiteShell';
import { CenterSiteShell } from '../../components/center/layout/CenterSiteShell';

// Content
import { globalTermsContent } from '../../content/global/terms';
import { trTermsContent } from '../../content/tr/terms';
import { getCenterTermsContent } from '../../content/center/terms';
import { resolveCenterLocaleForConfig } from '../../config/sites/center';

// Blocks (Reused for consistent legal layout)
import { 
    GlobalTermsHeroBlock,
    GlobalTermsContentBlock,
} from '../../components/global/blocks/terms/GlobalTermsBlocks';

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily === 'global') {
        const { seo } = globalTermsContent;
        return { title: seo.title, description: seo.description };
    }
    
    if (siteFamily === 'tr') {
        const { seo } = trTermsContent;
        return { title: seo.title, description: seo.description };
    }

    if (siteFamily === 'center') {
        const locale = await resolveCenterLocaleForConfig();
        const { seo } = getCenterTermsContent(locale);
        return { title: seo.title, description: seo.description };
    }

    return {};
}

/**
 * Host-aware Terms Page
 * Serves as a unified consumer for Center, TR, and Global terms of service.
 */
export default async function TermsPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    let content;
    let Shell;
    let questionsLabel = "Questions?";

    if (siteFamily === 'global') {
        content = globalTermsContent;
        Shell = GlobalSiteShell;
    } else if (siteFamily === 'tr') {
        content = trTermsContent;
        Shell = TrSiteShell;
        questionsLabel = "Sorularınız mı var?";
    } else if (siteFamily === 'center') {
        const locale = await resolveCenterLocaleForConfig();
        content = getCenterTermsContent(locale);
        Shell = CenterSiteShell;
        questionsLabel = locale === 'tr' ? "Sorularınız mı var?" : "Questions?";
    } else {
        notFound();
    }

    const { hero, lastUpdated, summary, sections, contactNote } = content;

    return (
        <Shell>
            <main className="bg-white text-neutral-900">
                <GlobalTermsHeroBlock 
                    content={hero} 
                    lastUpdated={lastUpdated} 
                />
                
                <GlobalTermsContentBlock 
                    summary={summary} 
                    sections={sections} 
                >
                    {/* Inline Contact Note to handle localization of the "Questions?" label */}
                    <div className="mt-32 pt-16 border-t border-neutral-100">
                        <div className="rounded-3xl bg-neutral-50 p-8 md:p-10">
                            <h3 className="text-[11px] font-black uppercase tracking-widest text-neutral-400 mb-4">
                                {questionsLabel}
                            </h3>
                            <p className="text-sm font-bold leading-relaxed text-neutral-900">
                                {contactNote}
                            </p>
                        </div>
                    </div>
                </GlobalTermsContentBlock>
            </main>
        </Shell>
    );
}
