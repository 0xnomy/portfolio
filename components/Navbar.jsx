'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleNavClick = (e, href) => {
        if (!isClient) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 max-w-6xl">
                <div className="flex justify-between items-center">
                    <a
                        href="#"
                        className="text-xl font-bold text-primary"
                        onClick={(e) => {
                            if (!isClient) return;
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Nauman Ali Murad
                    </a>
                    <div className="hidden md:flex space-x-8">
                        <a href="#research" className="text-gray-700 hover:text-primary transition" onClick={(e) => handleNavClick(e, '#research')}>Interests</a>
                        <a href="#publications" className="text-gray-700 hover:text-primary transition" onClick={(e) => handleNavClick(e, '#publications')}>Publications</a>
                        <a href="#talks" className="text-gray-700 hover:text-primary transition" onClick={(e) => handleNavClick(e, '#talks')}>Talks</a>
                        <a href="#news" className="text-gray-700 hover:text-primary transition" onClick={(e) => handleNavClick(e, '#news')}>News</a>
                        <a href="#service" className="text-gray-700 hover:text-primary transition" onClick={(e) => handleNavClick(e, '#service')}>Volunteering</a>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 space-y-2">
                        <a href="#research" className="block text-gray-700 hover:text-primary transition py-2" onClick={(e) => handleNavClick(e, '#research')}>Interests</a>
                        <a href="#publications" className="block text-gray-700 hover:text-primary transition py-2" onClick={(e) => handleNavClick(e, '#publications')}>Publications</a>
                        <a href="#talks" className="block text-gray-700 hover:text-primary transition py-2" onClick={(e) => handleNavClick(e, '#talks')}>Talks</a>
                        <a href="#news" className="block text-gray-700 hover:text-primary transition py-2" onClick={(e) => handleNavClick(e, '#news')}>News</a>
                        <a href="#service" className="block text-gray-700 hover:text-primary transition py-2" onClick={(e) => handleNavClick(e, '#service')}>Volunteering</a>
                    </div>
                )}
            </div>
        </nav>
    );
}
