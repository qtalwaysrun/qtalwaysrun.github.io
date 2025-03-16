// Navigation active state
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.style.color = '#8ab4c6';
            link.style.fontWeight = '600';
        }
    });
});