!function(n){var e={};function t(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return n[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(i,a,function(e){return n[e]}.bind(null,a));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),t(1),t(2),t(4)},function(n,e,t){"use strict";var i=document.querySelector("#menu-user"),a=document.querySelector("#menu-user-button"),r=!1;a.addEventListener("click",(function(){r?s():(f()&&m(),o()),r=!r}));var o=function(){i.classList.add("animate-open-user-menu"),i.classList.remove("animate-close-user-menu")},s=function(){i.classList.add("animate-close-user-menu"),i.classList.remove("animate-open-user-menu")},u=document.querySelector("#main-menu"),c=document.querySelector("#main-menu-button"),l=!1;c.addEventListener("click",(function(){l?m():(f()&&s(),d()),l=!l}));var d=function(){u.classList.add("animate-open-main-menu"),u.classList.remove("animate-close-main-menu")},m=function(){u.classList.add("animate-close-main-menu"),u.classList.remove("animate-open-main-menu")},f=function(){return[l,r].includes(!0)}},function(n,e,t){"use strict";var i=this&&this.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(e,"__esModule",{value:!0});var a=i(t(3)),r=document.querySelector("#round-table"),o=(document.querySelector("#hour-table"),document.querySelector("#season-table"),[{name:"Arthur",points:999},{name:"Arthur",points:949},{name:"Arthur",points:999},{name:"Arthur Reis Limadsadasdkmkmkl",points:149},{name:"Arthur",points:149},{name:"Arthur",points:929},{name:"Arthur",points:999},{name:"Arthur",points:919},{name:"Arthur",points:99},{name:"Arthur",points:99}]);(function(){function n(){}return n.draw=function(n,e){var t=this;this.table=n,e.forEach((function(n,e){var i=document.createElement("li");i.classList.add("row");var r=n.name,o=n.points;i.innerHTML=a.default(e+1,r,o),t.table.appendChild(i)}))},n})().draw(r,o)},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(n,e,t){return'\n  <div class="box">\n    <div>\n      <div class="box-number"><span>'+n+'</span></div>\n      <div class="box-category">\n        <span\n          class="iconify icon"\n          data-icon="maki:soccer-11"\n          data-inline="false"\n        ></span>\n      </div>\n      <div class="box-time">\n        <span\n          class="iconify icon"\n          data-icon="bi:shield-fill"\n          data-inline="false"\n        ></span>\n      </div>\n      <div class="box-name"><span>'+e+'</span></div>\n\n      <div class="box-star">\n        <span\n          class="iconify icon"\n          data-icon="ant-design:star-filled"\n          data-inline="false"\n        ></span>\n      </div>\n    </div>\n    <div>\n      <div class="box-point"><span>'+t+"</span></div>\n    </div>\n  </div>\n"}},function(n,e,t){"use strict";(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))&&screen.orientation.lock("portrait-primary")}]);