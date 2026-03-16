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
    helperText?: string;
}

interface FeatureItem {
    title: string;
    description: string;
    icon?: string;
}

interface ProblemsContent {
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
    description: string;
    suitableFor: string;
    included: string[];
}

interface SetupLevelsContent {
    title: string;
    description: string;
    items: LevelItem[];
}

interface MaintenanceLevel {
    title: string;
    description: string;
    included: string[];
    notIncluded: string[];
    bestFor: string;
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
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
}

interface FitCheckContent {
    title: string;
    description: string;
    goodFit: string[];
    notGoodFit: string[];
}

interface FinalCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    helperText: string;
}

export interface TrAccountingContent {
    seo: SeoContent;
    hero: HeroContent;
    commonWorkflowProblems: ProblemsContent;
    whatWeHelpImprove: ImprovementsContent;
    flagshipOfficePackage: FlagshipPackageContent;
    solutionModules: SolutionModulesContent;
    setupLevels: SetupLevelsContent;
    maintenanceLevels: MaintenanceLevelsContent;
    includedScope: IncludedExcludedContent;
    notIncluded: IncludedExcludedContent; // For vertical consistency if needed, but the merged version is often used
    exampleWorkflow: ExampleWorkflowsContent;
    pricingLogic: PricingLogicContent;
    fitCheck: FitCheckContent;
    contactCta: FinalCtaContent;
}

export const trAccountingContent: TrAccountingContent = {
    seo: {
        title: 'Muhasebe Ofisleri İçin Operasyonel Otomasyon | WeCaHan Auto',
        description: 'Mali müşavirlik ve muhasebe ofislerinde evrak takibi, müşteri hatırlatmaları ve görev görünürlüğünü düzenleyen operasyonel otomasyon sistemleri.',
    },
    hero: {
        eyebrow: 'Ofis Operasyon Çözümleri',
        title: 'Muhasebe Ofislerinde Tekrar Eden Takip ve Evrak Süreçlerini Düzene Sokun',
        description: 'Müşteri evrak isteme, rutin hatırlatmalar ve ekip içi görev akışlarını kişisel takibe bağlı olmaktan çıkarın. Ofis operasyonunuzu daha görünür ve kontrollü bir yapıya taşıyın.',
        primaryCta: 'Kısa Değerlendirme Al',
        secondaryCta: 'Sürecini Anlat',
        helperText: 'Düzen, takip ve görünürlük odaklı otomasyon yapıları.',
    },
    commonWorkflowProblems: {
        title: 'Muhasebe Ofislerinde En Sık Karşılaşılan Süreç Sorunları',
        description: 'Operasyonel dağınıklık, sadece zaman kaybı değil, aynı zamanda ekip enerjisi ve müşteri memnuniyeti kaybıdır.',
        items: [
            {
                title: 'Manuel Evrak Takibi',
                description: 'Müşterilerden her dönem aynı belgeleri istemek ve takibini kişisel hafızalara güvenerek yapmak zaman kaybını artırır.',
            },
            {
                title: 'Kişisel Hatırlatma Yükü',
                description: 'Ödeme, beyan veya belge hatırlatmaları ekip üyelerinin manuel takibiyle yürüdüğünde aksama riskleri yükselir.',
            },
            {
                title: 'Zayıf Görev Görünürlüğü',
                description: 'Hangi personelin hangi müşteriyle hangi aşamada olduğu net izlenemediğinde operasyonel kontrol zorlaşır.',
            },
            {
                title: 'Dönemsel İş Sıkışıklığı',
                description: 'Kritik dönemlerde artan takip yükü, sistemli bir yapı olmadığında ekip üzerinde yüksek stres yaratır.',
            },
            {
                title: 'İletişim Dağınıklığı',
                description: 'Müşteriyle yapılan görüşmelerin ve taleplerin parçalı araçlarda (WhatsApp, mail, telefon) kalması süreç izlenebilirliğini bozar.',
            },
            {
                title: 'Ekip İçi Netlik Eksikliği',
                description: 'Kimin neyi teslim aldığı veya neyi beklediği ortak bir düzlemde görünmediğinde mükerrer işler veya unutulan adımlar oluşur.',
            },
        ],
    },
    whatWeHelpImprove: {
        title: 'Ofisinizde Neyi Daha Sistemli Hale Getiriyoruz?',
        description: 'Amacımız ofisinizin teknik karmaşasını değil, iş akışlarınızın kontrol gücünü artırmaktır.',
        items: [
            {
                title: 'Düzenli Evrak Toplama',
                description: 'Taleplerin zamanında iletildiği, gelenlerin anında tasnif edilip ekip içine yönlendirildiği bir giriş katmanı.',
            },
            {
                title: 'Tutarlı Müşteri Bildirimleri',
                description: 'Hatırlatmaların standart bir akışla, ekibin zamanını çalmadan ve müşteri nezaketini koruyarak iletilmesi.',
            },
            {
                title: 'Şeffaf Süreç Takibi',
                description: 'Ofis yöneticisinin ve ekibin, her müşterinin durumunu tek bakışta görebildiği bir operasyon izleme yapısı.',
            },
            {
                title: 'Azalan Manuel Takip Yükü',
                description: 'Tekrar eden operasyonel adımların otomasyonla çözülerek ekibin danışmanlık ve uzmanlık işlerine alan açması.',
            },
            {
                title: 'Kontrollü Ofis Operasyonu',
                description: 'İş akışlarının kişilere değil sisteme bağlı ilerlediği, sürdürülebilir bir çalışma modeli.',
            },
        ],
    },
    flagshipOfficePackage: {
        title: 'Ofis Evrak ve Müşteri Takip Otomasyon Paketi',
        description: 'Mali müşavirlerin ve ofis sorumlularının üzerindeki operasyonel yükü azaltmak için tasarlanmış temel sistem yapısı.',
        scope: [
            'Dönemsel Evrak İsteme ve Hatırlatma Akışları',
            'Müşteri Durum ve Belge Takip Görünürlüğü',
            'Ekip İçi Görev Atama ve Bildirim Sistemi',
            'Süreç Bazlı Verimlilik ve Takip Paneli',
            'Temel İletişim Standartları ve Otomasyonu',
        ],
        suitableFor: [
            'Düzenli ve yüksek hacimli evrak yöneten ofisler',
            'Müşteri hatırlatma süreçlerinde zaman kaybeden ekipler',
            'Görevlerin aşamalarını net izlemek isteyen yöneticiler',
            'Kurumsallaşma yolunda operasyonel düzen arayan yapılar',
        ],
        primaryCta: 'Sürecimi Anlat',
        secondaryCta: 'Kısa Değerlendirme Al',
    },
    solutionModules: {
        title: 'Muhasebe Ofislerine Özel Çözüm Modülleri',
        description: 'Ofisinizin ihtiyacına göre kurgulanabilen, birbiriyle uyumlu operasyonel bloklar.',
        items: [
            {
                title: 'Document Request & Collection',
                description: 'Evrak toplama ve ilk tasnif süreci.',
                points: [
                    'Dönemsel otomatik evrak talepleri',
                    'Eksik belge bildirim akışları',
                    'Dijital teslimat onayları',
                    'Ekip içi evrak yönlendirme',
                ],
            },
            {
                title: 'Reminder & Follow-Up Flows',
                description: 'Müşteri iletişiminde süreklilik ve takip.',
                points: [
                    'Beyan ve ödeme hatırlatmaları',
                    'Cevap gelmeyen talepler için ikincil takip',
                    'Bilgilendirme ve nezaket akışları',
                    'Önemli tarih uyarı sistemleri',
                ],
            },
            {
                title: 'Internal Task Visibility',
                description: 'Ekip içi iş akışı kontrolü.',
                points: [
                    'Müşteri bazlı aşama takibi',
                    'Kritik görev bildirimleri',
                    'Sorumlu kişi atamaları',
                    'Gecikme riski uyarıları',
                ],
            },
            {
                title: 'Process Analytics & View',
                description: 'Yönetici seviyesi operasyonel görünüm.',
                points: [
                    'Ofis genel süreç sağlığı monitörü',
                    'İş yükü dağılımı görünürlüğü',
                    'Sık tekrar eden darboğaz analizi',
                    'Özet operasyon raporları',
                ],
            },
        ],
    },
    setupLevels: {
        title: 'Ofis İhtiyacınıza Göre Kurulum Seviyeleri',
        description: 'Her ofisin dijital olgunluğu ve ekip yapısı farklıdır. Size en uygun derinlikte başlıyoruz.',
        items: [
            {
                title: 'Hafif Kurulum',
                description: 'Öncelikli bir operasyonel darboğazı çözmek isteyen yapılar için hızlı geçiş.',
                suitableFor: 'Küçük ekipler veya tek ana süreci (örn. sadece evrak isteme) düzene sokmak isteyenler.',
                included: [
                    'Temel evrak isteme akışı',
                    'Basit hatırlatma sistemi',
                    'Anlık ekip bildirimi',
                    'Sade takip listesi',
                ],
            },
            {
                title: 'Orta Seviye Kurulum',
                description: 'Hem evrak hem de görev takibi tarafında bütünlük arayan ofisler için ideal denge.',
                suitableFor: 'Birden fazla tekrar eden süreci olan ve ekip içi görünürlük isteyen yapılar.',
                included: [
                    'Gelişmiş evrak ve belge takibi',
                    'Kademeli hatırlatma katmanı',
                    'Detaylı görev görünürlüğü',
                    'Temel operasyon paneli',
                ],
            },
            {
                title: 'Gelişmiş Kurulum',
                description: 'Tüm iş akışlarını standardize etmek ve derin takip katmanı kurmak isteyen ofisler.',
                suitableFor: 'Yüksek müşteri hacmi yöneten ve proaktif süreç kontrolü hedefleyen ekipler.',
                included: [
                    'Kapsamlı iletişim otomasyonu',
                    'Süreç bazlı gelişmiş raporlama',
                    'Çok adımlı eksik evrak takibi',
                    'Genişletilmiş operasyonel görünüm',
                ],
            },
        ],
    },
    maintenanceLevels: {
        title: 'Süreklilik ve Bakım Modelleri',
        description: 'Kurulan sistemlerin güncel kalması, sorunsuz çalışması ve ihtiyaca göre iyileştirilmesi için sunduğumuz modeller.',
        items: [
            {
                title: 'Temel Bakım',
                description: 'Sistemin teknik sağlığının ve aktifliğinin korunması.',
                included: [
                    'Akışların aktiflik takibi',
                    'Kritik hata düzeltmeleri',
                    'Aylık sistem sağlık kontrolü',
                ],
                notIncluded: ['Yeni akış ekleme', 'Kapsamlı revizyon'],
                bestFor: 'Sistemi kurup, stabilizesini korumak isteyen küçük yapılar.',
            },
            {
                title: 'Standart Bakım',
                description: 'Aktif süreç izleme ve düzenli operasyonel iyileştirme.',
                included: [
                    'Aktif süreç izleme',
                    'Küçük akış güncellemeleri',
                    'Düzenli optimizasyon desteği',
                    'Hızlı hata çözümü',
                ],
                notIncluded: ['Büyük modül geliştirmeleri'],
                bestFor: 'Sürekli talep akışı olan ve sistemini canlı tutmak isteyen ofisler.',
            },
            {
                title: 'Genişletilmiş Bakım',
                description: 'Sistemi sürekli büyütmek ve proaktif danışmanlık almak isteyen yapılar.',
                included: [
                    'Proaktif performans takibi',
                    'Yeni mini akış eklemeleri',
                    'Öncelikli destek yanıtı',
                    'İyileştirme danışmanlığı',
                ],
                notIncluded: ['Sıfırdan projeler'],
                bestFor: 'Dijitalleşmeyi ofis merkezine koyan ve dinamik ekip yapısına sahip yapılar.',
            },
        ],
    },
    includedScope: {
        title: 'Hizmet Kapsamında Yer Alan Standartlar',
        description: 'Hangi kurulum seviyesini seçerseniz seçin, WeCaHan standartlarını her zaman alırsınız.',
        included: [
            'Ofis yapısına özel akış tasarımı',
            'Otomasyon kurulumu ve test süreci',
            'İlgili kanallarda (e-posta/bildirim) akışlar',
            'Temel kullanım rehberleri',
            'Teknik izleme ve bakım desteği',
        ],
        notIncluded: [
            'Yeni modül tasarımları (kapsam dışı)',
            'Geniş ölçekli dökümantasyon hazırlığı',
            'Yerinde (on-site) personel eğitimi',
        ],
    },
    notIncluded: {
        title: 'Sınırlarımız ve Kapsam Dışı Alanlar',
        description: 'Dürüstlük ve net bir kapsam yönetimi, başarılı bir iş birliğinin temelidir.',
        included: [], // Not used here, using only notIncluded as per vertical needs
        notIncluded: [
            'Tam kapsamlı muhasebe yazılımı (ERP) geliştirme',
            'Mali veya hukuki danışmanlık hizmeti',
            'Vergi beyannamesi hazırlama veya onaylama',
            'Muhasebe programı yerine geçen özel platformlar',
            'Sınırsız revizyon ve kapsam dışı teknik işler',
            'Dış kaynaklı veri giriş hizmeti',
        ],
    },
    exampleWorkflow: {
        title: 'Örnek Ofis Akış Gerçekliği',
        description: 'Sistemin ofisinizde günlük olarak nasıl bir düzen yarattığını simüle edin.',
        items: [
            {
                title: 'Recurring Document Request Flow',
                description: 'Her ayın başında müşterilerden evrak talebiyle başlayan klasik süreç.',
                steps: [
                    'Müşteriye otomatik evrak listesi ve talep gider.',
                    'Gelen belgeler sistemde işaretlenir, ekibe bildirilir.',
                    'Teslim etmeyen müşteriler için nazik hatırlatmalar başlar.',
                    'Ofis yöneticisi eksik belgeleri tek tabloda izler.',
                ],
            },
            {
                title: 'Client Follow-Up Visibility Flow',
                description: 'Müşteri bazlı bekleyen işlerin ve aşamaların takip edildiği iç akış.',
                steps: [
                    'İşin türüne göre (KDV, Muhtasar vb.) görev açılır.',
                    'Sorumlu kişi ve aşama anlık güncellenir.',
                    'Kritik tarihler yaklaştığında ekibe uyarılar gider.',
                    'İş tamamlandığında müşteriye bilgi iletilebilir.',
                ],
            },
        ],
    },
    pricingLogic: {
        title: 'Muhasebe Ofisleri İçin Fiyatlandırma Mantığı',
        description: 'Fiyatlandırmamız; kurulacak akışların derinliğine, yönetilen müşteri hacmine ve bakım ihtiyacına göre şeffaf bir modelle belirlenir.',
        factors: [
            'Otomatize edilen süreç/akış sayısı',
            'Yönetilen aktif müşteri hacmi',
            'Ofis ekip büyüklüğü ve kullanıcı sayısı',
            'Hangi kurulum seviyesinin tercih edildiği',
            'Aylık bakım ve destek katmanı derinliği',
        ],
        primaryCta: 'Fiyatlandırma Mantığını Gör',
        secondaryCta: 'Kısa Değerlendirme Al',
    },
    fitCheck: {
        title: 'Bu Çözüm Sizin Ofisinize Uygun mu?',
        description: 'Doğru teşhis kalıcı düzen getirir. Kime uygun olduğumuzu netleştiriyoruz.',
        goodFit: [
            'Tekrar eden evrak takip yükü olan ofisler',
            'Ekipler arasındaki koordinasyonu artırmak isteyenler',
            'Müşteri hatırlatmalarında manuel hatayı bitirmek isteyenler',
            'Süreç görünürlüğünü sistemle korumak isteyen yöneticiler',
        ],
        notGoodFit: [
            'Süreci tamamen sistemin dışına devretmek isteyenler',
            'Sıfırdan özel bir muhasebe yazılımı yazdırmayı hedefleyenler',
            'Dijitalleşme için ekip eforu harcamak istemeyen yapılar',
            'Yalnızca mali müşavirlik/beyan hizmeti arayanlar',
        ],
    },
    contactCta: {
        title: 'Ofisinizdeki Takip Yükünü Birlikte Analiz Edelim',
        description: 'Önce mevcut evrak ve müşteri takip sürecinizi anlayalım, sonra size en uygun otomasyon seviyesini birlikte netleştirelim.',
        primaryCta: 'Kısa Değerlendirme Al',
        secondaryCta: 'WhatsApp ile Yaz',
        helperText: 'Kısa bir süreç özeti, ilk değerlendirme için yeterlidir.',
    },
};
