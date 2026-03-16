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

export interface ContactOption {
    id: string;
    title: string;
    description: string;
    bestFor: string;
    cta: CtaConfig;
}

export interface ContactOptionsOverviewContent {
    title: string;
    description: string;
    options: ContactOption[];
}

export interface SectorOption {
    label: string;
    value: string;
}

export interface InquiryTypeOption {
    label: string;
    value: string;
}

export interface MainContactFormContent {
    title: string;
    description: string;
    fields: {
        name: { label: string; placeholder: string };
        company: { label: string; placeholder: string };
        email: { label: string; placeholder: string };
        phone: { label: string; placeholder: string };
        sector: { label: string; options: SectorOption[] };
        inquiryType: { label: string; options: InquiryTypeOption[] };
        message: { label: string; placeholder: string; hint: string };
        consent: { label: string };
    };
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
    helperText: string;
}

export interface ProcessStep {
    title: string;
    description: string;
}

export interface WhatHappensNextContent {
    title: string;
    description: string;
    steps: ProcessStep[];
}

export interface FitReminderContent {
    title: string;
    description: string;
    goodFitTitle: string;
    goodFitPoints: string[];
    badFitTitle: string;
    badFitPoints: string[];
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqMicroContent {
    title: string;
    description: string;
    items: FaqItem[];
}

export interface ContactCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    helperText: string;
}

export interface TrContactContent {
    seo: SeoContent;
    hero: HeroContent;
    contactOptionsOverview: ContactOptionsOverviewContent;
    mainContactForm: MainContactFormContent;
    whatHappensNext: WhatHappensNextContent;
    fitReminder: FitReminderContent;
    faqMicro: FaqMicroContent;
    contactCta: ContactCtaContent;
}

export const trContactContent: TrContactContent = {
    seo: {
        title: 'İletişim | WeCaHan Auto Operasyonel Otomasyon',
        description: 'Sürecinizi analiz edelim, işletmenize özel otomasyon kurgusunu birlikte netleştirelim. İletişime geçmek için formu doldurabilir veya WhatsApp üzerinden yazabilirsiniz.',
    },
    hero: {
        eyebrow: 'İLETİŞİM VE DEĞERLENDİRME',
        title: 'Sürecinizi Anlatın, Uygun Yapıyı Birlikte Kuralım',
        description: 'Uzun dokümanlar veya karmaşık analiz süreçleriyle vakit kaybetmeyin. Mevcut durumunuzu kısa bir özetle paylaşın, operasyonel olarak en verimli başlangıç noktasını sizin için belirleyelim.',
        primaryCta: 'Değerlendirme Formunu Aç',
        secondaryCta: 'WhatsApp ile Konuş',
        helperText: 'İlk analizde herhangi bir teknik hazırlık gerekmez.',
    },
    contactOptionsOverview: {
        title: 'Size En Uygun İletişim Yolunu Seçin',
        description: 'Her ihtiyacın hızı ve derinliği farklıdır. İster düzenli bir başvuru yapın, ister hızlıca bir soru sorun.',
        options: [
            {
                id: 'form',
                title: 'Kısa Değerlendirme Formu',
                description: 'Sürecinizi daha düzenli anlatmak ve kapsamlı bir ilk geri dönüş almak için en etkili yol.',
                bestFor: 'Operasyonel analiz ve teklif süreci için.',
                cta: 'Formu Doldur',
            },
            {
                id: 'whatsapp',
                title: 'WhatsApp Hattı',
                description: 'Hızlıca bir soru sormak veya ilk temas için süreci başlatmak isteyenler için.',
                bestFor: 'Pratik bilgi akışı ve sıcak iletişim için.',
                cta: 'WhatsApp ile Yaz',
            },
            {
                id: 'email',
                title: 'E-posta İletişimi',
                description: 'Daha resmi bir başlangıç yapmak veya ek bilgi/doküman paylaşmak isteyenler için.',
                bestFor: 'Resmi talepler ve kurumsal yazışmalar için.',
                cta: 'E-posta Gönder',
            },
        ],
    },
    mainContactForm: {
        title: 'Değerlendirme Formu',
        description: 'Bu form, size doğru kapsamı önerebilmemiz için gereken temel bilgileri toplar. Ortalama 2 dakikanızı alır.',
        fields: {
            name: { label: 'Ad Soyad', placeholder: 'Örn: Ahmet Yılmaz' },
            company: { label: 'İşletme Adı', placeholder: 'Örn: ABC Diş Polikliniği' },
            email: { label: 'E-posta Adresi', placeholder: 'örn: ahmet@isletmeniz.com' },
            phone: { label: 'Telefon / WhatsApp', placeholder: '05xx xxx xx xx' },
            sector: {
                label: 'Sektörünüz',
                options: [
                    { label: 'Diş Kliniği / Medikal Klinik', value: 'clinic' },
                    { label: 'Mali Müşavirlik / Muhasebe Ofisi', value: 'accounting' },
                    { label: 'E-Ticaret / Lojistik', value: 'ecommerce' },
                    { label: 'Hukuk / Danışmanlık', value: 'consultancy' },
                    { label: 'Diğer Hizmet Sektörleri', value: 'other' },
                ],
            },
            inquiryType: {
                label: 'İletişim Amacınız',
                options: [
                    { label: 'Yeni Kurulum Analizi İstiyorum', value: 'new-setup' },
                    { label: 'Fiyat ve Paketler Hakkında Sorum Var', value: 'pricing' },
                    { label: 'Mevcut Sistemimi İyileştirmek İstiyorum', value: 'improvement' },
                    { label: 'Sadece Genel Bilgi Almak İstiyorum', value: 'general' },
                ],
            },
            message: {
                label: 'En Çok Zorlandığınız Süreç Nedir?',
                placeholder: 'Örn: WhatsApp taleplerini takip etmekte zorlanıyoruz, randevu teyitleri çok manuel ilerliyor...',
                hint: 'Problem çözmek için buradayız; ne kadar net anlatırsanız o kadar iyi yardımcı olabiliriz.',
            },
            consent: {
                label: 'İletişim bilgilerimin değerlendirme süreci için işlenmesini kabul ediyorum.',
            },
        },
        submitLabel: 'Değerlendirme Talebi Gönder',
        successMessage: 'Bilgileriniz başarıyla ulaştı. Ekibimiz en kısa sürede analizinizi yapıp sizinle iletişime geçecek.',
        errorMessage: 'Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyin.',
        helperText: 'Bilgileriniz gizlilik prensiplerimiz çerçevesinde korunur; asla izinsiz paylaşılmaz.',
    },
    whatHappensNext: {
        title: 'Başvurudan Sonra Sizi Ne Bekliyor?',
        description: 'Belirsizlikleri ortadan kaldırmak için şeffaf bir süreç işletiyoruz.',
        steps: [
            {
                title: 'Hızlı Ön İnceleme',
                description: 'Gönderdiğiniz veriler üzerinden işletmenizin otomasyon potansiyeli ve önceliği değerlendirilir.',
            },
            {
                title: 'Odaklı İletişim',
                description: 'Eğer ihtiyaç duyulursa, süreci daha net anlamak amacıyla kısa bir bilgi alma kontağı kurulur.',
            },
            {
                title: 'Stratejik Yönlendirme',
                description: 'İşinize en uygun paket, başlangıç seviyesi veya analiz ihtiyacı size raporlanır.',
            },
            {
                title: 'Şeffaf Adımlama',
                description: 'Onayınız halinde kurulum planı ve takvimi netleştirilerek operasyona başlanır.',
            },
        ],
    },
    fitReminder: {
        title: 'Beklenti Uyumu',
        description: 'Vaktinizi önemsiyoruz. WeCaHan Auto modeli her işletmeye aynı şekilde hitap etmez.',
        goodFitTitle: 'Doğru Adrestesiniz, Eğer...',
        goodFitPoints: [
            'Tekrar eden, kural bazlı bir iş yükünüz varsa',
            'Operasyonel dağınıklığı tek bir sistemle çözmek istiyorsanız',
            'Süreçte aktif rol alacak bir çözüm ortağı arıyorsanız',
            'Verim odaklı ve adım adım büyümeye açıksanız',
        ],
        badFitTitle: 'Uyumlu Olmayabiliriz, Eğer...',
        badFitPoints: [
            'Sadece reklam veya pazarlama ajansı arıyorsanız',
            'Tamamen özel yazılım (custom software house) beklentiniz varsa',
            'Hiçbir ekip katkısı sağlamadan mucize bir çözüm bekliyorsanız',
            'Süreç analizi için vakit ayırmaya hazır değilseniz',
        ],
    },
    faqMicro: {
        title: 'Kısa Sorular, Net Cevaplar',
        description: 'İletişime geçmeden önce aklınıza gelebilecek bazı teknik detaylar.',
        items: [
            {
                question: 'Çok uzun bir brief hazırlamam gerekir mi?',
                answer: 'Hayır. Mevcut en büyük tıkanıklığınızı ve kullandığınız temel araçları belirtmeniz ilk değerlendirme için yeterlidir.',
            },
            {
                question: 'Hemen fiyat alabilir miyim?',
                answer: 'Paketlerimiz ve fiyatlandırma mantığımız sitede şeffaftır; ancak nihai yatırım tutarı sürecinizin karmaşıklığına göre netleşir.',
            },
            {
                question: 'Sadece WhatsApp yazsak olur mu?',
                answer: 'Elbette. Hızlı sorularınız için WhatsApp en pratik yoldur; ancak analiz istiyorsanız formu doldurmanız süreci hızlandırır.',
            },
            {
                question: 'Küçük işletmeler için uygun mu?',
                answer: 'Evet. Operasyonel yükü olan her ölçekteki işletme için uygun, başlangıç seviyesi paketlerimiz mevcuttur.',
            },
            {
                question: 'Toplantı yapmak şart mı?',
                answer: 'Hayır. Süreci tamamen asenkron (form ve yazışma üzerinden) yürütebiliriz; sadece gerektiğinde odaklı görüşmeler yaparız.',
            },
        ],
    },
    contactCta: {
        title: 'Operasyonunuzu Rayına Sokmaya Hazır Mısınız?',
        description: 'Karmaşadan kurtulup otonom bir yapıya geçmek için ilk adımı atın. Sizin için en uygun başlangıç yolunu birlikte bulalım.',
        primaryCta: 'Değerlendirme Formuna Dön',
        secondaryCta: 'WhatsApp ile Yaz',
        helperText: 'Türkiye geneli profesyonel otomasyon ve operasyon analizi desteği.',
    },
};
