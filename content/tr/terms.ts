export interface TermsSection {
    title: string;
    body: string;
    items?: string[];
}

export interface TrTermsContent {
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
    sections: TermsSection[];
    contactNote: string;
}

export const trTermsContent: TrTermsContent = {
    seo: {
        title: "Kullanım Şartları | WeCaHan Auto Türkiye",
        description: "TR satış sitesinin kullanımı ve site üzerinden yürüyen ilk iletişim süreçlerine ilişkin genel kullanım şartlarını içerir.",
    },

    hero: {
        eyebrow: "Yasal Çerçeve",
        title: "Kullanım Şartları",
        description: "Bu sayfa, WeCaHan Auto Türkiye sitemizin kullanımı ve ilk iletişim süreçlerine ilişkin genel şartları ve sınırları ana hatlarıyla belirtir.",
    },

    lastUpdated: "Son güncelleme: 17 Mart 2026",

    summary: "Bu site, WeCaHan Auto Türkiye hizmetlerini tanıtmak ve ilk temasları koordine etmek amacıyla sunulan bir bilgilendirme platformudur. Site üzerinden paylaşılan ön bilgiler veya yürütülen ilk görüşmeler, tek başına bağlayıcı bir hizmet sözleşmesi oluşturmaz.",

    sections: [
        {
            title: "Sitenin Kullanımı",
            body: "Sitemiz, profesyonel hizmetlerimize ilişkin bilgilendirme ve ilk temas köprüsü oluşturma amaçlıdır. Kullanıcılar siteyi yalnızca yasal amaçlarla kullanmayı kabul eder. Aşağıdaki durumlar yasaklı kullanım kapsamındadır:",
            items: [
                "Sitenin teknik işleyişine veya güvenliğine müdahale edecek faaliyetlerde bulunmak.",
                "İletişim kanalları üzerinden yanıltıcı, hukuka aykırı veya zararlı içerik paylaşmak.",
                "Site içeriğini izinsiz şekilde ticari amaçlarla toplamak veya kopyalamak.",
            ],
        },
        {
            title: "İçeriğin Niteliği ve Bilgilendirme Amacı",
            body: "Sitede yer alan tüm metinler, görseller ve örnek senaryolar; hizmet yaklaşımımızı ve operasyonel çözüm çerçevemizi anlatmak içindir. Bu içerikler, taraflar arasında mutabakat sağlanmış bir hizmet sözleşmesi veya kesin bir teknik taahhüt niteliği taşımaz.",
        },
        {
            title: "Otomatik Hizmet Sözleşmesi Oluşmaması",
            body: "İletişim formunun doldurulması, bir süreç özeti (brief) gönderilmesi, e-posta iletilmesi veya bir ön analiz görüşmesi yapılması, WeCaHan Auto ile aranızda otomatik olarak bağlayıcı bir hizmet sözleşmesi kurmaz. Resmi hizmet ilişkisi, kapsam ve şartların ayrıca netleştirilip onaylandığı bir süreçle başlar.",
        },
        {
            title: "Kapsam ve Ticari Şartların Ayrı Belirlenmesi",
            body: "Otomasyon kurulumları, bakım süreçleri, ücretler ve teslim takvimleri; her projenin kendi karmaşıklığına göre ayrıca belirlenir. Sitede yer alan genel tanımlar veya örnek fiyatlandırmalar, nihai bir hizmet teklifi değil, bilgilendirme amaçlı temel göstergelerdir.",
        },
        {
            title: "Kullanıcı Tarafından Sağlanan Bilgilerin Doğruluğu",
            body: "Değerlendirme formları veya iletişim kanalları üzerinden paylaştığınız bilgilerin makul ölçüde doğru ve güncel olması beklenir. İlk temas aşamasında, süreci yürütmek için gerekli olmayan çok hassas veya ticari sır niteliğindeki bilgilerin paylaşılmamasını tavsiye ederiz.",
        },
        {
            title: "Fikri Mülkiyet Hakları",
            body: "Sitenin tasarımı, metin içerikleri, marka öğeleri ve kullanılan özgün görsel unsurlar WeCaHan Auto mülkiyetindedir. Bu materyallerin izinsiz çoğaltılması, kopyalanması veya yeniden kullanımı fikri mülkiyet haklarının ihlali sayılabilir.",
        },
        {
            title: "Üçüncü Taraf Bağlantıları ve Araçlar",
            body: "Sitemizde zaman zaman operasyonel süreçlerimize yardımcı olan harici araçlara veya bilgilendirme amaçlı dış bağlantılara yer verilebilir. Bu gibi durumlarda, ilgili harici platformların kendi kullanım şartları ve politikaları geçerli olur.",
        },
        {
            title: "Garanti ve Sorumluluk Sınırları",
            body: "Sitemizin kullanımı veya ilk temasın yürütülmesi; belirli bir ticari sonuç, talebin kesin kabulü veya bir projenin başlatılması garantisi vermez. WeCaHan Auto, site içeriğinin doğruluğu ve güncelliği için makul çabayı gösterir ancak mutlak bir hatasızlık taahhüdünde bulunmaz.",
        },
        {
            title: "Şartların Güncellenmesi",
            body: "Hizmet modellerimiz ve dijital altyapımız geliştikçe bu kullanım şartlarını güncelleme hakkımızı saklı tutarız. Önemli güncellemeler, sayfanın başındaki tarih bilgisi üzerinden takip edilebilir.",
        },
    ],

    contactNote: "Bu şartlar veya hizmet çerçevemizle ilgili ek sorularınız olması durumunda, birincil iletişim kanallarımız üzerinden bizimle iletişime geçmekten çekinmeyin.",
};
