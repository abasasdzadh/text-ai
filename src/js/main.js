import { loadSettings, toggleTheme, toggleDirection } from './theme.js';
import { refreshHistoryUI, toggleSidebar, clearAllHistory } from './history.js';
import { render } from './renderer.js';
import { pasteInput, copyInput, clearInput } from './clipboard.js';

window.onload = () => {
    loadSettings();
    refreshHistoryUI();
    const last = JSON.parse(localStorage.getItem('ai_last_session'));
    if (last) { 
        document.getElementById('mainInput').value = last; 
        render(last); 
    }
    
    // نگاشت توابع کلیدی به شی Window برای دسترسی ایونت‌ها در بدنه HTML
    window.toggleSidebar = toggleSidebar;
    window.toggleTheme = toggleTheme;
    window.toggleDirection = toggleDirection; // متصل کردن دکمه تراز به رویداد کلیک سراسری
    window.clearAllHistory = clearAllHistory;
    window.pasteInput = pasteInput;
    window.copyInput = copyInput;
    window.clearInput = clearInput;
    window.processAndSave = processAndSave;
};

function processAndSave() {
    const val = document.getElementById('mainInput').value;
    if (!val.trim()) return;

    let history = JSON.parse(localStorage.getItem('ai_v4_history') || '[]');
    const title = val.substring(0, 50).replace(/\n/g, ' ') + '...';
    
    if (history.length === 0 || history[0].content !== val) {
        history.unshift({ id: Date.now(), title, content: val, time: new Date().toLocaleTimeString('fa-IR') });
        if (history.length > 30) history.pop();
        localStorage.setItem('ai_v4_history', JSON.stringify(history));
        refreshHistoryUI();
    }
    
    localStorage.setItem('ai_last_session', JSON.stringify(val));
    render(val);
}

// ثبت سرویس ورکر PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js');
    });
}
