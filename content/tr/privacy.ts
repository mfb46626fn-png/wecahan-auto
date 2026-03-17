export interface PrivacySection {
    title: string;
    body: string;
    items?: string[];
}

export interface TrPrivacyContent {
    seo: {
        title: string;
        description: string;
    };
    hero: {
        eyebrow: string;
        title: string;
        description: string;
    };
    lastUpdated: string;
    summary: string;
    sections: PrivacySection[];
    contactNote: string;
}

export const trPrivacyContent: TrPrivacyContent = {
    seo: {
        title: "Gizlilik Politikası | WeCaHan Auto Türkiye",
        description: "TR satış sitesi üzerinden paylaşılan iletişim ve ihtiyaç bağlamı verilerinin nasıl ele alındığına dair şeffaf bilgilendirme.",
    },

    hero: {
        eyebrow: "Güven ve Şeffaflık",
        title: "Gizlilik Politikası",
        description: "Bu sayfa, WeCaHan Auto Türkiye sitemiz üzerinden paylaşılan bilgilerin hangi amaçla alındığını ve nasıl yönetildiğini açıklar.",
    },

    lastUpdated: "Son güncelleme: 17 Mart 2026",

    summary: "WeCaHan Auto Türkiye olarak, operasyonel verimliliğinizi artırma sürecinde paylaştığınız her türlü bilgiye profesyonel bir hassasiyetle yaklaşıyoruz. Bilgileriniz, yalnızca taleplerinizi değerlendirmek ve size en uygun hizmet yapısını kurgulamak amacıyla kullanılır.",

    sections: [
        {
            title: "Toplanabilecek Bilgiler",
            body: "Değerlendirme formlarımız veya iletişim kanallarımız aracılığıyla kendi isteğinizle paylaştığınız verileri işliyoruz. Bu veriler genellikle şunları kapsar:",
            items: [
                "Kimlik ve İletişim: Ad soyad, e-posta adresi ve telefon numarası.",
                "İşletme Bağlamı: Şirket adı, web sitesi ve faaliyet gösterilen sektör.",
                "İhtiyaç ve İş Akışı: Formlarda belirtilen operasyonel sürtünme noktaları ve mesaj içerikleri.",
                "Gönüllü Paylaşımlar: İletişim sürecinde kendi tercihinizle eklediğiniz tüm diğer detaylar.",
            ],
        },
        {
            title: "Bilgiler Hangi Amaçlarla Kullanılır?",
            body: "Toplanan veriler, size sunduğumuz hizmetin doğruluğunu ve verimliliğini sağlamak için kullanılır:",
            items: [
                "İletişim taleplerinizin ilk uygunluk ve kapasite açısından değerlendirilmesi.",
                "İşletmenizdeki manuel iş yükü ve otomasyon potansiyelinin analiz edilmesi.",
                "Size özel tekliflerin ve operasyonel yol haritalarının hazırlanması.",
                "Verilen hizmete dair sağlıklı bir iletişim kaydı tutulması.",
            ],
        },
        {
            title: "Bilgilerin Paylaşımı ve Aktarımı",
            body: "Kişisel verilerinizin satılması veya kiralanması söz konusu değildir. Bilgiler sadece şu sınırlı durumlarda paylaşılabilir:",
            items: [
                "Operasyonel Gereklilik: İletişim veya analiz süreçlerimizde kullandığımız (e-posta, CRM veya iletişim araçları gibi) güvenilir teknoloji sağlayıcılarıyla, ilgili gizlilik standartları dahilinde.",
                "Yasal Zorunluluklar: Yürürlükteki mevzuat gereği yetkili merciler tarafından talep edilmesi halinde.",
            ],
        },
        {
            title: "Veri Saklama Süresi",
            body: "Bilgilerinizi; talep ettiğiniz inceleme, iletişim süreci ve makul kurumsal kayıt tutma ihtiyaçları devam ettiği sürece saklıyoruz. Ortak bir çalışma kararı çıkmayan durumlarda, pasif verileri makul aralıklarla temizliyoruz.",
        },
        {
            title: "Kullanıcı Olarak Tercihleriniz",
            body: "Paylaştığınız bilgiler üzerinde kontrol sahibisiniz. İstediğiniz zaman bizimle iletişime geçerek; verilerinizde düzeltme yapılmasını isteyebilir, uygun durumlarda silinmesini talep edebilir veya iletişimi tamamen sonlandırabilirsiniz.",
        },
        {
            title: "Güvenlik Önlemleri",
            body: "Verilerinizin yetkisiz erişime karşı korunması için gelişmiş idari ve teknik koruma yöntemleri uyguluyoruz. Dijital dünyada tam güvenlik garantisi vermek teknik olarak mümkün olmasa da, verilerinizi korumak için sektör standartlarını hassasiyetle takip ediyoruz.",
        },
        {
            title: "Uluslararası Altyapı Kullanımı",
            body: "Hizmet akışımızda kullanılan dijital araçlara (WhatsApp, bulut tabanlı iletişim araçları vb.) bağlı olarak, paylaştığınız bilgiler ilgili sağlayıcıların kendi altyapıları üzerinden işlenebilir. Bu işlemler her durumda bu politikanın güven ilkeleriyle uyumlu kalır.",
        },
        {
            title: "Politika Güncellemeleri",
            body: "Operasyonel modellerimiz değiştikçe bu politikayı zaman zaman revize edebiliriz. Güncellemeler, sayfanın başındaki tarih üzerinden takip edilebilir.",
        },
    ],

    contactNote: "Gizlilik politikamız veya verilerinizin işlenme süreciyle ilgili sorularınız için bizimle her zaman iletişim kanallarımız üzerinden bağlantı kurabilirsiniz.",
};
