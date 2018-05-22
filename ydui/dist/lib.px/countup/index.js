/*! vue-ydui v1.2.2 by YDCSS (c) 2018 Licensed MIT */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.ydui=n():t.ydui=n()}(this,function(){return function(t){function n(a){if(e[a])return e[a].exports;var i=e[a]={exports:{},id:a,loaded:!1};return t[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="/dist/",n(0)}({0:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.CountUp=void 0;var i=e(163),r=a(i);n.CountUp=r.default},1:function(t,n){t.exports=function(t,n,e,a){var i,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,r=t.default);var u="function"==typeof r?r.options:r;if(n&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns),e&&(u._scopeId=e),a){var s=u.computed||(u.computed={});Object.keys(a).forEach(function(t){var n=a[t];s[t]=function(){return n}})}return{esModule:i,exports:r,options:u}}},48:function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(102),r=a(i);n.default={name:"yd-countup",data:function(){return{instance:null}},props:{start:{type:Boolean,default:!0},startnum:{validator:function(t){return/^([0]|[1-9]\d*)(\.\d*)?$/.test(t)},default:0},endnum:{validator:function(t){return/^([0]|[1-9]\d*)(\.\d*)?$/.test(t)},required:!0},decimals:{validator:function(t){return/^\d*$/.test(t)},default:0},duration:{validator:function(t){return/^([0]|[1-9]\d*)(\.\d*)?$/.test(t)},default:2},useEasing:{type:Boolean,default:!1},separator:{type:String,default:""},prefix:{type:String,default:""},suffix:{type:String,default:""},callback:{type:Function}},watch:{start:function(t){var n=this;t&&this.instance.start(function(){n.callback&&n.callback(n.instance)})},endnum:function(t){this.instance&&this.instance.update&&this.instance.update(t)}},methods:{init:function(){var t=this;if(!this.instance){var n={decimal:".",useEasing:this.useEasing,separator:this.separator,prefix:this.prefix,suffix:this.suffix};this.instance=new r.default(this.$el,this.startnum,this.endnum,this.decimals,this.duration,n),this.start&&this.instance.start(function(){t.callback&&t.callback(t.instance)})}}},mounted:function(){this.init()},beforeDestroy:function(){this.instance=null}}},102:function(t,n,e){var a,i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(r,o){a=o,i="function"==typeof a?a.call(n,e,n,t):a,!(void 0!==i&&(t.exports=i))}(void 0,function(t,n,e){var a=function(t,n,e,a,i,o){for(var u=0,s=["webkit","moz","ms","o"],l=0;l<s.length&&!window.requestAnimationFrame;++l)window.requestAnimationFrame=window[s[l]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[l]+"CancelAnimationFrame"]||window[s[l]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var e=(new Date).getTime(),a=Math.max(0,16-(e-u)),i=window.setTimeout(function(){t(e+a)},a);return u=e+a,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var c=this;if(c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null,prefix:"",suffix:""},o&&"object"===("undefined"==typeof o?"undefined":r(o)))for(var d in c.options)o.hasOwnProperty(d)&&(c.options[d]=o[d]);""===c.options.separator&&(c.options.useGrouping=!1),c.version=function(){return"1.8.2"},c.d="string"==typeof t?document.getElementById(t):t,c.startVal=Number(n),c.endVal=Number(e),c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.decimals=Math.max(0,a||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(i)||2e3,c.formatNumber=function(t){t=t.toFixed(c.decimals),t+="";var n,e,a,i;if(n=t.split("."),e=n[0],a=n.length>1?c.options.decimal+n[1]:"",i=/(\d+)(\d{3})/,c.options.useGrouping)for(;i.test(e);)e=e.replace(i,"$1"+c.options.separator+"$2");return c.options.prefix+e+a+c.options.suffix},c.easeOutExpo=function(t,n,e,a){return e*(-Math.pow(2,-10*t/a)+1)*1024/1023+n},c.easingFn=c.options.easingFn?c.options.easingFn:c.easeOutExpo,c.formattingFn=c.options.formattingFn?c.options.formattingFn:c.formatNumber,c.printValue=function(t){var n=c.formattingFn(t);"INPUT"===c.d.tagName?this.d.value=n:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=n:this.d.innerHTML=n},c.count=function(t){c.startTime||(c.startTime=t),c.timestamp=t;var n=t-c.startTime;c.remaining=c.duration-n,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.easingFn(n,0,c.startVal-c.endVal,c.duration):c.frameVal=c.easingFn(n,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(n/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(n/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),n<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(t){return c.callback=t,c.rAF=requestAnimationFrame(c.count),!1},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.startVal=n,cancelAnimationFrame(c.rAF),c.printValue(c.startVal)},c.update=function(t){cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=Number(t),c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count)},c.printValue(c.startVal)};return a})},163:function(t,n,e){var a=e(1)(e(48),e(277),null,null);t.exports=a.exports},277:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span")},staticRenderFns:[]}}})});