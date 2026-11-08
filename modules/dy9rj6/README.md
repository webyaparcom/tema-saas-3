# Galeri Masonry (Filtre + Lightbox) — `dy9rj6` (tema-saas-3)

## Amaç
Masonry (sütun) ya da sabit oranlı ızgara galeri: kategori çipleriyle filtre (?cat= URL durumu, aria-pressed), lightbox (klavye, filtrelenmişte yalnız görünenler gezilir), lazy yükleme (width/height ile CLS yok), görselsiz öğede nötr yer tutucu. gap:0 ile kenarsız ızgara, hover başlık. Öğeler data[] içinde {img, thumb?, title{tr,en,ar}, cat, w, h, alt{tr,en,ar}}; kategoriler desing.cats[]. Üç dil + RTL.

## Meta
- version: `1.0.0`
- category: `galeri`
- tags: galeri, masonry, filtre, lightbox, portfolyo, gallery, ar
- icon: `photo_library`

## Dosyalar
- `back.js` — sunucu tarafı çizim
- `index.html` — şablon
- `index.json` — tanım
- `README.md` — bu belge

## Not
Bu klasör siteye özel kurulum örneğidir; kurulum kaynağı `projeler/webyapar/data/tema/tema-set/icerik/saas-3/spec.js` → `tema-set/araclar/demo-kur.js` (webmaker uçları). Burası elle değiştirilmez; değişiklik spec'te yapılıp yeniden kurulur.
