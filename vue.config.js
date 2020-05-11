const path = require('path');
// const mock = require('./mock/index');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 基本路径
  publicPath: undefined,
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  assetsDir: 'static',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // @是src的别名
        prependData: '@import \'@/assets/styles/common.scss\';'
      }
    },
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('utils', resolve('src/utils'));
  },
  configureWebpack: (config) => {
    config.devServer = {
      open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: 8080,
      https: false,
      hotOnly: false,
      before: app => {
      },
      // proxy: {
      // }, // 设置代理
    };
    // mock.api(config.devServer);
  },
};
