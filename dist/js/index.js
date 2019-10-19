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
/******/ 	deferredModules.push([1,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/image/banner/banner1.jpg":
/*!**************************************!*\
  !*** ./src/image/banner/banner1.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"resource/banner1.jpg\";\n\n//# sourceURL=webpack:///./src/image/banner/banner1.jpg?");

/***/ }),

/***/ "./src/image/banner/banner2.jpg":
/*!**************************************!*\
  !*** ./src/image/banner/banner2.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"resource/banner2.jpg\";\n\n//# sourceURL=webpack:///./src/image/banner/banner2.jpg?");

/***/ }),

/***/ "./src/image/banner/banner3.jpg":
/*!**************************************!*\
  !*** ./src/image/banner/banner3.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"resource/banner3.jpg\";\n\n//# sourceURL=webpack:///./src/image/banner/banner3.jpg?");

/***/ }),

/***/ "./src/image/banner/banner4.jpg":
/*!**************************************!*\
  !*** ./src/image/banner/banner4.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"resource/banner4.jpg\";\n\n//# sourceURL=webpack:///./src/image/banner/banner4.jpg?");

/***/ }),

/***/ "./src/image/banner/banner5.jpg":
/*!**************************************!*\
  !*** ./src/image/banner/banner5.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"resource/banner5.jpg\";\n\n//# sourceURL=webpack:///./src/image/banner/banner5.jpg?");

/***/ }),

/***/ "./src/page/index/banner.string":
/*!**************************************!*\
  !*** ./src/page/index/banner.string ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<div class=\\\"banner\\\">\\r\\n    <ul>\\r\\n        <li>\\r\\n            <a href=\\\"./list.html?catergoryId=100021\\\" target=\\\"_blank\\\">\\r\\n                <img src=\\\"\" + __webpack_require__(/*! ../../image/banner/banner1.jpg */ \"./src/image/banner/banner1.jpg\") + \"\\\" alt=\\\"\\\" class=\\\"banner-img\\\">\\r\\n            </a>\\r\\n        </li>\\r\\n        <li>\\r\\n            <a href=\\\"./list.html?catergoryId=100030\\\" target=\\\"_blank\\\">\\r\\n                <img src=\\\"\" + __webpack_require__(/*! ../../image/banner/banner2.jpg */ \"./src/image/banner/banner2.jpg\") + \"\\\" alt=\\\"\\\" class=\\\"banner-img\\\">\\r\\n            </a>>\\r\\n        </li>\\r\\n        <li>\\r\\n            <a href=\\\"./list.html?catergoryId=100016\\\" target=\\\"_blank\\\">\\r\\n                <img src=\\\"\" + __webpack_require__(/*! ../../image/banner/banner3.jpg */ \"./src/image/banner/banner3.jpg\") + \"\\\" alt=\\\"\\\" class=\\\"banner-img\\\">\\r\\n            </a>>\\r\\n        </li>\\r\\n        <li>\\r\\n            <a href=\\\"./list.html?catergoryId=100001\\\" target=\\\"_blank\\\">\\r\\n                <img src=\\\"\" + __webpack_require__(/*! ../../image/banner/banner4.jpg */ \"./src/image/banner/banner4.jpg\") + \"\\\" alt=\\\"\\\" class=\\\"banner-img\\\">\\r\\n            </a>>\\r\\n        </li>\\r\\n        <li>\\r\\n            <a href=\\\"./list.html?catergoryId=100021\\\" target=\\\"_blank\\\">\\r\\n                <img src=\\\"\" + __webpack_require__(/*! ../../image/banner/banner5.jpg */ \"./src/image/banner/banner5.jpg\") + \"\\\" alt=\\\"\\\" class=\\\"banner-img\\\">\\r\\n            </a>>\\r\\n        </li>\\r\\n    </ul>\\r\\n    <div class=\\\"banner-arrow prev\\\">\\r\\n        <i class=\\\"fa fa-angle-left\\\"></i>\\r\\n    </div>\\r\\n    <div class=\\\"banner-arrow next\\\">\\r\\n        <i class=\\\"fa fa-angle-right\\\"></i>\\r\\n    </div>\\r\\n</div>\";\n\n//# sourceURL=webpack:///./src/page/index/banner.string?");

/***/ }),

/***/ "./src/page/index/index.css":
/*!**********************************!*\
  !*** ./src/page/index/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/page/index/index.css?");

/***/ }),

/***/ "./src/page/index/index.js":
/*!*********************************!*\
  !*** ./src/page/index/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// cats = require('./cats.js')\r\n// var $$ = require('jquery');\r\n// $$('body').html('hello INDEX')\r\n// require('../module.js')\r\n__webpack_require__(/*! ./index.css */ \"./src/page/index/index.css\");\r\n__webpack_require__(/*! util/slider/index.js */ \"./src/util/slider/index.js\");\r\n__webpack_require__(/*! page/common/header/index.js */ \"./src/page/common/header/index.js\");\r\n__webpack_require__(/*! page/common/nav/index.js */ \"./src/page/common/nav/index.js\");\r\nvar _mm = __webpack_require__(/*! ../../util/mm */ \"./src/util/mm.js\");\r\nvar navSide = __webpack_require__(/*! page/common/nav-side/index.js */ \"./src/page/common/nav-side/index.js\");\r\nvar templateBanner = __webpack_require__(/*! ./banner.string */ \"./src/page/index/banner.string\");\r\n$(function() {\r\n  // 渲染banner的轮播图html\r\n  var bannerHtml = _mm.renderHtml(templateBanner);\r\n  $(\".banner-con\").html(bannerHtml);\r\n  // 初始化banner\r\n  var $slider = $(\".banner\").unslider({\r\n    dots: true\r\n  });\r\n  // 前一个后一个操作的事件绑定\r\n  $('.banner-con .banner-arrow').click(function(){\r\n    var forward = $(this).hasClass('prev')? 'prev':'next'\r\n    $slider.data('unslider')[forward]();\r\n  })\r\n\r\n});\r\n\n\n//# sourceURL=webpack:///./src/page/index/index.js?");

/***/ }),

/***/ "./src/util/slider/index.css":
/*!***********************************!*\
  !*** ./src/util/slider/index.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/util/slider/index.css?");

/***/ }),

/***/ "./src/util/slider/index.js":
/*!**********************************!*\
  !*** ./src/util/slider/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./index.css */ \"./src/util/slider/index.css\")\r\n__webpack_require__(/*! ./unslider.js */ \"./src/util/slider/unslider.js\")\r\n\n\n//# sourceURL=webpack:///./src/util/slider/index.js?");

/***/ }),

/***/ "./src/util/slider/unslider.js":
/*!*************************************!*\
  !*** ./src/util/slider/unslider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.console&&console.warn(\"This version of Unslider is due to be deprecated by December 1. Please visit unslider.com for details on how to upgrade.\"),function(t,s){if(!t)return s;var i=function(){this.el=s,this.items=s,this.sizes=[],this.max=[0,0],this.current=0,this.interval=s,this.opts={speed:500,delay:3e3,complete:s,keys:!s,dots:s,fluid:s};var i=this;this.init=function(s,i){return this.el=s,this.ul=s.children(\"ul\"),this.max=[s.outerWidth(),s.outerHeight()],this.items=this.ul.children(\"li\").each(this.calculate),this.opts=t.extend(this.opts,i),this.setup(),this},this.calculate=function(s){var e=t(this),n=e.outerWidth(),h=e.outerHeight();i.sizes[s]=[n,h],n>i.max[0]&&(i.max[0]=n),h>i.max[1]&&(i.max[1]=h)},this.setup=function(){if(this.el.css({overflow:\"hidden\",width:i.max[0],height:this.items.first().outerHeight()}),this.ul.css({width:100*this.items.length+\"%\",position:\"relative\"}),this.items.css(\"width\",100/this.items.length+\"%\"),this.opts.delay!==s&&(this.start(),this.el.hover(this.stop,this.start)),this.opts.keys&&t(document).keydown(this.keys),this.opts.dots&&this.dots(),this.opts.fluid){var e=function(){i.el.css(\"width\",Math.min(Math.round(i.el.outerWidth()/i.el.parent().outerWidth()*100),100)+\"%\")};e(),t(window).resize(e)}this.opts.arrows&&this.el.parent().append('<p class=\"arrows\"><span class=\"prev\">芒鈥犅�</span><span class=\"next\">芒鈥犫€�</span></p>').find(\".arrows span\").click(function(){t.isFunction(i[this.className])&&i[this.className]()}),t.event.swipe&&this.el.on(\"swipeleft\",i.prev).on(\"swiperight\",i.next)},this.move=function(s,e){this.items.eq(s).length||(s=0),0>s&&(s=this.items.length-1);var n=this.items.eq(s),h={height:n.outerHeight()},o=e?5:this.opts.speed;this.ul.is(\":animated\")||(i.el.find(\".dot:eq(\"+s+\")\").addClass(\"active\").siblings().removeClass(\"active\"),this.el.animate(h,o)&&this.ul.animate(t.extend({left:\"-\"+s+\"00%\"},h),o,function(){i.current=s,t.isFunction(i.opts.complete)&&!e&&i.opts.complete(i.el)}))},this.start=function(){i.interval=setInterval(function(){i.move(i.current+1)},i.opts.delay)},this.stop=function(){return i.interval=clearInterval(i.interval),i},this.keys=function(s){var e=s.which,n={37:i.prev,39:i.next,27:i.stop};t.isFunction(n[e])&&n[e]()},this.next=function(){return i.stop().move(i.current+1)},this.prev=function(){return i.stop().move(i.current-1)},this.dots=function(){var s='<ol class=\"dots\">';t.each(this.items,function(t){s+='<li class=\"dot'+(1>t?\" active\":\"\")+'\">'+(t+1)+\"</li>\"}),s+=\"</ol>\",this.el.addClass(\"has-dots\").append(s).find(\".dot\").click(function(){i.move(t(this).index())})}};t.fn.unslider=function(s){var e=this.length;return this.each(function(n){var h=t(this),o=(new i).init(h,s);h.data(\"unslider\"+(e>1?\"-\"+(n+1):\"\"),o)})}}(window.jQuery,!1);\n\n//# sourceURL=webpack:///./src/util/slider/unslider.js?");

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