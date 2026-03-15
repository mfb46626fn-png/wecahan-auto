type CtaConfig = string | { label: string; href: string };

interface SeoContent {
    title: string;
    description: string;
}

interface HeroContent {
    eyebrow?: string;
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
}

interface PricingModelItem {
    title: string;
    description: string;
}

interface PricingPhilosophyContent {
    title: string;
    description: string;
    items: PricingModelItem[];
}

interface SetupLevel {
    title: string;
    band: string;
    suitableFor: string;
    scope: string[];
    whyThisBand: string;
}

interface SetupPackagesContent {
    title: string;
    description: string;
    levels: SetupLevel[];
}

interface MaintenancePlan {
    title: string;
    band: string;
    suitableFor: string;
    scope: string[];
}

interface MaintenancePlansContent {
    title: string;
    description: string;
    plans: MaintenancePlan[];
    note: string;
}

interface FeatureGridItem {
    title: string;
    description: string;
}

interface PriceFactorsContent {
    title: string;
    description: string;
    factors: FeatureGridItem[];
}

interface ExampleComparison {
    title: string;
    scope: string[];
    bandIndication: string;
}

interface ExampleComparisonsContent {
    title: string;
    description: string;
    examples: ExampleComparison[];
}

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqContent {
    title: string;
    questions: FaqItem[];
}

interface FinalCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    trustPoints: string[];
}

export interface TrPricingContent {
    seo: SeoContent;
    hero: HeroContent;
    pricingPhilosophy: PricingPhilosophyContent;
    analysisPricing: {
        title: string;
        band: string;
        scope: string[];
        notIncluded: string[];
        factors: string[];
    };
    setupPackages: SetupPackagesContent;
    maintenancePlans: MaintenancePlansContent;
    additionalDevLogic: {
        title: string;
        band: string;
        scope: string[];
        notIncluded: string[];
        whyWideRange: string;
    };
    whatsIncluded: {
        title: string;
        items: string[];
    };
    whatsNotIncluded: {
        title: string;
        items: string[];
    };
    howPricingIsCalculated: PriceFactorsContent;
    whoThisIsFor: {
        title: string;
        description: string;
        items: FeatureGridItem[];
    };
    faq: FaqContent;
    finalCta: FinalCtaContent;
}

export const trPricingContent: TrPricingContent = {
    seo: {
        title: 'Şeffaf Otomasyon Fiyatlandırması | WeCaHan Auto',
        description: 'Otomasyon kurulum, analiz ve bakım fiyat mantığımızı keşfedin. Kapsam bazlı, dürüst ve sürdürülebilir fiyatlandırma modellerimiz.',
    },
    hero: {
        eyebrow: 'Fiyatlandırma Mantığı',
        title: 'Fiyatlandırma, Kapsamın Derinliğine Göre Şekillenir',
        description: 'Her işletmenin süreç yapısı farklı olduğu için nihai kapsam analiz sonrası netleşir. Yine de analiz, kurulum, bakım ve ek geliştirme mantığını burada açık şekilde görebilirsiniz.',
        primaryCta: 'Kısa Değerlendirme Al',
        secondaryCta: 'Paketler Yapısını Gör',
    },
    pricingPhilosophy: {
        title: 'Fiyatlandırma Modelimiz',
        description: 'Fiyatı bir kara kutu olmaktan çıkarıyor, analizden bakıma kadar tüm kalemleri mantıksal bir çerçeveye oturtuyoruz.',
        items: [
            {
                title: 'Otomasyon Analizi',
                description: 'İlk değerlendirme ve önerilen kapsamın netleşmesi süreci.',
            },
            {
                title: 'Kurulum',
                description: 'Seçilen kapsamın inşa edilmesi, test edilmesi ve devreye alınması.',
            },
            {
                title: 'Aylık Bakım',
                description: 'Kurulan sistemin izlenmesi, küçük düzeltmeler ve sürdürülebilir desteği.',
            },
            {
                title: 'Ek Geliştirme',
                description: 'Bakım kapsamı dışındaki yeni modüller ve genişleyen ihtiyaçlar.',
            },
        ],
    },
    analysisPricing: {
        title: 'Otomasyon Analizi',
        band: '10.000 – 25.000 TL',
        scope: [
            'Mevcut sürecin uçtan uca değerlendirilmesi',
            'Tekrar eden işlerin ve darboğazların tespiti',
            'Otomasyona uygun alanların belirlenmesi',
            'Önerilen kapsam yaklaşımı ve önceliklendirme',
        ],
        notIncluded: [
            'Sistemlerin canlı kurulumu',
            'Bakım desteği',
            'Sınırsız danışmanlık seansları',
        ],
        factors: [
            'İncelenecek süreç sayısı',
            'İş akışı derinliği',
            'Farklı kanal ve kaynak sayısı',
        ],
    },
    setupPackages: {
        title: 'Kurulum Seviyeleri',
        description: 'Kurulum maliyeti, sistemin kaç farklı süreci yöneteceği ve ne kadar derin entegrasyon gerektireceğine göre değişir.',
        levels: [
            {
                title: 'Hafif Kurulum',
                band: '25.000 – 50.000 TL',
                suitableFor: 'Tek ana süreci çözmek isteyen küçük klinikler ve butik ofisler.',
                scope: [
                    'Tek ana iş akışı kurulumu',
                    'Temel kayıt ve yönlendirme mantığı',
                    'Basit bildirim katmanı',
                    'Hızlı teslimat süreci',
                ],
                whyThisBand: 'Kurulan süreç sayısı sınırlıdır, entegrasyon ve görünürlük katmanı daha hafiftir.',
            },
            {
                title: 'Orta Seviye Kurulum',
                band: '50.000 – 90.000 TL',
                suitableFor: 'Birden fazla tekrarlayan süreci olan, aktif talep ve evrak akışı yöneten ekipler.',
                scope: [
                    '2-3 ana iş akışı entegrasyonu',
                    'Yönlendirme, takip ve görünürlük katmanları',
                    'Gelişmiş bildirim senaryoları',
                    'Detaylı test ve teslimat süreci',
                ],
                whyThisBand: 'Süreç sayısı ve akış derinliği arttıkça kurulum süresi ve teslim karmaşıklığı artar.',
            },
            {
                title: 'Gelişmiş Kurulum',
                band: '90.000 – 180.000 TL',
                suitableFor: 'Yoğun operasyonu olan, çok kanallı akış yöneten ve derin raporlama isteyen işletmeler.',
                scope: [
                    'Çok adımlı ve kompleks akışlar',
                    'Geniş kanal ve API entegrasyonları',
                    'Otomatik follow-up ve raporlama katmanları',
                    'Geniş kapsamlı teslimat ve dökümantasyon',
                ],
                whyThisBand: 'Akış sayısı, test yükü, entegrasyon derinliği ve görünürlük katmanı belirgin biçimde artar.',
            },
        ],
    },
    maintenancePlans: {
        title: 'Bakım Seviyeleri',
        description: 'Sistemlerin sürekliliğini sağlamak, küçük aksaklıkları gidermek ve performansı korumak için uygulanan aylık modeller.',
        plans: [
            {
                title: 'Temel Bakım',
                band: '10.000 – 18.000 TL / ay',
                suitableFor: 'Küçük kapsamlı kurulumlar ve sınırlı destek ihtiyacı olan ekipler.',
                scope: [
                    'Sistemlerin temel izlenmesi',
                    'Küçük hata düzeltmeleri',
                    'Aylık genel sağlık kontrolü',
                ],
            },
            {
                title: 'Standart Bakım',
                band: '18.000 – 30.000 TL / ay',
                suitableFor: 'Aktif kullanılan sistemler ve düzenli iyileştirme bekleyen ekipler.',
                scope: [
                    'Düzenli sistem izleme',
                    'Küçük geliştirmeler ve optimizasyonlar',
                    'Destek taleplerine hızlı dönüş',
                ],
            },
            {
                title: 'Genişletilmiş Bakım',
                band: '30.000 – 55.000 TL / ay',
                suitableFor: 'Yoğun operasyonlar ve öncelikli destek bekleyen geniş yapılar.',
                scope: [
                    'Aktif ve öncelikli izleme',
                    'Performans iyileştirme önerileri',
                    'Yeni mini akışların eklenmesi',
                ],
            },
        ],
        note: 'Bakım kapsamı dışındaki büyük yeni modüller ek geliştirme kalemi olarak değerlendirilir.',
    },
    additionalDevLogic: {
        title: 'Ek Geliştirme Mantığı',
        band: '8.000 – 40.000 TL+',
        scope: [
            'Yeni workflow eklenmesi',
            'Yeni API veya kanal entegrasyonu',
            'Mevcut yapının yeni modüllerle büyütülmesi',
            'Gelişmiş raporlama katmanları inşa edilmesi',
        ],
        notIncluded: [
            'Bakım kapsamındaki küçük düzeltmeler',
            'Teslim dökümanında yer alan mevcut işler',
        ],
        whyWideRange: 'Yeni istekler bazen küçük bir modül, bazen ise yeni bir mini proje niteliği taşıyabildiği için aralık geniştir.',
    },
    whatsIncluded: {
        title: 'Neleri Dahil Ediyoruz?',
        items: [
            'Süreç analizi ve akış tasarımı',
            'Sistemlerin teknik kurulumu ve testi',
            'Gerekli entegrasyonların sağlanması',
            'Temel kullanıcı dökümantasyonu',
            'Belirlenen kapsam dahilinde hata takibi',
        ],
    },
    whatsNotIncluded: {
        title: 'Neler Dahil Değil?',
        items: [
            '3. parti yazılım lisans ücretleri (n8n, CRM vb.)',
            'Kapsam dışı büyük yeni özellikler',
            'Reklam yönetimi veya sosyal medya desteği',
            'Sıfırdan özel yazılım/kodlama geliştirme',
        ],
    },
    howPricingIsCalculated: {
        title: 'Fiyat Neye Göre Çıkıyor?',
        description: 'Fiyatlarımız keyfi bir liste değil; operasyonunuzun derinliğini yansıtan somut değişkenlerin bir sonucudur.',
        factors: [
            {
                title: 'Workflow Karmaşıklığı',
                description: 'Akıştaki karar noktaları ve mantıksal dallanmaların yoğunluğu.',
            },
            {
                title: 'Kanal Sayısı',
                description: 'WhatsApp, Form, E-posta gibi kaç farklı kaynağın sisteme bağlandığı.',
            },
            {
                title: 'Entegrasyon İhtiyacı',
                description: 'Kaç farklı 3. parti yazılımla veri alışverişi yapıldığı.',
            },
            {
                title: 'Ekip Büyüklüğü',
                description: 'Sistemi kaç kullanıcının aktif olarak kullandığı ve raporlama ihtiyacı.',
            },
        ],
    },
    whoThisIsFor: {
        title: 'Bu Model Kimler İçin?',
        description: 'Eğer aşağıdaki durumları yaşıyorsanız, bu şeffaf fiyatlandırma modeli sizin için en sağlıklı başlangıçtır.',
        items: [
            {
                title: 'Net Bütçe Görmek İsteyenler',
                description: 'Süreç başlamadan önce hangi kalem için ne ödeyeceğini bilmek isteyen işletmeler.',
            },
            {
                title: 'Sürdürülebilirlik Bekleyenler',
                description: 'Kurulan sistemin yarın bozulmayacağından ve destek alabileceğinden emin olmak isteyenler.',
            },
            {
                title: 'Kapsam Bağımlı Büyüyenler',
                description: 'Her şeyi aynı anda değil, ihtiyacı kadarını kurup adım adım genişlemek isteyen ekipler.',
            },
        ],
    },
    faq: {
        title: 'Fiyatlandırma Hakkında Sıkça Sorulan Sorular',
        questions: [
            {
                question: 'Neden sabit tek fiyat yok?',
                answer: 'Çünkü kurulacak akışların sayısı, derinliği ve bakım ihtiyacı her işletmede farklıdır. Yine de burada paylaşılan bantlar, genel çerçeveyi görmek için yeterli başlangıç noktası sunar.',
            },
            {
                question: 'Önce analiz yapmak zorunlu mu?',
                answer: 'Evet. Doğru bir otomasyon inşası için önce mevcut sürecin röntgenini çekmek gerekir. Bu, hatalı kurulum ve gereksiz maliyet riskini ortadan kaldırır.',
            },
            {
                question: 'Kurulum ve bakım neden ayrı ücretlendiriliyor?',
                answer: 'Kurulum bir defalık teknik inşa sürecidir. Bakım ise sistemin güncelliğini koruması, API değişikliklerine uyum sağlaması ve performansının izlenmesi için gereken süreklilik hizmetidir.',
            },
            {
                question: 'Daha küçük bir kapsamla başlayabilir miyim?',
                answer: 'Kesinlikle. Genellikle en çok vakit kaybedilen tek bir süreci otomatize ederek başlayıp, verim aldıkça kapsamı genişletmeyi öneriyoruz.',
            },
        ],
    },
    finalCta: {
        title: 'Sürecinize Uygun Kapsamı Birlikte Netleştirelim',
        description: 'Fiyatlandırma bantları genel çerçeveyi gösterir. Net kapsam için mevcut sürecinizi kısa şekilde anlatmanız yeterlidir.',
        primaryCta: 'Kısa Değerlendirme Al',
        secondaryCta: 'WhatsApp ile Yaz',
        trustPoints: [
            'Her işletmeye aynı paket önerilmez.',
            'Gerekli olmayan kapsam şişirilmez.',
            'Önce ihtiyaç netleşir, sonra önerilen yapı çıkar.',
        ],
    },
};
