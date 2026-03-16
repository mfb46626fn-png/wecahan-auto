import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CenterSiteShell } from "../../components/center/layout/CenterSiteShell";
import { getHostname } from "../../lib/site/get-hostname";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getCenterPageContent } from "../../config/sites/center";
import { WhyUsContent } from "../../content/center/why-us";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== "center") {
        return {};
    }

    const content = await getCenterPageContent('why-us') as WhyUsContent;
    return {
        title: content.seo.title,
        description: content.seo.description,
    };
}

export default async function WhyUsPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // Only accessible on the Center site
    if (siteFamily !== "center") {
        notFound();
    }

    const content = await getCenterPageContent('why-us') as WhyUsContent;

    return (
        <CenterSiteShell>
            <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-6 border-b border-slate-800/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6 uppercase tracking-wider">
                            {content.hero.trustStatement}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {content.hero.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                            {content.hero.description}
                        </p>
                    </div>
                </section>

                {/* Optimization Section */}
                <section className="py-24 px-6 bg-slate-900/30">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">{content.optimization.title}</h2>
                        <p className="text-slate-400 mb-12 max-w-2xl">{content.optimization.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {content.optimization.items.map((item, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Methodology (4-Phase) Section */}
                <section className="py-24 px-6 border-y border-slate-800/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">{content.methodology.title}</h2>
                        <p className="text-slate-400 mb-12 max-w-2xl">{content.methodology.description}</p>
                        
                        <div className="space-y-6">
                            {content.methodology.pillars.map((pillar, idx) => (
                                <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/60">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">{pillar.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Philosophy (A safer model) Section */}
                <section className="py-24 px-6 bg-indigo-500/[0.02]">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">{content.philosophy.title}</h2>
                        <p className="text-slate-400 mb-12 max-w-2xl">{content.philosophy.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {content.philosophy.logicPoints.map((point, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    <span className="text-slate-300 text-sm">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Transparency Proof Points */}
                <section className="py-24 px-6 border-y border-slate-800/50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">{content.transparency.title}</h2>
                        <p className="text-slate-400 mb-12 max-w-2xl">{content.transparency.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {content.transparency.proofPoints.map((point, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <span className="text-indigo-400 text-sm font-semibold mb-2 uppercase tracking-wide">{point.label}</span>
                                    <p className="text-slate-200 text-sm leading-relaxed">{point.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ideal Fit Analysis */}
                <section className="py-24 px-6 bg-slate-900/20">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">{content.idealFit.title}</h2>
                        <p className="text-slate-400 mb-12 max-w-2xl">{content.idealFit.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {content.idealFit.criteria.map((item, idx) => (
                                <div key={idx} className={`p-6 rounded-2xl border ${item.isFit ? 'border-emerald-500/20 bg-emerald-500/[0.02]' : 'border-rose-500/20 bg-rose-500/[0.02]'}`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-2 h-2 rounded-full ${item.isFit ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                                        <h3 className="text-lg font-semibold text-white">{item.type}</h3>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.reason}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Bridge */}
                <section className="py-32 px-6">
                    <div className="max-w-4xl mx-auto text-center border border-indigo-500/20 rounded-3xl p-12 bg-indigo-500/[0.03]">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            {content.contactBridge.title}
                        </h2>
                        <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
                            {content.contactBridge.description}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link 
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all shadow-lg shadow-indigo-600/20"
                            >
                                {typeof content.contactBridge.primaryCta === 'string' ? content.contactBridge.primaryCta : content.contactBridge.primaryCta.label}
                            </Link>
                            {content.contactBridge.secondaryCta && (
                                <Link 
                                    href={typeof content.contactBridge.secondaryCta === 'string' ? '/#scenarios' : content.contactBridge.secondaryCta.href}
                                    className="w-full sm:w-auto px-8 py-3 bg-slate-900 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-semibold rounded-full transition-all"
                                >
                                    {typeof content.contactBridge.secondaryCta === 'string' ? content.contactBridge.secondaryCta : content.contactBridge.secondaryCta.label}
                                </Link>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </CenterSiteShell>
    );
}
