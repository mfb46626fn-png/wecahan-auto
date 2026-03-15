# TR Pricing Structure

## Belge amacı
Bu belge, `tr.auto.wecahan.com/fiyatlandirma` sayfasının içerik ve section yapısını tanımlar.

Amaç:
- TR tarafındaki fiyatlandırma mantığını güven veren ve profesyonel şekilde anlatmak
- sabit kutu fiyat vermeden, fiyatın nasıl oluştuğunu netleştirmek
- analiz, kurulum, bakım ve ek geliştirme kalemlerini ayrı ayrı çerçevelemek
- ziyaretçiye fikir verecek kadar açıklık sağlamak ama hizmeti basit bir ürün listesine çevirmemek
- fiyat itirazını yumuşatmak ve doğru beklenti oluşturmak
- daha sonra tasarım, component ve kodlama işlerini kolaylaştırmak

Bu sayfa:
- e-ticaret ürün fiyat listesi değildir
- tek paket tek fiyat sayfası değildir
- belirsiz ve kaçamak bir “bize yazın” sayfası da değildir

Bu sayfa, kapsam bazlı hizmet fiyatlandırmasını açık ama kontrollü şekilde anlatan TR pricing sayfasıdır.

---

# 1) Sayfanın temel rolü

## Rol
TR ziyaretçiye fiyat yapısının mantığını açıklayan, aralık veren ve net teklif sürecini meşrulaştıran fiyatlandırma sayfası.

## Ana hedef
Ziyaretçiye şu hissi vermek:
- fiyat mantığı kapalı kutu değil
- her işin aynı olmadığı açıkça anlatılıyor
- kurulum ve bakım neden ayrı kalemler, bunu anlıyorum
- kapsam arttıkça fiyatın neden değiştiği mantıklı
- yazmadan önce kabaca bir çerçeve edinebiliyorum

## Ana dönüşüm hedefi
- kullanıcıyı iletişim / değerlendirme formuna taşımak
- kullanıcıyı kendi kapsamını anlatmaya teşvik etmek
- “önce analiz, sonra net teklif” modelini kabul ettirmek

## İkincil hedef
- Paketler sayfasındaki hizmet modelini desteklemek
- klinikler ve muhasebe ofisleri sayfalarındaki satış anlatımını fiyat çerçevesine bağlamak
- yanlış beklentili lead’i elemek

## Olmaması gerekenler
- aşırı karmaşık hesaplama dili
- sabit tek fiyat dayatması
- fiyatı tamamen gizleyip hiçbir bant vermemek
- “şuna şu kadar, buna bu kadar” diye kırık dökük servis listesi
- fazla agresif satış dili
- gereksiz indirim / kampanya dili

---

# 2) Sayfa yapısı özeti

Fiyatlandırma sayfası şu ana section’lardan oluşur:

1. Header / Navbar
2. Hero
3. Pricing Model Overview
4. Automation Analysis Pricing
5. Setup Pricing Bands
6. Maintenance Pricing Bands
7. Additional Development Pricing Logic
8. What Affects Price
9. Example Scope Comparisons
10. Pricing FAQs
11. CTA Section
12. Footer

Bu sıra korunmalıdır.

Sebep:
- önce fiyat modelini çerçeveleriz
- sonra ana kalemleri tek tek açarız
- sonra fiyatı etkileyen değişkenleri gösteririz
- sonra örnek kapsam farklarıyla mantığı somutlaştırırız
- en son soru işaretlerini temizleyip temas isteriz

---

# 3) Section 1 — Header / Navbar

## Rol
Kullanıcıya sayfa içinde ve site genelinde yön verir.

## İçerik
- logo / wordmark
- Ana Sayfa
- Klinikler
- Muhasebe Ofisleri
- Paketler
- Fiyatlandırma
- Örnek Senaryolar
- İletişim
- ana CTA: Kısa Değerlendirme Al veya Sürecini Anlat

## Davranış
- sticky olabilir
- mobilde sade hamburger menüye inmeli
- CTA görünür ama fiyat sayfasında bağıran satış butonuna dönüşmemeli

---

# 4) Section 2 — Hero

## Rol
Ziyaretçiye bu sayfanın amacını ilk ekranda anlatır.

## Ziyaretçinin burada anlaması gereken
- burada sabit kutu fiyat değil, kapsam bazlı model anlatılıyor
- kurulum ve bakım ayrı mantıklardır
- fiyat tamamen keyfi değil, belli değişkenlere bağlıdır
- net teklif için süreç anlatımı gerekir ama önce fikir edinmek mümkündür

## Başlık yönü
### Başlık örnek yönleri
- Fiyatlandırma, kapsamın derinliğine göre şekillenir
- Kurulum ve bakım modelimizi net fiyat mantığıyla sunuyoruz
- Otomasyon fiyatlandırmasını kapalı kutu olmadan anlatıyoruz

## Alt başlık yönü
Her işletmenin süreç yapısı farklı olduğu için nihai kapsam analiz sonrası netleşir. Yine de analiz, kurulum, bakım ve ek geliştirme mantığını burada açık şekilde görebilirsiniz.

## Hero CTA yapısı
### Ana CTA
- Sürecini Anlat
- Kısa Değerlendirme Al

### İkincil CTA
- Paketler Yapısını Gör

## Görsel mantık
- fiyat katmanları kartları
- setup vs maintenance ayrımı
- scope-depth diyagramı
- sade pricing bands

## Çözmesi gereken itiraz
- fiyat tamamen gizli mi?
- yazmadan önce hiçbir şey anlayamayacak mıyım?

---

# 5) Section 3 — Pricing Model Overview

## Rol
Fiyatlandırma modelinin ana omurgasını kısa ve net şekilde açıklar.

## Amaç
Sayfanın geri kalanını okumadan önce kullanıcıya çerçeve vermek.

## Yapı
4 kart veya 4 adımlı strip.

### Kalem 1 — Otomasyon Analizi
İlk değerlendirme ve önerilen kapsamın netleşmesi.

### Kalem 2 — Kurulum
Seçilen kapsamın inşa edilmesi, test edilmesi ve devreye alınması.

### Kalem 3 — Aylık Bakım
Kurulan sistemin izlenmesi, küçük düzeltmeler ve sürdürülebilir desteği.

### Kalem 4 — Ek Geliştirme
Bakım kapsamı dışındaki yeni modüller ve genişleyen ihtiyaçlar.

## Kısa açıklama
Fiyat, bu dört kalemin her birinde kapsam ve derinliğe göre değişir.  
Her işletme aynı seviyede kurulum veya bakım ihtiyacı taşımaz.

## Çözmesi gereken itiraz
- fiyatı oluşturan şeyler neler?
- her şey tek bir ücret içinde mi?

---

# 6) Section 4 — Automation Analysis Pricing

## Rol
Analiz aşamasının fiyat mantığını açıklar.

## Amaç
“Analiz neden ayrı bir kalem?” sorusunu cevaplamak.

## Yapı
Tek güçlü blok veya kart.

### Başlık
Otomasyon Analizi

### Fiyat bandı
- **10.000 – 25.000 TL**

## Bu kalemin neyi kapsadığı
- mevcut sürecin değerlendirilmesi
- tekrar eden işlerin ve darboğazların tespiti
- otomasyona uygun alanların belirlenmesi
- önerilen kapsam yaklaşımı
- öncelik sıralaması

## Bu kalem ne değildir
- tam canlı kurulum
- kapsam dışı geliştirme
- bakım paketi
- sınırsız danışmanlık

## Bu bandı etkileyen başlıca unsurlar
- süreç sayısı
- incelenecek iş akışı derinliği
- farklı kanal / kaynak sayısı
- mevcut yapının karmaşıklığı

## Not
Küçük yapılarda analiz daha kısa kapsamlı olabilir.  
Daha dağınık ve çok parçalı yapılarda analiz bandı üst tarafa yaklaşabilir.

## Çözmesi gereken itiraz
- neden analiz ayrı ücretli?
- daha hiçbir şey kurulmadan niye bu kalem var?

---

# 7) Section 5 — Setup Pricing Bands

## Rol
Kurulum ücretinin seviye bazlı fiyat mantığını anlatır.

## Amaç
Kurulumun kapsamla nasıl büyüdüğünü anlaşılır hale getirmek.

## Yapı
3 büyük seviye kartı.

---

## 7.1 Hafif Kurulum

### Fiyat bandı
- **25.000 – 50.000 TL**

### Uygun yapı
- tek ana süreci çözmek isteyen işletmeler
- küçük klinikler
- küçük ofis yapıları
- ilk otomasyon denemesi yapan ekipler

### Tipik kapsam
- tek ana akış
- temel kayıt / yönlendirme
- bildirim veya takip katmanı
- kısa teslim

### Neden bu bantta yer alır
Kurulan süreç sayısı sınırlıdır, entegrasyon ve görünürlük katmanı daha hafiftir.

---

## 7.2 Orta Seviye Kurulum

### Fiyat bandı
- **50.000 – 90.000 TL**

### Uygun yapı
- birden fazla tekrarlayan süreci olan işletmeler
- hem iletişim hem takip hem görünürlük isteyen yapılar
- aktif talep veya evrak akışı olan ekipler

### Tipik kapsam
- 2–3 akış
- temel entegrasyon
- yönlendirme + takip + görünürlük
- daha fazla test ve teslim ihtiyacı

### Neden bu bantta yer alır
Süreç sayısı ve akış derinliği arttıkça kurulum süresi ve teslim karmaşıklığı artar.

---

## 7.3 Gelişmiş Kurulum

### Fiyat bandı
- **90.000 – 180.000 TL**

### Uygun yapı
- daha yoğun operasyonu olan ekipler
- çok kanallı akış yöneten yapılar
- daha derin görünürlük ve süreç kontrolü isteyen işletmeler

### Tipik kapsam
- çok adımlı akışlar
- daha fazla kanal / entegrasyon
- follow-up katmanları
- dashboard / raporlama seviyesi görünürlük
- daha geniş teslim yapısı

### Neden bu bantta yer alır
Akış sayısı, test yükü, entegrasyon derinliği ve görünürlük katmanı belirgin biçimde artar.

---

## Bu section’ın görevi
- kurulum maliyetinin neden değiştiğini açıklamak
- fiyatı belirsiz bir kara kutu olmaktan çıkarmak

## Çözmesi gereken itiraz
- neden tek fiyat değil?
- bizim iş hangi seviyeye girer?

---

# 8) Section 6 — Maintenance Pricing Bands

## Rol
Aylık bakım ücretinin seviyelere göre neden değiştiğini anlatır.

## Amaç
Bakımın “durduğu yerde para alma” değil, sürdürülebilirlik ve küçük iyileştirme modeli olduğunu göstermek.

## Yapı
3 bakım kartı.

---

## 8.1 Temel Bakım

### Fiyat bandı
- **10.000 – 18.000 TL / ay**

### Uygun yapı
- küçük kapsamlı kurulumlar
- daha hafif destek ihtiyacı olan yapılar
- sistemi aktif ama sınırlı kullanan ekipler

### Tipik kapsam
- temel izleme
- küçük düzeltmeler
- aylık genel kontrol

---

## 8.2 Standart Bakım

### Fiyat bandı
- **18.000 – 30.000 TL / ay**

### Uygun yapı
- aktif kullanılan sistemler
- küçük iyileştirme ihtiyacı olan yapılar
- düzenli destek isteyen ekipler

### Tipik kapsam
- izleme
- küçük geliştirmeler
- destek dönüşleri
- düzenli optimizasyon

---

## 8.3 Genişletilmiş Bakım

### Fiyat bandı
- **30.000 – 55.000 TL / ay**

### Uygun yapı
- daha yoğun kullanılan sistemler
- daha hızlı ve yakın destek isteyen yapılar
- yeni mini akışlar ve daha aktif performans iyileştirmesi bekleyen ekipler

### Tipik kapsam
- daha aktif izleme
- öncelikli destek
- küçük yeni akışlar
- süreç geliştirme önerileri

---

## Alt açıklama
Bakım kapsamı dışındaki büyük yeni modüller veya kapsam genişletmeleri ek geliştirme kalemi olarak değerlendirilir.

## Çözmesi gereken itiraz
- aylık bakım neden bu kadar değişiyor?
- kurulumdan sonra niye aylık ücret var?

---

# 9) Section 7 — Additional Development Pricing Logic

## Rol
Ek geliştirme ücret mantığını açıklar.

## Amaç
Bakım ve yeni geliştirme farkını netleştirmek.

## Yapı
Tek blok.

### Fiyat mantığı
- **8.000 – 40.000 TL+**

## Bu kalem neleri kapsayabilir
- yeni workflow ekleme
- yeni entegrasyon
- yeni kanal ekleme
- mevcut yapıyı büyütme
- yeni görünürlük / raporlama katmanı

## Bu kalem neleri kapsamaz
- bakım kapsamındaki küçük düzeltmeler
- zaten teslim kapsamında olan işler
- sınırsız ücretsiz iyileştirme

## Neden aralık geniştir
Yeni geliştirme kalemleri birbirinden çok farklı olabilir.  
Bazı istekler küçük bir modül olurken, bazıları doğrudan yeni mini proje niteliği taşıyabilir.

## Çözmesi gereken itiraz
- bakım varken neden ek geliştirme var?
- yeni bir şey istediğimde ne olacak?

---

# 10) Section 8 — What Affects Price

## Rol
Fiyatı belirleyen ana değişkenleri tek yerde toplar.

## Amaç
Kullanıcıya fiyatın keyfi değil, belli parametrelere bağlı olduğunu göstermek.

## Yapı
6–8 faktör kartı veya checklist grid.

### Önerilen faktörler
- workflow karmaşıklığı
- kurulacak süreç sayısı
- kanal sayısı
- entegrasyon ihtiyacı
- ekip / kullanıcı sayısı
- görünürlük ve raporlama seviyesi
- bakım yoğunluğu
- test ve teslim kapsamı

## Kart örneği
**Workflow karmaşıklığı**  
Tek bir hatırlatma akışı ile çok adımlı, yönlendirmeli ve görünürlük katmanı olan yapı aynı kurulum derinliğine sahip değildir.

## Not
Bu bölüm fiyatın “canları nasıl isterse” değil, kapsam derinliğine göre oluştuğunu hissettirmelidir.

## Çözmesi gereken itiraz
- fiyat neye göre çıkıyor?
- herkese rastgele mi fiyat veriliyor?

---

# 11) Section 9 — Example Scope Comparisons

## Rol
Fiyat farklarını örnek kapsamlarla somutlaştırır.

## Amaç
Sadece band söylemek yerine, kapsam seviyesi farkını kullanıcıya göstermek.

## Yapı
3 örnek karşılaştırma bloğu.

### Örnek 1 — Hafif Klinik Kurulumu
- tek lead toplama akışı
- temel kayıt
- bildirim
- sınırlı teslim

### Örnek 2 — Orta Seviye Klinik Yapısı
- lead + ilk temas + randevu teyit
- temel hatırlatma
- görünürlük katmanı
- daha kapsamlı teslim

### Örnek 3 — Orta / Gelişmiş Ofis Yapısı
- evrak talep akışı
- tekrar eden hatırlatma
- görev görünürlüğü
- raporlama / durum takibi

## Sunum biçimi
- karşılaştırma kartları
- küçük kapsam özetleri
- tam rakam sabitlemeden “hangi bandın içine yaklaşır” mantığı

## Neden önemli
Bu bölüm ziyaretçiye fiyat farkının gerçek bir mantığa dayandığını gösterir.

## Çözmesi gereken itiraz
- iyi de hangi iş neye benziyor?
- bizim durum yaklaşık hangi tipe yakın olabilir?

---

# 12) Section 10 — Pricing FAQs

## Rol
Fiyat sayfasında oluşabilecek ana soru işaretlerini temizler.

## Amaç
İletişime geçmeden önce temel itirazları azaltmak.

## Yapı
Accordion veya soru-cevap bloğu.

### Önerilen sorular
1. Neden sabit tek fiyat yok?
2. Önce analiz yapmak zorunlu mu?
3. Kurulum ve bakım neden ayrı?
4. Bakım içinde neler olur?
5. Yeni modül istersem ne olur?
6. Daha küçük kapsamla başlamak mümkün mü?
7. Her işletmeye aynı yapı mı öneriliyor?
8. Net teklif ne zaman çıkar?

## Cevap tonu
- kısa
- net
- savunmacı olmayan
- profesyonel

### Örnek cevap yönü
**Neden sabit tek fiyat yok?**  
Çünkü kurulacak akışların sayısı, derinliği ve bakım ihtiyacı her işletmede farklıdır. Yine de burada paylaşılan bantlar, genel çerçeveyi görmek için yeterli başlangıç noktası sunar.

## Çözmesi gereken itiraz
- fiyat yapısı beni rahatsız ediyor mu?
- burada bir şey gizliyorlar mı?

---

# 13) Section 11 — CTA Section

## Rol
Sayfanın kapanış aksiyonunu verir.

## Amaç
Fiyat mantığını okuyan kullanıcıyı doğru sonraki adıma taşımak.

## Yapı
- kısa başlık
- güven veren açıklama
- form CTA / iletişim CTA / opsiyonel WhatsApp

## Başlık yönleri
- Sürecinize uygun kapsamı birlikte netleştirelim
- Kabaca fikriniz oluştuysa sıradaki adım sürecinizi görmek
- Doğru seviyeyi belirlemek için kısa bir süreç özeti yeterlidir

## Alt metin yönü
Fiyatlandırma bantları genel çerçeveyi gösterir. Net kapsam için mevcut sürecinizi ve öncelikli probleminizi kısa şekilde anlatmanız yeterlidir.

## Ana CTA
- Sürecini Anlat
- Kısa Değerlendirme Al

## İkincil CTA
- İletişime Geç
- WhatsApp ile Yaz

## Mikro güven metinleri
- Her işletmeye aynı paket önerilmez.
- Gerekli olmayan kapsam şişirilmez.
- Önce ihtiyaç netleşir, sonra önerilen yapı çıkar.

## Çözmesi gereken itiraz
- şimdi ne yapacağım?
- buradan sonra bana ne satılacak?

---

# 14) Section 12 — Footer

## Rol
Sayfayı tamamlanmış ve güvenilir hissettirmek.

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
Klinikler ve seçili ofis yapıları için kapsamı belli operasyonel otomasyon sistemleri.

---

# 15) Section sırası neden böyle?

## Sıra mantığı
1. fiyat modelinin çerçevesini veririz
2. ana kalemleri tek tek açarız
3. fiyatı etkileyen faktörleri gösteririz
4. örnek kapsam farklarıyla mantığı somutlaştırırız
5. soru işaretlerini temizleriz
6. sonra iletişime taşırız

Bu akış sayesinde fiyat sayfası ne kaçamak ne de fazla kaba görünür.

---

# 16) Sayfa içi CTA dağılımı

## Hero
- Sürecini Anlat
- Kısa Değerlendirme Al

## Setup / Maintenance bölümleri sonrası
- Paketler Yapısını Gör
- İletişime Geç

## FAQ sonrası
- Sürecini Anlat

## Final CTA
- Kısa Değerlendirme Al
- İletişime Geç

## Kural
Bu sayfa kullanıcıyı sürekli butonla dürtmeyecek.  
Bilgi akışı birinci, CTA ikinci öncelikte olacak.

---

# 17) Bu sayfa için gerekli ana component listesi

Muhtemel component ihtiyaçları:

- TrNavbar
- PricingHeroTR
- PricingModelOverview
- AnalysisPricingBlock
- SetupPricingCards
- MaintenancePricingCards
- AdditionalDevelopmentPricingBlock
- PriceFactorsGrid
- ScopeComparisonCards
- PricingFAQAccordion
- CTASectionTR
- TrFooter

---

# 18) Mobil davranış notları

## Mobilde önemli olanlar
- fiyat bantları net okunmalı
- setup ve maintenance kartları dikey akmalı
- karşılaştırma blokları sade tutulmalı
- FAQ kullanımı kolay olmalı
- CTA’lar bilgi akışını bozmamalı

## Mobilde kaçınılacaklar
- geniş yatay pricing tabloları
- aşırı rakam yığılması
- çok uzun açıklama paragrafları
- ekranı kaplayan yapışkan CTA’lar

---

# 19) Başarı sinyalleri

Bu sayfanın başarılı çalıştığını gösterecek sinyaller:
- iletişim / değerlendirme CTA tıklamaları
- Paketler sayfasına geçiş
- FAQ etkileşimi
- setup ve maintenance pricing bölümlerinde scroll derinliği
- mobil bounce oranının dengeli kalması
- form başlatma oranı

---

# 20) Sonuç

Bu belgeye göre `tr.auto.wecahan.com/fiyatlandirma` sayfası:
- fiyat mantığını açık anlatan
- kurulum ve bakım ayrımını net yapan
- kapsam derinliği ile fiyat ilişkisini açıklayan
- kullanıcıya fikir verecek kadar şeffaf olan
- ama hizmeti basit bir ürün listesine çevirmeyen
bir pricing sayfası olarak çalışacaktır.

Bu sayfanın gücü:
**şeffaflık + kapsam mantığı + kontrollü fiyat açıklığı**