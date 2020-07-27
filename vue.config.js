const path = require('path')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/project'
    : '/',
    devServer: {
        proxy:{
          '/api': {
          target: 'http://120.79.38.52:80'
        }
      }  
    },
    chainWebpack: (config) => {
        config.resolve.alias
          .set('styles',path.join(__dirname,'./src/assets/styles/'))
          .set('@',path.join(__dirname,'./src/'))
          .set('common',path.join(__dirname,'./src/common/'))
    }
  }