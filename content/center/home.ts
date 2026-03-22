export type CenterLocale = "tr" | "en";

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
    secondaryCta?: CtaConfig;
    trustLine?: string;
}

// Interfaces for requested brand-centric sections
interface ServiceCategory {
    title: string;
    description: string;
    examples: string[];
}

interface WhatWeAutomateContent {
    title: string;
    description: string;
    categories: ServiceCategory[];
}

interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

interface HowWeWorkContent {
    title: string;
    description: string;
    steps: ProcessStep[];
}

interface WorkflowScenario {
    title: string;
    problem: string;
    logic: string;
    flow: string[];
}

interface ExampleWorkflowsContent {
    title: string;
    description: string;
    scenarios: WorkflowScenario[];
}

interface BenefitCard {
    title: string;
    description: string;
}

interface WhyStructureWorksContent {
    title: string;
    description: string;
    benefits: BenefitCard[];
}

interface UseCaseCard {
    context: string;
    problem: string;
    logic: string;
    expectedClarity: string;
}

interface SelectedUseCasesContent {
    title: string;
    description: string;
    useCases: UseCaseCard[];
}

interface ContactBriefContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta: CtaConfig;
    helperText: string;
}

// Legacy interfaces for existing block compatibility (app/page.tsx)
interface LegacyServiceItem {
    title: string;
    description: string;
    label?: string;
}

interface LegacyServicesContent {
    eyebrow: string;
    title: string;
    description: string;
    items: LegacyServiceItem[];
}

interface LegacyWorkflowItem {
    step: string;
    title: string;
    description: string;
}

interface LegacyWorkflowContent {
    eyebrow: string;
    title: string;
    description: string;
    items: LegacyWorkflowItem[];
}

interface LegacyBriefFormContent {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    successMessage: string;
    helperText: string;
    privacyNote?: string;
    labels: {
        fullName: string;
        workEmail: string;
        company: string;
        inquiryType: string;
        message: string;
    };
    submitButtonLoading: string;
    consentRequiredError: string;
    genericError: string;
}

interface LegacyFinalCtaContent {
    title: string;
    description: string;
    primaryCta: CtaConfig;
    secondaryCta?: CtaConfig;
    helperText?: string;
}

export interface CenterHomeContent {
    // Current Block Interfaces (Required by app/page.tsx)
    seo: SeoContent;
    hero: HeroContent;
    services: LegacyServicesContent;
    workflow: LegacyWorkflowContent;
    briefForm: LegacyBriefFormContent;
    finalCta: LegacyFinalCtaContent;

    labels: {
        phaseLabel: string;
        scenarioLabel: string;
        problemLabel: string;
        logicLabel: string;
        flowStepLabel: string;
        operationalDesignLabel: string;
        outcomeLabel: string;
        contextualProblemLabel: string;
        appliedLogicLabel: string;
        expectedOutcomeLabel: string;
        customLayoutsNote: string;
    };

    // Future-Proof Brand Sections (Requested for Center)
    whatWeAutomate: WhatWeAutomateContent;
    howWeWork: HowWeWorkContent;
    exampleWorkflows: ExampleWorkflowsContent;
    whyStructureWorks: WhyStructureWorksContent;
    selectedUseCases: SelectedUseCasesContent;
    contactBrief: ContactBriefContent;
}

export const centerHomeBilingualContent: Record<CenterLocale, CenterHomeContent> = {
    en: {
        seo: {
            title: 'WeCaHan Auto | Operational Automation Systems for Service Businesses',
            description: 'Practical automation for repetitive operational workflows. We help service businesses build clearer processes with less manual friction.',
        },
        hero: {
            eyebrow: 'Better Operational Flow',
            title: 'Operational automation systems for service businesses',
            description: 'Clearer workflows. Less manual friction. We design and build the automation layer that keeps your processes moving without constant repetitive effort.',
            primaryCta: { label: 'Contact Us', href: '/contact' },
            secondaryCta: { label: 'Brief Your Process', href: '#brief' },
            trustLine: 'Lead handling, communications, and internal operations.',
        },
        whatWeAutomate: {
            title: 'What We Automate',
            description: 'We focus on the operational friction points that slow down service-based teams every day.',
            categories: [
                {
                    title: 'Lead Handling',
                    description: 'Capture, route and organize inbound requests before they get lost in scattered channels.',
                    examples: ['Form intake', 'Routing', 'Initial qualification', 'Team alerts'],
                },
                {
                    title: 'Communication Flows',
                    description: 'Automate the predictable touchpoints between your team and your clients or leads.',
                    examples: ['Follow-up sequences', 'Reminders', 'Status updates', 'Onboarding triggers'],
                },
                {
                    title: 'Internal Operations',
                    description: 'Synchronize data and tasks between your tools so your team doesn\'t have to copy-paste.',
                    examples: ['Document chasing', 'Task assignment', 'Tool syncing', 'Entry validation'],
                },
                {
                    title: 'Reporting Workflows',
                    description: 'Aggregate operational data into clear views without manual spreadsheet assembly.',
                    examples: ['Daily logs', 'Performance snapshots', 'Process health checks'],
                },
                {
                    title: 'Content-Assisted Processes',
                    description: 'Leverage structured templates and triggers for recurring documentation needs.',
                    examples: ['Brief generation', 'Proposal triggers', 'Operational SOP delivery'],
                },
            ],
        },
        howWeWork: {
            title: 'How We Work',
            description: 'A systematic 4-step approach to building sustainable operational automation.',
            steps: [
                {
                    step: '01',
                    title: 'Analysis',
                    description: 'Brief review of your current workflow to identify repetitive manual friction and bottlenecks.',
                },
                {
                    step: '02',
                    title: 'Setup',
                    description: 'Designing and building the automation logic, followed by testing and initial deployment.',
                },
                {
                    step: '03',
                    title: 'Maintenance',
                    description: 'Proactive monitoring and small refinements to ensure the system remains reliable and current.',
                },
                {
                    step: '04',
                    title: 'Expansion',
                    description: 'Scaling the system with new integration layers or more complex workflows as your team grows.',
                },
            ],
        },
        exampleWorkflows: {
            title: 'Example Workflow Scenarios',
            description: 'A practical look at how operational logic replaces manual management.',
            scenarios: [
                {
                    title: 'Inbound Lead Routing',
                    problem: 'Requests from multiple channels get lost or answered inconsistently.',
                    logic: 'Unified intake and automated routing based on basic classification.',
                    flow: [
                        'Intake (Form/Message)',
                        'Auto-Classification',
                        'Team Notification',
                        'Tracking Layer Entry',
                        'Response Readiness',
                    ],
                },
                {
                    title: 'Appointment & Reminder Chain',
                    problem: 'Team spends hours manually confirming dates or chasing documents before a meeting.',
                    logic: 'Context-aware triggers based on appointment status and document requirements.',
                    flow: [
                        'Booking Trigger',
                        'Requirement Check',
                        'Automated Chase/Reminder',
                        'Status Dashboard Update',
                        'Pre-Meeting Briefing',
                    ],
                },
                {
                    title: 'Internal Operational Sync',
                    problem: 'Information in the CRM doesn\'t match the project management tool or the finance log.',
                    logic: 'Real-time data synchronization across operational software boundaries.',
                    flow: [
                        'Event Trigger (Tool A)',
                        'Validation Filter',
                        'Data Transformation',
                        'Target Update (Tool B)',
                        'Sync Confirmation',
                    ],
                },
            ],
        },
        whyStructureWorks: {
            title: 'Why This Structure Works',
            description: 'Operational automation is about outcome, not just technology.',
            benefits: [
                {
                    title: 'Less scattered follow-up',
                    description: 'Centralized intake ensures nothing is left to memory or buried in individual inboxes.',
                },
                {
                    title: 'Better visibility',
                    description: 'Dashboards and automated logs provide an instant view of process health and pending items.',
                },
                {
                    title: 'Reduced repetitive work',
                    description: 'By offloading copy-pasting and manual notification, teams focus on active decision-making.',
                },
                {
                    title: 'Cleaner team coordination',
                    description: 'Structured hand-offs and automated alerts ensure everyone knows their role in the flow.',
                },
            ],
        },
        selectedUseCases: {
            title: 'Selected Use-Case Examples',
            description: 'Applying operational logic to specific business contexts.',
            useCases: [
                {
                    context: 'Clinic Inquiry Handling',
                    problem: 'Scattered intake from WhatsApp and forms leading to inconsistent follow-up.',
                    logic: 'Clean intake and routing layer to improve visibility before the appointment stage.',
                    expectedClarity: 'Centralized patient lead dashboard and reduced response gaps.',
                },
                {
                    context: 'Recurring Client Follow-up',
                    problem: 'High-volume services struggling to keep clients updated on project milestones.',
                    logic: 'Triggered reporting snippets based on operational task completion.',
                    expectedClarity: 'Automated client transparency and fewer manual status emails.',
                },
            ],
        },
        contactBrief: {
            title: 'Let’s understand your process first',
            description: 'No need for a long document. A short outline of your current process is enough for an initial review. We check for fit before proposing next steps.',
            primaryCta: { label: 'Contact Us', href: '/contact' },
            secondaryCta: { label: 'Share a Brief', href: '#brief' },
            helperText: 'A short 5-minute brief is usually enough to start.',
        },
        // Legacy Mappings
        services: {
            eyebrow: 'Better Flow',
            title: 'Operational Logic Categories',
            description: 'Focusing on the operational friction points that slow down service-based teams every day.',
            items: [
                {
                    label: 'Intake & Routing',
                    title: 'Lead Handling',
                    description: 'Capturing and organizing inbound requests before they get lost.',
                },
                {
                    label: 'Client Interplay',
                    title: 'Communication Flows',
                    description: 'Automating the predictable touchpoints between team and leads.',
                },
                {
                    label: 'Cross-Tool Sync',
                    title: 'Internal Operations',
                    description: 'Synchronizing data and tasks between your professional tools.',
                },
            ],
        },
        workflow: {
            eyebrow: 'Our Method',
            title: 'Practical 4-Step Approach',
            description: 'We follow a systematic method to build sustainable operational automation.',
            items: [
                {
                    step: '01',
                    title: 'Analysis',
                    description: 'Brief review of your current workflow and identification of bottlenecks.',
                },
                {
                    step: '02',
                    title: 'Setup',
                    description: 'Designing and building the automation logic, followed by testing.',
                },
                {
                    step: '03',
                    title: 'Maintenance',
                    description: 'Monitoring and refinements to ensure system reliability and flow.',
                },
            ],
        },
        briefForm: {
            eyebrow: 'Get Started',
            title: 'Tell us about your process',
            description: 'A short outline of your current manual workflow is enough for an initial review.',
            submitLabel: 'Send Brief',
            successMessage: 'Brief received. We will review it and get back to you shortly.',
            helperText: 'No long documents required. Just a few lines to start the conversation.',
            privacyNote: 'Your information is processed according to our security and privacy standards.',
            labels: {
                fullName: 'Full name',
                workEmail: 'Work email',
                company: 'Company',
                inquiryType: 'Project type',
                message: 'Brief',
            },
            submitButtonLoading: 'Sending...',
            consentRequiredError: 'You must agree before submitting this brief.',
            genericError: 'Something went wrong while submitting the brief.',
        },
        finalCta: {
            title: 'Ready for a cleaner operational process?',
            description: 'Contact us to discuss your specific workflow needs and how we can automate them.',
            primaryCta: { label: 'Contact Us', href: '/contact' },
            secondaryCta: { label: 'Process Brief', href: '#brief' },
            helperText: 'Focused on clarity and coordination.',
        },
        labels: {
            phaseLabel: 'Phase',
            scenarioLabel: 'Scenario',
            problemLabel: 'Problem',
            logicLabel: 'Automation Logic',
            flowStepLabel: 'Step',
            operationalDesignLabel: 'Operational Flow Design',
            outcomeLabel: 'Operational Outcome',
            contextualProblemLabel: 'Contextual Problem',
            appliedLogicLabel: 'Applied Logic',
            expectedOutcomeLabel: 'Expected Outcome',
            customLayoutsNote: 'Custom layouts available for unique operational workflows',
        },
    },
    tr: {
        seo: {
            title: 'WeCaHan Auto | Hizmet İşletmeleri İçin Operasyonel Otomasyon Sistemleri',
            description: 'Tekrarlayan operasyonel iş akışları için pratik otomasyon çözümleri. Daha az manuel sürtünme ve daha net süreçler inşa etmenize yardımcı oluyoruz.',
        },
        hero: {
            eyebrow: 'Daha İyi Operasyonel Akış',
            title: 'Hizmet işletmeleri için operasyonel otomasyon sistemleri',
            description: 'Daha net iş akışları. Daha az manuel yük. Süreçlerinizin sürekli tekrarlayan çaba gerektirmeden ilerlemesini sağlayan otomasyon katmanını tasarlıyor ve kuruyoruz.',
            primaryCta: { label: 'Bize Ulaşın', href: '/iletisim' },
            secondaryCta: { label: 'Sürecinizi Özetleyin', href: '#brief' },
            trustLine: 'Aday takibi, iletişim akışları ve iç operasyonlar.',
        },
        whatWeAutomate: {
            title: 'Neleri Otomatikleştiriyoruz?',
            description: 'Hizmet odaklı ekipleri her gün yavaşlatan operasyonel sürtünme noktalarına odaklanıyoruz.',
            categories: [
                {
                    title: 'Aday/Talep Karşılama',
                    description: 'Gelen talepleri, dağınık kanallarda kaybolmadan önce yakalayın, yönlendirin ve organize edin.',
                    examples: ['Form toplama', 'Yönlendirme', 'Ön kalifikasyon', 'Ekip bildirimleri'],
                },
                {
                    title: 'İletişim Akışları',
                    description: 'Ekibiniz ile müşterileriniz veya adaylarınız arasındaki öngörülebilir temas noktalarını otomatikleştirin.',
                    examples: ['Takip sekansları', 'Hatırlatıcılar', 'Durum güncellemeleri', 'Başlangıç tetikleyicileri'],
                },
                {
                    title: 'İç Operasyonlar',
                    description: 'Araçlarınız arasındaki veri ve görev senkronizasyonunu sağlayın, ekibiniz kopyala-yapıştır ile uğraşmasın.',
                    examples: ['Belge takibi', 'Görev atama', 'Araç senkronizasyonu', 'Veri doğrulama'],
                },
                {
                    title: 'Raporlama Akışları',
                    description: 'Operasyonel verileri, manuel e-tablo montajı gerektirmeden net görünümlerde birleştirin.',
                    examples: ['Günlük loglar', 'Performans özetleri', 'Süreç sağlığı kontrolleri'],
                },
                {
                    title: 'İçerik Destekli Süreçler',
                    description: 'Tekrarlayan dokümantasyon ihtiyaçları için yapılandırılmış şablonlardan ve tetikleyicilerden yararlanın.',
                    examples: ['Brief oluşturma', 'Teklif tetikleyicileri', 'Operasyonel SOP teslimi'],
                },
            ],
        },
        howWeWork: {
            title: 'Nasıl Çalışıyoruz?',
            description: 'Sürdürülebilir operasyonel otomasyon oluşturmak için 4 adımlı sistematik bir yaklaşım.',
            steps: [
                {
                    step: '01',
                    title: 'Analiz',
                    description: 'Mevcut iş akışınızın kısa bir incelemesi; tekrarlayan manuel sürtünmelerin ve darboğazların tespiti.',
                },
                {
                    step: '02',
                    title: 'Kurulum',
                    description: 'Otomasyon mantığının tasarlanması ve oluşturulması, ardından testler ve ilk yayına alım.',
                },
                {
                    step: '03',
                    title: 'Bakım',
                    description: 'Sistemin güvenilir ve güncel kalmasını sağlamak için proaktif izleme ve küçük iyileştirmeler.',
                },
                {
                    step: '04',
                    title: 'Genişleme',
                    description: 'Ekibiniz büyüdükçe sistemi yeni entegrasyon katmanları veya daha karmaşık iş akışlarıyla ölçeklendirme.',
                },
            ],
        },
        exampleWorkflows: {
            title: 'Örnek İş Akışı Senaryoları',
            description: 'Operasyonel mantığın manuel yönetimin yerini nasıl aldığına dair pratik bir bakış.',
            scenarios: [
                {
                    title: 'Gelen Aday Yönlendirme',
                    problem: 'Birden fazla kanaldan gelen talepler kayboluyor veya tutarsız yanıtlanıyor.',
                    logic: 'Birleştirilmiş giriş ve temel sınıflandırmaya dayalı otomatik yönlendirme.',
                    flow: [
                        'Giriş (Form/Mesaj)',
                        'Otomatik Sınıflandırma',
                        'Ekip Bildirimi',
                        'Takip Katmanına Kayıt',
                        'Yanıta Hazırlık',
                    ],
                },
                {
                    title: 'Randevu ve Hatırlatıcı Zinciri',
                    problem: 'Ekip, toplantı öncesi tarih onaylamak veya belge kovalamak için saatler harcıyor.',
                    logic: 'Randevu durumuna ve belge gereksinimlerine göre bağlam duyarlı tetikleyiciler.',
                    flow: [
                        'Rezervasyon Tetikleyici',
                        'Gereksinim Kontrolü',
                        'Otomatik Takip/Hatırlatma',
                        'Durum Paneli Güncellemesi',
                        'Toplantı Öncesi Bilgilendirme',
                    ],
                },
                {
                    title: 'Operasyonel İç Senkronizasyon',
                    problem: 'CRM\'deki bilgiler proje yönetim aracı veya finans kayıtlarıyla eşleşmiyor.',
                    logic: 'Operasyonel yazılım sınırları arasında gerçek zamanlı veri senkronizasyonu.',
                    flow: [
                        'Olay Tetikleyici (Araç A)',
                        'Doğrulama Filtresi',
                        'Veri Dönüştürme',
                        'Hedef Güncelleme (Araç B)',
                        'Senkronizasyon Onayı',
                    ],
                },
            ],
        },
        whyStructureWorks: {
            title: 'Bu Yapı Neden İşe Yarıyor?',
            description: 'Operasyonel otomasyon sadece teknolojiyle değil, sonuçla ilgilidir.',
            benefits: [
                {
                    title: 'Daha az dağınık takip',
                    description: 'Merkezi giriş sistemi, hiçbir şeyin hafızaya bırakılmamasını veya bireysel kutularda kaybolmamasını sağlar.',
                },
                {
                    title: 'Daha iyi görünürlük',
                    description: 'Paneller ve otomatik kayıtlar, süreç sağlığına ve bekleyen öğelere anlık bir bakış sunar.',
                },
                {
                    title: 'Azalan tekrarlayan işler',
                    description: 'Kopyala-yapıştır ve manuel bildirim yükünü devrederek, ekipler aktif karar vermeye odaklanır.',
                },
                {
                    title: 'Temiz ekip koordinasyonu',
                    description: 'Yapılandırılmış el değiştirmeler ve otomatik uyarılar, akışta herkesin rolünü bilmesini sağlar.',
                },
            ],
        },
        selectedUseCases: {
            title: 'Seçili Kullanım Örnekleri',
            description: 'Operasyonel mantığın belirli iş bağlamlarına uygulanması.',
            useCases: [
                {
                    context: 'Klinik Talep Yönetimi',
                    problem: 'WhatsApp ve formlardan gelen dağınık taleplerin tutarsız takibe yol açması.',
                    logic: 'Randevu aşamasından önce görünürlüğü artırmak için temiz bir giriş ve yönlendirme katmanı.',
                    expectedClarity: 'Merkezi hasta aday paneli ve azalan yanıt gecikmeleri.',
                },
                {
                    context: 'Tekrarlayan Müşteri Takibi',
                    problem: 'Yüksek hacimli hizmetlerde müşterileri proje aşamaları hakkında güncel tutma zorluğu.',
                    logic: 'Operasyonel görev tamamlanmasına dayalı tetiklenen raporlama parçacıkları.',
                    expectedClarity: 'Otomatik müşteri şeffaflığı ve daha az manuel durum e-postası.',
                },
            ],
        },
        contactBrief: {
            title: 'Önce sürecinizi anlayalım',
            description: 'Uzun belgelere gerek yok. Mevcut sürecinizin kısa bir taslağı ilk inceleme için yeterlidir. Bir sonraki adımı önermeden önce uygunluğu kontrol ederiz.',
            primaryCta: { label: 'Bize Ulaşın', href: '/iletisim' },
            secondaryCta: { label: 'Özet Paylaşın', href: '#brief' },
            helperText: 'Başlamak için genellikle 5 dakikalık bir özet yeterlidir.',
        },
        // Legacy Mappings
        services: {
            eyebrow: 'Daha İyi Akış',
            title: 'Operasyonel Mantık Kategorileri',
            description: 'Hizmet odaklı ekipleri her gün yavaşlatan operasyonel sürtünme noktalarına odaklanıyoruz.',
            items: [
                {
                    label: 'Giriş ve Yönlendirme',
                    title: 'Aday Yönetimi',
                    description: 'Gelen talepleri kaybolmadan önce yakalama ve organize etme.',
                },
                {
                    label: 'Müşteri Etkileşimi',
                    title: 'İletişim Akışları',
                    description: 'Ekip ve adaylar arasındaki öngörülebilir temas noktalarını otomatikleştirme.',
                },
                {
                    label: 'Araçlar Arası Senkr.',
                    title: 'İç Operasyonlar',
                    description: 'Profesyonel araçlarınız arasında veri ve görev senkronizasyonu.',
                },
            ],
        },
        workflow: {
            eyebrow: 'Yöntemimiz',
            title: 'Pratik 4 Adımlı Yaklaşım',
            description: 'Sürdürülebilir operasyonel otomasyon inşa etmek için sistematik bir yöntem izliyoruz.',
            items: [
                {
                    step: '01',
                    title: 'Analiz',
                    description: 'Mevcut iş akışınızın kısa bir incelemesi ve darboğazların tespiti.',
                },
                {
                    step: '02',
                    title: 'Kurulum',
                    description: 'Otomasyon mantığının tasarlanması ve oluşturulması, ardından testler.',
                },
                {
                    step: '03',
                    title: 'Bakım',
                    description: 'Sistem güvenilirliğini ve akışını sağlamak için izleme ve iyileştirmeler.',
                },
            ],
        },
        briefForm: {
            eyebrow: 'Başlayın',
            title: 'Sürecinizden bahsedin',
            description: 'Mevcut manuel iş akışınızın kısa bir taslağı ilk inceleme için yeterlidir.',
            submitLabel: 'Özeti Gönder',
            successMessage: 'Özet alındı. İnceleyip en kısa sürede size döneceğiz.',
            helperText: 'Uzun belgeler gerekmez. Görüşmeyi başlatmak için birkaç satır yeterlidir.',
            privacyNote: 'Bilgileriniz güvenlik ve gizlilik standartlarımıza göre işlenir.',
            labels: {
                fullName: 'Ad Soyad',
                workEmail: 'İş E-postası',
                company: 'Şirket',
                inquiryType: 'Proje Türü',
                message: 'Özet',
            },
            submitButtonLoading: 'Gönderiliyor...',
            consentRequiredError: 'Bu özeti göndermeden önce onay vermelisiniz.',
            genericError: 'Özet gönderilirken bir hata oluştu.',
        },
        finalCta: {
            title: 'Daha temiz bir operasyonel sürece hazır mısınız?',
            description: 'Özel iş akışı ihtiyaçlarınızı ve bunları nasıl otomatikleştirebileceğimizi görüşmek için bize ulaşın.',
            primaryCta: { label: 'Bize Ulaşın', href: '/iletisim' },
            secondaryCta: { label: 'Süreç Özeti', href: '#brief' },
            helperText: 'Netlik ve koordinasyona odaklanmıştır.',
        },
        labels: {
            phaseLabel: 'Faz',
            scenarioLabel: 'Senaryo',
            problemLabel: 'Problem',
            logicLabel: 'Otomasyon Mantığı',
            flowStepLabel: 'Adım',
            operationalDesignLabel: 'Operasyonel Akış Tasarımı',
            outcomeLabel: 'Operasyonel Sonuç',
            contextualProblemLabel: 'Bağlamsal Problem',
            appliedLogicLabel: 'Uygulanan Mantık',
            expectedOutcomeLabel: 'Beklenen Sonuç',
            customLayoutsNote: 'Benzersiz operasyonel iş akışları için özel düzenler mevcuttur',
        },
    },
};

export function getCenterHomeContent(locale: CenterLocale = "en"): CenterHomeContent {
    return centerHomeBilingualContent[locale] || centerHomeBilingualContent.en;
}

/**
 * Backward-compatible export for existing blocks.
 * Defaulting to 'en' as it was the original base language.
 */
export const centerHomeContent = getCenterHomeContent("en");
