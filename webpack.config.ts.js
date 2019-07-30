const path = require('path');

module.exports = {
  entry: './tssrc/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer: {
        // contentBase:path.resolve(__dirname,'./es6'),
        //热重载
        contentBase: path.join(__dirname, "tsdist"),
        //热重载需要监听的文件目录
        compress: true,
        //启用压缩
        port: 9000
            //监听的端口号码
    },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'tsdist')
  }
};