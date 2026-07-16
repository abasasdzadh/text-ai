export function toggleTheme() {
    const theme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    document.getElementById('themeBtn').innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

/* تابع تغییر تراز کلی اپلیکیشن (راست‌چین / چپ‌چین) */
export function toggleDirection() {
    const currentDir = document.documentElement.getAttribute('dir') || 'rtl';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', newDir);
    localStorage.setItem('dir', newDir);
    updateDirectionUI(newDir);
}

/* به‌روزرسانی آیکون تراز متناسب با وضعیت فعلی */
export function updateDirectionUI(dir) {
    const dirBtn = document.getElementById('dirBtn');
    if (dirBtn) {
        dirBtn.innerHTML = dir === 'rtl' ? '<i class="fas fa-align-left"></i>' : '<i class="fas fa-align-right"></i>';
    }
}

export function loadSettings() {
    // بازگرداندن تنظیمات تم از حافظه محلی
    const theme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('themeBtn');
    if (themeBtn) {
        themeBtn.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    // بازگرداندن تنظیمات تراز چپ/راست از حافظه محلی
    const dir = localStorage.getItem('dir') || 'rtl';
    document.documentElement.setAttribute('dir', dir);
    updateDirectionUI(dir);
}
