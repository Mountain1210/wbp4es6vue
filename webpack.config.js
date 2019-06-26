/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2019-06-26 10:28:53
 * @version $Id$
 */

//webpack.config.js
 var path = require('path');//引入path 模块
 var htmlWebpackPlugin = require('html-webpack-plugin');//引入html模板模块
 const uglify = require('uglifyjs-webpack-plugin');//引入压缩机制

//webpack4配置需要包含VueLoaderPlugin,
//在输出里面配置plugins:{new VueLoaderPlugin()}
//否则会报错
 const VueLoaderPlugin = require('vue-loader/lib/plugin');

 module.exports = {
    mode:"production",//webpack4判断是生产环境还是开发环境 
    entry:"./main.js",//入口文件
    output:{
        path:path.resolve(__dirname,"dist"),//打包输出的文件目录
        filename:"js/[name].js"//输出的文件名
    },
       devServer:{//热重载
                contentBase: path.join(__dirname, "msrc"),
                //热重载需要监听的文件目录
                compress: true,
                //启用压缩
                port: 9000
                //监听的端口号码
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader'],
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"首页",
            template:'./index.html'
        }),
        new VueLoaderPlugin()
        // ,new uglify()
    ]
 }