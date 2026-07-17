# ⚡ محیط کاری متون هوش مصنوعی (Text AI)

[🇬🇧 **English / انگلیسی**](README.md) | 
[🚀 **Live Web App / دمو زنده**](https://abasasdzadh.github.io/text-ai/)


[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/abasasdzadh/text-ai/android.yml?branch=main&label=Android%20Build)](https://github.com/abasasdzadh/text-ai/actions)
[![Capacitor](https://img.shields.io/badge/Capacitor-v6-blueviolet.svg)](https://capacitorjs.com/)
[![Vite](https://img.shields.io/badge/Vite-v5-646CFF.svg)](https://vitejs.dev/)
[![PWA](https://img.shields.io/badge/PWA-Supported-00c853.svg)](https://web.dev/progressive-web-apps/)

برنامه **Text AI** یک محیط کاری ماژولار، توسعه‌پذیر و بهینه‌سازی شده برای مدیریت، فرمت‌دهی و نمایش خروجی‌های متنی و کدهای تولید شده توسط هوش مصنوعی است. این برنامه با رویکرد فرانت‌اند سبک طراحی شده و با باندلر Vite مدیریت می‌شود؛ همچنین به عنوان یک وب‌اپلیکیشن پیش‌رونده (PWA) به صورت آفلاین کار می‌کند و با Capacitor به صورت نیتیو روی اندروید و iOS اجرا می‌گردد.

---

## 🌟 امکانات کلیدی پروژه

- **پشتیبانی کامل از مارک‌داون:** رندر عناوین، جداول زبرا، کادر نقل‌قول، لیست‌ها، متون ضخیم/کج و غیره .
- **لیست انجام کار (Task Lists):** چک‌باکس‌های تیک‌دار بدون بالت‌های دایره‌ای مزاحم، سازگار با انواع وب‌ویوها .
- **فرمول‌نویسی ریاضی (LaTeX):** رندر زنده فرمول‌های درون‌خطی و بلوکی مهندسی به کمک موتور پرسرعت KaTeX.
- **ترسیم زنده نمودارها (Mermaid):** ترسیم فلوچارت‌ها، نمودارهای توالی و معماری‌های متنی به صورت گرافیکی .
- **پیش‌نمایش زنده HTML:** رندر ایزوله خروجی کدهای HTML درون Iframe مستقل (به سبک Google AI Studio) .
- **هدر چسبان کادرها:** دسترسی همیشگی به دکمه‌های کپی، دانلود، جمع‌کردن و پیش‌نمایش در هنگام اسکرول کدها .
- **تغییر تراز (RTL / LTR):** امکان چپ‌چین یا راست‌چین کردن کل برنامه با ذخیره خودکار وضعیت در حافظه مرورگر .
- **هارمونی تم تاریک/روشن:** هماهنگی بلادرنگ تم تاریک و روشن در بخش کدهای Prism، اعلان‌ها و نمودارهای Merma id.
- **وب‌اپلیکیشن آفلاین (PWA):** کش شدن خودکار فایل‌ها برای کارکرد صددرصد آفلاین برنامه .
- **بیلد خودکار با اکشن گیت‌هاب:** ساخت خودکار فایل نصب اندروید (APK) بلافاصله پس از ثبت هر کامیت در برنچ اصلی .

---

## 🛠 ساختار پوشه‌بندی پروژه

```text
text-ai/
├── capacitor.config.json      # Capacitor platforms configuration
├── package.json               # Package manifests & build scripts
├── vite.config.js             # Vite bundler configuration
├── index.html                 # Main entry template
├── manifest.json              # PWA manifest
├── sw.js                      # PWA service worker
└── src/                       # Main source codes directory
    ├── css/
    │   └── styles.css         # Consolidated stylesheets
    └── js/
        ├── main.js            # Main JS bootstrap & initialization
        ├── utils.js           # Shared helper functions & Swal configs
        ├── theme.js           # Theme and Layout direction controllers
        ├── clipboard.js       # Clipboard paste/copy & raw download handlers
        ├── history.js         # Sidebar drawer and session history managers
        └── renderer.js        # Markdown parser, KaTeX & Mermaid adapters
```

---

## 💻 راهنمای نصب و توسعه محلی

### ۱. شبیه‌سازی مخزن پروژه:
```bash
git clone https://github.com/abasasdzadh/text-ai.git
cd text-ai
```

### ۲. نصب کتابخانه‌های پیش‌نیاز:
مطمئن شوید ابزار [Node.js](https://nodejs.org/) روی سیستم شما نصب است.
```bash
npm install
```

### ۳. اجرای سرور محلی توسعه:
```bash
npm run dev
```
سرور توسعه محلی در آدرس `http://localhost:3000` بالا خواهد آمد.

### ۴. خروجی گرفتن نهایی برای وب و PWA:
```bash
npm run build
```
این دستور کدهای وب را بهینه‌سازی و فشرده کرده و در پوشه `www` قرار می‌دهد.

---

## 📱 خروجی گرفتن برای اندروید و iOS

این محیط کاری به طور کامل با ابزار **Capacitor** یکپارچه شده است. برای همگام‌سازی فایل‌های وب کامپایل شده با پلتفرم موبایل:

### همگام‌سازی فایل‌های وب با Capacitor:
```bash
npx cap sync
```

### بیلد خودکار فایل نصب اندروید (APK) روی گیت‌هاب:
این مخزن به جریان‌کاری خودکار گیت‌هاب در مسیر `.github/workflows/android.yml` مجهز است. زمانی که کدهای خود را به برنچ اصلی گیت‌هاب کامیت و پوش (Push) می‌کنید، سرورهای گیت‌هاب به صورت خودکار:
۱. کدهای ماژولار فرانت‌اند شما را کامپایل می‌کنند.
۲. جاوا، گریدل و SDK اندروید را آماده‌سازی می‌کنند.
۳. پوشه اندروید را در صورت عدم وجود به پروژه اضافه می‌کنند.
۴. فایل نصبی نهایی اندروید به نام `app-debug.apk` را می‌سازند و آن را برای دانلود شما در بخش **Artifacts** خروجی کار قرار می‌دهند .

---

## 🤝 توسعه و همکاری

از مشارکت و همکاری شما در توسعه‌ی این ابزار استقبال می‌شود. فرقی نمی‌کند که به دنبال اضافه کردن ویژگی‌های جدید به بخش مارک‌داون هستید، تم‌های جدیدی طراحی کرده‌اید یا قصد بهینه‌سازی عملکرد روی دستگاه‌های اندرویدی را دارید؛ لطفاً درخواست‌های خود را از طریق بخش Issues یا Pull Requests با ما در میان بگذارید .

---

## 📄 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است - برای اطلاعات بیشتر فایل [LICENSE](LICENSE) را مطالعه کنید.


