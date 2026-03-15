# Form Validation and Success States

## Belge amacı
Bu belge, WeCaHan Auto site ailesindeki form validation kurallarını, alan doğrulama mantığını, hata durumlarını, loading state davranışını ve başarı ekranı akışlarını tanımlar.

Amaç:
- tüm formlarda tutarlı validation davranışı kurmak
- required / optional alan mantığını netleştirmek
- kullanıcıyı suçlamayan ama net hata mesajları üretmek
- gönderim sırasında güven veren loading state tasarlamak
- başarı ve başarısızlık durumlarında kullanıcıyı boşlukta bırakmamak
- form submit deneyimini profesyonel ve kontrollü hale getirmek

Bu belge:
- field mapping dosyasındaki alanları UX davranışına çevirir
- microcopy kılavuzunu uygulama mantığına bağlar
- frontend ve backend validation için ortak referans oluşturur

---

# 1) Genel validation ilkeleri

## 1.1 Validation ne için vardır?
Validation’ın görevi:
- kullanıcıyı cezalandırmak değil
- eksik / yanlış veriyi erken yakalamak
- submit kalitesini artırmak
- sonraki aşamalardaki manuel yükü azaltmak
- güven hissini korumaktır

## 1.2 Validation ne yapmamalı?
- kullanıcıyı utandırmamalı
- kaba görünmemeli
- gereksiz sert olmamalı
- boş alanı gereksiz yere kritik hata gibi göstermemeli
- alan doldurma deneyimini korkutmamalı

## 1.3 Ana ilke
Form validation:
- görünür
- net
- kısa
- bağlama uygun
- sakin
olmalıdır.

## 1.4 İki katmanlı doğrulama
Her formda iki katman düşünülmelidir:
- client-side validation
- server-side validation

### Client-side
Kullanıcıyı erken yönlendirir.

### Server-side
Asıl güvenlik ve veri bütünlüğünü sağlar.

---

# 2) Alan zorunluluk mantığı

## 2.1 Temel kural
Bir alan sırf “güzel olur” diye zorunlu yapılmayacak.  
Zorunlu alan yalnızca şu durumlarda zorunlu olur:
- ilk değerlendirme için gerçekten gerekiyorsa
- routing kararını etkiliyorsa
- geri dönüş için kritikse

## 2.2 Merkez site zorunlu alanları
### Required
- `full_name`
- `email`
- `company_name`
- `primary_friction_summary`

### Optional
- `country`
- `website`

## 2.3 TR Evaluation Form zorunlu alanları
### Required
- `full_name`
- `company_name`
- `sector`
- `phone`
- `email`
- `primary_friction_summary`

### Optional
- `city`
- `lead_source_channel`
- `monthly_volume_estimate`
- `current_tools`

## 2.4 Global Workflow Brief Form zorunlu alanları
### Required
- `full_name`
- `company_name`
- `email`
- `country`
- `primary_friction_summary`

### Strongly recommended but optional
- `team_size`
- `current_tools`
- `affected_area`
- `preferred_next_step`
- `website`
- `workflow_volume_estimate`

## 2.5 Discovery booking minimum zorunlu alanları
### Required
- `full_name`
- `company_name`
- `email`
- `primary_friction_summary`

### Optional
- `who_is_joining`

---

# 3) Alan bazlı validation kuralları

## 3.1 `full_name`
### Kural
- boş olamaz
- çok kısa anlamsız girişler reddedilebilir
- yalnızca tek harfli girişler kabul edilmemeli

### Uygun örnek
- Can Yılmaz
- John Smith

### Uygun olmayan örnek
- A
- .
- --

### Kullanıcıya gösterilecek hata örneği
- Lütfen ad soyad bilgisini girin.
- Please enter your full name.

---

## 3.2 `company_name`
### Kural
- boş olamaz
- çok kısa anlamsız girişler reddedilebilir

### Hata örnekleri
- İşletme adını girmeniz gerekiyor.
- Please enter your firm name.

---

## 3.3 `email`
### Kural
- geçerli email formatında olmalı
- trim + lowercase normalize edilmeli
- global tarafta work email tercihi desteklenebilir ama zorunlu kapı yapılmamalı

### Hata örnekleri
#### TR
- Lütfen geçerli bir e-posta adresi girin.

#### Global
- Please enter a valid work email address.
veya daha yumuşak varyant:
- Please enter a valid email address.

## 3.4 `phone`
### Kural
- TR tarafta temel format kontrolü yapılmalı
- tamamen rastgele kısa girişler reddedilmeli
- ülke kodu zorunlu değilse bile kullanılabilir olmalı

### Hata örneği
- Lütfen geçerli bir telefon veya WhatsApp numarası girin.

---

## 3.5 `sector`
### Kural
- seçimsiz bırakılamaz
- yalnızca tanımlı enum değerleri kabul edilir

### Hata örneği
- Lütfen sektör seçin.

---

## 3.6 `country`
### Kural
- globalde boş bırakılamaz
- enum veya açık metin ise normalize edilmeli

### Hata örneği
- Lütfen ülke bilgisini girin.
- Please select your country.

---

## 3.7 `primary_friction_summary`
### Kural
- boş olamaz
- çok kısa ve anlamsız içerikler reddedilebilir
- tek kelimelik “yardım”, “otomasyon”, “fiyat” gibi içerik tek başına yeterli sayılmamalı

### Minimum kalite mantığı
Kullanıcıdan roman istenmez.  
Ama en azından problem alanı anlaşılmalı.

### Uygun örnek
- WhatsApp’tan gelen talepler dağınık kalıyor ve randevu teyit süreci manuel ilerliyor.
- Onboarding is inconsistent and document chasing takes too much team time.

### Uygun olmayan örnek
- yardım
- otomasyon lazım
- info

### Hata örnekleri
#### TR
- Süreç özetini çok kısa da olsa yazmanız gerekiyor.

#### Global
- A short friction summary is required here.

---

## 3.8 `affected_area`
### Kural
- seçilmişse enum içinden gelmeli
- seçilmemiş olması submit’i engellemek zorunda değilse backend null kabul edebilir

### Hata örneği
- Lütfen en çok etkilenen alanı seçin.
- Please select the area most affected.

---

## 3.9 `preferred_next_step`
### Kural
- globalde seçilmesi faydalıdır
- zorunlu değilse `not_sure_yet` varsayılan olarak atanabilir

### Not
Bu alan UX tarafında drop-down yerine radio olarak da daha iyi çalışabilir.

---

# 4) Client-side validation davranışı

## 4.1 Ne zaman çalışmalı?
Client-side validation şu anlarda çalışabilir:
- blur sonrası
- submit denemesi sonrası
- belirli alanlarda live validation

## 4.2 Önerilen davranış
En iyi denge:
- kullanıcı yazarken sürekli bağırma yok
- alan terk edilince hafif validation
- submit’e basınca tüm kritik alanlar görünür kontrol edilir

## 4.3 Ne yapılmayacak?
- her tuşta kırmızı hata
- kullanıcı daha yazarken agresif hata gösterimi
- tüm alanları daha ilk odakta kırmızıya boyama

---

# 5) Server-side validation davranışı

## 5.1 Neden şart?
Client-side validation kullanıcı deneyimi içindir.  
Asıl veri doğrulama server-side yapılmalıdır.

## 5.2 Server-side kontrol edecek alanlar
- zorunlu alanlar var mı
- enum değerleri geçerli mi
- email formatı uygun mu
- aşırı kısa friction summary var mı
- spam / bot işareti var mı
- hidden metadata tutarlı mı

## 5.3 Server-side hata dönüşü
Backend dönüşü:
- kullanıcıya anlaşılır
- alan bazlı işaretlenebilir
- generic 500 mesajına düşmeyen
bir yapıda olmalı

---

# 6) Validation gösterim ilkeleri

## 6.1 Görsel davranış
Hata alanı:
- net border / state ile belli olmalı
- hata metni alanın altında görünmeli
- aynı anda sayfanın her yeri kırmızıya dönmemeli

## 6.2 Hata önceliği
Kullanıcı en önce:
- kritik eksikleri
- iletişim alanı hatalarını
- ana friction özeti eksikliğini
görmeli

## 6.3 Tekrarlı hata metinleri
Aynı hata 5 yerde farklı isimle yazılmayacak.  
Mümkün olduğunca standardize edilecek.

---

# 7) Loading / submitting state kuralları

## 7.1 Loading state’in görevi
Gönderim sırasında sistemin çalıştığını göstermek ve kullanıcının çift submit yapmasını önlemek.

## 7.2 Submit butonu davranışı
Gönderim sırasında:
- disabled olmalı
- metin değişebilir
- spinner olabilir
- tekrar tekrar tıklama engellenmeli

## 7.3 Önerilen loading metinleri

### Merkez
- Gönderiliyor...
- Brief gönderiliyor...

### TR
- Gönderiliyor...
- Değerlendirme gönderiliyor...

### Global
- Sending brief...
- Submitting context...
- Processing...

## 7.4 Loading state ne olmamalı?
- çok uzun bekleyen sessiz form
- hiçbir değişiklik göstermeyen buton
- 3 farklı spinner aynı anda
- kullanıcıyı “acaba oldu mu?” boşluğuna düşürmek

---

# 8) Success state sistemi

## 8.1 Başarı durumunun görevi
Kullanıcıya üç şeyi net söylemeli:
- bilgi alındı
- sonra ne olacak
- gerekirse alternatif aksiyon ne

## 8.2 Başarı state türleri
Bu projede üç ana success pattern olabilir:
- inline success message
- success card / panel
- full success state block

## 8.3 Ne zaman hangisi?
### Küçük form
Inline success yeterli olabilir.

### Ana contact form
Success card veya block daha iyi olur.

### Book a Call yönlendirmeleri
Başarı değil, scheduling devam akışı kullanılabilir.

---

## 8.4 Merkez site başarı metni örnekleri
- Bilgilerinizi aldık. Kısa brief’inize göre uygun sonraki adım netleştirilir.
- Brief’iniz ulaştı. Gerekirse kısa ek bilgiyle dönüş yapılır.

## 8.5 TR başarı metni örnekleri
- Bilgilerinizi aldık. Kısa değerlendirme sonrası uygun sonraki adım için sizinle iletişime geçilir.
- Süreç özetiniz ulaştı. Uygun yapı varsa sonraki adım paylaşılır.

## 8.6 Global başarı metni örnekleri
- We’ve received your workflow context. After a short review, the most sensible next step will be suggested.
- Your brief has been received. If a live discussion makes more sense, discovery scheduling can follow from there.

---

# 9) Success sonrası aksiyon mantığı

## 9.1 Merkez site
Başarı sonrası gösterilebilecek aksiyonlar:
- Ana Sayfaya Dön
- E-posta ile Devam Et

## 9.2 TR site
Başarı sonrası gösterilebilecek aksiyonlar:
- WhatsApp ile Yaz
- Fiyatlandırmayı Gör
- Ana Sayfaya Dön

## 9.3 Global site
Başarı sonrası gösterilebilecek aksiyonlar:
- Book a Discovery Call
- View Pricing Model
- View Use Cases

## 9.4 Kural
Success sonrası gösterilen CTA:
- submit’i anlamsız hale getirmemeli
- ama kullanıcıyı boş da bırakmamalı

---

# 10) Failure / submit failed state kuralları

## 10.1 Genel ilke
Gönderim başarısız olabilir.  
Bu durumda kullanıcı:
- suçlanmayacak
- teknik çöplüğe maruz kalmayacak
- tekrar denemeye yönlendirilecek
- alternatif kanal görebilecek

## 10.2 Hata türleri
Başarısızlık iki gruba ayrılmalı:
- validation / user-fixable
- system / retry-needed

## 10.3 TR sistem hatası örnekleri
- Gönderim sırasında bir sorun oluştu. Lütfen tekrar deneyin.
- Sorun devam ederse WhatsApp veya e-posta üzerinden yazabilirsiniz.

## 10.4 Global sistem hatası örnekleri
- Something went wrong while sending the brief. Please try again.
- If the issue continues, you can also contact us by email.

## 10.5 Retry davranışı
- form verisi mümkünse korunmalı
- kullanıcı her şeyi yeniden yazmak zorunda kalmamalı

---

# 11) Optional alan davranışı

## 11.1 Genel ilke
Optional alanlar gerçekten optional gibi hissettirmeli.

## 11.2 Ne yapılmayacak?
- optional yazıp submit anında zorunlu gibi davranmak
- alanı boş bırakan kullanıcıya olumsuz sinyal vermek
- optional alanı ana validation kırmızılığıyla işaretlemek

## 11.3 UX notu
Optional alanlar istersek helper text ile neden faydalı olduklarını açıklayabiliriz.

### TR örneği
- Bu bilgi, ihtiyacın yoğunluğunu daha iyi anlamamıza yardımcı olur.

### Global örneği
- This helps estimate workflow depth more realistically.

---

# 12) Progressive disclosure mantığı

## 12.1 Her şeyi ilk anda göstermemek
Bazı alanlar koşullu olarak gösterilebilir.

## 12.2 TR örnekleri
### Eğer `sector = clinic`
gösterilebilir:
- `clinic_branch`
- `monthly_lead_estimate`
- `monthly_appointment_estimate`

### Eğer `sector = accounting_office`
gösterilebilir:
- `office_main_friction_area`
- `office_team_size_text`

## 12.3 Global örnekleri
### Eğer `preferred_next_step = open_to_discovery_call`
ek mini not gösterilebilir:
- Book a Call is also available after brief review.

## 12.4 Avantaj
- form daha kısa görünür
- kullanıcı sadece ilgili alanları görür
- sürtünme azalır

---

# 13) Submit öncesi kalite sinyalleri

## 13.1 Kullanıcıyı hafifçe yönlendirmek
Ana friction alanında çok kısa metin yazıldığında submit öncesi yumuşak yardımcı sinyal verilebilir.

### TR örneği
- Kısa bir örnek eklemeniz değerlendirmeyi kolaylaştırır.

### Global örneği
- A little more context can make the review more useful.

## 13.2 Kural
Bu uyarı:
- zorlayıcı olmayacak
- hata gibi görünmeyecek
- sadece kaliteyi artıracak

---

# 14) Form reset davranışı

## 14.1 Başarılı submit sonrası
- success state’e geçilecekse form resetlenebilir
- ama success state içinde gönderilen şeyin alındığı hissi kalmalı

## 14.2 Failed submit sonrası
- form resetlenmeyecek
- kullanıcı verisi korunacak

## 14.3 Multi-step form yoksa
Tek sayfa form mantığında kullanıcıyı en çok koruyan yaklaşım veri kaybını önlemektir.

---

# 15) Accessibility ilkeleri

## 15.1 Label zorunluluğu
Her input’ın gerçek label’ı olmalı.  
Placeholder tek başına label yerine geçmeyecek.

## 15.2 Hata mesajı erişilebilirliği
- alan ile ilişkilendirilmeli
- ekran okuyucular için anlamlı olmalı

## 15.3 Focus state
Focus state görünür olacak.  
“Şık görünsün” diye focus outline öldürülmeyecek.

## 15.4 Renk bağımlılığı yok
Hata yalnızca kırmızı renkle değil, metin ve state ile de anlaşılmalı.

---

# 16) Suggested UX flow per form type

## 16.1 Center Brief Form
- kısa form
- hızlı validation
- inline success yeterli olabilir

## 16.2 TR Evaluation Form
- orta yoğunluk
- sektör bazlı koşullu alanlar olabilir
- success card daha uygun

## 16.3 Global Workflow Brief Form
- context-first
- required alanlar net
- success state sonrası discovery / pricing yönlendirmesi mantıklı

## 16.4 Discovery booking input
- minimum sürtünme
- scheduling aksiyonunu bloklamayan validation
- takvim deneyimini boğmayan yapı

---

# 17) Ana kalite kontrol soruları

Her form state ve validation kararı için şu sorular sorulmalıdır:

1. Bu validation gerçekten gerekli mi?
2. Kullanıcı hatayı kolayca anlayabiliyor mu?
3. Hata metni suçlayıcı mı?
4. Submit sırasında sistem çalışıyor hissi net mi?
5. Success sonrası kullanıcı boşlukta kalıyor mu?
6. Failed submit durumunda veri kaybı oluyor mu?
7. Optional alanlar gerçekten optional gibi mi davranıyor?
8. TR ve global ton farkı korunuyor mu?

---

# 18) Sonuç

Bu belgeye göre form deneyimi:
- kontrollü
- güven veren
- kullanıcıyı yormayan
- veri kalitesini koruyan
- submit sonrası ne olacağını açık eden
bir yapıda olacaktır.

Validation ve success state sistemi:
- form stratejisini uygulamaya taşır
- UX ile veri kalitesi arasında doğru denge kurar
- amatör form hissini ciddi biçimde azaltır

Bu dosya, form UI geliştirmesi ve submit akışlarının uygulanması için ana referans olacaktır.