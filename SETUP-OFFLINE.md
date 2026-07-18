# 🚀 راهنمای تنظیم حالت آفلاین (Offline Setup)

این برنامه اکنون می‌تواند **بدون اتصال اینترنت** کار کند! 🌐❌

## مرحله 1️⃣: دانلود فایل‌های Vendor

### روش الف: استفاده از اسکریپت خودکار (پیشنهادی)

اگر در **Linux/Mac** یا **Windows Git Bash** استفاده می‌کنید:

```bash
chmod +x SETUP-OFFLINE.sh
./SETUP-OFFLINE.sh
```

### روش ب: دانلود دستی

اگر اسکریپت کار نکرد، این پوشه‌ها را ایجاد کنید:

```
assets/
├── vendor/
│   ├── font-awesome/
│   │   ├── css/
│   │   └── fonts/
│   ├── prismjs/
│   │   ├── themes/
│   │   └── plugins/autoloader/
│   ├── marked/
│   ├── katex/
│   │   └── fonts/
│   ├── mermaid/
│   └── sweetalert2/
└── fonts/
```

سپس فایل‌های این CDN‌ها را دانلود کنید:

- **Font Awesome**: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/
- **Prism**: https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/
- **Marked**: https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js
- **KaTeX**: https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/
- **Mermaid**: https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js
- **SweetAlert2**: https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/
- **Vazirmatn Font**: https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/

---

## مرحله 2️⃣: نصب Dependencies

```bash
npm install
```

---

## مرحله 3️⃣: اجرا برای توسعه (Development)

```bash
npm run dev
```

سپس مرورگر خود را در `http://localhost:3000` باز کنید.

---

## مرحله 4️⃣: Build برای GitHub Pages

```bash
npm run build
```

خروجی در پوشه `www/` قرار می‌گیرد.

---

## مرحله 5️⃣: Build برای Capacitor (Android/iOS)

```bash
npm run build
npx cap add android
npx cap sync
npx cap open android
```

---

## ✅ چک‌لیست کامل

- [ ] اسکریپت `SETUP-OFFLINE.sh` اجرا شد یا فایل‌ها دانلود شدند
- [ ] `npm install` اجرا شد
- [ ] `npm run dev` کار می‌کند
- [ ] برنامه بدون اینترنت کار می‌کند ✨

---

## 🔧 عیب‌یابی

### مشکل: فایل‌ها یا فونت‌ها لود نمی‌شوند

**حل:**
1. مسیرهای فایل‌ها را در `index.html` بررسی کنید
2. آیا پوشه‌های `assets/` موجود است؟
3. Console (F12) را باز کنید و خطاها را بررسی کنید

### مشکل: Service Worker کار نمی‌کند

**حل:**
1. در Chrome DevTools → Application → Service Workers بررسی کنید
2. اطمینان حاصل کنید که `sw.js` به درستی ثبت شده است
3. `Cache Storage` را پاک کنید و دوباره تلاش کنید

### مشکل: آیکون‌های Font Awesome نمایش داده نمی‌شوند

**حل:**
1. اطمینان حاصل کنید `assets/vendor/font-awesome/` موجود است
2. فایل‌های فونت CSS و WOFF2 دانلود شده‌اند
3. در F12 Network tab، درخواست‌های فونت را بررسی کنید

---

## 📝 نکات مهم

- ✅ **GitHub Pages**: از پوشه `www/` استفاده می‌کند
- ✅ **Capacitor**: فایل‌ها در `www/` قرار می‌گیرند
- ✅ **Service Worker**: خودکار تمام فایل‌ها را cache می‌کند
- ✅ **Offline Mode**: کامل کار می‌کند پس از بارگذاری اول

---

## 🎉 آماده‌ای!

برنامه اکنون **100% آفلاین** و **کاملاً مستقل** است! 🚀

برای سوالات: [Issues](https://github.com/abasasdzadh/text-ai/issues)
