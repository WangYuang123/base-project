const webpack = require('webpack')
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  outputDir: 'dist',
  assetsDir: 'assets',
  publicPath: './',
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  lintOnSave: true,
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8083,
    https: false,
    hotOnly: false
  },
  configureWebpack: {
    //引入jquery
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery'
      })
    ],
    /*打包配置版本号*/
    output: {
      /*模块名称+时间戳*/
      filename: `[name].js`,
      chunkFilename: `[name].js`
    }
  }
}
