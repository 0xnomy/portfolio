// Navbar Component
class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
                <div class="container mx-auto px-4 py-4 max-w-6xl">
                    <div class="flex justify-between items-center">
                        <a href="#" class="text-xl font-bold text-primary">Nauman Ali Murad</a>
                        <div class="hidden md:flex space-x-8">
                            <a href="#research" class="text-gray-700 hover:text-primary transition">Interests</a>
                            <a href="#publications" class="text-gray-700 hover:text-primary transition">Publications</a>
                            <a href="#talks" class="text-gray-700 hover:text-primary transition">Talks</a>
                            <a href="#news" class="text-gray-700 hover:text-primary transition">News</a>
                            <a href="#service" class="text-gray-700 hover:text-primary transition">Volunteering</a>
                        </div>
                        <button id="mobile-menu-btn" class="md:hidden text-gray-700">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div id="mobile-menu" class="hidden md:hidden mt-4 space-y-2">
                        <a href="#research" class="block text-gray-700 hover:text-primary transition py-2">Interests</a>
                        <a href="#publications" class="block text-gray-700 hover:text-primary transition py-2">Publications</a>
                        <a href="#talks" class="block text-gray-700 hover:text-primary transition py-2">Talks</a>
                        <a href="#news" class="block text-gray-700 hover:text-primary transition py-2">News</a>
                        <a href="#service" class="block text-gray-700 hover:text-primary transition py-2">Volunteering</a>
                    </div>
                </div>
            </nav>
        `;

        // Mobile menu toggle
        const menuBtn = this.querySelector('#mobile-menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');

        menuBtn?.addEventListener('click', () => {
            mobileMenu?.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        this.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Close mobile menu if open
                    mobileMenu?.classList.add('hidden');
                }
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);