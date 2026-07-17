import { showToast, getSwalThemeConfig } from './utils.js';

const extMap = { 'javascript': 'js', 'python': 'py', 'html': 'html', 'css': 'css', 'json': 'json', 'bash': 'sh', 'sql': 'sql' };

/* تابع بهبود یافته چسباندن متن سازگار با وب و Capacitor بدون خطای دسترسی مکرر */
export async function pasteInput() {
    const mainInput = document.getElementById('mainInput');
    
    try {
        // ۱. بررسی و فراخوانی کلیپ‌بورد بومی در بستر Capacitor
        if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Clipboard) {
            const result = await window.Capacitor.Plugins.Clipboard.read();
            if (result.value) {
                mainInput.value = result.value;
                showToast('متن چسبانده شد');
            } else {
                showToast('کلیپ‌بورد خالی است');
            }
            return;
        }
        
        // ۲. تلاش برای استفاده خودکار از کلیپ‌بورد استاندارد وب (در صورت عدم انسداد)
        if (navigator.clipboard && navigator.clipboard.readText) {
            const text = await navigator.clipboard.readText();
            mainInput.value = text;
            showToast('متن چسبانده شد');
            return;
        }
        
        throw new Error("Clipboard API Blocked or Unsupported");
    } catch (err) {
        console.error('خطا در دسترسی خودکار به کلیپ‌بورد:', err);
        
        // ۳. راهکار جایگزین و هوشمند: باز کردن یک فیلد مجزا و شیک برای درج دستی متن
        const swalConfig = getSwalThemeConfig();
        Swal.fire({
            title: 'چسباندن متن (Paste)',
            input: 'textarea',
            inputPlaceholder: 'متن کپی شده را اینجا پیست (Ctrl+V) کنید...',
            showCancelButton: true,
            confirmButtonText: 'تایید و درج',
            cancelButtonText: 'انصراف',
            inputAttributes: {
                style: 'font-family: Vazirmatn, sans-serif !important; font-size: 14px; direction: rtl;'
            },
            ...swalConfig,
            preConfirm: (value) => {
                if (!value) {
                    Swal.showValidationMessage('لطفاً متنی را وارد کنید');
                }
                return value;
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                mainInput.value = result.value;
                showToast('متن چسبانده شد');
            }
        });
    }
}

export function copyInput() { 
    navigator.clipboard.writeText(document.getElementById('mainInput').value); 
    showToast('کپی شد'); 
}

/* اصلاح دکمه پاک‌کن: پاکسازی کامل فیلد ورودی، بخش خروجی و حذف سشن قبل از حافظه موقت */
export function clearInput() { 
    document.getElementById('mainInput').value = ''; 
    document.getElementById('output').innerHTML = ''; // پاکسازی کامل رندرهای قبلی برای جلوگیری از باقی ماندن بمب ارور
    localStorage.removeItem('ai_last_session'); // حذف کامل کش سشن قبلی
    showToast('پاکسازی شد');
}

export function copyRaw(btn) { 
    navigator.clipboard.writeText(btn.closest('.code-block-wrapper').querySelector('code').innerText); 
    showToast('کد کپی شد'); 
}

export function downloadRaw(btn, lang) {
    const code = btn.closest('.code-block-wrapper').querySelector('code').innerText;
    const blob = new Blob([code], { type: 'text/plain' });
    const a = document.createElement('a'); 
    a.href = URL.createObjectURL(blob); 
    a.download = `script.${extMap[lang] || 'txt'}`; 
    a.click();
}