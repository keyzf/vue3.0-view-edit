const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css到单独文件的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
// 构造出共享进程池
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

const resolve = (url) => path.resolve(__dirname, url);

const optimization = require('./splitChunks')

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
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: true
          }
        }
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(less|css)$/,
        include: [resolve('../client'), resolve('../node_modules/element-ui/lib/theme-chalk')],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)?$/,
        loader: 'file-loader',
        options: {
          name: 'font/[name].[hash:6].[ext]',
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'images/[path]/[name].[hash:6].[ext]',
        }
      },
    ]
  },
  optimization,
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:6].css",//都提到build目录下的css目录中
    }),
    new htmlWebpackPlugin({
      inject: true,
      template: resolve('./index.html'),
      title: 'webpack vue 测试 demo',
    }),
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
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('client'),
    }
  },
}


module.exports = config;