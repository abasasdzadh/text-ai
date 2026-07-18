#!/bin/bash

# SETUP-OFFLINE.sh - دانلود خودکار فایل‌های vendor برای حالت آفلاین
# این اسکریپت تمام کتابخانه‌های مورد نیاز را دانلود می‌کند

set -e

echo "📦 شروع دانلود فایل‌های vendor برای حالت آفلاین..."

# ایجاد دایرکتوری‌های مورد نیاز
mkdir -p assets/vendor/font-awesome/fonts
mkdir -p assets/vendor/font-awesome/css
mkdir -p assets/vendor/prismjs/themes
mkdir -p assets/vendor/prismjs/plugins/autoloader
mkdir -p assets/vendor/marked
mkdir -p assets/vendor/katex/fonts
mkdir -p assets/vendor/mermaid
mkdir -p assets/vendor/sweetalert2
mkdir -p assets/fonts

echo "✅ دایرکتوری‌ها ایجاد شدند"

# Font Awesome
echo "📥 دانلود Font Awesome..."
curl -o assets/vendor/font-awesome/css/font-awesome.min.css \
  https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css
curl -o assets/vendor/font-awesome/fonts/fontawesome-webfont.woff2 \
  https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/fonts/fontawesome-webfont.woff2

# Prism.js
echo "📥 دانلود Prism.js..."
curl -o assets/vendor/prismjs/prism.min.js \
  https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js
curl -o assets/vendor/prismjs/themes/prism-tomorrow.min.css \
  https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css
curl -o assets/vendor/prismjs/plugins/autoloader/prism-autoloader.min.js \
  https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js

# Marked
echo "📥 دانلود Marked..."
curl -o assets/vendor/marked/marked.min.js \
  https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js

# KaTeX
echo "📥 دانلود KaTeX..."
curl -o assets/vendor/katex/katex.min.js \
  https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js
curl -o assets/vendor/katex/katex.min.css \
  https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css
curl -o assets/vendor/katex/auto-render.min.js \
  https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js

# Mermaid
echo "📥 دانلود Mermaid..."
curl -o assets/vendor/mermaid/mermaid.min.js \
  https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js

# SweetAlert2
echo "📥 دانلود SweetAlert2..."
curl -o assets/vendor/sweetalert2/sweetalert2.all.min.js \
  https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js

# Vazirmatn Font (فونت فارسی)
echo "📥 دانلود فونت Vazirmatn..."
curl -o assets/fonts/Vazirmatn-Regular.woff2 \
  https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/Vazirmatn-Regular.woff2
curl -o assets/fonts/Vazirmatn-Bold.woff2 \
  https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/Vazirmatn-Bold.woff2

echo "✅ تمام فایل‌ها با موفقیت دانلود شدند!"
echo "🚀 حالا می‌توانید برنامه را بدون اینترنت اجرا کنید"
