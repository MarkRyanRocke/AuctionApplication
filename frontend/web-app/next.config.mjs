/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     serverActions: true
    // },
    images: {
        // domains: [
        //     'cdn.pixabay.com',
        //     'cdn.pin.tt'
        // ]
        remotePatterns: [
             {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
            // port: '',
            // pathname: '',
            },
            {
            protocol: 'https',
            hostname: 'cdn.pin.tt',
            // port: '',
            // pathname: '',
          },
        ]
    },
    output: 'standalone'
};

export default nextConfig;
