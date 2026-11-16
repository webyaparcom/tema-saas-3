/* karsilastirma-tablo-2 — Paket Kartları — İşaret Listeli (1 Kas 2026, T1-B varyant).
   Yer tutucular: kk2head kk2cards kk2n. Veri: desing.paketler[] = [{id, ad{}, fiyat, fiyatNot{}, onerilen, ctaLabel{}?, url}], json.data[] = [{ad{}, degerler[]}] — karsilastirma-tablo ile birebir.
   Ortak yardımcılar: esc t guvenliHref gorselYol evet sayi metinleriYaz (desing metinleri kaçışlı). */
var D = json.desing || {};
var L = json.lang || "tr";

/* HTML kaçışı — html'e giden her değer bundan geçer */
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
/* Dil seçimi: aktif dil → tr → en → ilk anahtar (motorun wmPickLang'i) */
function t(v) { return wmPickLang(v, L); }
/* Bağlantı: dış/mailto/tel/# aynen; iç sayfa adı → dil önekli yol; javascript: vb. reddedilir */
function guvenliHref(v) {
  var s = String(v == null ? "" : v).trim();
  if (!s) { return ""; }
  if (/^\s*(javascript|vbscript|file|data):/i.test(s)) { return ""; }
  if (/^(https?:)?\/\//i.test(s) || /^(mailto:|tel:|#)/i.test(s) || s.charAt(0) === "/") { return s; }
  return wxLangInternalHref(s);
}
/* Görsel yolu: "/" ve http(s) aynen; yalın ad → /img/<ad>; tehlikeli şema → "" */
function gorselYol(v) {
  var s = String(v == null ? "" : v).trim();
  if (!s) { return ""; }
  if (/^\s*(javascript|vbscript|file|data):/i.test(s)) { return ""; }
  if (s.charAt(0) === "/" || /^https?:\/\//i.test(s)) { return s; }
  return "/img/" + s;
}
function evet(v, d) {
  if (v === undefined || v === null || v === "") { return d; }
  return !(v === false || v === "false" || v === 0 || v === "0");
}
function sayi(v, d, mn, mx) {
  var n = parseInt(v, 10);
  if (!isFinite(n)) { n = d; }
  return Math.min(mx, Math.max(mn, n));
}
/* desing'deki düz metin / {tr,en,ar} değerlerini {{anahtar}} yerine KAÇIŞLI yazar.
   Motor aynı yer tutucuyu ham yazardı; back.js önce davrandığı için kaçışsız değer html'e ulaşmaz. */
function metinleriYaz() {
  var k;
  for (k in D) {
    if (!Object.prototype.hasOwnProperty.call(D, k)) { continue; }
    var v = D[k];
    if (v == null) { continue; }
    var dilli = typeof v === "object" && !Array.isArray(v) && (typeof v.tr === "string" || typeof v.en === "string");
    if (typeof v === "object" && !dilli) { continue; }
    var deger = esc(t(v));
    var desen = new RegExp("\\{\\{" + String(k).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\}\\}", "g");
    html = html.replace(desen, function () { return deger; });
  }
}

var kk2Paket = Array.isArray(D.paketler) ? D.paketler.slice(0, 4) : [];
var kk2Rows = Array.isArray(json.data) ? json.data : [];
var kk2Yes = t(D.yesLabel);
var kk2No = t(D.noLabel);
var kk2Oner = t(D.recommendedLabel);
var kk2CtaDef = t(D.ctaLabel);
function kk2Bool(v) { return !(v === false || v === "false" || v === 0 || v === "0" || v == null || v === ""); }

var kk2Cards = "";
var kk2i;
var kk2r;
for (kk2i = 0; kk2i < kk2Paket.length; kk2i++) {
  var p = kk2Paket[kk2i] || {};
  var oner = kk2Bool(p.onerilen);
  var fiyat = p.fiyat != null ? String(p.fiyat) : "";
  var fiyatNot = t(p.fiyatNot);
  var url = guvenliHref(p.url);
  var cta = t(p.ctaLabel) || kk2CtaDef;
  var liste = "";
  for (kk2r = 0; kk2r < kk2Rows.length; kk2r++) {
    var row = kk2Rows[kk2r] || {};
    var ad = t(row.ad);
    if (!ad) { continue; }
    var v = Array.isArray(row.degerler) ? row.degerler[kk2i] : undefined;
    if (v === true || v === "true") {
      liste += '<li class="modulex-kk2-evet"><span class="material-symbols-outlined" aria-hidden="true">check_circle</span><span>' + esc(ad) +
        '<span class="modulex-kk2-sr"> — ' + esc(kk2Yes) + "</span></span></li>";
    } else if (v === false || v === "false" || v == null || v === "") {
      liste += '<li class="modulex-kk2-hayir"><span class="material-symbols-outlined" aria-hidden="true">cancel</span><span>' + esc(ad) +
        '<span class="modulex-kk2-sr"> — ' + esc(kk2No) + "</span></span></li>";
    } else {
      var deger = typeof v === "object" ? t(v) : String(v);
      liste += '<li class="modulex-kk2-evet"><span class="material-symbols-outlined" aria-hidden="true">check_circle</span><span>' + esc(ad) +
        ': <strong class="modulex-kk2-deger">' + esc(deger) + "</strong></span></li>";
    }
  }
  kk2Cards += '<li class="modulex-kk2-card' + (oner ? " modulex-kk2-oner" : "") + '">' +
    (oner && kk2Oner ? '<span class="modulex-kk2-rozet">' + esc(kk2Oner) + "</span>" : "") +
    '<h3 class="modulex-kk2-ad">' + esc(t(p.ad)) + "</h3>" +
    (fiyat ? '<p class="modulex-kk2-fiyat"><bdi dir="ltr">' + esc(fiyat) + "</bdi></p>" : "") +
    (fiyatNot ? '<p class="modulex-kk2-not">' + esc(fiyatNot) + "</p>" : "") +
    (liste ? '<ul class="modulex-kk2-liste">' + liste + "</ul>" : "") +
    (url && cta ? '<a class="modulex-kk2-btn" href="' + esc(url) + '">' + esc(cta) + "</a>" : "") + "</li>";
}

var kk2Head = "";
if (t(D.eyebrow) || t(D.title) || t(D.description)) {
  kk2Head = '<header class="modulex-kk2-head">' +
    (t(D.eyebrow) ? '<p class="modulex-kk2-eyebrow">' + esc(t(D.eyebrow)) + "</p>" : "") +
    (t(D.title) ? '<h2 class="modulex-kk2-title">' + esc(t(D.title)) + "</h2>" : "") +
    (t(D.description) ? '<p class="modulex-kk2-desc">' + esc(t(D.description)) + "</p>" : "") + "</header>";
}

html = html.replace(/\{\{kk2head\}\}/g, function () { return kk2Head; });
html = html.replace(/\{\{kk2cards\}\}/g, function () { return kk2Cards; });
html = html.replace(/\{\{kk2n\}\}/g, function () { return String(Math.max(1, kk2Paket.length)); });
metinleriYaz();
