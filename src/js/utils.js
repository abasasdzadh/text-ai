/* ایجاد پیکربندی پویا برای SweetAlert متناسب با پوسته فعال */
export function getSwalThemeConfig() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    return {
        background: isDark ? '#1F1F1F' : '#ffffff',
        color: isDark ? '#BCBCBC' : '#555555',
        confirmButtonColor: '#8D8D8D'
    };
}

/* تابع شخصی‌سازی شده اعلان متناسب با تم فعال */
export function showToast(msg) { 
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    Swal.fire({ 
        title: msg, 
        icon: 'success', 
        toast: true, 
        position: 'top-end', 
        timer: 2000, 
        showConfirmButton: false,
        background: isDark ? '#1F1F1F' : '#ffffff',
        color: isDark ? '#BCBCBC' : '#555555',
        iconColor: '#8D8D8D'
    }); 
}
