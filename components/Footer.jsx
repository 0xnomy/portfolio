export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-8 mt-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Nauman Ali Murad. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="mailto:naumanalimurad@gmail.com" className="text-gray-600 hover:text-primary transition" aria-label="Email">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/naumanmurad" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition" aria-label="GitHub">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/naumanalimurad/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition" aria-label="LinkedIn">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/NaumanAliMurad" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition" aria-label="Twitter">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                            </svg>
                        </a>
                        <a href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition" aria-label="Google Scholar">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"></path>
                            </svg>
                        </a>
                        <a href="https://www.researchgate.net/profile/Nauman-Murad" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition" aria-label="ResearchGate">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.897a10.9 10.9 0 0 0 .043-1.207v-.82a10.9 10.9 0 0 0-.043-1.207 6.326 6.326 0 0 0-.177-.896c-.235-.735-.605-1.262-1.175-1.65-.57-.39-1.305-.603-2.105-.603zM12.41 4.749c.898 0 1.66.223 2.28.67.62.448.93 1.146.93 2.097v.24h-1.658v-.258c0-.607-.212-.986-.584-1.22-.37-.233-.866-.35-1.486-.35-.64 0-1.14.14-1.5.42-.36.28-.538.7-.538 1.26v6.035c0 .56.178.98.538 1.26.36.28.86.42 1.5.42.62 0 1.115-.117 1.486-.35.372-.233.584-.613.584-1.22v-.258h1.658v.24c0 .95-.31 1.65-.93 2.097-.62.447-1.382.67-2.28.67-.9 0-1.658-.223-2.276-.67-.617-.447-.926-1.147-.926-2.097V7.516c0-.95.31-1.65.926-2.097.618-.447 1.377-.67 2.276-.67z"></path>
                            </svg>
                        </a>
                        <a href="https://orcid.org/YOUR_ORCID_ID" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition" aria-label="ORCID">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.784 4.078-3.722 0-2.125-1.862-3.722-4.078-3.722h-2.297z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
