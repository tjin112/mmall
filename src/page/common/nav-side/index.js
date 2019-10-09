require("./index.css");
var _mm = require("util/mm.js");
// 侧边导航
var navSide = {
  option: {
    name: "",
    navList: [
      { name: "user-center", desc: "个人中心", href: "./user-center.html" },
      { name: "order-list", desc: "我的订单", href: "./order-list.html" },
      { name: "pass-update", desc: "修改密码", href: "./pass-update.html" },
      { name: "about", desc: "关于MMall", href: "./about.html" }
    ]
  },
  init: function() {
    //   合并选项
    $.extend(this.option, this.option);
    this.renderNav();
  },
  //   渲染导航菜单
  renderNav: function() {
    //   计算active数据
    var iLength = this.option.navList.length;
    for (var i = 0; i < iLength; i++) {
      if (this.option.navList[i].name === this.option.name) {
        this.option.navList[i].isActive = true;
      }
    }
    // 渲染List数据
    var navHtml = _mm.renderHtml()
  }
};
