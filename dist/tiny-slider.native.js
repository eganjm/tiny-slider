/**
  * tiny-slider.native
  * @version 0.3.1
  * @author William Lin
  * @license The MIT License (MIT)
  * @github https://github.com/ganlanyuan/tiny-slider/
  */
var tinySlider=function(){"use strict";function t(t){function o(){T.style.width=Y*W+"px",X&&(T.style.marginLeft=-(R*Y)+"px");for(var t=W;t--;)w[t].style.width=Y+"px"}function c(t){s&&(T.style[s]=q*t/1e3+"s",_=!0)}function d(){navigator.msMaxTouchPoints&&(T.parentNode.style.msScrollSnapPointsX="snapInterval(0%, "+Y+")")}function l(){for(var t=X?Z+R:Z,n=W;n--;)t>n||n>=t+V?w[n].classList.contains("tiny-visible")&&w[n].classList.remove("tiny-current","tiny-visible"):n===t?w[n].classList.add("tiny-current","tiny-visible"):w[n].classList.contains("tiny-visible")||(w[n].classList.remove("tiny-current"),w[n].classList.add("tiny-visible"))}function u(){X||(V>=E?(0!==Z&&(Z=0,h()),G.classList.contains("disabled")||G.classList.add("disabled"),H.classList.contains("disabled")||H.classList.add("disabled")):(0===Z?G.classList.add("disabled"):G.classList.remove("disabled"),Z===E-V?H.classList.add("disabled"):H.classList.remove("disabled")))}function f(){if(S&&!N)for(var t=Q;t--;){var n=J[t];U>t?n.classList.contains("tiny-hide")&&n.classList.remove("tiny-hide"):n.classList.contains("tiny-hide")||n.classList.add("tiny-hide")}}function v(){if(S){var t;if(-1===tt){var n=0>Z?Z+E:Z>=E?Z-E:Z;if(t=N?n:Math.floor(n/V),!X&&!N){var e=/^-?[0-9]+$/,i=e.test(E/V);i||Z!==E-V||(t+=1)}}else t=tt,tt=-1;for(var a=U;a--;){var s=J[a];a===t?s.classList.contains("tiny-active")||s.classList.add("tiny-active"):s.classList.contains("tiny-active")&&s.classList.remove("tiny-active")}}}function h(){var t=T.parentNode.offsetWidth;it=-Y*Z,D&&!X&&(it=Math.max(it,-Math.abs(E*Y-t))),r?T.style[r]="translate3d("+it+"px, 0, 0)":T.style.left=it+"px"}function y(){if(X){var t=j?V-R>Z:-R>=Z,n=j?Z>E+R-2*V-1:Z>=E+R-V;D&&R&&!j&&(n=Z>=E+R-V-1),t&&(Z+=E),n&&(Z-=E),s&&(T.style[s]="0s"),h()}}function m(){y(),l(),u(),v(),M(),_=!1}function p(t){if(!_){t=j?t*V:t;var n=Math.abs(t);Z=X?Z+t:Math.max(0,Math.min(Z+t,E-V)),c(n),h(),setTimeout(function(){m()},q*n)}}function L(){return function(){var t=gn.indexOf(J,this);g(t)}}function g(t){if(!_){tt=t;var n,e;n=N?t:t*V,n=X?n:Math.min(n,E-V),e=Math.abs(n-Z),Z=n,c(e),h(),setTimeout(function(){m()},q*e)}}function M(){if(gn.isInViewport(T)){var t=T.querySelectorAll(".tiny-visible .tiny-lazy");if(0!==t.length)for(var n=0,e=t.length;e>n;n++)t[n].classList.contains("loaded")||(t[n].src=t[n].getAttribute("data-src"),t[n].classList.add("loaded"))}}function x(){return function(t){var n=t.changedTouches[0];nt=parseInt(n.clientX),et=parseInt(n.clientY)}}function b(){return function(t){var i=t.changedTouches[0];at=parseInt(i.clientX)-nt,st=parseInt(i.clientY)-et;var a=n(Math.atan2(st,at)),o=e(a,15);if("horizontal"===o&&_===!1&&(rt=!0),rt){s&&(T.style[s]="0s");var c=X?-(E+R-V)*Y:-(E-V)*Y,d=X?R*Y:0;!X&&D&&(c=-(E*Y-T.parentNode.offsetWidth)),it=-Z*Y+at,it=Math.max(c,Math.min(it,d)),r?T.style[r]="translate3d("+it+"px, 0, 0)":T.style.left=it+"px",t.preventDefault()}}}function C(){return function(t){var n=t.changedTouches[0];if(at=parseInt(n.clientX)-nt,rt&&0!==at){t.preventDefault(),rt=!1,it=-Z*Y+at;var e,i=X?-R:0,a=X?E+R-V:E-V;e=-(it/Y),e=0>at?Math.ceil(e):Math.floor(e),e=Math.max(i,Math.min(e,a)),Z=e,c(1),h(),setTimeout(function(){m()},q)}}}t=gn.extend({container:".slider",items:1,fixedWidth:!1,maxContainerWidth:!1,slideByPage:!1,nav:!0,navText:["prev","next"],navContainer:!1,dots:!0,dotsContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",loop:!0,responsive:!1,lazyload:!1,touch:!0},t||{});var T=t.container,w=T.children,E=w.length,W=w.length,D=t.fixedWidth,k=t.nav,z=t.navText,I=t.navContainer?t.navContainer:!1,S=t.dots,N=t.dotsContainer?t.dotsContainer:!1,P=t.arrowKeys,q=s?t.speed:0,A=t.autoplay,B=t.autoplayTimeout,O="forward"===t.autoplayDirection?1:-1,X=D&&!t.maxContainerWidth?!1:t.loop,j=t.slideByPage,F=t.lazyload,K=t.touch,Y,R,V,G,H,J,Q,U,Z=0,_=!1,tt=-1;if(K)var nt=0,et=0,it=0,at=0,st=0,rt=!1,ot=!1;var ct=D?!1:t.responsive,dt=i(ct),lt=a(ct,dt),ut=function(){return D?function(){return Math.max(Math.min(E,Math.floor(T.parentNode.offsetWidth/D)),1)}:function(){var n,e=document.documentElement.clientWidth;if(void 0!==dt.length&&void 0!==lt&&dt.length===lt.length)if(e<dt[0])n=t.items;else if(e>=dt[dt.length-1])n=lt[lt.length-1];else for(var i=0;i<dt.length-1;i++)e>=dt[i]&&e<=dt[i+1]&&(n=lt[i]);else n=t.items;return Math.max(Math.min(E,n),1)}}(),ft=function(){var n;return n=D?t.maxContainerWidth?Math.ceil(t.maxContainerWidth/D):!1:void 0!==lt.length?Math.max.apply(Math,lt):t.items,n?Math.min(E,n):n},vt=function(){return D?function(){return D}:function(){return T.parentNode.offsetWidth/V}}(),ht=function(){return N?function(){return E}:function(){return Math.ceil(E/V)}}();return V=ut(),R=ft(),Y=vt(),U=ht(),{init:function(){T.classList.add("tiny-content");var t=document.createElement("div");if(t.className="tiny-slider",gn.wrap(T,t),navigator.msMaxTouchPoints&&(t.classList.add("ms-touch"),t.addEventListener("scroll",function(){s&&(T.style[s]="0s"),T.style.transform="translate3d(-"+-T.scrollLeft()+"px,0,0)"})),S){if(N)J=N.children,J[0].classList.add("tiny-active");else{for(var n="",e=E;e--;)n+='<div class="tiny-dot"></div>';n='<div class="tiny-dots">'+n+"</div>",gn.append(t,n),J=t.querySelectorAll(".tiny-dot")}Q=J.length}if(k&&(I?(G=I.firstElementChild,H=I.lastElementChild):(gn.append(t,'<div class="tiny-nav"><div class="tiny-prev">'+z[0]+'</div><div class="tiny-next">'+z[1]+"</div></div>"),G=t.querySelector(".tiny-prev"),H=t.querySelector(".tiny-next"))),X){for(var i=document.createDocumentFragment(),a=document.createDocumentFragment(),r=R;r--;){var c=w[r].cloneNode(!0),y=w[E-1-r].cloneNode(!0);i.insertBefore(c,i.firstChild),a.appendChild(y)}T.appendChild(i),T.insertBefore(a,T.firstChild),W=T.children.length,w=T.children}if(o(),d(),h(),l(),k&&(u(),H.addEventListener("click",function(){p(1)}),G.addEventListener("click",function(){p(-1)})),f(),v(),S)for(var m=0;Q>m;m++)J[m].addEventListener("click",L());F&&M(),P&&document.addEventListener("keydown",function(t){t=t||window.event,37===t.keyCode?p(-1):39===t.keyCode&&p(1)}),A&&setInterval(function(){p(O)},B),K&&!ot&&T.addEventListener&&(T.addEventListener("touchstart",x(),!1),T.addEventListener("touchmove",b(),!1),T.addEventListener("touchend",C(),!1),T.addEventListener("touchcancel",C(),!1),ot=!0),gn.optimizedResize.add(function(){V=ut(),Y=vt(),U=ht(),o(),d(),h(),f(),u(),v(),F&&M()});var g=!1;window.addEventListener("scroll",function(){g||window.requestAnimationFrame(function(){F&&M(),g=!1}),g=!0})}}}function n(t){return t*(180/Math.PI)}function e(t,n){return Math.abs(90-Math.abs(t))>=90-n?"horizontal":Math.abs(90-Math.abs(t))<=n?"vertical":!1}function i(t){return t&&"object"==typeof t?Object.keys(t):!1}function a(t,n){if(t&&"object"==typeof t){for(var e=[],i=0;i<n.length;i++){var a=n[i];e.push(t[a])}return e}return!1}var s=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),r=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]);return t}();
//# sourceMappingURL=./tiny-slider.native.js.map