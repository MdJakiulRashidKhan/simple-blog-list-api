/** @type {import('next').NextConfig} */
const nextConfig = {

    async headers() {
        return [
            { source: '/:path*', headers: [{ key: 'X-Frame-Options', value: 'DENY' }] }
        ]
    },

    // distDir: "build",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'roar.media',

            }
        ]
    }
}

module.exports = nextConfig
