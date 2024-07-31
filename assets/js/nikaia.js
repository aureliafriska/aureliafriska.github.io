(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}
var module=(installedModules[moduleId]={i:moduleId,l:!1,exports:{},});modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=!0;return module.exports}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter,})}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__((__webpack_require__.s=0))})([/*!*******************************!*\
  !*** ./source/scripts/app.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
function(module,exports){eval('(function ($) {\r\n  "use strict";\r\n\r\n  class nikaiaTheme {\r\n    constructor() {\r\n      this.onInit();\r\n\r\n      this.bindEvents();\r\n    }\r\n\r\n    getElements() {\r\n      var $ = jQuery;\r\n\r\n      return {\r\n        $hamburger: $(".n-site-navigation__hamburger"),\r\n        $subArrow: $(".sub-arrow"),\r\n        $mobileCloseIcon: $(".n-site-navigation--mobile__close-icon"),\r\n      };\r\n    }\r\n\r\n    bindEvents() {\r\n      this.getElements().$hamburger.on("click", this.hamburgerMenu);\r\n      this.getElements().$subArrow.on("click", this.subArrow);\r\n      this.getElements().$mobileCloseIcon.on("click", this.mobileCloseIcon);\r\n    }\r\n\r\n    addSubArrow() {\r\n      var $ = jQuery;\r\n      $(".n-site-navigation--mobile")\r\n        .find("li.menu-item-has-children")\r\n        .each(function (index, value) {\r\n          var item = $(value).find("a")[0];\r\n\r\n          $(item).append("<span class=\'sub-arrow\'></span>");\r\n        });\r\n    }\r\n\r\n    subArrow(event) {\r\n      var $ = jQuery;\r\n\r\n      event.preventDefault();\r\n\r\n      $(this).parent().siblings("ul").toggle();\r\n    }\r\n\r\n    mobileCloseIcon(event) {\r\n      event.preventDefault();\r\n      jQuery(this)\r\n        .closest(".n-site-navigation--mobile__wrapper")\r\n        .removeClass("active");\r\n    }\r\n\r\n    hamburgerMenu(event) {\r\n      event.preventDefault();\r\n      var $ = jQuery,\r\n        $responsiveMenu = $(this).siblings(\r\n          ".n-site-navigation--mobile__wrapper"\r\n        );\r\n\r\n      $responsiveMenu.toggleClass("active");\r\n    }\r\n    runMasonry() {\r\n      if (\r\n        !jQuery(".n-blog-archive__posts").length ||\r\n        jQuery(window).width() < 1280\r\n      ) {\r\n        return;\r\n      }\r\n\r\n      var $ = jQuery,\r\n        heights = [],\r\n        distanceFromTop = $(".n-blog-archive__posts").position().top,\r\n        columnsCount = 2;\r\n\r\n      distanceFromTop += parseInt(\r\n        $(".n-blog-archive__posts").css("margin-top"),\r\n        10\r\n      );\r\n\r\n      $(".n-blog-archive__post").each(function (index) {\r\n        var row = Math.floor(index / columnsCount),\r\n          $item = jQuery(this),\r\n          itemHeight = $item[0].getBoundingClientRect().height + 64;\r\n\r\n        if (row) {\r\n          var itemPosition = $item.position(),\r\n            indexAtRow = index % columnsCount,\r\n            pullHeight =\r\n              itemPosition.top - distanceFromTop - heights[indexAtRow];\r\n\r\n          pullHeight -= parseInt($item.css("margin-top"), 10);\r\n\r\n          pullHeight *= -1;\r\n\r\n          $item.css("margin-top", pullHeight + "px");\r\n\r\n          heights[indexAtRow] += itemHeight;\r\n        } else {\r\n          heights.push(itemHeight);\r\n        }\r\n      });\r\n    }\r\n\r\n    onInit() {\r\n      this.addSubArrow();\r\n      this.runMasonry();\r\n    }\r\n  }\r\n\r\n  jQuery(function ($) {\r\n    "use strict";\r\n\r\n    new nikaiaTheme();\r\n  });\r\n})(jQuery);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9zY3JpcHRzL2FwcC5qcz8zNDMxIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoJCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICBjbGFzcyBHaW5lYVRoZW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICB0aGlzLm9uSW5pdCgpO1xyXG5cclxuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbWVudHMoKSB7XHJcbiAgICAgIHZhciAkID0galF1ZXJ5O1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAkaGFtYnVyZ2VyOiAkKFwiLm4tc2l0ZS1uYXZpZ2F0aW9uX19oYW1idXJnZXJcIiksXHJcbiAgICAgICAgJHN1YkFycm93OiAkKFwiLnN1Yi1hcnJvd1wiKSxcclxuICAgICAgICAkbW9iaWxlQ2xvc2VJY29uOiAkKFwiLm4tc2l0ZS1uYXZpZ2F0aW9uLS1tb2JpbGVfX2Nsb3NlLWljb25cIiksXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuICAgICAgdGhpcy5nZXRFbGVtZW50cygpLiRoYW1idXJnZXIub24oXCJjbGlja1wiLCB0aGlzLmhhbWJ1cmdlck1lbnUpO1xyXG4gICAgICB0aGlzLmdldEVsZW1lbnRzKCkuJHN1YkFycm93Lm9uKFwiY2xpY2tcIiwgdGhpcy5zdWJBcnJvdyk7XHJcbiAgICAgIHRoaXMuZ2V0RWxlbWVudHMoKS4kbW9iaWxlQ2xvc2VJY29uLm9uKFwiY2xpY2tcIiwgdGhpcy5tb2JpbGVDbG9zZUljb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFN1YkFycm93KCkge1xyXG4gICAgICB2YXIgJCA9IGpRdWVyeTtcclxuICAgICAgJChcIi5uLXNpdGUtbmF2aWdhdGlvbi0tbW9iaWxlXCIpXHJcbiAgICAgICAgLmZpbmQoXCJsaS5tZW51LWl0ZW0taGFzLWNoaWxkcmVuXCIpXHJcbiAgICAgICAgLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgdmFyIGl0ZW0gPSAkKHZhbHVlKS5maW5kKFwiYVwiKVswXTtcclxuXHJcbiAgICAgICAgICAkKGl0ZW0pLmFwcGVuZChcIjxzcGFuIGNsYXNzPSdzdWItYXJyb3cnPjwvc3Bhbj5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3ViQXJyb3coZXZlbnQpIHtcclxuICAgICAgdmFyICQgPSBqUXVlcnk7XHJcblxyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncyhcInVsXCIpLnRvZ2dsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vYmlsZUNsb3NlSWNvbihldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBqUXVlcnkodGhpcylcclxuICAgICAgICAuY2xvc2VzdChcIi5uLXNpdGUtbmF2aWdhdGlvbi0tbW9iaWxlX193cmFwcGVyXCIpXHJcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbWJ1cmdlck1lbnUoZXZlbnQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdmFyICQgPSBqUXVlcnksXHJcbiAgICAgICAgJHJlc3BvbnNpdmVNZW51ID0gJCh0aGlzKS5zaWJsaW5ncyhcclxuICAgICAgICAgIFwiLm4tc2l0ZS1uYXZpZ2F0aW9uLS1tb2JpbGVfX3dyYXBwZXJcIlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAkcmVzcG9uc2l2ZU1lbnUudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICBydW5NYXNvbnJ5KCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWpRdWVyeShcIi5uLWJsb2ctYXJjaGl2ZV9fcG9zdHNcIikubGVuZ3RoIHx8XHJcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykud2lkdGgoKSA8IDEyODBcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgJCA9IGpRdWVyeSxcclxuICAgICAgICBoZWlnaHRzID0gW10sXHJcbiAgICAgICAgZGlzdGFuY2VGcm9tVG9wID0gJChcIi5uLWJsb2ctYXJjaGl2ZV9fcG9zdHNcIikucG9zaXRpb24oKS50b3AsXHJcbiAgICAgICAgY29sdW1uc0NvdW50ID0gMjtcclxuXHJcbiAgICAgIGRpc3RhbmNlRnJvbVRvcCArPSBwYXJzZUludChcclxuICAgICAgICAkKFwiLm4tYmxvZy1hcmNoaXZlX19wb3N0c1wiKS5jc3MoXCJtYXJnaW4tdG9wXCIpLFxyXG4gICAgICAgIDEwXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAkKFwiLm4tYmxvZy1hcmNoaXZlX19wb3N0XCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IoaW5kZXggLyBjb2x1bW5zQ291bnQpLFxyXG4gICAgICAgICAgJGl0ZW0gPSBqUXVlcnkodGhpcyksXHJcbiAgICAgICAgICBpdGVtSGVpZ2h0ID0gJGl0ZW1bMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgNjQ7XHJcblxyXG4gICAgICAgIGlmIChyb3cpIHtcclxuICAgICAgICAgIHZhciBpdGVtUG9zaXRpb24gPSAkaXRlbS5wb3NpdGlvbigpLFxyXG4gICAgICAgICAgICBpbmRleEF0Um93ID0gaW5kZXggJSBjb2x1bW5zQ291bnQsXHJcbiAgICAgICAgICAgIHB1bGxIZWlnaHQgPVxyXG4gICAgICAgICAgICAgIGl0ZW1Qb3NpdGlvbi50b3AgLSBkaXN0YW5jZUZyb21Ub3AgLSBoZWlnaHRzW2luZGV4QXRSb3ddO1xyXG5cclxuICAgICAgICAgIHB1bGxIZWlnaHQgLT0gcGFyc2VJbnQoJGl0ZW0uY3NzKFwibWFyZ2luLXRvcFwiKSwgMTApO1xyXG5cclxuICAgICAgICAgIHB1bGxIZWlnaHQgKj0gLTE7XHJcblxyXG4gICAgICAgICAgJGl0ZW0uY3NzKFwibWFyZ2luLXRvcFwiLCBwdWxsSGVpZ2h0ICsgXCJweFwiKTtcclxuXHJcbiAgICAgICAgICBoZWlnaHRzW2luZGV4QXRSb3ddICs9IGl0ZW1IZWlnaHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhlaWdodHMucHVzaChpdGVtSGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgdGhpcy5hZGRTdWJBcnJvdygpO1xyXG4gICAgICB0aGlzLnJ1bk1hc29ucnkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgbmV3IEdpbmVhVGhlbWUoKTtcclxuICB9KTtcclxufSkoalF1ZXJ5KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zb3VyY2Uvc2NyaXB0cy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n')},])