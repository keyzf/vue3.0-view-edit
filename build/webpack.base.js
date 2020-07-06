const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


const resolve = (url) => path.resolve(__dirname, url);

const config = {
  // 入口
  entry: {
    main: resolve('../client/main.js'),
  },
  output: {
    path: resolve('../dist'),
    filename: 'js/[name].[hash:8].js'
  },
  module: {
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options:{
          compilerOptions:{
            preserveWhitespace: true
          }
        }
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ]
  },
  plugin:[
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:6].css",//都提到build目录下的css目录中
    }),
    new htmlWebpackPlugin({
      inject: true,
      template: './index.html',
      title: 'webpack vue 测试 demo',
    }),
  ]
}


module.exports = config;