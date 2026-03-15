# Global Use Cases Structure

## Belge amacı
Bu belge, `global.auto.wecahan.com/use-cases` sayfasının içerik ve section yapısını tanımlar.

Amaç:
- global tarafta gerçek case-study yerine structured workflow examples sunmak
- accounting firms ve benzer operational friction taşıyan yapılar için use-case mantığını netleştirmek
- “workflow thinking depth” göstermek
- discovery call ve workflow brief öncesinde güven üretmek
- broad agency hissine düşmeden, pratik çözüm kurgusu göstermek
- daha sonra tasarım, component ve kodlama işlerini kolaylaştırmak

Bu sayfa:
- sahte case study sayfası değildir
- uydurma başarı metrikleri taşımaz
- fake testimonial alanı değildir
- rastgele service example çöplüğü değildir

Bu sayfa, operational workflow örnekleri üzerinden güven üreten ve thinking depth gösteren global use-cases sayfasıdır.

---

# 1) Sayfanın temel rolü

## Rol
Global ziyaretçiye pratikte ne tür workflow yapıları düşünüldüğünü gösteren, güven ve somutluk sağlayan use-case sayfası.

## Ana hedef
Ziyaretçiye şu hissi vermek:
- bu ekip operational friction’ı gerçekten akış düzeyinde düşünüyor
- accounting firms tarafındaki problemler için sahici örnekler kurabiliyor
- use-case’ler generic service başlıklarından daha somut
- discovery öncesi “nasıl bir şey olabilir?” sorusuna cevap var

## Ana dönüşüm hedefi
- Send Workflow Brief
- Book a Discovery Call

## İkincil hedef
- kullanıcıyı Accounting Firms ve Pricing sayfalarına taşımak
- proof eksikliğini dürüst ama güçlü şekilde kapatmak
- workflow scope hayal etmeyi kolaylaştırmak

## Olmaması gerekenler
- uydurma company names
- fake quantified outcomes
- long story-style narrative bloat
- tool list dumping
- broad industry chaos
- generic “AI use case” gösterileri

---

# 2) Sayfa yapısı özeti

Use Cases sayfası şu ana section’lardan oluşur:

1. Header / Navbar
2. Hero
3. Why Use Cases Matter
4. Use Case Category Navigation
5. Accounting Firm Use Cases
6. Adjacent Operational Use Cases
7. What These Use Cases Actually Show
8. Fit / Adaptation Note
9. Qualification CTA Section
10. Footer

Bu sıra korunmalıdır.

Sebep:
- önce sayfanın ne olduğunu açıklarız
- sonra use-case mantığını meşrulaştırırız
- accounting firm örneklerini öne koyarız
- adjacent use-case’leri kontrollü biçimde ekleriz
- sonra bunların neyi temsil ettiğini netleştiririz
- en son discovery / brief aksiyonuna taşırız

---

# 3) Section 1 — Header / Navbar

## Rol
Kullanıcıya global site genelinde yön verir ve use-cases sayfasını site omurgasına bağlar.

## İçerik
- logo / wordmark
- Home
- Accounting Firms
- Services
- Pricing
- Use Cases
- Book a Call
- Contact
- ana CTA: Book a Discovery Call

## Davranış
- sticky olabilir
- sade ve temiz görünmeli
- mobilde sade hamburger menüye inmeli
- CTA görünür ama içeriği boğmayacak kadar kontrollü olmalı

---

# 4) Section 2 — Hero

## Rol
Sayfanın ne olduğunu ilk ekranda açıklar.

## Ziyaretçinin burada anlaması gereken
- bu sayfa gerçek case-study değil, structured workflow examples sunuyor
- amaç, nasıl düşündüğünüzü ve nasıl çözüm kurguladığınızı göstermek
- accounting-firm bağlamı merkezde
- kendi sürecine yakın örnekleri görebilir

## Başlık yönü
Başlık kısa, net ve proof-theater’dan uzak olmalı.

### Başlık yönü örnekleri
- Workflow examples for recurring operational friction
- Accounting firms için structured workflow use cases
- Practical use cases for onboarding, reminders, routing and visibility

## Alt başlık yönü
Bu sayfa, gerçek operational friction örnekleri üzerinden nasıl workflow katmanları düşündüğümüzü gösterir. Amaç, discovery öncesinde daha somut bir çerçeve sunmaktır.

## Hero CTA yapısı
### Ana CTA
- Send Workflow Brief

### İkincil CTA
- Book a Discovery Call
- Accounting Firms sayfasını Gör

## Görsel mantık
- use-case cards
- before / after process strips
- workflow step previews
- structured scenario tiles

## Çözmesi gereken itiraz
- bunlar gerçekten workflow tasarlayabiliyor mu, yoksa sadece hizmet başlığı mı satıyor?

---

# 5) Section 3 — Why Use Cases Matter

## Rol
Use-case yaklaşımını meşrulaştırır.

## Amaç
Sayfanın “neden case study değil de use-case?” mantığını profesyonel şekilde zemine oturtmak.

## Yapı
3 kısa kart veya kısa intro + 3 blok.

### Önerilen başlıklar
- They make scope more concrete
- They reveal workflow thinking
- They help you map your own friction

## Kart örneği
**They reveal workflow thinking**  
Service categories can stay abstract. Use cases show how real operational friction can be translated into a cleaner workflow structure.

## Neden önemli
Bu bölüm sayfayı “boş örnekler sayfası” olmaktan çıkarır.

## Çözmesi gereken itiraz
- gerçek case study yoksa bu sayfanın değeri ne?

---

# 6) Section 4 — Use Case Category Navigation

## Rol
Ziyaretçiye use-case’leri kontrollü şekilde gezme imkânı verir.

## Amaç
Accounting-firm örneklerini öne almak, ama gerekiyorsa adjacent use-case’lere de geçiş vermek.

## Yapı
- sekme yapısı
veya
- anchor navigation
veya
- segmented category switch

### Önerilen kategoriler
- Accounting Firm Use Cases
- Adjacent Operational Use Cases

## Not
Accounting Firm Use Cases varsayılan olarak ilk ve baskın kategori olmalıdır.

## Çözmesi gereken itiraz
- bu sayfada bana en yakın örneği nasıl hızlı bulacağım?

---

# 7) Section 5 — Accounting Firm Use Cases

## Rol
Accounting firms için ana use-case bloklarını sunar.

## Amaç
Ana sektörde workflow thinking depth göstermek.

## Yapı
3–4 ana use-case bloğu.

Her use-case şu formatta ilerlemeli:
- use case title
- context
- friction
- example workflow structure
- expected operational outcome
- best fit
- CTA

---

## 7.1 Use Case 1 — Client Intake & Onboarding Flow

### Context
Yeni client alımı sırasında bilgi toplama, eksik veri tamamlama ve iç görev yönlendirmesi parçalı ilerliyor.

### Friction
Onboarding standard değilse ekip her yeni client’ta yeniden aynı koordinasyon yükünü taşıyor.

### Example workflow structure
new client context  
→ intake information  
→ missing details follow-up  
→ internal routing  
→ ownership visibility  
→ onboarding readiness

### Expected operational outcome
- daha tutarlı onboarding
- daha az parçalı handoff
- daha net next-step visibility

### Best fit
- yeni client alan firms
- onboarding tarafı kişiden kişiye değişen ekipler
- internal coordination sürtünmesi yaşayan yapılar

### CTA
- Send Workflow Brief
- Book a Discovery Call

---

## 7.2 Use Case 2 — Missing Documents Follow-Up Flow

### Context
Gerekli belgeler zamanında gelmiyor ve ekip bunu kişisel eforla chase ediyor.

### Friction
Manual chasing bandwidth tüketiyor ve görünürlük eksikliği süreci daha da uzatıyor.

### Example workflow structure
document requirement  
→ reminder trigger  
→ follow-up sequence  
→ response / missing status  
→ team notification  
→ tracking layer

### Expected operational outcome
- daha düzenli follow-up
- eksik belge görünürlüğünün artması
- tekrar eden manual chasing yükünün azalması

### Best fit
- yoğun evrak takibi olan firms
- recurring document friction yaşayan ekipler
- onboarding veya ongoing work tarafında belge chase yükü yüksek yapılar

### CTA
- Send Workflow Brief

---

## 7.3 Use Case 3 — Recurring Reminder & Status Flow

### Context
Aynı tür bilgi veya cevap beklentileri tekrar tekrar ekip tarafından manuel yürütülüyor.

### Friction
Recurring reminder yapısı standard olmadığında işler kişisel takibe ve hafızaya kalıyor.

### Example workflow structure
recurring requirement  
→ first reminder  
→ no-response branch  
→ second follow-up  
→ status update  
→ visibility layer

### Expected operational outcome
- daha tutarlı recurring communication
- daha az kişisel takip yükü
- daha net process status visibility

### Best fit
- recurring admin friction yaşayan firms
- tekrarlayan client communication yükü yüksek ekipler

### CTA
- View Pricing Model
- Send Workflow Brief

---

## 7.4 Use Case 4 — Internal Task Routing & Visibility Flow

### Context
Bir işin kimde olduğu, hangi aşamada kaldığı ve neyin beklediği her zaman net görünmüyor.

### Friction
Ownership clarity eksik olduğunda süreçler büyüdükçe coordination maliyeti artıyor.

### Example workflow structure
workflow event  
→ task creation / routing  
→ ownership assignment  
→ status update  
→ internal visibility  
→ oversight view

### Expected operational outcome
- daha net ownership
- daha görünür handoff yapısı
- daha kontrollü recurring operations

### Best fit
- birden fazla kişiyle çalışan firms
- internal visibility problemi yaşayan ekipler
- recurring workflows’u daha net standardize etmek isteyen yapılar

### CTA
- Book a Discovery Call

---

# 8) Section 6 — Adjacent Operational Use Cases

## Rol
Accounting firms dışındaki ama aynı operational logic’e giren seçili örnekleri kontrollü şekilde gösterir.

## Amaç
Services sayfasındaki kontrollü genişliği proof benzeri use-case mantığıyla desteklemek.

## Yapı
2 veya 3 kısa use-case bloğu.

### Önemli not
Bu bölüm ana gövde olmayacak.  
Accounting-firm use-case’leri baskın kalmalı.

---

## 8.1 Use Case — Recurring Intake Coordination

### Context
Birden fazla kanaldan gelen taleplerin tek akışta toparlanması gerekiyor.

### Friction
Scattered intake ve inconsistent follow-up tekrar eden sürtünme yaratıyor.

### Example workflow structure
inbound request  
→ intake structure  
→ qualification layer  
→ routing  
→ visibility

### Expected operational outcome
- cleaner intake
- better handoff clarity
- less scattered follow-up

---

## 8.2 Use Case — Internal Status Tracking Layer

### Context
Ekip içinde tekrar eden operasyonel adımlar var ama hangi işin hangi aşamada olduğu net görünmüyor.

### Friction
Visibility eksikliği coordination maliyetini yükseltiyor.

### Example workflow structure
workflow stage  
→ status signal  
→ ownership layer  
→ oversight view  
→ next-step clarity

### Expected operational outcome
- better coordination
- clearer workflow state
- less reliance on manual memory

---

## 8.3 Use Case — Reminder-Based Process Discipline

### Context
Tekrarlayan bilgi / belge / aksiyon beklentileri manuel takip ediliyor.

### Friction
Aynı takip işlerinin sürekli yeniden üretilmesi ekip verimini düşürüyor.

### Example workflow structure
trigger  
→ reminder  
→ no-response branch  
→ escalation / visibility  
→ tracking

### Expected operational outcome
- less repetitive chasing
- better consistency
- cleaner operational rhythm

---

## Neden önemli
Bu bölüm, controlled service breadth’i use-case düzeyinde destekler.

## Çözmesi gereken itiraz
- accounting firm değilsek ama benzer workflow friction yaşıyorsak yine de bu ekip uygun olabilir mi?

---

# 9) Section 7 — What These Use Cases Actually Show

## Rol
Use-case’lerin neyi temsil ettiğini açıklar.

## Amaç
Bunların birebir template veya hazır product olmadığını netleştirmek.

## Yapı
3–4 kısa kart veya tek açıklama bloğu.

### Önerilen başlıklar
- These are workflow examples, not fixed templates
- Scope follows context
- Small starts are possible
- Primary fit still matters

## Kart örneği
**These are workflow examples, not fixed templates**  
Buradaki use-case’ler, tipik friction alanlarını somutlaştırmak için hazırlanmıştır. Final structure, real context and workflow priorities üzerinden şekillenir.

## Neden önemli
Bu bölüm olmazsa kullanıcı use-case’leri hazır ürün gibi okuyabilir.

## Çözmesi gereken itiraz
- bunlar birebir satın alınan paketler mi?
- bizim context biraz farklıysa ne olacak?

---

# 10) Section 8 — Fit / Adaptation Note

## Rol
Use-case’lerin hangi tip yapılara daha yakın olduğunu ve nasıl adapte edileceğini açıklar.

## Amaç
Yanlış beklentiyi ve yanlış okuma biçimini azaltmak.

## Yapı
İki blok.

### Bu use-case’ler size daha yakın olabilir, eğer:
- recurring operational friction yaşıyorsanız
- onboarding / reminders / routing / visibility tarafında net problem varsa
- small-to-defined scope ile başlamak istiyorsanız
- structured service sürecine açıksanız

### Bu use-case’ler birebir çözüm değildir, çünkü:
- team structure değişir
- tools değişir
- handoff mantığı değişir
- workflow priorities firmaya göre farklılaşır

## Neden önemli
Bu blok hem dürüstlük hem qualification açısından güçlüdür.

## Çözmesi gereken itiraz
- are these ready-made solutions?
- can this still apply if our workflow looks different?

---

# 11) Section 9 — Qualification CTA Section

## Rol
Sayfanın ana dönüşüm kapanışını verir.

## Amaç
Use-case’leri gören kullanıcıyı kısa workflow brief veya discovery call aksiyonuna taşımak.

## Yapı
- kısa başlık
- güven metni
- iki ana CTA
- küçük expectation note

## Başlık yönleri
- If one of these frictions sounds familiar, let’s map your context
- The next step is not a generic quote, but a clearer workflow context
- Share your workflow briefly, and we’ll help identify the sensible starting scope

## Alt metin yönü
Use-case’ler düşünce çerçevesini ve tipik friction alanlarını gösterir. Kısa bir workflow brief veya discovery call ile gerçek context üzerinden en doğru başlangıç noktasını netleştirebiliriz.

## Ana CTA
- Send Workflow Brief

## İkincil CTA
- Book a Discovery Call

## Mikro güven metinleri
- This is a scoped service process.
- Not every friction area needs the same implementation depth.
- Context comes before scope.

## Çözmesi gereken itiraz
- now what?
- should I book a call or send context first?

---

# 12) Section 10 — Footer

## Rol
Sayfayı tamamlanmış, profesyonel ve güvenilir hissettirmek.

## İçerik
- kısa marka açıklaması
- Accounting Firms
- Services
- Pricing
- Use Cases
- Book a Call
- Contact
- e-posta
- privacy
- terms

## Footer kısa açıklama yönü
Structured workflow examples and scoped operational automation services, with accounting firms as the primary fit.

---

# 13) Section sırası neden böyle?

## Sıra mantığı
1. sayfanın ne olduğunu açıklarız
2. use-case mantığını meşrulaştırırız
3. accounting firm use-case’lerini öne koyarız
4. adjacent örnekleri kontrollü şekilde ekleriz
5. bunların neyi temsil ettiğini açıklarız
6. adaptation / fit notunu koyarız
7. en son discovery / brief aksiyonuna taşırız

Bu akış sayesinde use-case sayfası hem güven üretir hem broad agency’ye kaymaz.

---

# 14) Sayfa içi CTA dağılımı

## Hero
- Send Workflow Brief
- Book a Discovery Call

## Use-case blokları sonunda
- Send Workflow Brief
- View Pricing Model
- Book a Discovery Call

## What These Use Cases Show sonrası
- Accounting Firms sayfasını Gör
- Services sayfasını Gör

## Final CTA
- Send Workflow Brief
- Book a Discovery Call

## Kural
Use-case içerikleri CTA gürültüsüyle bölünmeyecek.  
İçerik önce, aksiyon sonra.

---

# 15) Bu sayfa için gerekli ana component listesi

Muhtemel component ihtiyaçları:

- GlobalNavbar
- UseCasesHeroGlobal
- UseCasePurposeCards
- UseCaseCategoryNavigation
- UseCaseCardAccounting
- UseCaseCardAdjacent
- WorkflowStepStripGlobal
- UseCaseMeaningBlock
- FitAdaptationBlockGlobal
- QualificationCTASection
- GlobalFooter

---

# 16) Mobil davranış notları

## Mobilde önemli olanlar
- use-case kartları tek kolon akmalı
- workflow adımları kısa ve taranabilir olmalı
- category navigation sade olmalı
- CTA’lar kart içeriğini boğmamalı
- metin blokları kısa tutulmalı

## Mobilde kaçınılacaklar
- uzun yatay flow diagramlar
- aşırı yoğun açıklama kartları
- sıkışık grid yapıları
- ekranı işgal eden sticky CTA kalabalığı

---

# 17) Başarı sinyalleri

Bu sayfanın başarılı çalıştığını gösterecek sinyaller:
- Send Workflow Brief tıklamaları
- Book a Discovery Call tıklamaları
- Accounting Firms ve Pricing sayfalarına geçiş
- belirli use-case bloklarında scroll derinliği
- mobil bounce oranının dengeli kalması
- final CTA’ya ulaşım oranı

---

# 18) Sonuç

Bu belgeye göre `global.auto.wecahan.com/use-cases` sayfası:
- sahte case study kullanmadan güven üreten
- workflow thinking depth gösteren
- accounting firm use-case’lerini öne koyan
- controlled breadth’i proof benzeri şekilde destekleyen
- kullanıcıyı workflow brief veya discovery aksiyonuna hazırlayan
bir global use-cases sayfası olarak çalışacaktır.

Bu sayfanın gücü:
**structured proof + workflow depth + honest credibility**