module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/routes/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      // Important: return the modified config

      // Example using webpack option
      //config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      config.node = {
          fs: 'empty',
          net: 'empty',
          tls: 'empty'
      }
      return config
  },
  webpackDevMiddleware: config => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      return config
  }
}
