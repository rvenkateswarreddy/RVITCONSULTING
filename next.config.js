/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/contactus',
        permanent: true,
      },
      {
        source: '/it-consulting',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/cloud-solutions',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/data-analytics',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/cybersecurity',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/software-development',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/projectsupports',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/trainings',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
