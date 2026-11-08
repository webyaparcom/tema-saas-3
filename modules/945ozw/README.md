# Footer 9 — Kurumsal — `945ozw` (tema-saas-3)

## Amaç
Kurumsal alt bilgi (footer): 4 sütun — marka (logo + kısa metin), sayfalar, iletişim (address/phone/email; boşsa setting.phone/email, hiçbiri yoksa sütun gizli), sosyal (social: [{ad,url}]; boşsa gizli). Alt şerit: telif (yıl otomatik), yasal bağlantılar (legal: [{text,href}], dil önekli), dil seçici. Renkler yalnız desing anahtarı + var(--mx-site-*, fallback): token'sız sitede fallback, colorScheme:auto sitede koyu mod uyumlu. logo_maxh / logo_plate footer-3 ile aynı.

## Meta
- version: `1.0.0`
- category: `footer`
- icon: `footer`

## Dosyalar
- `back.js` — sunucu tarafı çizim
- `index.html` — şablon
- `index.jpeg` — önizleme görseli
- `index.json` — tanım
- `README.md` — bu belge

## Not
Bu klasör siteye özel kurulum örneğidir; kurulum kaynağı `projeler/webyapar/data/tema/tema-set/icerik/saas-3/spec.js` → `tema-set/araclar/demo-kur.js` (webmaker uçları). Burası elle değiştirilmez; değişiklik spec'te yapılıp yeniden kurulur.
