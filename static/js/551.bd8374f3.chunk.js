(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[551],{5938:function(e,t,n){"use strict";n.d(t,{dA:function(){return o},lf:function(){return s},vH:function(){return c},SD:function(){return i},a2:function(){return f},WB:function(){return p}});var r=n(2982),a=n(4994),u=n(295),o=function(e,t,n){var o=t.options,c=t.setOptions;return new Promise((function(t,i){var f=e.toLowerCase();(0,u.YM)((function(){return fetch(a.P.STATIC_DATA.STATIC_QUOTES+f+".json")})).then((function(e){return e.json()})).then((function(a){null===n||void 0===n||n.map((function(e){return e(a)})),function(e,t,n){var a=t.options,u=t.setOptions,o=JSON.parse(JSON.stringify(a));if("all"===e.trim().toLowerCase()){var c,i=s(e,a);c=void 0===o[i].quotes?[]:o[i].quotes,o[i].quotes=[].concat((0,r.Z)(c),(0,r.Z)(n))}else o[s(e,a)].quotes=n;u(o)}(e,{options:o,setOptions:c},a),t()})).catch((function(e){return i(e)}))}))},s=function(e,t){return t.findIndex((function(t){return t.value===e}))},c=function(e){var t=e.philosopher;return e.options.filter((function(e){return e.value===t}))[0]},i=function(e){var t,n=e.philosopher;return null===(t=e.options.filter((function(e){return e.value===n}))[0])||void 0===t?void 0:t.quotes},f=function(e,t){return t[s(e,t)].fullName},p=function(e,t){return!!t[s(e,t)]}},3456:function(e,t,n){"use strict";n.d(t,{o8:function(){return r},Z:function(){return a},k$:function(){return u}});var r=function(e){return"undefined"===typeof e},a=function(e){return 0===Object.values(e).length&&e.constructor===Object};function u(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}},9551:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(1413),a=n(2791),u=n(8687),o=n(295),s=n(5861),c=n(4687),i=n.n(c),f=n(303),p=n(3456),d=n(9234),l=n(5498),v=n.n(l),h=function(e,t){var n=window.document.createElement("a");n.style="display:none;",n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),n.remove()},m=function(){var e=(0,s.Z)(i().mark((function e(t,n){var r,a,u,o,s,c,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementsByTagName("html")[0],a=document.getElementsByTagName("body")[0],u=r.clientWidth,o=a.clientWidth,(s=t.scrollWidth-t.clientWidth)>t.clientWidth&&(u+=s,o+=s),r.style.width=u+"px",a.style.width=o+"px",e.next=10,v()(t,{scale:3});case 10:c=e.sent,f=c.toDataURL("image/png",1),h(f,n),r.style.width=null,a.style.width=null;case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=(0,s.Z)(i().mark((function e(t,n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("share"in navigator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v()(t,{scale:3});case 4:e.sent.toBlob(function(){var e=(0,s.Z)(i().mark((function e(t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[new File([t],n,{type:t.type})],a={files:r},!navigator.canShare(a)){e.next=13;break}return e.prev=3,e.next=6,navigator.share(a);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),"AbortError"!==e.t0.name&&console.error(e.t0.name,e.t0.message);case 11:e.next=14;break;case 13:console.warn("Sharing not supported",a);case 14:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})))();case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var k=n(184),g=a.lazy((function(){return(0,o.YM)((function(){return n.e(11).then(n.bind(n,6011))}))})),y=a.lazy((function(){return(0,o.YM)((function(){return n.e(358).then(n.bind(n,8358))}))})),b=function(){var e=(0,u.v9)((function(e){return e.quoteImage})),t=e.quotationText,o=e.philosopherFullName,c=e.signature,l=e.share,v=void 0!==l&&l,h=(0,a.useRef)(),b=(0,u.v9)((function(e){return e.philosophersData.currentPhilosopher})),w={exportRef:h,quotationText:t,philosopherFullName:o,signature:c};!function(e,t,n,r){var o=(0,u.I0)();(0,a.useEffect)((function(){(0,d.IE)(!0)}),[]),(0,a.useEffect)((function(){(0,s.Z)(i().mark((function a(){var u;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(u="".concat(e,"-quote-").concat((0,p.k$)(),".png"),void 0===t||!0!==t){a.next=6;break}return a.next=4,x(n.current,u);case 4:a.next=8;break;case 6:return a.next=8,m(n.current,u);case 8:r||(0,d.IE)(!1),o((0,f.Mk)(""));case 10:case"end":return a.stop()}}),a)})))()}),[n,e,t])}(o,v,h,(0,u.v9)((function(e){return e.philosophersData.darkMode})));try{var S="".concat(b,".jpg");return n(2892)("./"+S),(0,k.jsx)(g,(0,r.Z)((0,r.Z)({},w),{},{imageName:S}))}catch(N){return(0,k.jsx)(y,(0,r.Z)({},w))}}},9234:function(e,t,n){"use strict";n.d(t,{IE:function(){return i},xh:function(){return f},CQ:function(){return p},qZ:function(){return d},lq:function(){return l}});var r=n(5861),a=n(2982),u=n(4687),o=n.n(u),s=n(5938),c=n(4652),i=function(e){var t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},f=function(e,t){return e.map((function(e){return(0,s.vH)({philosopher:e.value,options:t})})).reverse()},p=function(e){return(0,a.Z)(e).sort((function(e,t){return e.fullName.localeCompare(t.fullName)}))};function d(e){var t=new Date,n=new Date(e);return t.setHours(0,0,0,0),{currentClientDate:t=t.getTime(),lastSyncClientDate:n=n.setHours(0,0,0,0)}}function l(e,t,n,r,a,u,o){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function e(t,n,r,a,u,s,i){var f,p,d,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.M_)({userName:t,markedQuotes:n,openSnackbar:r,setMarkedQuotes:a});case 2:if(f=e.sent,p=f.markedQuotesFromServer,d=f.dateFromServer,u(Date.now()),!p){e.next=19;break}if(!((l=Object.values(p).flat().length)>s)){e.next=13;break}a(p),r("Auto-Sync : Restored all marked quotes!",4e3),e.next=19;break;case 13:if(!(s>l)){e.next=19;break}if((d=new Date(d)).setHours(0,0,0,0),!(i>d)){e.next=19;break}return e.next=19,(0,c.yf)({userName:t,markedQuotes:n,openSnackbar:r});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},4652:function(e,t,n){"use strict";n.d(t,{yf:function(){return c},M_:function(){return i},z9:function(){return f}});var r=n(5861),a=n(4687),u=n.n(a),o=n(4994),s=n(295),c=function(){var e=(0,r.Z)(u().mark((function e(t){var n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userName,a=t.markedQuotes,t.openSnackbar,t.setSyncDate,e.next=3,(0,s.YM)((0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.P.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,markedQuotes:a,dateSynced:Date.now()})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n,a,c,i,f,p,d,l,v,h,m,x;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.userName,t.markedQuotes,c=t.openSnackbar,t.setMarkedQuotes,e.next=3,(0,s.YM)((0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.P.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:a})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 3:return i=e.sent,e.next=6,i.json();case 6:if(i=e.sent,null===(n=i)||void 0===n||!n.ok){e.next=20;break}if(e.prev=8,l=null===(f=i)||void 0===f||null===(p=f.results)||void 0===p||null===(d=p[0])||void 0===d?void 0:d.markedQuotes,v=Object.values(l).flat().length,!(l&&v>0)){e.next=13;break}return e.abrupt("return",{markedQuotesFromServer:l,dateFromServer:null===(h=i)||void 0===h||null===(m=h.results)||void 0===m||null===(x=m[0])||void 0===x?void 0:x.dateSynced});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),c(JSON.stringify(e.t0));case 18:e.next=21;break;case 20:c(JSON.stringify(i.error));case 21:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,a,c,i,f,p,d,l,v;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.apiCallType,c=t.userName,i=t.password,f=t.setIsLoggedIn,p=t.openSnackbar,d=t.setIsFetching,l=c.charAt(0).toUpperCase()+c.slice(1),d(!0),"login"!==a){e.next=9;break}return e.next=6,(0,s.YM)((0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.P.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:c,password:i})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 6:v=e.sent,e.next=12;break;case 9:return e.next=11,(0,s.YM)((0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.P.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:c,password:i})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 11:v=e.sent;case 12:return e.next=14,v.json();case 14:v=e.sent,d(!1),null!==(n=v)&&void 0!==n&&n.ok?(f(!0),p(l+" "+JSON.stringify(v.serverResponse))):p(JSON.stringify(v.error));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2892:function(e,t,n){var r={"./BEAUVOIR.jpg":9073,"./BUKOWSKI.jpg":3792,"./CARL_JUNG.jpg":2063,"./FREUD.jpg":7393,"./MARK_TWAIN.jpg":5244,"./OSHO.jpg":6530,"./PETERSON.jpg":4500,"./RICKY_GERVAIS.png":8101,"./ROUSSEAU.jpg":6961};function a(e){var t=u(e);return n(t)}function u(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=u,e.exports=a,a.id=2892},9073:function(e,t,n){"use strict";e.exports=n.p+"static/media/BEAUVOIR.a37acf7026379a5c745f.jpg"},3792:function(e,t,n){"use strict";e.exports=n.p+"static/media/BUKOWSKI.3ed907dda532b04aa57a.jpg"},2063:function(e,t,n){"use strict";e.exports=n.p+"static/media/CARL_JUNG.12be5cab35dd5548822a.jpg"},7393:function(e,t,n){"use strict";e.exports=n.p+"static/media/FREUD.fa5e080abec887337460.jpg"},5244:function(e,t,n){"use strict";e.exports=n.p+"static/media/MARK_TWAIN.d04dc676af5be490f48a.jpg"},6530:function(e,t,n){"use strict";e.exports=n.p+"static/media/OSHO.45432ce7c4c8818ad65c.jpg"},4500:function(e,t,n){"use strict";e.exports=n.p+"static/media/PETERSON.f3968a4c45466650e225.jpg"},8101:function(e,t,n){"use strict";e.exports=n.p+"static/media/RICKY_GERVAIS.975580860d1cf99727fc.png"},6961:function(e,t,n){"use strict";e.exports=n.p+"static/media/ROUSSEAU.bd65f104307ba9482677.jpg"}}]);
//# sourceMappingURL=551.bd8374f3.chunk.js.map