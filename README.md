
# ⚡ Text AI Workspace

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/abasasdzadh/text-ai/android.yml?branch=main&label=Android%20Build)](https://github.com/abasasdzadh/text-ai/actions)
[![Capacitor](https://img.shields.io/badge/Capacitor-v6-blueviolet.svg)](https://capacitorjs.com/)
[![Vite](https://img.shields.io/badge/Vite-v5-646CFF.svg)](https://vitejs.dev/)
[![PWA](https://img.shields.io/badge/PWA-Supported-00c853.svg)](https://web.dev/progressive-web-apps/)

**Text AI** is an extensible, modular, and performance-oriented workspace designed to manage, format, and render AI-generated contents and codes. Built with a responsive vanilla-frontend approach and packaged with Vite, it runs as a Progressive Web App (PWA) offline and compiles natively to Android/iOS via Capacitor.

**Text AI** یک محیط کاری ماژولار، توسعه‌پذیر و بهینه‌سازی شده برای مدیریت، فرمت‌دهی و نمایش خروجی‌های متنی و کدهای تولید شده توسط هوش مصنوعی است. این برنامه با رویکرد فرانت‌اند سبک طراحی شده و با باندلر Vite مدیریت می‌شود؛ همچنین به عنوان یک وب‌اپلیکیشن پیش‌رونده (PWA) به صورت آفلاین کار می‌کند و با Capacitor به صورت نیتیو روی اندروید و iOS اجرا می‌گردد.

---

## 🌟 Key Features / امکانات کلیدی

### 🇬🇧 English:
- **Full Markdown Support:** Headings, GFM tables with zebra striping, quotes, lists, bold/italic, etc.
- **GFM Task Lists:** Bulletless interactive checklists compatible with modern and legacy WebViews.
- **LaTeX Math Rendering:** Complete rendering of inline ($...$) and block ($$...$$) mathematical formulas via KaTeX.
- **Mermaid.js Diagrams:** Live compilation of text-based flowcharts, sequence diagrams, and architectures.
- **Live HTML Preview:** Google AI Studio-style isolated HTML rendering inside a sandboxed Iframe.
- **Sticky Code Headers:** Code block headers with Copy, Download, Collapse, and Preview buttons stick to the top during scroll.
- **RTL / LTR Toggle:** Instantly switch layout and alignment of the entire app with auto-saving preferences.
- **Harmonic Theme System:** Dynamic Light and Dark modes extending to syntax highlightings and alert components.
- **PWA & Offline Support:** Service worker pre-caching ensures full offline capability.
- **CI/CD Build Automation:** Push to main branch to automatically trigger GitHub Actions and compile the Android APK.

### 🇮🇷 فارسی:
- **پشتیبانی کامل از مارک‌داون:** رندر عناوین، جداول زبرا، کادر نقل‌قول، لیست‌ها، متون ضخیم/کج و غیره.
- **لیست انجام کار (Task Lists):** چک‌باکس‌های تیک‌دار بدون بالت‌های دایره‌ای مزاحم، سازگار با انواع وب‌ویوها.
- **فرمول‌نویسی ریاضی (LaTeX):** رندر زنده فرمول‌های درون‌خطی و بلوکی مهندسی به کمک موتور پرسرعت KaTeX.
- **ترسیم زنده نمودارها (Mermaid):** ترسیم فلوچارت‌ها، نمودارهای توالی و معماری‌های متنی به صورت گرافیکی.
- **پیش‌نمایش زنده HTML:** رندر ایزوله خروجی کدهای HTML درون Iframe مستقل (به سبک Google AI Studio).
- **هدر چسبان کادرها:** دسترسی همیشگی به دکمه‌های کپی، دانلود، جمع‌کردن و پیش‌نمایش در هنگام اسکرول کدها.
- **تغییر تراز (RTL / LTR):** امکان چپ‌چین یا راست‌چین کردن کل برنامه با ذخیره خودکار وضعیت در حافظه مروگر.
- **هارمونی تم تاریک/روشن:** هماهنگی بلادرنگ تم تاریک و روشن در بخش کدهای Prism، اعلان‌ها و نمودارهای Mermaid.
- **وب‌اپلیکیشن آفلاین (PWA):** کش شدن خودکار فایل‌ها برای کارکرد صددرصد آفلاین برنامه.
- **بیلد خودکار با اکشن گیت‌هاب:** ساخت خودکار فایل نصب اندروید (APK) بلافاصله پس از ثبت هر کامیت در برنچ اصلی.

---

## 🛠 Directory Structure / ساختار پوشه‌بندی پروژه

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

## 💻 Quick Start & Development / راهنمای نصب و توسعه

### 1. Clone the repository / شبیه‌سازی مخزن:
```bash
git clone https://github.com/abasasdzadh/text-ai.git
cd text-ai
```

### 2. Install dependencies / نصب کتابخانه‌های پیش‌نیاز:
Make sure you have [Node.js](https://nodejs.org/) installed.
```bash
npm install
```

### 3. Run development server / اجرای سرور محلی توسعه:
```bash
npm run dev
```
The server will boot up locally at `http://localhost:3000`.

### 4. Build for Web and PWA / خروجی گرفتن برای وب و PWA:
```bash
npm run build
```
This command compiles and optimizes all modular files into the `www` folder.

---

## 📱 Mobile App Compilation / خروجی گرفتن برای اندروید و iOS

This workspace is fully integrated with **Capacitor**. To compile and sync your built web files into native mobile environments:

### Sync web assets to Capacitor / همگام‌سازی فایل‌های وب با خازن:
```bash
npx cap sync
```

### Compile Android APK on GitHub Actions / ساخت فایل اندروید روی گیت‌هاب:
The repository is equipped with a GitHub Action workflow `.github/workflows/android.yml`. When you commit and push your changes to the `main` branch, GitHub will automatically:
1. Fetch and compile your modular CSS/JS files.
2. Setup Java, Gradle, and Android SDK.
3. Automatically build the styled `app-debug.apk`.
4. Release the APK inside the workflow **Artifacts** section for you to download.

---

## 🤝 Contributing / توسعه و همکاری

### 🇬🇧 English:
Contributions are highly welcome! Whether it's adding new Markdown parsers, implementing local text-processing models, optimizing the mobile WebView performance, or designing new themes, feel free to open an issue or submit a pull request.

### 🇮🇷 فارسی:
از مشارکت و همکاری شما در توسعه‌ی این ابزار استقبال می‌شود. فرقی نمی‌کند که به دنبال اضافه کردن ویژگی‌های جدید به مارک‌داون هستید، تم‌های جدیدی طراحی کرده‌اید یا قصد بهینه‌سازی عملکرد روی دستگاه‌های اندرویدی را دارید؛ لطفاً درخواست‌های خود را از طریق بخش Issues یا Pull Requests با ما در میان بگذارید.

---

## 📄 License / لایسنس

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```