const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})
//
// module.exports = {
//   devServer: {
//     open: true,
//     host: 'localhost',
//     port: 8080,
//     https: false,
//     proxy: {
//       // 配置跨域
//       '/api': {
//         target:
//           'https://www.fastmock.site/mock/88e8aef77a281ecf33aacf5846ec2083/api/',
//         pathRewrite: { '^/api': '' },
//         // ! 开启代理
//         changeOrigin: true,
//       },
//     },
//   },
// }
