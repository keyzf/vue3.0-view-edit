var merge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

// 🚧施工中

module.exports = merge(baseConfig, {
  devtool: 'none',
  mode: 'production',
  plugins: [
    // 打包分析
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin(),
    // gZip 压缩
    // new CompressionPlugin()
    // dll 试了一下，可能是没用对，效果不好
    // 告诉 Webpack 使用了哪些动态链接库
    // new DllReferencePlugin({
    //   // 描述 vue 动态链接库的文件内容
    //   manifest: require('./dll/vue.manifest.json'),
    // }),
    // new DllReferencePlugin({
    //   // 描述 element 动态链接库的文件内容
    //   manifest: require('./dll/element.manifest.json'),
    // }),
  ]
})