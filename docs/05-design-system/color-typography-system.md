# Color & Typography System

## Belge amacı
Bu belge, WeCaHan Auto site ailesinde kullanılacak renk sistemi, tipografi sistemi ve temel görsel token mantığını tanımlar.

Amaç:
- üç site için ortak bir tasarım omurgası kurmak
- merkez, TR ve global tarafın aynı ailede ama farklı karakterlerde görünmesini sağlamak
- renkleri dekor değil, işlev için kullanmak
- tipografi hiyerarşisini netleştirmek
- component, layout ve responsive tasarım için tutarlı temel token yapısı oluşturmak
- daha sonra Tailwind, CSS variable ve component sistemine çevrilecek görsel altyapıyı hazırlamak

Bu belge:
- son CSS dosyası değildir
- ama renk ve tipografi için ana referans tasarım sistemidir

---

# 1) Genel yaklaşım

## 1.1 Renk ve tipografi ne için var?
Renk ve tipografi:
- dikkat yönetmek
- güven üretmek
- hiyerarşi kurmak
- marka karakteri taşımak
- sayfa ritmini düzenlemek
için vardır.

## 1.2 Ne için yok?
- siteyi süslemek
- “modern” görünmek için rastgele seçim yapmak
- her section’a farklı karakter yüklemek
- içerik eksikliğini gizlemek

## 1.3 Ana ilke
Görsel sistem içerikten rol çalmaz.  
İçeriği taşır, vurgular ve düzenler.

---

# 2) Genel renk sistemi mantığı

## 2.1 Token yaklaşımı
Renkler doğrudan “mavi”, “gri”, “yeşil” gibi düşünülmeyecek.  
Önce işlevsel token mantığı kurulacak.

### Ana token grupları
- background
- surface
- surface-muted
- border
- text-primary
- text-secondary
- text-muted
- accent-primary
- accent-primary-hover
- accent-soft
- success
- warning
- error

## 2.2 Ortak sistem mantığı
Üç sitede aynı token yapısı kullanılacak.  
Ama accent ve bazı ton farkları site bazlı değişebilecek.

## 2.3 Renk kullanım ilkesi
Bir renk “güzel duruyor” diye değil, şu rollerden biri için kullanılmalı:
- yön vermek
- vurgu yapmak
- state göstermek
- okunabilirlik sağlamak
- güven hissi kurmak

---

# 3) Ortak nötr palet

## 3.1 Ana nötr yapı
Tüm sitelerde ortak kullanılabilecek temel nötrler:

### Koyu tonlar
- `#0B1220` → ana koyu arka plan / güçlü yüzey
- `#111827` → secondary dark surface
- `#1F2937` → border-heavy dark surface / yoğun kart alanı

### Açık tonlar
- `#F8FAFC` → ana açık arka plan
- `#F1F5F9` → muted background / section change
- `#E2E8F0` → soft border / divider

### Metin tonları
- `#0F172A` → primary text on light
- `#334155` → secondary text
- `#64748B` → muted text
- `#FFFFFF` → primary text on dark
- `#CBD5E1` → secondary text on dark

## 3.2 Bu nötrlerin rolü
- okunabilirlik
- sakinlik
- güven
- modüler UI
- section ritmi

## 3.3 Kaçınılacaklar
- gri yerine çok fazla renkli zemin kullanımı
- text kontrastını zayıflatan açık gri fazlalığı
- border’ı görünmez hale getiren aşırı soluk tonlar

---

# 4) Merkez site renk sistemi

## 4.1 Merkez sitenin renk karakteri
Merkez site:
- nötr
- temiz
- sakin
- markasal
görünmeli.

Burada accent rengi dikkat çekmeli ama satış baskısı üretmemeli.

## 4.2 Önerilen accent palette
- `#2563EB` → primary accent
- `#1D4ED8` → primary hover / darker action state
- `#DBEAFE` → soft accent background
- `#60A5FA` → light accent highlights (çok sınırlı)

## 4.3 Kullanım alanları
- ana CTA
- active navigation state
- link / emphasis
- selected cards / tabs
- hero highlight detail

## 4.4 Kaçınılacak kullanım
- büyük yüzeyleri full mavi yapmak
- her kartta accent border
- sürekli mavi badge kullanmak
- accent’i her yerde aynı yoğunlukta basmak

## 4.5 Hissiyat
Bu palet:
- teknolojik
- temiz
- açıklayıcı
- güvenilir
bir merkez site hissi verir.

---

# 5) TR site renk sistemi

## 5.1 TR sitenin renk karakteri
TR site:
- güven veren
- yerel iş dünyasına uyumlu
- biraz daha sıcak
- daha yakın
olmalı.

Ama “renkli satış sayfası” gibi görünmemeli.

## 5.2 Önerilen accent palette
Ana çizgide iki accent kullanılabilir ama biri baskın olmalı.

### Ana accent
- `#1D4ED8` → trust blue
- `#1E40AF` → hover / stronger emphasis
- `#DBEAFE` → soft blue background

### Yardımcı accent
- `#0F766E` → teal / trusted support accent
- `#CCFBF1` → soft teal surface

## 5.3 Kullanım alanları
### Mavi
- ana CTA
- aktif durum
- pricing preview vurguları
- section links

### Teal
- trust notes
- fit blocks
- soft highlight cards
- operasyonel “daha düzenli yapı” hissi veren yardımcı bloklar

## 5.4 Kaçınılacak kullanım
- mavi ve teal’i aynı yerde kavga ettirmek
- her section’da başka bir vurgu tonu üretmek
- fazla yeşille sağlık sitesi gibi görünmek
- fazla teal ile SaaS oyuncaklığına kaçmak

## 5.5 Hissiyat
Bu palet:
- düzen
- güven
- erişilebilirlik
- profesyonel sıcaklık
hissi verir.

---

# 6) Global site renk sistemi

## 6.1 Global sitenin renk karakteri
Global site:
- daha structured
- daha controlled
- daha B2B
- daha ciddi
olmalı.

## 6.2 Önerilen accent palette
### Ana accent
- `#1E40AF` → deep blue
- `#1D4ED8` → hover / active blue
- `#DBEAFE` → soft blue support

### Yardımcı accent
- `#059669` → ROI / operational success hint
- `#D1FAE5` → soft green background

## 6.3 Kullanım mantığı
### Mavi
- primary CTA
- navigation active state
- major emphasis
- structured highlights

### Yeşil
- subtle outcome / clarity accents
- fit indicators
- operational improvement cues
- success-adjacent UI hints

## 6.4 Kaçınılacak kullanım
- yeşili ana CTA rengi yapmak
- finance site klişesi gibi her şeyi yeşile boyamak
- koyu mavi + koyu yeşil ile ağır ve kasvetli görünüm oluşturmak

## 6.5 Hissiyat
Bu palet:
- controlled
- credible
- operational
- serious but modern
bir hava verir.

---

# 7) Arka plan ve yüzey sistemi

## 7.1 Arka plan yapısı
Genel yapı:
- ana page background açık
- section geçişlerinde muted yüzeyler
- belirli alanlarda koyu section kullanımı
- koyu zemin varsa sınırlı ve anlamlı kullanımı

## 7.2 Kullanım mantığı
### Açık ana zemin
İçerik okuma ve genel güven için en güvenli omurga.

### Muted section surface
Section geçişini hissettirmek için.

### Koyu feature block
Yalnızca önemli highlight section’larda:
- process overview
- CTA band
- proof strip
- serious scoped model anlatımı

## 7.3 Koyu section kullanım ilkesi
Koyu zemin:
- seyrek kullanılmalı
- etkili section’lar için ayrılmalı
- metin kontrastı çok net olmalı

## 7.4 Kaçınılacaklar
- koyu ve açık section’ları rastgele dizmek
- her ikinci section’ı farklı tonda yapmak
- düşük kontrastlı dark mode görünümlü bloklar

---

# 8) Border, shadow ve radius ilkeleri

## 8.1 Border mantığı
Border’lar:
- section ayırmak
- kart tanımlamak
- form alanlarını netleştirmek
için kullanılmalı

### Önerilen border tonu
- `#E2E8F0` light mode primary border
- `rgba(255,255,255,0.12)` dark surface border

## 8.2 Shadow mantığı
Gölge:
- hafif
- modern
- yumuşak
- gereğinden az
olmalı

Kartlar havada uçuyormuş gibi görünmeyecek.

## 8.3 Radius mantığı
Radius:
- modern ama oyuncak olmayan
- kartlarda orta-yüksek
- butonlarda orta
- inputlarda orta
olmalı

### Önerilen mantık
- kartlar: 20–24px radius
- butonlar: 14–18px radius
- inputlar: 14–16px radius
- küçük badge’ler: 9999px pill veya 12px soft round

## 8.4 Kaçınılacaklar
- kare ve sert UI
- aşırı yuvarlak mobil app oyuncaklığı
- her elemanda farklı radius mantığı
- ağır gölgeler

---

# 9) Tipografi sistemi genel yaklaşımı

## 9.1 Font ailesi
Tek ana sans-serif aile kullanılmalı.  
Gerekiyorsa tek bir yardımcı mono aile eklenebilir.

## 9.2 Önerilen ana font yaklaşımı
Uygun aileler:
- Inter
- Geist
- Sora (yalnızca heading’de dikkatli)
- benzer modern grotesk sans-serif aileler

Benim önerim:
- **Headings:** Inter veya Geist
- **Body:** Inter
- **Mono (opsiyonel):** JetBrains Mono veya benzeri, sadece küçük sistem / metric alanlarında

## 9.3 Neden bu yaklaşım?
- okunabilir
- fazla karakter gösterisi yapmıyor
- teknoloji ve operasyon dünyasına uyuyor
- kurumsal ve startup arası dengeli duruyor

## 9.4 Kaçınılacaklar
- çok karakterli display fontlar
- serif ana font
- iki farklı sans’ı rastgele karıştırmak
- heading’de aşırı sert, body’de aşırı yumuşak kombinasyon

---

# 10) Tipografi token yapısı

## 10.1 Ana typographic scale
Önerilen temel tipografi ölçeği:

- Display XL
- Display L
- H1
- H2
- H3
- H4
- Body L
- Body M
- Body S
- Label
- Caption
- Micro

## 10.2 Önerilen boyut mantığı

### Display XL
- 56–64px
- çok sınırlı kullanım
- yalnızca büyük hero’larda

### Display L
- 44–52px
- hero başlıkları için ana aday

### H1
- 36–42px
- page-level başlık

### H2
- 28–32px
- ana section başlıkları

### H3
- 22–24px
- kart başlıkları / subsection

### H4
- 18–20px
- küçük section veya yoğun kart başlıkları

### Body L
- 18px
- hero alt açıklaması / önemli paragraf

### Body M
- 16px
- standart gövde metni

### Body S
- 14px
- yardımcı açıklamalar

### Label
- 14px / medium
- form ve UI label’ları

### Caption
- 12–13px
- support text

### Micro
- 11–12px
- sınırlı kullanım, zorunlu olduğunda

## 10.3 Line-height mantığı
### Headings
- sıkı ama boğucu olmayan
- yaklaşık 1.1–1.2

### Body
- rahat okunur
- yaklaşık 1.5–1.7

### Caption
- 1.4–1.5

---

# 11) Headline ağırlık sistemi

## 11.1 Başlık kalınlıkları
Başlıklar:
- genellikle 600–700
- bazı büyük hero’larda 700
- çok kalın 800 ağırlık sınırlı
olmalı

## 11.2 Body ağırlıkları
- standart body: 400
- vurgu body: 500
- çok sık 600 kullanılmamalı

## 11.3 Label ağırlıkları
- 500 veya 600
- input label’larında okunur ve net

## 11.4 Kaçınılacaklar
- tüm başlıkları ultra bold yapmak
- tüm metni medium yapmak
- body metinde çok ince weight
- küçük metinde düşük kontrast + düşük weight kombinasyonu

---

# 12) Site bazlı tipografi karakteri

## 12.1 Merkez site tipografi hissi
- daha sakin
- daha açıklayıcı
- daha nefesli
- hero başlıkları güçlü ama bağırmayan

## 12.2 TR site tipografi hissi
- biraz daha insan yakın
- daha hızlı okunur
- biraz daha belirgin CTA ve card heading
- section başlıkları doğrudan

## 12.3 Global site tipografi hissi
- daha kısa
- daha sıkı
- daha net
- body copy daha ekonomik
- heading’ler daha operational

---

# 13) Metin genişliği ve satır uzunluğu

## 13.1 Maksimum okunabilirlik
Uzun paragraf alanlarında satır boyu çok uzamamalı.

### Önerilen mantık
- body metin max-width: 60–72 karakter civarı
- hero açıklamaları daha kısa blokta
- CTA altı yardımcı metin daha dar kolonlarda

## 13.2 Neden önemli?
Aşırı geniş metin:
- okunurluğu düşürür
- profesyonelliği azaltır
- sayfayı dağınık gösterir

## 13.3 Kaçınılacaklar
- full-width body copy
- hero açıklamasını 2 ekran genişliğinde yaymak
- dar mobilde aşırı uzun cümleler

---

# 14) Link, label ve yardımcı metin renk mantığı

## 14.1 Linkler
Linkler:
- accent color ile ayrışmalı
- hover’da daha koyu veya alt çizgili hale gelebilmeli
- normal text ile karışmamalı

## 14.2 Label’lar
Form label’ları:
- body’den biraz güçlü
- muted değil, okunaklı
- alanın önemini taşımalı

## 14.3 Helper text
Yardımcı metinler:
- text-muted tonunda
- ama hâlâ rahat okunabilir
- küçük ama kaybolmayacak

## 14.4 Error text
- belirgin
- kısa
- renk ile destekli
- ama her şeyi kırmızıya boğmadan

---

# 15) Renk ve tipografinin birlikte davranışı

## 15.1 En önemli kural
Güçlü başlık + zayıf kontrast = kötü  
Güzel renk + kötü okunurluk = kötü

İkisi birlikte çalışmalı.

## 15.2 Başlık + accent ilişkisi
Her başlık accent ile vurgulanmayacak.  
Accent yalnızca seçili kelime, küçük badge veya küçük label’da kullanılmalı.

## 15.3 Body + muted text ilişkisi
Muting yapılabilir ama asla okunurluğu öldürecek seviyeye düşmemeli.

## 15.4 Dark section typography
Dark section’larda:
- başlıklar net beyaz / near-white
- body secondary text hafif yumuşak
- accent çok kontrollü
- contrast kaybı olmamalı

---

# 16) Önerilen CSS variable / token mantığı

## 16.1 Ortak token adları
Aşağıdaki mantık daha sonra CSS variable veya Tailwind theme’e çevrilebilir:

- `--bg-default`
- `--bg-muted`
- `--bg-dark`
- `--surface-default`
- `--surface-muted`
- `--border-default`
- `--text-primary`
- `--text-secondary`
- `--text-muted`
- `--accent-primary`
- `--accent-primary-hover`
- `--accent-soft`
- `--success`
- `--warning`
- `--error`

## 16.2 Tipografi token adları
- `--font-sans`
- `--font-mono`
- `--text-display-xl`
- `--text-display-lg`
- `--text-h1`
- `--text-h2`
- `--text-h3`
- `--text-h4`
- `--text-body-lg`
- `--text-body`
- `--text-body-sm`
- `--text-label`
- `--text-caption`
- `--leading-tight`
- `--leading-normal`
- `--leading-relaxed`

## 16.3 Neden önemli?
Kod aşamasında rastgele değer girilmesini engeller.  
Sistem dilini taşır.

---

# 17) Erişilebilirlik ve okunabilirlik ilkeleri

## 17.1 Kontrast
Renk kontrastı ciddi olacak.  
“Soft görünmek” uğruna okunurluk öldürülmeyecek.

## 17.2 Mobil okunabilirlik
Mobilde body text çok küçülmeyecek.  
14px altı metin çok sınırlı kullanılmalı.

## 17.3 Buton okunabilirliği
CTA metni her zaman rahat okunmalı.  
Accent rengi güzel diye kontrastı bozmak yok.

## 17.4 Form okunabilirliği
Input border, label ve helper text kaybolmamalı.

---

# 18) Site bazlı özet sistem

## 18.1 Merkez site özet
### Accent
- blue-driven

### Typography
- calm / explanatory

### Hissiyat
- neutral professional clarity

---

## 18.2 TR site özet
### Accent
- trust blue + controlled teal support

### Typography
- direct / readable / slightly warmer

### Hissiyat
- local trust + practical order

---

## 18.3 Global site özet
### Accent
- deep blue + controlled green support

### Typography
- structured / tighter / more B2B

### Hissiyat
- operational clarity + disciplined professionalism

---

# 19) Kalite kontrol soruları

Her renk ve tipografi kararı için şu sorular sorulmalıdır:

1. Bu renk dekor için mi kullanılıyor, işlev için mi?
2. Bu sayfa markayı güvenilir mi gösteriyor, yoksa sadece modern mi görünmeye çalışıyor?
3. Başlıklar gerçekten öne çıkıyor mu?
4. Body metin rahat okunuyor mu?
5. Muted text hâlâ okunabilir mi?
6. TR ve global site arasındaki ton farkı görsel olarak da hissediliyor mu?
7. Accent kullanımında abartı var mı?
8. Mobilde her şey hâlâ temiz ve okunur mu?

Bu testten geçmeyen sistem kararı zayıftır.

---

# 20) Sonuç

Bu belgeye göre WeCaHan Auto için:
- ortak bir nötr temel,
- site bazlı accent farkları,
- kontrollü renk kullanımı,
- net tipografi hiyerarşisi,
- yüksek okunabilirlik,
- structured token yaklaşımı
benimsenir.

Bu dosya, sonraki aşamada:
- Tailwind config
- CSS variable yapısı
- component stilleri
- responsive tipografi kararları
için ana referans olacaktır.