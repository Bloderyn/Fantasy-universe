document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    
    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Change hamburger icon to X when open
            if (mainNav.classList.contains('active')) {
                menuBtn.innerHTML = '✕';
            } else {
                menuBtn.innerHTML = '☰';
            }
        });
        
        // Close menu when clicking a nav item on mobile
        const navItems = mainNav.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    mainNav.classList.remove('active');
                    menuBtn.innerHTML = '☰';
                }
            });
        });
    }
});