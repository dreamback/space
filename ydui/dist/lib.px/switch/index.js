/*! vue-ydui v1.2.2 by YDCSS (c) 2018 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=void 0;var o=n(210),i=r(o);t.Switch=i.default},1:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var c=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},3:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=d[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(i(n.parts[o]));d[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(m){var i=p++;r=f||(f=o()),t=a.bind(null,r,i,!1),n=a.bind(null,r,i,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document,u=n(4),d={},l=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=u(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var a=o[i],s=d[a.id];s.refs--,n.push(s)}t?(o=u(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var s=n[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete d[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],c=i[2],u=i[3],d={id:e+":"+o,css:s,media:c,sourceMap:u};r[a]?r[a].parts.push(d):n.push(r[a]={id:a,parts:[d]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),r=function(){return{lock:function(e){o&&u(e||document.body,"g-fix-ios-prevent-scroll")},unlock:function(e){o&&d(e||document.body,"g-fix-ios-prevent-scroll")}}}(),o=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||r.test(e)},a=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},s=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,r=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-r,i=o+t.offsetHeight;return o>=0&&o<n||i>0&&i<=n},c=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},u=function(e,t){c(e,t)||(e.className=""===e.className?t:e.className+" "+t)},d=function(e,t){if(c(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},l=function(e){function t(n,r,o){if(n===r)return void("function"==typeof i&&i());var a=n+o>r?r:n+o;n>r&&(a=n-o<r?r:n-o),e===window?window.scrollTo(a,a):e.scrollTop=a,window.requestAnimationFrame(function(){return t(a,r,o)})}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var a=Math.abs(n-r),s=Math.ceil(a/o*50);t(n,r,s)};t.pageScroll=n,t.preventScroll=r,t.isIOS=o,t.isColor=i,t.getScrollview=a,t.checkInview=s,t.addClass=u,t.removeClass=d,t.scrollTop=l},94:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default={name:"yd-switch",data:function(){return{checked:this.value}},props:{value:[String,Number,Boolean],disabled:{type:Boolean,default:!1},color:{validator:function(e){return!e||(0,r.isColor)(e)},default:"#4CD864"},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1}},watch:{checked:function(e){this.$emit("input",e)},value:function(e){this.checked=e}}}},141:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,'.yd-switch{position:relative;z-index:10;display:block;width:52px;height:32px;left:0;border:1px solid #dfdfdf;border-radius:16px;background-color:#dfdfdf;-webkit-appearance:none;-moz-appearance:none}.yd-switch:after,.yd-switch:before{content:"";position:absolute;top:0;left:0;height:30px;border-radius:15px;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.yd-switch:before{width:50px;background-color:#fdfdfd}.yd-switch:after{width:30px;background-color:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.yd-switch:checked{border-color:currentColor;background-color:currentColor}.yd-switch:checked:before{-webkit-transform:scale(0);transform:scale(0)}.yd-switch:checked:after{-webkit-transform:translateX(20px);transform:translateX(20px)}.yd-switch[disabled]{opacity:.5}',""])},210:function(e,t,n){n(318);var r=n(1)(n(94),n(276),null,null);e.exports=r.exports},276:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticClass:"yd-switch",style:{color:e.color},attrs:{type:"checkbox","true-value":e.trueValue,"false-value":e.falseValue,disabled:e.disabled},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e._q(e.checked,e.trueValue)},on:{change:function(t){var n=e.checked,r=t.target,o=r.checked?e.trueValue:e.falseValue;if(Array.isArray(n)){var i=null,a=e._i(n,i);r.checked?a<0&&(e.checked=n.concat([i])):a>-1&&(e.checked=n.slice(0,a).concat(n.slice(a+1)))}else e.checked=o}}})},staticRenderFns:[]}},318:function(e,t,n){var r=n(141);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(3)("ec19e948",r,!0)}})});