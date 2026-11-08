# Karşılaştırma / Paket Tablosu — `wuuh76` (tema-saas-3)

## Amaç
Sütun = paket (2–4), satır = özellik; hücre ✓ / ✗ / metin; «önerilen» sütun vurgusu (token); mobilde sütunlar yatay kaydırılır, ilk sütun sabit (position: sticky); altta CTA satırı. desing.stil: cizgili (zebra + çizgi) | kartli-sutun (her sütun ayrı kart) | sade. Veri: desing.paketler[] = [{id, ad{tr,en,ar}, fiyat, fiyatNot{}, onerilen, ctaLabel{}?, url}], data[] = satırlar [{ad{}, degerler[]}] (deger: true/false/sayı/metin/{tr,en,ar}). Renkler yalnız token; koyu mod otomatik; RTL mantıksal CSS.

## Meta
- version: `1.0.0`
- category: `fiyat`
- tags: karşılaştırma, paket, fiyat, tablo, pricing, compare, ar
- icon: `table_chart`

## Dosyalar
- `back.js` — sunucu tarafı çizim
- `index.html` — şablon
- `index.jpeg` — önizleme görseli
- `index.json` — tanım
- `README.md` — bu belge

## Not
Bu klasör siteye özel kurulum örneğidir; kurulum kaynağı `projeler/webyapar/data/tema/tema-set/icerik/saas-3/spec.js` → `tema-set/araclar/demo-kur.js` (webmaker uçları). Burası elle değiştirilmez; değişiklik spec'te yapılıp yeniden kurulur.
