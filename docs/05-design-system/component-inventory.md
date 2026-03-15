# Component Inventory

## Belge amacı
Bu belge, WeCaHan Auto site ailesinde kullanılacak UI component’lerin üretim envanterini çıkarır.

Amaç:
- hangi component’lerin gerçekten gerekli olduğunu netleştirmek
- shared ve site-specific component ayrımını yapmak
- MVP için kritik component’leri belirlemek
- sayfa bazlı kullanım alanlarını göstermek
- geliştirme sırasını kolaylaştırmak
- Cursor ile component bazlı kodlamayı düzenli hale getirmek

Bu belge:
- tasarım ilkelerini tekrar etmez
- doğrudan üretim ve planlama odaklıdır
- component sisteminin operasyonel haritasıdır

---

# 1) Envanter mantığı

## 1.1 Component sınıfları
Bu envanterde her component şu sınıflardan birine girer:
- Shared Core
- Shared Variant
- TR Specific
- Global Specific
- Center Specific
- Utility / Feedback

## 1.2 Öncelik sistemi
### P0
MVP için zorunlu component

### P1
MVP’yi ciddi güçlendiren ama P0 kadar çıplak omurga olmayan component

### P2
İkinci fazda geliştirilebilecek component

## 1.3 Kullanım mantığı
Her component için şu bilgiler tanımlanır:
- component adı
- rolü
- tipi
- kullanıldığı sayfalar
- MVP önceliği
- shared mı değil mi
- notlar

---

# 2) Shared Core Components

Bu bileşenler site ailesinin omurgasını taşır.  
İlk geliştirme dalgasında bunların büyük kısmı kurulmalıdır.

---

## 2.1 SiteShell

### Rol
Tüm sayfaların temel layout çatısı.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm siteler
- tüm sayfalar

### Öncelik
P0

### Not
Header, main content container ve footer spacing sistemini taşır.  
Temel layout mantığı burada kurulmalıdır.

---

## 2.2 SectionWrapper

### Rol
Section spacing, max-width ve responsive padding sistemini standartlaştırır.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm siteler
- tüm section’lar

### Öncelik
P0

### Not
Rastgele section spacing kaosunu önlemek için çok kritik.

---

## 2.3 SectionIntro

### Rol
Section başlığı + kısa açıklama yapısını standartlaştırır.

### Tip
Shared Core

### Kullanıldığı yerler
- merkez site
- TR site
- global site

### Öncelik
P0

### Not
Bazı section’larda kullanılmayabilir; ama sistemde bulunmalıdır.

---

## 2.4 PrimaryButton

### Rol
Ana CTA görünümü.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm siteler
- hero
- CTA section
- form submit
- navbar CTA

### Öncelik
P0

### Not
Renk varyantları site bazında değişebilir.

---

## 2.5 SecondaryButton

### Rol
İkincil aksiyon görünümü.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm siteler
- hero
- section CTA
- comparison block
- secondary navigation

### Öncelik
P0

---

## 2.6 TextLink / InlineLink

### Rol
Alt seviye navigation ve küçük CTA geçişleri.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm siteler
- proof blocks
- helper sections
- footer

### Öncelik
P0

---

## 2.7 CardBase

### Rol
Tüm kart sistemlerinin ortak temel stili.

### Tip
Shared Core

### Kullanıldığı yerler
- service card
- problem card
- benefit card
- scenario card
- pricing card
- fit block

### Öncelik
P0

### Not
Doğrudan son kullanıcıya tek başına görünmeyebilir; base component gibi davranabilir.

---

## 2.8 EyebrowLabel

### Rol
Küçük bağlam etiketi.

### Tip
Shared Core

### Kullanıldığı yerler
- hero
- section intro
- pricing blocks
- highlighted sections

### Öncelik
P1

---

## 2.9 ContentContainer

### Rol
Metin blokları ve section iç düzenlerini ortak container mantığına bağlar.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm sayfalar

### Öncelik
P0

---

# 3) Navigation Components

---

## 3.1 CenterNavbar

### Rol
Merkez sitenin üst navigasyonu.

### Tip
Center Specific

### Kullanıldığı yerler
- `auto.wecahan.com`
- `/`
- `/tr`
- `/en`

### Öncelik
P0

### Not
Language switch içerir.  
Satış baskısı düşük kalmalıdır.

---

## 3.2 TrNavbar

### Rol
TR sitenin üst navigasyonu.

### Tip
TR Specific

### Kullanıldığı yerler
- tüm TR sayfaları

### Öncelik
P0

### Not
WhatsApp / değerlendirme odaklı CTA taşıyabilir.

---

## 3.3 GlobalNavbar

### Rol
Global sitenin üst navigasyonu.

### Tip
Global Specific

### Kullanıldığı yerler
- tüm global sayfalar

### Öncelik
P0

### Not
Book a Discovery Call ana CTA’sını taşır.

---

## 3.4 MobileMenuDrawer

### Rol
Mobil menü yapısı.

### Tip
Shared Variant

### Kullanıldığı yerler
- tüm siteler
- mobil görünüm

### Öncelik
P0

### Not
İçerik varyasyonu site bazında değişir ama yapı ortak olabilir.

---

## 3.5 LanguageSwitch

### Rol
Merkez sitede dil geçişi.

### Tip
Center Specific

### Kullanıldığı yerler
- merkez navbar
- merkez footer

### Öncelik
P0

---

## 3.6 FooterCenter

### Rol
Merkez site footer’ı.

### Tip
Center Specific

### Kullanıldığı yerler
- merkez site

### Öncelik
P0

---

## 3.7 FooterTR

### Rol
TR site footer’ı.

### Tip
TR Specific

### Kullanıldığı yerler
- tüm TR sayfaları

### Öncelik
P0

---

## 3.8 FooterGlobal

### Rol
Global site footer’ı.

### Tip
Global Specific

### Kullanıldığı yerler
- tüm global sayfaları

### Öncelik
P0

---

# 4) Hero Components

---

## 4.1 HeroBlockCenter

### Rol
Merkez site hero yapısı.

### Tip
Center Specific

### Kullanıldığı yerler
- merkez home

### Öncelik
P0

### Not
Düşük baskılı CTA + sade görsel destek.

---

## 4.2 HeroBlockTR

### Rol
TR ana sayfa hero yapısı.

### Tip
TR Specific

### Kullanıldığı yerler
- TR home

### Öncelik
P0

### Not
WhatsApp + form / değerlendirme dengesi taşımalı.

---

## 4.3 HeroBlockClinic

### Rol
Klinikler sayfası hero.

### Tip
TR Specific

### Kullanıldığı yerler
- `/klinikler`

### Öncelik
P0

---

## 4.4 HeroBlockOffice

### Rol
Muhasebe ofisleri sayfası hero.

### Tip
TR Specific

### Kullanıldığı yerler
- `/muhasebe-ofisleri`

### Öncelik
P1

---

## 4.5 HeroBlockPackagesTR

### Rol
TR paketler sayfası hero.

### Tip
TR Specific

### Kullanıldığı yerler
- `/paketler`

### Öncelik
P1

---

## 4.6 HeroBlockPricingTR

### Rol
TR pricing sayfası hero.

### Tip
TR Specific

### Kullanıldığı yerler
- `/fiyatlandirma`

### Öncelik
P1

---

## 4.7 HeroBlockScenariosTR

### Rol
TR senaryolar sayfası hero.

### Tip
TR Specific

### Kullanıldığı yerler
- `/ornek-senaryolar`

### Öncelik
P1

---

## 4.8 HeroBlockContactTR

### Rol
TR contact hero.

### Tip
TR Specific

### Kullanıldığı yerler
- `/iletisim`

### Öncelik
P0

---

## 4.9 HeroBlockGlobal

### Rol
Global ana sayfa hero.

### Tip
Global Specific

### Kullanıldığı yerler
- global home

### Öncelik
P0

---

## 4.10 HeroBlockAccounting

### Rol
Accounting firms sayfası hero.

### Tip
Global Specific

### Kullanıldığı yerler
- `/accounting-firms`

### Öncelik
P0

---

## 4.11 HeroBlockServicesGlobal

### Rol
Global services hero.

### Tip
Global Specific

### Kullanıldığı yerler
- `/services`

### Öncelik
P1

---

## 4.12 HeroBlockPricingGlobal

### Rol
Global pricing hero.

### Tip
Global Specific

### Kullanıldığı yerler
- `/pricing`

### Öncelik
P1

---

## 4.13 HeroBlockUseCasesGlobal

### Rol
Global use-cases hero.

### Tip
Global Specific

### Kullanıldığı yerler
- `/use-cases`

### Öncelik
P1

---

## 4.14 HeroBlockBookCall

### Rol
Global book-a-call hero.

### Tip
Global Specific

### Kullanıldığı yerler
- `/book-a-call`

### Öncelik
P0

---

## 4.15 HeroBlockContactGlobal

### Rol
Global contact hero.

### Tip
Global Specific

### Kullanıldığı yerler
- `/contact`

### Öncelik
P1

---

# 5) Content Grid Components

---

## 5.1 ProblemGrid

### Rol
Problem / friction kartları grid’i.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR home
- Clinics
- Accounting Offices
- global home
- global accounting firms

### Öncelik
P0

### Not
İçerik ve ton siteye göre değişir ama grid mantığı ortak olabilir.

---

## 5.2 BenefitCardGrid

### Rol
Fayda kartları grid’i.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR home
- Clinics
- Offices
- global home
- global accounting

### Öncelik
P0

---

## 5.3 SectorCards

### Rol
TR ana sayfadaki sektör ayrımı.

### Tip
TR Specific

### Kullanıldığı yerler
- TR home

### Öncelik
P0

---

## 5.4 ServiceCategoryGrid

### Rol
Merkez ve global taraf için hizmet kategori kartları.

### Tip
Shared Variant

### Kullanıldığı yerler
- merkez home
- global services
- global home

### Öncelik
P1

---

## 5.5 ServicePillarGrid

### Rol
Global tarafta operational service pillars göstermek.

### Tip
Global Specific

### Kullanıldığı yerler
- global home
- accounting firms

### Öncelik
P0

---

# 6) Package and Scope Components

---

## 6.1 FlagshipPackageBlockTR

### Rol
TR ana ve dikey sayfalarda amiral paketi göstermek.

### Tip
TR Specific

### Kullanıldığı yerler
- TR home
- Clinics
- Offices

### Öncelik
P0

---

## 6.2 FlagshipPackageBlockGlobal

### Rol
Global tarafta ana paketi göstermek.

### Tip
Global Specific

### Kullanıldığı yerler
- global accounting firms

### Öncelik
P0

---

## 6.3 SetupLevelCards

### Rol
Kurulum seviyelerini göstermek.

### Tip
Shared Variant

### Kullanıldığı yerler
- Clinics
- Offices
- TR packages
- global accounting firms
- global pricing

### Öncelik
P0

---

## 6.4 MaintenanceLevelCards

### Rol
Bakım seviyelerini göstermek.

### Tip
Shared Variant

### Kullanıldığı yerler
- Clinics
- Offices
- TR packages
- global accounting firms
- global pricing

### Öncelik
P0

---

## 6.5 IncludedExcludedSplit

### Rol
Ne var / ne yok ayrımı.

### Tip
Shared Variant

### Kullanıldığı yerler
- Clinics
- Offices
- TR packages
- global accounting firms

### Öncelik
P1

---

## 6.6 DeliverablesAndClientContribution

### Rol
Teslim çıktısı ve müşteri katkısını göstermek.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR packages
- gerektiğinde global pricing veya contact yan bloklarında türev mantıkla

### Öncelik
P1

---

# 7) Pricing Components

---

## 7.1 PricingModelOverview

### Rol
Pricing katmanlarını özetlemek.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR pricing
- global pricing

### Öncelik
P0

---

## 7.2 AnalysisPricingBlock

### Rol
Analiz / workflow review pricing mantığını göstermek.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR pricing
- global pricing

### Öncelik
P1

---

## 7.3 PricingBandCards

### Rol
Kurulum bandları veya bakım bandları için tekrar kullanılabilir kart ailesi.

### Tip
Shared Core

### Kullanıldığı yerler
- TR pricing
- global pricing
- preview section’lar

### Öncelik
P0

---

## 7.4 AdditionalDevelopmentBlock

### Rol
Ek geliştirme mantığını açıklamak.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR pricing
- global pricing
- TR packages

### Öncelik
P1

---

## 7.5 PriceFactorsGrid

### Rol
Fiyatı etkileyen faktörleri göstermek.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR pricing
- global pricing

### Öncelik
P1

---

## 7.6 ScopeComparisonCards

### Rol
Örnek kapsam farklarını göstermek.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR pricing
- global pricing

### Öncelik
P1

---

## 7.7 PricingPreviewBands

### Rol
Ana sayfalardaki kısa pricing preview bölümü.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR home
- global home

### Öncelik
P1

---

# 8) Scenario / Use Case Components

---

## 8.1 ScenarioCategoryTabsTR

### Rol
TR örnek senaryolar sayfasında kategori geçişi.

### Tip
TR Specific

### Kullanıldığı yerler
- `/ornek-senaryolar`

### Öncelik
P1

---

## 8.2 ScenarioCardTR

### Rol
TR senaryo kartı.

### Tip
TR Specific

### Kullanıldığı yerler
- TR senaryolar sayfası
- teaser alanları

### Öncelik
P1

---

## 8.3 WorkflowExampleBlock

### Rol
Örnek akış adımlarını göstermek.

### Tip
Shared Variant

### Kullanıldığı yerler
- merkez home
- Clinics
- Offices
- global accounting
- use-cases
- pricing / proof alanları

### Öncelik
P0

---

## 8.4 UseCaseCategoryNavigationGlobal

### Rol
Global use-cases sayfasında kategori geçişi.

### Tip
Global Specific

### Kullanıldığı yerler
- `/use-cases`

### Öncelik
P1

---

## 8.5 UseCaseCardGlobal

### Rol
Global use-case kartı.

### Tip
Global Specific

### Kullanıldığı yerler
- `/use-cases`
- teaser alanları

### Öncelik
P1

---

## 8.6 UseCaseTeaserCards

### Rol
Ana sayfa ve services gibi yerlerde kısa proof köprüsü.

### Tip
Shared Variant

### Kullanıldığı yerler
- merkez home
- global home
- global services
- TR ana / senaryo teaser alanları benzer mantıkla

### Öncelik
P1

---

# 9) Process / Timeline Components

---

## 9.1 ProcessTimeline

### Rol
How We Work ve benzeri süreç akışlarını göstermek.

### Tip
Shared Core

### Kullanıldığı yerler
- merkez home
- TR home
- global home
- packages pages

### Öncelik
P0

---

## 9.2 NextStepsTimeline

### Rol
Form sonrası veya call sonrası ne olacağını göstermek.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR contact
- global contact
- global book-a-call

### Öncelik
P1

---

## 9.3 CallCoverageSteps

### Rol
Discovery call’da nelerin konuşulacağını göstermek.

### Tip
Global Specific

### Kullanıldığı yerler
- global book-a-call

### Öncelik
P1

---

## 9.4 PostCallTimeline

### Rol
Call sonrası süreç akışı.

### Tip
Global Specific

### Kullanıldığı yerler
- global book-a-call

### Öncelik
P1

---

# 10) Form and Contact Components

---

## 10.1 ContactChannelCardsTR

### Rol
TR iletişim yollarını göstermek.

### Tip
TR Specific

### Kullanıldığı yerler
- TR contact

### Öncelik
P1

---

## 10.2 MainLeadFormTR

### Rol
TR ana lead toplama formu.

### Tip
TR Specific

### Kullanıldığı yerler
- TR contact
- gerektiğinde CTA block içinde kısaltılmış varyant

### Öncelik
P0

---

## 10.3 ContactPathCardsGlobal

### Rol
Global tarafta brief / call / email yollarını göstermek.

### Tip
Global Specific

### Kullanıldığı yerler
- global contact

### Öncelik
P1

---

## 10.4 WorkflowBriefFormGlobal

### Rol
Global workflow brief formu.

### Tip
Global Specific

### Kullanıldığı yerler
- global contact
- belki modal / inline variant ile başka alanlarda

### Öncelik
P0

---

## 10.5 MiniBriefFormCenter

### Rol
Merkez sitedeki kısa brief formu.

### Tip
Center Specific

### Kullanıldığı yerler
- merkez home

### Öncelik
P0

---

## 10.6 FormFieldTextInput

### Rol
Standart text input.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm formlar

### Öncelik
P0

---

## 10.7 FormFieldSelect

### Rol
Standart select field.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm formlar

### Öncelik
P0

---

## 10.8 FormFieldTextarea

### Rol
Workflow / süreç özeti alanı.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm form türevleri

### Öncelik
P0

---

## 10.9 FormHelperText

### Rol
Alan altı küçük açıklama.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm formlar

### Öncelik
P1

---

## 10.10 FormErrorText

### Rol
Hata gösterimi.

### Tip
Shared Core

### Kullanıldığı yerler
- tüm formlar

### Öncelik
P0

---

## 10.11 FormSuccessState

### Rol
Başarı ekranı / başarı bloğu.

### Tip
Shared Variant

### Kullanıldığı yerler
- merkez brief
- TR contact
- global contact

### Öncelik
P0

---

# 11) Qualification Components

---

## 11.1 FitNotFitBlock

### Rol
Uygun / uygun olmayan kullanıcı profili ayrımı.

### Tip
Shared Variant

### Kullanıldığı yerler
- Clinics
- Offices
- TR packages
- global accounting
- global services
- global book-a-call
- global contact

### Öncelik
P1

---

## 11.2 CallVsBriefComparison

### Rol
Call ile workflow brief farkını açıklamak.

### Tip
Global Specific

### Kullanıldığı yerler
- global book-a-call
- global contact

### Öncelik
P1

---

## 11.3 ContactVsCallComparison

### Rol
Global contact sayfasında doğru yol ayrımı.

### Tip
Global Specific

### Kullanıldığı yerler
- global contact

### Öncelik
P1

---

## 11.4 TrustNoteStrip

### Rol
Kısa güven notları / scoped service vurguları.

### Tip
Shared Variant

### Kullanıldığı yerler
- pricing
- forms
- CTA sections
- qualification blocks

### Öncelik
P1

---

# 12) CTA Components

---

## 12.1 CTASectionCenter

### Rol
Merkez sitedeki düşük baskılı kapanış alanı.

### Tip
Center Specific

### Kullanıldığı yerler
- merkez home

### Öncelik
P0

---

## 12.2 CTASectionTR

### Rol
TR tarafta form / WhatsApp dengesini taşıyan CTA alanı.

### Tip
TR Specific

### Kullanıldığı yerler
- TR home
- Clinics
- Offices
- Packages
- Pricing
- Scenarios

### Öncelik
P0

---

## 12.3 QualificationCTASectionGlobal

### Rol
Global tarafta discovery / brief odaklı kapanış alanı.

### Tip
Global Specific

### Kullanıldığı yerler
- global home
- accounting firms
- services
- pricing
- use-cases

### Öncelik
P0

---

## 12.4 SecondaryCTASectionGlobal

### Rol
Book-a-call ve contact gibi sayfalarda alternatif aksiyon alanı.

### Tip
Global Specific

### Kullanıldığı yerler
- global book-a-call
- global contact

### Öncelik
P1

---

# 13) Utility / Feedback Components

---

## 13.1 StickyWhatsAppCTA

### Rol
TR tarafta mobil / uzun sayfalarda hızlı temas butonu.

### Tip
TR Specific

### Kullanıldığı yerler
- TR home
- Clinics
- bazı TR sayfalarında seçili kullanım

### Öncelik
P1

### Not
Fazla agresif kullanılmamalı.

---

## 13.2 FAQAccordion

### Rol
SSS blokları.

### Tip
Shared Variant

### Kullanıldığı yerler
- TR pricing
- TR contact
- global pricing
- global contact

### Öncelik
P1

---

## 13.3 EmptyStateBlock

### Rol
Boş filtre / sonuç yok durumları.

### Tip
Shared Core

### Kullanıldığı yerler
- senaryolar
- use-cases
- filtreli içerik alanları

### Öncelik
P2

---

## 13.4 HighlightStrip

### Rol
Kısa vurgulu bilgi bandı.

### Tip
Shared Variant

### Kullanıldığı yerler
- process overview
- trust notes
- hero altı kısa vurgu alanları

### Öncelik
P2

---

# 14) Page-to-component mapping özeti

## 14.1 Merkez home
Kritik component’ler:
- CenterNavbar
- HeroBlockCenter
- ServiceCategoryGrid
- ProcessTimeline
- WorkflowExampleBlock
- UseCaseTeaserCards
- MiniBriefFormCenter veya CTASectionCenter
- FooterCenter

## 14.2 TR home
Kritik component’ler:
- TrNavbar
- HeroBlockTR
- ProblemGrid
- SectorCards
- FlagshipPackageBlockTR
- ProcessTimeline
- PricingPreviewBands
- CTASectionTR
- FooterTR

## 14.3 TR Clinics
Kritik component’ler:
- HeroBlockClinic
- ProblemGrid
- BenefitCardGrid
- FlagshipPackageBlockTR
- Solution module kartları
- SetupLevelCards
- MaintenanceLevelCards
- IncludedExcludedSplit
- WorkflowExampleBlock
- Pricing preview mantığı
- FitNotFitBlock
- CTASectionTR

## 14.4 TR Offices
Kritik component’ler:
- HeroBlockOffice
- ProblemGrid
- BenefitCardGrid
- FlagshipPackageBlockTR
- Solution module kartları
- SetupLevelCards
- MaintenanceLevelCards
- IncludedExcludedSplit
- WorkflowExampleBlock
- FitNotFitBlock
- CTASectionTR

## 14.5 TR Packages
Kritik component’ler:
- HeroBlockPackagesTR
- ProcessTimeline
- Analysis package block
- SetupLevelCards
- MaintenanceLevelCards
- AdditionalDevelopmentBlock
- IncludedExcludedSplit
- DeliverablesAndClientContribution
- FitNotFitBlock
- CTASectionTR

## 14.6 TR Pricing
Kritik component’ler:
- HeroBlockPricingTR
- PricingModelOverview
- AnalysisPricingBlock
- PricingBandCards
- AdditionalDevelopmentBlock
- PriceFactorsGrid
- ScopeComparisonCards
- FAQAccordion
- CTASectionTR

## 14.7 TR Scenarios
Kritik component’ler:
- HeroBlockScenariosTR
- ScenarioCategoryTabsTR
- ScenarioCardTR
- WorkflowExampleBlock
- FitNotFit benzeri adaptation block
- CTASectionTR

## 14.8 TR Contact
Kritik component’ler:
- HeroBlockContactTR
- ContactChannelCardsTR
- MainLeadFormTR
- NextStepsTimeline
- FitReminderBlock
- FAQAccordion
- Secondary contact block
- FormSuccessState

## 14.9 Global Home
Kritik component’ler:
- GlobalNavbar
- HeroBlockGlobal
- ProblemGrid
- ServicePillarGrid
- BenefitCardGrid
- ProcessTimeline
- UseCaseTeaserCards
- PricingPreviewBands
- QualificationCTASection
- FooterGlobal

## 14.10 Global Accounting Firms
Kritik component’ler:
- HeroBlockAccounting
- ProblemGrid
- BenefitCardGrid
- FlagshipPackageBlockGlobal
- Solution modules
- SetupLevelCards
- MaintenanceLevelCards
- IncludedExcludedSplit
- WorkflowExampleBlock
- PricingLogicPreviewAccounting
- FitNotFitBlock
- QualificationCTASection

## 14.11 Global Services
Kritik component’ler:
- HeroBlockServicesGlobal
- ServiceMeaningCards
- CoreServiceCategoryGrid
- PrimaryFocusHighlight
- ExtendedServiceCards
- ProcessTimeline veya delivery model strip
- UseCaseBridgeCards
- PricingBridge
- FitNotFitBlock
- QualificationCTASection

## 14.12 Global Pricing
Kritik component’ler:
- HeroBlockPricingGlobal
- PricingModelOverview
- AnalysisPricingBlock
- PricingBandCards
- AdditionalDevelopmentBlock
- ScopeAndPriceFactorsGrid
- ScopeComparisonCards
- FAQAccordion
- QualificationCTASection

## 14.13 Global Use Cases
Kritik component’ler:
- HeroBlockUseCasesGlobal
- UseCasePurposeCards
- UseCaseCategoryNavigationGlobal
- UseCaseCardGlobal
- WorkflowStepStripGlobal
- UseCaseMeaningBlock
- FitAdaptationBlockGlobal
- QualificationCTASection

## 14.14 Global Book a Call
Kritik component’ler:
- HeroBlockBookCall
- CallPurposeCards
- FitProfileCards
- NotFitCards
- CallCoverageSteps
- PostCallTimeline
- CallVsBriefComparison
- SchedulingEmbedSection
- SecondaryCTASectionGlobal

## 14.15 Global Contact
Kritik component’ler:
- HeroBlockContactGlobal
- ContactPathCardsGlobal
- WorkflowBriefFormGlobal
- NextStepsTimeline
- ContactVsCallComparison
- FitReminderBlockGlobal
- FAQAccordion
- SecondaryCTASectionGlobal
- FormSuccessState

---

# 15) MVP build order önerisi

## 15.1 İlk dalga — Foundation
Önce yapılacak component’ler:
- SiteShell
- SectionWrapper
- ContentContainer
- PrimaryButton
- SecondaryButton
- CardBase
- Form field ailesi
- Navbar’lar
- Footer’lar

## 15.2 İkinci dalga — Core conversion
Sonra:
- Hero block ailesi
- ProblemGrid
- BenefitCardGrid
- ProcessTimeline
- CTA section ailesi
- MainLeadFormTR
- WorkflowBriefFormGlobal
- FormSuccessState

## 15.3 Üçüncü dalga — Structured sales
Sonra:
- FlagshipPackageBlock
- SetupLevelCards
- MaintenanceLevelCards
- PricingModelOverview
- PricingBandCards
- FitNotFitBlock
- WorkflowExampleBlock

## 15.4 Dördüncü dalga — Proof and qualification
Sonra:
- Scenario / use-case card sistemleri
- FAQAccordion
- CallVsBriefComparison
- ContactVsCallComparison
- Scheduling section
- Use-case navigation

## 15.5 Beşinci dalga — nice-to-have polish
En son:
- EmptyStateBlock
- HighlightStrip
- küçük helper component’ler
- advanced bridge card’lar

---

# 16) Shared vs site-specific karar kuralları

## 16.1 Shared olmalı, eğer:
- aynı bilgi tipi birden fazla sitede benzer yapıyla gösteriliyorsa
- sadece renk / spacing / copy yoğunluğu değişiyorsa
- temel layout aynıysa

## 16.2 Site-specific olmalı, eğer:
- CTA mantığı farklıysa
- bilgi yoğunluğu ciddi biçimde değişiyorsa
- sektör bağlamı doğrudan component yapısını değiştiriyorsa
- conversion psikolojisi farklıysa

## 16.3 Örnekler
### Shared olabilecekler
- PricingBandCards
- SetupLevelCards
- FormFieldTextInput
- FAQAccordion
- ProcessTimeline

### Site-specific kalması muhtemel olanlar
- HeroBlockClinic
- HeroBlockAccounting
- CTASectionTR
- QualificationCTASectionGlobal
- CallVsBriefComparison
- SectorCards

---

# 17) Component üretiminde kaçınılacak hatalar

## 17.1 Aynı iş için iki component üretmek
Örnek:
- `PricingCard`
- `PriceCard`
- `PricingTierCard`

aynı şeyi yapıyorsa bu kötü.

## 17.2 Component’i gereğinden fazla akıllı yapmak
Her şeyi props’la çözmeye çalışıp component’i canavara çevirmek kötü fikirdir.

## 17.3 Sırf reuse için bağlamı öldürmek
Her component’i her yerde kullanacağım diye bağlamı bozmak da kötü fikirdir.

## 17.4 Site-specific olması gereken şeyi zorla shared yapmak
Bu da ton ve conversion farkını öldürür.

---

# 18) Kalite kontrol soruları

Her component envanter girdisi için şu sorular sorulmalıdır:

1. Bu component gerçekten gerekli mi?
2. Shared olması mantıklı mı?
3. Sadece bu sayfa için yazılmalı mı?
4. MVP için şart mı?
5. Aynı işi yapan başka bir component var mı?
6. Bu component sayfa yapısında kritik bir boşluğu dolduruyor mu?
7. Mobil davranışı önden düşünülmüş mü?

---

# 19) Sonuç

Bu belgeye göre component sistemi:
- üretim odaklı envantere dökülmüş,
- shared ve site-specific olarak ayrılmış,
- MVP önceliği belirlenmiş,
- sayfa bazlı kullanımı netleşmiş
bir yapıdadır.

Bu dosya, artık tasarım prensibinden çıkıp gerçek React / Next.js component planına geçiş için ana referans olacaktır.