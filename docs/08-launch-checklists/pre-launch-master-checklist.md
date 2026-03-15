# Pre-Launch Master Checklist

## Belge amacı
Bu belge, WeCaHan Auto site ailesinin yayına çıkmadan önce kontrol edilmesi gereken tüm ana başlıkları tek yerde toplar.

Amaç:
- launch öncesi unutulabilecek kritik noktaları sistemli hale getirmek
- merkez, TR ve global sitenin yayına hazır olup olmadığını net görmek
- teknik, içerik, SEO, form, CTA, analytics ve kalite kontrol taraflarını tek bir master listede toplamak
- launch gününde panik ve dağınıklığı azaltmak
- “site açıldı ama şu eksikti” rezaletini önlemek

Bu belge:
- detaylı teknik implementasyon dosyası değildir
- ama launch öncesi ana karar ve kontrol kapısıdır
- diğer checklist dosyaları için de üst referans gibi kullanılabilir

---

# 1) Launch kapsamı net mi?

## 1.1 Yayına hangi siteler çıkıyor?
Aşağıdakiler netleşmiş olmalı:
- `auto.wecahan.com`
- `tr.auto.wecahan.com`
- `global.auto.wecahan.com`

## 1.2 Hangi sayfalar ilk fazda yayına çıkıyor?
Her site için yayın kapsamı kesinleşmiş olmalı.

### Merkez site
- ana sayfa

### TR site
- ana sayfa
- klinikler
- muhasebe-ofisleri
- paketler
- fiyatlandirma
- ornek-senaryolar
- iletisim

### Global site
- ana sayfa
- accounting-firms
- services
- pricing
- use-cases
- book-a-call
- contact

## 1.3 Launch kapsamı dışında kalanlar net mi?
Aşağıdakilerden hangileri launch sonrası faza kaldıysa yazılı olmalı:
- ek dil varyantları
- blog
- admin panel
- detaylı case-study sayfaları
- ekstra sektör sayfaları
- özel dashboard / CRM entegrasyon ekranları

---

# 2) İçerik kontrol checklist’i

## 2.1 Tüm sayfaların ana içeriği tamam mı?
Kontrol:
- hero başlığı tamam
- alt başlık tamam
- section intro’ları tamam
- CTA metinleri tamam
- footer metinleri tamam
- boş lorem ipsum yok
- placeholder içerik kalmamış

## 2.2 Copy tonu sayfa bağlamına uyuyor mu?
Kontrol:
- merkez site fazla satışçı değil
- TR site güven veren ve pratik
- global site structured ve B2B
- aynı CTA her yerde körlemesine kullanılmamış
- section başlıkları generic ajans dili taşımıyor

## 2.3 Dil karışıklığı var mı?
Kontrol:
- TR sayfalarda İngilizce copy sızıntısı yok
- global sayfalarda Türkçe sızıntısı yok
- merkez site dil yapısı tutarlı
- aynı sayfada karışık button / heading dili yok

## 2.4 İçerik doğruluğu kontrol edildi mi?
Kontrol:
- fiyat bantları doğru
- hizmet kapsamı doğru
- ne var / ne yok alanları doğru
- yanlış vaat yok
- olmayan referans / sahte claim yok

---

# 3) CTA ve dönüşüm akışı checklist’i

## 3.1 Her sayfanın ana CTA’sı net mi?
Kontrol:
- sayfanın bir ana CTA’sı var
- aynı section’da CTA kavgası yok
- primary ve secondary CTA rolleri net
- CTA metni aksiyonu açık söylüyor

## 3.2 CTA’lar doğru yere bağlı mı?
Kontrol:
- TR CTA’lar doğru form veya WhatsApp akışına gidiyor
- global CTA’lar doğru brief / call akışına gidiyor
- merkez CTA brief alanına gidiyor
- kırık CTA linki yok

## 3.3 CTA hiyerarşisi bozulmuş mu?
Kontrol:
- navbar CTA ile page CTA kavga etmiyor
- her kartın altında gereksiz büyük buton yok
- global tarafta fazla sıcak CTA yok
- TR tarafta WhatsApp formu tamamen ezmiyor

---

# 4) Form sistemi checklist’i

## 4.1 Tüm formlar çalışıyor mu?
Kontrol:
- merkez brief formu çalışıyor
- TR evaluation formu çalışıyor
- global workflow brief formu çalışıyor
- discovery scheduling yönlendirmesi çalışıyor

## 4.2 Validation çalışıyor mu?
Kontrol:
- required alanlar gerçekten kontrol ediliyor
- email doğrulaması çalışıyor
- friction summary alanı anlamsız tek kelimeyle geçilmiyor
- enum alanlar güvenli
- optional alanlar gerçekten optional davranıyor

## 4.3 Success state düzgün mü?
Kontrol:
- submit sonrası net başarı mesajı var
- kullanıcı boş ekranda kalmıyor
- sonraki adım açıklanıyor
- ilgili secondary CTA’lar doğru görünüyor

## 4.4 Failure state düzgün mü?
Kontrol:
- submit hata verince kullanıcı verisi kaybolmuyor
- hata metni anlaşılır
- teknik çöp mesaj görünmüyor
- retry mümkün

## 4.5 Routing çalışıyor mu?
Kontrol:
- TR clinic submit doğru bucket’a gidiyor
- TR accounting submit doğru bucket’a gidiyor
- global brief doğru routing label alıyor
- center brief manual review havuzuna düşüyor

---

# 5) Teknik yapı checklist’i

## 5.1 Hostname mantığı doğru mu?
Kontrol:
- `auto.wecahan.com` doğru siteyi açıyor
- `tr.auto.wecahan.com` doğru siteyi açıyor
- `global.auto.wecahan.com` doğru siteyi açıyor
- yanlış site family render olmuyor

## 5.2 Route yapısı temiz mi?
Kontrol:
- tüm sayfalar açılıyor
- 404 gereksiz yerlerde patlamıyor
- canonical mantığı bozuk değil
- yanlış yönlendirme yok

## 5.3 Build sağlıklı mı?
Kontrol:
- production build hata vermiyor
- TypeScript hata vermiyor
- unused env veya kırık import yok
- hydration problemi yok
- ciddi console error yok

## 5.4 Performans temel seviyede sağlıklı mı?
Kontrol:
- hero çok geç yüklenmiyor
- büyük görseller optimize
- gereksiz client bundle şişkinliği yok
- mobilde ilk görünüm ağır değil

---

# 6) Tasarım ve UI checklist’i

## 6.1 Görsel tutarlılık var mı?
Kontrol:
- merkez, TR ve global aynı aileden geliyor
- ama birbirinin kopyası gibi durmuyor
- button sistemi tutarlı
- spacing sistemi tutarlı
- typography hiyerarşisi tutarlı

## 6.2 Her sayfada görsel kalite korunuyor mu?
Kontrol:
- section’lar birbirine yapışmıyor
- kart yapıları bozuk değil
- mobilde grid’ler düzgün düşüyor
- CTA alanları ezik görünmüyor
- boş veya dengesiz section yok

## 6.3 Güven hissi bozan şeyler kaldı mı?
Kontrol:
- stock fotoğraf çöplüğü yok
- fake logo wall yok
- sahte testimonial yok
- fazla renkli agency estetiği yok
- form tasarımı amatör görünmüyor

---

# 7) Responsive checklist

## 7.1 Mobil kontrol
Her ana sayfada kontrol:
- hero okunuyor mu
- CTA rahat tıklanıyor mu
- form doldurmak rahat mı
- navbar düzgün çalışıyor mu
- footer taşmıyor mu
- pricing kartları ezilmiyor mu

## 7.2 Tablet kontrol
Kontrol:
- grid yapısı garipleşmiyor
- section ritmi bozulmuyor
- CTA butonları satır kaydırırken çirkinleşmiyor

## 7.3 Desktop kontrol
Kontrol:
- çok geniş satır boyları yok
- içerik fazla yayılmıyor
- hero dengesiz görünmüyor
- boşluklar abartılı veya yetersiz değil

---

# 8) SEO checklist

## 8.1 Metadata tamam mı?
Kontrol:
- her sayfanın title’ı var
- her sayfanın description’ı var
- Open Graph alanları var
- canonical yapısı doğru
- sayfa bazlı metadata generic değil

## 8.2 Indexing mantığı net mi?
Kontrol:
- launch’a hazır sayfalar indexlenebilir
- yarım / test sayfaları indexlenmiyor
- staging / preview ortamı noindex
- book-a-call ve contact sayfalarında index kararı bilinçli verilmiş

## 8.3 URL yapısı temiz mi?
Kontrol:
- slug’lar net
- anlamsız route yok
- mixed language URL yok
- route naming tutarlı

---

# 9) Analytics checklist

## 9.1 Analytics aktif mi?
Kontrol:
- page view çalışıyor
- cta_click çalışıyor
- form_submit_success çalışıyor
- form_submit_fail çalışıyor
- book_call_click çalışıyor
- workflow_brief event’leri çalışıyor

## 9.2 Site family ayrımı ölçülüyor mu?
Kontrol:
- center / tr / global ayrımı görülebiliyor
- page_slug ve cta_source izlenebiliyor
- form_type takibi var

## 9.3 Test edildi mi?
Kontrol:
- test click’ler analytics’e düşüyor
- event isimleri tutarlı
- duplicate event yağmuru yok

---

# 10) Domain, DNS ve deploy checklist’i

## 10.1 Domain tarafı hazır mı?
Kontrol:
- DNS kayıtları doğru
- subdomain yönlenmeleri doğru
- SSL aktif
- production domain bağlandı
- yanlış yönlenen subdomain yok

## 10.2 Deploy ortamı hazır mı?
Kontrol:
- production deploy başarılı
- preview deploy akışı çalışıyor
- environment variables doğru tanımlı
- webhook URL’leri production’a bakıyor
- staging ile prod karışmıyor

## 10.3 Launch sonrası rollback planı var mı?
Kontrol:
- son stabil deploy belli
- gerekirse hızlı geri dönüş mümkün
- kritik env değişikliği geri alınabilir

---

# 11) Notification ve lead akışı checklist’i

## 11.1 Submit sonrası kayıt düşüyor mu?
Kontrol:
- center brief doğru yere düşüyor
- TR submit doğru yere düşüyor
- global brief doğru yere düşüyor
- discovery booking bilgisi kaybolmuyor

## 11.2 Bildirim sistemi çalışıyor mu?
Kontrol:
- yeni lead bildirimi geliyor
- test submit sonrası ekip haberdar oluyor
- sessiz başarısızlık yok

## 11.3 Routing tag’leri doğru mu?
Kontrol:
- lead_bucket doğru
- review_status doğru
- routing_label doğru
- cta_source doğru

---

# 12) İç kalite kontrol checklist’i

## 12.1 Kırık link kontrolü
Kontrol:
- navbar linkleri
- footer linkleri
- CTA linkleri
- iç sayfa yönlendirmeleri
- language switch
- scheduling linki
- WhatsApp linki
- e-posta linki

## 12.2 Yazım ve içerik son kontrolü
Kontrol:
- yazım hataları
- bozuk satır kırılımları
- yanlış büyük/küçük harf kullanımı
- tutarsız terminoloji
- duplicate cümleler

## 12.3 Teknik son kontrol
Kontrol:
- console error yok
- console warning patlaması yok
- image alt text kritik alanlarda var
- form aria / label yapısı düzgün
- CLS benzeri büyük layout kaymaları yok

---

# 13) Legal ve güven checklist’i

## 13.1 Footer legal alanları var mı?
Kontrol:
- privacy linki
- terms linki
- iletişim e-postası
- gerekli açıklamalar

## 13.2 Güven kıran boşluklar var mı?
Kontrol:
- contact bilgileri eksik değil
- sayfa ortasında yarım blok yok
- form sonrası “hiçbir şey olmadı” hissi yok
- pricing sayfası kaçamak durmuyor
- call sayfası sales ambush gibi görünmüyor

---

# 14) Launch günü operasyon checklist’i

## 14.1 Launch öncesi son adımlar
Kontrol:
- son içerik onayı alındı
- son deploy onayı alındı
- son test submit yapıldı
- DNS propagation durumu kontrol edildi
- analytics test edildi
- webhook test edildi

## 14.2 Launch anında
Kontrol:
- production URL’ler canlı
- doğru içerik görünüyor
- ana CTA’lar test edildi
- formlar test edildi
- takvim linki test edildi

## 14.3 Launch sonrası ilk 2 saat
Kontrol:
- yeni submit geliyor mu
- analytics veri akıyor mu
- büyük UI kırılması var mı
- mobilde acil hata var mı
- yanlış hostname render sorunu var mı

---

# 15) Launch sonrası ilk hafta checklist’i

## 15.1 İlk veri kontrolü
Kontrol:
- en çok tıklanan CTA hangisi
- en çok drop olan form hangisi
- TR’de clinic mi office mi daha çok geliyor
- globalde brief mi call mı daha çok çalışıyor

## 15.2 Hızlı düzeltme alanları
Kontrol:
- zayıf CTA metinleri
- yüksek drop-off veren alanlar
- mobilde zayıf section’lar
- beklenmedik routing hataları

## 15.3 İlk optimizasyon kararı
İlk hafta sonunda şu kararlar alınabilir:
- hangi CTA revize edilecek
- hangi form alanı kısalacak / değişecek
- hangi sayfa daha güçlü hale getirilecek
- hangi sayfaya daha fazla trafik verilebilir

---

# 16) Launch readiness skoru

## 16.1 Basit karar mantığı
Her ana başlık şu şekilde işaretlenebilir:
- Hazır
- Küçük düzeltme gerekli
- Launch blocker

## 16.2 Launch blocker örnekleri
Aşağıdakiler varsa launch ertelenebilir:
- formlar çalışmıyor
- hostname yanlış render ediyor
- analytics tamamen kapalı
- CTA’lar kırık
- production deploy hatalı
- content yarım
- pricing veya contact sayfaları ciddi eksik

## 16.3 Küçük düzeltme örnekleri
Aşağıdakiler launch’ı durdurmak zorunda değildir:
- birkaç küçük copy düzeltmesi
- ufak spacing iyileştirmesi
- küçük görsel polish
- çok kritik olmayan alt sayfa detay eksiği

---

# 17) Son karar alanı

## Launch kararı
Aşağıdaki ifadelerden biri seçilmelidir:

- Launch için hazır
- Küçük düzeltmelerle launch edilebilir
- Launch öncesi kritik düzeltme şart

## Not alanı
Bu alana launch öncesi kalan son kritik maddeler yazılır.

### Örnek başlıklar
- Açık kritikler
- Son test sonuçları
- Launch günü sorumluları
- Son onay notu

---

# 18) Sonuç

Bu belgeye göre launch öncesi kontrol:
- içerik
- CTA
- form
- teknik yapı
- responsive kalite
- SEO
- analytics
- deploy
- routing
- launch sonrası ilk takip
başlıkları altında sistemli biçimde yapılacaktır.

Bu dosya, yayına çıkmadan önce okunacak en üst checklist belgesidir.