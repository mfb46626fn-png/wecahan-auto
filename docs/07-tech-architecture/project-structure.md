# Project Structure

## Belge amacı
Bu belge, WeCaHan Auto projesinin kod tabanı içindeki klasör yapısını, sorumluluk ayrımını ve ana dosya yerleşim mantığını tanımlar.

Amaç:
- tek Next.js uygulaması içinde üç site family yapısını düzenli şekilde taşımak
- shared ve site-specific kodları karıştırmamak
- component, content, config, lib, form ve analytics katmanlarını net ayırmak
- Cursor ile adım adım üretim yaparken dosya yapısının dağılmasını önlemek
- sonraki geliştirme aşamalarında “bu dosya nereye girecek?” karmaşasını bitirmek

Bu belge:
- tam çalışan kod vermez
- ama projenin klasör ve sorumluluk mimarisini net şekilde dondurur
- app router yapısının projeye nasıl uygulanacağını açıklar

---

# 1) Genel yapı ilkeleri

## 1.1 Ana ilke
Tek repo, tek Next.js uygulaması olacak.  
Ama kod tabanı tek parça çamur gibi yazılmayacak.

Kod şu katmanlara ayrılmalı:
- route katmanı
- site config katmanı
- content katmanı
- shared UI katmanı
- site-specific UI katmanı
- form/action katmanı
- analytics katmanı
- utility/lib katmanı

## 1.2 Sorumluluk ayrımı
Her klasörün net bir görevi olmalı.

### App
Route ve page composition

### Components
UI parçaları

### Content
Copy ve page text objeleri

### Config
Site family ve route-level ayarlar

### Lib
İş mantığı yardımcıları

### Actions / server
Form submit, routing, validation, backend işlemleri

## 1.3 Kaçınılacaklar
- her şeyi `components` içine atmak
- page copy’leri doğrudan page dosyasına gömmek
- site family farklarını if-else cehenneminde sayfa içine yaymak
- shared ve site-specific component’leri aynı yerde isim karmaşasıyla tutmak
- form validation, routing ve webhook işini tek dosyada toplamak

---

# 2) Önerilen üst seviye klasör yapısı

## 2.1 Ana iskelet
Aşağıdaki yapı hedeflenir:

```txt
wecahan-auto/
├─ app/
├─ components/
├─ content/
├─ config/
├─ lib/
├─ actions/
├─ types/
├─ public/
├─ docs/
├─ styles/
├─ middleware.ts
├─ next.config.ts
├─ package.json
├─ tsconfig.json
└─ .env.local
````

## 2.2 Klasör rolleri

### `app/`

Route ve page dosyaları

### `components/`

UI component sistemi

### `content/`

Sayfa metinleri, CTA setleri, headline varyasyonları, site bazlı copy objeleri

### `config/`

Site family ayarları, route config’leri, metadata config’leri, navigation config’leri

### `lib/`

Yardımcı iş mantıkları

### `actions/`

Server action / route handler mantıkları

### `types/`

TypeScript tipleri ve ortak type sözlüğü

### `public/`

Statik asset’ler

### `styles/`

Global stiller, theme katmanı, gerekiyorsa küçük CSS yardımcıları

### `docs/`

Planlama ve referans belgeleri

---

# 3) app klasörü yapısı

## 3.1 Ana yaklaşım

Tek app router yapısı kullanılacak.
Ama route’lar site family mantığına göre temiz ayrılacak.

## 3.2 Önerilen app yapısı

```txt
app/
├─ layout.tsx
├─ not-found.tsx
├─ globals.css
├─ (center)/
│  └─ page.tsx
├─ (tr)/
│  ├─ page.tsx
│  ├─ klinikler/
│  │  └─ page.tsx
│  ├─ muhasebe-ofisleri/
│  │  └─ page.tsx
│  ├─ paketler/
│  │  └─ page.tsx
│  ├─ fiyatlandirma/
│  │  └─ page.tsx
│  ├─ ornek-senaryolar/
│  │  └─ page.tsx
│  └─ iletisim/
│     └─ page.tsx
├─ (global)/
│  ├─ page.tsx
│  ├─ accounting-firms/
│  │  └─ page.tsx
│  ├─ services/
│  │  └─ page.tsx
│  ├─ pricing/
│  │  └─ page.tsx
│  ├─ use-cases/
│  │  └─ page.tsx
│  ├─ book-a-call/
│  │  └─ page.tsx
│  └─ contact/
│     └─ page.tsx
└─ api/
   └─ ...
```

## 3.3 Route group mantığı

Parantezli route group yapısı:

* kod organizasyonu için kullanılacak
* URL’e yansımayacak
* page composition’ı sadeleştirecek

## 3.4 Dikkat

Hostname ayrımı middleware / site detection katmanında yapılacağı için, route group yalnızca kod organizasyonudur.
Asıl site family kararı hostname’den gelir.

---

# 4) Route ve hostname ilişkisi

## 4.1 Temel mantık

Aynı `/` route’u farklı hostname altında farklı page composition ile çalışabilir.

### Örnek

* `auto.wecahan.com/` → merkez home
* `tr.auto.wecahan.com/` → TR home
* `global.auto.wecahan.com/` → global home

## 4.2 Teknik yaklaşım

Page dosyaları tek başına hostname kararını vermez.
Hostname tespiti:

* middleware
  veya
* request tabanlı site detection helper
  ile yapılır.

## 4.3 Kural

Sayfa dosyası kendi site family’sini doğrudan tahmin etmeye çalışmayacak.
Bu karar merkezi config / detection katmanından gelecek.

---

# 5) middleware.ts rolü

## 5.1 Temel görev

`middleware.ts` şu işlerde kullanılabilir:

* hostname’i okuyup site family belirlemek
* request’e site context taşımak
* gerektiğinde yönlendirme / koruma yapmak

## 5.2 İlk fazda beklenen işlev

* `auto.wecahan.com` → `center`
* `tr.auto.wecahan.com` → `tr`
* `global.auto.wecahan.com` → `global`

## 5.3 Aşırı kullanım yok

Middleware içine ağır iş mantığı gömülmeyecek.
Yalnızca:

* detection
* hafif routing kontrolü
* context işareti
  gibi çekirdek işler yapılacak.

## 5.4 Kaçınılacaklar

* middleware içinde form logic
* metadata üretimi
* büyük config yükleme
* ağır if/else zincirleri

---

# 6) config klasörü yapısı

## 6.1 Config’in rolü

Config klasörü şu bilgileri tutar:

* site family ayarları
* navigation
* footer
* CTA mapping
* metadata defaults
* route-level page registry

## 6.2 Önerilen yapı

```txt
config/
├─ sites/
│  ├─ center.ts
│  ├─ tr.ts
│  └─ global.ts
├─ navigation/
│  ├─ center-nav.ts
│  ├─ tr-nav.ts
│  └─ global-nav.ts
├─ footer/
│  ├─ center-footer.ts
│  ├─ tr-footer.ts
│  └─ global-footer.ts
├─ metadata/
│  ├─ center-metadata.ts
│  ├─ tr-metadata.ts
│  └─ global-metadata.ts
├─ cta/
│  ├─ center-cta.ts
│  ├─ tr-cta.ts
│  └─ global-cta.ts
└─ routing/
   └─ site-family-map.ts
```

## 6.3 `sites/*.ts` dosyaları ne taşır?

Her site family için:

* site name
* hostname
* default language
* theme key
* primary CTA type
* analytics site key
* base navigation key

## 6.4 Amaç

Config ile yönetilebilen şeyler kodun içine gömülmeyecek.

---

# 7) content klasörü yapısı

## 7.1 Content’in rolü

Sayfa metinleri page dosyalarının içine gömülmeyecek.
Content ayrı tutulacak.

## 7.2 Önerilen yapı

```txt
content/
├─ center/
│  └─ home.ts
├─ tr/
│  ├─ home.ts
│  ├─ clinics.ts
│  ├─ accounting-offices.ts
│  ├─ packages.ts
│  ├─ pricing.ts
│  ├─ scenarios.ts
│  └─ contact.ts
├─ global/
│  ├─ home.ts
│  ├─ accounting-firms.ts
│  ├─ services.ts
│  ├─ pricing.ts
│  ├─ use-cases.ts
│  ├─ book-a-call.ts
│  └─ contact.ts
├─ shared/
│  ├─ trust-notes.ts
│  ├─ form-helper-texts.ts
│  └─ common-labels.ts
└─ schema/
   └─ page-content-types.ts
```

## 7.3 İçerik formatı

İçerik dosyaları ideal olarak:

* typed object
* section bazlı
* CTA key’lerine referans veren
  bir yapıda olmalı

## 7.4 Neden önemli?

Bu yapı sayesinde:

* copy değişikliği kolay olur
* page dosyası temiz kalır
* Cursor ile section section çalışma kolaylaşır

---

# 8) components klasörü yapısı

## 8.1 Ana ilke

Component klasörü site family ve rol bazlı düzenlenmeli.

## 8.2 Önerilen yapı

```txt
components/
├─ shared/
│  ├─ layout/
│  ├─ ui/
│  ├─ cards/
│  ├─ forms/
│  ├─ sections/
│  ├─ feedback/
│  └─ navigation/
├─ center/
│  ├─ hero/
│  ├─ sections/
│  └─ navigation/
├─ tr/
│  ├─ hero/
│  ├─ sections/
│  ├─ forms/
│  ├─ navigation/
│  └─ qualification/
├─ global/
│  ├─ hero/
│  ├─ sections/
│  ├─ forms/
│  ├─ navigation/
│  └─ qualification/
└─ providers/
```

## 8.3 shared klasörü ne taşır?

Tekrarlanabilir çekirdek parçalar:

* buttons
* form fields
* base cards
* section wrapper
* accordion
* tabs
* timeline
* feedback states

## 8.4 site-specific klasörler ne taşır?

Siteye özgü:

* hero varyantları
* CTA section varyantları
* özel qualification blokları
* özel sektör section’ları

## 8.5 Kural

Shared olabilecek component zorla site-specific yapılmayacak.
Ama site-specific olması gereken component de shared diye ezilmeyecek.

---

# 9) Component isimlendirme sistemi

## 9.1 Temel kural

İsim:

* yaptığı işi söylemeli
* bağlamı belli etmeli
* tekrar eden isim kaosunu önlemeli

## 9.2 Önerilen örnekler

* `HeroBlockCenter`
* `HeroBlockTR`
* `HeroBlockAccounting`
* `ProblemGrid`
* `BenefitCardGrid`
* `WorkflowBriefForm`
* `QualificationCTASection`
* `PricingBandCards`
* `IncludedExcludedSplit`

## 9.3 Kaçınılacaklar

* `Card1`
* `MainSection`
* `BigHero`
* `CoolCTA`
* `FancyBlock`

---

# 10) lib klasörü yapısı

## 10.1 lib’in rolü

`lib/` UI olmayan iş mantığını taşır.

## 10.2 Önerilen yapı

```txt
lib/
├─ site/
│  ├─ detect-site-family.ts
│  ├─ get-site-config.ts
│  └─ get-hostname.ts
├─ metadata/
│  ├─ build-metadata.ts
│  └─ metadata-helpers.ts
├─ forms/
│  ├─ normalize-form-data.ts
│  ├─ route-lead.ts
│  ├─ spam-check.ts
│  └─ success-response.ts
├─ analytics/
│  ├─ event-map.ts
│  └─ tracking-helpers.ts
├─ utils/
│  ├─ classnames.ts
│  ├─ env.ts
│  ├─ strings.ts
│  └─ dates.ts
└─ validation/
   ├─ center-form.ts
   ├─ tr-form.ts
   ├─ global-form.ts
   └─ discovery-booking.ts
```

## 10.3 Kural

`lib/` içine React component konmayacak.
Bu klasör UI değil, yardımcı mantık içindir.

---

# 11) actions klasörü yapısı

## 11.1 actions’ın rolü

Server action veya submit handling logic burada tutulmalı.

## 11.2 Önerilen yapı

```txt
actions/
├─ forms/
│  ├─ submit-center-brief.ts
│  ├─ submit-tr-evaluation.ts
│  ├─ submit-global-brief.ts
│  └─ submit-discovery-booking.ts
├─ routing/
│  └─ lead-routing-actions.ts
└─ notifications/
   └─ notify-new-lead.ts
```

## 11.3 Neden ayrı klasör?

Çünkü:

* submit mantığı page içine gömülmemeli
* form başına action ayrımı net olmalı
* test ve bakım kolaylaşmalı

## 11.4 Kural

Action dosyası:

* validation çağırabilir
* normalization çağırabilir
* routing / webhook akışı başlatabilir
* ama UI render etmez

---

# 12) validation yapısının yeri

## 12.1 Seçim

Validation mantığı `lib/validation` altında tutulmalı.

## 12.2 Neden burada?

Çünkü validation:

* form field logic
* server-side güvenlik
* reusable schema
  özelliği taşır

Bu yüzden page veya component içinde değil, ayrı katmanda yaşamalıdır.

## 12.3 Önerilen yaklaşım

Her form ailesi için ayrı schema / validator:

* center brief
* TR evaluation
* global workflow brief
* discovery booking

---

# 13) types klasörü yapısı

## 13.1 Types’in rolü

Tüm ortak veri yapıları burada toplanmalı.

## 13.2 Önerilen yapı

```txt
types/
├─ site.ts
├─ navigation.ts
├─ cta.ts
├─ content.ts
├─ forms.ts
├─ metadata.ts
├─ lead-routing.ts
└─ analytics.ts
```

## 13.3 Neden önemli?

Bu proje form ve content yoğun.
Tipler dağınık olursa kod hızla çürür.

---

# 14) public klasörü yapısı

## 14.1 Public’in rolü

Statik asset’ler burada tutulacak.

## 14.2 Önerilen yapı

```txt
public/
├─ logos/
│  ├─ brand/
│  ├─ center/
│  ├─ tr/
│  └─ global/
├─ icons/
├─ images/
│  ├─ center/
│  ├─ tr/
│  └─ global/
├─ diagrams/
│  ├─ workflows/
│  ├─ scenarios/
│  └─ use-cases/
└─ og/
```

## 14.3 Kural

Asset’ler rastgele adlarla üst üste birikmeyecek.
Site family ve kullanım amacına göre düzenlenecek.

---

# 15) styles klasörü yapısı

## 15.1 Rol

Global style katmanı ve gerekiyorsa token destek dosyaları burada olur.

## 15.2 Önerilen yapı

```txt
styles/
├─ tokens.css
├─ themes.css
└─ utilities.css
```

## 15.3 Açıklama

### `tokens.css`

Renk, radius, spacing, typography variable mantığı

### `themes.css`

Site family bazlı tema varyasyonları

### `utilities.css`

Çok sınırlı özel yardımcı stiller

## 15.4 Kural

Ağır custom CSS kaosu çıkarılmayacak.
Ana stil omurgası Tailwind üstünden kurulmalı.

---

# 16) Page dosyalarının sorumluluğu

## 16.1 Page dosyası ne yapmalı?

Page dosyası:

* content import etmeli
* doğru component’leri compose etmeli
* metadata bağlamını kurmalı
* gerekirse site family kontrolü yapmalı

## 16.2 Page dosyası ne yapmamalı?

* uzun metin objeleri barındırmamalı
* validation yazmamalı
* routing logic yazmamalı
* büyük helper mantıkları taşımamalı

## 16.3 Hedef

Page dosyası bir “orchestrator” gibi davranmalı.
İçerik, config ve component’leri birleştirmeli.

---

# 17) Metadata yapısının yeri

## 17.1 Seçim

Metadata logic:

* config
* content
* lib/metadata
  birlikte çalışacak şekilde kurulmalı

## 17.2 Neden?

Çünkü metadata:

* route’a bağlı
* site family’ye bağlı
* bazen page content’e bağlı

## 17.3 Kural

Her page içinde kopyala-yapıştır title/description yazılmayacak.
Merkezi yardımcı mantık kullanılmalı.

---

# 18) Analytics yapısının yeri

## 18.1 Önerilen yapı

Tracking helper’ları `lib/analytics` altında olur.
Client-side event bağlayıcı küçük component veya hook’lar `components/shared` veya `lib/analytics` ile birlikte çalışabilir.

## 18.2 Event isimleri

Sabit map’ten çekilmeli.
Page içine string saçılmamalı.

## 18.3 Kural

`cta_click`, `form_submit_success` gibi event adları merkezi tutulmalı.

---

# 19) Form submit akışının yerleşimi

## 19.1 UI katmanı

Form component’leri:

* `components/shared/forms`
* `components/tr/forms`
* `components/global/forms`

## 19.2 Validation katmanı

* `lib/validation`

## 19.3 Submit action katmanı

* `actions/forms`

## 19.4 Routing / webhook katmanı

* `lib/forms`
* `actions/routing`
  veya ilgili helper modüller

## 19.5 Kural

Tek bir form dosyası her işi yapmayacak.

---

# 20) Shared ve site-specific ayrım kuralları

## 20.1 Shared olmalı, eğer:

* component yapısı aynıysa
* sadece metin / renk / spacing farkı varsa
* tekrar kullanımı yüksekse

## 20.2 Site-specific olmalı, eğer:

* conversion mantığı farklıysa
* CTA karakteri farklıysa
* içerik yoğunluğu ciddi değişiyorsa
* sektör bağlamı component yapısını değiştiriyorsa

## 20.3 Örnekler

### Shared

* buttons
* input fields
* accordion
* timeline
* pricing band cards

### Site-specific

* TR clinic hero
* global accounting hero
* global qualification CTA
* TR sector cards
* call vs brief comparison

---

# 21) docs ile kod ilişkisi

## 21.1 Temel kural

`docs/` klasörü üretim referansıdır.
Ama runtime’da kullanılmaz.

## 21.2 Amaç

Docs:

* karar hafızası
* ekip içi referans
* Cursor prompt dayanağı
  olur

## 21.3 Kural

Kod içindeki gerçek config, docs’tan bağımsız ama onunla uyumlu olmalı.
Docs doğrudan import edilen veri kaynağı yapılmayacak.

---

# 22) İlk faz klasör önceliği

## 22.1 Önce kurulacaklar

İlk aşamada şu klasörlerin iskeleti açılmalı:

* `app/`
* `components/shared/`
* `components/tr/`
* `components/global/`
* `content/`
* `config/`
* `lib/site/`
* `lib/validation/`
* `actions/forms/`
* `types/`

## 22.2 Sonra kurulacaklar

* `lib/analytics/`
* `actions/notifications/`
* `styles/themes.css`
* `public/diagrams/`
* `components/feedback/`

---

# 23) Önerilen ilk gerçek iskelet

## 23.1 MVP için pratik iskelet

```txt
wecahan-auto/
├─ app/
│  ├─ layout.tsx
│  ├─ globals.css
│  ├─ (center)/page.tsx
│  ├─ (tr)/page.tsx
│  ├─ (tr)/klinikler/page.tsx
│  ├─ (tr)/muhasebe-ofisleri/page.tsx
│  ├─ (tr)/paketler/page.tsx
│  ├─ (tr)/fiyatlandirma/page.tsx
│  ├─ (tr)/ornek-senaryolar/page.tsx
│  ├─ (tr)/iletisim/page.tsx
│  ├─ (global)/page.tsx
│  ├─ (global)/accounting-firms/page.tsx
│  ├─ (global)/services/page.tsx
│  ├─ (global)/pricing/page.tsx
│  ├─ (global)/use-cases/page.tsx
│  ├─ (global)/book-a-call/page.tsx
│  └─ (global)/contact/page.tsx
├─ components/
│  ├─ shared/
│  ├─ center/
│  ├─ tr/
│  └─ global/
├─ content/
│  ├─ center/
│  ├─ tr/
│  ├─ global/
│  └─ shared/
├─ config/
│  ├─ sites/
│  ├─ navigation/
│  ├─ footer/
│  ├─ metadata/
│  └─ cta/
├─ lib/
│  ├─ site/
│  ├─ forms/
│  ├─ validation/
│  ├─ metadata/
│  └─ analytics/
├─ actions/
│  └─ forms/
├─ types/
├─ public/
├─ styles/
└─ docs/
```

---

# 24) Kalite kontrol soruları

Her klasör ve yerleşim kararı için şu sorular sorulmalıdır:

1. Bu dosya gerçekten burada mı durmalı?
2. Aynı sorumluluğu taşıyan dosyalar tek yerde mi toplanmış?
3. UI ile iş mantığı gereksiz şekilde karışmış mı?
4. Shared ve site-specific ayrımı temiz mi?
5. Page dosyaları gereksiz şişmiş mi?
6. Content ve config koddan ayrılmış mı?
7. Bu yapı Cursor ile adım adım ilerlemeyi kolaylaştırıyor mu?

---

# 25) Sonuç

Bu belgeye göre WeCaHan Auto kod tabanı:

* tek Next.js uygulaması içinde
* hostname-aware site family mantığıyla
* shared + site-specific component ayrımıyla
* content, config, lib, actions ve types katmanları net ayrılmış biçimde
  kurulacaktır.

Bu yapı:

* kodlamayı hızlandırır
* bakım maliyetini düşürür
* dağılmayı önler
* sonraki teknik dosyalar için sağlam zemin oluşturur

Bu dosya, artık gerçek proje iskeletini oluşturmadan önce okunacak ana klasör mimarisi referansıdır.