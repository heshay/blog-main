module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index',
        permanent: true,
      },
    ]
  },
}