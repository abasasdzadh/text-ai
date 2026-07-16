import { getSwalThemeConfig } from './utils.js';
import { render } from './renderer.js';

export function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (window.innerWidth < 900) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        sidebar.classList.remove('closed');
    } else {
        sidebar.classList.toggle('closed');
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
}

export function refreshHistoryUI() {
    const list = document.getElementById('historyList');
    const history = JSON.parse(localStorage.getItem('ai_v4_history') || '[]');
    list.innerHTML = history.length ? '' : '<p style="text-align:center; color:var(--text-muted); font-size:13px;">هنوز متنی پردازش نشده است.</p>';

    history.forEach(item => {
        const card = document.createElement('div');
        card.className = 'history-card';
        card.onclick = () => { 
            document.getElementById('mainInput').value = item.content; 
            render(item.content); 
            if(window.innerWidth < 900) toggleSidebar(); 
        };
        card.innerHTML = `
            <h4>${item.title}</h4>
            <small><i class="far fa-clock"></i> ${item.time}</small>
            <i class="fas fa-trash del-his" data-id="${item.id}"></i>
        `;
        list.appendChild(card);
    });

    // متصل کردن ایونت کلیک به دکمه حذف تک‌کارت‌ها پس از تزریق به DOM
    list.querySelectorAll('.del-his').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            deleteHistoryItem(id);
        }
    });
}

export function deleteHistoryItem(id) {
    let history = JSON.parse(localStorage.getItem('ai_v4_history') || '[]');
    history = history.filter(i => i.id !== id);
    localStorage.setItem('ai_v4_history', JSON.stringify(history));
    refreshHistoryUI();
}

export function clearAllHistory() {
    const swalConfig = getSwalThemeConfig();
    Swal.fire({ 
        title: 'مطمئن هستید؟', 
        text: "کل تاریخچه پاک خواهد شد!", 
        icon: 'warning', 
        showCancelButton: true, 
        confirmButtonText: 'بله، پاک کن',
        cancelButtonText: 'انصراف',
        ...swalConfig
    })
    .then(res => { 
        if(res.isConfirmed) { 
            localStorage.removeItem('ai_v4_history'); 
            refreshHistoryUI(); 
        } 
    });
}
