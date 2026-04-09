/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true, // your existing option
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;