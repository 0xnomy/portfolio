import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    metadataBase: new URL('https://naumanmurad.dev'),
    title: '👨‍💻 Nauman Ali Murad | AI Research Engineer',
    description: 'AI Researcher specializing in vision-language models and agentic AI systems',
    authors: [{ name: 'Nauman Ali Murad' }],
    keywords: ['AI Research', 'Machine Learning', 'Vision-Language Models', 'Multimodal AI', 'Computer Vision'],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://naumanmurad.dev',
        siteName: 'Nauman Ali Murad',
        title: 'Nauman Ali Murad | AI Research Engineer',
        description: 'Research in vision-language models, agentic AI systems, and multimodal learning',
        images: [
            {
                url: '/assets/images/profile.jpg',
                width: 1200,
                height: 630,
                alt: 'Nauman Ali Murad',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nauman Ali Murad | AI Research Engineer',
        description: 'Research in vision-language models, agentic AI systems, and multimodal learning',
        images: ['/assets/images/profile.jpg'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
                />
            </head>
            <body className={`${inter.className} bg-gray-50 text-gray-800 font-sans antialiased`}>
                <Navbar />
                {children}
                <Footer />
                <script src="https://unpkg.com/feather-icons"></script>
                <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            if (typeof feather !== 'undefined') {
                                feather.replace({ width: 16, height: 16 });
                            }
                        `,
                    }}
                />
            </body>
        </html>
    );
}
