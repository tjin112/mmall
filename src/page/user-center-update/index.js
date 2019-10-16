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
    this.bindEvent();
  },
  onLoad: function() {
    // 初始化左侧菜单
    navSide.init({
      name: "user-center"
    });
    // 加载用户信息
    this.loadUserInfo();
  },
  bindEvent: function() {
    //   提交修改
    var _this = this;
    // 点击提交按钮后的操作
    $(document).on("click", ".btn-submit", function() {
      var userInfo = {
        phone: $.trim($("#phone").val()),
        email: $.trim($("#email").val()),
        question: $.trim($("#question").val()),
        answer: $.trim($("#answer").val())
      };
      validateResult = _this.validateForm(userInfo);
      if (validateResult.status) {
        //   更改用户信息成功
        _user.updateUserInfo(
          userInfo,
          function(res,msg) {
            _mm.successTips(msg);
            window.location.href = "./user-center.html";
          },
          function(errMsg) {
            _mm.errorTips(validateResult.msg);
          }
        );
      } else {
        _mm.errorTips(validateResult.msg);
      }
    });
  },
  loadUserInfo: function() {
    var userHtml = "";
    _user.getUserInfo(
      function(res) {
        userHtml = _mm.renderHtml(templateIndex, res);
        $(".panel-body").html(userHtml);
      },
      function(errMsg) {
        _mm.errorTips(errMsg);
      }
    );
  },
  //   验证字段信息
  validateForm: function(formData) {
    var result = {
      status: false,
      msg: ""
    };
    if (!_mm.validate(formData.phone, "phone")) {
      result.msg = "手机号格式不正确";
      return result;
    }
    if (!_mm.validate(formData.email, "email")) {
      result.msg = "邮箱格式不正确";
      return result;
    }
    if (!_mm.validate(formData.question, "require")) {
      result.msg = "提示问题不能为空";
      return result;
    }
    if (!_mm.validate(formData.answer, "require")) {
      result.msg = "提示问题答案不能为空";
      return result;
    }
    // 通过验证，返回正确提示
    result.status = true;
    result.msg = "验证通过";
    return result;
  }
};
$(function() {
  page.init();
});
