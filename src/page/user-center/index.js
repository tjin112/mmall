var _mm = require("../../util/mm");
require("page/common/header/index.js");
require("page/common/nav/index.js");
require("./index.css");
var navSide = require("page/common/nav-side/index.js");
var templateIndex = require("./index.string");
var _user = require("service/user-service.js");
// 表单里的错误提示
var formError = {
  show: function(errMsg) {
    $(".error-item")
      .show()
      .find(".err-msg")
      .text(errMsg);
  },
  hide: function() {
    $(".error-item")
      .hide()
      .find(".err-msg")
      .text("");
  }
};

// page 逻辑部分
var page = {
  init: function() {
    this.onLoad();
  },
  onLoad: function() {
    // 初始化左侧菜单
    navSide.init({
      name: "user-center"
    });
    // 加载用户信息
    this.loadUserInfo();
  },
  loadUserInfo: function() {
    var userHtml = "";
    _user.getUserInfo(
      function(res) {
        userHtml = _mm.renderHtml(templateIndex, res);
        $('.panel-body').html(userHtml)
      },
      function(errMsg) {
          _mm.errorTips(errMsg)
      }
    );
  }
};
$(function() {
  page.init();
});
