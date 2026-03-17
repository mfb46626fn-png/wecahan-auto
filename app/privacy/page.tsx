import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GlobalSiteShell } from '../../components/global/layout/GlobalSiteShell';
import { getHostname } from '../../lib/site/get-hostname';
import { detectSiteFamily } from '../../lib/site/detect-site-family';
import { globalPrivacyContent } from '../../content/global/privacy';

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== 'global') {
        return {};
    }

    const { seo } = globalPrivacyContent;
    return {
        title: seo.title,
        description: seo.description,
    };
}

export default async function PrivacyPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== 'global') {
        notFound();
    }

    const { hero, lastUpdated, summary, sections, contactNote } = globalPrivacyContent;

    return (
        <GlobalSiteShell>
            <main className="bg-white text-neutral-900">
                {/* Hero Section */}
                <div className="border-b border-neutral-100 bg-neutral-50/50">
                    <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-32">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">
                            {hero.eyebrow}
                        </span>
                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
                            {hero.title}
                        </h1>
                        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500 font-medium">
                            {hero.description}
                        </p>
                        <div className="mt-10 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-neutral-400">
                            <div className="h-1 w-1 rounded-full bg-neutral-300" />
                            {lastUpdated}
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-32">
                    <div className="max-w-2xl">
                        {/* Summary */}
                        <p className="text-xl font-bold leading-relaxed tracking-tight text-neutral-900 mb-20">
                            {summary}
                        </p>

                        {/* Sections */}
                        <div className="space-y-24">
                            {sections.map((section, idx) => (
                                <section key={idx} className="space-y-6">
                                    <h2 className="text-sm font-black uppercase tracking-[0.2em] text-neutral-400 pb-4 border-b border-neutral-100">
                                        {section.title}
                                    </h2>
                                    <p className="text-base leading-relaxed text-neutral-600 font-medium">
                                        {section.body}
                                    </p>
                                    {section.items && (
                                        <ul className="grid gap-4 mt-8">
                                            {section.items.map((item, iIdx) => (
                                                <li key={iIdx} className="flex gap-4 group">
                                                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-900 group-hover:scale-125 transition-transform" />
                                                    <span className="text-sm font-semibold text-neutral-700 leading-snug">
                                                        {item}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </section>
                            ))}
                        </div>

                        {/* Contact Note */}
                        <div className="mt-32 pt-16 border-t border-neutral-100">
                            <div className="rounded-3xl bg-neutral-50 p-8 md:p-10">
                                <h3 className="text-[11px] font-black uppercase tracking-widest text-neutral-400 mb-4">Questions?</h3>
                                <p className="text-sm font-bold leading-relaxed text-neutral-900">
                                    {contactNote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </GlobalSiteShell>
    );
}
