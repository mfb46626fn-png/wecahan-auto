export type CenterLocale = "tr" | "en";

export interface PrivacySection {
    title: string;
    body: string;
    items?: string[];
}

export interface PrivacyContent {
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
    sections: PrivacySection[];
    contactNote: string;
}

export const centerPrivacyBilingualContent: Record<CenterLocale, PrivacyContent> = {
    en: {
        seo: {
            title: "Privacy | WeCaHan Auto",
            description: "How information shared through the center site is handled with professional clarity and trust.",
        },
        hero: {
            eyebrow: "Operational Transparency",
            title: "Privacy Policy",
            description: "This page explains what information may be shared through the center site, why it may be used, and how it is handled in the context of our initial operational review.",
        },
        lastUpdated: "Last updated: March 17, 2026",
        summary: "At the center site, we prioritize a trust-led approach. We only collect information you choose to share to evaluate initial context, review inquiries, and maintain professional communication regarding our services.",
        sections: [
            {
                title: "Information You Choose to Share",
                body: "We handle information that you voluntarily provide when starting a brief or reaching out via our contact channels. This typically includes:",
                items: [
                    "Basic identity: Name and email address.",
                    "Professional context: Company or organization name.",
                    "Workflow context: Brief descriptions of operational friction points you've shared.",
                    "Voluntary details: Any other information you choose to include in your inquiry.",
                ],
            },
            {
                title: "How Information May Be Used",
                body: "Collected information is used primarily to ensure our response is relevant to your specific operational needs. This involves:",
                items: [
                    "Reviewing submitted contact requests for initial fit.",
                    "Understanding the high-level context of your workflow challenges.",
                    "Responding appropriately to your inquiries.",
                    "Maintaining reasonable records for ongoing communication.",
                ],
            },
            {
                title: "How Information Is Shared",
                body: "We believe in clear boundaries. We do not sell or rent your personal data to third parties. Information is only shared in limited operational scenarios:",
                items: [
                    "Limited operational sharing: With trusted tools or partners only when reasonably necessary to assist our workflow.",
                    "Lawful disclosure: Only if required by law or to protect safety and rights.",
                ],
            },
            {
                title: "Retention",
                body: "We retain information only as long as necessary to fulfill the purposes of review, communication, and maintaining reasonable business records. We periodically review and remove inactive inquiry data.",
            },
            {
                title: "Your Choices",
                body: "You maintain control over your context. You may reach out at any time to request updates, ask for corrections, or request deletion of information you have previously shared. You can also stop further communication at any stage.",
            },
            {
                title: "Security",
                body: "We implement reasonable administrative and technical safeguards designed to protect the clarity and integrity of your shared information. While we maintain professional standards, please note that no digital transmission can be guaranteed as absolute.",
            },
            {
                title: "International Use",
                body: "Depending on the operational tools used to handle reviews and communication, information shared through this site may be handled across different jurisdictions. Such handling remains consistent with the principles of this policy.",
            },
            {
                title: "Policy Updates",
                body: "This policy may be revised occasionally as the center site and our operational review models evolve. Updates will be reflected by the date at the top of this page.",
            },
        ],
        contactNote: "If you have questions about how your shared context is handled, feel free to reach out through our primary contact channels.",
    },
    tr: {
        seo: {
            title: "Gizlilik | WeCaHan Auto",
            description: "Merkez site üzerinden paylaşılan bilgilerin profesyonel bir şeffaflık ve güvenle nasıl ele alındığı.",
        },
        hero: {
            eyebrow: "Operasyonel Şeffaflık",
            title: "Gizlilik Politikası",
            description: "Bu sayfa, merkez site üzerinden hangi bilgilerin paylaşılabileceğini, bunların neden kullanılabileceğini ve ilk operasyonel inceleme bağlamında nasıl ele alındığını açıklar.",
        },
        lastUpdated: "Son güncelleme: 17 Mart 2026",
        summary: "Merkez sitede güven odaklı bir yaklaşımı önceliklendiriyoruz. Sadece operasyonel bağlamı değerlendirmek, talepleri incelemek ve hizmetlerimize dair uzman iletişimi sürdürmek için kendi isteğinize göre paylaştığınız bilgileri topluyoruz.",
        sections: [
            {
                title: "Paylaşmayı Seçtiğiniz Bilgiler",
                body: "Bir iş akışı özeti (brief) başlatırken veya iletişim kanallarımız aracılığıyla bize ulaşırken gönüllü olarak sağladığınız bilgileri yönetiyoruz. Bunlar genellikle şunları içerir:",
                items: [
                    "Temel kimlik: Ad ve e-posta adresi.",
                    "Kurumsal bağlam: Şirket veya organizasyon adı.",
                    "İş akışı bağlamı: Paylaştığınız operasyonel sürtünme noktalarının kısa açıklamaları.",
                    "Gönüllü detaylar: Talebinize dahil etmeyi seçtiğiniz diğer tüm bilgiler.",
                ],
            },
            {
                title: "Bilgiler Nasıl Kullanılabilir?",
                body: "Toplanan bilgiler, öncelikle yanıtımızın sizin özel operasyonel ihtiyaçlarınıza uygun olduğundan emin olmak için kullanılır:",
                items: [
                    "Gönderilen iletişim taleplerinin ilk uyumluluk açısından incelenmesi.",
                    "İş akışı zorluklarınızın üst düzey bağlamının anlaşılması.",
                    "Taleplerinize uygun şekilde yanıt verilmesi.",
                    "Süregelen iletişim için makul kayıtların tutulması.",
                ],
            },
            {
                title: "Bilgiler Nasıl Paylaşılır?",
                body: "Net sınırların önemine inanıyoruz. Kişisel verilerinizi üçüncü taraflara satmıyor veya kiralamıyoruz. Bilgiler sadece sınırlı operasyonel senaryolarda paylaşılır:",
                items: [
                    "Sınırlı operasyonel paylaşım: Sadece iş akışımıza yardımcı olmak için makul ölçüde gerekli olduğunda güvenilir araçlar veya ortaklarla.",
                    "Yasal açıklama: Sadece yasalar gerektirdiğinde veya güvenliği ve hakları korumak için.",
                ],
            },
            {
                title: "Veri Saklama",
                body: "Bilgileri sadece inceleme, iletişim ve makul ticari kayıtların tutulması amaçlarını yerine getirmek için gerekli olduğu sürece saklıyoruz. Aktif olmayan talep verilerini düzenli aralıklarla gözden geçirip temizliyoruz.",
            },
            {
                title: "Seçenekleriniz",
                body: "Bağlamınız üzerindeki kontrol sizdedir. Daha önce paylaştığınız bilgiler için güncelleme istemek, düzeltme talep etmek veya silinmesini rica etmek için istediğiniz zaman bize ulaşabilirsiniz. Ayrıca herhangi bir aşamada iletişimi durdurabilirsiniz.",
            },
            {
                title: "Güvenlik",
                body: "Paylaştığınız bilgilerin netliğini ve bütünlüğünü korumak için tasarlanmış makul idari ve teknik korumalar uyguluyoruz. Profesyonel standartları korurken, hiçbir dijital iletimin mutlak garanti edilemeyeceğini hatırlatmak isteriz.",
            },
            {
                title: "Uluslararası Kullanım",
                body: "İnceleme ve iletişim süreçlerinde kullanılan operasyonel araçlara bağlı olarak, bu site üzerinden paylaşılan bilgiler farklı yargı yetki alanlarında işlenebilir. Bu tür işlemler bu politikanın ilkeleriyle tutarlı kalmaya devam eder.",
            },
            {
                title: "Politika Güncellemeleri",
                body: "Bu politika, merkez site ve operasyonel inceleme modellerimiz geliştikçe zaman zaman revize edilebilir. Güncellemeler, bu sayfanın başındaki tarihle belirtilir.",
            },
        ],
        contactNote: "Paylaştığınız bağlamın nasıl ele alındığına dair sorularınız varsa, birincil iletişim kanallarımız üzerinden bizimle iletişime geçebilirsiniz.",
    },
};

export function getCenterPrivacyContent(locale: CenterLocale = "en"): PrivacyContent {
    return centerPrivacyBilingualContent[locale] || centerPrivacyBilingualContent.en;
}

/**
 * Default export for initial consumers.
 */
export const centerPrivacyContent = getCenterPrivacyContent("en");
