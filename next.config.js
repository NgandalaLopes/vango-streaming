/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
            },
            {
                protocol: "http",
                hostname: "image.tmdb.org",
            }
        ]

    }
}

module.exports = nextConfig
