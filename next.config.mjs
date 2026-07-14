/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/preise/starter',
        destination: '/preise/start',
        permanent: true,
      },
      {
        source: '/preise/anfrage-system',
        destination: '/betriebszentrale',
        permanent: true,
      },
      {
        source: '/preise/request-system',
        destination: '/betriebszentrale',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
