# TR Packages Structure

## Belge amacı
Bu belge, `tr.auto.wecahan.com/paketler` sayfasının içerik ve section yapısını tanımlar.

Amaç:
- Türkiye satış sitesindeki ürünleşmiş hizmet yapısını netleştirmek
- analiz, kurulum, bakım ve ek geliştirme modelini açık biçimde sunmak
- hafif / orta / gelişmiş kurulum ile temel / standart / genişletilmiş bakım seviyelerini anlaşılır hale getirmek
- ne var / ne yok / teslim çıktısı / kime uygun mantığını sayfa düzeyinde oturtmak
- ziyaretçiye “bunlar ne sattığını biliyor” hissi vermek
- daha sonra tasarım, component ve kodlama işlerini kolaylaştırmak

Bu sayfa:
- tek başına ana satış giriş sayfası değildir
- fiyat tablosu sayfası değildir
- teknik servis listesi değildir
- genel ajans kataloğu değildir

Bu sayfa, TR tarafındaki hizmet modelini ürünleşmiş ve profesyonel biçimde anlatan yapı sayfasıdır.

---

# 1) Sayfanın temel rolü

## Rol
TR tarafında sunulan hizmet modelini açık, düzenli ve güven veren şekilde anlatan ürünleşmiş paket sayfası.

## Ana hedef
Ziyaretçiye şu hissi vermek:
- hizmet modeli net
- süreç belli
- kapsam sınırları dürüst şekilde çizilmiş
- her iş “özel ama belirsiz” değil
- kurulum ve bakım ayrı mantıklarla ele alınıyor

## Ana dönüşüm hedefi
- kullanıcıyı fiyatlandırma sayfasına taşımak
- kullanıcıyı iletişim / değerlendirme formuna taşımak
- kullanıcının “önce analiz, sonra önerilen kapsam” mantığını anlamasını sağlamak

## İkincil hedef
- klinikler ve muhasebe ofisleri sayfalarındaki satış anlatımını desteklemek
- fiyat itirazını yumuşatmak
- profesyonel güven katmanı oluşturmak

## Olmaması gerekenler
- herkese tek paket havası
- sabit kutu e-ticaret ürünü görünümü
- aşırı karmaşık fiyat hesabı
- “sınırsız” gibi kontrolsüz vaatler
- teknik entegrasyon listesi çöplüğü
- fazla uzun ve yorucu açıklama blokları

---

# 2) Sayfa yapısı özeti

Paketler sayfası şu ana section’lardan oluşur:

1. Header / Navbar
2. Hero
3. Service Model Overview
4. Automation Analysis
5. Setup Packages
6. Maintenance Packages
7. Additional Development
8. What Is Included Across the Model
9. What Is Not Included
10. Deliverables & Client Contribution
11. Fit / Not Fit
12. CTA Section
13. Footer

Bu sıra korunmalıdır.

Sebep:
- önce hizmet modelini çerçeveleriz
- sonra aşamaları tek tek açarız
- sonra kapsam sınırlarını netleştiririz
- sonra teslim ve müşteri katkısı gerçekliğini koyarız
- en son iletişime taşırız

---

# 3) Section 1 — Header / Navbar

## Rol
Kullanıcıya site genelinde yön verir ve bu sayfanın yapısal bir hizmet sayfası olduğunu hissettirir.

## İçerik
- logo / wordmark
- Ana Sayfa
- Klinikler
- Muhasebe Ofisleri
- Paketler
- Fiyatlandırma
- Örnek Senaryolar
- İletişim
- ana CTA: Sürecini Anlat veya Kısa Değerlendirme Al

## Davranış
- sticky olabilir
- mobilde sade hamburger menüye inmeli
- CTA görünür ama agresif olmamalı

## Not
Bu sayfa sıcak kapanış değil, güven ve netlik sayfasıdır.  
Navbar CTA’sı bu nedenle WhatsApp merkezli olmak zorunda değildir.

---

# 4) Section 2 — Hero

## Rol
Ziyaretçiye bu sayfanın ne olduğunu ilk ekranda anlatır.

## Ziyaretçinin burada anlaması gereken
- burada satılan şey genel “otomasyon” lafı değil, yapılandırılmış bir hizmet modeli
- süreç analizle başlıyor
- kurulum ve bakım ayrı şeyler
- kapsam seviye seviye artıyor

## Başlık yönü
### Başlık örnek yönleri
- Otomasyon hizmetlerimizi net bir modelle sunuyoruz
- Analiz, kurulum ve bakım yapısını baştan netleştirin
- Kapsamı belli, aşamaları net otomasyon hizmet modeli

## Alt başlık yönü
Her işletmeye aynı yapı önerilmez. Önce ihtiyaç ve süreç değerlendirilir; sonra uygun kurulum ve bakım seviyesi belirlenir.

## Hero CTA yapısı
### Ana CTA
- Sürecini Anlat
- Kısa Değerlendirme Al

### İkincil CTA
- Fiyatlandırma Mantığını Gör

## Görsel mantık
- 4 aşamalı service model strip
- analysis → setup → maintenance → expansion şeması
- sade paket kartları
- temiz step grid

## Çözmesi gereken itiraz
- ne sattığınız net mi, yoksa sonradan şekillenen belirsiz bir hizmet mi?

---

# 5) Section 3 — Service Model Overview

## Rol
Sayfanın omurgasını oluşturan dört aşamalı hizmet modelini özetler.

## Amaç
Ziyaretçiye ana çerçeveyi erkenden vermek.

## Yapı
4 büyük kart veya timeline.

### Aşama 1 — Otomasyon Analizi
Mevcut sürecin incelenmesi, tekrar eden işler ve darboğazların belirlenmesi.

### Aşama 2 — Kurulum
Belirlenen ihtiyaçlara göre gerekli akışların kurulması, test edilmesi ve devreye alınması.

### Aşama 3 — Aylık Bakım
İzleme, küçük düzeltmeler, sürdürülebilirlik ve sınırlı iyileştirmeler.

### Aşama 4 — Ek Geliştirme / Genişletme
Yeni modüller, yeni entegrasyonlar veya kapsam büyümesi.

## Bu section’ın görevi
- hizmet modelini kutu kutu ve net biçimde göstermek
- fiyat ve kapsam sayfaları için zemin hazırlamak

## Çözmesi gereken itiraz
- bu hizmet nasıl ilerliyor?
- her şey tek kalemde mi, yoksa mantıklı aşamalara mı ayrılmış?

---

# 6) Section 4 — Automation Analysis

## Rol
Analiz aşamasını ayrı ve ciddi bir hizmet katmanı olarak anlatır.

## Amaç
İlk aşamanın “laf dinleme” değil, yapısal değerlendirme olduğunu göstermek.

## Yapı
Büyük blok veya kart.

### Başlık
Otomasyon Analizi

### Ne Var
- mevcut sürecin incelenmesi
- tekrar eden işlerin tespiti
- darboğazların belirlenmesi
- otomasyona uygun alanların listelenmesi
- önerilen kapsam taslağı

### Ne Yok
- canlı sistem kurulumu
- kapsam dışı geliştirme
- uzun süreli bakım hizmeti
- sınırsız danışmanlık

### Teslim Çıktısı
- kısa analiz özeti
- önerilen otomasyon alanları
- önceliklendirme mantığı
- önerilen kurulum yaklaşımı

### Kime Uygun
- nereden başlayacağını bilmeyen işletmeler
- dağınık sürecini önce netleştirmek isteyen yapılar
- direkt “büyük paket” almak istemeyenler

## Not
Bu bölüm, “önce bizi anlamaya çalışıyorlar” hissi verdiği için güven üretir.

## Çözmesi gereken itiraz
- doğrudan bir şey satmaya mı çalışıyorlar, yoksa önce süreci gerçekten anlamak mı istiyorlar?

---

# 7) Section 5 — Setup Packages

## Rol
Kurulum hizmetini seviye bazlı anlatır.

## Amaç
Her müşterinin aynı kapsamı almadığını ve kurulumun derinliğe göre değiştiğini göstermek.

## Yapı
3 büyük seviye kartı.

---

## 7.1 Hafif Kurulum

### Uygun Yapı
- küçük işletmeler
- tek ana problem yaşayan yapılar
- ilk otomasyon denemesi yapan ekipler

### Örnek Kapsam
- tek ana süreç
- temel lead veya takip akışı
- temel kayıt / bildirim yapısı

### Ne Var
- tek odaklı workflow kurulumu
- temel yönlendirme / takip katmanı
- kısa test süreci
- temel teslim

### Ne Yok
- çok katmanlı süreç yapıları
- gelişmiş görünürlük katmanı
- yoğun entegrasyon yapısı
- büyük raporlama katmanları

### Teslim Çıktısı
- çalışan temel akış
- kısa kullanım özeti
- temel süreç görünürlüğü

### Kime Uygun
- küçük klinikler
- küçük ofis ekipleri
- önce tek problemi çözmek isteyen yapılar

---

## 7.2 Orta Seviye Kurulum

### Uygun Yapı
- aktif operasyonu olan işletmeler
- birden fazla tekrar eden süreci toparlamak isteyen ekipler
- hem takip hem görünürlük isteyen yapılar

### Örnek Kapsam
- 2–3 akış
- temel yönlendirme
- bildirimler
- basit görünürlük
- süreç takibi

### Ne Var
- birden fazla workflow
- temel entegrasyon yapısı
- test ve canlıya alma
- daha net görünürlük katmanı

### Ne Yok
- çok ağır özel geliştirme
- ileri düzey özel yazılım
- kurumsal ölçekli veri mimarisi

### Teslim Çıktısı
- çalışan çok adımlı yapı
- daha net süreç kontrolü
- temel raporlama / görünürlük katmanı

### Kime Uygun
- aktif talep akışı olan klinikler
- evrak ve takip yükü artmış ofisler
- süreçlerini daha ciddi toplamak isteyen yapılar

---

## 7.3 Gelişmiş Kurulum

### Uygun Yapı
- daha yüksek hacimli operasyonlar
- birden fazla kanal kullanan yapılar
- görünürlük ve süreç katmanı daha derin olan ihtiyaçlar

### Örnek Kapsam
- çok kanallı akışlar
- gelişmiş routing
- takip katmanları
- dashboard / raporlama seviyesinde görünürlük
- daha büyük teslim yapısı

### Ne Var
- çok adımlı workflow kurguları
- daha yoğun entegrasyon yapısı
- görünürlük ve raporlama derinliği
- daha geniş test ve teslim süreci

### Ne Yok
- tamamen özel yazılım projesi
- sınırsız modül geliştirme
- kurumsal ERP yerine geçen sistem

### Teslim Çıktısı
- daha kapsamlı akış ağı
- daha görünür süreç yapısı
- genişletmeye uygun temel

### Kime Uygun
- daha yoğun klinik yapıları
- daha yoğun ofis operasyonları
- sistemini sadece toparlamak değil, büyütmek isteyen ekipler

---

## Bu section’ın görevi
- kurulum paketlerini anlaşılır hale getirmek
- “herkese tek çözüm” algısını kırmak
- fiyatlandırma mantığına zemin hazırlamak

## Çözmesi gereken itiraz
- bize uygun seviye nasıl belirlenecek?
- küçük başlayıp büyümek mümkün mü?

---

# 8) Section 6 — Maintenance Packages

## Rol
Bakım hizmetini ürünleşmiş ve anlaşılır şekilde sunar.

## Amaç
Aylık bakımın ne işe yaradığını, hangi seviyelerde verildiğini netleştirmek.

## Yapı
3 bakım kartı.

---

## 8.1 Temel Bakım

### Ne Var
- temel sistem izleme
- küçük hata düzeltmeleri
- aylık genel kontrol

### Ne Yok
- yoğun geliştirme
- yeni modül inşası
- yüksek öncelikli sürekli destek

### Kime Uygun
- küçük kapsamlı kurulumlar
- oturmuş ama hafif destek ihtiyacı olan yapılar

---

## 8.2 Standart Bakım

### Ne Var
- izleme
- küçük iyileştirmeler
- destek geri dönüşleri
- düzenli genel kontrol

### Ne Yok
- büyük yeni modüller
- ağır özel geliştirme
- sınırsız talepler

### Kime Uygun
- aktif kullanılan sistemler
- düzenli optimize edilmek istenen yapılar

---

## 8.3 Genişletilmiş Bakım

### Ne Var
- daha aktif izleme
- öncelikli destek
- küçük yeni akışlar
- performans iyileştirme
- süreç geliştirme önerileri

### Ne Yok
- tam kapsamlı yeni proje inşası
- bakım dışı büyük modüller

### Kime Uygun
- daha yoğun kullanılan sistemler
- daha yakın destek isteyen yapılar
- sürekli iyileştirme hedefleyen ekipler

---

## Alt açıklama
Bakım kapsamının dışında kalan büyük geliştirmeler, ek geliştirme başlığı altında ayrıca değerlendirilir.

## Çözmesi gereken itiraz
- kurulumdan sonra sistem ne olacak?
- aylık bakım neden ayrı?
- küçük talepler nereye giriyor?

---

# 9) Section 7 — Additional Development

## Rol
Ek geliştirme mantığını ayrı ve dürüst şekilde tanımlar.

## Amaç
Bakım ile yeni geliştirme arasındaki çizgiyi netleştirmek.

## İçerik
### Ek geliştirme ne olabilir?
- yeni workflow ekleme
- yeni entegrasyon
- yeni görünürlük / raporlama katmanı
- yeni kanal ekleme
- mevcut akışın büyütülmesi

### Bu ne değildir?
- bakım kapsamındaki küçük düzeltmeler
- mevcut teslim içinde zaten yapılması gereken işler
- sınırsız ücretsiz geliştirme

### Neden ayrı ele alınır?
Her yeni modül yeni kapsam, test ve teslim ihtiyacı doğurur.  
Bu nedenle bakım ve geliştirme aynı şey değildir.

## Çözmesi gereken itiraz
- bakım varken neden ek geliştirme var?
- yeni bir şey istediğimde bu nereye giriyor?

---

# 10) Section 8 — What Is Included Across the Model

## Rol
Hizmet modelinin ortak çekirdeklerini topluca gösterir.

## Amaç
Sayfa boyunca anlatılan yapının ortak omurgasını bir yerde netlemek.

## Yapı
Toplu checklist veya kart bloğu.

### Ortak içerikler
- süreç değerlendirmesi
- ihtiyaca uygun kapsam önerisi
- workflow kurulumu
- test ve canlıya alma
- temel teslim mantığı
- bakım seviyesine göre izleme ve destek

## Bu section neden önemli
Sayfadaki farklı kartları toparlar ve ziyaretçiye net omurga verir.

## Çözmesi gereken itiraz
- tamam da genel olarak bu hizmetin ortak omurgası ne?

---

# 11) Section 9 — What Is Not Included

## Rol
Kapsam dürüstlüğünü güçlendirir.

## Amaç
Yanlış beklenti ve ileride çıkacak kapsam tartışmalarını baştan azaltmak.

## Yapı
Net sınır listesi.

### Dahil olmayan örnekler
- tam özel yazılım geliştirme projeleri
- ERP / HBYS / tam muhasebe yazılımı yerine geçen sistemler
- reklam yönetimi
- satış ekibi hizmeti
- hukuki / mali danışmanlık
- sınırsız revizyon
- sınırsız yeni modül geliştirme

## Neden önemli
Sınır koyan ekip daha profesyonel görünür.  
Her şeye “evet” diyen ekip çoğu zaman güvensiz görünür.

## Çözmesi gereken itiraz
- bunlar neyi gerçekten yapıyor, neyi yapmıyor?

---

# 12) Section 10 — Deliverables & Client Contribution

## Rol
Teslim çıktıları ile müşteri katkısı gerçekliğini aynı yerde açıklar.

## Amaç
Projeyi tek taraflı “siz yapın bitsin” sanan beklentiyi düzeltmek.

## Yapı
İki blok.

### Teslim Çıktıları
- önerilen kapsam özeti
- çalışan akışlar
- temel kullanım yapısı
- süreç görünürlüğü katmanı
- bakım seviyesine göre destek çerçevesi

### Müşteri Katkısı
- gerekli erişimlerin paylaşılması
- sürecin doğru anlatılması
- bir sorumlu kişinin belirlenmesi
- test geri bildirimi
- kullanım onayı

## Neden önemli
Bu bölüm hem gerçekçi hem de profesyoneldir.  
Erken aşamada kötü beklentiyi süzer.

## Çözmesi gereken itiraz
- teslimde ne alacağım?
- benden ne beklenecek?

---

# 13) Section 11 — Fit / Not Fit

## Rol
Doğru müşteriyi çekmek, yanlış beklentiyi elemek.

## Amaç
Paketler sayfasını profesyonel filtre katmanına dönüştürmek.

## Yapı
İki blok.

### Uygun Yapılar
- tekrar eden süreçleri olan işletmeler
- küçük başlayıp sistem kurmak isteyenler
- süreç görünürlüğünü artırmak isteyen ekipler
- kurulum + bakım modelini anlayan yapılar
- kapsamı aşamalı büyütmek isteyenler

### Uygun Olmayan Yapılar
- her şeyi tek kalemde ve sınırsız isteyenler
- özel yazılım şirketi arayanlar
- hiçbir ekip katkısı olmadan tüm sistemi dışarı bırakmak isteyenler
- tek gecede kusursuz dönüşüm bekleyenler

## Neden önemli
Bu bölüm, paketleri doğru beklentiye oturtur ve lead kalitesini artırır.

## Çözmesi gereken itiraz
- bize uygun hizmet modeli bu mu?
- yanlış kapıya mı geldik?

---

# 14) Section 12 — CTA Section

## Rol
Sayfanın kapanış temasını sağlar.

## Amaç
Ziyaretçiyi paket yapısını gördükten sonra doğru aksiyona taşımak.

## Yapı
- kısa başlık
- güven açıklaması
- kısa form veya iletişim yönlendirmesi
- fiyatlandırma ve iletişim CTA’ları

## Başlık yönleri
- Sürecinize uygun kapsamı birlikte netleştirelim
- Önce doğru seviye ve doğru modeli belirleyelim
- İşletmeniz için uygun kurulum yapısını kısaca değerlendirelim

## Alt metin yönü
Her işletmenin ihtiyacı farklıdır. Kısa bir süreç özeti ile hangi seviyenin daha uygun olduğunu birlikte netleştirebiliriz.

## Ana CTA
- Sürecini Anlat
- Kısa Değerlendirme Al

## İkincil CTA
- Fiyatlandırma Mantığını Gör
- İletişime Geç

## Mikro güven metinleri
- Her işletmeye aynı kurulum önerilmez.
- Gerekli olmayan kapsam şişirilmez.
- Önce ihtiyaç netleştirilir, sonra uygun yapı önerilir.

## Çözmesi gereken itiraz
- şimdi ne yapmalıyım?
- bana gereğinden büyük bir paket satmaya mı çalışacaklar?

---

# 15) Section 13 — Footer

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

# 16) Section sırası neden böyle?

## Sıra mantığı
1. hizmet modelini çerçeveleriz
2. analiz aşamasını ayırırız
3. kurulum seviyelerini açarız
4. bakım seviyelerini anlatırız
5. geliştirme sınırını çizeriz
6. ortak kapsam ve hariç alanları koyarız
7. teslim ve müşteri katkısını netleştiririz
8. uygun müşteri filtresi koyarız
9. sonra iletişime taşırız

Bu akış sayesinde sayfa hem satış hem kapsam dürüstlüğü işlevi görür.

---

# 17) Sayfa içi CTA dağılımı

## Hero
- Sürecini Anlat
- Kısa Değerlendirme Al

## Setup Packages sonrası
- Fiyatlandırma Mantığını Gör

## Maintenance / Additional Development sonrası
- İletişime Geç

## Final CTA
- Sürecini Anlat
- Kısa Değerlendirme Al

## Kural
Bu sayfada CTA yapısı bilgi akışını boğmayacak.  
Her section’ın altına kocaman buton basılmayacak.

---

# 18) Bu sayfa için gerekli ana component listesi

Muhtemel component ihtiyaçları:

- TrNavbar
- ServiceModelHero
- ServiceTimelineOverview
- AnalysisPackageBlock
- SetupPackageCards
- MaintenancePackageCards
- AdditionalDevelopmentBlock
- IncludedChecklist
- ExcludedChecklist
- DeliverablesAndClientContribution
- FitNotFitBlock
- CTASectionTR
- TrFooter

---

# 19) Mobil davranış notları

## Mobilde önemli olanlar
- paket kartları dikey akmalı
- ne var / ne yok blokları okunabilir olmalı
- teslim ve müşteri katkısı bölümü sade tutulmalı
- CTA’lar bilgi akışını bölmemeli
- başlıklar kısa ve net kalmalı

## Mobilde kaçınılacaklar
- geniş karşılaştırma tabloları
- çok sütunlu sıkışık grid
- aşırı uzun checklist yığınları
- aynı ekranda üç ayrı aksiyon

---

# 20) Başarı sinyalleri

Bu sayfanın başarılı çalıştığını gösterecek sinyaller:
- fiyatlandırma sayfasına geçiş
- iletişim sayfasına geçiş
- CTA tıklamaları
- setup ve maintenance kartlarında scroll derinliği
- included/excluded bölümlerinin tüketilmesi
- mobil bounce oranının dengeli kalması

---

# 21) Sonuç

Bu belgeye göre `tr.auto.wecahan.com/paketler` sayfası:
- hizmet modelini net anlatan
- kurulum ve bakım ayrımını temiz yapan
- kapsam dürüstlüğü sunan
- teslim ve beklenti tarafını açık koyan
- ziyaretçiyi doğru aksiyona hazırlayan
bir yapı sayfası olarak çalışacaktır.

Bu sayfanın gücü:
**ürünleşmiş hizmet hissi + kapsam netliği + dürüst sınır çizgisi**