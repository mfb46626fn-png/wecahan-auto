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
    trustPoint: string;
}

interface BriefTopic {
    label: string;
    example: string;
}

interface ContextGuidanceContent {
    title: string;
    description: string;
    topics: BriefTopic[];
}

interface ProcessStep {
    title: string;
    description: string;
}

interface BriefingFlowContent {
    title: string;
    description: string;
    steps: ProcessStep[];
}

interface ExpectationNote {
    title: string;
    description: string;
}

interface SettingExpectationsContent {
    title: string;
    notes: ExpectationNote[];
}

interface FormField {
    label: string;
    placeholder: string;
    hint?: string;
}

interface FormMicrocopy {
    title: string;
    description: string;
    fields: {
        context: FormField;
        basics: FormField;
        goals: FormField;
    };
    submitLabel: string;
    successState: {
        title: string;
        description: string;
    };
    errorState: {
        title: string;
        description: string;
    };
    privacyNote: string;
}

interface ClosingNoteContent {
    title: string;
    description: string;
}

export interface ContactContent {
    seo: SeoContent;
    hero: HeroContent;
    contextGuidance: ContextGuidanceContent;
    briefingFlow: BriefingFlowContent;
    settingExpectations: SettingExpectationsContent;
    form: FormMicrocopy;
    closingNote: ClosingNoteContent;
}

export const centerContactBilingualContent: Record<CenterLocale, ContactContent> = {
    en: {
        seo: {
            title: 'Contact | WeCaHan Auto - Start Your Brief',
            description: 'Share a short brief about your operational friction. No pressure discovery for service business automation.',
        },
        hero: {
            eyebrow: 'Discovery phase',
            title: 'Let’s start with context',
            description: 'The first step to operational clarity is a simple brief. We don\'t need pages of documentation; just a few lines about where your process currently stalls.',
            trustPoint: 'No-pressure review. Clear boundaries.',
        },
        contextGuidance: {
            title: 'What to share',
            description: 'To give you an accurate first response, focusing on these points is usually enough:',
            topics: [
                {
                    label: 'The Friction',
                    example: '"Our lead follow-up is manual and inconsistent across tools."',
                },
                {
                    label: 'Current Tools',
                    example: '"We use WhatsApp, a basic CRM, and Google Sheets for tracking."',
                },
                {
                    label: 'Desired Outcome',
                    example: '"Auto-routing leads and centralized visibility of project status."',
                },
            ],
        },
        briefingFlow: {
            title: 'What happens next',
            description: 'Consistency matters even in how we start our conversations.',
            steps: [
                {
                    title: 'Initial Review',
                    description: 'We analyze your brief for operational fit and technical feasibility.',
                },
                {
                    title: 'Contextual Response',
                    description: 'We get back to you with a clear perspective—either a next step or a honest "not a fit" note.',
                },
                {
                    title: 'Focused Discussion',
                    description: 'If there is alignment, we schedule a short sync to finalize the scope.',
                },
            ],
        },
        settingExpectations: {
            title: 'A different discovery experience',
            notes: [
                {
                    title: 'No sales pressure',
                    description: 'This is an operational consultation. We only propose a setup if the logic makes sense for your scale.',
                },
                {
                    title: 'Scope honesty',
                    description: 'If your problem requires custom software or a marketing agency, we will tell you early.',
                },
            ],
        },
        form: {
            title: 'Short Process Brief',
            description: 'Briefly outline your current manual workflow to start the review.',
            fields: {
                context: {
                    label: 'Where is the manual friction?',
                    placeholder: 'E.g., Chasing client documents or syncing CRM data...',
                    hint: 'A few lines are enough.',
                },
                basics: {
                    label: 'Your Contact Info',
                    placeholder: 'Name, Email or Company Link',
                },
                goals: {
                    label: 'Main Goal',
                    placeholder: 'E.g., Centralized lead dashboard',
                },
            },
            submitLabel: 'Send Brief',
            successState: {
                title: 'Brief received',
                description: 'We will review your context and get back to you shortly.',
            },
            errorState: {
                title: 'Something went wrong',
                description: 'Please try again or contact us directly via email.',
            },
            privacyNote: 'Your brief is handled with operational confidentiality.',
        },
        closingNote: {
            title: 'Sincere & Structured',
            description: 'We believe every automation project starts with an honest conversation about process logic.',
        },
    },
    tr: {
        seo: {
            title: 'İletişim | WeCaHan Auto - Süreç Özeti',
            description: 'Operasyonel darboğazlarınız hakkında kısa bir özet paylaşın. Düşük baskılı, sistem odaklı ilk temas.',
        },
        hero: {
            eyebrow: 'Keşif aşaması',
            title: 'Bağlamla başlayalım',
            description: 'Operasyonel netliğe giden ilk adım, basit bir özettir. Sayfalarca dokümana gerek yok; sürecinizin nerede tıkandığını birkaç satırla anlatmanız yeterli.',
            trustPoint: 'Baskısız inceleme. Net sınırlar.',
        },
        contextGuidance: {
            title: 'Neler paylaşabilirsiniz?',
            description: 'Size doğru bir ilk dönüş yapabilmemiz için şu noktalara odaklanmanız genellikle yeterlidir:',
            topics: [
                {
                    label: 'Sürtünme Noktası',
                    example: '"Aday takibimiz manuel ve araçlar arasında tutarsız ilerliyor."',
                },
                {
                    label: 'Mevcut Araçlar',
                    example: '"WhatsApp, temel bir CRM ve takip için Google Sheets kullanıyoruz."',
                },
                {
                    label: 'Hedeflenen Sonuç',
                    example: '"Adayların otomatik yönlendirilmesi ve proje durumunun merkezi görünürlüğü."',
                },
            ],
        },
        briefingFlow: {
            title: 'Sonrasında ne olur?',
            description: 'Tutarlılık, iletişimimizin başlama şekli için de geçerlidir.',
            steps: [
                {
                    title: 'İlk İnceleme',
                    description: 'Özetinizi operasyonel uyum ve teknik uygulanabilirlik açısından analiz ediyoruz.',
                },
                {
                    title: 'Bağlamsal Dönüş',
                    description: 'Size net bir perspektifle dönüyoruz; ya bir sonraki adımı öneriyoruz ya da dürüstçe "uygun değil" notu paylaşıyoruz.',
                },
                {
                    title: 'Odaklı Görüşme',
                    description: 'Eğer bir uyum varsa, kapsamı netleştirmek için kısa bir senkronizasyon planlıyoruz.',
                },
            ],
        },
        settingExpectations: {
            title: 'Farklı bir tanışma deneyimi',
            notes: [
                {
                    title: 'Satış baskısı yok',
                    description: 'Bu bir operasyonel konsültasyondur. Sadece mantık ölçeğinize uygunsa bir kurulum öneririz.',
                },
                {
                    title: 'Kapsam dürüstlüğü',
                    description: 'Eğer probleminiz özel yazılım veya bir pazarlama ajansı gerektiriyorsa, bunu size erkenden söyleriz.',
                },
            ],
        },
        form: {
            title: 'Kısa Süreç Özeti',
            description: 'İncelemeyi başlatmak için mevcut manuel iş akışınızı kısaca özetleyin.',
            fields: {
                context: {
                    label: 'Manuel yük nerede oluşuyor?',
                    placeholder: 'Örn: Müşteri belgelerini kovalamak veya CRM verilerini eşitlemek...',
                    hint: 'Birkaç satır yeterlidir.',
                },
                basics: {
                    label: 'İletişim Bilgileriniz',
                    placeholder: 'Ad, E-posta veya İşletme Linki',
                },
                goals: {
                    label: 'Temel Hedef',
                    placeholder: 'Örn: Merkezi aday takip paneli',
                },
            },
            submitLabel: 'Özeti Gönder',
            successState: {
                title: 'Özet alındı',
                description: 'Bağlamınızı inceleyip en kısa sürede size döneceğiz.',
            },
            errorState: {
                title: 'Bir sorun oluştu',
                description: 'Lütfen tekrar deneyin veya doğrudan e-posta yoluyla bize ulaşın.',
            },
            privacyNote: 'Paylaştığınız özet, operasyonel gizlilik prensibiyle ele alınır.',
        },
        closingNote: {
            title: 'Samimi ve Yapılandırılmış',
            description: 'Her otomasyon projesinin, süreç mantığına dair dürüst bir konuşmayla başladığına inanıyoruz.',
        },
    },
};

export function getCenterContactContent(locale: CenterLocale = "en"): ContactContent {
    return centerContactBilingualContent[locale] || centerContactBilingualContent.en;
}

/**
 * Default export for initial consumers.
 */
export const centerContactContent = getCenterContactContent("en");
