// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add fade-in animation class
    const style = document.createElement('style');
    style.textContent = `
        .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Email obfuscation protection
    const emailLinks = document.querySelectorAll('a[href*="nauman"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Basic bot protection - replace [.] with .
            const href = this.getAttribute('href');
            if (href && href.includes('[.]')) {
                const realEmail = href.replace('[.]', '.');
                this.setAttribute('href', realEmail);
            }
        });
    });

    // Performance: Lazy load images
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.transition = 'opacity 0.3s';
                img.style.opacity = '1';
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.opacity = '0';
        imageObserver.observe(img);
    });

    // Console message for developers
    console.log(`
    ╭─────────────────────────────────────╮
    │  🚀 Nauman Ali Murad Portfolio      │
    │  👨‍💻 AI Research Engineer              │
    │  📧 nauman@naumanmurad.dev          │
    ╰─────────────────────────────────────╯
    
    Interested in collaboration? Let's connect!
    `);
});