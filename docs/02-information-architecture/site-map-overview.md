# Site Map Overview

## Belge amacı
Bu belge, WeCaHan Auto site ailesindeki üç sitenin bilgi mimarisini tanımlar.

Amaç:
- her sitede hangi sayfaların olacağını netleştirmek
- hangi sayfanın ana, hangisinin destekleyici olduğunu belirlemek
- menü, footer ve yönlendirme mantığını dondurmak
- içerik ve tasarım üretiminde sayfa sınırlarını netleştirmek
- gereksiz sayfa şişmesini önlemek

Bu belge, daha sonra oluşturulacak:
- page structure belgeleri
- tasarım wireframe’leri
- component ihtiyaçları
- routing yapısı
- SEO sayfa planı
için temel omurgayı oluşturur.

---

# 1) Genel bilgi mimarisi ilkeleri

## 1.1 Her site aynı işlevi görmez
Bu proje üç ayrı siteye bölünmüştür çünkü:
- her pazarın dili farklıdır
- her ziyaretçi tipi farklıdır
- CTA modeli farklıdır
- fiyat anlatımı farklıdır
- güven kurma biçimi farklıdır

Bu yüzden üç site de aynı menü ve aynı sayfalarla kurulmayacaktır.

## 1.2 Merkez site vitrin, diğerleri satış sahasıdır
- `auto.wecahan.com` = vitrin
- `tr.auto.wecahan.com` = Türkiye satış sahası
- `global.auto.wecahan.com` = global qualification + satış sahası

## 1.3 Her sitede sayfa sayısı kontrollü tutulur
İlk versiyonda gereksiz sayfa açılmayacaktır.  
Amaç, az sayfayla güçlü yapı kurmaktır.

## 1.4 Her sayfanın net bir görevi olmalı
Bir sayfa sadece “olsun diye” açılmaz.  
Her sayfanın şu üç soruya cevabı olmalıdır:
- Bu sayfa ne anlatıyor?
- Hangi ziyaretçi için var?
- Hangi CTA’ya hizmet ediyor?

## 1.5 Ana yapı
Her satış sitesinde şu mantık korunur:
- problem
- çözüm
- süreç
- kapsam
- güven
- CTA

---

# 2) Site ailesi genel harita

## 2.1 Merkez site
`auto.wecahan.com`

### Rol
Marka vitrini.

### Ana amaç
Ziyaretçiye WeCaHan Auto’nun ne yaptığını temiz ve kısa şekilde anlatmak.

### Yapı tipi
Tek sayfa ağırlıklı + dil varyasyonlu yapı.

---

## 2.2 Türkiye sitesi
`tr.auto.wecahan.com`

### Rol
Türkiye pazarı için sektör odaklı satış sitesi.

### Ana amaç
Klinikler başta olmak üzere seçili yapılardan talep toplamak.

### Yapı tipi
Çok sayfalı ama kontrollü satış sitesi.

---

## 2.3 Global sitesi
`global.auto.wecahan.com`

### Rol
Accounting firms odaklı global satış ve qualification sitesi.

### Ana amaç
Doğru lead’i discovery call veya workflow brief akışına almak.

### Yapı tipi
Çok sayfalı, net ve daha kurumsal satış sitesi.

---

# 3) auto.wecahan.com site haritası

## 3.1 Yapı özeti
Merkez site ilk fazda tek ana landing mantığında ilerleyecektir.  
Dil varyasyonu bulunacaktır:
- `/tr`
- `/en`

Root yapı sade kalacaktır.

## 3.2 Zorunlu sayfalar

### 3.2.1 Home / Landing
**URL mantığı**
- `/`
- `/tr`
- `/en`

**Rol**
Markayı ve hizmet çerçevesini anlatan ana vitrin sayfası.

**Amaç**
- ne yaptığımızı göstermek
- hangi süreçleri otomatikleştirdiğimizi anlatmak
- çalışma modelini göstermek
- iletişim kurmak isteyen ziyaretçiye net bir yol vermek

**Ana CTA**
- İletişime Geç
- Kısa Brief Bırak

**Bu sayfada olacak ana bloklar**
- hero
- what we automate
- how we work
- example workflows
- selected use-case examples
- contact block
- footer

---

### 3.2.2 Contact / Contact section
İlk versiyonda ayrı sayfa olmak zorunda değildir.  
Ana landing içinde yer alabilir.

**Rol**
Ziyaretçinin kısa şekilde iletişim bırakabilmesi.

**Amaç**
- e-posta veya kısa form üzerinden talep toplamak

**Not**
İlk versiyonda ayrı `/contact` açmadan landing içinde çözmek daha mantıklıdır.

---

### 3.2.3 Privacy Policy
**URL**
- `/privacy`

**Rol**
Temel yasal ve güven unsuru.

---

### 3.2.4 Terms
**URL**
- `/terms`

**Rol**
Temel yasal metin.

---

### 3.2.5 Cookie / Data notice
**URL**
- `/cookies` veya `/privacy` içinde alt bölüm

**Rol**
Form ve analytics kullanımını şeffaflaştırmak.

---

## 3.3 Opsiyonel sayfalar

### 3.3.1 About
İlk sürümde şart değildir.  
Çünkü merkez siteyi gereksiz şişirebilir.

### 3.3.2 Workflow Examples
Ayrı sayfa olabilir ama ilk fazda homepage içinde blok olarak kalması daha iyidir.

### 3.3.3 Services
Merkez sitede ayrı services sayfası açmak şart değildir.  
Çünkü merkez sitenin amacı satış derinliği değil, çerçeve sunmaktır.

---

## 3.4 Merkez site navbar yapısı

### Navbar öğeleri
- What We Automate
- How We Work
- Examples
- Contact
- Language switch

### CTA
- İletişime Geç / Contact

### Kaçınılacak öğeler
- Pricing
- Clinics
- Accounting Firms
- Book a Call
- WhatsApp

Merkez siteyi satış sitesine çevirmemek için menü sade kalmalıdır.

---

## 3.5 Merkez site footer yapısı

### Footer öğeleri
- kısa marka açıklaması
- e-posta
- privacy
- terms
- cookies / data notice
- language links

### Olmaması gerekenler
- TR ve global fiyat kartları
- sektör bazlı satış CTA’ları
- yoğun menü kalabalığı

---

# 4) tr.auto.wecahan.com site haritası

## 4.1 Yapı özeti
TR sitesi çok sayfalı olacak ama dağınık olmayacak.  
Ana omurga:
- ana satış sayfası
- dikey sayfaları
- paket / fiyat mantığı
- örnek senaryolar
- iletişim

## 4.2 Zorunlu sayfalar

### 4.2.1 Ana Sayfa
**URL**
- `/`

**Rol**
TR ziyaretçiyi doğru sektöre ve doğru çözüm mantığına sokan ana satış sayfası.

**Amaç**
- klinik odaklı ana mesajı vermek
- ikincil olarak muhasebe ofisi tarafını göstermek
- kurulum ve bakım modelini anlatmak
- form/WhatsApp aksiyonuna taşımak

**Ana CTA**
- WhatsApp ile Konuş

**İkincil CTA**
- Form Gönder
- Demo Talep Et

---

### 4.2.2 Klinikler
**URL**
- `/klinikler`

**Rol**
TR tarafının ana dikey landing sayfası.

**Amaç**
- kliniklerin yaşadığı operasyonel problemleri isimlendirmek
- klinik paketlerini anlatmak
- kurulum seviyelerini göstermek
- güvenli bir şekilde talep toplamak

**Ana CTA**
- WhatsApp ile Konuş

**İkincil CTA**
- Sürecini Anlat
- Demo Talep Et

---

### 4.2.3 Mali Müşavirlik / Muhasebe Ofisleri
**URL**
- `/muhasebe-ofisleri`

**Rol**
İkincil TR dikey landing sayfası.

**Amaç**
- evrak, müşteri takip ve tekrar eden süreç problemlerini anlatmak
- ilgili otomasyon yapılarını sunmak
- form ile talep toplamak

**Ana CTA**
- Form Gönder

**İkincil CTA**
- Kısa Değerlendirme Al

---

### 4.2.4 Paketler
**URL**
- `/paketler`

**Rol**
Ürünleşmiş hizmet yapısını anlatan sayfa.

**Amaç**
- analiz
- kurulum
- bakım
- ek geliştirme
mantığını net göstermek

**İçerik**
- hizmet modeli
- hafif / orta / gelişmiş kurulum
- temel / standart / genişletilmiş bakım
- ne var / ne yok blokları

---

### 4.2.5 Fiyatlandırma
**URL**
- `/fiyatlandirma`

**Rol**
Fiyatı tek cümleyle değil, mantığıyla açıklayan sayfa.

**Amaç**
- fiyat belirsizliğini azaltmak
- kapsamın fiyatı nasıl etkilediğini anlatmak
- ziyaretçiyi “önce analiz sonra net teklif” mantığına hazırlamak

**İçerik**
- analiz fiyat bandı
- kurulum bantları
- bakım bantları
- fiyatı etkileyen unsurlar
- ek geliştirme mantığı
- SSS

---

### 4.2.6 Örnek Senaryolar
**URL**
- `/ornek-senaryolar`

**Rol**
Case study yerine güven ve fikir veren senaryo kütüphanesi.

**Amaç**
- gerçek iş akışlarını düşündüğümüzü göstermek
- ziyaretçinin kendi sürecini hayal etmesini sağlamak
- güven katmak

**İçerik türleri**
- klinik lead akışı örneği
- randevu teyit / no-show azaltma akışı
- muhasebe ofisi evrak chase akışı
- takip ve görünürlük örnekleri

---

### 4.2.7 İletişim
**URL**
- `/iletisim`

**Rol**
Talep toplama sayfası.

**Amaç**
- form
- WhatsApp
- e-posta
kanallarını düzenli biçimde sunmak

**Not**
Ana sayfada iletişim blokları olacak ama ayrı sayfa da gereklidir.

---

### 4.2.8 Gizlilik Politikası
**URL**
- `/gizlilik`

---

### 4.2.9 Kullanım / Hizmet Şartları
**URL**
- `/sartlar`

---

## 4.3 Opsiyonel sayfalar

### 4.3.1 Hakkımızda
İlk sürümde şart değil.  
Güçlü bir ekip hikâyesi ve net içerik yoksa boş sayfa olur.

### 4.3.2 SSS
Ayrı sayfa olmak zorunda değil.  
Ana sayfa, paketler ve fiyatlandırma içinde bölüm olarak çözülebilir.

### 4.3.3 Demo Sayfası
Ayrı sayfa olabilir ama ilk sürümde `/iletisim` ve form akışlarıyla çözülebilir.

---

## 4.4 TR site navbar yapısı

### Navbar öğeleri
- Ana Sayfa
- Klinikler
- Muhasebe Ofisleri
- Paketler
- Fiyatlandırma
- Örnek Senaryolar
- İletişim

### Ana CTA
- WhatsApp ile Konuş

### İkincil CTA opsiyonu
- Demo Talep Et

### Not
Mobil menüde CTA görünürlüğü korunmalıdır.

---

## 4.5 TR site footer yapısı

### Footer öğeleri
- kısa marka açıklaması
- klinikler
- muhasebe ofisleri
- paketler
- fiyatlandırma
- örnek senaryolar
- iletişim
- gizlilik
- şartlar
- e-posta
- WhatsApp

### Footer tonu
- sade
- güven veren
- yön kaybettirmeyen

---

# 5) global.auto.wecahan.com site haritası

## 5.1 Yapı özeti
Global site daha B2B ve daha structured olacak.  
Ana omurga:
- ana sayfa
- accounting firms landing
- services
- pricing
- use cases
- book a call
- contact

## 5.2 Zorunlu sayfalar

### 5.2.1 Home
**URL**
- `/`

**Rol**
Global ziyaretçiyi accounting-firm odaklı ana mesaja sokan giriş sayfası.

**Amaç**
- operational automation değer önerisini vermek
- admin drag ve recurring workflow problemlerini anlatmak
- doğru next-step’e taşımak

**Ana CTA**
- Book a Discovery Call

**İkincil CTA**
- Send Workflow Brief

---

### 5.2.2 Accounting Firms
**URL**
- `/accounting-firms`

**Rol**
Ana global dikey landing sayfası.

**Amaç**
- accounting firms için çözülen ana problemleri detaylandırmak
- onboarding, document chase, task routing ve visibility yapılarını sunmak
- discovery call veya brief’e taşımak

**Ana CTA**
- Book a Discovery Call

---

### 5.2.3 Services
**URL**
- `/services`

**Rol**
Ana dikey dışındaki seçili operational automation alanlarını kontrollü şekilde anlatmak.

**Amaç**
- accounting firms ana omurgasını bozmadan
- “niche operational automation services” alanını ikinci katman olarak sunmak

**Not**
Bu sayfa genel ajans kataloğu gibi görünmeyecek.

---

### 5.2.4 Pricing
**URL**
- `/pricing`

**Rol**
Scope-based pricing modelini açıklamak.

**Amaç**
- self-serve SaaS beklentisini kırmak
- setup + maintenance mantığını anlatmak
- price range + scoping mantığını netleştirmek

---

### 5.2.5 Use Cases
**URL**
- `/use-cases`

**Rol**
Gerçek case-study yerine structured workflow examples sunmak.

**Amaç**
- domain understanding göstermek
- problem-solution mapping yapmak
- proof katmanı üretmek

**İçerik türleri**
- client intake workflow
- onboarding follow-up flow
- missing documents routing
- recurring reminders
- internal task visibility

---

### 5.2.6 Book a Call
**URL**
- `/book-a-call`

**Rol**
Discovery call conversion sayfası.

**Amaç**
- doğru beklentiyi kurmak
- call’un ne için olduğunu açıklamak
- calendly / routing flow’a taşımak

**İçerik**
- who this is for
- what we discuss
- who this is not for
- call sonrası ne olur

Bu sayfa çok önemli.  
Çünkü global tarafta “book a call” sayfası lead kalitesini filtreleyen kapı olacaktır.

---

### 5.2.7 Contact
**URL**
- `/contact`

**Rol**
Call dışındaki iletişim ve workflow brief kanalı.

**Amaç**
- form ve e-posta ile alternatif temas imkânı sunmak

---

### 5.2.8 Privacy Policy
**URL**
- `/privacy`

---

### 5.2.9 Terms
**URL**
- `/terms`

---

## 5.3 Opsiyonel sayfalar

### 5.3.1 About
İlk sürümde şart değildir.

### 5.3.2 FAQ
Pricing veya book-a-call sayfası içinde bölüm olarak çözülebilir.

### 5.3.3 Case Studies
Gerçek müşteri ve izinli veri olmadan ayrı sayfa açılmayacaktır.
İlk sürümde `use-cases` yeterlidir.

---

## 5.4 Global site navbar yapısı

### Navbar öğeleri
- Home
- Accounting Firms
- Services
- Pricing
- Use Cases
- Book a Call
- Contact

### Ana CTA
- Book a Discovery Call

### İkincil CTA
- Send Workflow Brief

### Not
Navbar dili kısa, ciddi ve temiz olmalıdır.

---

## 5.5 Global site footer yapısı

### Footer öğeleri
- kısa marka açıklaması
- accounting firms
- services
- pricing
- use cases
- book a call
- contact
- privacy
- terms
- email

### Opsiyonel
- LinkedIn (ileride gerekirse)

---

# 6) Sayfa öncelik sıralaması

## 6.1 Faz 1'de kesin yapılacak sayfalar

### Merkez site
- home
- privacy
- terms

### TR site
- ana sayfa
- klinikler
- muhasebe ofisleri
- paketler
- fiyatlandırma
- örnek senaryolar
- iletişim
- gizlilik
- şartlar

### Global site
- home
- accounting firms
- services
- pricing
- use cases
- book a call
- contact
- privacy
- terms

---

## 6.2 Faz 2'ye bırakılabilecekler
- about
- ayrı faq sayfaları
- blog / insights
- detaylı case study merkezi
- kaynaklar / guides

İlk sürümde bunlara gerek yoktur.  
Önce satış omurgası oturmalıdır.

---

# 7) Site içi yönlendirme kuralları

## 7.1 Merkez sitede yönlendirme davranışı
Merkez site, TR veya global tarafı agresif biçimde öne itmeyecek.  
Burada görünür “go to TR” veya “go to global” satış mantığı kurulmayacak.

## 7.2 TR ve Global birbirine karışmayacak
TR sitesinde global fiyat ve global ton olmayacak.  
Global sitede yerel sıcak iletişim mantığı baskın olmayacak.

## 7.3 Her sitede kendi kapanan akışı olacak
- merkez site → contact
- TR site → WhatsApp / form
- global site → book a call / workflow brief

Bu ayrım korunacaktır.

---

# 8) URL isimlendirme ilkeleri

## 8.1 Türkçe URL
TR sitesinde mümkün olduğunca Türkçe ve temiz slug yapısı kullanılacak:
- `/klinikler`
- `/muhasebe-ofisleri`
- `/paketler`
- `/fiyatlandirma`
- `/ornek-senaryolar`
- `/iletisim`

## 8.2 İngilizce URL
Global sitede kısa ve açık slug yapısı kullanılacak:
- `/accounting-firms`
- `/services`
- `/pricing`
- `/use-cases`
- `/book-a-call`
- `/contact`

## 8.3 Root ve dil yapısı
Merkez sitede:
- `/tr`
- `/en`

Yapısı korunacaktır.

---

# 9) Bilgi mimarisi kalite kontrol soruları

Her sayfa için şu sorular sorulmalıdır:
1. Bu sayfa tek cümlede ne işe yarıyor?
2. Bu sayfanın hedef ziyaretçisi kim?
3. Bu sayfa hangi CTA’ya hizmet ediyor?
4. Bu sayfa başka bir sayfanın tekrarına dönüşüyor mu?
5. Bu sayfa satış sürecinde hangi itiraza cevap veriyor?
6. Bu sayfa kaldırılırsa sistemde bir boşluk oluşuyor mu?

Bu testten geçmeyen sayfa gereksizdir.

---

# 10) Sonuç

Bu belgeye göre ilk faz site haritası şu şekildedir:

## auto.wecahan.com
- Home
- Privacy
- Terms

## tr.auto.wecahan.com
- Ana Sayfa
- Klinikler
- Muhasebe Ofisleri
- Paketler
- Fiyatlandırma
- Örnek Senaryolar
- İletişim
- Gizlilik
- Şartlar

## global.auto.wecahan.com
- Home
- Accounting Firms
- Services
- Pricing
- Use Cases
- Book a Call
- Contact
- Privacy
- Terms

Bu yapı ilk sürüm için yeterli, güçlü ve kontrollüdür.  
Daha fazlası şu aşamada zenginlik değil, dikkat dağınıklığı üretir.