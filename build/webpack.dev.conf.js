var webpack = require('webpack')
var merge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig), {
  devServer: {
    host: 'localhost',
    port: '8005',
    https: true,
    open: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() //热更新
  ],
}