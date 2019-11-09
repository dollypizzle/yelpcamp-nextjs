// const withCSS = require('@zeit/next-css');
// module.exports = withCSS({
//   cssModules: true,
// });

// const withCSS = require('@zeit/next-css');
// module.exports = withCSS({
//   cssLoaderOptions: {
//     url: false,
//   },
// });

const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withCSS, withFonts, withImages]);
