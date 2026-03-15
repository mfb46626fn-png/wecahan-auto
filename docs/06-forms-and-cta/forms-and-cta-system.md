# Forms and CTA System

## Belge amacı
Bu belge, WeCaHan Auto site ailesindeki tüm form yapılarının, CTA akışlarının ve lead capture mantığının sistem düzeyinde nasıl kurulacağını tanımlar.

Amaç:
- hangi sitede hangi formun kullanılacağını netleştirmek
- her formun hangi veri alanlarını toplayacağını belirlemek
- CTA’ların hangi form veya aksiyona bağlanacağını standartlaştırmak
- kullanıcı deneyimi ile lead kalitesi arasında doğru dengeyi kurmak
- TR ve global tarafta farklı kapanış mantıklarını sistemli hale getirmek
- daha sonra form geliştirme, veri yönlendirme ve otomasyon entegrasyonunu kolaylaştırmak

Bu belge:
- sayfa yapılarında geçen form kararlarını tek yerde toplar
- CTA kütüphanesini uygulama mantığına bağlar
- teknik implementasyondan önce form stratejisini netleştirir

---

# 1) Genel sistem ilkeleri

## 1.1 Formların rolü
Formlar sadece iletişim toplama aracı değildir.  
Formlar aynı zamanda:
- qualification
- context collection
- lead sorting
- next-step routing
- yanlış beklentiyi erken filtreleme
işlevi görür.

## 1.2 CTA’ların rolü
CTA’lar kullanıcıyı rastgele butonlara değil, doğru kapanış yoluna taşır.

Her CTA şu üç şeyden birine bağlanmalıdır:
- form submission
- direct contact channel
- qualification action

## 1.3 Ana ilke
Her sayfanın ana CTA’sı tek bir mantıklı sonraki adıma bağlanmalı.  
CTA ile form arasında kopukluk olmayacak.

## 1.4 Hedef
Sistem şu hissi vermeli:
- ulaşmak kolay
- ne paylaşacağım belli
- sonra ne olacağı belli
- her şey tek bir “bize yazın” karanlığına düşmüyor

---

# 2) Site bazlı form ve CTA mantığı

## 2.1 Merkez site
Merkez sitede amaç:
- kısa brief toplamak
- düşük baskılı ilk temas almak
- TR / global satış sürecine karışmadan bağlam toplamak

### Ana kapanış
- kısa brief formu
- e-posta alternatifi

### Ana CTA karakteri
- İletişime Geç
- Kısa Brief Bırak
- Brief Paylaş

---

## 2.2 TR site
TR tarafta amaç:
- sıcak ama kontrollü lead toplamak
- WhatsApp ve form dengesini kurmak
- klinik ve muhasebe ofisi lead’lerini erken ayrıştırmak

### Ana kapanışlar
- değerlendirme formu
- WhatsApp
- bazı alanlarda demo talebi

### Ana CTA karakteri
- WhatsApp ile Konuş
- Sürecini Anlat
- Kısa Değerlendirme Al
- Form Gönder

---

## 2.3 Global site
Global tarafta amaç:
- discovery call-ready lead ile context-first lead’i ayırmak
- workflow brief üzerinden kaliteli bilgi toplamak
- self-serve software beklentisini kırmak

### Ana kapanışlar
- discovery call
- workflow brief formu
- e-posta alternatifi

### Ana CTA karakteri
- Book a Discovery Call
- Send Workflow Brief
- Share Workflow Context

---

# 3) Form aileleri

Bu projede tüm formlar 5 ana aileye ayrılır.

---

## 3.1 Center Brief Form

### Rol
Merkez sitede düşük baskılı ilk temas toplamak.

### Kullanıldığı yerler
- `auto.wecahan.com` ana sayfa contact section

### Hedef
- kısa bağlam
- kim / şirket / e-posta
- genel süreç özeti

### Yoğunluk
Kısa

---

## 3.2 TR Evaluation Form

### Rol
TR tarafta ilk değerlendirme lead’i toplamak.

### Kullanıldığı yerler
- TR contact page
- bazı CTA section varyantları
- gerektiğinde popup / inline form değil, tercihen sayfa içi ana form

### Hedef
- sektör
- süreç problemi
- kanal yapısı
- yaklaşık hacim
- iletişim bilgisi

### Yoğunluk
Orta

---

## 3.3 TR Demo / Deep Intent Form

### Rol
TR’de daha sıcak, daha ciddi lead için bir üst niyet formu.

### Kullanıldığı yerler
- demo talep CTA’ları
- gerekirse Klinikler sayfası varyantı
- ilk fazda ayrı form olmak zorunda değil; TR Evaluation Form ile merge edilebilir

### Hedef
- daha net sorun
- beklenti
- görüşme isteği
- iletişim uygunluğu

### Yoğunluk
Orta

---

## 3.4 Global Workflow Brief Form

### Rol
Global tarafta call-ready olmayan ama ciddi context paylaşmak isteyen lead’i toplamak.

### Kullanıldığı yerler
- global contact page
- bazı CTA blokları
- use-cases ve pricing sonrası yönlendirmeler

### Hedef
- workflow friction
- affected area
- team size
- current tools
- preferred next step

### Yoğunluk
Orta

---

## 3.5 Discovery Scheduling Input Layer

### Rol
Book a Call akışında scheduling öncesi minimum qualification sağlamak.

### Kullanıldığı yerler
- global book-a-call page
- takvim embed çevresi
- scheduling provider ön soruları

### Hedef
- kim katılacak
- firma
- ne tür workflow friction var
- call’un mantıklı olup olmadığı

### Yoğunluk
Kısa

---

# 4) Merkez site form sistemi

## 4.1 Form adı
Center Brief Form

## 4.2 Kullanım amacı
Merkez site vitrindir.  
Bu yüzden burada ağır form kullanılmaz.

## 4.3 Alanlar

### Zorunlu
- Ad Soyad
- E-posta
- Şirket / Marka Adı
- Kısa Süreç Özeti

### Opsiyonel
- Ülke
- Web Sitesi

## 4.4 Alan mantığı
### Kısa Süreç Özeti
Kullanıcı burada:
- ne yapmak istediğini
- hangi süreçte tekrar eden yük olduğunu
- hangi alanda otomasyon düşündüğünü
kısaca yazabilir.

## 4.5 CTA bağlantısı
Bu form şu CTA’lara bağlanır:
- Kısa Brief Bırak
- Brief Paylaş
- İletişime Geç

## 4.6 Sonraki adım
- kısa teşekkür mesajı
- bağlam incelemesi
- gerekirse manuel yönlendirme

## 4.7 Bu form ne olmamalı?
- uzun başvuru formu
- satış kapatma formu
- TR / global özel qualification formu

---

# 5) TR form sistemi

## 5.1 Ana form adı
TR Evaluation Form

## 5.2 Nerede ana form olarak kullanılacak?
- `tr.auto.wecahan.com/iletisim`
- gerektiğinde ana sayfa CTA section’dan bu sayfaya yönlendirme
- Klinikler ve Muhasebe Ofisleri sayfalarındaki ana form CTA hedefi

## 5.3 TR formun temel hedefi
TR lead için şu bilgileri toplamak:
- kim
- hangi sektör
- hangi temel süreç sorunlu
- hangi kanallardan iş geliyor
- yaklaşık hacim ne
- sonraki temas nasıl olmalı

---

## 5.4 Alan yapısı

### Zorunlu alanlar
- Ad Soyad
- İşletme Adı
- Sektör
- Telefon / WhatsApp
- E-posta
- En çok zorlandığınız süreç nedir?

### Güçlü önerilen alanlar
- Şehir
- Size en çok nereden talep / iş geliyor?
- Aylık yaklaşık talep / işlem hacmi
- Şu an hangi araçları kullanıyorsunuz?

### Sektör seçenekleri
- Klinik
- Mali Müşavirlik / Muhasebe Ofisi
- Diğer

---

## 5.5 Klinik varyantı
Klinik sayfası özelinde form aynı çekirdeği kullanabilir ama şu ek alanlar düşünülebilir:
- Branş / hizmet alanı
- En çok talep hangi kanaldan geliyor?
- Aylık yaklaşık lead / randevu hacmi

## 5.6 Muhasebe ofisi varyantı
Muhasebe ofisi özelinde şu varyasyonlar düşünülebilir:
- Ekip büyüklüğü
- En çok zaman alan tekrar eden süreç
- Evrak / reminder / görev görünürlüğü gibi problem tipi

## 5.7 CTA bağlantıları
TR form şu CTA’lara bağlanır:
- Sürecini Anlat
- Kısa Değerlendirme Al
- Form Gönder
- Değerlendirme Talebi Gönder

## 5.8 WhatsApp ilişkisi
WhatsApp, formun alternatifi olabilir.  
Ama formun yerini tamamen almamalıdır.

### Kural
- Klinik sayfalarında WhatsApp daha güçlü görünür
- Muhasebe ofisi tarafında form ana yüz olur
- Contact sayfasında form merkezde, WhatsApp yardımcı yolda durur

---

# 6) Global form sistemi

## 6.1 Ana form adı
Global Workflow Brief Form

## 6.2 Nerede ana form olarak kullanılacak?
- `global.auto.wecahan.com/contact`
- use-cases ve pricing sonrası workflow brief yönlendirmeleri
- discovery call yerine context-first başlangıç isteyen kullanıcı akışları

## 6.3 Global formun temel hedefi
Global lead için şu bilgileri toplamak:
- kim
- hangi firmadan
- hangi operational friction var
- en çok etkilenen alan ne
- ekip / araç / hacim ne durumda
- call mı, brief mi, emin değil mi

---

## 6.4 Alan yapısı

### Zorunlu alanlar
- Full Name
- Firm Name
- Work Email
- Country
- What workflow is creating the most friction right now?

### Güçlü önerilen alanlar
- Website
- Team Size
- Current Tools / Stack
- Which area is most affected?
- Approximate workflow or client volume
- Preferred next step

### Affected area seçenekleri
- Client intake
- Onboarding
- Missing documents / follow-up
- Recurring reminders
- Internal task visibility
- Other

### Preferred next step seçenekleri
- I prefer to start with a workflow brief
- I’m open to a discovery call
- I’m not sure yet

## 6.5 CTA bağlantıları
Bu form şu CTA’lara bağlanır:
- Send Workflow Brief
- Share Workflow Context
- Submit Brief

## 6.6 Book a Call ilişkisi
Global contact form, discovery call’ın alternatifi olarak sunulur.

### Kural
- call-ready kullanıcı Book a Call’a gitmeli
- call-ready olmayan ama ciddi kullanıcı Workflow Brief bırakmalı

---

# 7) Discovery call akışı

## 7.1 Discovery call’un rolü
Call form değildir.  
Ama yine de minimum qualification gerektirir.

## 7.2 Scheduling öncesi / scheduling çevresi veri alanları
Takvim aracı destekliyorsa veya çevresine yardımcı alan koyuluyorsa şu bilgiler alınabilir:
- Full Name
- Work Email
- Firm Name
- Main workflow friction
- Who is joining?

## 7.3 CTA bağlantıları
- Continue to Scheduling
- Book a Discovery Call

## 7.4 Alternatif akış
Kullanıcı call yerine bağlam paylaşmak isterse:
- Send Workflow Brief Instead

---

# 8) CTA-to-form eşleşme sistemi

## 8.1 Merkez site
### CTA → aksiyon
- İletişime Geç → Center Brief Form section
- Kısa Brief Bırak → Center Brief Form
- Brief Paylaş → Center Brief Form submit

---

## 8.2 TR site
### CTA → aksiyon
- WhatsApp ile Konuş → WhatsApp deep link
- Sürecini Anlat → TR contact form page veya inline evaluation form
- Kısa Değerlendirme Al → TR Evaluation Form
- Form Gönder → TR Evaluation Form submit
- Demo Talep Et → TR Evaluation Form + demo intent hidden state veya ayrı varyant

---

## 8.3 Global site
### CTA → aksiyon
- Book a Discovery Call → Book a Call page / scheduling flow
- Continue to Scheduling → scheduling embed / provider
- Send Workflow Brief → Global Workflow Brief Form
- Share Workflow Context → Global Workflow Brief Form
- Send Workflow Brief Instead → Global Contact page / brief form

---

# 9) Form boyutu ve sürtünme kuralları

## 9.1 Temel ilke
Formlar:
- ilk adım için yeterli bilgi toplamalı
- ama kullanıcıyı korkutmamalı

## 9.2 Çok kısa form riski
Aşırı kısa form şu problemi doğurur:
- kalitesiz lead
- bağlamsız başvuru
- manuel geri dönüş yükü
- yanlış pricing beklentisi

## 9.3 Çok uzun form riski
Aşırı uzun form şu problemi doğurur:
- drop-off
- kullanıcı yorgunluğu
- “çok resmi / ağır süreç” hissi
- ilk temas sürtünmesi

## 9.4 Hedef denge
İlk temas formu şunu yapmalı:
- bağlamı al
- sektörü anla
- temel sürtünmeyi anla
- iletişim kanalını al
- sonraki adımı belirlemeye yetecek kadar veri topla

---

# 10) Form state sistemi

## 10.1 Standart state’ler
Her formda şu state’ler tanımlanmalı:
- idle
- focus
- validation error
- submitting
- success
- submit failed

## 10.2 Submitting state
Buton ve form:
- tekrar tekrar gönderime açık bırakılmamalı
- “gönderiliyor” hissi net olmalı

## 10.3 Success state
Başarı ekranı:
- bilgilerin alındığını net söylemeli
- sonraki adımı açıklamalı
- gerekiyorsa alternatif kanal sunmalı

## 10.4 Failed state
Başarısızlık halinde:
- teknik özür metni değil
- net, kısa ve tekrar denemeye uygun dil
kullanılmalı

### TR örneği
- Gönderim sırasında bir sorun oluştu. Lütfen tekrar deneyin veya WhatsApp üzerinden yazın.

### Global örneği
- Something went wrong while sending the brief. Please try again or contact us by email.

---

# 11) Hidden metadata mantığı

## 11.1 Neden önemli?
Form verileri çıplak bırakılmamalı.  
Arka tarafta şu bağlamlar da taşınmalı:
- source site
- source page
- CTA origin
- sector page
- preferred path
- language
- timestamp

## 11.2 Önerilen gizli alanlar
- `site_family` → center / tr / global
- `page_slug`
- `cta_source`
- `intent_type`
- `language`
- `submitted_at`

## 11.3 Faydası
Bu alanlar:
- lead routing
- CRM / sheet düzeni
- dönüşüm analizi
- hangi sayfa ne üretiyor analizi
için kritik olur.

---

# 12) Routing mantığı

## 12.1 Merkez site
Center Brief Form submission:
- genel lead havuzu
- manuel review
- uygun tarafa yönlendirme

## 12.2 TR site
TR Evaluation submission:
- TR lead havuzu
- sektöre göre tag
- klinik / muhasebe / diğer ayrımı
- WhatsApp tercihleriyle birlikte işlenme

## 12.3 Global site
Global Workflow Brief submission:
- global lead havuzu
- accounting-firm öncelikli routing
- preferred next step işleme
- discovery call’a uygunluk değerlendirmesi

## 12.4 Book a Call
Scheduling akışı:
- ayrı pipeline
- booked / pending / reviewed status mantığı
- no-show ve follow-up için ayrı handling gerektirir

---

# 13) Spam ve kalite koruma ilkeleri

## 13.1 Gerekli korumalar
Form sistemi şu minimum korumaları düşünmelidir:
- honeypot
- rate limiting
- email validation
- work email tercih işareti (globalde)
- basit bot koruması

## 13.2 Global özel not
Global tarafta `work email` tercihi kaliteyi artırır.  
Ama kişisel e-posta kullanan potansiyel küçük firmaları tamamen dışlamamak gerekir.

## 13.3 TR özel not
TR tarafta telefon / WhatsApp alanı kritik olabilir.  
Ama tek iletişim kanalı olarak zorunlu merkez yapılmamalı.

---

# 14) Success state yönlendirmeleri

## 14.1 Merkez site
Başarı sonrası önerilen aksiyonlar:
- Ana Sayfaya Dön
- E-posta ile Devam Et

## 14.2 TR site
Başarı sonrası önerilen aksiyonlar:
- WhatsApp ile Yaz
- Fiyatlandırmayı Gör
- Ana Sayfaya Dön

## 14.3 Global site
Başarı sonrası önerilen aksiyonlar:
- Book a Discovery Call
- View Pricing Model
- View Use Cases

## 14.4 Kural
Success state yeni satış baskısı kurmayacak.  
Ama kullanıcıyı boşlukta da bırakmayacak.

---

# 15) Ana kalite kontrol soruları

Her form ve CTA akışı için şu sorular sorulmalıdır:

1. Kullanıcı neyi doldurduğunu anlıyor mu?
2. Bu form gerçekten gereken veriyi topluyor mu?
3. Gereksiz alan var mı?
4. CTA ile form arasında doğal bağ var mı?
5. Başarı mesajı yeterince net mi?
6. Sonraki adım açık mı?
7. TR ile global form mantığı gereksiz şekilde birbirine benzetilmiş mi?
8. Lead kalitesi ile sürtünme arasında doğru denge kurulmuş mu?

---

# 16) Sonuç

Bu belgeye göre:
- merkez site kısa brief toplar
- TR site evaluation-first lead capture kurar
- global site workflow brief ve discovery call ayrımını net yapar

Form ve CTA sistemi:
- bağlama uygun
- veri kalitesi odaklı
- düşük sürtünmeli
- ama filtresiz olmayan
bir yapıdadır.

Bu dosya, sonraki aşamada form field mapping, backend routing, CRM / sheet entegrasyonu ve CTA implementasyonu için temel referans olacaktır.