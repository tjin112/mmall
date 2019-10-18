require("page/common/header/index.js");
require("./index.css");
var templateIndex = require("./index.string");
var _cart = require("service/cart-service.js");
var _mm = require("../../util/mm");
var nav = require("page/common/nav/index.js");
var page = {
  data: {
    total: 10
  },
  init: function() {
    this.onLoad();
    this.bindEvent();
  },
  onLoad: function() {
    $(".page-wrap").html("<div class='loading'></div>");
    this.loadCart();
  },
  bindEvent: function() {
    var _this = this;
    //   商品的选择/取消选择
    $(document).on("click", ".cart-select", function() {
      var $this = $(this);
      productId = $this.parents(".cart-table").data("product-id");
      //   切换选中状态
      if ($this.is(":checked")) {
        // 选中时候
        _cart.selectProduct(
          productId,
          function(res) {
            _this.renderCart(res);
          },
          function(errMsg) {
            _this.showCartError();
          }
        );
      }
      // 取消选中
      else {
        _cart.unselectProduct(
          productId,
          function(res) {
            _this.renderCart(res);
          },
          function(errMsg) {
            _this.showCartError();
          }
        );
      }
    });
    //   商品的全选/取消全选
    $(document).on("click", ".cart-select-all", function() {
      var $this = $(this);
      //   全选
      if ($this.is(":checked")) {
        // 选中时候
        _cart.selectAllProduct(
          function(res) {
            _this.renderCart(res);
          },
          function(errMsg) {
            _this.showCartError();
          }
        );
      }
      // 取消全选
      else {
        _cart.unselectAllProduct(
          function(res) {
            _this.renderCart(res);
          },
          function(errMsg) {
            _this.showCartError();
          }
        );
      }
    });
    // 商品数量变化
    $(document).on("click", ".count-btn", function() {
      var $this = $(this);
      $pCount = $this.siblings(".count-input");
      //   var currCount = $pCount.val();
      type = $this.hasClass("plus") ? "plus" : "minus";
      productId = $this.parents(".cart-table").data("product-id");
      currCount = parseInt($pCount.val());
      minCount = 1;
      maxCount = parseInt($pCount.data("max"));
      newCount = 0;
      if (type === "plus") {
        if (currCount >= maxCount) {
          _mm.errorTips("you cannot add more items");
          return;
        }
        newCount = currCount + 1;
      } else if (type === "minus") {
        if (currCount <= minCount) {
          return;
        }
        newCount = currCount - 1;
      }
      //   跟新商品数量
      _cart.updateProduct(
        {
          productId: productId,
          count: newCount
        },
        function(res) {
          _this.renderCart(res);
        },
        function(errMsg) {
          _this.showCartError();
        }
      );
    });
    // 删除单个商品按钮
    $(document).on("click", ".cart-delete", function() {
      if (window.confirm("Are you sure to delete this item ?")) {
        var productId = $(this)
          .parents(".cart-table")
          .data("product-id");
        _this.deleteCartProduct(productId);
      }
    });
    // 删除选中商品
    $(document).on("click", ".delete-selected", function() {
      if (window.confirm("Are you sure to delete this item ?")) {
        var arrProductIds = [],
          // 找到所有选中的商品 找到 有checked
          $selectedItem = $(".cart-select:checked");
        // 用for循环取出所有带有checked类的id
        for (i = 0, ilength = $selectedItem.length; i < ilength; i++) {
          arrProductIds.push(
            $($selectedItem[i])
              .parents(".cart-table")
              .data("product-id")
          );
          if (arrProductIds.length) {
            //   join： 用逗号将数组中的元素 拼接成为字符串
            _this.deleteCartProduct(arrProductIds.join(","));
          } else {
            _mm.errorTips("no items selected");
          }
        }
      }
    });
    // 提交购物车
    $(document).on("click", ".btn-submit", function() {
      // 判断总价是否大于0
      if (_this.data.cartInfo && _this.data.cartInfo.cartTotalPrice > 0) {
        _mm.errorTips("successfully submit");
      } else {
        _mm.errorTips("no item selected");
      }
    });
  },
  // 加载购物车信息
  loadCart: function() {
    var _this = this;
    // 获取购物车列表
    _cart.getCartList(
      function(res) {
        _this.renderCart(res);
      },
      function(errMsg) {
        _this.showCartError();
      }
    );
  },
  //   渲染购物车
  renderCart: function(data) {
    this.filter(data),
      // 缓存购物车信息
      (this.data.cartInfo = data);
    // 渲染html
    // **往data 增加属性 这样也就可以在前端计算总价
    // data["total"] = this.data.total;
    console.log(data);
    var cartHtml = _mm.renderHtml(templateIndex, data);

    $(".page-wrap").html(cartHtml);
    // 通知导航的购物车跟新数量
    nav.loadCartCount();
  },
  //   删除指定商品，支持批量，productId用逗号分隔
  deleteCartProduct: function(productIds) {
    var $this = $(this);
    _this = this;
    _cart.deleteProduct(
      productIds,
      function(res) {
        _this.renderCart(res);
      },
      function(errMsg) {
        _this.showCartError();
      }
    );
  },
  //   显示错误信息
  showCartError: function() {
    $(".page-wrap").html(
      "<p class='err-tip'><span>Something Wrong!</span></p>"
    );
  },
  //   数据匹配
  filter: function(data) {
    data.notEmpty = !!data.cartProductVoList.length;
  }
};
$(function() {
  page.init();
});
