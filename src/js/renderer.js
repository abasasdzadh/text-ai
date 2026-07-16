import { showToast } from './utils.js';
import { copyRaw, downloadRaw } from './clipboard.js';

export function render(text) {
    const out = document.getElementById('output');
    out.innerHTML = marked.parse(text);

    document.querySelectorAll('pre').forEach(pre => {
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        pre.parentNode.insertBefore(wrapper, pre);
        
        const codeEl = pre.querySelector('code');
        const lang = Array.from(codeEl.classList)
            .find(c => c.startsWith('language-'))?.replace('language-', '') || 'txt';

        const headerBar = document.createElement('div');
        headerBar.className = 'code-header-bar';

        const langLabel = document.createElement('span');
        langLabel.style.fontWeight = 'bold';
        langLabel.style.textTransform = 'uppercase';
        langLabel.innerText = lang;
        headerBar.appendChild(langLabel);

        const tools = document.createElement('div');
        tools.className = 'code-tools-inner';
        tools.style.display = 'flex';
        tools.style.gap = '6px';
        tools.style.alignItems = 'center';

        if (lang === 'html') {
            const pBtn = document.createElement('button');
            pBtn.className = 'btn btn-tool-preview';
            pBtn.style.cssText = 'padding:4px 8px; font-size:11px; background: transparent; border: 1px solid #444; color: #ccc;';
            pBtn.title = 'مشاهده نتیجه HTML';
            pBtn.innerHTML = '<i class="fas fa-eye"></i>';
            pBtn.onclick = () => toggleHtmlPreview(pBtn);
            tools.appendChild(pBtn);
        }

        const cBtn = document.createElement('button');
        cBtn.className = 'btn btn-tool-collapse';
        cBtn.style.cssText = 'padding:4px 8px; font-size:11px; background: transparent; border: 1px solid #444; color: #ccc;';
        cBtn.title = 'جمع کردن / باز کردن کادر کد';
        cBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        cBtn.onclick = () => toggleCodeCollapse(cBtn);
        tools.appendChild(cBtn);

        const cpBtn = document.createElement('button');
        cpBtn.className = 'btn';
        cpBtn.style.cssText = 'padding:4px 8px; font-size:11px; background: transparent; border: 1px solid #444; color: #ccc;';
        cpBtn.title = 'کپی کد منبع';
        cpBtn.innerHTML = '<i class="far fa-copy"></i>';
        cpBtn.onclick = () => copyRaw(cpBtn);
        tools.appendChild(cpBtn);

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
}

export function toggleCodeCollapse(btn) {
    const wrapper = btn.closest('.code-block-wrapper');
    wrapper.classList.toggle('collapsed');
    
    const icon = btn.querySelector('i');
    if (wrapper.classList.contains('collapsed')) {
        icon.className = 'fas fa-chevron-down';
        showToast('کادر کد جمع شد');
    } else {
        icon.className = 'fas fa-chevron-up';
        showToast('کادر کد باز شد');
    }
}

export function toggleHtmlPreview(btn) {
    const wrapper = btn.closest('.code-block-wrapper');
    const pre = wrapper.querySelector('pre');
    let preview = wrapper.querySelector('.html-preview-container');
    
    if (wrapper.classList.contains('collapsed')) {
        wrapper.classList.remove('collapsed');
        const collapseBtnIcon = wrapper.querySelector('.btn-tool-collapse i');
        if (collapseBtnIcon) collapseBtnIcon.className = 'fas fa-chevron-up';
    }

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
        
        const code = wrapper.querySelector('code').innerText;
        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();
    }
    
    if (pre.style.display !== 'none') {
        pre.style.display = 'none';
        preview.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-code"></i>';
        btn.title = "نمایش کد منبع";
        
        wrapper.querySelectorAll('.code-tools-inner button:not(.btn-tool-preview):not(.btn-tool-collapse)').forEach(b => {
            b.style.display = 'none';
        });
        showToast('پیش‌نمایش HTML رندر شد');
    } else {
        pre.style.display = 'block';
        preview.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-eye"></i>';
        btn.title = "مشاهده نتیجه HTML";
        
        wrapper.querySelectorAll('.code-tools-inner button').forEach(b => {
            b.style.display = '';
        });
        showToast('نمایش کدهای خام فعال شد');
    }
}
