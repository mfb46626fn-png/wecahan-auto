type CtaConfig = string | { label: string; href: string };

interface HeroContent {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
}

interface ServiceItem {
    title: string;
    description: string;
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
}

interface SeoContent {
    title: string;
    description: string;
}

export interface CenterHomeContent {
    finalCta: { title: string; description: string; primaryCta: CtaConfig; secondaryCta?: CtaConfig; helperText?: string; };
    seo: SeoContent;
    hero: HeroContent;
    services: ServicesContent;
    workflow: WorkflowContent;
    briefForm: BriefFormContent;
}

export const centerHomeContent: CenterHomeContent = {
    seo: {
        title: 'WeCaHan Auto | Otonom Operasyon Sistemleri',
        description: 'Sağlık ve finans profesyonelleri için kendi kendine yeten, ölçeklenebilir ve sağlam operasyonel altyapılar tasarlıyoruz.',
    },
    hero: {
        eyebrow: 'Operasyonel Mükemmellik',
        title: 'Sistemlerinizi Otonom Hâle Getirin',
        description: 'Karmaşık iş akışlarını pürüzsüz sistemlere dönüştürüyoruz. Ekibinize zaman kazandıracak, hatayı sıfıra indirecek ve büyümeyi destekleyecek altyapıları kurun.',
        primaryCta: 'Sistem Analizi İste',
        secondaryCta: 'Ne Yapıyoruz?',
    },
    services: {
        eyebrow: 'Çözümlerimiz',
        title: 'Yapılandırılmış Verimlilik',
        description: 'İşletmenizin yapıtaşı olan süreçleri standardize ediyor ve modern teknolojiyle en üste taşıyoruz.',
        items: [
            {
                title: 'Klinik Otomasyonu',
                description: 'Hasta kabulünden finansal raporlamaya kadar, tüm klinik süreçlerinizi tek ve hatasız bir akışta birleştirin.',
            },
            {
                title: 'Ofis Sistemleri',
                description: 'Muhasebe ve danışmanlık ofisleri için evrak takibi, müşteri iletişimi ve görev planlamasını şeffaf şekilde yönetin.',
            },
            {
                title: 'Süreç Mühendisliği',
                description: 'Mevcut işleyişinizdeki darboğazları sistemik olarak tespit edip, size özel uzun vadeli bir operasyon haritası çıkarıyoruz.',
            },
        ],
    },
    workflow: {
        eyebrow: 'Nasıl Çalışıyoruz?',
        title: '3 Adımda Dönüşüm',
        description: 'Mevcut işinizi durdurmadan, ekibinize ek yük yaratmadan pürüzsüz bir geçiş sağlıyoruz.',
        items: [
            {
                step: '01',
                title: 'Analiz ve Haritalama',
                description: 'Gerçek süreçlerinizi röntgenler gibi inceliyor ve en büyük sürtünmeleri bulup otomasyon potansiyelini belirliyoruz.',
            },
            {
                step: '02',
                title: 'Sistem İnşası',
                description: 'Sürdürülebilir tasarım prensipleriyle yeni ve daha iyi çalışan operasyon altyapınızı hazırlıyoruz.',
            },
            {
                step: '03',
                title: 'Aktarım ve Eğitimi',
                description: 'Sistemi kurup onayınızı aldıktan sonra, ekibinizi eğiterek tam otonom yapıyı size güvenle devrediyoruz.',
            },
        ],
    },
    briefForm: {
        eyebrow: 'Tanışma',
        title: 'İhtiyaçlarınızı Birlikte Belirleyelim',
        description: 'Size en uygun sistemi düşünebilmemiz için mevcut iş yükünüz ve ana probleminiz hakkında kısaca bilgi verin.',
        submitLabel: 'Formu Gönder',
        successMessage: 'Bilgileriniz başarıyla alındı. Uzman ekibimiz en kısa sürede size bir analiz ile dönecek.',
        helperText: 'Paylaştığınız veriler yalnızca durumunuzu değerlendirebilmemiz içindir.',
    },
    finalCta: {
        title: 'Geleceğin Operasyonel Altyapısını Bugün Kurun',
        description: 'Karmaşayı sonlandırın, hatayı minimize edin ve ekibinizin potansiyelini özgür bırakın.',
        primaryCta: 'Analiz Formunu Doldur',
        secondaryCta: 'Hizmetlerimizi İncele',
        helperText: 'İlk analiz randevumuz tamamen ücretsizdir.',
    },
};
