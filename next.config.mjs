/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
    },
    // Disable static generation warnings for development
    reactStrictMode: true,
    swcMinify: true,
}

export default nextConfig
