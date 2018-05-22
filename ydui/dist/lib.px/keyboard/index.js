/*! vue-ydui v1.2.2 by YDCSS (c) 2018 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/dist/",t(0)}({0:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.KeyBoard=void 0;var r=o(178),i=n(r);t.KeyBoard=i.default},1:function(e,t){e.exports=function(e,t,o,n){var r,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),o&&(a._scopeId=o),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(e){var t=n[e];l[e]=function(){return t}})}return{esModule:r,exports:i,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),e.push(s))}},e}},3:function(e,t,o){function n(e){for(var t=0;t<e.length;t++){var o=e[t],n=d[o.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](o.parts[r]);for(;r<o.parts.length;r++)n.parts.push(i(o.parts[r]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(i(o.parts[r]));d[o.id]={id:o.id,refs:1,parts:s}}}}function r(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,o,n=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(n){if(b)return m;n.parentNode.removeChild(n)}if(h){var i=p++;n=f||(f=r()),t=s.bind(null,n,i,!1),o=s.bind(null,n,i,!0)}else n=r(),t=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}function s(e,t,o,n){var r=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var o=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),r&&(o+="\n/*# sourceURL="+r.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var l="undefined"!=typeof document,c=o(4),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,b=!1,m=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o){b=o;var r=c(e,t);return n(r),function(t){for(var o=[],i=0;i<r.length;i++){var s=r[i],a=d[s.id];a.refs--,o.push(a)}t?(r=c(e,t),n(r)):r=[];for(var i=0;i<o.length;i++){var a=o[i];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete d[a.id]}}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var o=[],n={},r=0;r<t.length;r++){var i=t[r],s=i[0],a=i[1],l=i[2],c=i[3],d={id:e+":"+r,css:a,media:l,sourceMap:c};n[s]?n[s].parts.push(d):o.push(n[s]={id:s,parts:[d]})}return o}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(o){t||(t=!0,(o||document).addEventListener("touchmove",e))},unlock:function(o){t=!1,(o||document).removeEventListener("touchmove",e)}}}(),n=function(){return{lock:function(e){r&&c(e||document.body,"g-fix-ios-prevent-scroll")},unlock:function(e){r&&d(e||document.body,"g-fix-ios-prevent-scroll")}}}(),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,o=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||o.test(e)||n.test(e)},s=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var o=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===o||"auto"===o)return t;t=t.parentNode}return window},a=function(e,t){var o=e===window?document.body.offsetHeight:e.offsetHeight,n=e===window?0:e.getBoundingClientRect().top,r=t.getBoundingClientRect().top-n,i=r+t.offsetHeight;return r>=0&&r<o||i>0&&i<=o},l=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},c=function(e,t){l(e,t)||(e.className=""===e.className?t:e.className+" "+t)},d=function(e,t){if(l(e,t)){for(var o=" "+e.className.replace(/[\t\r\n]/g,"")+" ";o.indexOf(" "+t+" ")>=0;)o=o.replace(" "+t+" "," ");e.className=o.replace(/^\s+|\s+$/g,"")}},u=function(e){function t(o,n,r){if(o===n)return void("function"==typeof i&&i());var s=o+r>n?n:o+r;o>n&&(s=o-r<n?n:o-r),e===window?window.scrollTo(s,s):e.scrollTop=s,window.requestAnimationFrame(function(){return t(s,n,r)})}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments[4];window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var s=Math.abs(o-n),a=Math.ceil(s/r*50);t(o,n,a)};t.pageScroll=o,t.preventScroll=n,t.isIOS=r,t.isColor=i,t.getScrollview=s,t.checkInview=a,t.addClass=c,t.removeClass=d,t.scrollTop=u},8:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(5);t.default={name:"yd-mask",data:function(){return{show:this.value}},props:{value:{type:Boolean,default:!1},bgcolor:{type:String,default:"#000"},zindex:{default:1500},opacity:{default:.5},animated:{type:Boolean,default:!0}},watch:{value:function(e){var t=this;this.show=e,n.isIOS&&(e?(0,n.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"):setTimeout(function(){(0,n.removeClass)(t.scrollView,"g-fix-ios-overflow-scrolling-bug")},200))}},computed:{styles:function(){var e={"z-index":this.zindex,"background-color":this.bgcolor};return this.show&&(e.opacity=this.opacity,e["pointer-events"]="auto"),e}},mounted:function(){this.scrollView=(0,n.getScrollview)(this.$el)},beforeDestroy:function(){n.isIOS&&(0,n.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")}}},9:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,".yd-mask{position:fixed;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:none;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;opacity:0}",""])},10:function(e,t,o){o(12);var n=o(1)(o(8),o(11),null,null);e.exports=n.exports},11:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"yd-mask",style:e.styles},[e._t("default")],2)},staticRenderFns:[]}},12:function(e,t,o){var n=o(9);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);o(3)("52f09b75",n,!0)},62:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(5),i=o(10),s=n(i);t.default={name:"yd-keyboard",components:{"yd-mask":s.default},data:function(){return{nums:"",show:this.value,error:"",numsArr:[1,2,3,4,5,6,7,8,9,0]}},props:{callback:{type:Function},disorder:{type:Boolean,default:!1},value:{type:Boolean,default:!1},title:{type:String,default:"YDUI安全键盘"},cancelText:{type:String,default:"取消"},inputText:{type:String,default:"输入数字密码"},triggerClose:{type:Boolean,default:!0},maskerOpacity:{validator:function(e){return/^([0]|[1-9]\d*)?(\.\d*)?$/.test(e)},default:.5}},watch:{value:function(e){r.isIOS&&(e?r.pageScroll.lock():r.pageScroll.unlock()),this.nums="",this.error="",this.show=e,this.show&&this.disorder&&(this.numsArr=this.upsetOrder(this.numsArr))},nums:function(e){e.length>=6&&this.callback&&this.callback(e)}},methods:{init:function(){var e=this;this.$on("ydui.keyboard.error",function(t){e.setError(t)}),this.$on("ydui.keyboard.close",this.close)},numclick:function(e){this.error="",this.nums.length>=6||(this.nums+=e)},backspace:function(){var e=this.nums;e&&(this.nums=e.substr(0,e.length-1))},upsetOrder:function(e){for(var t=Math.floor,o=Math.random,n=e.length,r=void 0,i=void 0,s=void 0,a=t(n/2)+1;a--;)r=t(o()*n),i=t(o()*n),r!==i&&(s=e[r],e[r]=e[i],e[i]=s);return e},close:function(){this.triggerClose&&this.$emit("input",!1)},setError:function(e){this.error=e,this.nums=""}},created:function(){var e=window.navigator&&window.navigator.userAgent||"";this.isMobile=!!e.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in document.documentElement,this.$nextTick(this.init)},beforeDestroy:function(){this.close(),r.pageScroll.unlock()}}},114:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,'.yd-keyboard{position:fixed;bottom:0;left:0;width:100%;z-index:1502;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;background-color:#f7f7f7}.yd-keyboard-active{-webkit-transform:translate(0);transform:translate(0)}.yd-keyboard-content{background-color:#fff;margin-top:15px;position:relative}.yd-keyboard-content:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-keyboard-title{overflow:hidden;padding:10px 0 6px;color:#222;margin-bottom:1px;font-size:12px;text-align:center;background-color:#fff}.yd-keyboard-title:before{font-family:YDUI-INLAY;content:"\\E60A";font-size:13px;color:#ff2424;line-height:1;margin-right:3px}.yd-keyboard-numbers{font-size:24px;background-color:#fff}.yd-keyboard-numbers>li{width:100%}.yd-keyboard-numbers>li,.yd-keyboard-numbers>li>a{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.yd-keyboard-numbers>li>a{width:1%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;color:#666;height:50px;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;overflow:hidden}.yd-keyboard-numbers>li>a:not(:last-child):after{content:"";position:absolute;z-index:0;top:0;right:0;height:100%;border-right:1px solid #d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-keyboard-numbers>li>a:before{content:"";position:absolute;z-index:0;top:0;left:0;width:100%;border-top:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-keyboard-numbers>li:last-child>a:last-child,.yd-keyboard-numbers>li:last-child>a:nth-last-child(3){background-color:#f7f7f7;font-size:15px;color:#686868}.yd-keyboard-numbers>li:last-child>a:last-child:after{font-family:YDUI-INLAY;content:"\\E609";font-size:30px}.yd-keyboard-head{height:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#444;font-size:15px;position:relative}.yd-keyboard-head:after{content:"";position:absolute;z-index:0;bottom:0;left:0;width:100%;border-bottom:1px solid #d9d9d9;-webkit-transform:scaleY(.5);transform:scaleY(.5);-webkit-transform-origin:0 0;transform-origin:0 0}.yd-keyboard-password{margin:0 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;background-color:#fff}.yd-keyboard-password:after{content:"";width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);position:absolute;border:1px solid #d9d9d9;top:0;left:0;-webkit-transform-origin:0 0;transform-origin:0 0;border-radius:4px}.yd-keyboard-password li{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:50px}.yd-keyboard-password li:not(:last-child):after{content:"";width:1px;height:50%;position:absolute;right:0;top:25%;background-color:#d9d9d9;-webkit-transform:scaleX(.5);transform:scaleX(.5)}.yd-keyboard-password li i{width:6px;height:6px;border-radius:50%;background-color:#000}.yd-keyboard-error{padding:2px 40px;color:red;overflow:hidden;height:25px;line-height:25px;font-size:12px;text-align:left}',""])},178:function(e,t,o){o(291);var n=o(1)(o(62),o(230),null,null);e.exports=n.exports},230:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("yd-mask",{attrs:{opacity:e.maskerOpacity},nativeOn:{click:function(t){return e.close(t)}},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),e._v(" "),o("div",{staticClass:"yd-keyboard",class:e.show?"yd-keyboard-active":""},[o("div",{staticClass:"yd-keyboard-head"},[o("strong",[e._v(e._s(e.inputText))])]),e._v(" "),o("div",{staticClass:"yd-keyboard-error"},[e._v(e._s(e.error))]),e._v(" "),o("ul",{staticClass:"yd-keyboard-password"},e._l(6,function(t,n){return o("li",{key:n},[o("i",{directives:[{name:"show",rawName:"v-show",value:e.nums.length>=t,expression:"nums.length >= n"}]})])})),e._v(" "),o("div",{staticClass:"yd-keyboard-content"},[o("div",{staticClass:"yd-keyboard-title"},[e._v(e._s(e.title))]),e._v(" "),o("ul",{staticClass:"yd-keyboard-numbers"},e._l(4,function(t,n){return o("li",{key:n},[e.triggerClose?[4==t?o("a",{attrs:{href:"javascript:;"},on:{click:function(t){return t.stopPropagation(),e.close(t)}}},[e._v(e._s(e.cancelText))]):e._e()]:[4==t?o("a",{attrs:{href:"javascript:;"}}):e._e()],e._v(" "),e.isMobile?e._l(e.numsArr.slice(3*(t-1),3*t),function(t,n){return o("a",{key:n,attrs:{href:"javascript:;"},on:{touchstart:function(o){o.stopPropagation(),e.numclick(t)}}},[e._v(e._s(t))])}):e._l(e.numsArr.slice(3*(t-1),3*t),function(t,n){return o("a",{key:n,attrs:{href:"javascript:;"},on:{click:function(o){o.stopPropagation(),e.numclick(t)}}},[e._v(e._s(t))])}),e._v(" "),4==t?o("a",{attrs:{href:"javascript:;"},on:{click:function(t){return t.stopPropagation(),e.backspace(t)}}}):e._e()],2)}))])])],1)},staticRenderFns:[]}},291:function(e,t,o){var n=o(114);"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);o(3)("1570c2ad",n,!0)}})});