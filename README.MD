# EventHub — Etkinlik & Biletleme Platformu (Case Study)

EventHub, harici hiçbir kütüphane veya framework kullanılmadan tamamen **Vanilla JavaScript, HTML5 ve CSS3** ile geliştirilmiş, yüksek performanslı ve SEO odaklı bir etkinlik casedir.

---

## 1. Projeye Başlangıç ve İhtiyaç Analizi
* **Saf Teknolojiler:** Harici hiçbir CSS/JS kütüphanesi  kullanılmadan, saf HTML5, CSS3 ve Vanilla JavaScript tercih edildi.
* **Modüler Mimari:** Projenin sürdürülebilir olması adına dosya/klasör yapısı Clean Code prensiplerine uygun olarak kurgulandı .
* **Responsive Tasarım:** Ana sayfa ve alt sayfaların iskeleti, mobil öncelikli ve esnek (Flexbox/Grid) yapıda kodlandı.

---

## 2. Mock Veri ve JavaScript Mimarisi
İçeriklerin gerçekçi bir deneyim sunması adına biletleme platformlarındaki veri yapıları incelendi; afiş, başlık, kategori, mekan, tarih ve fiyat bilgileri derlendi. Performansı artırmak için tüm görseller **WebP** formatında optimize edildi ve veriler  dosyasında yapılandırıldı.

* **Dinamik Render ve Filtreleme:** 
* **Yaklaşan Etkinlikler Algoritması:** 
* **Favori Mekanizması:** 
* **Dinamik Detay Sayfası:** 

---

## 3. Blog ve İçerik Yönetimi
Makale metinleri ve kullanıcı niyetine uygun şekilde, yapay zeka destekli ve SEO uyumlu içeriklerle kurgulandı.

---

## 4. Performans ve Core Web Vitals Optimizasyonları
Lighthouse denetimlerinde yüksek skorlar elde etmek amacıyla teknik optimizasyonlar uygulandı:

---

## 5. Sektörel SEO Analizi, Meta ve Schema.org Standartları
Biletleme sektöründeki öncü platformların (Passo, Biletix vb.) başlık ve meta hiyerarşisi referans alındı:

* **Meta Etiketleri & Sosyal Paylaşım:** Kullanıcı niyetine uygun `Title` ve `Description` etiketleri; sosyal medya paylaşımlarında zengin önizleme sağlayan Open Graph ve Twitter Card yapıları eklendi.
* **Schema.org (JSON-LD):** Arama motorlarının içeriği doğrudan anlamlandırması için her sayfaya uygun yapılandırılmış veriler entegre edildi:
  * Etkinlik detayları için `Event`
  * Blog yazıları için `Article`
  * Sıkça sorulan sorular için `FAQPage`
  * Müşteri deneyim puanları için `Review` ve `AggregateRating`
  * Gezinme hiyerarşisi ve marka kimliği için `BreadcrumbList` ve `Organization`
* **Taranabilirlik Dosyaları:** Tarama bütçesini doğru yönetmek adına arama motoru direktiflerini içeren `robots.txt` ile tüm sayfaların canonical linklerini öncelik (`priority`) değerleriyle listeleyen `sitemap.xml` dosyaları kök dizine eklendi.

---

## 6. Sürüm Kontrolü ve Geliştirme Süreci
Tüm süreç boyunca versiyon kontrol sistemi olarak **Git** kullanıldı. Sayfa tasarımları, iş mantığı düzeltmeleri, stil optimizasyonları ve SEO entegrasyonları düzenli, anlamlı commit mesajlarıyla adım adım kayıt altına alındı.

---

## 7. Dosya Yapısı

```text
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── data.js
│   │   └── main.js
│   └── img/          # WebP formatında optimize edilmiş görseller
├── index.html
├── etkinlikler.html
├── etkinlik-detay.html
├── blog.html
├── blog-detay.html
├── hakkimizda.html
├── iletisim.html
├── gizlilik-politikasi.html
├── kvkk.html
├── robots.txt
├── sitemap.xml
└── README.md