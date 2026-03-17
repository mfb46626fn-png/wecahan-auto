import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CenterSiteShell } from "../../components/center/layout/CenterSiteShell";
import { GlobalSiteShell } from "../../components/global/layout/GlobalSiteShell";
import { getHostname } from "../../lib/site/get-hostname";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getCenterPageContent } from "../../config/sites/center";
import { ContactContent as CenterContactContent } from "../../content/center/contact";
import { globalContactContent } from "../../content/global/contact";

// Center Contact Blocks
import {
    CenterContactHeroBlock,
    CenterContactWhatToShareBlock,
    CenterContactNextStepsBlock,
    CenterContactExpectationNoteBlock,
    CenterContactBriefFormBlock,
    CenterContactReassuranceBlock
} from "../../components/center/blocks/contact/CenterContactBlocks";

// Global Contact Blocks
import {
    GlobalContactHeroBlock,
    GlobalContactPathsBlock,
    GlobalContactBriefFormBlock,
    GlobalContactNextStepsBlock,
    GlobalContactVsCallBlock,
    GlobalContactFitReminderBlock,
    GlobalContactFaqBlock,
    GlobalContactSecondaryCtaBlock
} from "../../components/global/blocks/contact/GlobalContactBlocks";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily === "center") {
        const content = await getCenterPageContent('contact') as CenterContactContent;
        return {
            title: content.seo.title,
            description: content.seo.description,
        };
    }

    if (siteFamily === "global") {
        const { seo } = globalContactContent;
        return {
            title: seo.title,
            description: seo.description,
        };
    }

    return {};
}

export default async function ContactPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // --- Center Family Branch ---
    if (siteFamily === "center") {
        const content = await getCenterPageContent('contact') as CenterContactContent;
        return (
            <CenterSiteShell>
                <main className="min-h-screen bg-white">
                    <CenterContactHeroBlock content={content.hero} />
                    <CenterContactWhatToShareBlock content={content.contextGuidance} />
                    <CenterContactNextStepsBlock content={content.briefingFlow} />
                    <CenterContactExpectationNoteBlock content={content.settingExpectations} />
                    
                    <CenterContactBriefFormBlock content={content.form}>
                        <form className="space-y-8">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block ml-1">
                                    {content.form.fields.context.label}
                                </label>
                                <textarea 
                                    rows={4}
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm resize-none"
                                    placeholder={content.form.fields.context.placeholder}
                                />
                                {content.form.fields.context.hint && (
                                    <p className="text-[10px] text-slate-400 ml-1">{content.form.fields.context.hint}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block ml-1">
                                    {content.form.fields.goals.label}
                                </label>
                                <input 
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
                                    placeholder={content.form.fields.goals.placeholder}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block ml-1">
                                    {content.form.fields.basics.label}
                                </label>
                                <input 
                                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
                                    placeholder={content.form.fields.basics.placeholder}
                                />
                            </div>

                            <button 
                                type="button" 
                                disabled 
                                className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl uppercase tracking-widest text-xs opacity-50 cursor-not-allowed transition-all"
                            >
                                {content.form.submitLabel}
                            </button>
                        </form>
                    </CenterContactBriefFormBlock>

                    <CenterContactReassuranceBlock content={content.closingNote} />
                </main>
            </CenterSiteShell>
        );
    }

    // --- Global Family Branch ---
    if (siteFamily === "global") {
        const content = globalContactContent;
        return (
            <GlobalSiteShell>
                <GlobalContactHeroBlock content={content.hero} />
                <GlobalContactPathsBlock content={content.contactPaths} />
                
                <GlobalContactBriefFormBlock content={content.briefForm}>
                    {/* 
                        Global Form logic is handled via block's internal surface 
                        or can be injected here as a child component in the next phase.
                    */}
                    <div className="flex flex-col items-center justify-center text-center p-8 bg-neutral-50 rounded-2xl border border-dashed border-neutral-200 min-h-[400px]">
                        <p className="text-sm font-bold uppercase tracking-widest text-neutral-400">
                            Workflow Brief Form Coming Soon
                        </p>
                        <p className="mt-2 text-xs text-neutral-400 max-w-xs">
                            This area is prepared to receive the interactive intake logic.
                        </p>
                    </div>
                </GlobalContactBriefFormBlock>

                <GlobalContactNextStepsBlock content={content.whatHappensNext} />
                <GlobalContactVsCallBlock content={content.contactVsCall} />
                <GlobalContactFitReminderBlock content={content.fitReminder} />
                <GlobalContactFaqBlock content={content.faq} />
                <GlobalContactSecondaryCtaBlock content={content.secondaryCta} />
            </GlobalSiteShell>
        );
    }

    // --- Not Found for other families (e.g., tr) ---
    notFound();
}
