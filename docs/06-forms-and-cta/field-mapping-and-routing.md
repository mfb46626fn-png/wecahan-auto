# Field Mapping and Routing

## Belge amacı
Bu belge, WeCaHan Auto site ailesindeki form alanlarının teknik isimlerini, veri eşlemesini ve submit sonrası routing mantığını tanımlar.

Amaç:
- tüm formlarda alan isimlerini standartlaştırmak
- aynı bilginin farklı formlarda farklı isimlerle kaydedilmesini önlemek
- merkez, TR ve global tarafta gelen verileri ortak mantıkla işlemek
- hidden metadata alanlarını netleştirmek
- form submit sonrası lead’in hangi havuza, hangi etikete ve hangi iş akışına düşeceğini belirlemek
- daha sonra frontend form yapısı, backend action handler, Google Sheets / Airtable / CRM ve n8n entegrasyonlarını kolaylaştırmak

Bu belge:
- form stratejisini teknik veri yapısına çevirir
- UI metinlerinden bağımsız olarak alan kimliklerini dondurur
- implementasyon öncesi veri mimarisini netleştirir

---

# 1) Genel veri ilkeleri

## 1.1 Temel kural
Aynı bilgi, mümkün olduğunca aynı teknik alan adıyla tutulmalıdır.

Örnek:
- ad soyad her yerde `full_name`
- şirket adı her yerde `company_name`
- e-posta her yerde `email`
- süreç sorunu benzeri ana açıklama her yerde `primary_friction_summary`

Bu, veri temizliği için kritik.

## 1.2 Ayrı ama ilişkili alanlar
Bazı alanlar aynı değildir, zorla birleştirilmeyecek.

Örnek:
- TR telefon alanı ile global work email odaklı alan yapısı aynı değildir
- TR sektör ile global affected area aynı şey değildir
- preferred next step yalnızca globalde ana rol oynar

## 1.3 Her submit bir event’tir
Her form gönderimi yalnızca bir mesaj değil, işlenebilir bir lead event’i olarak düşünülmelidir.

Bu event şu katmanları taşır:
- user-entered data
- hidden metadata
- source context
- routing hints
- timestamp

## 1.4 Amaç
Form submit sonrası şu sorular otomatik cevaplanabilmeli:
- Hangi siteden geldi?
- Hangi sayfadan geldi?
- Hangi CTA’dan geldi?
- Hangi sektör / problem tipine yakın?
- Hangi havuza düşmeli?
- Sonraki mantıklı aksiyon ne?

---

# 2) Ortak alan isimlendirme sistemi

## 2.1 Ortak çekirdek alanlar
Aşağıdaki alanlar mümkün olan tüm formlarda aynı isimle kullanılmalıdır:

- `full_name`
- `company_name`
- `email`
- `phone`
- `country`
- `website`
- `city`
- `team_size`
- `current_tools`
- `primary_friction_summary`
- `preferred_next_step`

## 2.2 Metadata alanları
Her submit ile birlikte şu metadata alanları da taşınmalıdır:

- `site_family`
- `page_slug`
- `page_type`
- `cta_source`
- `intent_type`
- `language`
- `form_type`
- `submitted_at`
- `submission_id`

## 2.3 Teknik not
Boş gelebilecek alanlar null / empty string mantığıyla işlenebilir ama isimleri değişmemelidir.

---

# 3) Form aileleri ve teknik form_type değerleri

## 3.1 Center Brief Form
### `form_type`
`center_brief`

## 3.2 TR Evaluation Form
### `form_type`
`tr_evaluation`

## 3.3 TR Demo Intent Form
### `form_type`
`tr_demo_intent`

## 3.4 Global Workflow Brief Form
### `form_type`
`global_workflow_brief`

## 3.5 Discovery Scheduling Input
### `form_type`
`global_discovery_booking`

---

# 4) Merkez site alan haritası

## 4.1 Center Brief Form alanları

### Kullanıcı tarafından doldurulan alanlar
- `full_name`
- `email`
- `company_name`
- `country` (opsiyonel)
- `website` (opsiyonel)
- `primary_friction_summary`

### Hidden metadata
- `site_family = center`
- `language = tr | en`
- `form_type = center_brief`
- `page_slug`
- `page_type`
- `cta_source`
- `intent_type = general_brief`
- `submitted_at`
- `submission_id`

## 4.2 UI alanları ile teknik alan eşleşmesi

### Ad Soyad / Full Name
→ `full_name`

### E-posta
→ `email`

### Şirket / Marka Adı
→ `company_name`

### Ülke
→ `country`

### Web Sitesi
→ `website`

### Kısa Süreç Özeti
→ `primary_friction_summary`

## 4.3 Routing hedefi
Center Brief submit’leri:
- genel merkez lead havuzuna düşer
- otomatik TR / global pipeline’a zorla atılmaz
- önce review edilir
- sonra uygun tarafa yönlendirilir

### Önerilen routing label’ları
- `lead_bucket = center_inbox`
- `review_status = new`
- `requires_manual_direction = true`

---

# 5) TR alan haritası

## 5.1 TR Evaluation Form ana alanları

### Kullanıcı tarafından doldurulan alanlar
- `full_name`
- `company_name`
- `sector`
- `phone`
- `email`
- `city` (opsiyonel ama güçlü önerilen)
- `lead_source_channel` (opsiyonel)
- `monthly_volume_estimate` (opsiyonel)
- `current_tools` (opsiyonel)
- `primary_friction_summary`

### Hidden metadata
- `site_family = tr`
- `language = tr`
- `form_type = tr_evaluation`
- `page_slug`
- `page_type`
- `cta_source`
- `intent_type`
- `submitted_at`
- `submission_id`

## 5.2 TR özel alanlar

### `sector`
Değerler:
- `clinic`
- `accounting_office`
- `other`

### `lead_source_channel`
TR tarafında iş / talep en çok nereden geliyor?

Örnek değerler:
- `whatsapp`
- `website_form`
- `instagram`
- `phone`
- `referral`
- `other`

### `monthly_volume_estimate`
Yaklaşık aylık talep / işlem hacmi.  
Metin veya kategorik seçenek olabilir.

Örnek kategori yaklaşımı:
- `low`
- `medium`
- `high`
- `unknown`

## 5.3 Klinik varyantı ek alanları

### Opsiyonel ek alanlar
- `clinic_branch`
- `monthly_lead_estimate`
- `monthly_appointment_estimate`

### `clinic_branch`
Örnek:
- `dental`
- `aesthetic`
- `medical_beauty`
- `other`

### `monthly_lead_estimate`
Clinic özel hacim bilgisi.

### `monthly_appointment_estimate`
Randevu yoğunluğu için.

## 5.4 Muhasebe ofisi varyantı ek alanları

### Opsiyonel ek alanlar
- `office_team_size_text`
- `office_main_friction_area`

### `office_main_friction_area`
Örnek değerler:
- `document_collection`
- `recurring_reminders`
- `client_follow_up`
- `task_visibility`
- `other`

## 5.5 Demo intent varyantı
TR demo intent ayrı form olacaksa şu ek alanlar taşınabilir:
- `demo_intent = true`
- `preferred_contact_time`
- `urgency_level`

Ama ilk fazda bu ayrı form şart değil. Hidden metadata ile de taşınabilir.

---

# 6) Global alan haritası

## 6.1 Global Workflow Brief Form ana alanları

### Kullanıcı tarafından doldurulan alanlar
- `full_name`
- `company_name`
- `email`
- `country`
- `website` (opsiyonel)
- `team_size` (opsiyonel ama güçlü önerilen)
- `current_tools` (opsiyonel)
- `affected_area`
- `workflow_volume_estimate` (opsiyonel)
- `preferred_next_step`
- `primary_friction_summary`

### Hidden metadata
- `site_family = global`
- `language = en`
- `form_type = global_workflow_brief`
- `page_slug`
- `page_type`
- `cta_source`
- `intent_type`
- `submitted_at`
- `submission_id`

## 6.2 Global özel alanlar

### `affected_area`
Önerilen değerler:
- `client_intake`
- `onboarding`
- `missing_documents_followup`
- `recurring_reminders`
- `internal_task_visibility`
- `other`

### `workflow_volume_estimate`
Örnek yaklaşım:
- `small`
- `moderate`
- `high`
- `unknown`

### `preferred_next_step`
Değerler:
- `workflow_brief_first`
- `open_to_discovery_call`
- `not_sure_yet`

## 6.3 Work email mantığı
Teknik alan yine `email` kalır.  
Ayrı olarak kalite değerlendirmesi için bir türev alan üretilebilir:

- `email_type = work | personal | unknown`

Bu frontend’de değil, backend validation veya post-processing sırasında türetilebilir.

---

# 7) Discovery booking alan haritası

## 7.1 Discovery Scheduling Input alanları

### Kullanıcı tarafından doldurulan alanlar
- `full_name`
- `company_name`
- `email`
- `who_is_joining` (opsiyonel)
- `primary_friction_summary`

### Hidden metadata
- `site_family = global`
- `language = en`
- `form_type = global_discovery_booking`
- `page_slug = book-a-call`
- `page_type = qualification_gate`
- `cta_source`
- `intent_type = discovery_call`
- `submitted_at`
- `submission_id`

## 7.2 Özel alanlar

### `who_is_joining`
Örnek değerler:
- `founder`
- `partner`
- `operations_lead`
- `team_member`
- `other`

## 7.3 Scheduling provider ile ilişki
Takvim aracı ek alan topluyorsa teknik isimler mümkün olduğunca bu sistemle uyumlu tutulmalı.  
Uyumsuzluk varsa webhook / n8n aşamasında normalize edilmelidir.

---

# 8) Teknik alan sözlüğü

## 8.1 Kimlik alanları
- `submission_id`
- `full_name`
- `company_name`
- `email`
- `phone`

## 8.2 Konum ve bağlam alanları
- `country`
- `city`
- `website`
- `language`

## 8.3 İş yapısı alanları
- `sector`
- `clinic_branch`
- `team_size`
- `office_team_size_text`
- `current_tools`

## 8.4 Sorun / sürtünme alanları
- `primary_friction_summary`
- `affected_area`
- `office_main_friction_area`
- `lead_source_channel`

## 8.5 Hacim alanları
- `monthly_volume_estimate`
- `monthly_lead_estimate`
- `monthly_appointment_estimate`
- `workflow_volume_estimate`

## 8.6 Intent alanları
- `preferred_next_step`
- `intent_type`
- `demo_intent`
- `urgency_level`

## 8.7 Kaynak alanları
- `site_family`
- `page_slug`
- `page_type`
- `cta_source`
- `form_type`

## 8.8 Sistem alanları
- `submitted_at`
- `review_status`
- `lead_bucket`
- `routing_label`
- `requires_manual_direction`

---

# 9) Metadata kuralları

## 9.1 site_family
Değerler:
- `center`
- `tr`
- `global`

## 9.2 page_type
Örnek değerler:
- `home`
- `sector_page`
- `pricing_page`
- `scenarios_page`
- `contact_page`
- `services_page`
- `use_cases_page`
- `qualification_gate`

## 9.3 cta_source
CTA’nın geldiği blok veya section.

Örnekler:
- `hero_primary`
- `hero_secondary`
- `pricing_section`
- `cta_section_final`
- `navbar_cta`
- `scenario_card`
- `footer_contact`

## 9.4 intent_type
Örnek değerler:
- `general_brief`
- `evaluation_request`
- `demo_interest`
- `workflow_brief`
- `discovery_call`
- `pricing_interest`

## 9.5 submitted_at
ISO timestamp olarak tutulmalı.

## 9.6 submission_id
Her submit için unique id üretilmeli.  
Örn: uuid.

---

# 10) Lead bucket sistemi

## 10.1 Merkez site lead bucket
`center_inbox`

## 10.2 TR lead bucket’ları
- `tr_clinic`
- `tr_accounting_office`
- `tr_other`
- `tr_demo_interest`

## 10.3 Global lead bucket’ları
- `global_accounting_workflow_brief`
- `global_discovery_call`
- `global_other_operational_fit`
- `global_needs_review`

## 10.4 Mantık
Bucket sistemi frontend’den değil, submit sonrası routing katmanında belirlenebilir.

---

# 11) Routing kuralları

## 11.1 Center Brief routing
### Kural
Her zaman önce manuel review.

### Çıkış
- `lead_bucket = center_inbox`
- `review_status = new`
- `routing_label = manual_review`

---

## 11.2 TR routing
### Eğer `sector = clinic`
- `lead_bucket = tr_clinic`

### Eğer `sector = accounting_office`
- `lead_bucket = tr_accounting_office`

### Eğer `sector = other`
- `lead_bucket = tr_other`

### Eğer `demo_intent = true`
Ek olarak:
- `routing_label = priority_demo_review`

### Varsayılan
- `review_status = new`

---

## 11.3 Global routing
### Eğer `form_type = global_workflow_brief`
Temel yön:
- `lead_bucket = global_accounting_workflow_brief`

Ama aşağıdaki duruma göre alt routing yapılabilir.

### Eğer `preferred_next_step = open_to_discovery_call`
- `routing_label = brief_open_to_call`

### Eğer `preferred_next_step = workflow_brief_first`
- `routing_label = async_review_first`

### Eğer `preferred_next_step = not_sure_yet`
- `routing_label = needs_manual_next_step`

### Eğer `affected_area = other`
- `lead_bucket = global_needs_review`

---

## 11.4 Discovery booking routing
Eğer `form_type = global_discovery_booking`
- `lead_bucket = global_discovery_call`
- `review_status = booked_or_pending`
- `routing_label = discovery_pipeline`

---

# 12) Review status sistemi

## 12.1 Önerilen status değerleri
- `new`
- `reviewing`
- `needs_followup`
- `qualified`
- `not_fit`
- `booked`
- `contacted`
- `closed`

## 12.2 Kullanım mantığı
İlk submitte çoğu form:
- `new`

Book a Call scheduling sonrası:
- `booked` veya `new` + calendar linked state

---

# 13) Sayfa bazlı CTA source listesi

## 13.1 Merkez site
- `hero_primary`
- `hero_secondary`
- `contact_section`
- `footer_contact`

## 13.2 TR site
- `navbar_cta`
- `hero_primary`
- `hero_secondary`
- `sector_card`
- `package_card`
- `pricing_preview`
- `scenario_card`
- `final_cta_section`
- `contact_page_form`

## 13.3 Global site
- `navbar_cta`
- `hero_primary`
- `hero_secondary`
- `pricing_section`
- `use_case_card`
- `qualification_cta`
- `book_call_primary`
- `contact_brief_form`

---

# 14) Google Sheets / Airtable / CRM sütun mantığı

## 14.1 Ortak ana sütunlar
Önerilen ortak ilk sütunlar:
- submission_id
- submitted_at
- site_family
- form_type
- page_slug
- cta_source
- full_name
- company_name
- email
- phone
- country
- city
- sector
- affected_area
- preferred_next_step
- primary_friction_summary
- current_tools
- review_status
- lead_bucket
- routing_label

## 14.2 TR ek sütunları
- clinic_branch
- lead_source_channel
- monthly_volume_estimate
- monthly_lead_estimate
- monthly_appointment_estimate
- office_main_friction_area
- demo_intent

## 14.3 Global ek sütunları
- team_size
- workflow_volume_estimate
- email_type
- who_is_joining

---

# 15) Backend normalize kuralları

## 15.1 Trim / temizleme
Tüm text alanlarında:
- baştaki / sondaki boşluklar temizlenmeli
- boş string’ler null’a çevrilebilir

## 15.2 Email normalize
- lowercase
- trim
- format validation

## 15.3 Enum alanlar
Select alanları frontend’de sabit enum’dan gelmeli.  
Backend yine de geçersiz değere karşı korumalı olmalı.

## 15.4 Primary friction summary
Çok uzun metinler makul uzunlukta sınırlandırılabilir ama aşırı sert kesilmemeli.

---

# 16) Spam / bot koruma alanları

## 16.1 Teknik yardımcı alanlar
- `honeypot_field`
- `client_rendered_at`
- `submit_latency_ms` (opsiyonel)
- `captcha_score` (opsiyonel)

## 16.2 Kullanım
Bunlar son kullanıcı verisi değil, güvenlik / spam önleme katmanıdır.

---

# 17) Başarı sonrası yönlendirme mantığı

## 17.1 Center
Submit sonrası:
- başarı mesajı
- ana sayfaya dönüş veya e-posta alternatifi

## 17.2 TR
Submit sonrası:
- başarı mesajı
- WhatsApp alternatifi
- pricing veya ana sayfa geçişi

## 17.3 Global
Submit sonrası:
- başarı mesajı
- discovery call alternatifi
- pricing veya use-cases geçişi

---

# 18) Ana kalite kontrol soruları

Her alan ve routing kararı için şu sorular sorulmalıdır:

1. Aynı bilgi için gereksiz ikinci bir teknik alan açılmış mı?
2. Bu alan UI’de gerçekten gerekli mi?
3. Routing bu bilgiyle daha iyi hale geliyor mu?
4. Metadata yeterince zengin mi?
5. TR ve global ayrımı teknik olarak temiz mi?
6. Bucket sistemi saçma bir karmaşa yaratıyor mu?
7. Bu yapı daha sonra Sheets / CRM / n8n tarafında rahat kullanılabilir mi?

---

# 19) Sonuç

Bu belgeye göre:
- form alan isimleri standartlaşmıştır
- metadata alanları netleşmiştir
- TR, global ve merkez submit’leri ayrı ama uyumlu yapıdadır
- lead bucket ve routing mantığı tanımlanmıştır
- UI form yapısı artık backend ve otomasyon katmanına bağlanabilir hale gelmiştir

Bu dosya, sonraki aşamada:
- frontend form schema
- server action / API handler
- Sheets kolonları
- n8n submit routing
- CRM field mapping
için ana referans olacaktır.