var tns=function(){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var t=window,xi=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,bi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function wi(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Ci(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Ai(t,e,n){return n&&localStorage.setItem(t,e),e}function Ti(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Mi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function Ei(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function ki(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function Ni(t){return("insertRule"in t?t.cssRules:t.rules).length}function Oi(t,e){return Math.atan2(t,e)*(180/Math.PI)}function Di(t,e){var n=!1,i=Math.abs(90-Math.abs(t));return 90-e<=i?n="horizontal":i<=e&&(n="vertical"),n}function Bi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Li=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Si=i?function(t,e){Li(t,e)||t.classList.add(e)}:function(t,e){Li(t,e)||(t.className+=" "+e)},Ii=i?function(t,e){Li(t,e)&&t.classList.remove(e)}:function(t,e){Li(t,e)&&(t.className=t.className.replace(e,""))};function Pi(t,e){return t.hasAttribute(e)}function r(t){return void 0!==t.item}function Wi(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Ri(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Hi(t){t.style.cssText=""}function zi(t){Pi(t,"hidden")||Wi(t,{hidden:""})}function qi(t){Pi(t,"hidden")&&Ri(t,"hidden")}function ji(t){return 0<t.offsetWidth&&0<t.offsetHeight}function Fi(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function Vi(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var s=!!a&&{passive:!0};function Qi(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&s;t.addEventListener(n,e[n],i)}}function Xi(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&s;t.removeEventListener(n,e[n],i)}}function Yi(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}}var Ki=function(w){w=wi({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,fixedWidthViewportWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},w||{});var k=document,C=window,s=13,u=32,l=33,c=34,f=35,d=36,v=37,h=38,p=39,m=40,e={},n=w.useLocalStorage;if(n){var t=navigator.userAgent;try{(e=localStorage).tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t}catch(t){n=!1}n&&!localStorage&&(n=!(e={}))}for(var i,a,r,o,g,y,x,A=e.tC?Ci(e.tC):Ai("tC",function(){var t=document,e=Ti(),n=Mi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(r=s[u],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?Ei(e,n):i.remove(),a}(),n),T=e.tPL?Ci(e.tPL):Ai("tPL",function(){var t,e=document,n=Ti(),i=Mi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?Ei(n,i):a.remove(),t}(),n),N=e.tMQ?Ci(e.tMQ):Ai("tMQ",(a=document,r=Ti(),o=Mi(r),g=a.createElement("div"),y=a.createElement("style"),x="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",y.type="text/css",g.className="tns-mq-test",r.appendChild(y),r.appendChild(g),y.styleSheet?y.styleSheet.cssText=x:y.appendChild(a.createTextNode(x)),i=window.getComputedStyle?window.getComputedStyle(g).position:g.currentStyle.position,r.fake?Ei(r,o):g.remove(),"absolute"===i),n),b=e.tTf?Ci(e.tTf):Ai("tTf",Fi("transform"),n),M=e.t3D?Ci(e.t3D):Ai("t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Ti(),a=Mi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?Ei(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(b),n),E=e.tTDu?Ci(e.tTDu):Ai("tTDu",Fi("transitionDuration"),n),O=e.tTDe?Ci(e.tTDe):Ai("tTDe",Fi("transitionDelay"),n),D=e.tADu?Ci(e.tADu):Ai("tADu",Fi("animationDuration"),n),B=e.tADe?Ci(e.tADe):Ai("tADe",Fi("animationDelay"),n),L=e.tTE?Ci(e.tTE):Ai("tTE",Vi(E,"Transition"),n),S=e.tAE?Ci(e.tAE):Ai("tAE",Vi(D,"Animation"),n),I=C.console&&"function"==typeof C.console.warn,P=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],W=P.length;W--;){var R=P[W];if("string"==typeof w[R]){var H=k.querySelector(w[R]);if(!H||!H.nodeName)return void(I&&console.warn("Can't find",w[R]));w[R]=H}}if(!(w.container.children.length<1)){if(w.responsive){var z={},q=w.responsive;for(var j in q){var F=q[j];z[j]="number"==typeof F?{items:F}:F}w.responsive=z,z=null,0 in w.responsive&&delete(w=wi(w,w.responsive[0])).responsive[0]}var V="carousel"===w.mode;if(!V){w.axis="horizontal",w.edgePadding=!1;var Q="tns-fadeIn",X="tns-fadeOut",Y=!1,K=w.animateNormal||"tns-normal";L&&S&&(Q=w.animateIn||Q,X=w.animateOut||X,Y=w.animateDelay||Y)}var U,G,J="horizontal"===w.axis,_=k.createElement("div"),Z=k.createElement("div"),$=w.container,tt=$.parentNode,et=$.children,nt=et.length,it=fn(tt),at=w.responsive,rt=[],ot=!1,st=0,ut=cn();if(at){(ot=Object.keys(at).map(function(t){return parseInt(t)}).sort(function(t,e){return t-e})).forEach(function(t){rt=rt.concat(Object.keys(at[t]))});var lt=[];rt.forEach(function(t){lt.indexOf(t)<0&&lt.push(t)}),rt=lt,Mn()}var ct,ft,dt,vt,ht,pt,mt,gt,yt,xt=Math.floor(hn("items")),bt="page"===hn("slideBy")?xt:hn("slideBy"),wt=w.nested,Ct=hn("gutter"),At=hn("edgePadding"),Tt=w.autoWidth,Mt=hn("fixedWidth"),Et=w.fixedWidthViewportWidth,kt=hn("arrowKeys"),Nt=hn("speed"),Ot=w.rewind,Dt=!Ot&&w.loop,Bt=hn("autoHeight"),Lt=(yt=document.createElement("style"),gt&&yt.setAttribute("media",gt),document.querySelector("head").appendChild(yt),yt.sheet?yt.sheet:yt.styleSheet),St=w.lazyload,It=[],Pt=vn("edgePadding"),Wt=Dt?(pt=function(){{if(Mt&&!Et)return nt-1;var n=Mt?"fixedWidth":"items",i=[];return(Mt||w[n]<nt)&&i.push(w[n]),ot&&0<=rt.indexOf(n)&&ot.forEach(function(t){var e=at[t][n];e&&(Mt||e<nt)&&i.push(e)}),i.length||i.push(0),Math.ceil(Mt?Et/Math.min.apply(null,i):Math.max.apply(null,i))}}(),mt=V?Math.ceil((5*pt-nt)/2):4*pt-nt,mt=Math.max(pt,mt),Pt?mt+1:mt):0,Rt=V?nt+2*Wt:nt+Wt,Ht=!(!Mt&&!Tt||Dt),zt=!V||!Dt,qt=J?"left":"top",jt="",Ft="",Vt=hn("startIndex"),Qt=Vt?function(t){(t%=nt)<0&&(t+=nt);return t=Math.min(t,Rt-xt)}(Vt):V?Wt:0,Xt=Qt,Yt=0,Kt=un(),Ut=w.swipeAngle,Gt=!Ut||"?",Jt=!1,_t=w.onInit,Zt=new Yi,$t=$.id,te=" tns-slider tns-"+w.mode,ee=$.id||(ht=window.tnsId,window.tnsId=ht?ht+1:1,"tns"+window.tnsId),ne=hn("disable"),ie=w.freezable,ae=!!ne||!!ie&&nt<=xt,re="inner"===wt?" !important":"",oe={click:ti,keydown:function(t){switch((t=li(t)).keyCode){case v:case h:case l:ke.disabled||ti(t,-1);break;case p:case m:case c:Ne.disabled||ti(t,1);break;case d:$n("first",t);break;case f:$n(nt-1,t)}}},se={click:function(t){Jt&&Zn();var e,n=(t=li(t)).target||t.srcElement;for(;n!==Be&&!Pi(n,"data-nav");)n=n.parentNode;Pi(n,"data-nav")&&(e=Ie=[].indexOf.call(Oe,n),$n(V?e+Wt:e,t))},keydown:function(t){var e=k.activeElement;if(!Pi(e,"data-nav"))return;var n=(t=li(t)).keyCode,i=[].indexOf.call(Oe,e),a=Le.length,r=Le.indexOf(i);w.navContainer&&(a=nt,r=i);function o(t){return w.navContainer?t:Le[t]}switch(n){case v:case l:0<r&&si(Oe[o(r-1)]);break;case h:case d:0<r&&si(Oe[o(0)]);break;case p:case c:r<a-1&&si(Oe[o(r+1)]);break;case m:case f:r<a-1&&si(Oe[o(a-1)]);break;case s:case u:$n((Ie=i)+Wt,t)}}},ue={mouseover:function(){ze&&(ni(),qe=!0)},mouseout:function(){qe&&(ei(),qe=!1)}},le={visibilitychange:function(){k.hidden?ze&&(ni(),Fe=!0):Fe&&(ei(),Fe=!1)}},ce={keydown:function(t){switch((t=li(t)).keyCode){case v:ti(t,-1);break;case p:ti(t,1)}}},fe={touchstart:vi,touchmove:hi,touchend:pi,touchcancel:pi},de={mousedown:vi,mousemove:hi,mouseup:pi,mouseleave:pi},ve=vn("controls"),he=vn("nav"),pe=w.navAsThumbnails,me=vn("autoplay"),ge=vn("touch"),ye=vn("mouseDrag"),xe="tns-slide-active",be="tns-complete",we={load:Dn,error:Dn};if(ve)var Ce,Ae,Te=hn("controls"),Me=hn("controlsText"),Ee=w.controlsContainer,ke=w.prevButton,Ne=w.nextButton;if(he)var Oe,De=hn("nav"),Be=w.navContainer,Le=[],Se=Le,Ie=-1,Pe=ln(),We=Pe,Re="tns-nav-active";if(me)var He,ze,qe,je,Fe,Ve=hn("autoplay"),Qe=hn("autoplayTimeout"),Xe="forward"===w.autoplayDirection?1:-1,Ye=hn("autoplayText"),Ke=hn("autoplayHoverPause"),Ue=w.autoplayButton,Ge=hn("autoplayResetOnVisibility"),Je=["<span class='tns-visually-hidden'>"," animation</span>"];if(ge||ye)var _e,Ze={},$e={},tn=!1,en=0,nn=J?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};if(ge)var an=hn("touch");if(ye)var rn=hn("mouseDrag");ae&&(Te=De=an=rn=kt=Ve=Ke=Ge=!1),b&&(qt=b,jt="translate",M?(jt+=J?"3d(":"3d(0px, ",Ft=J?", 0px, 0px)":", 0px)"):(jt+=J?"X(":"Y(",Ft=")")),function(){_.appendChild(Z),tt.insertBefore(_,$),Z.appendChild($);var t="tns-outer",e="tns-inner",n=vn("gutter");if(V?J&&(vn("edgePadding")||n&&!w.fixedWidth)?t+=" tns-ovh":e+=" tns-ovh":n&&(t+=" tns-ovh"),_.className=t,Z.className=e,Z.id=ee+"-iw",Bt&&(Z.className+=" tns-ah"),""===$.id&&($.id=ee),te+=T?" tns-subpixel":" tns-no-subpixel",te+=A?" tns-calc":" tns-no-calc",V&&(te+=" tns-"+w.axis),$.className+=te,U=dn(),Mt&&(ft=Xn()),V&&L){var i={};i[L]=Zn,Qi($,i)}t=e=null;for(var a=0;a<nt;a++){(m=et[a]).id||(m.id=ee+"-item"+a),Si(m,"tns-item"),!V&&K&&Si(m,K),Wi(m,{"aria-hidden":"true",tabindex:"-1"})}if(Dt||At){for(var r=k.createDocumentFragment(),o=k.createDocumentFragment(),s=Wt;s--;){var u=s%nt,l=et[u].cloneNode(!0);if(Ri(l,"id"),o.insertBefore(l,o.firstChild),V){var c=et[nt-1-u].cloneNode(!0);Ri(c,"id"),r.appendChild(c)}}$.insertBefore(r,$.firstChild),$.appendChild(o),et=$.children}if(vn("autoHeight")||!V||Tt||!J){var f=$.querySelectorAll("img");Bi(f,function(t){Qi(t,we);var e=t.src;t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e}),xi(function(){Sn(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(f),function(){vt=!0,ne||(J&&!Tt||(Rn(),Tt&&(ft=Xn()),J||mi()),V&&Kn())})})}V&&J&&!Tt&&Kn();for(var d=Qt,v=Qt+Math.min(nt,xt);d<v;d++){Wi(m=et[d],{"aria-hidden":"false"}),Ri(m,["tabindex"]),Si(m,xe),V||(m.style.left=100*(d-Qt)/xt+"%",Si(m,Q),Ii(m,K))}if(V&&J&&(T?(ki(Lt,"#"+ee+" > .tns-item","font-size:"+C.getComputedStyle(et[0]).fontSize+";",Ni(Lt)),ki(Lt,"#"+ee,"font-size:0;",Ni(Lt))):Bi(et,function(t,e){var n;t.style.marginLeft=(n=e,A?A+"("+100*n+"% / "+Rt+")":100*n/Rt+"%")})),N){var h=mn(w.edgePadding,w.gutter,w.fixedWidth,w.speed);ki(Lt,"#"+ee+"-iw",h,Ni(Lt)),V&&(h=J&&!Tt?"width:"+gn(w.fixedWidth,w.gutter,w.items)+";":"",E&&(h+=wn(Nt)),ki(Lt,"#"+ee,h,Ni(Lt))),h=J&&!Tt?yn(w.fixedWidth,w.gutter,w.items):"",w.gutter&&(h+=xn(w.gutter)),V||(E&&(h+=wn(Nt)),D&&(h+=Cn(Nt))),h&&ki(Lt,"#"+ee+" > .tns-item",h,Ni(Lt))}else{Z.style.cssText=mn(At,Ct,Mt),V&&J&&!Tt&&($.style.width=gn(Mt,Ct,xt));h=J&&!Tt?yn(Mt,Ct,xt):"";Ct&&(h+=xn(Ct)),h&&ki(Lt,"#"+ee+" > .tns-item",h,Ni(Lt))}if(at&&N&&ot.forEach(function(t){var e,n=at[t],i="",a="",r="",o=hn("items",t),s=hn("fixedWidth",t),u=hn("speed",t),l=hn("edgePadding",t),c=hn("gutter",t);("edgePadding"in n||"gutter"in n)&&(i="#"+ee+"-iw{"+mn(l,c,s,u)+"}"),V&&J&&!Tt&&("fixedWidth"in n||"items"in n||Mt&&"gutter"in n)&&(a="width:"+gn(s,c,o)+";"),E&&"speed"in n&&(a+=wn(u)),a&&(a="#"+ee+"{"+a+"}"),("fixedWidth"in n||Mt&&"gutter"in n||!V&&"items"in n)&&(r+=yn(s,c,o)),"gutter"in n&&(r+=xn(c)),!V&&"speed"in n&&(E&&(r+=wn(u)),D&&(r+=Cn(u))),r&&(r="#"+ee+" > .tns-item{"+r+"}"),(e=i+a+r)&&Lt.insertRule("@media (min-width: "+t/16+"em) {"+e+"}",Lt.cssRules.length)}),navigator.msMaxTouchPoints&&(Si($,"ms-touch"),Qi($,{scroll:ui}),Hn()),he){var p=V?Wt:0;if(Be){Wi(Be,{"aria-label":"Carousel Pagination"}),Oe=Be.children;for(d=0;d<nt;d++){var m;(m=Oe[d])&&Wi(m,{"data-nav":d,tabindex:"-1","aria-selected":"false","aria-controls":et[p+d].id})}}else{var g="",y=pe?"":"hidden";for(d=0;d<nt;d++)g+='<button data-nav="'+d+'" tabindex="-1" aria-selected="false" aria-controls="'+et[p+d].id+'" '+y+' type="button"></button>';g='<div class="tns-nav" aria-label="Carousel Pagination">'+g+"</div>",_.insertAdjacentHTML("afterbegin",g),Be=_.querySelector(".tns-nav"),Oe=Be.children}if(gi(),E){var x=E.substring(0,E.length-18).toLowerCase();h="transition: all "+Nt/1e3+"s";x&&(h="-"+x+"-"+h),ki(Lt,"[aria-controls^="+ee+"-item]",h,Ni(Lt))}Wi(Oe[Pe],{tabindex:"0","aria-selected":"true"}),Si(Oe[Pe],Re),Qi(Be,se),De||zi(Be)}if(me){var b=Ve?"stop":"start";Ue?Wi(Ue,{"data-action":b}):w.autoplayButtonOutput&&(Z.insertAdjacentHTML("beforebegin",'<button data-action="'+b+'" type="button">'+Je[0]+b+Je[1]+Ye[0]+"</button>"),Ue=_.querySelector("[data-action]")),Ue&&Qi(Ue,{click:oi}),Ve?(ai(),Ke&&Qi($,ue),Ge&&Qi($,le)):Ue&&zi(Ue)}ve&&(Ee||ke&&Ne?(Ee&&(ke=Ee.children[0],Ne=Ee.children[1],Wi(Ee,{"aria-label":"Carousel Navigation",tabindex:"0"}),Wi(Ee.children,{"aria-controls":ee,tabindex:"-1"})),Wi(ke,{"data-controls":"prev"}),Wi(Ne,{"data-controls":"next"})):(_.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+ee+'" type="button">'+Me[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+ee+'" type="button">'+Me[1]+"</button></div>"),Ee=_.querySelector(".tns-controls"),ke=Ee.children[0],Ne=Ee.children[1]),Ce=qn(ke),Ae=qn(Ne),Vn(),Ee?Qi(Ee,oe):(Qi(ke,oe),Qi(Ne,oe)),Te||zi(Ee)),an&&Qi($,fe),rn&&Qi($,de),kt&&Qi(k,ce),"inner"===wt?Zt.on("outerResized",function(){Tn(),Zt.emit("innerLoaded",yi())}):Qi(C,{resize:An}),"outer"===wt?Zt.on("innerLoaded",Ln):!Bt&&V||ne||Ln(),On(),En(),kn(),Zt.on("indexChanged",In),"function"==typeof _t&&_t(yi()),"inner"===wt&&Zt.emit("innerLoaded",yi()),ne&&Nn(!0),G=!0}();var on=Dt?V?function(){var t=Yt,e=Kt;if(t+=bt,e-=bt,At)t+=1,e-=1;else if(Mt){var n=Ct||0;n<it%(Mt+n)&&(e-=1)}Wt&&(e<Qt?Qt-=nt:Qt<t&&(Qt+=nt))}:function(){if(Kt<Qt)for(;Yt+nt<=Qt;)Qt-=nt;else if(Qt<Yt)for(;Qt<=Kt-nt;)Qt+=nt}:function(){Qt=Math.max(Yt,Math.min(Kt,Qt))},sn=V?function(t,e){var n,i,a,r,o,s,u,l,c,f,d;e||(e=Yn()),E||!t?(Un(e),t&&ji($)||Zn()):(n=$,i=qt,a=jt,r=Ft,o=e,s=Nt,u=Zn,l=Math.min(s,10),c=0<=o.indexOf("%")?"%":"px",o=o.replace(c,""),f=Number(n.style[i].replace(a,"").replace(r,"").replace(c,"")),d=(o-f)/s*l,setTimeout(function t(){s-=l,f+=d,n.style[i]=a+f+c+r,0<s?setTimeout(t,l):u()},l)),J||mi()}:function(t){It=[];var e={};e[L]=e[S]=Zn,Xi(et[Xt],e),Qi(et[Qt],e),Gn(Xt,Q,X,!0),Gn(Qt,K,Q),L&&S&&t||Zn()};return{getInfo:yi,events:Zt,goTo:$n,play:function(){Ve&&!ze&&(ai(),je=!1)},pause:function(){ze&&(ri(),je=!0)},isOn:G,updateSliderHeight:Wn,rebuild:function(){return Ki(w)},destroy:function(){if(Xi(C,{resize:An}),Xi(k,ce),Lt.disabled=!0,Dt)for(var t=Wt;t--;)V&&et[0].remove(),et[et.length-1].remove();var e=["tns-item",xe];V||(e=e.concat("tns-normal",Q));for(var n=nt;n--;){var i=et[n];0<=i.id.indexOf(ee+"-item")&&(i.id=""),e.forEach(function(t){Ii(i,t)})}if(Ri(et,["style","aria-hidden","tabindex"]),et=ee=nt=Rt=Wt=null,Te&&(Xi(Ee,oe),w.controlsContainer&&(Ri(Ee,["aria-label","tabindex"]),Ri(Ee.children,["aria-controls","aria-disabled","tabindex"])),Ee=ke=Ne=null),De&&(Xi(Be,se),w.navContainer&&(Ri(Be,["aria-label"]),Ri(Oe,["aria-selected","aria-controls","tabindex"])),Be=Oe=null),Ve&&(clearInterval(He),Ue&&Xi(Ue,{click:oi}),Xi($,ue),Xi($,le),w.autoplayButton&&Ri(Ue,["data-action"])),$.id=$t||"",$.className=$.className.replace(te,""),Hi($),V&&L){var a={};a[L]=Zn,Xi($,a)}Xi($,fe),Xi($,de),tt.insertBefore($,_),_.remove(),_=Z=$=Qt=Xt=xt=bt=Pe=We=ve=Le=Se=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=G=!1}}}function un(){return Dt||V&&!Mt&&!Tt?Math.max(0,Rt-Math.ceil(hn("items"))):Rt-1}function ln(t){void 0===t&&(t=Qt);for(var e=V?Wt:0;t<e;)t+=nt;return V&&(t-=Wt),t?Math.floor(t%nt):t}function cn(){return C.innerWidth||k.documentElement.clientWidth||k.body.clientWidth}function fn(t){return t.clientWidth||fn(t.parentNode)}function dn(){return At?Mt?it-2*pn(Mt,Ct):it-(2*At+Ct):it}function vn(e){var n=w[e];return!n&&ot&&0<=rt.indexOf(e)&&ot.forEach(function(t){at[t][e]&&(n=!0)}),n}function hn(t,e){e=e||ut;var n,i={slideBy:"page",edgePadding:!1};if(!V&&t in i)n=i[t];else if("items"===t&&hn("fixedWidth"))n=Math.floor(it/(hn("fixedWidth")+hn("gutter")));else if("autoHeight"===t&&"outer"===wt)n=!0;else if(n=w[t],ot&&0<=rt.indexOf(t))for(var a=0,r=ot.length;a<r;a++){var o=ot[a];if(!(o<=e))break;t in at[o]&&(n=at[o][t])}return"slideBy"===t&&"page"===n&&(n=hn("items")),n}function pn(t,e){return(it%(t+e)+e)/2}function mn(t,e,n,i){var a="";if(t){var r=t;e&&(r+=e),a=n?"margin: 0px "+pn(n,e)+"px;":J?"margin: 0 "+t+"px 0 "+r+"px;":"padding: "+r+"px 0 "+t+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(J?o+" 0 0":"0 "+o+" 0")+";"}return E&&i&&(a+=wn(i)),a}function gn(t,e,n){return t?(t+e)*Rt+"px":A?A+"("+100*Rt+"% / "+n+")":100*Rt/n+"%"}function yn(t,e,n){var i;if(t)i=t+e+"px";else{var a=V?Rt:n;i=A?A+"(100% / "+a+")":100/a+"%"}return"width:"+i+re+";"}function xn(t){var e="";!1!==t&&(e=(J?"padding-":"margin-")+(J?"right":"bottom")+": "+t+"px;");return e}function bn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function wn(t){return bn(E,18)+"transition-duration:"+t/1e3+"s;"}function Cn(t){return bn(D,17)+"animation-duration:"+t/1e3+"s;"}function An(t){xi(function(){Tn(li(t))})}function Tn(t){if(G){ut=cn(),"outer"===wt&&Zt.emit("outerResized",yi(t));var e,n,i=st,a=Qt,r=xt,o=ae,s=!1;if(Mt&&(it=fn(_)),U=dn(),ot&&Mn(),i!==st&&Zt.emit("newBreakpointStart",yi(t)),J&&!Tt||ne||(Rn(),J||(mi(),s=!0)),(Mt||Tt)&&(ft=Xn()),i!==st||Mt||Tt){var u=kt,l=Bt,c=Mt,f=At,d=Ct,v=ne;if(xt=hn("items"),bt=hn("slideBy"),ne=hn("disable"),Ht&&(s=!0),ae=!!ne||!!ie&&(Mt||Tt?!ft:nt<=xt),xt!==r&&(Kt=un(),on()),ne!==v&&Nn(ne),ae!==o&&(ae?Kn(0):s=!0,En()),i!==st&&(Nt=hn("speed"),At=hn("edgePadding"),Ct=hn("gutter"),Mt=hn("fixedWidth"),ne||Mt===c||(s=!0),(Bt=hn("autoHeight"))!==l&&(Bt||(Z.style.height=""))),(kt=!ae&&hn("arrowKeys"))!==u&&(kt?Qi(k,ce):Xi(k,ce)),ve){var h=Te,p=Me;Te=!ae&&hn("controls"),Me=hn("controlsText"),Te!==h&&(Te?qi(Ee):zi(Ee)),Me!==p&&(ke.innerHTML=Me[0],Ne.innerHTML=Me[1])}if(he){var m=De;(De=!ae&&hn("nav"))!==m&&(De?(qi(Be),gi()):zi(Be))}if(ge){var g=an;(an=!ae&&hn("touch"))!==g&&V&&(an?Qi($,fe):Xi($,fe))}if(ye){var y=rn;(rn=!ae&&hn("mouseDrag"))!==y&&V&&(rn?Qi($,de):Xi($,de))}if(me){var x=Ve,b=Ke,w=Ge,C=Ye;if(ae?Ve=Ke=Ge=!1:(Ve=hn("autoplay"))?(Ke=hn("autoplayHoverPause"),Ge=hn("autoplayResetOnVisibility")):Ke=Ge=!1,Ye=hn("autoplayText"),Qe=hn("autoplayTimeout"),Ve!==x&&(Ve?(Ue&&qi(Ue),ze||je||ai()):(Ue&&zi(Ue),ze&&ri())),Ke!==b&&(Ke?Qi($,ue):Xi($,ue)),Ge!==w&&(Ge?Qi(k,le):Xi(k,le)),Ue&&Ye!==C){var A=Ve?1:0,T=Ue.innerHTML,M=T.length-C[A].length;T.substring(M)===C[A]&&(Ue.innerHTML=T.substring(0,M)+Ye[A])}}if(!N){if(ae||At===f&&Ct===d||(Z.style.cssText=mn(At,Ct,Mt)),J&&!Mt){V&&($.style.width=gn(!1,null,xt));var E=yn(Mt,Ct,xt)+xn(Ct);n=Ni(e=Lt)-1,"deleteRule"in e?e.deleteRule(n):e.removeRule(n),ki(Lt,"#"+ee+" > .tns-item",E,Ni(Lt))}Mt||(s=!0)}Qt!==a&&(Zt.emit("indexChanged",yi()),s=!0),xt!==r&&(In(),function(){if(!V){for(var t=Qt+Math.min(nt,xt),e=Rt;e--;){var n=et[e];Qt<=e&&e<t?(Si(n,"tns-moving"),n.style.left=100*(e-Qt)/xt+"%",Si(n,Q),Ii(n,K)):n.style.left&&(n.style.left="",Si(n,K),Ii(n,Q)),Ii(n,X)}setTimeout(function(){Bi(et,function(t){Ii(t,"tns-moving")})},300)}}(),navigator.msMaxTouchPoints&&Hn())}kn(!0),s&&(Kn(),Xt=Qt),!Bt&&V||ne||Ln(),i!==st&&Zt.emit("newBreakpointEnd",yi(t))}}function Mn(){st=0,ot.forEach(function(t,e){t<=ut&&(st=e+1)})}function En(){var t="tns-transparent";if(ae){if(!dt){if(At&&(Z.style.margin="0px"),Wt)for(var e=Wt;e--;)V&&Si(et[e],t),Si(et[Rt-e-1],t);dt=!0}}else if(dt){if(At&&!Mt&&N&&(Z.style.margin=""),Wt)for(e=Wt;e--;)V&&Ii(et[e],t),Ii(et[Rt-e-1],t);dt=!1}}function kn(t){Mt&&At&&(ae||it<=Mt+Ct?"0px"!==Z.style.margin&&(Z.style.margin="0px"):t&&(Z.style.cssText=mn(At,Ct,Mt)))}function Nn(t){var e=et.length;if(t){if(Lt.disabled=!0,$.className=$.className.replace(te.substring(1),""),Hi($),Dt)for(var n=Wt;n--;)V&&zi(et[n]),zi(et[e-n-1]);if(J&&V||Hi(Z),!V)for(var i=Qt,a=Qt+nt;i<a;i++){Hi(r=et[i]),Ii(r,Q),Ii(r,K)}}else{if(Lt.disabled=!1,$.className+=te,J&&!Tt||(Rn(),Tt&&(ft=Xn())),Kn(),Dt)for(n=Wt;n--;)V&&qi(et[n]),qi(et[e-n-1]);if(!V)for(i=Qt,a=Qt+nt;i<a;i++){var r=et[i],o=i<Qt+xt?Q:K;r.style.left=100*(i-Qt)/xt+"%",Si(r,o)}}}function On(){if(St&&!ne){var t=Qt,e=Qt+xt;for(At&&(t-=1,e+=1),t=Math.max(t,0),e=Math.min(e,Rt);t<e;t++)Bi(et[t].querySelectorAll(".tns-lazy-img"),function(t){var e,n={};n[L]=function(t){t.stopPropagation()},Qi(t,n),Li(t,"loaded")||(t.src=(e="data-src",t.getAttribute(e)),Si(t,"loaded"))})}}function Dn(t){var e=ci(t);Si(e,be),Xi(e,we)}function Bn(t,e){for(var n=[],i=t,a=Math.min(t+e,Rt);i<a;i++)Bi(et[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Ln(){var t=Bt?Bn(Qt,xt):Bn(Wt,nt);xi(function(){Sn(t,Wn)})}function Sn(n,t){return vt?t():(n.forEach(function(t,e){Li(t,be)&&n.splice(e,1)}),n.length?void xi(function(){Sn(n,t)}):t())}function In(){On(),function(){for(var t=Qt+Math.min(nt,xt),e=Rt;e--;){var n=et[e];Qt<=e&&e<t?Pi(n,"tabindex")&&(Wi(n,{"aria-hidden":"false"}),Ri(n,["tabindex"]),Si(n,xe)):(Pi(n,"tabindex")||Wi(n,{"aria-hidden":"true",tabindex:"-1"}),Li(n,xe)&&Ii(n,xe))}}(),Vn(),gi(),function(){if(De&&(Pe=-1!==Ie?Ie:ln(),Ie=-1,Pe!==We)){var t=Oe[We],e=Oe[Pe];Wi(t,{tabindex:"-1","aria-selected":"false"}),Wi(e,{tabindex:"0","aria-selected":"true"}),Ii(t,Re),Si(e,Re),We=Pe}}()}function Pn(t,e){for(var n=[],i=t,a=Math.min(t+e,Rt);i<a;i++)n.push(et[i].offsetHeight);return Math.max.apply(null,n)}function Wn(){var t=Bt?Pn(Qt,xt):Pn(Wt,nt);Z.style.height!==t&&(Z.style.height=t+"px")}function Rn(){ct=[0];for(var t,e=J?"left":"top",n=et[0].getBoundingClientRect()[e],i=1;i<Rt;i++)t=et[i].getBoundingClientRect()[e],ct.push(t-n)}function Hn(){_.style.msScrollSnapPointsX="snapInterval(0%, "+100/xt+"%)"}function zn(t){return t.nodeName.toLowerCase()}function qn(t){return"button"===zn(t)}function jn(t){return"true"===t.getAttribute("aria-disabled")}function Fn(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Vn(){if(Te&&!Ot&&!Dt){var t=Ce?ke.disabled:jn(ke),e=Ae?Ne.disabled:jn(Ne),n=Qt===Yt,i=!Ot&&Qt===Kt;n&&!t&&Fn(Ce,ke,!0),!n&&t&&Fn(Ce,ke,!1),i&&!e&&Fn(Ae,Ne,!0),!i&&e&&Fn(Ae,Ne,!1)}}function Qn(t,e){E&&(t.style[E]=e)}function Xn(){var t=-((Mt?(Mt+Ct)*Rt-Ct:ct[Rt-1]+et[Rt-1].getBoundingClientRect().width-Ct)-U);return 0<t&&(t=0),t}function Yn(){var t;J&&!Tt?t=Mt?-(Mt+Ct)*Qt:100*-Qt/(b?Rt:xt):t=-ct[Qt];return Ht&&(t=Math.max(t,ft)),t+=!J||Tt||Mt?"px":"%"}function Kn(t){Qn($,"0s"),Un(t),setTimeout(function(){Qn($,"")},10)}function Un(t){null==t&&(t=Yn()),$.style[qt]=jt+t+Ft}function Gn(t,e,n,i){var a=t+xt;Dt||(a=Math.min(a,Rt));for(var r=t;r<a;r++){var o=et[r];i||(o.style.left=100*(r-Qt)/xt+"%"),Y&&O&&(o.style[O]=o.style[B]=Y*(r-t)/1e3+"s"),Ii(o,e),Si(o,n),i&&It.push(o)}}function Jn(t,e){var n,i;zt&&on(),(Qt!==Xt||e)&&(Zt.emit("indexChanged",yi()),Zt.emit("transitionStart",yi()),ze&&t&&0<=["click","keydown"].indexOf(t.type)&&ri(),Jt=!0,isNaN(n)&&(n=Nt),ze&&!ji($)&&(n=0),sn(n,i))}function _n(t){return t.toLowerCase().replace(/-/g,"")}function Zn(t){if(V||Jt){if(Zt.emit("transitionEnd",yi(t)),!V&&0<It.length)for(var e=0;e<It.length;e++){var n=It[e];n.style.left="",B&&O&&(n.style[B]="",n.style[O]=""),Ii(n,X),Si(n,K)}if(!t||!V&&t.target.parentNode===$||t.target===$&&_n(t.propertyName)===_n(qt)){if(!zt){var i=Qt;on(),Qt!==i&&(Zt.emit("indexChanged",yi()),Kn())}Bt&&Ln(),"inner"===wt&&Zt.emit("innerLoaded",yi()),Jt=!1,Xt=Qt}}}function $n(t,e){if(!ae)if("prev"===t)ti(e,-1);else if("next"===t)ti(e,1);else{Jt&&Zn();var n=ln(),i=0;if(n<0&&(n+=nt),"first"===t)i=-n;else if("last"===t)i=V?nt-xt-n:nt-1-n;else if("number"!=typeof t&&(t=parseInt(t)),!isNaN(t)){e||(t-=1,V&&Wt&&(t+=Wt));var a=ln(t);a<0&&(a+=nt),i=a-n}if(!V&&i&&Math.abs(i)<xt){var r=0<i?1:-1;i+=Yt<=Qt+i-nt?nt*r:2*nt*r*-1}Qt+=i,V&&Dt&&(Qt<Yt&&(Qt+=nt),Kt<Qt&&(Qt-=nt)),ln(Qt)!==ln(Xt)&&Jn(e)}}function ti(t,e){var n;if(Jt&&Zn(),!e){for(var i=(t=li(t)).target||t.srcElement;i!==Ee&&[ke,Ne].indexOf(i)<0;)i=i.parentNode;var a=[ke,Ne].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Ot){if(Qt===Yt&&-1===e)return void $n("last",t);if(Qt===Kt&&1===e)return void $n("first",t)}e&&(Qt+=bt*e,Jn(n||t&&"keydown"===t.type?t:null))}function ei(){He=setInterval(function(){ti(null,Xe)},Qe),ze=!0}function ni(){clearInterval(He),ze=!1}function ii(t,e){Wi(Ue,{"data-action":t}),Ue.innerHTML=Je[0]+t+Je[1]+e}function ai(){ei(),Ue&&ii("stop",Ye[1])}function ri(){ni(),Ue&&ii("start",Ye[0])}function oi(){ze?(ri(),je=!0):(ai(),je=!1)}function si(t){t.focus()}function ui(){sn(0,$.scrollLeft),Xt=Qt}function li(t){return fi(t=t||C.event)?t.changedTouches[0]:t}function ci(t){return t.target||C.event.srcElement}function fi(t){return 0<=t.type.indexOf("touch")}function di(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function vi(t){Jt&&Zn(),tn=!0,V&&(bi(en),en=0);var e=li(t);Zt.emit(fi(t)?"touchStart":"dragStart",yi(t)),!fi(t)&&0<=["img","a"].indexOf(zn(ci(t)))&&di(t),$e.x=Ze.x=parseInt(e.clientX),$e.y=Ze.y=parseInt(e.clientY),V&&(_e=parseFloat($.style[qt].replace(jt,"").replace(Ft,"")),Qn($,"0s"))}function hi(t){if(tn){var e=li(t);$e.x=parseInt(e.clientX),$e.y=parseInt(e.clientY)}V&&!en&&(en=xi(function(){!function t(e){if(!Gt)return void(tn=!1);bi(en);tn&&(en=xi(function(){t(e)}));"?"===Gt&&$e.x!==Ze.x&&$e.y!==Ze.y&&(Gt=Di(Oi($e.y-Ze.y,$e.x-Ze.x),Ut)===w.axis);if(Gt){try{e.type&&Zt.emit(fi(e)?"touchMove":"dragMove",yi(e))}catch(t){}var n=_e,i=nn($e,Ze);if(!J||Mt)n+=i,n+="px";else{var a=b?i*xt*100/(U*Rt):100*i/U;n+=a,n+="%"}$.style[qt]=jt+n+Ft}}(t)}))}function pi(i){if(Ut&&(Gt="?"),tn){V&&(bi(en),Qn($,"")),tn=!1;var t=li(i);$e.x=parseInt(t.clientX),$e.y=parseInt(t.clientY);var a=nn($e,Ze);if(5<=Math.abs(a)){if(!fi(i)){var n=ci(i);Qi(n,{click:function t(e){di(e),Xi(n,{click:t})}})}V?en=xi(function(){if(J){var t=-a*xt/U;t=0<a?Math.floor(t):Math.ceil(t),Qt+=t}else{var e=-(_e+a);if(e<=0)Qt=Yt;else if(e>=ct[ct.length-1])Qt=Kt;else for(var n=0;n++,Qt=a<0?n+1:n,n<Rt&&e>=ct[n+1];);}Jn(i,a),Zt.emit(fi(i)?"touchEnd":"dragEnd",yi(i))}):("?"===Gt&&$e.x!==Ze.x&&$e.y!==Ze.y&&(Gt=Di(Oi($e.y-Ze.y,$e.x-Ze.x),Ut)===w.axis),Gt&&ti(i,0<a?-1:1))}}}function mi(){Z.style.height=ct[Qt+xt]-ct[Qt]+"px"}function gi(){De&&!pe&&(!function(){Le=[];for(var t=ln()%xt;t<nt;)V&&!Dt&&nt<t+xt&&(t=nt-xt),Le.push(t),t+=xt;(Dt&&Le.length*xt<nt||!Dt&&0<Le[0])&&Le.unshift(0)}(),Le!==Se&&(Bi(Oe,function(t,e){Le.indexOf(e)<0?zi(t):qi(t)}),Se=Le))}function yi(t){return{container:$,slideItems:et,navContainer:Be,navItems:Oe,controlsContainer:Ee,hasControls:ve,prevButton:ke,nextButton:Ne,items:xt,slideBy:bt,cloneCount:Wt,slideCount:nt,slideCountNew:Rt,index:Qt,indexCached:Xt,navCurrentIndex:Pe,navCurrentIndexCached:We,visibleNavIndexes:Le,visibleNavIndexesCached:Se,sheet:Lt,event:t||{}}}I&&console.warn("No slides found in",w.container)};return Ki}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
