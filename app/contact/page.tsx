import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CenterSiteShell } from "../../components/center/layout/CenterSiteShell";
import { getHostname } from "../../lib/site/get-hostname";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getCenterPageContent } from "../../config/sites/center";
import { ContactContent } from "../../content/center/contact";

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
            <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-6 border-b border-slate-800/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6 uppercase tracking-wider">
                            {content.hero.trustPoint}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {content.hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                            {content.hero.description}
                        </p>
                    </div>
                </section>

                {/* Form and Guidance Layout */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        
                        {/* Right Side: Process Guidance */}
                        <div className="space-y-16">
                            {/* Guidance Area */}
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">{content.contextGuidance.title}</h2>
                                <p className="text-slate-400 mb-8 text-sm">{content.contextGuidance.description}</p>
                                <div className="space-y-6">
                                    {content.contextGuidance.topics.map((topic, idx) => (
                                        <div key={idx} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
                                            <h3 className="text-sm font-semibold text-indigo-400 mb-2">{topic.label}</h3>
                                            <p className="text-slate-300 text-sm italic opacity-80">{topic.example}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Process Steps */}
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-6">{content.briefingFlow.title}</h2>
                                <p className="text-slate-400 mb-8 text-sm">{content.briefingFlow.description}</p>
                                <div className="space-y-8">
                                    {content.briefingFlow.steps.map((step, idx) => (
                                        <div key={idx} className="relative pl-8">
                                            {/* Progress Line */}
                                            {idx !== content.briefingFlow.steps.length - 1 && (
                                                <div className="absolute left-3 top-6 bottom-[-2rem] w-px bg-slate-800" />
                                            )}
                                            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] text-slate-500">
                                                {idx + 1}
                                            </div>
                                            <h3 className="text-base font-semibold text-white mb-1">{step.title}</h3>
                                            <p className="text-slate-400 text-sm">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Left Side: Professional Brief Form Placeholder */}
                        <div className="lg:sticky lg:top-32 h-fit">
                            <div className="p-8 md:p-10 rounded-[2.5rem] bg-indigo-500/[0.03] border border-indigo-500/20 shadow-2xl shadow-indigo-500/5">
                                <h2 className="text-2xl font-bold text-white mb-2">{content.form.title}</h2>
                                <p className="text-slate-400 text-sm mb-10">{content.form.description}</p>
                                
                                <form className="space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block ml-1">
                                            {content.form.fields.context.label}
                                        </label>
                                        <textarea 
                                            rows={4}
                                            className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm resize-none"
                                            placeholder={content.form.fields.context.placeholder}
                                        />
                                        {content.form.fields.context.hint && (
                                            <p className="text-[10px] text-slate-600 ml-1">{content.form.fields.context.hint}</p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block ml-1">
                                            {content.form.fields.goals.label}
                                        </label>
                                        <input 
                                            className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
                                            placeholder={content.form.fields.goals.placeholder}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest block ml-1">
                                            {content.form.fields.basics.label}
                                        </label>
                                        <input 
                                            className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all text-sm"
                                            placeholder={content.form.fields.basics.placeholder}
                                        />
                                    </div>

                                    <button 
                                        type="button" 
                                        disabled 
                                        className="w-full py-4 bg-indigo-600/50 text-white font-bold rounded-2xl uppercase tracking-widest text-xs opacity-50 cursor-not-allowed border border-indigo-500/30 transition-all"
                                    >
                                        {content.form.submitLabel}
                                    </button>
                                    
                                    <p className="text-[10px] text-center text-slate-600 px-4 leading-relaxed">
                                        {content.form.privacyNote}
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Expectations Section */}
                <section className="py-24 px-6 bg-slate-900/40 border-y border-slate-800/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">{content.settingExpectations.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {content.settingExpectations.notes.map((note, idx) => (
                                <div key={idx} className="space-y-3">
                                    <h3 className="text-lg font-semibold text-white">{note.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{note.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing Reassurance */}
                <section className="py-32 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            {content.closingNote.title}
                        </h2>
                        <p className="text-slate-400 leading-relaxed text-lg italic opacity-80">
                            &ldquo;{content.closingNote.description}&rdquo;
                        </p>
                    </div>
                </section>
            </main>
        </CenterSiteShell>
    );
}
