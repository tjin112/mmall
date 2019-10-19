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
var getHtmlConfig = function(name, title) {
  return {
    template: "./src/view/" + name + ".html",
    // filename的路径还是根据 output中的path为路径
    filename: "view/" + name + ".html",
    favicon:'./favicon.ico',
    title: title,
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
    list: ["./src/page/list/index.js"],
    detail: ["./src/page/detail/index.js"],
    cart: ["./src/page/cart/index.js"],
    "user-login": ["./src/page/user-login/index.js"],
    "user-register": ["./src/page/user-register/index.js"],
    "user-pass-reset": ["./src/page/user-pass-reset/index.js"],
    "user-center": ["./src/page/user-center/index.js"],
    "user-center-update": ["./src/page/user-center-update/index.js"],
    "user-pass-update": ["./src/page/user-pass-update/index.js"],
    result: ["./src/page/result/index.js"]
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
      },
      {
        test: /\.string$/,
        use: ["html-loader"]
      }
    ]
  },
  optimization: {
    //独立通用模块到js/common.js
    splitChunks: {
      // chunks: "initial",
      //   default: false,
      cacheGroups: {
        default: false, //禁用cacheGroups 默认属性
        // commons  自定义属性
        commons: {
          name: "common",
          chunks: "all",
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
      page: __dirname + "/src/page",
      service: __dirname + "/src/service",
      image: __dirname + "/src/image",
      node_modules: __dirname + "/node_modules"
    }
  },
  plugins: [
    //将css单独打包
    // new ExtractTextPlugin("css/[name].css"),
    new ExtractTextWebpackPlugin("css/[name].css"),
    // new ExtractTextPlugin("css/[name].css"),
    new HtmlWebpackPlugin(getHtmlConfig("index", "首页")),
    new HtmlWebpackPlugin(getHtmlConfig("list", "商品列表页")),
    new HtmlWebpackPlugin(getHtmlConfig("detail", "商品详情页")),
    new HtmlWebpackPlugin(getHtmlConfig("cart", "购物车")),
    new HtmlWebpackPlugin(getHtmlConfig("user-login", "用户登录")),
    new HtmlWebpackPlugin(getHtmlConfig("user-register", "用户注册")),
    new HtmlWebpackPlugin(getHtmlConfig("result", "操作结果")),
    new HtmlWebpackPlugin(getHtmlConfig("user-pass-reset", "找回密码")),
    new HtmlWebpackPlugin(getHtmlConfig("user-pass-update", "修改密码")),
    new HtmlWebpackPlugin(getHtmlConfig("user-center", "个人中心")),
    new HtmlWebpackPlugin(getHtmlConfig("user-center-update", "修改个人信息"))
  ],
  mode: "development", // 设置mode
  devServer: {
    port: 8088,
    inline: true,
    proxy: {
      "**/*.do": {
        target: "http://test.happymmall.com",
        changeOrigin: true
      }
    }
  }
};
// if ("dev" === WEBPACK_ENV) {
//   config.entry.common.push("webpack-dev-server/client?http://localhost:8088/");
// }

module.exports = config;
