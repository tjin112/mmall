var _mm = require("util/mm.js");
var _user = {
  // 检查登陆状态
  checkLogin: function(resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl("/user/get_user_info.do"),
      methods: "POST",
      success: resolve,
      error: reject
    });
  },
  //   退出
  logout: function(resolve, reject) {
    _mm.request({
      url: _mm.getServerUrl("/user/logout.do"),
      methods: "POST",
      success: resolve,
      error: reject
    });
  }
};
module.exports = _user;
