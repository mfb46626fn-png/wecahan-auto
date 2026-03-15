# Page Priority Matrix

## Belge amacı
Bu belge, WeCaHan Auto site ailesindeki tüm sayfaları öncelik, işlev, MVP gerekliliği ve üretim sırasına göre sınıflandırır.

Amaç:
- hangi sayfanın launch için zorunlu olduğunu netleştirmek
- hangi sayfanın satış omurgasında kritik rol taşıdığını belirlemek
- hangi sayfanın ikinci aşamaya bırakılabileceğini ayırmak
- kodlama, tasarım ve içerik işlerini doğru sıraya koymak
- Cursor ile çalışırken gereksiz dağılmayı önlemek

Bu belge, doğrudan şu alanlara rehberlik eder:
- geliştirme sırası
- component önceliği
- copywriting sırası
- QA sırası
- launch checklist

---

# 1) Öncelik sistemi

## P0 — Launch için kritik
Bu seviyedeki sayfalar olmadan site yayına alınmamalıdır.

Özellikleri:
- ana satış veya ana tanıtım görevini taşır
- temel CTA akışını barındırır
- kullanıcı ilk güvenini burada kurar
- form / iletişim / call akışıyla doğrudan bağlantılıdır

## P1 — Güçlü destek sayfası
Launch için çok değerlidir ama P0 kadar çıplak omurga değildir.

Özellikleri:
- dönüşüm kalitesini artırır
- itiraz kırar
- fiyat, kapsam, örnek akış gibi alanlarda güven ekler
- launch ile birlikte gelmesi idealdir

## P2 — İkinci faz sayfası
İlk sürümde olmasa da yapıyı bozmaz.  
Ama daha sonra güç katabilir.

Özellikleri:
- derinlik kazandırır
- marka hikâyesi, kaynaklar veya genişleyen içerik için faydalıdır
- ilk satış omurgasının üstüne eklenir

---

# 2) auto.wecahan.com sayfa öncelik matrisi

## 2.1 Home / Landing

### Öncelik
P0

### Neden kritik
Bu sayfa merkez sitenin tamamına yakınıdır.  
Markanın ne yaptığını, nasıl çalıştığını ve nasıl iletişime geçileceğini bu sayfa anlatır.

### Satış / iletişim rolü
- marka çerçevesi kurar
- ilk güveni üretir
- düşük baskılı brief / iletişim toplar

### MVP’de şart mı
Evet

### Ne zaman kodlanmalı
İlk merkez site geliştirme turunda

### Hangi ana bileşenleri ister
- navbar
- hero
- service/process section
- workflow example cards
- contact block
- footer

### Eksik olursa ne olur
Merkez site anlamsız kalır.

---

## 2.2 Privacy

### Öncelik
P0

### Neden kritik
Form topluyorsanız yasal görünürlük ve güven için gereklidir.

### Satış / iletişim rolü
Dolaylı güven katmanı

### MVP’de şart mı
Evet

### Ne zaman kodlanmalı
Home ile aynı sprint sonunda

### Ana bileşenler
- legal text layout
- simple page shell

---

## 2.3 Terms

### Öncelik
P0

### Neden kritik
Temel hukuki çerçeve ve profesyonel görünüm için gereklidir.

### Satış / iletişim rolü
Dolaylı güven katmanı

### MVP’de şart mı
Evet

### Ne zaman kodlanmalı
Privacy ile birlikte

---

## 2.4 Contact ayrı sayfa

### Öncelik
P2

### Neden düşük öncelik
İlk sürümde landing içindeki iletişim bloğu yeterlidir.

### MVP’de şart mı
Hayır

### Ne zaman kodlanmalı
İleride, ihtiyaç çıkarsa

---

## 2.5 About

### Öncelik
P2

### Neden düşük öncelik
Bu aşamada satış veya iletişim omurgasına doğrudan katkısı sınırlıdır.

### MVP’de şart mı
Hayır

---

## 2.6 Workflow Examples ayrı sayfa

### Öncelik
P2

### Neden düşük öncelik
İlk fazda homepage içindeki örnek blok yeterlidir.

### MVP’de şart mı
Hayır

---

# 3) tr.auto.wecahan.com sayfa öncelik matrisi

## 3.1 Ana Sayfa

### Öncelik
P0

### Neden kritik
TR sitenin ana satış girişidir.  
Klinikler ana dikeyini gösterir, ikincil dikeyi tanıtır ve CTA akışını başlatır.

### Satış rolü
- ziyaretçiyi doğru dikeye taşır
- ana problem/çözüm çerçevesi kurar
- sıcak talep toplar

### MVP’de şart mı
Evet

### Ne zaman kodlanmalı
TR site geliştirmesinin ilk sayfası olarak

### Ana bileşenler
- navbar
- hero
- pain blocks
- sector cards
- flagship package strip
- how we work
- pricing preview
- example scenarios teaser
- CTA sections
- footer
- sticky WhatsApp CTA

---

## 3.2 Klinikler

### Öncelik
P0

### Neden kritik
TR tarafının ana para sayfası budur.  
İlk güçlü satış iniş sayfası olarak düşünülmelidir.

### Satış rolü
- klinik ziyaretçiyi yakalar
- uzmanlık hissi kurar
- WhatsApp ve form dönüşümünü taşır

### MVP’de şart mı
Evet

### Ne zaman kodlanmalı
TR ana sayfadan hemen sonra

### Ana bileşenler
- sector-specific hero
- problem grid
- solution modules
- package cards
- setup levels
- maintenance levels
- example workflow strip
- CTA blocks

### Eksik olursa ne olur
TR sitenin en güçlü dikey sayfası eksik kalır, dönüşüm düşer.

---

## 3.3 Muhasebe Ofisleri

### Öncelik
P1

### Neden P1
Önemli bir ikincil dikeydir ama klinikler kadar ana omurga değildir.

### Satış rolü
- ikinci dikeyde güven üretir
- ofis odaklı talep toplar

### MVP’de şart mı
Launch için kuvvetle önerilir

### Ne zaman kodlanmalı
Klinikler sayfasından sonra

### Ana bileşenler
- sector-specific hero
- pain points
- solution cards
- package explanation
- example flow
- form CTA

---

## 3.4 Paketler

### Öncelik
P1

### Neden P1
Satışın ürünleşmiş görünmesi için değerlidir.  
Ama ana sayfa ve klinikler sayfası kadar ilk giriş sayfası değildir.

### Satış rolü
- hizmet modelini netleştirir
- ne var / ne yok mantığıyla güven kurar
- fiyat ve kapsam itirazını yumuşatır

### MVP’de şart mı
Evet, launch için çok değerli

### Ne zaman kodlanmalı
Ana sayfa ve klinikler sonrasında

### Ana bileşenler
- service model explainer
- package level cards
- scope tables
- outputs section
- fit / not fit blocks

---

## 3.5 Fiyatlandırma

### Öncelik
P1

### Neden P1
Birçok ziyaretçi fiyat mantığını görmek isteyecek.  
Sabit kutu fiyat vermesek de fiyat bulanıklığını azaltmak gerekir.

### Satış rolü
- fiyat itirazını kırar
- kapsam ve seviye mantığını anlatır
- CTA’ya hazırlar

### MVP’de şart mı
Evet, launch için güçlü biçimde önerilir

### Ne zaman kodlanmalı
Paketler sayfasıyla aynı aşamada veya hemen sonra

### Ana bileşenler
- pricing bands
- what affects price
- setup vs maintenance
- add-on development explanation
- FAQ strip
- CTA section

---

## 3.6 Örnek Senaryolar

### Öncelik
P1

### Neden P1
Gerçek referans azsa bu sayfa güven üretir.  
Fake testimonial kullanmamak için stratejik değeri yüksektir.

### Satış rolü
- “bunlar pratiği düşünüyor” hissi verir
- use-case tabanlı güven oluşturur

### MVP’de şart mı
Evet, özellikle ilk aşamada tavsiye edilir

### Ne zaman kodlanmalı
Paketler ve fiyatlandırma sonrası

### Ana bileşenler
- use-case cards
- before / after blocks
- flow diagrams or step cards
- scenario CTA

---

## 3.7 İletişim

### Öncelik
P0

### Neden kritik
TR sitenin kapanış noktalarından biridir.

### Satış rolü
- form, e-posta, WhatsApp temasını düzenler
- güvenli lead capture alanı sağlar

### MVP’de şart mı
Evet

### Ne zaman kodlanmalı
TR site erken aşamasında, ana sayfayla paralel bile geliştirilebilir

### Ana bileşenler
- contact hero
- form
- WhatsApp block
- email info
- micro trust copy

---

## 3.8 Gizlilik

### Öncelik
P0

### MVP’de şart mı
Evet

---

## 3.9 Şartlar

### Öncelik
P0

### MVP’de şart mı
Evet

---

## 3.10 Hakkımızda

### Öncelik
P2

### Neden düşük öncelik
İlk aşamada güçlü satış etkisi sınırlı.

### MVP’de şart mı
Hayır

---

## 3.11 Ayrı SSS sayfası

### Öncelik
P2

### Neden düşük öncelik
İlk aşamada ana sayfa, fiyatlandırma ve paketler içinde çözülebilir.

### MVP’de şart mı
Hayır

---

# 4) global.auto.wecahan.com sayfa öncelik matrisi

## 4.1 Home

### Öncelik
P0

### Neden kritik
Global giriş sayfasıdır.  
Accounting firm odaklı positioning burada netleşir.

### Satış rolü
- doğru ziyaretçiyi filtreler
- operasyonel problem çerçevesi kurar
- discovery CTA’ya taşır

### MVP’de şart mı
Evet

### Ne zaman kodlanmalı
Global geliştirmesinin ilk sayfası

### Ana bileşenler
- navbar
- hero
- pain blocks
- service pillars
- process strip
- proof teaser
- CTA blocks
- footer

---

## 4.2 Accounting Firms

### Öncelik
P0

### Neden kritik
Global tarafın en güçlü sektör landing sayfasıdır.

### Satış rolü
- domain understanding gösterir
- accounting-specific dönüşüm sağlar

### MVP’de şart mı
Evet

### Ne zaman kodlanmalı
Home’dan hemen sonra

### Ana bileşenler
- sector hero
- pain mapping
- solution modules
- implementation steps
- scope examples
- CTA blocks

---

## 4.3 Services

### Öncelik
P1

### Neden P1
Ana dikey dışındaki kontrollü kapsamı anlatır.  
Ama accounting firms sayfası kadar kritik değildir.

### Satış rolü
- “yalnızca tek bir modül mü yapıyorsunuz?” itirazını yumuşatır
- controlled service range gösterir

### MVP’de şart mı
Evet, ama Home ve Accounting Firms kadar öncelikli değildir

### Ne zaman kodlanmalı
Ana iki sayfadan sonra

---

## 4.4 Pricing

### Öncelik
P1

### Neden P1
Global B2B lead, scoped pricing yapısını görmek ister.  
Self-serve bekleyen yanlış ziyaretçiyi de eler.

### Satış rolü
- pricing clarity
- expectation management
- qualification quality

### MVP’de şart mı
Evet, launch için güçlü biçimde önerilir

### Ne zaman kodlanmalı
Services ile aynı aşamada veya hemen sonra

---

## 4.5 Use Cases

### Öncelik
P1

### Neden P1
Gerçek vaka azsa güven için çok değerlidir.

### Satış rolü
- workflow thinking depth gösterir
- practicality hissi verir

### MVP’de şart mı
Evet, özellikle early-stage proof açığını kapatır

### Ne zaman kodlanmalı
Pricing sonrasında

---

## 4.6 Book a Call

### Öncelik
P0

### Neden kritik
Global tarafta ana conversion gate budur.

### Satış rolü
- doğru lead’i filtreler
- call beklentisini temizler
- scheduling’e kaliteli trafik taşır

### MVP’de şart mı
Evet

### Ne zaman kodlanmalı
Home ve Accounting Firms ile aynı ana sprint içinde

### Ana bileşenler
- fit / not fit blocks
- what happens on the call
- next-step explainer
- scheduling embed or gateway
- trust microcopy

---

## 4.7 Contact

### Öncelik
P1

### Neden P1
Book a Call dışında alternatif lead capture yoludur.  
Ama ana omurga discovery call’dur.

### Satış rolü
- call-ready olmayan ama ciddi lead’i toplar
- workflow brief akışını barındırır

### MVP’de şart mı
Evet, tavsiye edilir

### Ne zaman kodlanmalı
Book a Call sonrasında

---

## 4.8 Privacy

### Öncelik
P0

### MVP’de şart mı
Evet

---

## 4.9 Terms

### Öncelik
P0

### MVP’de şart mı
Evet

---

## 4.10 About

### Öncelik
P2

### MVP’de şart mı
Hayır

---

## 4.11 FAQ ayrı sayfa

### Öncelik
P2

### MVP’de şart mı
Hayır

---

## 4.12 Case Studies ayrı sayfa

### Öncelik
P2

### Neden P2
Gerçek müşteri ve izinli veri olmadan ayrı sayfa açmak gereksizdir.

### MVP’de şart mı
Hayır

---

# 5) Sayfa üretim sırası matrisi

## 5.1 Genel üretim mantığı
Kodlama sırası sitelere göre değil, değer zincirine göre düşünülmelidir.

İlk önce:
- ana giriş sayfaları
- ana conversion sayfaları
- legal sayfalar

Sonra:
- pricing
- packages / services
- proof/use cases

En son:
- about
- extended FAQ
- secondary content

---

## 5.2 Önerilen geliştirme sırası — merkez site
1. Home
2. Privacy
3. Terms

---

## 5.3 Önerilen geliştirme sırası — TR site
1. Ana Sayfa
2. Klinikler
3. İletişim
4. Gizlilik
5. Şartlar
6. Paketler
7. Fiyatlandırma
8. Örnek Senaryolar
9. Muhasebe Ofisleri

### Not
Muhasebe Ofisleri P1 olmasına rağmen, launch yetiştirme açısından gerektiğinde Örnek Senaryolar’dan önce de öne çekilebilir.  
Ama satış omurgası açısından Klinikler daha öndedir.

---

## 5.4 Önerilen geliştirme sırası — Global site
1. Home
2. Accounting Firms
3. Book a Call
4. Privacy
5. Terms
6. Services
7. Pricing
8. Use Cases
9. Contact

---

# 6) MVP launch seti

## 6.1 Merkez site MVP
- Home
- Privacy
- Terms

## 6.2 TR site MVP
- Ana Sayfa
- Klinikler
- İletişim
- Paketler
- Fiyatlandırma
- Örnek Senaryolar
- Gizlilik
- Şartlar

## 6.3 Global site MVP
- Home
- Accounting Firms
- Book a Call
- Pricing
- Use Cases
- Contact
- Privacy
- Terms

---

# 7) Sayfa bazlı bağımlılıklar

## 7.1 Merkez site bağımlılıkları
Home sayfası şu ortak bileşenleri erken ister:
- navbar
- footer
- form section
- legal link pattern
- language switch pattern

## 7.2 TR site bağımlılıkları
Ana Sayfa ve Klinikler sayfası şu ortak bileşenleri ister:
- sticky CTA
- sector hero
- pain cards
- package preview cards
- process timeline
- WhatsApp CTA block
- contact form module
- footer nav

Paketler ve Fiyatlandırma şu bileşenlere bağımlıdır:
- pricing band cards
- scope tables
- FAQ accordion
- CTA bar

## 7.3 Global site bağımlılıkları
Home, Accounting Firms ve Book a Call şu bileşenleri ister:
- B2B hero pattern
- problem / solution section
- process timeline
- scheduling CTA module
- fit / not fit block
- proof teaser cards
- pricing summary cards

Use Cases ve Pricing şu bileşenlere bağımlıdır:
- use-case card system
- scope example cards
- comparison rows
- trust microcopy blocks

---

# 8) QA öncelik matrisi

## P0 sayfalarda zorunlu kalite kontrol
- copy netliği
- CTA çalışırlığı
- form gönderimi
- mobil görünüm
- footer legal linkleri
- metadata / title / description
- basic performance
- broken link kontrolü

## P1 sayfalarda zorunlu kalite kontrol
- section akışı
- internal links
- component tutarlılığı
- CTA relevancy
- readability

## P2 sayfalarda kontrol
- yapısal tutarlılık
- marka tonu
- düşük öncelikli polish

---

# 9) Karar verme kuralı

Bir sayfa hakkında şüphe oluşursa şu test uygulanır:

## Test soruları
1. Bu sayfa doğrudan satış veya güven üretiyor mu?
2. Launch’tan önce eksik olursa gerçek kayıp yaratır mı?
3. Bu sayfanın içeriği başka bir sayfada blok olarak çözülebilir mi?
4. Bu sayfa erken aşamada siteyi güçlendiriyor mu, yoksa sadece kalabalık mı yapıyor?

Bu sorulara güçlü cevap veremeyen sayfa P2’ye düşürülür.

---

# 10) Sonuç

Bu belgeye göre:

## Merkez site
- ana yük Home’da taşınır
- legal sayfalar launch için zorunludur

## TR site
- Ana Sayfa + Klinikler + İletişim omurga
- Paketler + Fiyatlandırma + Örnek Senaryolar güven ve dönüşüm gücü ekler

## Global site
- Home + Accounting Firms + Book a Call omurga
- Pricing + Use Cases + Contact dönüşüm kalitesini yükseltir

Bu öncelik matrisi korunmadan geliştirmeye girilirse, ekip kolayca ikincil sayfalara takılır ve asıl satış iskeleti gecikir.