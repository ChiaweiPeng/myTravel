const path = require('path')

module.exports = {
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