var _mm = require("../../util/mm");
require("page/common/header/index.js");
require("page/common/nav/index.js");
require("./index.css");
var navSide = require("page/common/nav-side/index.js");
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
      name: "user-pass-update"
    });
    // 加载用户信息
    // this.loadUserInfo();
  },
  bindEvent: function() {
    //   提交修改
    var _this = this;
    // 点击提交按钮后的操作
    $(document).on("click", ".btn-submit", function() {
      var userInfo = {
        password: $.trim($("#password").val()),
        passwordNew: $.trim($("#password-new").val()),
        passwordConfirm: $.trim($("#password-confirm").val())
      };
      validateResult = _this.validateForm(userInfo);
      if (validateResult.status) {
        //   更改用户密码
        _user.updatePassword(
          { passwordOld: userInfo.password, passwordNew: userInfo.passwordNew },
          function(res, msg) {
            _mm.successTips(msg);
          },
          function(errMsg) {
            _mm.errorTips(errMsg);
          }
        );
      } else {
        _mm.errorTips(validateResult.msg);
      }
    });
  },
  //   验证字段信息
  validateForm: function(formData) {
    var result = {
      status: false,
      msg: ""
    };
    // 判断原密码是否为空
    if (!_mm.validate(formData.password, "require")) {
      result.msg = "原密码不能为空";
      return result;
    }
    // 验证新密码长度
    if (!formData.passwordNew || formData.passwordNew.length < 6) {
      result.msg = "密码长度不小于6位";
      return result;
    }
    if (formData.passwordNew !== formData.passwordConfirm) {
      result.msg = "两次输入密码不一致";
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
