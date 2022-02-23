/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  // distDir: 'build',
  // exportPathMap: function() {
  //   if(isProd){
  //     return {
  //       "/symbios-wiki": {page: "/"}
  //     }
  //   }
  //   return {}
  // },
  // assetPrefix: isProd ? '/symbios-wiki/' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
};