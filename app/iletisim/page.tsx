import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrSiteShell } from "../../components/tr/layout/TrSiteShell";
import { TRContactHeroBlock } from "../../components/tr/blocks/contact/TRContactHeroBlock";
import { TRContactOptionsOverviewBlock } from "../../components/tr/blocks/contact/TRContactOptionsOverviewBlock";
import { TRContactMainContactFormBlock } from "../../components/tr/blocks/contact/TRContactMainContactFormBlock";
import { TRContactWhatHappensNextBlock } from "../../components/tr/blocks/contact/TRContactWhatHappensNextBlock";
import { TRContactFitReminderBlock } from "../../components/tr/blocks/contact/TRContactFitReminderBlock";
import { TRContactFaqMicroBlock } from "../../components/tr/blocks/contact/TRContactFaqMicroBlock";
import { TRContactContactCtaBlock } from "../../components/tr/blocks/contact/TRContactContactCtaBlock";
import { trContactContent } from "../../content/tr/contact";
import { detectSiteFamily } from "../../lib/site/detect-site-family";
import { getHostname } from "../../lib/site/get-hostname";

export async function generateMetadata(): Promise<Metadata> {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    if (siteFamily !== "tr") {
        return {};
    }

    return {
        title: trContactContent.seo.title,
        description: trContactContent.seo.description,
    };
}

export default async function TRContactPage() {
    const hostname = await getHostname();
    const siteFamily = detectSiteFamily(hostname);

    // This route is only accessible on the Turkish site family
    if (siteFamily !== "tr") {
        notFound();
    }

    return (
        <TrSiteShell>
            <TRContactHeroBlock />
            <TRContactOptionsOverviewBlock />
            <TRContactMainContactFormBlock />
            <TRContactWhatHappensNextBlock />
            <TRContactFitReminderBlock />
            <TRContactFaqMicroBlock />
            <TRContactContactCtaBlock />
        </TrSiteShell>
    );
}
