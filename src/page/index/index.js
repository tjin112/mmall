// cats = require('./cats.js')
// var $$ = require('jquery');
// $$('body').html('hello INDEX')
// require('../module.js')
require("./index.css");
require("util/slider/index.js");
require("page/common/header/index.js");
require("page/common/nav/index.js");
var _mm = require("../../util/mm");
var navSide = require("page/common/nav-side/index.js");
var templateBanner = require("./banner.string");
$(function() {
  // 渲染banner的轮播图html
  var bannerHtml = _mm.renderHtml(templateBanner);
  $(".banner-con").html(bannerHtml);
  // 初始化banner
  var $slider = $(".banner").unslider({
    dots: true
  });
  // 前一个后一个操作的事件绑定
  $('.banner-con .banner-arrow').click(function(){
    var forward = $(this).hasClass('prev')? 'prev':'next'
    $slider.data('unslider')[forward]();
  })

});
