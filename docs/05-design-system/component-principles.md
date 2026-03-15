# Component Principles

## Belge amacı
Bu belge, WeCaHan Auto site ailesinde kullanılacak ana UI component’lerin davranış ilkelerini, görsel karakterini ve rol ayrımlarını tanımlar.

Amaç:
- component sistemini daha kod aşamasına geçmeden tutarlı hale getirmek
- aynı işi yapan farklı ve dağınık bileşenler üretilmesini önlemek
- merkez, TR ve global sitenin aynı tasarım ailesinden gelmesini sağlamak
- ama her site için bağlama göre farklı ton ve yoğunluk ayarı yapılabilmesini mümkün kılmak
- Cursor ile component bazlı geliştirme sürecini kolaylaştırmak

Bu belge:
- tek tek React props listesini vermez
- ama component’lerin rolünü, görsel karakterini ve davranış sınırlarını netleştirir

---

# 1) Genel component sistemi ilkeleri

## 1.1 Component yaklaşımı
Tüm UI sistemi modüler, tekrar kullanılabilir ve bağlama göre uyarlanabilir olmalı.

Bu şu anlama gelir:
- aynı component farklı sitelerde yeniden kullanılabilir
- ama aynı component her yerde birebir aynı görünmek zorunda değildir
- temel iskelet ortak, ton ve yoğunluk bağlama göre değişebilir

## 1.2 Component’lerin ana görevi
Her component şu rollerden en az birine hizmet eder:
- yönlendirme
- açıklama
- güven üretme
- karşılaştırma
- veri toplama
- aksiyon alma
- süreç gösterme

## 1.3 Component ne olmamalı?
- dekoratif kutu
- sadece “güzel duruyor” diye eklenmiş bir parça
- aynı sayfada birden fazla işleve yamanmış hibrit karma yapı
- içerikten rol çalan gösteriş unsuru

## 1.4 Ana sistem kuralı
Her component şu üç soruya cevap vermelidir:
1. Ne işe yarıyor?
2. Hangi içerik tipini taşıyor?
3. Hangi aksiyona hizmet ediyor?

Bu üçüne net cevap veremeyen component zayıftır.

---

# 2) Component aileleri

## 2.1 Temel component grupları
Bu projede ana component aileleri şunlardır:
- Navigation components
- Hero components
- Content grid components
- Proof / scenario components
- Service / package components
- Pricing components
- Form / contact components
- Qualification components
- Structural components
- Utility / feedback components

## 2.2 Bu ayrım neden önemli?
Çünkü “kart” dediğimiz şey her yerde aynı işi yapmaz.

Örnek:
- service card ile pricing card aynı değildir
- use-case card ile fit/not-fit card aynı değildir
- CTA section ile hero CTA aynı şey değildir

Yani component sistemi sadece şekil değil, **rol temelli** kurulmalıdır.

---

# 3) Navigation component ilkeleri

## 3.1 Navbar

### Rol
Site yönlendirmesi + ana aksiyon görünürlüğü.

### Ortak karakter
- temiz
- hafif
- yapısal
- güven veren
- sticky kullanılabilir

### Ortak içerik
- marka / wordmark
- ana sayfa linkleri
- siteye özel ana CTA
- mobil menu trigger

### Site bazlı farklar
#### Merkez site
- daha sade
- daha az satış baskısı
- language switch içerir

#### TR site
- daha görünür CTA
- WhatsApp veya değerlendirme odaklı

#### Global site
- daha structured
- Book a Discovery Call odaklı

### Kaçınılacaklar
- ikinci seviye menü kalabalığı
- announcement bar bağımlılığı
- aynı anda iki baskın CTA
- mobilde dağınık mega menu havası

---

## 3.2 Footer

### Rol
Tamamlanmışlık, güven ve ikincil yön bulma.

### Karakter
- sakin
- düzenli
- kompakt ama eksik olmayan

### İçerik
- kısa marka açıklaması
- temel link grupları
- legal linkler
- iletişim / email
- gerektiğinde WhatsApp veya Book a Call linki

### Kaçınılacaklar
- footer’ı ikinci hero gibi kullanmak
- tekrar tekrar büyük CTA’lar
- link çöplüğü
- aşırı sosyal medya kalabalığı

---

# 4) Hero component ilkeleri

## 4.1 Hero’nun rolü
Hero:
- bağlamı kurar
- ana problemi veya çözüm yönünü verir
- ziyaretçinin doğru sayfada olduğunu hissettirir
- ana CTA’yı sunar

## 4.2 Ortak hero yapısı
Tipik hero yapısı:
- eyebrow / small context label (opsiyonel)
- ana başlık
- alt açıklama
- primary CTA
- secondary CTA
- görsel / diagram / structured visual area

## 4.3 Hero yoğunluğu
Hero:
- ilk ekranda çok fazla metinle dolmayacak
- ama boş bir slogan alanı da olmayacak

## 4.4 Site bazlı farklar
### Merkez hero
- daha markasal
- daha açıklayıcı
- düşük baskılı CTA

### TR hero
- daha güven odaklı
- daha sonuç odaklı
- WhatsApp / form dengeli CTA

### Global hero
- daha kısa
- daha sert
- discovery / workflow brief odaklı

## 4.5 Kaçınılacaklar
- 3 satırlık slogan ama hiçbir şey söylemeyen başlık
- çok uzun alt açıklama
- gereksiz badge / social proof satırı
- stock image bağımlılığı

---

# 5) Section intro component ilkeleri

## 5.1 Rol
Section’a bağlam verir.

## 5.2 İçerik
- küçük label (opsiyonel)
- section başlığı
- 1–2 cümle section açıklaması

## 5.3 Kullanım
Her section’da otomatik kullanılmaz.  
Sadece gerçekten bağlam gerekiyorsa kullanılmalı.

## 5.4 Kaçınılacaklar
- her section başına aynı intro bloğu
- gereksiz açıklama şişmesi
- section başlığını intro metninde tekrar etmek

---

# 6) Card component ilkeleri

## 6.1 Genel kart mantığı
Kartlar bu sistemin ana omurgalarından biri olacak.  
Ama “tek kart tipi” yok; kart aileleri var.

## 6.2 Tüm kartlar için ortak prensipler
- net başlık
- kısa açıklama
- içerik hiyerarşisi
- yeterli boşluk
- aşırı dekoratif olmama
- gerektiğinde CTA veya link

## 6.3 Kart ne olmamalı?
- içine gereğinden fazla öğe tıkılmış kutu
- aynı anda tablo + grafik + liste + CTA taşıyan canavar
- sırf shadow var diye “premium” sanılan boş kutu

---

## 6.4 Service card

### Rol
Hizmet alanı veya çözüm modülü anlatır.

### İçerik
- başlık
- kısa açıklama
- 2–4 alt madde
- opsiyonel CTA

### Kullanım alanı
- What We Automate
- Service Pillars
- Solution Modules
- Core Service Categories

---

## 6.5 Problem card

### Rol
Kullanıcının yaşadığı sürtünmeyi isimlendirir.

### İçerik
- problem başlığı
- 1–2 cümle açıklama

### Karakter
- biraz daha sert
- daha az dekoratif
- daha doğrudan

### Kullanım alanı
- problem sections
- friction maps
- common pain points

---

## 6.6 Benefit card

### Rol
Çözümün etkisini anlatır.

### İçerik
- benefit başlığı
- kısa açıklama

### Karakter
- daha yumuşak
- daha güven verici
- daha düzen / görünürlük odaklı

---

## 6.7 Use-case / scenario card

### Rol
Örnek akış veya use-case anlatır.

### İçerik
- bağlam
- ana problem
- kısa akış yapısı
- beklenen sonuç
- CTA

### Karakter
- daha içerik yoğun
- daha structured
- proof benzeri

### Not
Bu kart sıradan service card’dan daha derin olmalı.

---

## 6.8 Fit / not-fit card

### Rol
Qualification yapar.

### İçerik
- uygunluk başlığı
- 3–5 madde

### Karakter
- net
- biraz daha sınır çizen
- aşırı yumuşak olmayan

### Kullanım
- fit blocks
- call qualification
- package fit filtering

---

# 7) Pricing component ilkeleri

## 7.1 Pricing band card

### Rol
Bir fiyat seviyesini veya pricing layer’ı anlatır.

### İçerik
- seviye adı
- fiyat bandı
- uygun yapı
- kapsam özeti

### Karakter
- temiz
- ciddi
- numeric clarity odaklı
- SaaS pricing table gibi değil

### Kaçınılacaklar
- parlak badge’ler
- “most popular” çığırtkanlığı
- indirim etiketi
- e-ticaret fiyat kartı hissi

---

## 7.2 Scope comparison card

### Rol
Farklı kapsam seviyelerini örneklemek.

### İçerik
- örnek senaryo adı
- kısa kapsam özeti
- band alignment

### Karakter
- açıklayıcı
- kıyaslayıcı
- ama aşırı tabloya kaçmayan

---

## 7.3 Included / excluded block

### Rol
Kapsam dürüstlüğü sağlar.

### İçerik
- included list
- excluded list

### Karakter
- iki sütunlu veya stacked
- net
- gereksiz ikon şovu olmayan

---

# 8) Package component ilkeleri

## 8.1 Flagship package block

### Rol
Ana çözüm paketini öne çıkarmak.

### İçerik
- paket adı
- neyi çözer
- ana kapsam
- kime uygun
- CTA

### Karakter
- service card’dan daha baskın
- pricing card’dan daha anlatımsal
- hero’dan daha ikincil ama güçlü

## 8.2 Setup level card

### Rol
Kurulum seviyeleri arasındaki farkı anlatmak.

### İçerik
- seviye adı
- kime uygun
- tipik kapsam

### Karakter
- kıyaslanabilir
- anlaşılır
- aşırı detaylı olmayan

## 8.3 Maintenance level card

### Rol
Bakım seviyelerini açıklar.

### İçerik
- seviye adı
- ne var
- ne yok
- kime uygun

### Karakter
- setup kartına benzer ama daha sakin

---

# 9) Form component ilkeleri

## 9.1 Form block

### Rol
Veri toplama + güven üretme.

### Karakter
- sade
- temiz
- rahat
- korkutmayan

## 9.2 Input field

### Rol
Net veri girişi.

### Özellikler
- güçlü label
- temiz border
- rahat padding
- net focus state
- hata durumunda sakin ama görünür işaret

## 9.3 Textarea

### Rol
Süreç / friction özeti almak.

### Özellikler
- yeterli yükseklik
- placeholder açıklayıcı
- ama devasa duvar gibi değil

## 9.4 Select / dropdown

### Rol
Kategorik seçimleri toplamak.

### Kaçınılacaklar
- çok uzun seçenek listesi
- küçük tıklama alanı
- mobilde zor kullanım

## 9.5 Form helper text

### Rol
Alanı açıklamak / rahatlatmak.

### Karakter
- kısa
- muted
- destekleyici

## 9.6 Error state

### Rol
Sorunu açıklamak.

### Karakter
- sakin
- net
- suçlayıcı olmayan

## 9.7 Success state

### Rol
Bilginin alındığını ve sonraki adımı açıklamak.

### Karakter
- net
- boş teşekkür değil
- bir sonraki mantıklı adımı açık eden

---

# 10) CTA section ilkeleri

## 10.1 CTA section rolü
Sayfanın ana veya ara kapanış alanı.

## 10.2 Yapı
- başlık
- kısa açıklama
- 1 primary CTA
- 1 secondary CTA
- opsiyonel güven notu

## 10.3 Karakter
CTA section:
- section’dan sonra doğal gelmeli
- bağırmamalı
- ama aksiyonu netleştirmeli

## 10.4 Site bazlı fark
### TR
- biraz daha sıcak
- bazen WhatsApp destekli

### Global
- daha ciddi
- discovery / brief mantığı daha net

### Merkez
- düşük baskılı

## 10.5 Kaçınılacaklar
- her section sonrası kocaman CTA band
- çok parlak renk kullanımı
- 3–4 büyük buton bir arada

---

# 11) Timeline / process component ilkeleri

## 11.1 Rol
Süreç anlatmak.

## 11.2 Kullanım alanları
- How We Work
- What Happens Next
- Delivery Model
- Post-call flow

## 11.3 İçerik
- adım numarası veya label
- kısa başlık
- 1 cümle açıklama

## 11.4 Karakter
- net
- okunabilir
- akış hissi veren
- gereksiz infografik curcunası olmayan

## 11.5 Mobilde
Dikey stack mantığına düzgün düşmeli.

---

# 12) Accordion component ilkeleri

## 12.1 Rol
SSS ve açıklama alanlarını düzenli saklamak.

## 12.2 Kullanım alanı
- pricing FAQ
- contact FAQ
- process clarification
- scope questions

## 12.3 Karakter
- temiz
- sakin
- başlıklar kısa
- cevaplar kompakt

## 12.4 Kaçınılacaklar
- her sayfada dev accordion kullanımı
- çok uzun cevaplar
- animasyonla şov yapma

---

# 13) Tab / segmented navigation component ilkeleri

## 13.1 Rol
İçerik grupları arasında geçiş sağlamak.

## 13.2 Kullanım alanı
- scenarios
- use-cases
- category filters
- clinic / office grouping
- accounting / adjacent grouping

## 13.3 Karakter
- sade
- belirgin aktif state
- mobilde de rahat kullanılır

## 13.4 Kaçınılacaklar
- çok fazla sekme
- aktif state’in belirsiz olması
- dar ekranda taşan ve bozulan yapı

---

# 14) Badge / label component ilkeleri

## 14.1 Rol
Küçük bağlam veya durum vermek.

## 14.2 Kullanım alanı
- section eyebrow
- pricing band label
- fit indicator
- optional note

## 14.3 Karakter
- küçük
- hafif
- secondary emphasis

## 14.4 Kaçınılacaklar
- her yerde badge kullanımı
- rozet çöplüğü
- badge ile gerçek içeriğin yerini doldurma

---

# 15) Comparison component ilkeleri

## 15.1 Rol
İki yapı arasındaki farkı göstermek.

## 15.2 Kullanım alanı
- call vs workflow brief
- setup levels
- maintenance levels
- included vs excluded

## 15.3 Karakter
- sade
- net
- kolay taranır
- büyük tablo gibi değil, anlaşılır blok mantığında

## 15.4 Mobilde
Yatay tablo yerine stacked comparison tercih edilmeli.

---

# 16) Proof component ilkeleri

## 16.1 Proof component nedir?
Gerçek veya örnek güven unsurlarını taşıyan yapılar:
- scenario cards
- use-case cards
- example workflow blocks
- process clarity cards

## 16.2 Karakter
- abartısız
- serious
- structured
- believable

## 16.3 Kaçınılacaklar
- testimonial slider
- fake logos
- animated stats circus
- sayı yağmuru

---

# 17) Empty / feedback state component ilkeleri

## 17.1 Rol
İçerik yokken, filtre sonucu boşken veya işlem tamamlandığında kullanıcıyı boşlukta bırakmamak.

## 17.2 Kullanım
- empty state
- form success
- no scenario match
- no use-case match

## 17.3 Karakter
- kısa
- sakin
- yönlendirici

---

# 18) Component varyant sistemi mantığı

## 18.1 Aynı component her sitede aynı görünmek zorunda değil
Örneğin:
- `HeroBlock` merkez, TR ve global varyantlara sahip olabilir
- `CTASection` merkez/TR/global varyantına ayrılabilir
- `ContactForm` TR ve global için farklı alan dizilimine sahip olabilir

## 18.2 Ama temel iskelet korunmalı
Örnek:
- hepsinde başlık + açıklama + CTA mantığı varsa, component ailesi ortaktır
- sadece renk, spacing, metin yoğunluğu ve CTA karakteri değişir

## 18.3 Neden önemli?
Kod tekrarını azaltır, marka ailesini korur, ama bağlam farkını da öldürmez.

---

# 19) Kod tarafı için component isimlendirme mantığı

## 19.1 İsimlendirme ilkesi
Component adı:
- yaptığı işi söylemeli
- bağlamı net vermeli
- aynı işi yapan iki farklı component üretimini azaltmalı

## 19.2 Örnek aileler
- `CenterNavbar`
- `TrNavbar`
- `GlobalNavbar`
- `HeroBlockCenter`
- `HeroBlockTR`
- `HeroBlockGlobal`
- `ProblemGrid`
- `ServicePillarGrid`
- `PricingBandCard`
- `UseCaseCard`
- `WorkflowBriefForm`
- `QualificationCTASection`

## 19.3 Kaçınılacak isimler
- `Card1`
- `FancySection`
- `MainBlock`
- `AwesomeHero`
- `CTAThing`

Bunlar sonra tam kabus olur.

---

# 20) Component kalite kontrol soruları

Her component için şu sorular sorulmalıdır:

1. Bu component ne iş yapıyor?
2. Aynı iş için başka bir component daha üretiyor muyuz?
3. Bu component içerik odaklı mı, dekor odaklı mı?
4. Mobilde hâlâ mantıklı mı?
5. Merkez, TR ve global farkı gerekiyorsa bunu destekliyor mu?
6. Bu component çok fazla rol üstlenmeye çalışıyor mu?
7. Aynı bileşen tasarım sistemine uyuyor mu?

Bu testten geçmeyen component ya gereksizdir ya da yanlış tasarlanmıştır.

---

# 21) Sonuç

Bu belgeye göre component sistemi:
- modüler
- rol bazlı
- tekrar kullanılabilir
- site bağlamına göre varyantlanabilir
- güven ve netlik odaklı
bir yapıda kurulacaktır.

Bu dosya, sonraki aşamada:
- component inventory
- page-to-component mapping
- React component architecture
- Tailwind implementation
için temel referans olacaktır.