require("./index.css");
var _mm = require("util/mm.js");
// 通用页面头部
var header = {
  //暴漏一个初始化的function
  init: function() {
    this.bindEvent();
    this.onLoad();
  },
  onLoad: function() {
    var keyword = _mm.getUrlParam("keyword");
    // keyword存在，则回填输入框
    if (keyword) {
      $("#search-input").val(keyword);
    }
  },
  bindEvent: function() {
    var _this = this;
    // 点击搜索按钮的时候  做搜索提交
    $("#search-btn").click(function() {
      _this.searchSubmit();
    });
    // 输入回车后 做搜索提交
    $("#search-input").keyup(function(e) {
      // keycode 13 为回车
      if (e.keyCode === 13) {
        _this.searchSubmit();
      }
    });
  },
  // 搜索提交
  searchSubmit: function() {
    var keyword = $.trim($("#search-input").val());
    // 如果提交的时候有keyword  跳转到list页面
    if (keyword) {
      window.location.href = "./list.html?keyword=" + keyword;
    } else {
      // 如果keyword 为空 跳转到首页
      _mm.goHome();
    }
  }
};
header.init();
