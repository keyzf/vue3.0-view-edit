const path = require('path')

module.exports = {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      libs: {
        name: 'node_modules',
        test: /[\\/]node_modules[\\/]/,
        priority: 10,
        chunks: 'all' // only package third parties that are initially dependent
      },
      vue: {
        name: 'vue', // split elementUI into a single package
        priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
        test: /[\\/]node_modules[\\/]vue(.*)/ // in order to adapt to cnpm
      },
      element: {
        name: 'element-ui', // split elementUI into a single package
        priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
        test: /[\\/]node_modules[\\/]element-ui[\\/]/ // in order to adapt to cnpm
      },
      commons: {
        name: 'commons',
        test: path.resolve(__dirname, '../client'), // can customize your rules
        minChunks: 2, //  minimum common number
        priority: 5,
        reuseExistingChunk: true
      }
    }
  },
  runtimeChunk: {
    name: 'runtime'
  }
}