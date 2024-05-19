module.exports = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'a.ltrbxd.com', // letterboxd
      'steamcdn-a.akamaihd.net', // steam
    ],
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
          // Opt-out of Google FLoC: https://amifloced.org/
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
}