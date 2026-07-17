```markdown
# ⚡ Text AI Workspace

[🇮🇷 **Persian / فارسی**](README.fa.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/abasasdzadh/text-ai/android.yml?branch=main&label=Android%20Build)](https://github.com/abasasdzadh/text-ai/actions)
[![Capacitor](https://img.shields.io/badge/Capacitor-v6-blueviolet.svg)](https://capacitorjs.com/)
[![Vite](https://img.shields.io/badge/Vite-v5-646CFF.svg)](https://vitejs.dev/)
[![PWA](https://img.shields.io/badge/PWA-Supported-00c853.svg)](https://web.dev/progressive-web-apps/)

**Text AI** is an extensible, modular, and performance-oriented workspace designed to manage, format, and render AI-generated contents and codes. Built with a responsive vanilla-frontend approach and packaged with Vite, it runs as a Progressive Web App (PWA) offline and compiles natively to Android/iOS via Capacitor.

---

## 🌟 Key Features

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

---

## 🛠 Directory Structure

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

## 💻 Quick Start & Development

### 1. Clone the repository:
```bash
git clone https://github.com/abasasdzadh/text-ai.git
cd text-ai
```

### 2. Install dependencies:
Make sure you have [Node.js](https://nodejs.org/) installed.
```bash
npm install
```

### 3. Run development server:
```bash
npm run dev
```
The server will boot up locally at `http://localhost:3000`.

### 4. Build for Web and PWA:
```bash
npm run build
```
This command compiles and optimizes all modular files into the `www` folder.

---

## 📱 Mobile App Compilation

This workspace is fully integrated with **Capacitor**. To compile and sync your built web files into native mobile environments:

### Sync web assets to Capacitor:
```bash
npx cap sync
```

### Compile Android APK on GitHub Actions:
The repository is equipped with a GitHub Action workflow `.github/workflows/android.yml`. When you commit and push your changes to the `main` branch, GitHub will automatically:
1. Fetch and compile your modular CSS/JS files.
2. Setup Java, Gradle, and Android SDK.
3. Automatically build the styled `app-debug.apk`.
4. Release the APK inside the workflow **Artifacts** section for you to download.

---

## 🤝 Contributing

Contributions are highly welcome! Whether it's adding new Markdown parsers, implementing local text-processing models, optimizing the mobile WebView performance, or designing new themes, feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
