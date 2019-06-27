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
  const extractTextPlugin=require("extract-text-webpack-plugin");//css分离
  const glob = require('glob'); //使用PurifyCSS可以大大减少CSS冗余
  const PurifyCSSPlugin = require("purifycss-webpack");
  const webpack = require("webpack");
  var fs = require("fs")

  var multipageHelper = require('./multipage-helper')


  var moduleList          //缓存多页面模块列表
  var moduleRootPath = './src/module' //模块根目录(这个可以根据自己的需求命名)

//webpack4配置需要包含VueLoaderPlugin,
//在输出里面配置plugins:{new VueLoaderPlugin()}
//否则会报错
 const VueLoaderPlugin = require('vue-loader/lib/plugin');

 var website ={
     publicPath:"http://localhost:4000/"
     // publicPath:"http://192.168.1.103:8888/"
 }

 //动态添加入口
 // function getEntry(){
 //     var entry = {};
 //     //读取src目录所有page入口
 //     glob.sync('./mrsrc/js/**/*.js').forEach(function(name){
 //         var start = name.indexOf('mrsrc/') + 4;
 //         var end = name.length - 3;
 //         var eArr = [];
 //         var n = name.slice(start,end);
 //         n= n.split('/')[1];
 //         eArr.push(name);
 //         eArr.push('babel-polyfill');
 //         entry[n] = eArr;
 //     })
 //     return entry;
 // }
 // //动态生成html
 // //获取html-webpack-plugin参数的方法
 // var getHtmlConfig = function(name,chunks){
 //     return {
 //         template:`./mrsrc/pages/${name}.html`,
 //         filename:`pages/${name}.html`,
 //         inject:true,
 //         hash:false,
 //         chunks:[name]
 //     }
 // }
 // 这里的IP和端口，是你本机的ip或者是你devServer配置的IP和端口。


 module.exports = {
    mode:"production",//webpack4判断是生产环境还是开发环境 
    entry:multipageHelper.getEntries(),//入口文件  PS：入口错误会导致impoft样式找不到,热加载失误
    output:{
        path:path.resolve(__dirname,"mrsrcdist")//打包输出的文件目录

        ,filename:"js/[name].js"//输出的文件名
        ,publicPath:website.publicPath,  //publicPath：主要作用就是处理静态文件路径的
    },
    
    devServer:{
    	// contentBase:path.resolve(__dirname,'./es6'),
    	//热重载
        contentBase: path.join(__dirname, "mrsrc"),
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
            }

            ,{
                test:/\.css$/,
                use: extractTextPlugin.extract({
                        fallback: "style-loader",
                        use:[
	            	            {loader:"css-loader"},
	            	            {loader:"postcss-loader"}
                            ]
                        })
            }
            // {
            // 	test:/\.css$/,
            // 	use: extractTextPlugin.extract({
            // 	        fallback: "style-loader",
            // 	        use: "css-loader"
            // 	    })
            //     // test: /\.css$/,
            //     // use: [
            //     //   {loader:'style-loader'},
            //     //   {loader:'css-loader'}
            //     // ]
            // }
            ,{
                test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
                use:[{
                    loader:'url-loader', //是指定使用的loader和loader的配置参数
                    options:{
                        limit:500  //是把小于500B的文件打成Base64的格式，写入JS
                       ,name: 'img/[name].[hash:7].[ext]'
                       ,outputPath:'images/',
                    }
                }]
            }
            ,{
			    test: /\.(htm|html)$/i,
			     use:[ 'html-withimg-loader'] 
			}
			//less loader
			,{
				test: /\.less$/,
				use: extractTextPlugin.extract({
				            use: [{
				                loader: "css-loader"
				            }, {
				                loader: "less-loader"
				            }],
				            // use style-loader in development
				            fallback: "style-loader"
				        })
			        // test: /\.less$/,
			        // use: [{
			        //           loader: "style-loader" // creates style nodes from JS strings
			        //       }, 
			        //       {
			        //           loader: "css-loader" // translates CSS into CommonJS
			        //       },
			        //       {
			        //           loader: "less-loader" // compiles Less to CSS
			        //       }]
			 }
			 ,{
				test: /\.scss$/,
				use: extractTextPlugin.extract({
				    use: [{
				        loader: "css-loader"
				    }, {
				        loader: "sass-loader"
				    }],
				                // use style-loader in development
				    fallback: "style-loader"
				})
			 }
			 //babel 配置
			 ,{
               test:/\.(jsx|js)$/,
               use:{
                   loader:'babel-loader',
               },
               exclude:/node_modules/
           }
        ]
    },
    plugins:[

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery"
        })  
        ,new VueLoaderPlugin()
        ,new uglify()
        ,new extractTextPlugin("css/index.css")
        // ,new PurifyCSSPlugin({ 
        //   //这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
        //   paths: glob.sync(path.join(__dirname, 'src/*.html')),
        //   }),
    ]
 }


Array.prototype.push.apply(module.exports.plugins,multipageHelper.getDevHtmlWebpackPluginList())