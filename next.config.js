/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337',
          pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
