// Navigation active state
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.nav-menu a').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.style.color = '#8ab4c6';
            link.style.fontWeight = '600';
        }
    });
    
    // Image hover effect
    document.querySelectorAll('.photo-grid img').forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.02)';
            img.style.transition = '0.3s';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});