import Image from 'next/image';

export default function Home() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            {/* Header Section */}
            <header className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-16">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg relative">
                    <Image
                        src="/assets/images/profile.jpg"
                        alt="Nauman Ali Murad"
                        width={192}
                        height={192}
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-primary mb-2">Nauman Ali Murad</h1>
                    <h2 className="text-2xl font-semibold text-secondary mb-4">AI Research Engineer</h2>

                    <div className="prose max-w-3xl mx-auto lg:mx-0">
                        <p className="text-base leading-relaxed">
                            I&apos;m currently pursuing a Bachelor&apos;s degree in Data Science at the GIK Institute, Pakistan.
                            As an aspiring AI Research Engineer, I focus on developing multi-agent systems that leverage
                            Large Language Models and vision-based generative AI to interact intelligently with
                            complex, real-world environments.
                        </p>

                        <p className="text-base leading-relaxed mt-4">
                            My research interests lie at the intersection of computer vision, generative modeling, and
                            agentic AI, with applications in medical imaging, climate science, and sustainable
                            infrastructure. I&apos;m particularly interested in improving the reasoning capability, inference
                            efficiency, and scalability of LLM-driven systems to create robust, data-efficient AI
                            solutions with real-world impact.
                        </p>

                        <p className="text-base leading-relaxed mt-4">
                            If you have any research opportunities or open positions, please feel free to reach out at
                            nauman[.]murad@outlook.com
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
                        <a href="mailto:nauman@naumanmurad.dev"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm bg-primary text-white rounded-lg hover:bg-secondary transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg> Email
                        </a>
                        <a href="https://github.com/0xnomy" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-primary text-primary rounded-lg hover:bg-gray-100 transition">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/naumanmurad/" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-primary text-primary rounded-lg hover:bg-gray-100 transition">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg> LinkedIn
                        </a>
                        <a href="https://scholar.google.com/citations?user=6w77LCsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-primary text-primary rounded-lg hover:bg-gray-100 transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg> Scholar
                        </a>
                        <a href="https://huggingface.co/nomypython" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-primary text-primary rounded-lg hover:bg-gray-100 transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                            </svg> HF
                        </a>
                        <a href="https://medium.com/@naumanmurad" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-primary text-primary rounded-lg hover:bg-gray-100 transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg> Medium
                        </a>
                        <a href="/assets/documents/nauman_murad_cv.pdf" target="_blank"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm border border-primary text-primary rounded-lg hover:bg-gray-100 transition">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg> CV
                        </a>
                    </div>
                </div>
            </header>

            {/* Research Interests Section */}
            <section id="research" className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-2">Interests</h2>

                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Vision-Language Models</span>
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Geospatial Learning & Remote Sensing</span>
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Medical Imaging</span>
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Explainable AI</span>
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Multimodal Reasoning</span>
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Agentic & Multi-Agent Systems</span>
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Computer Vision</span>
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Generative Models</span>
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Blockchain for Data Integrity</span>
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Natural Language Processing</span>
                    <span className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-base text-gray-700 hover:border-accent transition">Big Data Analytics</span>
                </div>
            </section>

            {/* Publications Section */}
            <section id="publications" className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-2">Publications</h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                            Governed By Agents: A Survey On The Role Of Agentic AI In Future Computing Environments
                        </h3>
                        <div className="text-base text-secondary mb-2">
                            <span className="font-medium">Nauman Ali Murad</span>, Safia Baloch
                        </div>
                        <div className="text-base text-gray-500 mb-3">arXiv preprint arXiv:2509.16676, 2025</div>
                        <div className="flex gap-4">
                            <a href="https://arxiv.org/abs/2509.16676" target="_blank" rel="noopener noreferrer"
                                className="text-accent hover:underline flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg> PDF
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                            Advanced Deep Learning Driven Geospatial Analysis for GLOF Risk Reduction: A Case Study from Pakistan&apos;s Northern Mountain Ranges
                        </h3>
                        <div className="text-base text-secondary mb-2">
                            <span className="font-medium">Nauman Ali Murad</span>, AM Mir, N Shahzadi
                        </div>
                        <div className="text-base text-gray-500 mb-3">2024 International Conference on Frontiers of Information Technology (FIT), 2024</div>
                        <div className="flex gap-4">
                            <a href="https://ieeexplore.ieee.org/document/10821234" target="_blank" rel="noopener noreferrer"
                                className="text-accent hover:underline flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                </svg> PDF
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Talks Section */}
            <section id="talks" className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-2">Talks</h2>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-primary mb-2">
                            Blockchain Panel - &quot;Pakistan&apos;s Crypto Landscape&quot;
                        </h3>
                        <div className="text-base text-secondary mb-2">
                            <span className="font-medium">Nauman Ali Murad</span> (Co-founder, Crypto Awaz)
                        </div>
                        <div className="text-base text-gray-500 mb-3">GenX Event, Hakim Abdus Salam Library, Haripur, PK, December 2024</div>
                        <p className="text-base text-gray-700 mb-4">
                            Delivered a community-focused talk on Pakistan&apos;s evolving crypto and blockchain landscape,
                            covering DeFi, CBDCs, local regulations, and opportunities for developers. The session
                            encouraged young innovators to explore how decentralized technologies can drive inclusion and
                            transparency in Pakistan&apos;s digital economy.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/p/DEIQRKMMu1F/?img_index=1" target="_blank" rel="noopener noreferrer"
                                className="text-accent hover:underline flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg> Event Photos
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Section */}
            <section id="news" className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-2">News</h2>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="text-base text-gray-400 font-medium w-24 flex-shrink-0">Sep 2025</div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                            <p className="text-base">
                                Survey paper &quot;Governed By Agents: A Survey On The Role Of Agentic AI In Future Computing Environments&quot; published as preprint on arXiv.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-base text-gray-400 font-medium w-24 flex-shrink-0">Dec 2024</div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                            <p className="text-base">
                                Paper accepted at FIT 2024 on using deep learning for GLOF risk reduction in Pakistan&apos;s northern mountain ranges.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-base text-gray-400 font-medium w-24 flex-shrink-0">Nov 2024</div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                            <p className="text-base">
                                Joined Cohere for AI (C4AI) community as an active member focusing on computer vision and multi-agent systems.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service & Activities Section */}
            <section id="service" className="mb-16">
                <h2 className="text-3xl font-bold text-primary mb-8 border-b pb-2">Volunteering</h2>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="text-base text-gray-400 font-medium w-32 flex-shrink-0">2024 - Present</div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                            <p className="text-base">
                                Member, Cohere for AI (C4AI) community
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-base text-gray-400 font-medium w-32 flex-shrink-0">2022 - 2025</div>
                        <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                            <p className="text-base">
                                Volunteer Researcher, HBL Center for Blockchain & Applied Research, GIKI
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
