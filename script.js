lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // --- Mobile Menu Toggle ---
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // --- Close mobile menu on link click ---
    mobileMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            mobileMenu.classList.add('hidden');
        }
    });


    // --- Header background on scroll ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('py-2');
            header.classList.add('py-4');
        }
    });

    // --- Active Nav Link on Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find all nav links in the desktop and mobile menus
                const allNavLinks = document.querySelectorAll('header nav a, #mobile-menu a');
                allNavLinks.forEach(link => {
                    link.classList.remove('nav-link-active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('nav-link-active');
                    }
                });
            }
        });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(section => {
        observer.observe(section);
    });
});
