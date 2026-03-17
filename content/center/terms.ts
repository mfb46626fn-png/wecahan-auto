export type CenterLocale = "tr" | "en";

export interface TermsSection {
    title: string;
    body: string;
    items?: string[];
}

export interface TermsContent {
    seo: {
        title: string;
        description: string;
    };
    hero: {
        eyebrow: string;
        title: string;
        description: string;
    };
    lastUpdated: string;
    summary: string;
    sections: TermsSection[];
    contactNote: string;
}

export const centerTermsBilingualContent: Record<CenterLocale, TermsContent> = {
    en: {
        seo: {
            title: "Terms | WeCaHan Auto",
            description: "General terms applying to the use of the center site and related contact or inquiry interactions.",
        },
        hero: {
            eyebrow: "Structural Trust",
            title: "Terms of Service",
            description: "This page outlines the general terms that apply to use of the center site and related contact or inquiry interactions.",
        },
        lastUpdated: "Last updated: March 17, 2026",
        summary: "The center site is informational and brand-oriented. Inquiries or workflow context shared through the site do not automatically create a service agreement. Formal terms are handled separately when relevant.",
        sections: [
            {
                title: "Use of the Site",
                body: "This site is provided for informational and brand-positioning purposes. By accessing the site, you agree to use it only for lawful purposes. Prohibited activities include:",
                items: [
                    "Unauthorized use that is abusive, misleading, or harmful to others.",
                    "Interfering with the site's technical structure or security.",
                    "Submitting misleading information through contact channels.",
                ],
            },
            {
                title: "Informational Nature of Content",
                body: "All content provided on this site is for general information and service context purposes only. It is intended to outline our positioning and operational methods. The content does not constitute a binding offer for services.",
            },
            {
                title: "No Automatic Service Agreement",
                body: "Initiating a contact request, submitting an email, or sharing a workflow brief through this site does not create a formal or binding service agreement between you and WeCaHan Auto.",
            },
            {
                title: "Scoped Engagement",
                body: "Formal details regarding service scope, fees, deliverables, and timelines only become relevant through separate discussions, proposals, or agreements. The center site does not act as a direct procurement or implementation contract interface.",
            },
            {
                title: "User-Provided Information",
                body: "When you share information or a process brief, you are responsible for providing reasonably accurate context. We advise against sharing unnecessarily sensitive or proprietary information during the initial inquiry stage.",
            },
            {
                title: "Intellectual Property",
                body: "The design, textual content, brand elements, and images on this site are the property of WeCaHan Auto. Unauthorized reproduction or use of these materials may requires explicit permission.",
            },
            {
                title: "Third-Party Links or Tools",
                body: "The site may occasionally reference third-party tools or external links. In such cases, the terms and policies of those respective providers apply to their specific interactions.",
            },
            {
                title: "No Guarantees",
                body: "Use of the center site or submission of an inquiry does not guarantee any specific business outcome, formal engagement, or acceptance for our services.",
            },
            {
                title: "Changes to These Terms",
                body: "These terms may be revised as our site and operational models evolve. We encourage users to review this page periodically for any updates.",
            },
        ],
        contactNote: "If you have questions about these terms or our general service framework, feel free to connect through our primary contact channels.",
    },
    tr: {
        seo: {
            title: "Kullanım Koşulları | WeCaHan Auto",
            description: "Merkez sitenin kullanımı ve ilgili iletişim veya talep etkileşimleri için geçerli olan genel koşullar.",
        },
        hero: {
            eyebrow: "Yapısal Güven",
            title: "Kullanım Koşulları",
            description: "Bu sayfa, merkez sitenin kullanımı ve ilgili iletişim veya talep etkileşimleri için geçerli olan genel koşulları ana hatlarıyla belirtir.",
        },
        lastUpdated: "Son güncelleme: 17 Mart 2026",
        summary: "Merkez site bilgilendirme ve marka odaklıdır. Site üzerinden paylaşılan talepler veya iş akışı bağlamı otomatik olarak bir hizmet sözleşmesi oluşturmaz. Resmi koşullar, ilgili durumlarda ayrıca ele alınır.",
        sections: [
            {
                title: "Sitenin Kullanımı",
                body: "Bu site bilgilendirme ve marka konumlandırma amaçları için sunulmuştur. Siteye erişerek, siteyi yalnızca yasal amaçlarla kullanmayı kabul etmiş olursunuz. Yasaklanmış faaliyetler şunları içerir:",
                items: [
                    "Sitenin kötüye kullanımı, yanıltıcı veya başkalarına zararlı kullanımı.",
                    "Sitenin teknik yapısına veya güvenliğine müdahale edilmesi.",
                    "İletişim kanalları aracılığıyla yanıltıcı bilgi sunulması.",
                ],
            },
            {
                title: "İçeriğin Bilgilendirme Niteliği",
                body: "Bu sitede sunulan tüm içerik yalnızca genel bilgilendirme ve hizmet bağlamı amaçlıdır. Konumlandırmamızı ve operasyonel yöntemlerimizi özetlemeyi amaçlar. İçerik, hizmetler için bağlayıcı bir teklif niteliği taşımaz.",
            },
            {
                title: "Otomatik Hizmet Sözleşmesi Yoktur",
                body: "Bu site aracılığıyla bir iletişim talebi başlatmak, e-posta göndermek veya bir iş akışı özeti paylaşmak, siz ve WeCaHan Auto arasında resmi veya bağlayıcı bir hizmet sözleşmesi oluşturmaz.",
            },
            {
                title: "Kapsamlı İş Ortaklığı",
                body: "Hizmet kapsamı, ücretler, teslimatlar ve zaman çizelgelerine ilişkin resmi ayrıntılar yalnızca ayrı görüşmeler, teklifler veya anlaşmalar yoluyla geçerli hale gelir. Merkez site doğrudan bir tedarik veya uygulama sözleşmesi arayüzü olarak işlev görmez.",
            },
            {
                title: "Kullanıcı Tarafından Sağlanan Bilgiler",
                body: "Bilgi veya bir süreç özeti paylaştığınızda, makul ölçüde doğru bağlam sunmaktan sorumlusunuz. İlk talep aşamasında gereksiz yere hassas veya tescilli bilgilerin paylaşılmamasını tavsiye ederiz.",
            },
            {
                title: "Fikri Mülkiyet",
                body: "Bu sitedeki tasarım, metin içeriği, marka öğeleri ve görseller WeCaHan Auto'nun mülkiyetindedir. Bu materyallerin izinsiz çoğaltılması veya kullanımı açık izin gerektirebilir.",
            },
            {
                title: "Üçüncü Taraf Bağlantıları veya Araçları",
                body: "Site zaman zaman üçüncü taraf araçlara veya harici bağlantılara referans verebilir. Bu durumlarda, ilgili sağlayıcıların kendi koşulları ve politikaları geçerlidir.",
            },
            {
                title: "Garanti Yoktur",
                body: "Merkez sitenin kullanımı veya bir talebin sunulması; herhangi bir belirli iş sonucu, resmi iş ortaklığı veya hizmetlerimize kabul garantisi vermez.",
            },
            {
                title: "Koşullardaki Değişiklikler",
                body: "Bu koşullar, sitemiz ve operasyonel modellerimiz geliştikçe revize edilebilir. Kullanıcıların güncellemeler için bu sayfayı periyodik olarak incelemelerini öneririz.",
            },
        ],
        contactNote: "Bu koşullar veya genel hizmet çerçevemiz hakkında sorularınız varsa, birincil iletişim kanallarımız üzerinden bizimle iletişime geçebilirsiniz.",
    },
};

export function getCenterTermsContent(locale: CenterLocale = "en"): TermsContent {
    return centerTermsBilingualContent[locale] || centerTermsBilingualContent.en;
}

/**
 * Default export for initial consumers.
 */
export const centerTermsContent = getCenterTermsContent("en");
