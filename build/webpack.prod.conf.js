var merge = require('webpack-merge')

const baseConfig = require('./webpack.base.conf');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
// 构造出共享进程池
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

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
    new HappyPack({
      // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
      id: 'babel',
      // 如何处理 .js 文件，用法和 Loader 配置中一样
      loaders: ['babel-loader?cacheDirectory'],
      // 使用共享进程池中的子进程去处理任务
      threadPool: happyThreadPool,
    }),
    new HappyPack({
      id: 'less',
      // 如何处理 .css 文件，用法和 Loader 配置中一样
      loaders: ['css-loader', 'postcss-loader', 'less-loader',],
      // 使用共享进程池中的子进程去处理任务
      threadPool: happyThreadPool,
    }),
  ]
})