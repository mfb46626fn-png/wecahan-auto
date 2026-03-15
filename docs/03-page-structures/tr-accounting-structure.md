# TR Accounting Office Structure

## Belge amacı
Bu belge, `tr.auto.wecahan.com/muhasebe-ofisleri` sayfasının içerik ve section yapısını tanımlar.

Amaç:
- mali müşavirlik ve muhasebe ofislerine yönelik satış sayfasını netleştirmek
- evrak takibi, tekrar eden hatırlatmalar, müşteri iletişimi ve görev görünürlüğü gibi sorunları doğru sırayla anlatmak
- bu dikey için ürünleşmiş çözüm yapısını göstermek
- daha sakin ve sistem odaklı bir ziyaretçi profiline uygun sayfa akışı kurmak
- daha sonra tasarım, component ve kodlama işlerini kolaylaştırmak

Bu sayfa:
- klinik sayfasının kopyası değildir
- genel ajans sayfası değildir
- çok sıcak ve aceleci satış diliyle konuşmaz
- karmaşık teknik dil üzerine kurulmaz

Bu sayfa, Türkiye’deki mali müşavirlik ve muhasebe ofisleri için özel hazırlanmış satış landing sayfasıdır.

---

# 1) Sayfanın temel rolü

## Rol
Muhasebe ofislerinde tekrar eden takip ve evrak süreçlerini daha düzenli, görünür ve kontrol edilebilir hale getiren otomasyon çözümlerini anlatan dikey satış sayfası.

## Ana hedef
Ziyaretçiye ilk 20–30 saniyede şu hissi vermek:
- bu ekip muhasebe ofislerinin tekrar eden operasyonel yükünü anlıyor
- evrak isteme, hatırlatma, müşteri takip ve görev görünürlüğü tarafındaki dağınıklığı görüyor
- anlatılan yapı teknoloji şovu değil, ofis düzeni kurmaya yönelik
- çözüm paketleri somut
- iletişime geçmek kolay ama baskılı değil

## Ana dönüşüm hedefi
- form gönderimi
- kısa değerlendirme talebi
- uygun lead için WhatsApp veya e-posta üzerinden temas

## İkincil hedef
- paket mantığını göstermek
- kurulum ve bakım modelini netleştirmek
- ziyaretçiyi fiyatlandırma ve örnek senaryolara taşımak

## Olmaması gerekenler
- klinik sayfasındaki kadar sıcak ve hızlı iletişim baskısı
- fazla satışçı başlıklar
- muhasebe ofisine yabancı gelen teknoloji lafları
- “tek tuşla her şeyi çözer” havası
- evrak ve görev takip gerçekliğini yüzeysel anlatmak
- fazla sektör dışı örnek

---

# 2) Sayfa yapısı özeti

Muhasebe Ofisleri sayfası şu ana section’lardan oluşur:

1. Header / Navbar
2. Hero
3. Common Workflow Problems in Accounting Offices
4. What We Help Offices Improve
5. Flagship Office Package
6. Solution Modules
7. Setup Levels
8. Maintenance Levels
9. What’s Included / What’s Not
10. Example Office Workflow
11. Pricing Logic for Offices
12. Fit / Not Fit
13. Contact / CTA Section
14. Footer

Bu sıra korunmalıdır.

Sebep:
- önce problemi isimlendiririz
- sonra ofis tarafında neyi iyileştirdiğimizi söyleriz
- sonra amiral çözümü koyarız
- sonra modülleri açarız
- sonra kapsam ve seviye farkını netleştiririz
- en son iletişime taşırız

---

# 3) Section 1 — Header / Navbar

## Rol
Kullanıcıya yön kaybettirmeden sayfa içinde ve site genelinde gezinme sağlar.

## İçerik
- logo / wordmark
- Ana Sayfa
- Klinikler
- Muhasebe Ofisleri
- Paketler
- Fiyatlandırma
- Örnek Senaryolar
- İletişim
- ana CTA: Form Gönder veya Kısa Değerlendirme Al

## Amaç
- muhasebe ofisleri sayfasının ayrı bir çözüm alanı olduğunu göstermek
- Paketler ve Fiyatlandırma’ya geçişi kolaylaştırmak
- iletişimi görünür tutmak

## Davranış
- sticky olabilir
- mobilde sade hamburger menüye inmeli
- ana CTA görünür kalmalı ama çok agresif olmamalı

## Not
Bu sayfada WhatsApp olabilir ama navbar’daki ana aksiyon mutlaka WhatsApp olmak zorunda değildir.  
Bu dikey için form ve değerlendirme daha doğal kapanış noktasıdır.

---

# 4) Section 2 — Hero

## Rol
Muhasebe ofisi ziyaretçisinin “bu sayfa bizim düzen problemimize hitap ediyor mu?” sorusunu ilk ekranda cevaplar.

## Ziyaretçinin burada anlaması gereken
- bu sayfa muhasebe ofisleri için
- ana sorunlar evrak, tekrar eden takip, görev akışı ve görünürlük
- satılan şey yazılım curcunası değil, düzenli süreç yapısı
- ilk temas için kısa değerlendirme yapılabiliyor

## Başlık yönü
Başlık düzen, takip ve görünürlük diliyle kurulmalı.

### Başlık yönü örnekleri
- Muhasebe ofislerinde tekrar eden takip ve evrak süreçlerini daha düzenli hale getirin
- Müşteri evrak ve hatırlatma süreçlerini daha kontrollü yönetin
- Dağınık ofis akışlarını daha görünür ve takip edilebilir hale getiren otomasyon sistemleri

## Alt başlık yönü
Evrak isteme, tekrar eden hatırlatmalar, müşteri takip, görev görünürlüğü ve temel operasyon akışlarını daha düzenli hale getiren otomasyon yapıları kuruyoruz.

## Hero CTA yapısı
### Ana CTA
- Kısa Değerlendirme Al
- Form Gönder

### İkincil CTA
- Sürecini Anlat
- Fiyatlandırma Mantığını Gör

## Hero görsel mantığı
- evrak takip adımları
- görev akışı kartları
- hatırlatma / durum / görünürlük kartları
- sade ofis operasyon hissi veren grid yapılar

## Kaçınılacak görseller
- klasik muhasebeci stok fotoğrafları
- hesap makinesi / klasör klişeleri
- aşırı kurumsal banka estetiği
- yapay zekâ/robot görselleri

## Çözmesi gereken itiraz
- bunlar muhasebe ofisinin düzen ihtiyacını gerçekten anlıyor mu?

---

# 5) Section 3 — Common Workflow Problems in Accounting Offices

## Rol
Muhasebe ofislerinin gerçek operasyonel sorunlarını netleştirir.

## Amaç
Ziyaretçiye “bizde olan da tam bu” dedirtmek.

## Yapı
5–6 problem kartı.

### Önerilen problem başlıkları
- Evrak isteme ve takip tekrar tekrar aynı eforu istiyor
- Müşteri hatırlatmaları kişisel takiple yürüyor
- Görev görünürlüğü zayıf kaldığında işler kişiye bağlı ilerliyor
- Beyan ve dönemsel işler yaklaşırken takip yükü artıyor
- Ekip içinde neyin yapıldığı ve neyin beklendiği net görünmüyor
- Parçalı araçlar yüzünden süreç tek yerde izlenemiyor

## Kart formatı
- kısa problem başlığı
- 1–2 cümle açıklama
- mümkünse gündelik ofis bağlamı

### Örnek
**Evrak isteme ve takip tekrar tekrar aynı eforu istiyor**  
Müşterilerden aynı belgeleri düzenli aralıklarla istemek gerektiğinde süreç kişisel takibe kalırsa hem zaman kaybı artar hem de hata riski yükselir.

## Bu section’ın görevi
- ofis sahibinin veya sorumlusunun kendi düzen sıkıntısını tanımasını sağlamak
- güven inşa etmek
- teknolojiyi değil sorunu merkez almak

## Çözmesi gereken itiraz
- bunlar ofis gerçekliğini biliyor mu, yoksa havadan mı konuşuyor?

---

# 6) Section 4 — What We Help Offices Improve

## Rol
Sorundan çözüme geçiş köprüsüdür.

## Amaç
“Tam olarak neyi daha iyi hale getiriyoruz?” sorusuna pratik cevap vermek.

## Yapı
4–5 fayda kartı.

### Önerilen başlıklar
- Daha düzenli evrak takibi
- Daha tutarlı müşteri hatırlatma akışı
- Daha görünür görev dağılımı
- Daha az kişisel takibe bağlı süreç
- Daha kontrollü ofis operasyonu

## Kart örneği
**Daha tutarlı müşteri hatırlatma akışı**  
Aynı hatırlatmaların her ay veya her dönem yeniden manuel yürütülmesi yerine, daha planlı ve takip edilebilir akışlar kurulduğunda ekip üzerindeki gereksiz yük azalır.

## Kaçınılacak vaatler
- hatasız beyan süreci garantisi
- personel ihtiyacını bitirme
- otomatik ofis yönetimi
- tek gecede kusursuz düzen

## Çözmesi gereken itiraz
- bunun ofis tarafında bana günlük katkısı ne?

---

# 7) Section 5 — Flagship Office Package

## Rol
Bu dikeydeki amiral çözümü net şekilde ortaya koyar.

## Ana paket
**Ofis Evrak ve Müşteri Takip Otomasyon Paketi**

## Amaç
Muhasebe ofisleri sayfasında somut ve satın alınabilir çözümü göstermek.

## Kart / blok yapısı
- paket adı
- neyi çözer
- ana kapsam
- kime uygun
- CTA

## Önerilen içerik
### Paket açıklaması
Müşteri evrak isteme, tekrar eden hatırlatma, temel görev yönlendirme ve takip görünürlüğü için daha düzenli otomasyon akışları kurar.

### Uygun yapı
- düzenli evrak toplayan ofisler
- tekrar eden takip yükü yüksek ekipler
- görevlerin kişiye bağlı ilerlediği yapılar
- daha görünür süreç isteyen ofisler

### Ana kapsam başlıkları
- client information / document request flow
- reminder automation
- task visibility
- follow-up tracking
- basic reporting visibility

### CTA
- Sürecimi Anlat
- Kısa Değerlendirme Al

## Section’ın görevi
- “somut olarak ne satıyorsunuz?” sorusuna cevap vermek
- bu dikeyde de ürünleşmiş yapı olduğunu göstermek

## Çözmesi gereken itiraz
- bu iş tamamen belirsiz mi, yoksa net çözüm yapısı var mı?

---

# 8) Section 6 — Solution Modules

## Rol
Muhasebe ofisleri için çözüm alanlarını daha detaylı ama düzenli biçimde gösterir.

## Amaç
Çözümün sadece tek bir hatırlatma otomasyonundan ibaret olmadığını anlatmak.

## Yapı
4 modül kartı idealdir.

### Modül 1 — Document Request & Collection
- evrak isteme akışı
- eksik evrak takip mantığı
- tekrar eden dönemsel talep akışları
- durum takibi

### Modül 2 — Reminder & Follow-Up Flows
- tekrar eden müşteri hatırlatmaları
- cevap vermeyen müşteri için ikinci / üçüncü temas
- dönemsel iletişim akışları
- temel takip disiplini

### Modül 3 — Internal Task Visibility
- ekip bildirimleri
- görevlerin aşama görünürlüğü
- hangi müşteride neyin eksik olduğu takibi
- temel kontrol katmanı

### Modül 4 — Basic Reporting & Process View
- tekrar eden darboğazların görünmesi
- hangi işlerin gecikmeye açık olduğu
- süreç görünürlüğü
- yönetici bakışı için özet görünüm

## Kart formatı
- modül adı
- kısa açıklama
- 3–4 alt madde

## Not
Muhasebe ofisi ziyaretçisi teknik modül detayına değil, iş yükü ve düzen etkisine bakar.  
Metinler bu nedenle sakin ama somut olmalıdır.

## Çözmesi gereken itiraz
- içerik gerçekten dolu mu?
- sadece mail hatırlatma sistemi mi anlatıyorsunuz?

---

# 9) Section 7 — Setup Levels

## Rol
Kurulum kapsamının ofis ihtiyacına göre değişebileceğini anlatır.

## Amaç
Her ofisin aynı boyutta çözüm almadığını göstermek.

## Yapı
3 seviye kartı.

### Seviye 1 — Hafif Kurulum
**Uygun yapı**  
- küçük ekipler
- tek ana problem yaşayan ofisler
- önce evrak veya hatırlatma tarafını düzeltmek isteyenler

**Örnek kapsam**  
- document request flow
- temel reminder
- basit görünürlük

### Seviye 2 — Orta Seviye Kurulum
**Uygun yapı**  
- birden fazla tekrar eden süreci olan ofisler
- hem evrak takibi hem görev görünürlüğü isteyenler

**Örnek kapsam**  
- evrak isteme
- reminder katmanı
- task visibility
- temel raporlama

### Seviye 3 — Gelişmiş Kurulum
**Uygun yapı**  
- daha yoğun müşteri hacmi olan ofisler
- dönemsel iş yükü yüksek olan yapılar
- süreçlerini daha net standardize etmek isteyen ekipler

**Örnek kapsam**  
- çok adımlı reminder
- eksik evrak yönlendirmesi
- görev görünürlüğü
- raporlama katmanı
- süreç bazlı genişletme

## Çözmesi gereken itiraz
- bize gereğinden büyük çözüm mü satılacak?
- küçük başlayıp büyütmek mümkün mü?

---

# 10) Section 8 — Maintenance Levels

## Rol
Kurulum sonrası sürdürülebilirlik mantığını açıklar.

## Amaç
Aylık bakımın neden ayrı bir başlık olduğunu netleştirmek.

## Yapı
3 seviye kartı.

### Temel Bakım
- temel izleme
- küçük hata düzeltmeleri
- aylık genel kontrol

### Standart Bakım
- izleme
- küçük iyileştirmeler
- destek dönüşleri
- düzenli sağlık kontrolü

### Genişletilmiş Bakım
- daha aktif izleme
- öncelikli destek
- yeni küçük akışlar
- süreç iyileştirme önerileri

## Alt açıklama
Büyük yeni modüller ve kapsam dışı geliştirmeler ayrı geliştirme kalemi olarak ele alınır.

## Çözmesi gereken itiraz
- bakım niye var?
- kurulumdan sonra sistem kaderine mi bırakılacak?

---

# 11) Section 9 — What’s Included / What’s Not

## Rol
Kapsam dürüstlüğü sağlar.

## Amaç
Yanlış beklentiyi baştan temizlemek.

## Yapı
İki sütun veya iki blok.

### Ne Var
- mevcut sürece uygun akış tasarımı
- kurulum ve test
- reminder ve takip akışları
- görev görünürlüğü yapısı
- bakım seviyesine göre izleme ve küçük iyileştirme

### Ne Yok
- tam muhasebe yazılımı geliştirme
- ERP yerine geçen özel platform kurma
- hukuki / mali danışmanlık
- beyan hazırlama hizmeti
- sınırsız revizyon
- sınırsız yeni modül

## Neden önemli
Bu blok ciddi görünür.  
“Her şeyi yaparız” diyen ekip değil, sınırı net olan ekip daha güvenilir görünür.

## Çözmesi gereken itiraz
- sonradan kapsam tartışması çıkar mı?

---

# 12) Section 10 — Example Office Workflow

## Rol
Pratikte kurulacak akışın neye benzediğini gösterir.

## Amaç
Ziyaretçinin “tam olarak nasıl bir düzen kuruluyor?” sorusuna cevap vermek.

## Yapı
1 büyük örnek akış veya 2 kısa örnek.

### Örnek akış 1
**Recurring Document Request Flow**  
dönemsel evrak ihtiyacı  
→ talep oluşturma  
→ müşteri hatırlatma  
→ eksik evrak görünürlüğü  
→ ekip bildirimi  
→ takip durumu

### Örnek akış 2
**Client Follow-Up Visibility Flow**  
müşteri durumu  
→ görev oluşturma  
→ sorumlu görünürlüğü  
→ takip tarihi  
→ durum güncelleme  
→ temel yönetici görünümü

## Sunum biçimi
- step cards
- timeline
- sade ofis akışı diyagramı

## Çözmesi gereken itiraz
- bu iş gerçekten tasarlanmış mı, yoksa sadece hizmet başlığı mı?

---

# 13) Section 11 — Pricing Logic for Offices

## Rol
Muhasebe ofisleri tarafında fiyat mantığını kısaca açıklamak.

## Amaç
Tam fiyat listesi açmadan belirsizliği azaltmak.

## Yapı
- kısa başlık
- analiz / kurulum / bakım mantığı
- fiyatı etkileyen unsurlar
- detay sayfasına geçiş

### Başlık yönü
Muhasebe ofislerinde fiyatlandırma, kurulacak süreç kapsamına ve bakım ihtiyacına göre şekillenir.

### Fiyatı etkileyen unsurlar
- tekrar eden süreç sayısı
- müşteri hacmi
- ekip büyüklüğü
- entegrasyon ihtiyacı
- görev görünürlüğü seviyesi
- bakım yoğunluğu

### CTA
- Fiyatlandırma Mantığını Gör
- Kısa Değerlendirme Al

## Kaçınılacaklar
- sayfayı fiyat tablosuna çevirmek
- “tek paket tek fiyat” gibi kaba anlatım
- aşırı rakam kalabalığı

## Çözmesi gereken itiraz
- fiyat tamamen kapalı kutu mu?
- bize uygun bir kapsam çıkar mı?

---

# 14) Section 12 — Fit / Not Fit

## Rol
Doğru müşteriyi çekmek, yanlış beklentiyi elemek.

## Amaç
Lead kalitesini artırmak ve profesyonel filtre koymak.

## Yapı
İki blok.

### Uygun Yapılar
- düzenli evrak takibi olan ofisler
- tekrar eden hatırlatma yükü yüksek ekipler
- süreçleri kişisel takibe bağlı yürüyen yapılar
- görev görünürlüğünü artırmak isteyen ofisler
- daha kontrollü operasyon isteyen ekipler

### Uygun Olmayan Yapılar
- tam özel muhasebe yazılımı isteyenler
- hiçbir ekip katkısı olmadan her şeyi dışarı devretmek isteyenler
- tek gecede kusursuz dönüşüm bekleyenler
- yalnızca muhasebe hizmeti veya danışmanlık arayanlar

## Neden önemli
Bu bölüm hem güven verir hem yanlış lead’i azaltır.

## Çözmesi gereken itiraz
- bize uygun bir yapı mı?
- yanlış beklentiye mi giriyorum?

---

# 15) Section 13 — Contact / CTA Section

## Rol
Sayfanın ana dönüşüm noktası.

## Amaç
Muhasebe ofisi ziyaretçisini baskısız ama net şekilde temasa taşımak.

## Yapı
- kısa başlık
- güven metni
- ofis odaklı form
- e-posta ve opsiyonel WhatsApp
- değerlendirme mantığı açıklaması

## Başlık yönleri
- Ofisinizde en çok tekrar eden takip yükünü kısaca anlatın
- Önce mevcut evrak ve müşteri takip sürecinizi anlayalım
- Size uygun yapıyı birlikte netleştirelim

## Alt metin yönü
Uzun bir döküman hazırlamanız gerekmez. Kısa bir süreç özeti, ilk değerlendirme için yeterlidir.

## Form alan önerileri
- ad soyad
- ofis adı
- ekip büyüklüğü
- şehir
- telefon
- e-posta
- en çok zaman alan tekrar eden süreç nedir?
- en sık yaşanan takip problemi nedir?
- şu anda hangi araçları kullanıyorsunuz?

## Mikro güven metinleri
- Her ofise aynı yapı önerilmez.
- Önce sürecinizin uygunluğunu kısaca değerlendiririz.
- İhtiyaç olmayan katmanları önermeyiz.

## Ana CTA
- Form Gönder
- Kısa Değerlendirme Al

## İkincil CTA
- E-posta ile Ulaş
- WhatsApp ile Yaz

## Denge notu
Bu sayfada form ana yüzdür.  
WhatsApp yardımcı kanal olabilir ama merkezi rol almak zorunda değildir.

## Çözmesi gereken itiraz
- önce bizi anlayacak mısınız?
- bize uygun olup olmadığını baştan görebilecek miyiz?
- satış baskısı yiyecek miyiz?

---

# 16) Section 14 — Footer

## Rol
Sayfayı temiz, oturmuş ve güvenilir hissettirmek.

## İçerik
- kısa marka açıklaması
- Klinikler
- Muhasebe Ofisleri
- Paketler
- Fiyatlandırma
- Örnek Senaryolar
- İletişim
- e-posta
- gizlilik
- şartlar

## Footer kısa açıklama yönü
Muhasebe ofislerinde tekrar eden takip, evrak ve görev süreçleri için operasyonel otomasyon sistemleri.

---

# 17) Section sırası neden böyle?

## Sıra mantığı
1. ofisin derdini isimlendiririz
2. neyi iyileştirdiğimizi söyleriz
3. amiral çözümü koyarız
4. modülleri açarız
5. seviye farklarını anlatırız
6. bakım ve kapsam netliğini veririz
7. örnek akış gösteririz
8. fiyat mantığını açıklarız
9. uygun müşteri filtresi koyarız
10. sonra temas isteriz

Bu akış, klinik sayfasına göre biraz daha sakin ama daha sistemli ilerler.

---

# 18) Sayfa içi CTA dağılımı

## Hero
- Kısa Değerlendirme Al
- Form Gönder

## Flagship Package sonrası
- Sürecimi Anlat

## Pricing Logic sonrası
- Fiyatlandırma Mantığını Gör

## Final CTA
- Form Gönder
- Kısa Değerlendirme Al

## Kural
Bu sayfada CTA dili daha kontrollü olacak.  
Aynı ekranda çok sayıda aksiyon kavgası çıkarılmayacak.

---

# 19) Bu sayfa için gerekli ana component listesi

Muhtemel component ihtiyaçları:

- TrNavbar
- SectorHeroOffice
- ProblemGridOffice
- BenefitCardsOffice
- FlagshipPackageBlockOffice
- SolutionModuleCardsOffice
- SetupLevelCards
- MaintenanceLevelCards
- IncludedExcludedSplit
- WorkflowExampleOffice
- PricingLogicPreviewOffice
- FitNotFitBlock
- ContactFormOffice
- TrFooter

---

# 20) Mobil davranış notları

## Mobilde önemli olanlar
- hero başlığı kısa kalmalı
- problem kartları kolay taranmalı
- modül kartları dikey ve okunabilir akmalı
- form kısa tutulmalı
- CTA’lar birbirine girmemeli
- fiyat mantığı bölümü mobilde de net okunmalı

## Mobilde kaçınılacaklar
- sıkışık tablo yapıları
- çok uzun kart içerikleri
- yatay karşılaştırmalar
- aynı anda 3 ayrı ana CTA

---

# 21) Başarı sinyalleri

Bu sayfanın başarılı çalıştığını gösterecek sinyaller:
- form başlatma ve gönderim oranı
- fiyatlandırma sayfasına geçiş
- örnek senaryolar sayfasına geçiş
- setup levels ve example workflow section scroll derinliği
- mobil bounce oranının dengeli kalması
- iletişim sayfasına geçiş oranı

---

# 22) Sonuç

Bu belgeye göre `tr.auto.wecahan.com/muhasebe-ofisleri` sayfası:
- muhasebe ofisi gerçekliğini doğru isimlendiren
- düzen, takip ve görünürlük ekseninde konuşan
- somut çözüm modülleri sunan
- kapsamı dürüst anlatan
- baskısız ama net temasa taşıyan
bir dikey satış sayfası olarak çalışacaktır.

Bu sayfanın gücü:
**tekrar eden iş yükünü doğru teşhis etmek + düzen vaadini net vermek + filtreli temas kurmak**