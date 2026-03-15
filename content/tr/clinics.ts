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

interface PainPointsContent {
    title: string;
    description: string;
    items: FeatureItem[];
}

interface ImprovementsContent {
    title: string;
    description: string;
    items: FeatureItem[];
}

interface FlagshipPackageContent {
    title: string;
    description: string;
    scope: string[];
    suitableFor: string[];
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
}

interface SolutionModule {
    title: string;
    description: string;
    points: string[];
}

interface SolutionModulesContent {
    title: string;
    description: string;
    items: SolutionModule[];
}

interface LevelItem {
    title: string;
    suitableFor: string;
    scope: string[];
}

interface SetupLevelsContent {
    title: string;
    description: string;
    items: LevelItem[];
}

interface MaintenanceLevel {
    title: string;
    features: string[];
}

interface MaintenanceLevelsContent {
    title: string;
    description: string;
    items: MaintenanceLevel[];
}

interface IncludedExcludedContent {
    title: string;
    description: string;
    included: string[];
    notIncluded: string[];
}

interface ExampleWorkflow {
    title: string;
    description: string;
    steps: string[];
}

interface ExampleWorkflowsContent {
    title: string;
    description: string;
    items: ExampleWorkflow[];
}

interface PricingLogicContent {
    title: string;
    description: string;
    factors: string[];
    cta: CtaConfig;
}

interface FitNotFitContent {
    title: string;
    description: string;
    fit: string[];
    notFit: string[];
}

interface FinalCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    helperText: string;
}

export interface TrClinicsContent {
    seo: SeoContent;
    hero: HeroContent;
    painPoints: PainPointsContent;
    improvements: ImprovementsContent;
    flagshipPackage: FlagshipPackageContent;
    solutionModules: SolutionModulesContent;
    setupLevels: SetupLevelsContent;
    maintenanceLevels: MaintenanceLevelsContent;
    whatsIncluded: IncludedExcludedContent;
    exampleWorkflows: ExampleWorkflowsContent;
    pricingLogic: PricingLogicContent;
    fitNotFit: FitNotFitContent;
    finalCta: FinalCtaContent;
}

export const trClinicsContent: TrClinicsContent = {
    seo: {
        title: 'Klinikler İçin Operasyonel Otomasyon | WeCaHan Auto',
        description: 'Hasta adayları, WhatsApp trafiği ve randevu süreçlerini düzene sokan, kliniklere özel otonom iş akışları ve takip sistemleri.',
    },
    hero: {
        eyebrow: 'Klinik Operasyon Çözümleri',
        title: 'Kliniklerde Dağınık Hasta Adayı ve Randevu Süreçlerini Düzene Sokun',
        description: 'WhatsApp, form ve randevu trafiğini kişilere bağlı olmaktan çıkarın. İlk temas, teyit ve hatırlatma süreçlerini daha kontrollü ve görünür bir yapıya taşıyın.',
        primaryCta: 'WhatsApp ile Konuş',
        secondaryCta: 'Sürecini Anlat',
    },
    painPoints: {
        title: 'Kliniklerde En Sık Karşılaşılan Süreç Sorunları',
        description: 'Operasyonel dağınıklık, sadece vakit değil, aynı zamanda hasta adayı ve güven kaybına da yol açar.',
        items: [
            {
                title: 'Dağınık Hasta Adayları',
                description: 'Form, WhatsApp ve telefon üzerinden gelen talepler tek merkezde toplanmadığında takip kalitesi düşer.',
            },
            {
                title: 'Kişiye Bağlı İlk Temas',
                description: 'İletişim akışı standart bir düzen yerine o anki sekreter veya danışman inisiyatifinde ilerler.',
            },
            {
                title: 'Randevu Teyit Karmaşası',
                description: 'Randevu teyit ve hatırlatma süreçleri manuel yapıldığında aksamalar ve unutulma riskleri artar.',
            },
            {
                title: 'Yüksek No-Show Oranları',
                description: 'Zamanında ve doğru kanaldan yapılmayan hatırlatmalar, klinikteki randevuya gelmeme oranlarını yükseltir.',
            },
            {
                title: 'Sekreter Üstünde Kilitlenen Yük',
                description: 'Sürekli tekrar eden sorular ve rutin bilgilendirmeler ekibin asıl verimli işlere odaklanmasını engeller.',
            },
            {
                title: 'Görünmez Takip Akışı',
                description: 'Hangi adayın hangi aşamada olduğu, kiminle ne konuşulduğu net bir şekilde izlenemez.',
            },
        ],
    },
    improvements: {
        title: 'Kliniğinizde Neyi Daha İyi Hale Getirebiliriz?',
        description: 'Amacımız teknolojiyi değil, düzeni ve takip gücünü kliniğinizin merkezine yerleştirmektir.',
        items: [
            {
                title: 'Daha Düzenli Lead Toplama',
                description: 'Tüm kanallardan gelen talepleri anında yakalayan ve ekip içine doğru şekilde dağıtan bir giriş katmanı.',
            },
            {
                title: 'Kontrollü İlk Temas',
                description: 'Adayın ilk mesajına verilen yanıtın, temel bilgi toplama sürecinin standart ve profesyonel ilerlemesi.',
            },
            {
                title: 'Net Randevu Teyit ve Hatırlatma',
                description: 'Randevu günü ve saati yaklaştığında otomatik devreye giren, hastayı sürece dahil eden hatırlatma akışları.',
            },
            {
                title: 'Azalan Rutin İş Yükü',
                description: 'Tekrar eden soruların ve operasyonel bildirimlerin otomasyonla çözülerek ekibe alan açılması.',
            },
            {
                title: 'Görünür Süreç Takibi',
                description: 'Yöneticilerin ve ekibin süreçteki darboğazları anlık olarak görebildiği şeffaf bir operasyon izleme yapısı.',
            },
        ],
    },
    flagshipPackage: {
        title: 'Klinikler İçin En Güçlü Başlangıç Paketi',
        description: 'Klinik Lead ve Randevu Otomasyon Paketi, bir klinikteki en kritik sürtünme noktalarını çözmek için tasarlanmıştır.',
        scope: [
            'Lead Yakalama ve Sınıflandırma',
            'WhatsApp Yönlendirme ve İlk Bilgi Toplama',
            'Randevu Teyit ve Hatırlatma Akışları',
            'Ekip Bildirimleri ve Görev Atamaları',
            'Temel Takip ve Görünürlük Katmanı',
        ],
        suitableFor: [
            'Aktif hasta adayı trafiği olan klinikler',
            'Sekreter ve danışman yükü artmış ekipler',
            'Lead kaçışı ve takip kopukluğu yaşayan yapılar',
            'Süreçlerini kurumsal bir düzene taşımak isteyenler',
        ],
        primaryCta: 'Sürecimi Anlat',
        secondaryCta: 'WhatsApp ile Konuş',
    },
    solutionModules: {
        title: 'Klinik Çözüm Alanlarımız',
        description: 'İhtiyaca göre özelleşebilen, birbiriyle entegre çalışan operasyonel modüller.',
        items: [
            {
                title: 'Lead Intake & Qualification',
                description: 'Taleplerin toplanması ve ön değerlendirme süreci.',
                points: [
                    'Form ve kanal entegrasyonları',
                    'Otomatik hoş geldin ve bilgi toplama',
                    'Sektörel branşlara göre sınıflandırma',
                    'Kayıt ve ekip yönlendirme',
                ],
            },
            {
                title: 'Appointment & Reminders',
                description: 'Randevu sadakati ve no-show yönetimi.',
                points: [
                    'Çok kanallı teyit mesajları',
                    'Kademeli hatırlatma akışları',
                    'İptal ve erteleme yönetimi',
                    'Takvim entegrasyonu desteği',
                ],
            },
            {
                title: 'Follow-Up & Engagement',
                description: 'Görüşme sonrası sıcaklığın korunması.',
                points: [
                    'Cevap vermeyen adaylar için takip akışı',
                    'Hizmet sonrası geri dönüş toplama',
                    'Periyodik kontrol hatırlatıcıları',
                    'Review ve referans toplama mantığı',
                ],
            },
            {
                title: 'Internal Visibility',
                description: 'Ekipler için operasyonel kontrol paneli.',
                points: [
                    'Eş zamanlı ekip bildirimleri',
                    'Süreç bazlı lead tablosu',
                    'Kritik aksiyon uyarıları',
                    'Basit performans göstergeleri',
                ],
            },
        ],
    },
    setupLevels: {
        title: 'Hangi Kurulum Seviyesi Size Daha Yakın?',
        description: 'Her kliniğin hacmi ve dijital olgunluğu farklıdır. Size en uygun derinlikte başlıyoruz.',
        items: [
            {
                title: 'Hafif Kurulum',
                suitableFor: 'Küçük ölçekli klinikler veya ilk otomasyon adımını atmak isteyen yapılar.',
                scope: [
                    'Temel lead toplama',
                    'Otomatik lead kaydı',
                    'Anlık ekip bildirimi',
                    'Basit WhatsApp yönlendirme',
                ],
            },
            {
                title: 'Orta Seviye Kurulum',
                suitableFor: 'Düzenli hasta akışı olan ve randevu takibini oturtmak isteyen klinikler.',
                scope: [
                    'Gelişmiş lead intake',
                    'Ön bilgi toplama akışı',
                    'Randevu teyit ve hatırlatma',
                    'Temel süreç görünürlüğü',
                ],
            },
            {
                title: 'Gelişmiş Kurulum',
                suitableFor: 'Yüksek lead hacmi yöneten ve derin takip katmanı isteyen büyük ekipler.',
                scope: [
                    'Çok kanallı karmaşık akışlar',
                    'Detaylı lead sınıflandırma',
                    'Kapsamlı follow-up katmanı',
                    'Dashboard ve verimlilik raporları',
                ],
            },
        ],
    },
    maintenanceLevels: {
        title: 'Kurulum Sonrası Bakım Katmanları',
        description: 'Sistemlerin sürekliliği, güncelliği ve performansının korunması için sunduğumuz destek modelleri.',
        items: [
            {
                title: 'Temel Bakım',
                features: [
                    'Sistemlerin aktiflik takibi',
                    'Kritik hata düzeltmeleri',
                    'Aylık genel sağlık kontrolü',
                ],
            },
            {
                title: 'Standart Bakım',
                features: [
                    'Aktif süreç izleme',
                    'Küçük akış iyileştirmeleri',
                    'Düzenli optimizasyon desteği',
                    'Öncelikli hata çözümü',
                ],
            },
            {
                title: 'Genişletilmiş Bakım',
                features: [
                    'Proaktif performans takibi',
                    'Yeni mini akış eklemeleri',
                    'Sürekli danışmanlık katmanı',
                    'En hızlı destek yanıt süresi',
                ],
            },
        ],
    },
    whatsIncluded: {
        title: 'Hizmet Kapsamında Ne Var, Ne Yok?',
        description: 'Net sınırlar, daha sağlıklı iş birlikleri ve doğru beklenti yönetimi sağlar.',
        included: [
            'Mevcut sürece uygun akış tasarımı',
            'Otomasyon kurulumu ve test süreci',
            'Temel kullanım kılavuzları',
            'Belirlenen kanallarda bildirim akışları',
            'Bakım seviyesine göre teknik izleme',
        ],
        notIncluded: [
            'Özel hastane yazılımı (HBYS/ERP) geliştirme',
            'Çağrı merkezi (call center) hizmeti',
            'Doktorluk veya medikal karar süreçleri',
            'Dijital reklam yönetimi ve medya satın alma',
            'Sınırsız yeni modül veya kapsam dışı geliştirme',
        ],
    },
    exampleWorkflows: {
        title: 'Örnek Klinik Akışları',
        description: 'Kliniğinizde her gün gerçekleşen senaryoların nasıl otonom hale geldiğini görün.',
        items: [
            {
                title: 'Klinik Lead Intake Flow',
                description: 'Yeni bir hasta adayı formu doldurduğunda veya WhatsApp üzerinden ulaştığında başlayan akış.',
                steps: [
                    'Adayın temel bilgileri otomatik toplanır.',
                    'İhtiyacına göre lead sınıflandırılır.',
                    'İlgili danışmana veya sekretere anlık bildirim gider.',
                    'Adaya profesyonel bir karşılama mesajı iletilir.',
                ],
            },
            {
                title: 'Appointment Confirmation Flow',
                description: 'Randevu oluşturulduğu andan muayene vaktine kadar süren teyit ve hatırlatma akışı.',
                steps: [
                    'Randevu onay mesajı eş zamanlı gönderilir.',
                    '24 saat ve 2 saat kala hatırlatmalar yapılır.',
                    'İptal gelirse boşalan saat ekibe bildirilir.',
                    'No-show durumunda takip akışı başlatılır.',
                ],
            },
        ],
    },
    pricingLogic: {
        title: 'Klinikler İçin Fiyatlandırma Mantığı',
        description: 'Fiyatlandırma, kurulacak akışların derinliğine, yönetilen kanal sayısına ve bakım ihtiyacına göre şekillenir.',
        factors: [
            'Otomatize edilecek süreç sayısı',
            'Entegre edilecek iletişim kanalları',
            'Klinik ekip büyüklüğü ve kullanıcı sayısı',
            'Talep ve randevu hacmi yoğunluğu',
            'Tercih edilen bakım ve destek seviyesi',
        ],
        cta: 'Fiyatlandırma Mantığını Gör',
    },
    fitNotFit: {
        title: 'Size Uygun muyuz?',
        description: 'Dürüst bir filtre, her iki taraf için de en doğru başlangıçtır.',
        fit: [
            'Aktif dijital reklam veya talep akışı olan klinikler',
            'İletişim sürtünmesi yaşayan ekipler',
            'WhatsApp ve form takibinde zorlanan yapılar',
            'Operasyonel düzenini teknolojiyle korumak isteyenler',
        ],
        notFit: [
            'Eğitime ve sürece zaman ayırmak istemeyenler',
            'Sadece reklam ajansı arayanlar',
            'Sıfırdan hastane yazılımı yazdırmak isteyenler',
            'Operasyona dahil olmadan sihirli çözüm bekleyenler',
        ],
    },
    finalCta: {
        title: 'Kliniğinizde En Çok Zorlandığınız Süreci Kısaca Anlatın',
        description: 'Önce mevcut yapınızı anlayalım, sonra size en uygun başlangıç seviyesini birlikte netleştirelim.',
        primaryCta: 'WhatsApp ile Konuş',
        secondaryCta: 'Sürecimi Paylaş',
        helperText: 'Her kliniğe özel analiz ile en doğru kapsamı belirliyoruz.',
    },
};
