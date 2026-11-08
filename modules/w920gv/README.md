# Sekmeli Hizmetler — `w920gv` (tema-saas-3)

## Amaç
Hizmet anlatımı sekmelerle: sol/üst sekme listesi (ikon + ad), seçili hizmetin görseli + açıklama + madde listesi + CTA. Mobilde akordeon. ARIA tabs kalıbı (ok tuşları, Home/End, RTL'de yön ters). desing.stil: dikey | yatay-ust | kart-gecis. Veri: data[] = [{ikon, ad{tr,en,ar}, ozet{}, maddeler[{}], img, alt{}, url}]. Renkler yalnız token (var(--mx-site-*)); koyu mod otomatik. Üç dil + RTL.

## Meta
- version: `1.0.0`
- category: `hizmet`
- tags: hizmet, sekme, tabs, akordeon, services, ar
- icon: `view_sidebar`

## Dosyalar
- `back.js` — sunucu tarafı çizim
- `index.html` — şablon
- `index.jpeg` — önizleme görseli
- `index.json` — tanım
- `README.md` — bu belge

## Not
Bu klasör siteye özel kurulum örneğidir; kurulum kaynağı `projeler/webyapar/data/tema/tema-set/icerik/saas-3/spec.js` → `tema-set/araclar/demo-kur.js` (webmaker uçları). Burası elle değiştirilmez; değişiklik spec'te yapılıp yeniden kurulur.
