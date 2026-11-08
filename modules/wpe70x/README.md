# Maps — `wpe70x` (tema-saas-3)

## Amaç
Google Maps konum gösterim modülü. Firmanın fiziksel konumunu interaktif harita ile sergiler. 20 farklı projede kullanılır: kurumsal şirketler, restoranlar, sağlık kuruluşları, üretim firmaları ve hizmet sektöründe. Yol tarifi ve harita üzerinde zoom özellikleri vardır. Görsel varyant desing.stil (31 Eki 2026): "" klasik (dalgalı kenar, tam genişlik, bugünkü görünüm) · "cerceveli" (yuvarlak köşe + gölge + yüzey çerçeve, üstte adres rozeti: address ya da badgeText) · "yan-bilgi" (harita 2/3, yanda bilgi kartı: infoTitle, address/phone/email — boşsa setting'den — ve directions düğmesi). Kök eleman <a> olduğundan kartta ikinci bağlantı yok. Renkler var(--mx-site-*) token; backgroundcolor #ffffff kuralı değişmedi.

## Meta
- version: `1.1.0`
- category: `map`
- icon: `map`

## Dosyalar
- `back.js` — sunucu tarafı çizim
- `index.html` — şablon
- `index.jpeg` — önizleme görseli
- `index.json` — tanım
- `map.png` — görsel
- `README.md` — bu belge

## Not
Bu klasör siteye özel kurulum örneğidir; kurulum kaynağı `projeler/webyapar/data/tema/tema-set/icerik/saas-3/spec.js` → `tema-set/araclar/demo-kur.js` (webmaker uçları). Burası elle değiştirilmez; değişiklik spec'te yapılıp yeniden kurulur.
