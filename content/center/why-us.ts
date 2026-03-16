export type CenterLocale = "tr" | "en";

type CtaConfig = string | { label: string; href: string };

interface SeoContent {
    title: string;
    description: string;
}

interface HeroContent {
    title: string;
    description: string;
    trustStatement: string;
}

interface FeatureItem {
    title: string;
    description: string;
}

interface OptimizationContent {
    title: string;
    description: string;
    items: FeatureItem[];
}

interface PillarItem {
    title: string;
    description: string;
}

interface MethodologyContent {
    title: string;
    description: string;
    pillars: PillarItem[];
}

interface PhilosophyContent {
    title: string;
    description: string;
    logicPoints: string[];
}

interface ProofItem {
    label: string;
    value: string;
}

interface TransparencyContent {
    title: string;
    description: string;
    proofPoints: ProofItem[];
}

interface FitItem {
    type: string;
    isFit: boolean;
    reason: string;
}

interface IdealFitContent {
    title: string;
    description: string;
    criteria: FitItem[];
}

interface ContactBridgeContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta?: CtaConfig;
}

export interface WhyUsContent {
    seo: SeoContent;
    hero: HeroContent;
    optimization: OptimizationContent;
    methodology: MethodologyContent;
    philosophy: PhilosophyContent;
    transparency: TransparencyContent;
    idealFit: IdealFitContent;
    contactBridge: ContactBridgeContent;
}

export const centerWhyUsBilingualContent: Record<CenterLocale, WhyUsContent> = {
    en: {
        seo: {
            title: 'Why Us | WeCaHan Auto - Operational Clarity & Trust',
            description: 'Understanding our method-led approach to operational automation. Why we focus on sustainable systems over ad-hoc tools.',
        },
        hero: {
            title: 'Why we focus on operational structure',
            description: 'Automation is only as effective as the process it supports. We don\'t just add tools; we build the logic that makes your service business more predictable and manageable.',
            trustStatement: 'Method-led. Outcome-focused. Scope-honest.',
        },
        optimization: {
            title: 'What we optimize for',
            description: 'Our goal is to reduce cognitive load and manual friction through structured clarity.',
            items: [
                {
                    title: 'Clarity',
                    description: 'Every team member should know exactly what happens next in any given workflow.',
                },
                {
                    title: 'Consistency',
                    description: 'Processes should run the same way every time, regardless of who is handling the request.',
                },
                {
                    title: 'Visibility',
                    description: 'Real-time dashboards and logs ensure that no stage of the operation remains a "black box".',
                },
                {
                    title: 'Maintainability',
                    description: 'We build systems that are easy to monitor and adjust as your business requirements evolve.',
                },
            ],
        },
        methodology: {
            title: 'Our 4-Phase Discipline',
            description: 'Sustainable automation requires a systematic approach to avoid technical debt and scattered tools.',
            pillars: [
                {
                    title: 'Analysis',
                    description: 'We map the current manual friction before writing a single line of logic.',
                },
                {
                    title: 'Setup',
                    description: 'A controlled build phase focused on core stability and error handling.',
                },
                {
                    title: 'Maintenance',
                    description: 'Proactive monitoring to ensure the system adapts to external tool changes.',
                },
                {
                    title: 'Expansion',
                    description: 'Layering complexity only after the foundational workflow is proven and stable.',
                },
            ],
        },
        philosophy: {
            title: 'A safer model for growth',
            description: 'Individual automations often lead to "tool fatigue". We propose a centralized operational layer.',
            logicPoints: [
                'Centralized logic instead of scattered applet recipes.',
                'Data integrity across your existing professional tool stack.',
                'Human-in-the-loop triggers for sensitive decision points.',
                'Scalable architecture that doesn\'t break with higher volume.',
            ],
        },
        transparency: {
            title: 'Proof through transparency',
            description: 'We establish trust by showing exactly how the logic handles your operational challenges.',
            proofPoints: [
                {
                    label: 'Workflow Logic',
                    value: 'Explicit documentation of every "if/then" trigger in your system.',
                },
                {
                    label: 'Scope Honesty',
                    value: 'We define what can and cannot be reliably automated from day one.',
                },
                {
                    label: 'Process Health',
                    value: 'Automated alerts for any process that stalls or requires attention.',
                },
            ],
        },
        idealFit: {
            title: 'Is this the right fit?',
            description: 'We work best with businesses that value system discipline over quick fixes.',
            criteria: [
                {
                    type: 'Service Businesses',
                    isFit: true,
                    reason: 'When operations rely on coordination and client interplay.',
                },
                {
                    type: 'Growing Teams',
                    isFit: true,
                    reason: 'When manual coordination is no longer sustainable at scale.',
                },
                {
                    type: 'Ad-hoc Tool Piles',
                    isFit: false,
                    reason: 'We don\'t just add more disconnected apps to a messy workflow.',
                },
                {
                    type: 'Instant "Magic" AI',
                    isFit: false,
                    reason: 'We build structured logic, not unpredictable "set and forget" magic.',
                },
            ],
        },
        contactBridge: {
            title: 'Ready for a more structured process?',
            description: 'The first step is a simple review of your current manual workflow. No pressure, just clarity.',
            primaryCta: 'Contact Us',
            secondaryCta: 'View Samples',
        },
    },
    tr: {
        seo: {
            title: 'Neden Biz? | WeCaHan Auto - Operasyonel Netlik ve Güven',
            description: 'Operasyonel otomasyona yönelik yöntem odaklı yaklaşımımızı anlayın. Neden geçici araçlar yerine sürdürülebilir sistemlere odaklanıyoruz?',
        },
        hero: {
            title: 'Neden operasyonel yapıya odaklanıyoruz?',
            description: 'Otomasyon, ancak desteklediği süreç kadar etkilidir. Sadece araç eklemiyoruz; hizmet işletmenizi daha öngörülebilir ve yönetilebilir kılan mantığı inşa ediyoruz.',
            trustStatement: 'Yöntem odaklı. Sonuç merkezli. Kapsam konusunda dürüst.',
        },
        optimization: {
            title: 'Neleri optimize ediyoruz?',
            description: 'Amacımız, yapılandırılmış netlik yoluyla bilişsel yükü ve manuel sürtünmeyi azaltmaktır.',
            items: [
                {
                    title: 'Netlik',
                    description: 'Her ekip üyesi, herhangi bir iş akışında bir sonraki adımda tam olarak ne olacağını bilmelidir.',
                },
                {
                    title: 'Tutarlılık',
                    description: 'Süreçler, talebi kimin karşıladığından bağımsız olarak her seferinde aynı şekilde çalışmalıdır.',
                },
                {
                    title: 'Görünürlük',
                    description: 'Gerçek zamanlı paneller ve kayıtlar, operasyonun hiçbir aşamasının "kara kutu" kalmamasını sağlar.',
                },
                {
                    title: 'Sürdürülebilirlik',
                    description: 'İş gereksinimleriniz değiştikçe izlenmesi ve ayarlanması kolay sistemler kuruyoruz.',
                },
            ],
        },
        methodology: {
            title: '4 Aşamalı Disiplinimiz',
            description: 'Sürdürülebilir otomasyon, teknik borçtan ve dağınık araçlardan kaçınmak için sistematik bir yaklaşım gerektirir.',
            pillars: [
                {
                    title: 'Analiz',
                    description: 'Tek bir mantık satırı yazmadan önce mevcut manuel sürtünmeleri haritalandırıyoruz.',
                },
                {
                    title: 'Kurulum',
                    description: 'Çekirdek stabiliteye ve hata yönetimine odaklanan kontrollü bir inşa aşaması.',
                },
                {
                    title: 'Bakım',
                    description: 'Sistemin dış araç değişikliklerine uyum sağlamasını garanti eden proaktif izleme.',
                },
                {
                    title: 'Genişleme',
                    description: 'Karmaşıklığı ancak temel iş akışının kararlılığı kanıtlandıktan sonra ekliyoruz.',
                },
            ],
        },
        philosophy: {
            title: 'Büyüme için daha güvenli bir model',
            description: 'Bireysel otomasyonlar genellikle "araç yorgunluğuna" yol açar. Biz merkezi bir operasyonel katman öneriyoruz.',
            logicPoints: [
                'Dağınık uygulama tarifleri yerine merkezi kontrol mantığı.',
                'Mevcut profesyonel araç setiniz üzerinde veri bütünlüğü.',
                'Hassas karar noktaları için insan denetimli tetikleyiciler.',
                'Yüksek hacimlerde aksamayan ölçeklenebilir mimari.',
            ],
        },
        transparency: {
            title: 'Şeffaflık yoluyla kanıt',
            description: 'Mantığın operasyonel zorluklarınızı tam olarak nasıl ele aldığını göstererek güven tesis ediyoruz.',
            proofPoints: [
                {
                    label: 'Akış Mantığı',
                    value: 'Sisteminizdeki her "eğer/o zaman" tetikleyicisinin açık dokümantasyonu.',
                },
                {
                    label: 'Kapsam Dürüstlüğü',
                    value: 'Neyin güvenle otomatikleştirilebileceğini ve neyin manuel kalması gerektiğini ilk günden tanımlıyoruz.',
                },
                {
                    label: 'Süreç Sağlığı',
                    value: 'Aksayan veya dikkat gerektiren her süreç için otomatik uyarılar.',
                },
            ],
        },
        idealFit: {
            title: 'Doğru eşleşme mi?',
            description: 'Hızlı çözümler yerine sistem disiplinine değer veren işletmelerle en iyi şekilde çalışıyoruz.',
            criteria: [
                {
                    type: 'Hizmet İşletmeleri',
                    isFit: true,
                    reason: 'Operasyonlar koordinasyon ve müşteri etkileşimi üzerine kurulu olduğunda.',
                },
                {
                    type: 'Büyüyen Ekipler',
                    isFit: true,
                    reason: 'Manuel koordinasyon ölçek büyütürken artık sürdürülemez hale geldiğinde.',
                },
                {
                    type: 'Dağınık Araç Yığınları',
                    isFit: false,
                    reason: 'Karışık bir iş akışına sadece daha fazla bağlantısız uygulama eklemiyoruz.',
                },
                {
                    type: 'Anlık "Sihirli" Yapay Zeka',
                    isFit: false,
                    reason: 'Tahmin edilemez sihirli değnekler değil, yapılandırılmış mantık kuruyoruz.',
                },
            ],
        },
        contactBridge: {
            title: 'Daha yapılandırılmış bir sürece hazır mısınız?',
            description: 'İlk adım, mevcut manuel iş akışınızın basit bir incelemesidir. Baskı yok, sadece netlik.',
            primaryCta: 'Bize Ulaşın',
            secondaryCta: 'Örnekleri İnceleyin',
        },
    },
};

export function getCenterWhyUsContent(locale: CenterLocale = "en"): WhyUsContent {
    return centerWhyUsBilingualContent[locale] || centerWhyUsBilingualContent.en;
}

/**
 * Default export for initial consumers.
 */
export const centerWhyUsContent = getCenterWhyUsContent("en");
