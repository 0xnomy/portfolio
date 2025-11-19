/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
        remotePatterns: [],
        formats: ['image/avif', 'image/webp'],
    },
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    trailingSlash: false,
    skipTrailingSlashRedirect: false,
    poweredByHeader: false,
    compress: true,
    generateEtags: true,
}

export default nextConfig
