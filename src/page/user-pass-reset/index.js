require("./index.css");
require("page/common/nav-simple/index.js");
var _user = require("service/user-service.js");
var _mm = require("util/mm.js");

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
  data: {
    username: "",
    getQuestion: "",
    answer: "",
    token: ""
  },
  init: function() {
    this.onload();
    this.bindEvent();
  },
  bindEvent: function() {
    var _this = this;
    // s输入用户名部分的下一步按钮点击
    $("#submit-username").click(function() {
      var username = $.trim($("#username").val());
      if (username) {
        _user.getQuestion(
          username,
          function(res) {
            _this.data.username = username;
            _this.data.getQuestion = res;
            _this.loadStepQuestion();
          },
          function(errMsg) {
            formError.show(errMsg);
          }
        );
      } else {
        formError.show("请输入用户名");
      }
    });
    // s输入密码提示问题答案部分的按钮点击
    $("#submit-question").click(function() {
      var answer = $.trim($("#answer").val());
      if (answer) {
        // 检查密码提示答案
        _user.checkAnswer(
          {
            username: _this.data.username,
            question: _this.data.getQuestion,
            answer: answer
          },
          function(res) {
            _this.data.answer = answer;
            _this.data.token = res;
            _this.loadStepPassword();
          },
          function(errMsg) {
            formError.show(errMsg);
          }
        );
      } else {
        formError.show("请输入密码提示的答案");
      }
    });
    // s输入新密码后的按钮点击
    $("#submit-password").click(function() {
      var password = $.trim($("#password").val());
      if (password && password.length >= 6) {
        // 检查密码
        _user.resetPassword(
          {
            username: _this.data.username,
            passwordNew: password,
            forgetToken: _this.data.token
          },
          function(res) {
            window.location.href = "./result.html?type=pass-reset";
          },
          function(errMsg) {
            formError.show(errMsg);
          }
        );
      } else {
        // 密码为空时的提示
        formError.show("请输入不少6位的密码");
      }
    });
  },
  onload: function() {
    this.loadStepUsername();
  },
  // 加载用户名的第一步
  loadStepUsername: function() {
    $(".step-username").show();
  },
  // 输入密码提示答案
  loadStepQuestion: function() {
    // 清楚错误提示
    formError.hide();
    // 做容器的切换
    $(".step-username")
      .hide()
      .siblings(".step-question")
      .show()
      .find(".question")
      .text(this.data.getQuestion);
  },
  // 输入重置密码
  loadStepPassword: function() {
    // 清楚错误提示
    formError.hide();
    // 做容器的切换
    $(".step-question")
      .hide()
      .siblings(".step-password")
      .show();
  }
};
$(function() {
  page.init();
});
