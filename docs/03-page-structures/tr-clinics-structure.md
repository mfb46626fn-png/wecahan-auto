# TR Clinics Structure

## Belge amacı
Bu belge, `tr.auto.wecahan.com/klinikler` sayfasının içerik ve section yapısını tanımlar.

Amaç:
- kliniklere özel satış sayfasını netleştirmek
- klinik tarafındaki gerçek operasyonel sorunları doğru sırayla anlatmak
- lead, WhatsApp, ilk temas, randevu, no-show ve takip süreçlerini ürünleşmiş şekilde sunmak
- klinik sahibini veya yöneticiyi hızlı ve güvenli biçimde iletişime taşımak
- daha sonra tasarım, component ve kodlama işlerini kolaylaştırmak

Bu sayfa:
- genel ajans sayfası değildir
- herkese hitap eden bir hizmet vitrini değildir
- global B2B diliyle konuşmaz
- teknik jargon üzerinden ikna etmeye çalışmaz

Bu sayfa, klinikler için özel hazırlanmış ana satış landing sayfasıdır.

---

# 1) Sayfanın temel rolü

## Rol
Kliniklere yönelik operasyonel otomasyon çözümlerini anlatan, güven üreten ve sıcak talep toplayan ana dikey satış sayfası.

## Ana hedef
Ziyaretçiye ilk 20–30 saniyede şu hissi vermek:
- bu ekip kliniklerin gerçek iş akışını biliyor
- lead, WhatsApp ve randevu tarafındaki dağınıklığı anlıyor
- sekreter yükünü, no-show problemini ve takip zorluğunu görüyor
- çözüm paketleri havada değil, somut
- hızlı şekilde iletişim kurmak mümkün

## Ana dönüşüm hedefi
- WhatsApp görüşmesi başlatılması
- klinik formunun doldurulması
- demo / değerlendirme talebi bırakılması

## İkincil hedef
- paketler mantığını göstermek
- kurulum ve bakım modelini netleştirmek
- ziyaretçiyi fiyatlandırma ve örnek senaryolara taşımak

## Olmaması gerekenler
- “her kliniğe aynı sistem” hissi
- fazla medikal jargon
- gereksiz uzun teorik açıklamalar
- CRM, API, webhook gibi teknik dilin baskınlaşması
- garanti hasta artışı gibi ucuz vaatler
- gereğinden fazla sektör dışı örnek

---

# 2) Sayfa yapısı özeti

Klinikler sayfası şu ana section’lardan oluşur:

1. Header / Navbar
2. Hero
3. Clinic Workflow Problems
4. What We Help Clinics Improve
5. Flagship Clinic Package
6. Solution Modules
7. Setup Levels
8. Maintenance Levels
9. What’s Included / What’s Not
10. Example Clinic Workflow
11. Pricing Logic for Clinics
12. Fit / Not Fit
13. Contact / CTA Section
14. Footer

Bu sıra korunmalıdır.

Sebep:
- önce problemi isimlendiririz
- sonra neyi iyileştirdiğimizi söyleriz
- sonra amiral paketi koyarız
- sonra modülleri açarız
- sonra kapsam, seviye ve fiyat sisini dağıtırız
- en son temas isteriz

---

# 3) Section 1 — Header / Navbar

## Rol
Kullanıcıya yön kaybettirmeden klinikler sayfası içinde ve site genelinde gezinme sağlar.

## İçerik
- logo / wordmark
- Ana Sayfa
- Klinikler
- Muhasebe Ofisleri
- Paketler
- Fiyatlandırma
- Örnek Senaryolar
- İletişim
- ana CTA: WhatsApp ile Konuş

## Amaç
- kullanıcıya sayfa bağlamını net hissettirmek
- klinik sayfasının “ana dikey” olduğunu görünür kılmak
- iletişimi sürekli erişilebilir tutmak

## Davranış
- sticky olabilir
- mobilde sade hamburger menüye inmeli
- ana CTA mobilde de görünür kalmalı

---

# 4) Section 2 — Hero

## Rol
Klinik ziyaretçisinin “bu sayfa bana göre mi?” sorusunu ilk ekranda cevaplar.

## Ziyaretçinin burada anlaması gereken
- bu sayfa klinikler için
- ana sorun lead, WhatsApp, ilk temas ve randevu takibi
- satılan şey teknoloji değil, düzen ve takip
- hızlı şekilde iletişim kurulabiliyor

## Başlık yönü
Başlık klinik bağlamını açıkça söylemeli.

### Başlık yönü örnekleri
- Kliniklerde dağınık hasta adayı ve randevu süreçlerini daha düzenli hale getirin
- WhatsApp, form ve randevu trafiğini daha kontrollü yönetin
- Kliniklerde tekrar eden iletişim ve takip yükünü azaltan otomasyon sistemleri

## Alt başlık yönü
İlk temas, lead takibi, randevu teyit, hatırlatma ve temel hasta akışı süreçlerini daha net ve takip edilebilir hale getiren otomasyon akışları kuruyoruz.

## Hero CTA yapısı
### Ana CTA
- WhatsApp ile Konuş

### İkincil CTA
- Sürecini Anlat
- Kısa Değerlendirme Al

## Hero görsel mantığı
- klinik lead akışı kartları
- WhatsApp → kayıt → teyit → takip akışı
- sade dashboard hissi
- önce/sonra süreç düzeni

## Kaçınılacak görseller
- genel hastane stoğu
- doktor gülümseme fotoğrafı çöplüğü
- medikal cihaz görselleri
- yapay zekâ beyin efekti

## Çözmesi gereken itiraz
- bunlar klinik tarafını gerçekten anlıyor mu?

---

# 5) Section 3 — Clinic Workflow Problems

## Rol
Kliniklerin yaşadığı gerçek operasyonel problemleri netleştirir.

## Amaç
Ziyaretçiye “bizim yaşadığımız şey bu” hissi vermek.

## Yapı
5–6 problem kartı.

### Önerilen problem başlıkları
- Hasta adayları farklı kanallarda dağınık kalıyor
- WhatsApp ve ilk temas kişiye bağlı ilerliyor
- Randevu teyit ve hatırlatma düzeni oturmuyor
- No-show oranı can sıkıyor
- Sekreter yükü tekrar eden iletişimle şişiyor
- Kimle ne konuşulduğu ve neyin beklediği net görünmüyor

## Kart formatı
- kısa problem başlığı
- 1–2 cümle açıklama
- mümkünse operasyonel bağlam

### Örnek
**Hasta adayları farklı kanallarda dağınık kalıyor**  
Form, WhatsApp ve diğer iletişim kanallarından gelen talepler tek akışta toplanmadığında takip kalitesi düşer ve bazı adaylar boşa gidebilir.

## Bu section’ın görevi
- derdi doğru teşhis etmek
- ziyaretçiyi sayfada tutmak
- güven inşa etmek

## Çözmesi gereken itiraz
- bunlar sadece otomasyon lafı mı ediyor, yoksa bizim günlük sıkıntıyı biliyor mu?

---

# 6) Section 4 — What We Help Clinics Improve

## Rol
Sorundan çözüme geçiş köprüsüdür.

## Amaç
“Peki neyi daha iyi hale getiriyoruz?” sorusuna net cevap vermek.

## Yapı
4–5 fayda kartı.

### Önerilen başlıklar
- Daha düzenli lead toplama
- Daha kontrollü ilk temas
- Daha net randevu teyit ve hatırlatma
- Daha az tekrar eden sekreter yükü
- Daha görünür takip akışı

## Kart örneği
**Daha kontrollü ilk temas**  
İlk mesaj, temel bilgi toplama ve doğru yönlendirme daha düzenli ilerlediğinde hem ekip yükü azalır hem de hasta adayı deneyimi daha tutarlı hale gelir.

## Kaçınılacak vaatler
- otomatik hasta kazanımı
- garanti dolu takvim
- tamamen insansız klinik süreci
- kusursuz dönüşüm

## Çözmesi gereken itiraz
- bunun kliniğe pratik katkısı ne?

---

# 7) Section 5 — Flagship Clinic Package

## Rol
TR tarafının amiral ürününü net biçimde ortaya koyar.

## Ana paket
**Klinik Lead ve Randevu Otomasyon Paketi**

## Amaç
Klinikler sayfasında ana satın alınabilir çözümü net şekilde göstermek.

## Kart / blok yapısı
- paket adı
- neyi çözer
- ana kapsam
- kime uygun
- CTA

## Önerilen içerik
### Paket açıklaması
Form, WhatsApp ve ilk temas akışlarını daha düzenli hale getirir; randevu teyit, hatırlatma ve temel takip katmanı ekler.

### Uygun yapı
- aktif hasta adayı trafiği olan klinikler
- sekreter yükü artmış ekipler
- lead kaçışı yaşayan klinikler
- takip düzeni kurmak isteyen yapılar

### Ana kapsam başlıkları
- lead intake
- basic qualification
- routing / kayıt
- appointment confirmation
- reminder flow
- follow-up visibility

### CTA
- Sürecimi Anlat
- WhatsApp ile Konuş

## Section’ın görevi
- “somut olarak ne satıyorsunuz?” sorusuna cevap vermek
- sayfaya ürünleşmişlik hissi vermek

## Çözmesi gereken itiraz
- sadece danışmanlık mı satıyorlar, yoksa net çözüm var mı?

---

# 8) Section 6 — Solution Modules

## Rol
Amiral paketin ve klinik çözüm alanlarının alt modüllerini gösterir.

## Amaç
Ziyaretçiye çözüm alanlarının kapsamını daha detaylı ama düzenli şekilde göstermek.

## Yapı
4 modül kartı idealdir.

### Modül 1 — Lead Capture & Intake
- form taleplerini toplama
- WhatsApp yönlendirme akışı
- ilk bilgi toplama
- lead kaydı ve sınıflandırma

### Modül 2 — Appointment Confirmation & Reminders
- teyit mesajları
- hatırlatma akışları
- iptal / erteleme akışı
- no-show azaltma mantığı

### Modül 3 — Follow-Up & Re-engagement
- ilk görüşme sonrası takip
- cevap vermeyen lead için tekrar akışı
- temel geri dönüş toplama
- review isteme mantığı

### Modül 4 — Internal Visibility & Notifications
- ekip bildirimleri
- temel takip görünürlüğü
- hangi lead / randevu hangi aşamada sorusuna netlik
- operasyonel kontrol

## Kart formatı
- modül adı
- kısa açıklama
- 3–4 alt madde

## Not
Bu section aşırı teknik detaya boğulmayacak.  
Ama yeterince somut olacak.

## Çözmesi gereken itiraz
- bu işin içeriği ne kadar dolu?
- sadece bir mesaj otomasyonu mu yapıyorlar?

---

# 9) Section 7 — Setup Levels

## Rol
Kurulum kapsamının farklı derinliklerde olabileceğini anlatır.

## Amaç
Her kliniğin aynı kapsamı almadığını göstermek.

## Yapı
3 seviye kartı.

### Seviye 1 — Hafif Kurulum
**Uygun yapı**  
- küçük klinikler
- ilk otomasyon denemesini yapanlar
- tek problem noktasını çözmek isteyenler

**Örnek kapsam**  
- lead toplama
- temel kayıt
- ekip bildirimi

### Seviye 2 — Orta Seviye Kurulum
**Uygun yapı**  
- aktif hasta akışı olan klinikler
- hem lead hem randevu düzeni isteyenler

**Örnek kapsam**  
- lead capture
- ön işleme
- teyit ve hatırlatma
- temel görünürlük

### Seviye 3 — Gelişmiş Kurulum
**Uygun yapı**  
- daha yoğun lead hacmi olan klinikler
- daha fazla kanal kullanan yapılar
- takip ve görünürlük katmanını büyütmek isteyenler

**Örnek kapsam**  
- çok kanallı intake
- sınıflandırma
- randevu akışları
- follow-up katmanı
- dashboard / raporlama

## Not
Bu bölümde tam sabit fiyat şart değil; kapsam farkı net olmalı.

## Çözmesi gereken itiraz
- bize gereğinden büyük ya da küçük bir şey mi satılacak?

---

# 10) Section 8 — Maintenance Levels

## Rol
Kurulum sonrası bakım mantığını açıklamak.

## Amaç
Aylık bakımın ne işe yaradığını ziyaretçinin kafasında netleştirmek.

## Yapı
3 seviye kartı.

### Temel Bakım
- temel izleme
- küçük düzeltmeler
- aylık genel kontrol

### Standart Bakım
- temel izleme
- küçük geliştirmeler
- düzenli iyileştirme
- destek geri dönüşleri

### Genişletilmiş Bakım
- daha aktif izleme
- öncelikli destek
- performans iyileştirme
- yeni mini akışlar

## Alt açıklama
Büyük yeni modüller veya kapsam dışı geliştirmeler ayrı geliştirme kalemi olarak ele alınır.

## Çözmesi gereken itiraz
- aylık bakım neden var?
- kurulumdan sonra sistem kendi haline mi bırakılıyor?

---

# 11) Section 9 — What’s Included / What’s Not

## Rol
Kapsam dürüstlüğü sağlar.

## Amaç
Klinik ziyaretçisinin yanlış beklentiye girmesini önlemek.

## Yapı
İki sütun veya iki blok.

### Ne Var
- mevcut sürece uygun akış tasarımı
- kurulum ve test
- temel kullanım yapısı
- gerekli bildirim ve takip akışları
- bakım seviyesine göre izleme ve küçük iyileştirmeler

### Ne Yok
- özel hastane yazılımı geliştirme
- tam ERP / HBYS kurma
- call center hizmeti
- doktorluk / medikal karar desteği
- reklam yönetimi
- sınırsız revizyon veya sınırsız yeni modül

## Neden önemli
Bu section profesyonel görünür.  
Çünkü sınır çizen ekip daha ciddi görünür.

## Çözmesi gereken itiraz
- bunlar her şeyi vaat edip sonradan kıvıracak mı?

---

# 12) Section 10 — Example Clinic Workflow

## Rol
Pratikte kurulacak akışın neye benzediğini göstermektir.

## Amaç
Ziyaretçinin “tam olarak nasıl bir şey kuruluyor?” sorusuna sade cevap vermek.

## Yapı
1 büyük örnek akış veya 2 kısa örnek.

### Örnek akış 1
**Klinik Lead Intake Flow**  
WhatsApp / form / ilk mesaj  
→ temel bilgi toplama  
→ lead kaydı  
→ ekip bildirimi  
→ ilk dönüş hazırlığı  
→ takip görünürlüğü

### Örnek akış 2
**Appointment Confirmation Flow**  
randevu oluşturma  
→ teyit mesajı  
→ hatırlatma  
→ iptal / erteleme akışı  
→ durum güncelleme  
→ takip kaydı

## Sunum biçimi
- step cards
- hafif diyagram
- timeline

## Çözmesi gereken itiraz
- bu iş sadece laf mı, gerçekten akış tasarlayabiliyorlar mı?

---

# 13) Section 11 — Pricing Logic for Clinics

## Rol
Klinik tarafında fiyat mantığını kısaca açıklamak.

## Amaç
Tam fiyat detayına girmeden belirsizliği azaltmak.

## Yapı
- kısa section başlığı
- analiz / kurulum / bakım mantığı
- fiyatı etkileyen unsurlar
- fiyatlandırma sayfasına geçiş CTA’sı

### Başlık yönü
Kliniklerde fiyatlandırma, kurulacak akışların kapsamına ve bakım ihtiyacına göre şekillenir.

### Fiyatı etkileyen unsurlar
- süreç sayısı
- kanal sayısı
- ekip büyüklüğü
- entegrasyon ihtiyacı
- görünürlük / raporlama seviyesi
- bakım yoğunluğu

### CTA
- Fiyatlandırma Mantığını Gör
- Sürecimi Anlat

## Kaçınılacaklar
- bu sayfayı fiyat tablosuna çevirmek
- rakam bombardımanı yapmak
- her kliniğe tek fiyat havası vermek

## Çözmesi gereken itiraz
- fiyat tamamen kapalı mı?
- bize göre bir kapsam çıkar mı?

---

# 14) Section 12 — Fit / Not Fit

## Rol
Doğru müşteriyi çekmek, yanlış beklentiyi elemek.

## Amaç
Sayfaya profesyonel filtre katmak.

## Yapı
İki blok.

### Uygun Yapılar
- aktif talep akışı olan klinikler
- lead takibi düzensiz ilerleyen yapılar
- WhatsApp / form trafiği olan klinikler
- randevu teyit ve hatırlatma düzeni kurmak isteyenler
- süreç görünürlüğünü artırmak isteyen ekipler

### Uygun Olmayan Yapılar
- tam custom medikal yazılım isteyenler
- hiçbir ekip katkısı olmadan her şeyi dışarı bırakmak isteyenler
- tek gecede tüm sürecin kusursuz dönüşmesini bekleyenler
- yalnızca reklam ajansı arayanlar

## Neden önemli
Bu blok hem güven artırır hem lead kalitesini yükseltir.

## Çözmesi gereken itiraz
- bize uygun bir hizmet mi?
- saçma bir beklentiye mi giriyorum?

---

# 15) Section 13 — Contact / CTA Section

## Rol
Sayfanın ana dönüşüm noktası.

## Amaç
Klinik ziyaretçisini hızlı, kolay ve güven veren şekilde temasa taşımak.

## Yapı
- kısa başlık
- güven metni
- klinik odaklı form
- WhatsApp seçeneği
- e-posta alternatifi

## Başlık yönleri
- Kliniğinizde en çok zorlandığınız süreci kısaca anlatın
- Önce mevcut hasta adayı ve randevu akışınızı anlayalım
- Size uygun yapıyı birlikte netleştirelim

## Alt metin yönü
Uzun bir döküman hazırlamanız gerekmez. Kısa bir süreç özeti bile ilk değerlendirme için yeterlidir.

## Form alan önerileri
- ad soyad
- klinik adı
- hizmet alanı / branş
- şehir
- telefon / WhatsApp
- e-posta
- size en çok nereden talep geliyor?
- en çok zorlandığınız süreç nedir?
- aylık yaklaşık talep / randevu hacmi

## Mikro güven metinleri
- Her kliniğe aynı yapı önerilmez.
- Önce sürecinizin uygunluğunu kısaca değerlendiririz.
- Gerekli olmayan katmanları önermeyiz.

## Ana CTA
- Form Gönder
- WhatsApp ile Konuş

## Denge notu
Klinik sayfasında WhatsApp görünürlüğü güçlü olabilir.  
Ama form, ciddi lead toplama açısından zayıf bırakılmamalı.

## Çözmesi gereken itiraz
- size ulaşmak kolay mı?
- önce beni anlayacak mısınız?
- direkt satış baskısı mı olacak?

---

# 16) Section 14 — Footer

## Rol
Sayfayı tamamlanmış, temiz ve profesyonel hissettirmek.

## İçerik
- kısa marka açıklaması
- Klinikler
- Muhasebe Ofisleri
- Paketler
- Fiyatlandırma
- Örnek Senaryolar
- İletişim
- e-posta
- WhatsApp
- gizlilik
- şartlar

## Footer kısa açıklama yönü
Kliniklerde lead, iletişim ve randevu süreçleri için operasyonel otomasyon sistemleri.

---

# 17) Section sırası neden böyle?

## Sıra mantığı
1. kliniğin derdini isimlendiririz
2. neyi iyileştirdiğimizi söyleriz
3. amiral ürünü koyarız
4. çözüm modüllerini açarız
5. seviye farklarını anlatırız
6. bakım ve kapsam sisini dağıtırız
7. örnek akış gösteririz
8. fiyat mantığını netleştiririz
9. uygun müşteri filtresi koyarız
10. sonra temasa çağırırız

Bu akış klinik ziyaretçisinin karar mekanizmasına daha uygundur.

---

# 18) Sayfa içi CTA dağılımı

## Hero
- WhatsApp ile Konuş
- Sürecini Anlat

## Flagship Package sonrası
- Detayı Gör
- Sürecimi Anlat

## Pricing Logic sonrası
- Fiyatlandırma Mantığını Gör

## Final CTA
- Form Gönder
- WhatsApp ile Konuş

## Kural
Her modül altında büyük CTA basılmayacak.  
CTA yoğunluğu kontrollü tutulacak.

---

# 19) Bu sayfa için gerekli ana component listesi

Muhtemel component ihtiyaçları:

- TrNavbar
- StickyWhatsAppCTA
- SectorHeroClinic
- ProblemGridClinic
- BenefitCardsClinic
- FlagshipPackageBlock
- SolutionModuleCards
- SetupLevelCards
- MaintenanceLevelCards
- IncludedExcludedSplit
- WorkflowExampleClinic
- PricingLogicPreviewClinic
- FitNotFitBlock
- ContactFormClinic
- TrFooter

---

# 20) Mobil davranış notları

## Mobilde önemli olanlar
- hero başlığı kısa kalmalı
- problem kartları kolay taranmalı
- modül kartları aşırı uzun olmamalı
- setup ve maintenance kartları dikey akmalı
- WhatsApp CTA görünür ama boğucu olmamalı
- form kısa ve rahat doldurulabilir olmalı

## Mobilde kaçınılacaklar
- yatay karşılaştırma tabloları
- uzun duvar paragraf metinleri
- fazla ikon ve görsel kalabalık
- aynı ekranda üç farklı ana CTA

---

# 21) Başarı sinyalleri

Bu sayfanın başarılı çalıştığını gösterecek sinyaller:
- WhatsApp tıklamaları
- form başlatma ve gönderim oranı
- pricing sayfasına geçiş
- örnek senaryolara geçiş
- setup levels section scroll derinliği
- example workflow etkileşimi
- mobil bounce oranının aşırı olmaması

---

# 22) Sonuç

Bu belgeye göre `tr.auto.wecahan.com/klinikler` sayfası:
- sektör odaklı
- klinik problemlerini doğru isimlendiren
- ürünleşmiş çözüm sunan
- kapsamı dürüst anlatan
- hızlı ve güvenli temasa taşıyan
bir ana satış sayfası olarak çalışacaktır.

Bu sayfanın gücü:
**doğru problem dili + amiral paket netliği + kapsam dürüstlüğü + kolay iletişim**