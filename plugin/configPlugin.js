// 独有的钩子 https://cn.vitejs.dev/guide/api-plugin.html#vite-specific-hooks
export default function configPlugin() {
    return {
      name: "config-plugin",
      config() {
        return {
            define: {
              // 插入一些插件需要的配置
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
          },
        };
      },
      // 经过插件处理后的config
      configResolved(config) {
        console.log("configResolved", config.define);
        },
      
      configureServer(server) {
          server.middlewares.use((req, res, next) => {
              if (req.url.includes('test')) {
                  res.end('test')
              } else {
                  next()
              }
        })
      },
    };
}