require("./index.css");

var _mm = require("../../util/mm");
navSide = require("page/common/nav-simple/index.js");

$(function() {
  var type = _mm.getUrlParam("type") || "default",
    $element = $("." + type + "-success");
  $element.show();
});
