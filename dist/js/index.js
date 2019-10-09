/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"vendors~common","common","vendors~index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/page/common/header/index.css":
/*!******************************************!*\
  !*** ./src/page/common/header/index.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/page/common/header/index.css?");

/***/ }),

/***/ "./src/page/common/header/index.js":
/*!*****************************************!*\
  !*** ./src/page/common/header/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./index.css */ \"./src/page/common/header/index.css\");\r\nvar _mm = __webpack_require__(/*! util/mm.js */ \"./src/util/mm.js\");\r\n// 通用页面头部\r\nvar header = {\r\n  //暴漏一个初始化的function\r\n  init: function() {\r\n    this.bindEvent();\r\n  },\r\n  onLoad: function() {\r\n    var keyword = _mm.getUrlParam(\"keyword\");\r\n    // keyword存在，则回填输入框\r\n    if (keyword) {\r\n      $(\"#search-input\").val(keyword);\r\n    }\r\n  },\r\n  bindEvent: function() {\r\n    var _this = this;\r\n    // 点击搜索按钮的时候  做搜索提交\r\n    $(\"#search-btn\").click(function() {\r\n      _this.searchSubmit();\r\n    });\r\n    // 输入回车后 做搜索提交\r\n    $(\"#search-input\").keyup(function(e){\r\n      // keycode 13 为回车\r\n      if(e.keyCode ===13){\r\n        _this.searchSubmit();\r\n      }\r\n    })\r\n  },\r\n  // 搜索提交\r\n  searchSubmit: function() {\r\n    var keyword = $.trim($(\"#search-input\").val());\r\n  // 如果提交的时候有keyword  跳转到list页面\r\n    if(keyword){\r\n      window.location.href = './list.html?keyword=' + keyword;\r\n    }else{\r\n      // 如果keyword 为空 跳转到首页\r\n      _mm.goHome();\r\n    }\r\n  }\r\n};\r\nheader.init();\r\n\n\n//# sourceURL=webpack:///./src/page/common/header/index.js?");

/***/ }),

/***/ "./src/page/common/nav-side/index.css":
/*!********************************************!*\
  !*** ./src/page/common/nav-side/index.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/page/common/nav-side/index.css?");

/***/ }),

/***/ "./src/page/common/nav-side/index.js":
/*!*******************************************!*\
  !*** ./src/page/common/nav-side/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./index.css */ \"./src/page/common/nav-side/index.css\");\r\nvar _mm = __webpack_require__(/*! util/mm.js */ \"./src/util/mm.js\");\r\n// 侧边导航\r\nvar navSide = {\r\n  option: {\r\n    name: \"\",\r\n    navList: [\r\n      { name: \"user-center\", desc: \"个人中心\", href: \"./user-center.html\" },\r\n      { name: \"order-list\", desc: \"我的订单\", href: \"./order-list.html\" },\r\n      { name: \"pass-update\", desc: \"修改密码\", href: \"./pass-update.html\" },\r\n      { name: \"about\", desc: \"关于MMall\", href: \"./about.html\" }\r\n    ]\r\n  },\r\n  init: function() {\r\n    //   合并选项\r\n    $.extend(this.option, this.option);\r\n    this.renderNav();\r\n  },\r\n  //   渲染导航菜单\r\n  renderNav: function() {\r\n    //   计算active数据\r\n    var iLength = this.option.navList.length;\r\n    for (var i = 0; i < iLength; i++) {\r\n      if (this.option.navList[i].name === this.option.name) {\r\n        this.option.navList[i].isActive = true;\r\n      }\r\n    }\r\n    // 渲染List数据\r\n    var navHtml = _mm.renderHtml()\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/page/common/nav-side/index.js?");

/***/ }),

/***/ "./src/page/common/nav/index.css":
/*!***************************************!*\
  !*** ./src/page/common/nav/index.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/page/common/nav/index.css?");

/***/ }),

/***/ "./src/page/common/nav/index.js":
/*!**************************************!*\
  !*** ./src/page/common/nav/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./index.css */ \"./src/page/common/nav/index.css\");\r\nvar _mm = __webpack_require__(/*! util/mm.js */ \"./src/util/mm.js\");\r\nvar _user = __webpack_require__(/*! service/user-service.js */ \"./src/service/user-service.js\");\r\nvar _cart = __webpack_require__(/*! service/cart-service.js */ \"./src/service/cart-service.js\");\r\n// 导航\r\nvar nav = {\r\n  //暴漏一个初始化的function\r\n  init: function() {\r\n    this.bindEvent();\r\n    this.loadCartCount();\r\n    this.loadUserInfo();\r\n    // $('body').css('background','black')\r\n    return this;\r\n  },\r\n  bindEvent: function() {\r\n    //   登陆点击事件\r\n    $(\".js-login\").click(function() {\r\n      _mm.doLogin();\r\n    });\r\n    // 注册点击事件\r\n    $(\".js-register\").click(function() {\r\n      window.location.href = \"./register.html\";\r\n    });\r\n    // 退出点击事件\r\n    $(\".js-logout\").click(function() {\r\n      _user.logout(\r\n        function(res) {\r\n          window.location.reload();\r\n        },\r\n        function(errMsg) {\r\n          _mm.errorTips(errMsg);\r\n        }\r\n      );\r\n    });\r\n  },\r\n  //   加载用户信息\r\n  loadUserInfo: function() {\r\n    _user.checkLogin(\r\n      function(res) {\r\n        $(\".user.not-login\")\r\n          .hide()\r\n          .siblings(\".user.login\")\r\n          .show()\r\n          .find(\".username\")\r\n          .text(res.username);\r\n      },\r\n      function(errMsg) {\r\n        // _mm.errorTips(errMsg);\r\n      }\r\n    );\r\n  },\r\n  //   加载购物车数量\r\n  loadCartCount: function() {\r\n    _cart.getCartCount(\r\n      function(res) {\r\n        $(\".nav .cart-count\").text(res || 0);\r\n      },\r\n      function(errMsg) {\r\n        $(\".nav .cart-count\").text(0);\r\n      }\r\n    );\r\n  }\r\n};\r\nmodule.exports = nav.init();\r\n\n\n//# sourceURL=webpack:///./src/page/common/nav/index.js?");

/***/ }),

/***/ "./src/page/index/index.js":
/*!*********************************!*\
  !*** ./src/page/index/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// cats = require('./cats.js')\r\n// var $$ = require('jquery');\r\n// $$('body').html('hello INDEX')\r\n// require('../module.js')\r\n// require('./index.css')\r\nvar _mm = __webpack_require__(/*! ../../util/mm */ \"./src/util/mm.js\")\r\n__webpack_require__ (/*! page/common/header/index.js */ \"./src/page/common/header/index.js\")\r\n__webpack_require__ (/*! page/common/nav/index.js */ \"./src/page/common/nav/index.js\")\r\n__webpack_require__ (/*! page/common/nav-side/index.js */ \"./src/page/common/nav-side/index.js\")\n\n//# sourceURL=webpack:///./src/page/index/index.js?");

/***/ }),

/***/ "./src/service/cart-service.js":
/*!*************************************!*\
  !*** ./src/service/cart-service.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _mm = __webpack_require__(/*! util/mm.js */ \"./src/util/mm.js\");\r\nvar _cart = {\r\n  //   获取购物车数量\r\n  getCartCount: function(resolve, reject) {\r\n    _mm.request({\r\n      url: _mm.getServerUrl(\"/cart/get_cart_product_count.do\"),\r\n      success: resolve,\r\n      error: reject\r\n    });\r\n  }\r\n};\r\nmodule.exports = _cart;\r\n\n\n//# sourceURL=webpack:///./src/service/cart-service.js?");

/***/ }),

/***/ "./src/service/user-service.js":
/*!*************************************!*\
  !*** ./src/service/user-service.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _mm = __webpack_require__(/*! util/mm.js */ \"./src/util/mm.js\");\r\nvar _user = {\r\n  // 检查登陆状态\r\n  checkLogin: function(resolve, reject) {\r\n    _mm.request({\r\n      url: _mm.getServerUrl(\"/user/get_user_info.do\"),\r\n      methods: \"POST\",\r\n      success: resolve,\r\n      error: reject\r\n    });\r\n  },\r\n  //   退出\r\n  logout: function(resolve, reject) {\r\n    _mm.request({\r\n      url: _mm.getServerUrl(\"/user/logout.do\"),\r\n      methods: \"POST\",\r\n      success: resolve,\r\n      error: reject\r\n    });\r\n  }\r\n};\r\nmodule.exports = _user;\r\n\n\n//# sourceURL=webpack:///./src/service/user-service.js?");

/***/ }),

/***/ "./src/util/mm.js":
/*!************************!*\
  !*** ./src/util/mm.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// var Hogan = require('hogan');\r\nvar Hogan = __webpack_require__(/*! hogan.js */ \"./node_modules/hogan.js/lib/hogan.js\");\r\nvar conf = {\r\n  serverHost: \"\"\r\n};\r\nvar _mm = {\r\n  // 网络请求\r\n  request: function(param) {\r\n    var _this = this;\r\n    $.ajax({\r\n      type: param.method || \"get\",\r\n      url: param.url || \"\",\r\n      dataType: param.type || \"json\",\r\n      data: param.data || \"\",\r\n      success: function(res) {\r\n        // 请求成功\r\n        if (0 === res.status) {\r\n          typeof param.success === \"function\" &&\r\n            param.success(res.data, res.msg);\r\n        }\r\n        // 没有登录状态，需要强制登录\r\n        else if (10 === res.status) {\r\n          _this.doLogin();\r\n        }\r\n        // 请求数据错误\r\n        else if (1 === res.status) {\r\n          typeof param.error === \"function\" && param.error(res.msg);\r\n        }\r\n      },\r\n      error: function(err) {\r\n        typeof param.error === \"function\" && param.error(err.statusText);\r\n      }\r\n    });\r\n  },\r\n  // 获取服务器地址\r\n  getServerUrl: function(path) {\r\n    return conf.serverHost + path;\r\n  },\r\n  // 获取url参数\r\n  getUrlParam: function(name) {\r\n    var reg = new RegExp(\"(^|&)\" + name + \"=([^&]*)(&|$)\");\r\n    var result = window.location.search.substr(1).match(reg);\r\n    return result ? decodeURIComponent(result[2]) : null;\r\n  },\r\n  //   渲染html模板\r\n  renderHtml: function(htmlTemplate, data) {\r\n    var template = Hogan.compile(htmlTemplate),\r\n      result = template.render(data);\r\n    return result;\r\n  },\r\n  // 成功提示\r\n  successTips: function(msg) {\r\n    alert(msg || \"操作成功！\");\r\n  },\r\n  // 错误提示\r\n  errorTips: function(msg) {\r\n    alert(msg || \"哪里不对了~\");\r\n  },\r\n  // 字段的验证，支持非空、手机、邮箱的判断\r\n  validate: function(value, type) {\r\n    var value = $.trim(value);\r\n    // 非空验证\r\n    if (\"require\" === type) {\r\n      //将value 转成布尔值  value 为true\r\n      return !!value;\r\n    }\r\n    // 手机号验证\r\n    if (\"phone\" === type) {\r\n      //以数字1 开头 十位数字\r\n      return /^1\\d{10}$/.test(value);\r\n    }\r\n    // 邮箱格式验证\r\n    if (\"email\" === type) {\r\n      return /^(\\w)+(\\.\\w+)*@(\\w)+((\\.\\w{2,3}){1,3})$/.test(value);\r\n    }\r\n  },\r\n  // 统一登录处理\r\n  doLogin: function() {\r\n    window.location.href =\r\n      \"./user-login.html?redirect=\" + encodeURIComponent(window.location.href);\r\n  },\r\n  goHome: function() {\r\n    window.location.href = \"./index.html\";\r\n  }\r\n};\r\n\r\nmodule.exports = _mm;\r\n\n\n//# sourceURL=webpack:///./src/util/mm.js?");

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./src/page/index/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/page/index/index.js */\"./src/page/index/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/page/index/index.js?");

/***/ })

/******/ });