type CtaConfig = string | { label: string; href: string };

interface HeroContent {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta?: CtaConfig;
    trustText?: string;
}

interface ServiceItem {
    title: string;
    description: string;
    label?: string;
}

interface ServicesContent {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
}

interface WorkflowItem {
    step: string;
    title: string;
    description: string;
}

interface WorkflowContent {
    eyebrow: string;
    title: string;
    description: string;
    items: WorkflowItem[];
}

interface BriefFormContent {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    successMessage: string;
    helperText: string;
    privacyNote?: string;
}

interface FinalCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta?: CtaConfig;
    helperText?: string;
}

interface SeoContent {
    title: string;
    description: string;
}

export interface TrHomeContent {
    seo: SeoContent;
    hero: HeroContent;
    services: ServicesContent;
    workflow: WorkflowContent;
    briefForm: BriefFormContent;
    finalCta: FinalCtaContent;
}

export const trHomeContent: TrHomeContent = {
    seo: {
        title: 'WeCaHan Auto Türkiye | Operasyonel Verimlilik ve Otomasyon',
        description: 'Türk işletmeleri için iş akışlarını standardize eden, maliyetleri düzelten ve operasyonel yükü azaltan otonom sistemler.',
    },
    hero: {
        eyebrow: 'Türkiye Operasyon Çözümleri',
        title: 'İşletmenizi Karmaşadan Kurtarın, Otonom Sisteme Geçin',
        description: 'Manuel takip edilen işleri, kağıt üzerindeki süreçleri ve ekip içindeki kopuklukları sona erdiriyoruz. Verimliliği artıran dijital altyapınızı kuruyoruz.',
        primaryCta: 'Ücretsiz Analiz Al',
        secondaryCta: 'Süreçlerimiz',
        trustText: 'Klinik, ofis ve operasyon ekipleri için.',
    },
    services: {
        eyebrow: 'Ne Yapıyoruz?',
        title: 'Ölçeklenebilir İş Modelleri',
        description: 'Büyüyen işletmelerin en büyük engeli olan operasyonel sürtünmeleri ortadan kaldırıyoruz.',
        items: [
            {
                title: 'Operasyon Tasarımı',
                description: 'Karışık iş akışlarınızı baştan sona haritalandırıyor ve her adımın kim tarafından, nasıl yapılacağını netleştiriyoruz.',
                label: 'Süreç Yönetimi',
            },
            {
                title: 'Saha ve Ofis Entegrasyonu',
                description: 'Ekipleriniz arasındaki iletişimi ve veri akışını dijital araçlarla hatasız hale getiriyoruz.',
                label: 'Ekip Verimliliği',
            },
            {
                title: 'Performans Takibi',
                description: 'İşinize dair kritik verileri anlık olarak görebileceğiniz şeffaf kontrol panelleri oluşturuyoruz.',
                label: 'Raporlama',
            },
        ],
    },
    workflow: {
        eyebrow: 'Dönüşüm Yolculuğu',
        title: 'Adım Adım Geleceğe',
        description: 'İşinizi aksatmadan, mevcut düzeninizi iyileştirerek ilerliyoruz.',
        items: [
            {
                step: '01',
                title: 'Tanı ve Teşhis',
                description: 'Mevcut iş yükünüzü inceliyor, en çok vakit kaybedilen "kara delikleri" tespit ediyoruz.',
            },
            {
                step: '02',
                title: 'Dijital İnşa',
                description: 'İşinize özel operasyonel kılavuzları ve otomasyon araçlarını hazırlıyoruz.',
            },
            {
                step: '03',
                title: 'Tam Devir',
                description: 'Ekiplerinizi yeni süreçlere adapte ediyor ve sistemi anahtar teslim size bırakıyoruz.',
            },
        ],
    },
    briefForm: {
        eyebrow: 'İletişim',
        title: 'Sizi Dinleyelim',
        description: 'Operasyonel zorluklarınızı aşmak için ilk adımı atın. Kısa bir özet bırakın, sizi arayalım.',
        submitLabel: 'Talep Gönder',
        successMessage: 'Mesajınız ulaştı. Ekibimiz en kısa sürede sizinle iletişime geçecek.',
        helperText: 'Bilgileriniz veri güvenliği standartlarına uygun olarak korunmaktadır.',
        privacyNote: 'KVKK kapsamında verileriniz sadece bu talep için işlenir.',
    },
    finalCta: {
        title: 'Operasyonunuzu Bir Sonraki Seviyeye Taşıyın',
        description: 'Daha az kaos, daha çok verim. WeCaHan Auto ile sistemli büyüyün.',
        primaryCta: 'Hemen Başlayın',
        secondaryCta: 'WhatsApp Hattı',
        helperText: 'Türkiye geneli profesyonel destek.',
    },
};
