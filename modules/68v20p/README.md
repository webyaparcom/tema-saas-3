# Süreç Adımları — `68v20p` (tema-saas-3)

## Amaç
3–6 adımlık süreç anlatımı: çizgi/ok ile bağlı daire numaralar, altında başlık + metin. Aktif adım vurgusu kaydırmayla ilerler (IntersectionObserver; JS yoksa tüm adımlar düz görünür). desing.stil: yatay (çizgiyle bağlı sıra; mobilde dikey zaman çizgisi) | dikey (iki yanlı zaman çizgisi) | kartli (kart + ok ayraç). Veri: data[] = [{no?, baslik{tr,en,ar}, metin{}, ikon?}]. Renkler yalnız token; koyu mod otomatik; RTL'de ok/çizgi yönü aynalanır.

## Meta
- version: `1.0.0`
- category: `surec`
- tags: süreç, adım, zaman çizgisi, process, steps, ar
- icon: `timeline`

## Dosyalar
- `back.js` — sunucu tarafı çizim
- `index.html` — şablon
- `index.jpeg` — önizleme görseli
- `index.json` — tanım
- `README.md` — bu belge

## Not
Bu klasör siteye özel kurulum örneğidir; kurulum kaynağı `projeler/webyapar/data/tema/tema-set/icerik/saas-3/spec.js` → `tema-set/araclar/demo-kur.js` (webmaker uçları). Burası elle değiştirilmez; değişiklik spec'te yapılıp yeniden kurulur.
