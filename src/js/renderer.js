import { showToast } from './utils.js';
import { copyRaw, downloadRaw } from './clipboard.js';

export function render(text) {
    const out = document.getElementById('output');
    out.innerHTML = marked.parse(text);

    // جداسازی کدهایی با ساختار مِرمید (language-mermaid) و تبدیل آنها به کامپوننت زنده
    document.querySelectorAll('pre code.language-mermaid').forEach(codeEl => {
        const pre = codeEl.parentNode;
        const mermaidDiv = document.createElement('div');
        mermaidDiv.className = 'mermaid';
        mermaidDiv.innerText = codeEl.innerText;
        pre.parentNode.replaceChild(mermaidDiv, pre);
    });

    // هماهنگ‌سازی و زیباسازی کادرهای کد معمولی و ابزارها
    document.querySelectorAll('pre').forEach(pre => {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        pre.parentNode.insertBefore(wrapper, pre);
        
        // پیدا کردن زبان برنامه‌نویسی برای درج در هدر بند
        const codeEl = pre.querySelector('code');
        const lang = Array.from(codeEl.classList)
            .find(c => c.startsWith('language-'))?.replace('language-', '') || 'txt';

        // ایجاد نوار هدر اختصاصی (Header Bar) برای کادر کد به سبک Google AI Studio
        const headerBar = document.createElement('div');
        headerBar.className = 'code-header-bar';

        // برچسب نام زبان در سمت چپ
        const langLabel = document.createElement('span');
        langLabel.style.fontWeight = 'bold';
        langLabel.style.textTransform = 'uppercase';
        langLabel.innerText = lang;
        headerBar.appendChild(langLabel);

        // بخش نگهدارنده دکمه‌های ابزار در سمت راست
        const tools = document.createElement('div');
        tools.className = 'code-tools-inner';
        tools.style.display = 'flex';
        tools.style.gap = '6px';
        tools.style.alignItems = 'center';

        // ۱. دکمه پیش‌نمایش فقط برای کدهای html
        if (lang === 'html') {
            const pBtn = document.createElement('button');
            pBtn.className = 'btn btn-tool-preview';
            pBtn.style.cssText = 'padding:4px 8px; font-size:11px; background: transparent; border: 1px solid #444; color: #ccc;';
            pBtn.title = 'مشاهده نتیجه HTML';
            pBtn.innerHTML = '<i class="fas fa-eye"></i>';
            pBtn.onclick = () => toggleHtmlPreview(pBtn);
            tools.appendChild(pBtn);
        }

        // ۲. دکمه جمع‌کردن کادر (Collapse) به صورت ارتفاع
        const cBtn = document.createElement('button');
        cBtn.className = 'btn btn-tool-collapse';
        cBtn.style.cssText = 'padding:4px 8px; font-size:11px; background: transparent; border: 1px solid #444; color: #ccc;';
        cBtn.title = 'جمع کردن / باز کردن کادر کد';
        cBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        cBtn.onclick = () => toggleCodeCollapse(cBtn);
        tools.appendChild(cBtn);

        // ۳. دکمه کپی کد خام
        const cpBtn = document.createElement('button');
        cpBtn.className = 'btn';
        cpBtn.style.cssText = 'padding:4px 8px; font-size:11px; background: transparent; border: 1px solid #444; color: #ccc;';
        cpBtn.title = 'کپی کد منبع';
        cpBtn.innerHTML = '<i class="far fa-copy"></i>';
        cpBtn.onclick = () => copyRaw(cpBtn);
        tools.appendChild(cpBtn);

        // ۴. دکمه دانلود فایل
        const dlBtn = document.createElement('button');
        dlBtn.className = 'btn';
        dlBtn.style.cssText = 'padding:4px 8px; font-size:11px; background: transparent; border: 1px solid #444; color: #ccc;';
        dlBtn.title = 'دانلود فایل کدهای این بخش';
        dlBtn.innerHTML = '<i class="fas fa-download"></i>';
        dlBtn.onclick = () => downloadRaw(dlBtn, lang);
        tools.appendChild(dlBtn);

        headerBar.appendChild(tools);
        wrapper.appendChild(headerBar);
        wrapper.appendChild(pre);
        
        // اصلاح حاشیه کادر داخلی پیش‌فرض pre
        pre.style.borderRadius = '0';
        pre.style.margin = '0';
    });

    document.querySelectorAll('code:not(pre code)').forEach(el => {
        el.onclick = function() {
            navigator.clipboard.writeText(this.innerText);
            showToast('کپی شد!');
        }
    });

    Prism.highlightAll();

    // راه‌اندازی و اجرای زنده نمودارهای مِرمید پس از درج تگ‌ها در صفحه
    if (window.mermaid) {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        mermaid.initialize({
            startOnLoad: false,
            theme: isDark ? 'dark' : 'default',
            securityLevel: 'loose'
        });
        
        mermaid.run({
            nodes: document.querySelectorAll('.mermaid')
        }).catch(err => {
            console.error("خطا در رندر نمودار مِرمید:", err);
        });
    }

    // راه‌اندازی و اجرای موتور رندر فرمول‌های ریاضی و مهندسی LaTeX (KaTeX)
    if (window.renderMathInElement) {
        renderMathInElement(out, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false},
                {left: '\\(', right: '\\)', display: false},
                {left: '\\[', right: '\\]', display: true}
            ],
            throwOnError: false
        });
    }
}

/* تابع جمع‌کردن کادر کد به صورت ارتفاع (Accordion Style) */
export function toggleCodeCollapse(btn) {
    const wrapper = btn.closest('.code-block-wrapper');
    wrapper.classList.toggle('collapsed');
    
    // تغییر وضعیت آیکون متناسب با وضعیت جمع شدگی
    const icon = btn.querySelector('i');
    if (wrapper.classList.contains('collapsed')) {
        icon.className = 'fas fa-chevron-down';
        showToast('کادر کد جمع شد');
    } else {
        icon.className = 'fas fa-chevron-up';
        showToast('کادر کد باز شد');
    }
}

/* تابع سوییچ کامل بین کدهای خام و پیش‌نمایش رندر شده HTML بر روی سند ایزوله */
export function toggleHtmlPreview(btn) {
    const wrapper = btn.closest('.code-block-wrapper');
    const pre = wrapper.querySelector('pre');
    let preview = wrapper.querySelector('.html-preview-container');
    
    // باز کردن خودکار کادر در صورتی که فشرده (Collapse) باشد
    if (wrapper.classList.contains('collapsed')) {
        wrapper.classList.remove('collapsed');
        const collapseBtnIcon = wrapper.querySelector('.btn-tool-collapse i');
        if (collapseBtnIcon) collapseBtnIcon.className = 'fas fa-chevron-up';
    }

    // ایجاد سند ایزوله شده (Iframe) برای رندر بدون تداخل استایل‌ها به سبک گوگل استودیو
    if (!preview) {
        preview = document.createElement('div');
        preview.className = 'html-preview-container';
        
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '350px';
        iframe.style.border = 'none';
        iframe.style.display = 'block';
        iframe.style.background = '#ffffff';
        
        preview.appendChild(iframe);
        wrapper.appendChild(preview);
        
        // کپی متن کد درون سند ایفرم
        const code = wrapper.querySelector('code').innerText;
        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();
    }
    
    // سوییچ بین نمایش کد خام و نتیجه نهایی رندر شده
    if (pre.style.display !== 'none') {
        pre.style.display = 'none';
        preview.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-code"></i>';
        btn.title = "نمایش کد منبع";
        
        // پنهان کردن موقت دکمه‌های دانلود و کپی در حالت نمایش زنده خروجی
        wrapper.querySelectorAll('.code-tools-inner button:not(.btn-tool-preview):not(.btn-tool-collapse)').forEach(b => {
            b.style.display = 'none';
        });
        showToast('پیش‌نمایش HTML رندر شد');
    } else {
        pre.style.display = 'block';
        preview.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-eye"></i>';
        btn.title = "مشاهده نتیجه HTML";
        
        // بازیابی مجدد دکمه‌های پنهان شده در حالت منبع
        wrapper.querySelectorAll('.code-tools-inner button').forEach(b => {
            b.style.display = '';
        });
        showToast('نمایش کدهای خام فعال شد');
    }
}
