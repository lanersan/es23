module.exports = {
	devServer: {
	    // 配置服务器代理
	    proxy: {
	      '/api': { // 匹配访问路径中含有 '/api' 的路径
	        target: 'http://localhost:7001/', // 测试地址、目标地址
	        changeOrigin: true,
	        ws: true, // 是否开启 webSocket 代理
	        pathRewrite: { // 请求路径重写
	          '^/api': '',   //重写请求路径
	        },
	      }
	    }
	  },
	publicPath: process.env.NODE_ENV === 'production' ? '' : '',
	outputDir: 'dist',
	assetsDir: 'static',
	indexPath: 'index.html',
	parallel: true,


}
