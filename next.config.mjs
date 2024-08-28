/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ["cdn.sanity.io"],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.sanity.io',
              port: '', // leave empty if not required
              pathname: '/**', // use wildcard to allow all paths
            },
          ],
    },
};

export default nextConfig;
