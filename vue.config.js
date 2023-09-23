const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  // ...
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 在这里添加你想要自定义的 Less 变量
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer:{
  proxy: {
    '/api': {
    target: 'http://47.108.251.106:8881',//服务器协议、ip和端口号
    secure: false,  // 如果是https接口，需要配置这个参数
    ws: true,//是否代理websockets
    changeOrigin: true,
    pathRewrite:{
      '^/api':''
    }
  },
},
},
};
