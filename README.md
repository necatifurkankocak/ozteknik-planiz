# Özteknik Rekor Hidrolik — İş Takip · Teklif · Müşteri Portalı · Vitrin (prototip)

Tek sayfalık React (Vite) prototipi. Veriler tarayıcıda tutulur; sayfa yenilenince başlangıç verisine döner.
Katalog: Şubat 2026 basılı katalogdan okunan 3.341 ürün, 265 grup, 82 kategori (liste fiyatları KDV hariç).

## Demo hesapları (şifre: herhangi bir şey)
**Personel** — mustafa@ozteknikrekor.com.tr (firma sahibi, tam yetki) · merve@ozteknikrekor.com.tr (finans onayı) ·
ahmet.kaya@… (satış yöneticisi) · deniz.acar@… (satış temsilcisi) · elif.demir@… (muhasebe) · serkan.yildiz@… (depo) ·
burak.sahin@… (satınalma) · hakan.ozturk@… (sevkiyat) · mehmet.arslan@… (üretim)

**Müşteri portalı** — selim@ankaraismak.com (bayi, yetkili) · kerem@ankaraismak.com (onay yetkisi yok → firma içi onay) ·
burcu@ankaraismak.com (yalnızca finans) · zeynep.koc@kmaden.com (teklif onayı bekleyen) · can.yilmaz@sta.com.tr (USD teklif) ·
onur@egehidrolik.com (OEM) · elif@trakyamakine.com (vitrinden üye, onay bekliyor)

Vitrin için giriş ekranındaki "Üye olmadan ürünleri gör" düğmesi.

## Yerelde çalıştırma
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/
```

## GitHub Pages ile yayınlama
1. GitHub'da yeni bir depo açın (ör. `ozteknik-demo`), bu klasörü yükleyin (`main` dalı).
2. Depo ayarları → **Pages** → *Build and deployment* → Source: **GitHub Actions**.
3. `main` dalına her push'ta `.github/workflows/deploy.yml` otomatik derleyip yayınlar.
   Adres: `https://<kullanici>.github.io/ozteknik-demo/`
4. Telefonda açıp "Ana ekrana ekle" ile uygulama gibi kullanılabilir (PWA).

`vite.config.js` içindeki `base: "./"` sayesinde depo adı ne olursa olsun çalışır.

## Yapı
- `src/App.jsx` — tüm uygulama (katalog verisi, motor, tohum veri, ekranlar) tek dosyada
- `public/manifest.webmanifest`, `public/sw.js`, `public/icon.svg` — PWA
- `.github/workflows/deploy.yml` — Pages dağıtımı
