const path = require('path')

module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/project'
  //   : '/',
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://111.229.100.170:8003',
  //       changeOrigin: true
  //     }
  //   }
  // },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://111.229.100.170:8003',
        changeOrigin: true,
        pathRewrite: {
          // 要加重定向
          '^/api': '/travel-mock'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', path.join(__dirname, './src/assets/styles/'))
      .set('@', path.join(__dirname, './src/'))
      .set('common', path.join(__dirname, './src/common/'))
  }
}