import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CenterSiteShell } from "../../components/center/layout/CenterSiteShell";
import { getHostname } from "../../lib/site/get-hostname";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getCenterPageContent } from "../../config/sites/center";
import { ContactContent } from "../../content/center/contact";

// Center Contact Blocks
import {
    CenterContactHeroBlock,
    CenterContactWhatToShareBlock,
    CenterContactNextStepsBlock,
    CenterContactExpectationNoteBlock,
    CenterContactBriefFormBlock,
    CenterContactReassuranceBlock
} from "../../components/center/blocks/contact/CenterContactBlocks";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== "center") {
        return {};
    }

    const content = await getCenterPageContent('contact') as ContactContent;
    return {
        title: content.seo.title,
        description: content.seo.description,
    };
}

export default async function ContactPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // Only accessible on the Center site
    if (siteFamily !== "center") {
        notFound();
    }

    const content = await getCenterPageContent('contact') as ContactContent;

    return (
        <CenterSiteShell>
            <main className="min-h-screen bg-white">
                <CenterContactHeroBlock content={content.hero} />
                <CenterContactWhatToShareBlock content={content.contextGuidance} />
                <CenterContactNextStepsBlock content={content.briefingFlow} />
                <CenterContactExpectationNoteBlock content={content.settingExpectations} />
                
                <CenterContactBriefFormBlock content={content.form}>
                    {/* Existing Brief Form Structure */}
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
