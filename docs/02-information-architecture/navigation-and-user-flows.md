# Navigation & User Flows

## Belge amacı
Bu belge, WeCaHan Auto site ailesindeki kullanıcı akışlarını tanımlar.

Amaç:
- her siteye gelen ziyaretçinin hangi giriş noktasından geleceğini düşünmek
- hangi sayfaya düşeceğini ve oradan nereye ilerleyeceğini netleştirmek
- her CTA'nın hangi davranışa hizmet ettiğini belirlemek
- hangi sayfanın hangi itirazı kırdığını tanımlamak
- form, WhatsApp ve call akışlarını disiplinli hale getirmek

Bu belge; tasarım, sayfa kurgusu, CTA yerleşimi, form mimarisi ve analitik event planı için temel oluşturur.

---

# 1) Genel akış ilkeleri

## 1.1 Her ziyaretçi ana sayfadan başlamaz
Bu proje üç farklı pazara hitap ettiği için kullanıcılar farklı giriş noktalarından gelebilir:
- direkt URL
- Google araması
- yönlendirme / tavsiye
- sosyal medya
- WhatsApp linki
- teklif / mesaj içindeki link
- içerik veya örnek senaryo bağlantısı

Bu yüzden sadece “navbar akışı” düşünülmeyecek.  
Her önemli sayfa, bağımsız giriş sayfası gibi davranabilmelidir.

## 1.2 Her sayfanın bir sonraki adımı net olmalıdır
Ziyaretçi şunu asla yaşamamalı:
- bilgi var ama ne yapacağım belli değil
- CTA var ama neden tıklayayım belli değil
- sayfa güzel ama kapanış aksiyonu zayıf

Her sayfada:
- ana CTA
- ikincil CTA
- düşük baskılı fallback iletişim yolu
bulunmalıdır.

## 1.3 CTA’lar site rolüne göre değişir
- merkez site → iletişim / brief
- TR site → WhatsApp / form / demo
- global site → discovery call / workflow brief

Bu dağılım korunacaktır.

## 1.4 Her akış bir itiraz kırmalıdır
Kullanıcı akışı sadece gezinme değildir.  
Akışın görevi, ziyaretçinin kafasındaki itirazları sırayla azaltmaktır.

Tipik itirazlar:
- Bunlar tam olarak ne yapıyor?
- Bizim sektörü biliyorlar mı?
- Bize uygun mu?
- Fiyat mantığı nasıl?
- Çok teknik / karışık mı?
- Sonraki adım ne?
- Bizimle çalışmak için ciddi bir süreçleri var mı?

---

# 2) auto.wecahan.com kullanıcı akışları

## 2.1 Merkez sitenin temel rolü
Merkez site satış kapatma değil, marka çerçevesi kurma ve ilk güven oluşturma görevi taşır.

## 2.2 Olası giriş kaynakları
- markayı ilk kez duyan biri
- tavsiye ile gelen kişi
- e-posta imzasından gelen kişi
- kartvizit / profil linkinden gelen kişi
- genel Google araması
- “wecahan auto” araması
- işletme otomasyonu gibi daha genel aramalar

## 2.3 Ana kullanıcı niyeti
- ne yaptığınızı anlamak
- markanın ciddi olup olmadığını görmek
- iletişim kurmaya değer mi diye bakmak

---

## 2.4 Merkez site ana akış

### Akış 1 — Genel ziyaretçi → anlama → iletişim
Home  
→ What We Automate  
→ How We Work  
→ Example Workflows  
→ Contact block  
→ brief submission / email contact

**Amaç**  
Ziyaretçi işi kısa sürede anlar ve düşük baskılı şekilde iletişime geçer.

**Kırdığı itirazlar**
- bunlar ne yapıyor?
- bir sistemleri var mı?
- gelişigüzel mi çalışıyorlar?

**Ana CTA**
- İletişime Geç
- Kısa Brief Bırak

---

## 2.5 Merkez site ikincil akışlar

### Akış 2 — İlk izlenim → güven → sonra çıkış
Home  
→ kısa değerlendirme  
→ footer legal / contact  
→ çıkış

Bu kötü akış değildir.  
Merkez site her ziyaretçiden anında dönüş almak zorunda değildir.  
Bazı ziyaretçiler sadece güven çerçevesi görür ve sonra başka kanaldan döner.

### Akış 3 — Dil seçimi
Root veya landing  
→ `/tr` veya `/en`  
→ aynı içerik mantığının dil bazlı versiyonu

Bu akışta kullanıcıyı otomatik dil yönlendirmesiyle zıplatmak yerine, temiz ve kontrollü dil geçişi verilecektir.

---

## 2.6 Merkez sitede CTA mantığı

### Ana CTA
- İletişime Geç
- Kısa Brief Bırak

### İkincil CTA
- E-posta ile Ulaş
- Sürecini Kısaca Anlat

### Olmaması gereken CTA
- WhatsApp ile Konuş
- Book a Discovery Call
- TR paketlerini incele
- Global accounting için buraya git

Merkez site vitrindir, dağıtım paneli değildir.

---

## 2.7 Merkez sitede çıkıştan önce çözülmesi gereken sorular
Ziyaretçi ayrılmadan önce şu sorulara cevap bulmuş olmalı:
- bu ekip hangi işleri yapıyor?
- nasıl çalışıyor?
- genel olarak kimlere uygun?
- iletişim kurarsam saçma bir yere mi yazmış olurum?

---

# 3) tr.auto.wecahan.com kullanıcı akışları

## 3.1 TR sitenin temel rolü
TR sitesi, doğru ziyaretçiyi sıcak ve pratik şekilde talebe dönüştürür.

## 3.2 Olası giriş kaynakları
- doğrudan link
- WhatsApp paylaşımı
- klinik odaklı reklam / outreach
- Google araması
- “klinik otomasyonu”, “randevu takip sistemi”, “whatsapp lead takibi” vb. niyetli girişler
- network / tavsiye

## 3.3 Ana kullanıcı niyetleri
- bize uygun mu?
- klinik tarafını gerçekten biliyor musunuz?
- fiyat kabaca nasıl?
- size kolay ulaşabiliyor muyum?
- bu iş karışık mı?

---

## 3.4 TR ana akış 1 — Genel ziyaretçi → sektör seçimi → CTA

Ana Sayfa  
→ Klinikler veya Muhasebe Ofisleri  
→ paket / süreç / örnek senaryo  
→ iletişim / WhatsApp / form

**Amaç**  
Ana sayfa kullanıcıyı doğru dikeye taşır.

**Kırdığı itirazlar**
- bize hitap ediyor musunuz?
- bizim işi biliyor musunuz?

**Ana CTA**
- WhatsApp ile Konuş

---

## 3.5 TR ana akış 2 — Klinik ziyaretçisi → güven → iletişim

`/klinikler`  
→ problem blokları  
→ çözüm paketleri  
→ ne var / ne yok  
→ kurulum seviyeleri  
→ örnek akış  
→ fiyat mantığına kısa geçiş  
→ WhatsApp / form

**Amaç**  
Klinik sahibi veya yönetici, kendisini doğru sayfada hissetsin ve hızlı aksiyona geçsin.

**Kırdığı itirazlar**
- bunlar kliniği anlıyor mu?
- sadece teknoloji anlatıp geçiyorlar mı?
- ne yapacakları net mi?
- bizim gibi yapılar için uygun mu?

**Ana CTA**
- WhatsApp ile Konuş

**İkincil CTA**
- Sürecini Anlat
- Demo Talep Et

---

## 3.6 TR ana akış 3 — Muhasebe ofisi ziyaretçisi → değerlendirme → form

`/muhasebe-ofisleri`  
→ problem blokları  
→ süreç çözümleri  
→ paket mantığı  
→ örnek senaryolar  
→ iletişim formu

**Amaç**  
Bu profilin daha sakin ve düzen odaklı karar verme yapısına uygun akış kurmak.

**Kırdığı itirazlar**
- bize göre mi?
- süreç bozulur mu?
- karmaşık bir sistem mi?
- sadece klinik ağırlıklı mı çalışıyorsunuz?

**Ana CTA**
- Form Gönder

**İkincil CTA**
- Kısa Değerlendirme Al

---

## 3.7 TR ana akış 4 — Fiyat odaklı ziyaretçi → fiyat mantığı → iletişim

`/fiyatlandirma`  
→ analiz / kurulum / bakım bantları  
→ fiyatı etkileyen unsurlar  
→ kapsam mantığı  
→ örnek seviye farkları  
→ WhatsApp / form

**Amaç**  
“Fiyat belli değilse güvensiz” itirazını yumuşatmak.

**Kırdığı itirazlar**
- neye göre fiyat çıkıyor?
- çok mu pahalı?
- her şeye ayrı mı ücret var?
- önce bir fikir edinebilir miyim?

**Ana CTA**
- Kapsamını Anlat
- WhatsApp ile Konuş

---

## 3.8 TR ana akış 5 — Güven arayan ziyaretçi → örnek senaryo → talep

`/ornek-senaryolar`  
→ örnek klinik akışı  
→ örnek muhasebe ofisi akışı  
→ before / after mantığı  
→ benzer sürecini anlat CTA’sı

**Amaç**  
Gerçek referans olmadan uzmanlık ve düşünülmüş çözüm hissi vermek.

**Kırdığı itirazlar**
- bunlar sadece laf mı söylüyor?
- gerçekten nasıl bir şey kurulacağını biliyorlar mı?

**Ana CTA**
- Benzer Sürecimi Anlat
- WhatsApp ile Konuş

---

## 3.9 TR ana akış 6 — Doğrudan sıcak lead → WhatsApp

Ana Sayfa / Klinikler / Fiyatlandırma  
→ sticky WhatsApp CTA  
→ WhatsApp görüşmesi  
→ ön değerlendirme  
→ uygun ise form / analiz / teklif

**Amaç**  
TR pazardaki en hızlı dönüş kanalını doğal şekilde kullanmak.

**Risk**
Aşırı WhatsApp baskısı siteyi ucuz gösterebilir.

**Çözüm**
WhatsApp CTA güçlü olacak ama tek yüz olmayacak.  
Form ve demo opsiyonu da her zaman görünür kalacak.

---

## 3.10 TR sitede sayfa bazlı itiraz haritası

### Ana Sayfa
İtiraz: “Bize hitap ediyor musunuz?”  
Cevap: Dikeyleri ve ana sorunları net göster.

### Klinikler
İtiraz: “Klinik süreçlerini biliyor musunuz?”  
Cevap: Lead, WhatsApp, randevu, no-show, takip dili.

### Muhasebe Ofisleri
İtiraz: “Bizim tekrar eden iş yükümüzü anlıyor musunuz?”  
Cevap: Evrak chase, hatırlatma, görev görünürlüğü.

### Paketler
İtiraz: “Ne aldığımı anlayabilecek miyim?”  
Cevap: Ne var / ne yok / teslim çıktısı.

### Fiyatlandırma
İtiraz: “Fiyat yapısı bulanık mı?”  
Cevap: Bantlar + kapsam değişkenleri.

### Örnek Senaryolar
İtiraz: “Bu iş pratiğe dökülebiliyor mu?”  
Cevap: Örnek akışlar ve kullanım kurguları.

### İletişim
İtiraz: “Size ulaşmak zor mu?”  
Cevap: Temiz, kısa, güvenli temas.

---

# 4) global.auto.wecahan.com kullanıcı akışları

## 4.1 Global sitenin temel rolü
Global site, doğru accounting firm lead’ini daha ciddi ve filtreli biçimde discovery sürecine taşır.

## 4.2 Olası giriş kaynakları
- outbound outreach
- LinkedIn / email links
- Google araması
- accounting workflow problem aramaları
- referral traffic
- direct link from proposal or intro message

## 4.3 Ana kullanıcı niyetleri
- do these people understand accounting firm workflows?
- is this a real process or vague agency service?
- what exactly do they solve?
- what happens if I book a call?
- is pricing structured or random?

---

## 4.4 Global ana akış 1 — Home → accounting fit → discovery call

Home  
→ accounting pain blocks  
→ service pillars  
→ process / implementation  
→ proof/use-case strip  
→ Book a Call

**Amaç**  
Doğru ziyaretçiyi hızlıca qualification hissine sokmak.

**Kırdığı itirazlar**
- generic agency misiniz?
- accounting firms’i gerçekten anlıyor musunuz?
- process’iniz net mi?

**Ana CTA**
- Book a Discovery Call

---

## 4.5 Global ana akış 2 — Accounting Firms landing → scoped interest → discovery

`/accounting-firms`  
→ firm-specific problems  
→ workflow solutions  
→ implementation model  
→ use-case snapshots  
→ pricing hint  
→ Book a Call / Send Workflow Brief

**Amaç**  
Accounting firm ziyaretçisi için en güçlü dönüşüm sayfasını yaratmak.

**Kırdığı itirazlar**
- domain knowledge var mı?
- onboarding/document chase düzeyinde anlıyorlar mı?
- next step net mi?

**Ana CTA**
- Book a Discovery Call

**İkincil CTA**
- Send Workflow Brief

---

## 4.6 Global ana akış 3 — Pricing ziyaretçisi → scope mantığı → qualified action

`/pricing`  
→ setup vs maintenance  
→ pricing ranges  
→ what affects scope  
→ example implementation scopes  
→ Book a Call / Request Scope

**Amaç**  
“Why no fixed price?” itirazını profesyonel şekilde çözmek.

**Kırdığı itirazlar**
- is pricing vague?
- is this custom service or software?
- how big might a project be?

**Ana CTA**
- Request Scope
- Book a Discovery Call

---

## 4.7 Global ana akış 4 — Use cases → confidence → brief / call

`/use-cases`  
→ sample workflow examples  
→ before / after structure  
→ implementation notes  
→ CTA

**Amaç**  
Gerçek case study yoksa bile thinking depth göstermek.

**Kırdığı itirazlar**
- is this just copywriting?
- do they understand workflow design in practice?

**Ana CTA**
- Send Workflow Brief
- Book a Discovery Call

---

## 4.8 Global ana akış 5 — Book a Call → fit filtering → calendly / routing

`/book-a-call`  
→ who this is for  
→ what we discuss  
→ who this is not for  
→ what happens next  
→ calendly or routing form

**Amaç**  
Düşük kaliteli lead’i elemek, doğru beklentiyi kurmak.

**Kırdığı itirazlar**
- should I even book this?
- what happens after the call?
- is this a sales ambush?

**Ana CTA**
- Continue to Scheduling

Bu sayfa global tarafta dönüşümün kalitesini artırır.  
Rastgele “book now” butonundan çok daha profesyoneldir.

---

## 4.9 Global ana akış 6 — Contact → workflow brief → manual qualification

`/contact`  
→ brief form  
→ internal review  
→ reply with next step

**Amaç**  
Call istemeyen veya hazır olmayan ama ciddi lead’i kaybetmemek.

**Kırdığı itirazlar**
- I’m not ready for a call yet
- I want to explain context first
- I need to share workflow details before scheduling

**Ana CTA**
- Send Workflow Brief

---

## 4.10 Global sitede sayfa bazlı itiraz haritası

### Home
İtiraz: “Is this relevant to firms like us?”  
Cevap: accounting-specific pain and process clarity.

### Accounting Firms
İtiraz: “Do you understand our workflows?”  
Cevap: onboarding, document chase, recurring work, routing.

### Services
İtiraz: “Do you only do one narrow thing?”  
Cevap: controlled range of operational services.

### Pricing
İtiraz: “Is this too vague / too custom / too expensive?”  
Cevap: scoped service model and range clarity.

### Use Cases
İtiraz: “Can they think through real workflow design?”  
Cevap: structured examples.

### Book a Call
İtiraz: “What am I stepping into?”  
Cevap: clear call purpose and next-step transparency.

### Contact
İtiraz: “Can I explain things before jumping on a call?”  
Cevap: workflow brief path.

---

# 5) CTA akış eşleşmeleri

## 5.1 Merkez site CTA eşleşmesi

### İletişime Geç
Landing / contact block  
→ form  
→ teşekkür durumu  
→ manuel dönüş

### Kısa Brief Bırak
Landing  
→ kısa form  
→ lead kaydı  
→ manuel değerlendirme

---

## 5.2 TR site CTA eşleşmesi

### WhatsApp ile Konuş
Ana Sayfa / Klinikler / Fiyatlandırma / footer / sticky CTA  
→ WhatsApp sohbeti  
→ kısa ön değerlendirme  
→ gerekiyorsa form veya teklif süreci

### Form Gönder
İletişim / sektör sayfaları  
→ form  
→ lead kaydı  
→ manuel dönüş

### Demo Talep Et
Ana Sayfa / Klinikler  
→ form  
→ uygun lead ise demo / görüşme planı

### Kısa Değerlendirme Al
Muhasebe Ofisleri / fiyatlandırma  
→ form  
→ iç değerlendirme  
→ önerilen sonraki adım

---

## 5.3 Global site CTA eşleşmesi

### Book a Discovery Call
Home / Accounting Firms / Pricing / Book a Call  
→ qualification context  
→ scheduling  
→ internal preparation

### Send Workflow Brief
Home / Use Cases / Contact / Pricing  
→ brief form  
→ review  
→ reply with fit / next step

### Request Scope
Pricing / Services  
→ short form  
→ workflow context  
→ scoping follow-up

---

# 6) Kullanıcı akışlarında düşük sürtünme kuralları

## 6.1 Aynı CTA farklı isimlerle dağılmayacak
Özellikle TR ve global sitelerde çok fazla benzer CTA ismi olursa kullanıcı karışır.

Örnek yanlış:
- danışmanlık al
- bizimle tanış
- şimdi başla
- inceleme al
- plan iste
- teklif iste
- demo iste

İlk fazda CTA isimleri kontrollü tutulacaktır.

## 6.2 Her sayfada tek ana aksiyon hissi olacak
Aynı sayfada:
- WhatsApp
- demo
- teklif
- mail
- call
- PDF indir
- case study oku
- bültene gir

gibi saçılan aksiyonlar olmayacak.  
Her sayfanın bir ana kapanış aksiyonu olacaktır.

## 6.3 CTA’lar içerikle uyumlu yerde çıkmalı
Örnek:
- fiyatlandırma sayfasında “Request Scope” mantıklıdır
- klinikler sayfasında “WhatsApp ile Konuş” mantıklıdır
- use cases sayfasında “Send Workflow Brief” mantıklıdır

Yanlış eşleşme güveni düşürür.

---

# 7) Kullanıcı akışı kalite kontrol soruları

Her ana akış için şu sorular sorulmalıdır:
1. Kullanıcı bu akışın başında ne düşünüyor?
2. Bu sayfa onun hangi itirazını kırıyor?
3. Bu sayfadaki ana CTA doğal mı?
4. Kullanıcı bu akışta gereksiz yere başka sayfaya sapıyor mu?
5. Bu akış lead kalitesini artırıyor mu?
6. Bu akışta erken kaçış noktaları nerede?
7. Kullanıcı son adımda neyle karşılaşacağını biliyor mu?

---

# 8) Başarı sinyalleri

## Merkez site
- sayfada anlamlı scroll
- contact block etkileşimi
- dil geçiş kullanımı
- brief submission

## TR site
- sektör sayfalarına geçiş
- WhatsApp tıklaması
- form gönderimi
- fiyatlandırma sayfası görüntüleme
- örnek senaryolarda derin gezinme

## Global site
- accounting-firms sayfası ziyareti
- pricing ve use-cases etkileşimi
- workflow brief gönderimi
- discovery call sayfasına geçiş
- scheduling başlatma

---

# 9) Sonuç

Bu belgeye göre:
- kullanıcı akışları site rolüne göre ayrılmıştır
- her sayfanın bir itiraz kırma görevi vardır
- her CTA net bir sonraki adıma bağlanmıştır
- merkez, TR ve global taraf birbirine karışmadan kendi kapanan akışına sahip olacaktır

Yani gezinme mantığı şu olacaktır:
- merkez site → anlama ve düşük baskılı iletişim
- TR site → sektör uyumu ve sıcak talep toplama
- global site → qualification ve structured next step