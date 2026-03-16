type CtaConfig = string | { label: string; href: string };

interface SeoContent {
    title: string;
    description: string;
}

interface HeroContent {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
}

interface FeatureItem {
    title: string;
    description: string;
    icon?: string;
}

interface ServiceModelOverviewContent {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
}

interface AnalysisContent {
    title: string;
    description: string;
    included: string[];
    notIncluded: string[];
    deliverables: string[];
    bestFor: string[];
}

interface SetupPackage {
    title: string;
    description: string;
    suitableFor: string;
    exampleScope: string[];
    included: string[];
    notIncluded: string[];
    deliverables: string[];
    bestFor: string[];
}

interface SetupPackagesContent {
    title: string;
    description: string;
    packages: SetupPackage[];
}

interface MaintenancePackage {
    title: string;
    description: string;
    included: string[];
    notIncluded: string[];
    bestFor: string[];
}

interface MaintenancePackagesContent {
    title: string;
    description: string;
    packages: MaintenancePackage[];
    note: string;
}

interface AdditionalDevelopmentContent {
    title: string;
    description: string;
    examples: string[];
    notThis: string[];
    whySeparate: string;
}

interface IncludedScopeContent {
    title: string;
    description: string;
    checklist: string[];
}

interface NotIncludedContent {
    title: string;
    description: string;
    limits: string[];
}

interface DeliverablesAndClientContributionContent {
    deliverablesTitle: string;
    deliverables: string[];
    contributionTitle: string;
    contribution: string[];
}

interface FitCheckContent {
    goodFitTitle: string;
    goodFit: string[];
    notGoodFitTitle: string;
    notGoodFit: string[];
}

interface ContactCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    helperText: string;
}

export interface TrPackagesContent {
    seo: SeoContent;
    hero: HeroContent;
    serviceModelOverview: ServiceModelOverviewContent;
    automationAnalysis: AnalysisContent;
    setupPackages: SetupPackagesContent;
    maintenancePackages: MaintenancePackagesContent;
    additionalDevelopment: AdditionalDevelopmentContent;
    includedScope: IncludedScopeContent;
    notIncluded: NotIncludedContent;
    deliverablesAndClientContribution: DeliverablesAndClientContributionContent;
    fitCheck: FitCheckContent;
    contactCta: ContactCtaContent;
}

export const trPackagesContent: TrPackagesContent = {
    seo: {
        title: 'Paketler ve Hizmet Kapsamı | We CaHan',
        description: 'Otomasyon analizi, kurulum seviyeleri ve aylık bakım paketlerimizle tanışın. Süreçlerinize en uygun yapıyı birlikte belirleyelim.',
    },
    hero: {
        eyebrow: 'HİZMET MODELİMİZ',
        title: 'Kapsamı Belli, Aşamaları Net Otomasyon Hizmet Modeli',
        description: 'Her işletmeye aynı yapı önerilmez. Önce ihtiyaç ve süreç değerlendirilir; sonra uygun kurulum ve bakım seviyesi belirlenir.',
        primaryCta: { label: 'Kısa Değerlendirme Al', href: '#brief-form' },
        secondaryCta: { label: 'Fiyatlandırma Mantığı', href: '/fiyatlandirma' },
    },
    serviceModelOverview: {
        eyebrow: 'DÖRT ADIMDA ÇÖZÜM',
        title: 'Süreciniz Nasıl İlerliyor?',
        description: 'Bütünleşik bir otomasyon inşası için analizi, kurulumu ve sürekliliği ayrı mantıklarla yönetiyoruz.',
        items: [
            {
                title: 'Otomasyon Analizi',
                description: 'Mevcut sürecin incelenmesi, tekrar eden işler ve darboğazların belirlenmesi.',
            },
            {
                title: 'Kurulum',
                description: 'Belirlenen ihtiyaçlara göre gerekli akışların inşası ve devreye alınması.',
            },
            {
                title: 'Aylık Bakım',
                description: 'İzleme, küçük düzeltmeler, sürdürülebilirlik ve performans takibi.',
            },
            {
                title: 'Ek Geliştirme',
                description: 'Yeni modüller, yeni entegrasyonlar veya kapsamın genişletilmesi.',
            },
        ],
    },
    automationAnalysis: {
        title: 'Otomasyon Analizi',
        description: 'Doğru bir kurulum için önce mevcut sürecin röntgenini çekiyoruz. Bu aşama, hatalı yatırım riskini ortadan kaldırır.',
        included: [
            'Mevcut sürecin adım adım incelenmesi',
            'Tekrar eden operasyonel yüklerin tespiti',
            'Otomasyona en uygun alanların belirlenmesi',
            'Gerekli araç ve araç maliyetlerinin analizi',
        ],
        notIncluded: [
            'Canlı sistem kurulumu',
            'Teknik entegrasyon inşası',
            'Süreç eğitimleri',
        ],
        deliverables: [
            'Mevcut süreç haritası özeti',
            'Önerilen otomasyon alanları listesi',
            'Kurulum için kapsam taslağı',
        ],
        bestFor: [
            'Nereden başlayacağını bilmeyenler',
            'Dağınık sürecini netleştirmek isteyenler',
            'Direkt büyük paket riskine girmek istemeyenler',
        ],
    },
    setupPackages: {
        title: 'Kurulum Paket Seviyeleri',
        description: 'İşletmenizin hacmine ve otomatize edilecek süreçlerin derinliğine göre üç farklı kurulum seviyesi sunuyoruz.',
        packages: [
            {
                title: 'Hafif Kurulum',
                description: 'Tek bir ana probleme odaklanan, hızlı ve etkili başlangıç seviyesi.',
                suitableFor: 'Küçük ekipler ve ilk otomasyon denemesi yapacak işletmeler.',
                exampleScope: ['Tek ana workflow', 'Temel lead takip akışı', 'Temel bildirim yapısı'],
                included: ['Workflow kurulumu', 'Test süreci', 'Temel teslim'],
                notIncluded: ['Çok katmanlı yapılar', 'Derin raporlama', 'Karmaşık CRM entegrasyonları'],
                deliverables: ['Çalışan temel akış', 'Kısa kullanım özeti'],
                bestFor: ['Küçük klinikler', 'Tek adımlı operasyonu olan ofisler'],
            },
            {
                title: 'Orta Seviye Kurulum',
                description: 'Aktif operasyonun birden fazla noktasını toparlayan standart paket.',
                suitableFor: 'Düzenli talep ve işlem hacmi olan, süreç kontrolü isteyen ekipler.',
                exampleScope: ['2-3 ana workflow', 'Gelişmiş yönlendirme', 'Basit dashboard'],
                included: ['Çoklu akış inşası', 'Entegrasyon katmanı', 'Raporlama temeli'],
                notIncluded: ['Ağır özel yazılım geliştirme', 'Kurumsal ERP mimarisi'],
                deliverables: ['Bütünleşik süreç ağı', 'Süreç görünürlük katmanı'],
                bestFor: ['Büyüyen klinikler', 'Evrak trafiği yoğun ofisler'],
            },
            {
                title: 'Gelişmiş Kurulum',
                description: 'Çok kanallı ve derinlikli süreçlerin otonom hale getirildiği en üst seviye.',
                suitableFor: 'Yüksek hacimli ve karmaşık işleyişi olan operasyonlar.',
                exampleScope: ['Çok kanallı akışlar', 'Gelişmiş routing', 'Dashboard ve raporlama'],
                included: ['Uçtan uca otomasyon ağı', 'Genişletilmiş test süreci', 'Veri odaklı dashboard'],
                notIncluded: ['ERP yerine geçen sistem inşası', 'Sınırsız yeni modül ekleme'],
                deliverables: ['Kapsamlı otomasyon ekosistemi', 'Genişletilebilir altyapı'],
                bestFor: ['Yoğun klinik ağları', 'Büyük ölçekli hizmet operasyonları'],
            },
        ],
    },
    maintenancePackages: {
        title: 'Süreklilik ve Bakım Planları',
        description: 'Kurulan sistemlerin güncel kalması, API değişikliklerine uyum sağlaması ve performansını koruması için bakım planları kritiktir.',
        packages: [
            {
                title: 'Temel Bakım',
                description: 'Sistemin stabil çalışmasını sağlayan giriş seviyesi destek.',
                included: ['Sistem aktiflik takibi', 'Hata düzeltmeleri', 'Aylık sağlık kontrolü'],
                notIncluded: ['Yeni geliştirme', 'Yüksek öncelikli destek'],
                bestFor: ['Oturmuş ve hafif kapsamlı kurulumlar'],
            },
            {
                title: 'Standart Bakım',
                description: 'Düzenli iyileştirme ve performans takibi içeren aktif model.',
                included: ['Süreç iyileştirmeleri', 'Öncelikli destek', 'Düzenli optimizasyon'],
                notIncluded: ['Büyük yeni modül inşası', 'Özel geliştirme talepleri'],
                bestFor: ['Aktif kullanılan ve güncellenmesi gereken sistemler'],
            },
            {
                title: 'Genişletilmiş Bakım',
                description: 'Danışmanlık ve küçük eklemelerle sistemin sürekli büyümesini sağlayan model.',
                included: ['Proaktif performans takibi', 'Küçük yeni akışlar', 'Sürekli danışmanlık'],
                notIncluded: ['Kapsam dışı büyük proje inşası'],
                bestFor: ['Sürekli büyüme ve yakın destek hedefleyen ekipler'],
            },
        ],
        note: 'Bakım kapsamı dışındaki büyük geliştirmeler "Ek Geliştirme" altında ayrıca projelendirilir.',
    },
    additionalDevelopment: {
        title: 'Ek Geliştirme Mantığı',
        description: 'İhtiyaçlar değiştikçe veya operasyonunuz büyüdükçe mevcut yapıyı genişletmek gerekebilir.',
        examples: [
            'Yeni bir departman akışının eklenmesi',
            'Tamamen yeni bir araç entegrasyonu',
            'Gelişmiş yeni bir raporlama ekranı inşası',
            'Mevcut akışın yapısını değiştiren büyük güncellemeler',
        ],
        notThis: [
            'Mevcut akışlardaki küçük pürüzlerin giderilmesi',
            'Kurulum sırasında zaten kararlaştırılan kapsam maddeleri',
        ],
        whySeparate: 'Her yeni modül ayrı bir tasarım, test ve teslim süreci gerektirdiği için bakım hizmetinden ayrı olarak projelendirilir.',
    },
    includedScope: {
        title: 'Ortak Hizmet Omurgası',
        description: 'Tüm kurulum seviyelerinde sunduğumuz standart kalite ve hizmet unsurları.',
        checklist: [
            'İşletmenize özel süreç analizi',
            'Workflow mimari tasarımı',
            'API ve araç entegrasyonları',
            'Uçtan uca test süreçleri',
            'Temel kullanım dokümantasyonu',
            'Canlıya alma desteği',
        ],
    },
    notIncluded: {
        title: 'Hizmet Sınırlarımız',
        description: 'Daha sağlıklı bir iş birliği için neleri yapmadığımızı dürüstçe paylaşıyoruz.',
        limits: [
            'Tam kapsamlı özel yazılım / SaaS geliştirme',
            'ERP veya HBYS gibi sistemlerin baştan yazılması',
            'Dijital reklam hesabı yönetimi ve medya satın alma',
            'Doğrudan satış ekibi veya call center hizmeti',
            'Hukuki, mali veya tıbbi danışmanlık',
            'Sınırsız ücretsiz revizyon ve modül inşası',
        ],
    },
    deliverablesAndClientContribution: {
        deliverablesTitle: 'Neler Teslim Alacaksınız?',
        deliverables: [
            'Çalışan ve test edilmiş otomasyon akışları',
            'Süreçlerinizi izleyebileceğiniz görsel yapı',
            'Temel operasyonel kullanım kılavuzu',
            'Bakım seviyesine göre teknik destek erişimi',
        ],
        contributionTitle: 'Sizden Neler Bekliyoruz?',
        contribution: [
            'Gerekli araç erişimlerinin (API key vb.) sağlanması',
            'Mevcut sürecin şeffaf bir şekilde paylaşılması',
            'Test aşamasında aktif geri bildirim verilmesi',
            'Karar verici bir yetkilinin sürece eşlik etmesi',
        ],
    },
    fitCheck: {
        goodFitTitle: 'Kimin İçin Uygundur?',
        goodFit: [
            'Tekrar eden manuel işleri olan operasyonlar',
            'Verim kaybını teknolojiyle çözmek isteyenler',
            'Kurulum ve bakımın değerini bilen ekipler',
            'Süreçlerini adım adım profesyonelleştirmek isteyenler',
        ],
        notGoodFitTitle: 'Kime Uygun Değildir?',
        notGoodFit: [
            'Sihirli ve emeksiz bir çözüm arayanlar',
            'Hiçbir teknik yetki veya süreç bilgisi paylaşmayanlar',
            'Sıfırdan hastane/muhasebe yazılımı yazdırmak isteyenler',
            'Sadece reklam ajansı hizmeti bekleyenler',
        ],
    },
    contactCta: {
        title: 'Sürecinize Uygun Modeli Belirleyelim',
        description: 'Hangi kurulum seviyesinin size daha çok verim sağlayacağını anlamak için kısa bir süreç özeti yeterlidir.',
        primaryCta: { label: 'Değerlendirme Başlat', href: '#brief-form' },
        secondaryCta: { label: 'Fiyatlandırma Mantığı', href: '/fiyatlandirma' },
        helperText: 'En geç 24 saat içinde sürecinize dair bir ön değerlendirme ile dönüş yapıyoruz.',
    },
};
