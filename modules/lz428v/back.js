/* fiyat-one-cikan-panel — Fiyat Öne Çıkan Panel — büyük vurgulu paket ve yan liste (16 Kas 2026 · mcp:webmaker/20261116-031127-jyn8 · D17).
   Öne çıkan paket (featured; yoksa ortadaki) geniş vurgu panelinde: rozet, ad, dev fiyat, not, iki sütun özellik, dolu düğme. Diğer paketler yanında sıkı kartlar: ad, fiyat, ilk üç özellik, düğme.
   Üretici: scripts/modul-fabrika (aile pricing) — elle düzenleme yerine tanımı değiştirip yeniden üret.
   Veri: data: [{ ad|plan, fiyat|price, donem|period?, not|note?, ozellikler|features (dizi · sözlük · «a|b|c»), cta|ctaText?, url|ctaUrl?, vurgu|featured?, rozet|flag? }] — metinler dil sözlüğü; adsız paket atlanır. */
const P = "modulex-fiyat-one-cikan-panel";
const IMG_KOK = "/img/";
/* --- ortak ön ek (scripts/modul-fabrika/on-ek.js) — dil · güvenlik · sayı yardımcıları --- */
const pick = (v) => {
  if (v == null) return "";
  if (typeof v !== "object") return String(v);
  if (typeof wmPickLang === "function") { try { return wmPickLang(v, json.lang) || ""; } catch (e) { /* alt satır */ } }
  return String(v[json.lang] ?? Object.values(v)[0] ?? "");
};
const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const medyaUrl = (v) => {
  const s = String(v ?? "").trim();
  if (!s || /^\s*(javascript|vbscript|file):/i.test(s)) return "";
  if (/^data:/i.test(s)) return /^data:(image|video|audio)\//i.test(s) ? s : "";
  if (s.startsWith("/") || /^https?:\/\//i.test(s)) return s;
  return `${IMG_KOK}${s}`;
};
const href = (v) => {
  const s = String(v ?? "").trim();
  if (!s || /^\s*(javascript|vbscript|data):/i.test(s)) return "";
  if (/^(https?:)?\/\//i.test(s) || /^(mailto:|tel:|#)/i.test(s)) return s;
  return wxLangInternalHref(s);
};
const dogru = (v, d) => (v === undefined || v === null || v === "") ? d : !(v === false || v === "false" || v === 0 || v === "0");
const ikonAd = (v) => String(v ?? "").trim().replace(/[^a-z0-9_]/gi, "");
const satirlar = (s) => esc(s).replace(/\r?\n/g, "<br />");
/* ilk dolu alan: yeni ad önce, eski kuşak şablonun adı yedek (G6 yalnız path değiştirerek takas eder) */
const ilk = (o, ks) => {
  for (const k of ks) {
    const v = o == null ? undefined : o[k];
    if (v == null || v === "") continue;
    if (typeof v === "object" && !Array.isArray(v) && !Object.keys(v).length) continue;
    return v;
  }
  return "";
};
const metinAl = (o, ks) => pick(ilk(o, ks)).trim();
const { desing: des = {} } = json;
const setting = webmakerdata?.setting ?? {};
const veri = Array.isArray(json.data) ? json.data : [];
const dil = String(json.lang || "");
const sayiBicim = (v, ondalik) => {
  try { return new Intl.NumberFormat(dil || undefined, { minimumFractionDigits: ondalik, maximumFractionDigits: ondalik }).format(v); } catch (e) { return String(v); }
};
const ikonH = (ad, sinif) => (ad ? `<span class="${sinif} material-symbols-outlined" aria-hidden="true">${ad}</span>` : "");
const no = (i) => String(i + 1).padStart(2, "0");
const ctaHtml = () => {
  const a1 = metinAl(des, ["cta_ad", "button"]); const u1 = href(ilk(des, ["cta_url", "buttonurl", "url"]));
  const a2 = metinAl(des, ["cta2_ad"]); const u2 = href(ilk(des, ["cta2_url"]));
  const d = (a, u, ek) => (a && u ? `<a class="${P}-dugme${ek}" href="${esc(u)}">${esc(a)}<span class="material-symbols-outlined mx-flip" aria-hidden="true">arrow_forward</span></a>` : "");
  const ic = d(a1, u1, "") + d(a2, u2, ` ${P}-dugme--ikincil`);
  return ic ? `<div class="${P}-cta">${ic}</div>` : "";
};
const basHtml = (B, ek) => {
  if (!B.ust && !B.baslik && !B.metin && !ek) return "";
  return `<header class="${P}-bas">`
    + (B.ust ? `<p class="${P}-ust">${esc(B.ust)}</p>` : "")
    + (B.baslik ? `<h2 class="${P}-baslik" id="${P}-{{id}}-b">${esc(B.baslik)}</h2>` : "")
    + (B.metin ? `<p class="${P}-metin">${satirlar(B.metin)}</p>` : "")
    + (ek || "")
    + "</header>";
};
/* --- aile: pricing --- */
/* özellikler: dizi · sözlük · «a|b|c» borusu ya da satır satır (pricing-1 `features`) */
const ozellik = (v) => {
  const liste = Array.isArray(v) ? v.map((x) => pick(x)) : pick(v).split(/\||\r?\n/);
  return liste.map((x) => String(x).trim()).filter(Boolean);
};
const kayitlar = veri.map((o) => ({
  ad: metinAl(o, ["ad", "plan", "name", "title"]), fiyat: metinAl(o, ["fiyat", "price"]), donem: metinAl(o, ["donem", "period"]),
  not: metinAl(o, ["not", "note", "description"]), oz: ozellik(ilk(o, ["ozellikler", "features", "maddeler"])),
  cta: metinAl(o, ["cta", "ctaText", "btnText"]), url: href(ilk(o, ["url", "ctaUrl", "btnUrl"])) || "#",
  vurgu: dogru(ilk(o, ["vurgu", "featured"]), false), rozet: metinAl(o, ["rozet", "flag", "badge"]), ikon: ikonAd(ilk(o, ["ikon", "icon"])),
})).filter((k) => k.ad);
/* öne çıkan: işaretli ilk paket; yoksa ortadaki */
const oneI = kayitlar.findIndex((k) => k.vurgu) > -1 ? kayitlar.findIndex((k) => k.vurgu) : Math.floor((kayitlar.length - 1) / 2);
/* --- parça üreticileri --- */
const fiyatH = (k, s) => (k.fiyat ? `<p class="${P}-${s || "fiyat"}"><span class="${P}-tutar">${esc(k.fiyat)}</span>${k.donem ? `<span class="${P}-donem">${esc(k.donem)}</span>` : ""}</p>` : "");
const ozH = (k, s) => (k.oz.length ? `<ul class="${P}-${s || "oz"}">${k.oz.map((x) => `<li><span class="material-symbols-outlined" aria-hidden="true">check</span><span>${esc(x)}</span></li>`).join("")}</ul>` : "");
const notH = (k, s) => (k.not ? `<p class="${P}-${s || "not"}">${satirlar(k.not)}</p>` : "");
const rozetH = (k, s) => (k.rozet && k.vurgu ? `<span class="${P}-${s || "rozet"}">${esc(k.rozet)}</span>` : "");
const pctaH = (k, s) => (k.cta ? `<a class="${P}-${s || "pcta"}" href="${esc(k.url)}">${esc(k.cta)}<span class="material-symbols-outlined mx-flip" aria-hidden="true">arrow_forward</span></a>` : "");
const adH = (k, t, s) => `<${t || "h3"} class="${P}-${s || "pad"}">${esc(k.ad)}</${t || "h3"}>`;
/* --- modül: fiyat-one-cikan-panel --- */
const kart = () => "";
const sar = (ic, A) => {
    const o = A[oneI];
    const yan = A.filter((k, i) => i !== oneI);
    return `<div class="${P}-izgara${yan.length ? "" : ` ${P}-izgara--tek`}"><article class="${P}-ana">${o.rozet ? `<span class="${P}-rozet">${esc(o.rozet)}</span>` : ""}${adH(o, "h3", "aad")}${fiyatH(o, "afiyat")}${notH(o, "anot")}${ozH(o, "aoz")}${pctaH(o, "acta")}</article>${yan.length ? `<ul class="${P}-yan">${yan.map((k, i) => `<li class="${P}-ykart" style="--sira: ${i}">${adH(k)}${fiyatH(k)}${k.oz.length ? `<ul class="${P}-oz">${k.oz.slice(0, 3).map((x) => `<li><span class="material-symbols-outlined" aria-hidden="true">check</span><span>${esc(x)}</span></li>`).join("")}</ul>` : ""}${pctaH(k)}</li>`).join("")}</ul>` : ""}</div>`;
  };
const B = { ust: metinAl(des, ["ust","badge","kicker"]), baslik: metinAl(des, ["baslik","title"]), metin: metinAl(des, ["metin","description"]) };
/* veri yoksa gövde hiç kurulmaz (sarmalayıcı boş listeye dokunmaz) */
const BOS = !kayitlar.length;
const govde = BOS ? "" : sar(kayitlar.map((k, i) => kart(k, i, kayitlar.length, kayitlar)).join(""), kayitlar, B);
const bas = basHtml(B, "");
const sinif = (bas || B.ust || B.baslik || B.metin ? "" : ` ${P}--bassiz`);
html = html
  .replaceAll("{{fbsinif}}", () => sinif)
  .replaceAll("{{fbetiket}}", () => (B.baslik ? `aria-labelledby="${P}-{{id}}-b"` : ""))
  .replaceAll("{{fbbas}}", () => bas)
  .replaceAll("{{fbgovde}}", () => govde);
if (BOS) html = "";
