// var webpack = require('webpack')
// module.exports = {

// }
var webpack = require("webpack");
const path = require("path");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
//环境变量配置，dev/online（开发环境以及线上环境）
var WEBPACK_ENV = process.env.WEBPACK_ENV || "dev";
//获取html-webpack-plugin 参数的方法
var getHtmlConfig = function(name) {
  return {
    template: "./src/view/" + name + ".html",
    // filename的路径还是根据 output中的path为路径
    filename: "view/" + name + ".html",
    inject: true,
    hash: true,
    chunks: ["common", name]
  };
};
var config = {
  //入口文件
  entry: {
    common: ["./src/page/common/index.js"],
    index: ["./src/page/index/index.js"],
    login: ["./src/page/login/index.js"]
  },
  //定义出口文件地址
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath:
      "dev" === WEBPACK_ENV ? "/dist/" : "//s.happymmall.com/mmall-fe/dist/",
    filename: "js/[name].js"
  },
  //引用jq全局
  externals: {
    jquery: "window.jQuery"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },

      {
        //使用url 需要安装 npm install url-loader file-loader --save-dev
        test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/,
        use: ["url-loader?limit=100&name=resource/[name].[ext]"]
      }
    ]
  },
  optimization: {
    //独立通用模块到js/common.js
    splitChunks: {
      chunks: "initial",
      //   default: false,
      cacheGroups: {
        default: false, //禁用cacheGroups 默认属性
        // commons  自定义属性
        commons: {
          name: "common",
          chunks: "initial",
          minChunks: 2, //如果一个js被使用两次，进行打包
          minSize: 0
        }
      }
    }
    // runtimeChunk: true
  },
  resolve: {
    alias: {
      util: __dirname + "/src/util",
      page:__dirname + '/src/page',
      service:__dirname + '/src/service',
      image:__dirname + '/src/image',
      node_modules: __dirname + "/node_modules"
    }
  },
  plugins: [
    //将css单独打包
    // new ExtractTextPlugin("css/[name].css"),
    new ExtractTextWebpackPlugin("css/[name].css"),
    // new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin(getHtmlConfig("index")),
    new HtmlWebpackPlugin(getHtmlConfig("login"))
  ],
  mode: "development" // 设置mode
  
};
// if ("dev" === WEBPACK_ENV) {
//   config.entry.common.push("webpack-dev-server/client?http://localhost:8088/");
// }

module.exports = config;