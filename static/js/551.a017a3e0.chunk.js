(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[551],{3456:function(t,e,n){"use strict";n.d(e,{o8:function(){return r},Z:function(){return c},k$:function(){return a}});var r=function(t){return"undefined"===typeof t},c=function(t){return 0===Object.values(t).length&&t.constructor===Object};function a(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}},9551:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return w}});var r=n(1413),c=n(2791),a=n(9434),u=n(7689),o=n(295),i=n(5861),s=n(4687),p=n.n(s),f=n(6258),d=n(3456),l=n(9234),h=n(5498),m=n.n(h),g=function(t,e){var n=window.document.createElement("a");n.style="display:none;",n.download=e,n.href=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),n.remove()},v=function(){var t=(0,i.Z)(p().mark((function t(e,n){var r,c,a,u,o,i,s;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=document.getElementsByTagName("html")[0],c=document.getElementsByTagName("body")[0],a=r.clientWidth,u=c.clientWidth,(o=e.scrollWidth-e.clientWidth)>e.clientWidth&&(a+=o,u+=o),r.style.width=a+"px",c.style.width=u+"px",t.next=10,m()(e,{scale:3});case 10:i=t.sent,s=i.toDataURL("image/png",1),g(s,n),r.style.width=null,c.style.width=null;case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var t=(0,i.Z)(p().mark((function t(e,n){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,i.Z)(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("share"in navigator){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,m()(e,{scale:3});case 4:t.sent.toBlob(function(){var t=(0,i.Z)(p().mark((function t(e){var r,c;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=[new File([e],n,{type:e.type})],c={files:r},!navigator.canShare(c)){t.next=13;break}return t.prev=3,t.next=6,navigator.share(c);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),"AbortError"!==t.t0.name&&console.error(t.t0.name,t.t0.message);case 11:t.next=14;break;case 13:console.warn("Sharing not supported",c);case 14:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}());case 6:case"end":return t.stop()}}),t)})))();case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();var b=n(184),y=c.lazy((function(){return(0,o.YM)((function(){return n.e(11).then(n.bind(n,6011))}))})),j=c.lazy((function(){return(0,o.YM)((function(){return n.e(358).then(n.bind(n,8358))}))})),w=function(){var t=(0,u.TH)().state,e=t.quotationText,o=t.philosopherFullName,s=t.signature,h=t.share,m=void 0!==h&&h,g=(0,c.useRef)(),w=(0,a.v9)((function(t){return t.philosophersData.currentPhilosopher})),E={exportRef:g,quotationText:e,philosopherFullName:o,signature:s};!function(t,e,n){var r=(0,u.s0)(),o=(0,a.v9)((function(t){return t.philosophersData.darkMode}));(0,c.useEffect)((function(){(0,l.iA)(o)}),[o]),(0,c.useEffect)((function(){(0,i.Z)(p().mark((function c(){var a;return p().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(a="".concat(t,"-quote-").concat((0,d.k$)(),".png"),void 0===e||!0!==e){c.next=8;break}return c.next=4,v(n.current,a);case 4:return c.next=6,x(n.current,a);case 6:c.next=10;break;case 8:return c.next=10,v(n.current,a);case 10:r(f.Z.homepage.route);case 11:case"end":return c.stop()}}),c)})))()}),[n,r,t,e])}(o,m,g);try{var k="".concat(w,".jpg");return n(2892)("./"+k),(0,b.jsx)(y,(0,r.Z)((0,r.Z)({},E),{},{imageName:k}))}catch(O){return(0,b.jsx)(j,(0,r.Z)({},E))}}},9234:function(t,e,n){"use strict";n.d(e,{iA:function(){return a},xh:function(){return u},CQ:function(){return o}});var r=n(3433),c=n(5938),a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"darkTheme",n=document.getElementsByTagName("html")[0];t?n.classList.add(e):n.classList.remove(e)},u=function(t,e){return t.map((function(t){return(0,c.vH)({philosopher:t.value,options:e})})).reverse()},o=function(t){return(0,r.Z)(t).sort((function(t,e){return t.fullName.localeCompare(e.fullName)}))}},2892:function(t,e,n){var r={"./BEAUVOIR.jpg":9073,"./BUKOWSKI.jpg":3792,"./CARL_JUNG.jpg":2063,"./DOSTOEVSKY.jpg":9133,"./FREUD.jpg":7393,"./MARK_TWAIN.jpg":5244,"./OSHO.jpg":6530,"./PETERSON.jpg":4500,"./RICKY_GERVAIS.png":8101,"./ROUSSEAU.jpg":6961};function c(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}c.keys=function(){return Object.keys(r)},c.resolve=a,t.exports=c,c.id=2892},9073:function(t,e,n){"use strict";t.exports=n.p+"static/media/BEAUVOIR.a37acf7026379a5c745f.jpg"},3792:function(t,e,n){"use strict";t.exports=n.p+"static/media/BUKOWSKI.3ed907dda532b04aa57a.jpg"},2063:function(t,e,n){"use strict";t.exports=n.p+"static/media/CARL_JUNG.12be5cab35dd5548822a.jpg"},9133:function(t,e,n){"use strict";t.exports=n.p+"static/media/DOSTOEVSKY.f3f4bc3d82ea04e84014.jpg"},7393:function(t,e,n){"use strict";t.exports=n.p+"static/media/FREUD.fa5e080abec887337460.jpg"},5244:function(t,e,n){"use strict";t.exports=n.p+"static/media/MARK_TWAIN.d04dc676af5be490f48a.jpg"},6530:function(t,e,n){"use strict";t.exports=n.p+"static/media/OSHO.45432ce7c4c8818ad65c.jpg"},4500:function(t,e,n){"use strict";t.exports=n.p+"static/media/PETERSON.f3968a4c45466650e225.jpg"},8101:function(t,e,n){"use strict";t.exports=n.p+"static/media/RICKY_GERVAIS.975580860d1cf99727fc.png"},6961:function(t,e,n){"use strict";t.exports=n.p+"static/media/ROUSSEAU.bd65f104307ba9482677.jpg"}}]);
//# sourceMappingURL=551.a017a3e0.chunk.js.map