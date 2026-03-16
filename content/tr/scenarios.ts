export type CtaConfig = string | { label: string; href: string };

export interface SeoContent {
    title: string;
    description: string;
}

export interface HeroContent {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    helperText?: string;
}

export interface FeatureItem {
    title: string;
    description: string;
    icon?: string;
}

export interface WhyScenariosMatterContent {
    title: string;
    description: string;
    items: FeatureItem[];
}

export interface ScenarioCategory {
    id: string;
    title: string;
    description: string;
}

export interface ScenarioItem {
    id: string;
    category: string;
    title: string;
    subtitle: string;
    problem: string;
    flowSteps: string[];
    expectedOutcome: string;
    suitableFor: string[];
    primaryCta: CtaConfig;
}

export interface FeaturedScenariosContent {
    title: string;
    description: string;
    items: ScenarioItem[];
}

export interface HowTheseFlowsWorkContent {
    title: string;
    description: string;
    steps: FeatureItem[];
}

export interface CustomizationContent {
    title: string;
    description: string;
    points: string[];
}

export interface FitCheckContent {
    title: string;
    description: string;
    goodFit: string[];
    notGoodFit: string[];
}

export interface ContactCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    helperText?: string;
}

export interface TrScenariosContent {
    seo: SeoContent;
    hero: HeroContent;
    whyScenariosMatter: WhyScenariosMatterContent;
    scenarioCategories: ScenarioCategory[];
    featuredScenarios: FeaturedScenariosContent;
    howTheseFlowsWork: HowTheseFlowsWorkContent;
    whereCustomizationStarts: CustomizationContent;
    fitCheck: FitCheckContent;
    contactCta: ContactCtaContent;
}

export const trScenariosContent: TrScenariosContent = {
    seo: {
        title: 'Örnek Senaryolar | WeCaHan Operasyonel Otomasyon',
        description: 'Klinikler ve muhasebe ofisleri için gerçek hayata yakın otomasyon senaryoları. Süreçlerin nasıl daha verimli akabileceğini somut örneklerle inceleyin.',
    },
    hero: {
        eyebrow: 'PRATİK UYGULAMALAR',
        title: 'Otomasyonu Soyutluktan Çıkarıp Somut Akışlara Dönüştürüyoruz',
        description: 'Bu sayfada, klinikler ve ofisler için kurguladığımız örnek iş akış senaryolarını görebilir; kendi süreciniz için nasıl bir düzen kurulabileceğine dair fikir edinebilirsiniz.',
        primaryCta: 'Benzer Sürecimi Anlat',
        secondaryCta: 'Çözüm Modellerini Gör',
        helperText: 'Gerçek referans uydurmak yerine, nasıl düşündüğümüzü gösteriyoruz.',
    },
    whyScenariosMatter: {
        title: 'Neden Örnek Senaryolar?',
        description: 'Hizmet başlıklarını sadece okumak yerine, operasyonun pratikte nasıl değiştiğini görmenizi önemsiyoruz.',
        items: [
            {
                title: 'Süreci Somutlaştırır',
                description: 'Otomasyonun "ne" olduğunu değil, sizin ofisinizde "nasıl" çalışacağını gösterir.',
            },
            {
                title: 'Kapsamı Netleştirir',
                description: 'Neyin standart paket içinde, neyin özel geliştirme olduğunu anlamanızı sağlar.',
            },
            {
                title: 'Kendi Yolunuzu Buldurur',
                description: 'Kendi yaşadığınız darboğazlara benzer örnekleri görüp çözümü hayal edebilirsiniz.',
            },
        ],
    },
    scenarioCategories: [
        {
            id: 'clinics',
            title: 'Klinik Senaryoları',
            description: 'Hasta kabul, randevu ve takip süreçleri için modern akışlar.',
        },
        {
            id: 'accounting',
            title: 'Muhasebe Ofisi Senaryoları',
            description: 'Evrak takibi, hatırlatmalar ve iç görev yönetimi için sistematik yaklaşımlar.',
        },
    ],
    featuredScenarios: {
        title: 'Öne Çıkan Otomasyon Senaryoları',
        description: 'En sık karşılaşılan operasyonel problemlere yönelik kurguladığımız örnek akışlar.',
        items: [
            // --- CLINIC SCENARIOS ---
            {
                id: 'clinic-lead-intake',
                category: 'clinics',
                title: 'Klinik Lead Intake ve İlk Temas',
                subtitle: 'Dağınık talep kanallarını tek merkezde toplama.',
                problem: 'WhatsApp, form ve sosyal kanallardan gelen taleplerin manuel takibi sırasında yaşanan gecikmeler.',
                flowSteps: [
                    'Talep Girişi (WhatsApp/Form)',
                    'Temel Bilgi Toplama',
                    'Lead Kaydı ve Sınıflandırma',
                    'Ekip Bildirimi',
                    'İlk Dönüş Hazırlığı',
                ],
                expectedOutcome: 'Taleplerin %100 görünürlüğü, ilk temas süresinde kısalma ve tutarlı iletişim dili.',
                suitableFor: [
                    'WhatsApp trafiği yoğun klinikler',
                    'Sekreter yükü artmış yapılar',
                    'Lead kaçışı yaşayan ekipler',
                ],
                primaryCta: 'Benzer Sürecimi Anlat',
            },
            {
                id: 'clinic-appointment-confirmation',
                category: 'clinics',
                title: 'Randevu Teyit ve Hatırlatma Akışı',
                subtitle: 'Kişiye bağlı takvim risklerini minimize etme.',
                problem: 'Düzensiz teyit ve hatırlatmalar nedeniyle artan no-show oranları ve operasyonel belirsizlik.',
                flowSteps: [
                    'Randevu Oluşturma',
                    'Teyit Mesajı Gönderimi',
                    'Zamanlı Hatırlatma',
                    'İptal / Erteleme Seçeneği Sunma',
                    'Durum Güncelleme ve Takip',
                ],
                expectedOutcome: 'No-show oranlarında azalma, tekrar eden teyit yükünde düşüş ve takvim netliği.',
                suitableFor: [
                    'Çok sayıda randevu yöneten klinikler',
                    'No-show problemi yaşayan yapılar',
                    'İletişim akışı dağınık ekipler',
                ],
                primaryCta: 'Klinik Çözümünü İncele',
            },
            {
                id: 'clinic-follow-up',
                category: 'clinics',
                title: 'İlk Görüşme Sonrası Takip Akışı',
                subtitle: 'Potansiyel hastaları akışta tutma.',
                problem: 'İlk temas sonrası geri dönüş veya devam takibinin düzensizleşmesi sonucu hasta kaybı.',
                flowSteps: [
                    'İlk Temas Kaydı',
                    'Durum İşaretleme',
                    'Uygun Takip Zamanı Belirleme',
                    'İkinci Temas / Hatırlatma',
                    'Görünür Takip Kaydı Güncelleme',
                ],
                expectedOutcome: 'Daha tutarlı follow-up süreci, "kimde kaldı?" sorusunun yanıtı ve dönüşüm artışı.',
                suitableFor: [
                    'Takipte zorlanan klinikler',
                    'Ekip içinde lead sahipliği net olmayan yapılar',
                ],
                primaryCta: 'Benzer Sürecimi Anlat',
            },
            {
                id: 'clinic-internal-visibility',
                category: 'clinics',
                title: 'Klinik İç Görünürlük ve Bildirim',
                subtitle: 'Ekip içi koordinasyonu güçlendirme.',
                problem: 'Taleplerin hangi aşamada olduğunun net görünmemesi ve takibin kişisel hafızaya bağlı kalması.',
                flowSteps: [
                    'Lead / Randevu Kaydı',
                    'Durum Güncelleme',
                    'Otomatik Ekip Bildirimi',
                    'Bekleyen İşlem Görünürlüğü',
                    'Temel Operasyon Özeti',
                ],
                expectedOutcome: 'Ekip içi daha net koordinasyon, daha görünür iş akışı ve kontrol kolaylığı.',
                suitableFor: [
                    'Birden fazla kişili ekipler',
                    'Takip ve sorumluluk görünürlüğü isteyen klinikler',
                ],
                primaryCta: 'Klinik Çözümünü Gör',
            },

            // --- ACCOUNTING SCENARIOS ---
            {
                id: 'accounting-document-tracking',
                category: 'accounting',
                title: 'Dönemsel Evrak İsteme ve Takip',
                subtitle: 'Tekrar eden evrak yükünü sisteme devretme.',
                problem: 'Müşterilerden aynı belgelerin her ay tekrar tekrar istenmesi ve eksik takibinin manuel yapılması.',
                flowSteps: [
                    'Dönemsel İhtiyaç Tetikleyici',
                    'Evrak Talebi Gönderimi',
                    'Zamanlı Hatırlatma Döngüsü',
                    'Eksik Evrak Görünürlük Paneli',
                    'Durum Raporlama',
                ],
                expectedOutcome: 'Daha düzenli evrak toplama, odağın operasyona kayması ve anlık eksik takibi.',
                suitableFor: [
                    'Dönemsel evrak yükü olan ofisler',
                    'Tekrar eden takipte zorlanan ekipler',
                ],
                primaryCta: 'Benzer Sürecimi Anlat',
            },
            {
                id: 'accounting-client-reminder',
                category: 'accounting',
                title: 'Müşteri Hatırlatma ve Takip Akışı',
                subtitle: 'Manuel iletişim yükünden kurtulma.',
                problem: 'Müşterilere aynı konularda manuel hatırlatma yapmanın yarattığı zaman kaybı ve unutma riski.',
                flowSteps: [
                    'Hatırlatma İhtiyacı Tanımı',
                    'İlk İletişim Gönderimi',
                    'Cevapsız Durum Takibi',
                    'İkinci Hatırlatma',
                    'Takip Görünürlüğü Güncelleme',
                ],
                expectedOutcome: 'Daha tutarlı iletişim, kişisel takip yükünde azalma ve profesyonel müşteri yönetimi.',
                suitableFor: [
                    'Tekrar eden iletişim yükü yüksek ofisler',
                    'Müşteri takibini kişisel çabayla yürüten yapılar',
                ],
                primaryCta: 'Ofis Çözümünü Gör',
            },
            {
                id: 'accounting-task-visibility',
                category: 'accounting',
                title: 'Görev Görünürlüğü ve Durum Takibi',
                subtitle: 'Ofis içi iş dağılımını şeffaf hale getirme.',
                problem: 'İş dağılımının net olmaması ve hangi işin kimde kaldığının her zaman görünür olmaması.',
                flowSteps: [
                    'İş / Müşteri Durumu Tanımı',
                    'Görev Açılışı ve Atama',
                    'Takip Tarihi Belirleme',
                    'Durum Güncelleme',
                    'Genel Kontrol Görünümü',
                ],
                expectedOutcome: 'Daha görünür görev takibi, ekip içi koordinasyon ve sisteme bağlı denetim.',
                suitableFor: [
                    'Birden fazla çalışanı olan ofisler',
                    'Görev takibinde görünürlük isteyen ekipler',
                ],
                primaryCta: 'Benzer Sürecimi Anlat',
            },
            {
                id: 'accounting-reporting-flow',
                category: 'accounting',
                title: 'Tekrar Eden Süreçlerde Raporlama',
                subtitle: 'Darboğazları veriye dayalı görme.',
                problem: 'Süreçlerin sürekli dönmesi ama nerede tıkanıklık olduğunun anlaşılamaması.',
                flowSteps: [
                    'Süreç Verisi Toplama',
                    'Durum Özeti Oluşturma',
                    'Geciken Alanların İşaretlenmesi',
                    'Yönetici Özet Raporu',
                    'İyileştirme Verisi Sunumu',
                ],
                expectedOutcome: 'Darboğazların tespiti, operasyonel kontrol hissinin artması ve süreç iyileştirme.',
                suitableFor: [
                    'Süreç standardı kurmak isteyen ofisler',
                    'Görünürlük eksikliği yaşayan ekipler',
                ],
                primaryCta: 'Ofis Çözümünü İncele',
            },
        ],
    },
    howTheseFlowsWork: {
        title: 'Bu Akışlar Genelde Nasıl Kurulur?',
        description: 'Teknik detaylarda boğulmadan operasyonel kurgumuzun temel mantığı:',
        steps: [
            {
                title: 'Süreç Analizi',
                description: 'Önce mevcut "dağınık" akışınızı kağıt üzerinde simüle ederiz.',
            },
            {
                title: 'Tetikleyici Belirleme',
                description: 'Bir form dolduğunda, bir tarih geldiğinde veya bir dosya yüklendiğinde akış başlar.',
            },
            {
                title: 'Karar ve Kayıt',
                description: 'Sistem gelen veriyi sınıflandırır, ilgili kişiye atar veya kaydı günceller.',
            },
            {
                title: 'Bildirim ve Takip',
                description: 'İlgili taraflara haber verilir ve süreç tamamlanana kadar sistem takipte kalır.',
            },
        ],
    },
    whereCustomizationStarts: {
        title: 'Senaryodan Gerçeğe: Özelleştirme Nerede Başlar?',
        description: 'Buradaki senaryolar birer şablondur; nihai kurulum sizin ofis kültürünüze göre şekillenir.',
        points: [
            'Mevcut kullandığınız araç setine (WhatsApp, E-posta, CRM vb.) entegrasyon seviyesi.',
            'Ekibinizin onay ve kontrol adımlarındaki alışkanlıkları.',
            'Müşteri hacminiz ve operasyonel öncelikleriniz.',
            'Adım adım geçiş mi yoksa tam kapsamlı bir dönüşüm mü istediğiniz.',
        ],
    },
    fitCheck: {
        title: 'Bu Senaryolar Sizin İçin Doğru Yol mu?',
        description: 'Beklenti yönetimi, başarının ilk adımıdır.',
        goodFit: [
            'Tekrar eden, kural bazlı iş yükü olan yapılar',
            'Ekip içi görünürlük ve düzen arayan yöneticiler',
            'Süreçte küçük ama etkili bir otomasyon katmanı arayanlar',
            'Sadece teknoloji değil, "akış" satın almak isteyen yapılar',
        ],
        notGoodFit: [
            'Her şeyi tek tuşla, hiç emek vermeden çözmek isteyenler',
            'Sıfırdan tamamen özel bir yazılım beklentisi olanlar',
            'Süreç analizi sırasında katkı sağlamaya vakti olmayan ekipler',
            'Yalnızca "mesaj gitsin gelsin" mantığıyla basit tool arayanlar',
        ],
    },
    contactCta: {
        title: 'Süreciniz Bu Senaryolardan Birine Benziyor mu?',
        description: 'Eğer "bizim de tam olarak buna benzer bir tıkanıklığımız var" diyorsanız, birlikte analiz edelim.',
        primaryCta: 'Kısa Değerlendirme Al',
        secondaryCta: 'WhatsApp ile Yaz',
        helperText: 'İlk analizde herhangi bir teknik hazırlık gerekmez.',
    },
};
