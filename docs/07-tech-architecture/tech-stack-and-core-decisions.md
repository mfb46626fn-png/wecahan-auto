# Tech Stack and Core Decisions

## Belge amacı
Bu belge, WeCaHan Auto projesinin temel teknik stack kararlarını, ana mimari tercihlerini ve neden bu tercihlerin yapıldığını tanımlar.

Amaç:
- proje başlamadan önce teknik belirsizliği azaltmak
- üç farklı siteyi tek sistem içinde nasıl yöneteceğimizi netleştirmek
- framework, deploy, subdomain, form backend, içerik yönetimi ve analytics gibi temel kararları dondurmak
- Cursor ile kodlama aşamasında “hangi yöne gideceğiz?” karmaşasını önlemek
- sonradan yamalı bohça gibi büyüyen bir yapı oluşmasını engellemek

Bu belge:
- klasör ağacını son detayına kadar vermez
- ama ana teknoloji ve mimari yönü kesinleştirir
- sonraki teknik dokümanlar için temel referans görevi görür

---

# 1) Projenin teknik hedefi

## 1.1 Ne kuruyoruz?
Tek marka çatısı altında çalışan üç web yüzü kuruyoruz:

- `auto.wecahan.com` → merkez vitrin
- `tr.auto.wecahan.com` → TR satış sitesi
- `global.auto.wecahan.com` → global satış sitesi

## 1.2 Teknik olarak ne istiyoruz?
Sistem şu özellikleri taşımalı:
- tek yerden yönetilebilir olmalı
- tekrar kullanılabilir component mantığına uygun olmalı
- içerik farklarını desteklemeli
- subdomain bazlı davranış gösterebilmeli
- form ve CTA sistemini temiz taşımalı
- hızlı deploy edilebilmeli
- ileride büyürse parçalanabilir olmalı

## 1.3 Neyi istemiyoruz?
- üç ayrı kopya site
- üç ayrı repo ile bakım cehennemi
- WordPress / page builder karmaşası
- tamamen CMS bağımlı yapı
- küçük değişiklik için büyük teknik maliyet
- ilk günden gereksiz enterprise şişkinliği

---

# 2) Ana teknik karar

## 2.1 Ana karar
Bu proje ilk fazda:

**tek repo + tek Next.js uygulaması + hostname / site-family bazlı yapı**

olarak kurulacaktır.

## 2.2 Bu ne anlama gelir?
Tek bir Next.js kod tabanı içinde:
- shared component sistemi olacak
- site family mantığı olacak
- hostname’e göre doğru site davranışı seçilecek
- içerik, CTA, renk ve bazı layout kararları site family’ye göre değişecek

## 2.3 Neden bu karar?
Çünkü:
- üç site arasında ciddi ortaklık var
- component sistemi ortak
- copy ve sayfa yapıları farklı ama omurga aynı
- form, analytics ve deploy tek merkezden yönetilebilir
- bakım maliyeti ciddi düşer

## 2.4 Neden üç ayrı repo değil?
Üç ayrı repo ilk başta gereksiz yük çıkarır:
- component kopyalama
- bug fix tekrarları
- CTA / form / footer / navbar tutarsızlığı
- design system çürümesi
- deploy karmaşası

Bu model ancak çok ileri aşamada ve ciddi büyümede düşünülür.

---

# 3) Framework kararı

## 3.1 Seçim
**Next.js (App Router) + TypeScript**

## 3.2 Neden Next.js?
Çünkü ihtiyacımız olan şeyleri aynı yerde çözüyor:
- route yapısı
- server rendering
- metadata / SEO yönetimi
- form action / route handler yapısı
- layout sistemi
- component tabanlı geliştirme
- Vercel deploy uyumu

## 3.3 Neden App Router?
Çünkü:
- modern Next.js yönü bu
- layout nesting temiz
- site family mantığı ve page composition daha rahat
- server component yaklaşımıyla gereksiz client JS azaltılabilir
- metadata ve route segment yönetimi daha temiz olur

## 3.4 Neden TypeScript?
Çünkü:
- field mapping
- routing metadata
- form schema
- site config
- component props
gibi alanlarda hata payını ciddi düşürür.

Bu projede TypeScript lüks değil, temizlik aracıdır.

---

# 4) UI stack kararı

## 4.1 Seçim
**Tailwind CSS + küçük, kontrollü bir shared UI layer**

## 4.2 Neden Tailwind?
Çünkü:
- hızlı üretim sağlar
- component varyantlarını yönetmek kolaydır
- site family bazlı stil farklarını taşımak rahattır
- spacing ve typography disiplinini kodda korumayı kolaylaştırır

## 4.3 Neden büyük UI framework değil?
Hazır büyük UI framework’ler:
- fazla generic görünür
- brand ve satış sayfası yapısını kısıtlar
- gereksiz stil savaşı çıkarır

## 4.4 shadcn/ui yaklaşımı
Gerekirse:
- form
- accordion
- dialog
- tabs
gibi temel primitive’lerde kontrollü biçimde kullanılabilir.

Ama proje “hazır component koleksiyonu” üstüne değil, kendi tasarım sistemi üstüne kurulmalıdır.

---

# 5) Repo ve uygulama yapısı kararı

## 5.1 Seçim
**tek repo, tek uygulama**

İlk fazda monorepo içinde ayrı app’ler kurulmayacak.  
İhtiyaç duyulan şey zaten tek Next app içinde çözülebilir.

## 5.2 Neden monorepo değil?
Monorepo ilk fazda şunları gereksiz yere büyütür:
- workspace yönetimi
- package paylaşımı
- config karmaşası
- deploy ve local dev yükü

Bu proje için önce sade omurga gerekir.  
Monorepo ancak ileride:
- admin panel
- ayrı internal tools
- ayrı landing cluster
gibi şeyler çıkarsa düşünülür.

## 5.3 Repo hedefi
Repo:
- docs ile uyumlu
- tek geliştirme akışlı
- component-first
- config-driven
olmalıdır.

---

# 6) Subdomain yönetimi kararı

## 6.1 Seçim
Subdomain ayrımı hostname bazlı çözülecek.

### Beklenen mapping
- `auto.wecahan.com` → `center`
- `tr.auto.wecahan.com` → `tr`
- `global.auto.wecahan.com` → `global`

## 6.2 Bu nasıl çalışacak?
Request hostname okunur.  
Buna göre:
- site family belirlenir
- doğru config seçilir
- uygun navbar/footer/CTA/renk/copy katmanı yüklenir

## 6.3 Neden route prefix değil?
Yani neden:
- `/tr`
- `/global`
yerine subdomain kullanıyoruz?

Çünkü kullanıcı algısı ve satış ayrımı için subdomain daha temiz:
- fiyat farkı
- dil farkı
- CTA farkı
- ödeme farkı
- sektör positioning’i

daha profesyonel ayrılır.

## 6.4 Teknik sonuç
Uygulama baştan hostname-aware kurulmalıdır.  
Sonradan “haa bunu üç subdomain yapacağız” demek mimariyi bozar.

---

# 7) Routing yaklaşımı

## 7.1 Genel mantık
Her site family kendi route alanına sahip olacak ama tek app içinde.

### Merkez
- `/`
- dil varyantları gerekiyorsa içerik config ile çözülebilir

### TR
- `/`
- `/klinikler`
- `/muhasebe-ofisleri`
- `/paketler`
- `/fiyatlandirma`
- `/ornek-senaryolar`
- `/iletisim`

### Global
- `/`
- `/accounting-firms`
- `/services`
- `/pricing`
- `/use-cases`
- `/book-a-call`
- `/contact`

## 7.2 Teknik ilke
Route isimleri:
- temiz
- kısa
- SEO uyumlu
- kullanıcı açısından anlaşılır
olmalı

## 7.3 Merkez sitede dil yapısı
Merkez site Türkçe + İngilizce içeriği barındırabilir.  
Ama bu, TR ve global sitelerin yerine geçen bir şey olmayacak.

İlk fazda merkez sitede dil desteği:
- statik config
- küçük language switch
- aynı page yapısında çift içerik
mantığıyla yürüyebilir.

---

# 8) Rendering yaklaşımı

## 8.1 Seçim
**çoğunlukla static / server-rendered marketing pages**

## 8.2 Ne demek bu?
Bu siteler uygulama değil, marketing / sales siteleri.  
Bu yüzden ağır client-side app mantığı gereksiz.

## 8.3 Tercih
- içerik sayfaları mümkün olduğunca server component
- interaktif formlar client component
- gerekmeyen her yerde client JS azaltılmalı

## 8.4 Neden önemli?
Bu şu faydaları getirir:
- daha hızlı site
- daha temiz SEO
- daha düşük hydration yükü
- daha az teknik saçmalık

---

# 9) İçerik yönetimi kararı

## 9.1 Seçim
**İlk fazda headless CMS kullanılmayacak.**

İçerik:
- config dosyaları
- typed content objects
- gerektiğinde markdown destekli küçük içerik blokları
ile yönetilecek.

## 9.2 Neden CMS yok?
Çünkü ilk fazda:
- sayfa sayısı sınırlı
- içerik sık ama kontrollü değişecek
- siz Cursor ile hızlı iterasyon yapacaksınız
- CMS eklemek gereksiz karmaşa çıkarır

## 9.3 CMS ne zaman düşünülür?
Aşağıdaki durumlarda:
- sık blog / article üretimi
- ekip dışı içerik girişi
- çok dillilikte yoğun edit akışı
- case study / landing page üretiminin hızlanması ihtiyacı

## 9.4 İlk faz önerisi
Content layer:
- site config
- page copy objects
- CTA maps
- metadata config
- form text config
şeklinde kod içinde tutulmalı.

Bu yaklaşım çok daha pratik.

---

# 10) Form backend kararı

## 10.1 Seçim
**Next.js server actions veya route handlers + n8n / webhook uyumlu submit akışı**

## 10.2 Neden?
Çünkü formlar için ilk fazda tam ayrı backend gerekmez.  
Ama submit sonrası:
- normalize
- validate
- route
- log
- webhook gönder
gibi ihtiyaçlar vardır.

## 10.3 Uygun yaklaşım
Form submit akışı şu sırada işler:
1. frontend submit
2. server validation
3. metadata zenginleştirme
4. storage / logging
5. n8n / sheets / CRM yönlendirmesi
6. success response

## 10.4 Neden doğrudan frontend → webhook değil?
Çünkü bu yaklaşım zayıftır:
- güvenlik düşük
- validation zayıf
- spam koruması zayıf
- metadata kontrolü dağınık
- submit kalitesi düşer

Server-side submit katmanı şart.

---

# 11) Veri saklama ilk faz kararı

## 11.1 Seçim
İlk fazda ağır veritabanı zorunlu değil.

Daha pratik ilk faz seçenekleri:
- Google Sheets
- Airtable
- n8n üstünden yönlendirme
- gerektiğinde email notification

## 11.2 Ama doğrudan Sheets’e bağlamayacağız
Doğrudan frontend → Sheets yaklaşımı yapılmayacak.

Arada mutlaka:
- server validation
- normalization
- routing katmanı
olacak.

## 11.3 İlk faz önerisi
Pratik zincir:
**Form submit → server handler → n8n webhook → Google Sheets / Airtable + notification**

Bu yapı:
- hızlı
- pratik
- ölçeği küçükken yeterli
- sonradan DB’ye geçişe açık

## 11.4 Ne zaman DB gerekir?
Şunlar büyürse:
- lead volume ciddi artarsa
- status tracking uygulama içine alınırsa
- dashboard / admin panel kurulursa
- form event analytics derinleşirse

o zaman PostgreSQL benzeri yapı düşünülür.

---

# 12) Scheduling kararı

## 12.1 Global Book a Call için seçim
İlk fazda dış takvim sağlayıcısı kullanılmalı.

En mantıklı yaklaşım:
- Calendly benzeri çözüm
- embed veya redirect
- scheduling sonrası metadata capture

## 12.2 Neden kendi takvim sistemimizi yapmıyoruz?
Çünkü gereksiz.  
Şu an ihtiyacımız:
- düzgün qualification
- scheduling
- no-show ve basic routing

Kendi takvim sistemini yazmak tam gereksiz mayın tarlası.

## 12.3 Teknik ilke
Takvim aracı:
- global tarafta kullanılacak
- call qualification mantığı ile uyumlu çalışacak
- mümkünse scheduling öncesi minimum context alacak

---

# 13) Analytics kararı

## 13.1 Seçim
İlk fazda hafif ama anlamlı analytics kurulmalı.

Takip etmek istediğimiz şeyler:
- page view
- CTA click
- form start
- form submit
- success state
- book call click
- workflow brief click
- page family conversion flow

## 13.2 Ana ilke
Analytics gösteriş için değil, karar vermek için olacak.

## 13.3 Ne izlemeliyiz?
Minimum event set:
- `cta_click`
- `form_submit_start`
- `form_submit_success`
- `form_submit_fail`
- `book_call_click`
- `brief_submit_success`
- `page_view`
- `site_family_detected`

## 13.4 Neden önemli?
Çünkü şu soruları cevaplamak istiyoruz:
- TR’de en iyi dönüşen sayfa hangisi?
- globalde brief mi call mı daha iyi?
- pricing sayfası korkutuyor mu?
- senaryolar sayfası güven üretiyor mu?

---

# 14) SEO ve metadata kararı

## 14.1 Seçim
Her sayfa için structured metadata olacak.

## 14.2 Neden?
Bu siteler satış sayfası.  
Kopyala-yapıştır title ve description işi yapılmayacak.

## 14.3 Teknik yaklaşım
Her route kendi metadata config’ine sahip olmalı:
- title
- description
- open graph
- canonical
- language / locale ilişkisi
- noindex gereken sayfalar varsa ayrı kontrol

## 14.4 Subdomain SEO mantığı
TR ve global ayrı yüzler olduğu için canonical ve metadata stratejisi de ayrı düşünülmeli.

---

# 15) Deployment kararı

## 15.1 Seçim
**Vercel**

## 15.2 Neden Vercel?
Çünkü:
- Next.js ile en doğal uyum
- preview deploy akışı rahat
- domain / subdomain yönetimi rahat
- hızlı ekip içi iterasyon sağlar
- Cursor ile çalışırken pratik kalır

## 15.3 Ortamlar
Minimum şu ortamlar olmalı:
- local
- preview
- production

## 15.4 Subdomain bağlama mantığı
Production’da:
- `auto.wecahan.com`
- `tr.auto.wecahan.com`
- `global.auto.wecahan.com`

aynı projeye bağlanabilir.

---

# 16) Environment variables ilkeleri

## 16.1 Temel kural
Env değişkenleri:
- isimli
- açık
- environment’a göre ayrılmış
olmalı

## 16.2 Muhtemel env alanları
- webhook URL’leri
- analytics key’leri
- scheduling link / embed ID
- email notification adresleri
- site hostname config’leri
- spam protection key’leri

## 16.3 Kural
Site family farkları mümkün olduğunca config ile yönetilmeli.  
Gereksiz env kalabalığı çıkarılmamalı.

---

# 17) Spam ve güvenlik kararı

## 17.1 Form güvenliği
İlk fazda minimum:
- honeypot
- rate limiting
- server-side validation
- bot koruma
olmalı

## 17.2 Neden?
Marketing formu spam çeker.  
İlk günden “nasıl olsa sonra bakarız” demek aptalca olur.

## 17.3 Hidden metadata güvenliği
Frontend’den gelen metadata’nın hepsi körü körüne güvenilir sayılmayacak.  
Server tarafı:
- normalize
- overwrite
- sanitize
yapmalı.

---

# 18) Media ve asset kararı

## 18.1 Görsel yaklaşımı
Bu projede ağır medya bağımlılığı olmayacak.

Kullanılacak içerik türleri:
- SVG / simple diagrams
- structured visuals
- workflow illustrations
- hafif mock blocks

## 18.2 Video?
İlk fazda gereksiz.  
Yük, karmaşa ve dikkat dağınıklığı yaratır.

## 18.3 Görsel yönetimi
Statik asset’ler:
- optimize
- düzenli klasörlenmiş
- site family / section mantığına göre ayrılmış
olmalı

---

# 19) Test yaklaşımı

## 19.1 İlk faz test hedefi
Ağır test altyapısı şart değil.  
Ama kritik akışlar test edilmeden çıkılmayacak.

## 19.2 Kritik test alanları
- hostname → site family detection
- form validation
- submit success / fail
- CTA routing
- metadata generation
- page rendering
- mobile layout sanity

## 19.3 Mantık
İlk fazda hedef:
- aşırı test mimarisi kurmak değil
- kritik kırılmaları engellemek

---

# 20) Core decisions özeti

## 20.1 Seçilen ana stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- controlled component system
- Vercel deploy

## 20.2 Seçilen ana mimari
- tek repo
- tek Next app
- hostname-aware site family yapısı
- config-driven content
- server-side form submit handling

## 20.3 Seçilen ana operasyon yaklaşımı
- CMS yok
- ağır DB yok
- first-phase webhook / n8n / Sheets uyumlu submit flow
- discovery scheduling external tool ile
- analytics event-first mantıkla

---

# 21) Neleri bilerek seçmiyoruz?

## 21.1 WordPress seçmiyoruz
Çünkü:
- component sistemi dağılır
- subdomain + shared design mantığı zorlaşır
- Cursor ile kontrollü geliştirme zorlaşır

## 21.2 Üç ayrı repo seçmiyoruz
Çünkü:
- bakım maliyeti artar
- tekrarlar çoğalır
- küçük ekip için gereksizdir

## 21.3 İlk günden CMS seçmiyoruz
Çünkü:
- erken aşamada gereksiz yük
- içerik değişimi henüz kod temelli daha hızlı

## 21.4 İlk günden custom backend seçmiyoruz
Çünkü:
- ihtiyaç fazla değil
- submit akışı controlled server layer + webhook ile çözülebilir

---

# 22) Kalite kontrol soruları

Her ana teknik karar için şu sorular sorulmalıdır:

1. Bu karar ilk fazı hızlandırıyor mu, yoksa yavaşlatıyor mu?
2. Tekrar kullanım ve bakım kolaylığı sağlıyor mu?
3. Üç site arasındaki ortaklığı taşıyabiliyor mu?
4. TR ve global farklarını boğmadan destekliyor mu?
5. Sonradan büyümeye izin veriyor mu?
6. Şu an için gereksiz mühendislik yükü çıkarıyor mu?
7. Cursor ile üretimi kolaylaştırıyor mu?

---

# 23) Sonuç

Bu belgeye göre WeCaHan Auto teknik olarak:
- tek repo
- tek Next.js uygulaması
- hostname-aware site family mantığı
- config-driven içerik yapısı
- server-side form handling
- Vercel deploy
- hafif ama temiz analytics ve webhook entegrasyonu
üzerine kurulacaktır.

Bu yaklaşım:
- hızlı çıkar
- düzenli büyür
- bakım maliyetini düşük tutar
- üç farklı siteyi aynı aile içinde ama temiz biçimde taşır

Bu dosya, sonraki teknik mimari dosyalarının temel karar referansıdır.