# Launch Day Operations Checklist

## Belge amacı
Bu belge, WeCaHan Auto site ailesinin yayın gününde yapılacak son kontrolleri, yayın anı adımlarını ve yayın sonrası ilk saatlerde izlenecek operasyon maddelerini toplar.

Amaç:
- launch gününü plansız ve dağınık yürütmeyi önlemek
- “deploy attık bitti” rehavetini engellemek
- production açıldığı anda kritik sistemlerin gerçekten çalıştığını doğrulamak
- form, CTA, analytics, domain, scheduling ve routing tarafında ilk saatlerde oluşabilecek sorunları erkenden yakalamak
- ekip içinde sorumluluk ve kontrol sırasını netleştirmek

Bu belge:
- genel launch readiness dosyalarının yerine geçmez
- launch günü uygulanacak operasyon akışını tanımlar
- gerçek yayın anında kullanılacak kontrol rehberidir

---

# 1) Launch günü kapsamı net mi?

## 1.1 Hangi siteler canlıya alınacak?
Kontrol:
- `auto.wecahan.com`
- `tr.auto.wecahan.com`
- `global.auto.wecahan.com`

## 1.2 Hangi ortam production kabul ediliyor?
Kontrol:
- production domain’ler net
- preview ortamları karışmıyor
- staging linkleri yanlışlıkla paylaşılmıyor

## 1.3 Launch zamanı net mi?
Kontrol:
- hangi saat aralığında launch yapılacak
- ekipten kim o anda aktif olacak
- test submit’leri hangi sırayla yapılacak

---

# 2) Launch öncesi son 60 dakika checklist’i

## 2.1 Son içerik dondurma kontrolü
Kontrol:
- son copy onayı verildi
- son fiyat kontrolü yapıldı
- placeholder içerik kalmadı
- son CTA metinleri değişmeyecek durumda
- son dakika içerik panik değişikliği durduruldu

## 2.2 Son teknik dondurma kontrolü
Kontrol:
- production branch net
- son commit belli
- deploy edilecek sürüm belli
- kritik env değişikliği bitmiş
- launch anında yeni özellik ekleme kapandı

## 2.3 Son form ve CTA testleri
Kontrol:
- center brief form son test
- TR evaluation form son test
- global workflow brief form son test
- global book-a-call CTA son test
- WhatsApp link son test

## 2.4 Analytics son testi
Kontrol:
- page view düşüyor
- CTA click düşüyor
- form submit success düşüyor
- event isimleri doğru görünüyor

---

# 3) Domain ve production altyapı checklist’i

## 3.1 Domain ve DNS
Kontrol:
- tüm production domain’ler doğru resolve oluyor
- yanlış IP / yanlış yönlendirme yok
- subdomain’ler doğru platforma bakıyor

## 3.2 SSL kontrolü
Kontrol:
- SSL aktif
- tarayıcı güvenlik uyarısı yok
- mixed content problemi yok

## 3.3 Production environment variables
Kontrol:
- webhook URL’leri production
- analytics key production
- scheduling link production
- email notification hedefleri doğru
- preview env değerleri prod’a sızmamış

---

# 4) Deploy checklist’i

## 4.1 Production deploy öncesi
Kontrol:
- build lokal veya preview’de temiz geçti
- TypeScript hata vermiyor
- büyük console error yok
- route import kırığı yok

## 4.2 Production deploy anı
Kontrol:
- deploy tetiklendi
- production build başarılı
- deploy log’unda kritik hata yok
- route generate süreci temiz

## 4.3 Deploy sonrası ilk smoke test
Kontrol:
- merkez home açılıyor
- TR home açılıyor
- global home açılıyor
- TR contact açılıyor
- global pricing açılıyor
- global book-a-call açılıyor

---

# 5) Hostname ve routing checklist’i

## 5.1 Site family doğru render oluyor mu?
Kontrol:
- `auto.wecahan.com` merkez içerik gösteriyor
- `tr.auto.wecahan.com` TR içerik gösteriyor
- `global.auto.wecahan.com` global içerik gösteriyor

## 5.2 Yanlış render var mı?
Kontrol:
- TR domain altında global navbar çıkmıyor
- global domain altında TR CTA çıkmıyor
- merkez site yanlışlıkla satış alt site gibi davranmıyor

## 5.3 Ana route’lar çalışıyor mu?
Kontrol:
- TR sayfaları açılıyor
- global sayfalar açılıyor
- 404 olmayan sayfalar patlamıyor
- canonical mantığı saçmalamıyor

---

# 6) Canlı form operasyon checklist’i

## 6.1 Merkez brief form test submit
Kontrol:
- form submit oluyor
- success state geliyor
- lead doğru havuza düşüyor
- metadata geliyor

## 6.2 TR evaluation form test submit
Kontrol:
- clinic test submit başarılı
- accounting_office test submit başarılı
- success state doğru
- routing label doğru

## 6.3 Global workflow brief test submit
Kontrol:
- form submit başarılı
- success state doğru
- preferred_next_step doğru map ediliyor
- affected_area düzgün gidiyor

## 6.4 Discovery booking akışı testi
Kontrol:
- book-a-call CTA çalışıyor
- scheduling sayfası / embed açılıyor
- discovery akışı bozuk değil
- booked lead mantığı izlenebilir

---

# 7) CTA operasyon checklist’i

## 7.1 Navbar CTA’ları
Kontrol:
- merkez navbar CTA doğru
- TR navbar CTA doğru
- global navbar CTA doğru

## 7.2 Hero CTA’ları
Kontrol:
- tüm hero primary CTA’lar çalışıyor
- secondary CTA’lar doğru
- kırık route yok
- yanlış sayfaya gidiş yok

## 7.3 Final CTA section’lar
Kontrol:
- sayfa altı CTA’lar çalışıyor
- duplicate / yanlış yönlenme yok
- analytics event düşüyor

---

# 8) WhatsApp ve scheduling checklist’i

## 8.1 WhatsApp kontrolü
Kontrol:
- tüm TR WhatsApp linkleri doğru numaraya gidiyor
- mobilde doğru açılıyor
- masaüstünde bozuk kalmıyor
- prefill mesaj istenirse düzgün

## 8.2 Scheduling kontrolü
Kontrol:
- global scheduling linki çalışıyor
- timezone mantığı bozuk değil
- takvim kullanılabilir
- test booking senaryosu mantıklı

---

# 9) Analytics live kontrol checklist’i

## 9.1 İlk canlı event kontrolü
Kontrol:
- center page view geldi
- TR page view geldi
- global page view geldi
- CTA click event geldi

## 9.2 Form event kontrolü
Kontrol:
- center form success event geldi
- TR form success event geldi
- global brief success event geldi
- duplicate event akışı yok

## 9.3 Page / CTA source kontrolü
Kontrol:
- `site_family` doğru
- `page_slug` doğru
- `cta_source` doğru
- `form_type` doğru

---

# 10) İlk 15 dakika checklist’i

## 10.1 Açılış sonrası hızlı kontrol
Kontrol:
- üç site de açılıyor
- ana CTA’lar çalışıyor
- büyük layout kırığı yok
- mobilde acil bozulma yok
- form submit patlamıyor

## 10.2 Kritik hata taraması
Kontrol:
- production console error patlaması var mı
- 500 veren sayfa var mı
- yanlış environment kullanımı var mı
- analytics tamamen ölü mü

## 10.3 İlk sorun kaydı
Kontrol:
- bulunan sorunlar yazılıyor mu
- önem sırasına göre ayrılıyor mu
- kim çözecek net mi

---

# 11) İlk 1 saat checklist’i

## 11.1 Trafik ve davranış kontrolü
Kontrol:
- sayfalar ziyaret alıyor mu
- en çok hangi sayfa açılıyor
- bounce çok anormal mi
- CTA tıklamaları geliyor mu

## 11.2 Form ve lead kontrolü
Kontrol:
- gerçek submit geliyor mu
- spam anormalliği var mı
- notification geliyor mu
- routing doğru mu

## 11.3 Global vs TR ilk sinyal kontrolü
Kontrol:
- TR’de WhatsApp mı form mu daha aktif
- globalde brief mi call mı daha çok tıklanıyor
- center brief geliyor mu

---

# 12) İlk 24 saat checklist’i

## 12.1 Hızlı copy ve UX düzeltme alanları
Kontrol:
- en zayıf CTA nerede
- en yüksek drop hangi formda
- hangi sayfada kullanıcı akışı kırılıyor
- hangi metin net değil

## 12.2 Teknik sağlık kontrolü
Kontrol:
- deploy sonrası beklenmedik hata var mı
- env kaynaklı problem çıktı mı
- webhook / notification zinciri stabil mi
- analytics veri akışı stabil mi

## 12.3 İlk küçük optimizasyon kararı
Kontrol:
- hangi CTA metni revize edilecek
- hangi form alanı sadeleşecek
- hangi section güçlendirilecek
- hangi mobil problem önce çözülecek

---

# 13) Launch günü sorumluluk matrisi

## 13.1 Önerilen rol dağılımı
Aşağıdaki başlıklar için bir sorumlu belirlenmeli:
- deploy kontrolü
- form testleri
- analytics kontrolü
- domain / SSL kontrolü
- WhatsApp ve scheduling kontrolü
- copy / görsel son onay
- ilk hata kayıt takibi

## 13.2 Kural
“Birisi bakıyordur” kaosu olmayacak.  
Her kritik alanın bir sorumlusu olmalı.

---

# 14) Sorun önceliklendirme sistemi

## 14.1 P1 — Launch blocker
Örnek:
- site açılmıyor
- form submit olmuyor
- hostname yanlış render ediyor
- CTA kırık
- scheduling bozuk

## 14.2 P2 — Hızlı düzeltme gerekli
Örnek:
- küçük mobil kırık
- analytics event adı hatalı
- success state microcopy bozuk
- bir section spacing problemi

## 14.3 P3 — Launch sonrası iyileştirme
Örnek:
- küçük copy polish
- ufak görsel düzenleme
- secondary CTA iyileştirmesi

---

# 15) Launch günü karar kapısı

## 15.1 Canlıya alma kararı
Aşağıdakilerden biri seçilmeli:
- Launch edildi
- Küçük düzeltmelerle launch edildi
- Launch geçici olarak durduruldu

## 15.2 Eğer durdurulursa
Kontrol:
- blocker tam olarak ne
- rollback gerekiyor mu
- hotfix mi yapılacak
- yeni kontrol saati ne

---

# 16) Launch sonrası kayıt alanı

## 16.1 Bu alan doldurulmalı
Launch günü sonunda şu bilgiler yazılmalı:
- launch saati
- son deploy numarası / commit
- ilk test sonucu
- ilk gerçek lead zamanı
- ilk kritik sorun
- ilk hızlı düzeltme
- genel durum notu

## 16.2 Neden önemli?
İlk launch gününde hafıza hızlı bulanır.  
Yazılı kayıt, sonraki launch’lar için altın değerindedir.

---

# 17) Sonuç

Bu belgeye göre launch günü operasyonu:
- son içerik kontrolü
- deploy
- domain ve SSL doğrulaması
- form ve CTA smoke testleri
- analytics live kontrolü
- ilk 15 dakika / 1 saat / 24 saat izleme
- hata önceliklendirme
başlıkları altında sistemli biçimde yürütülecektir.

Bu dosya, yayın gününde gerçekten açılıp yan tarafta tutulacak operasyon checklist’idir.