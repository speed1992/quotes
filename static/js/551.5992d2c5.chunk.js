(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[551],{5938:function(e,t,n){"use strict";n.d(t,{SD:function(){return i},WB:function(){return p},a2:function(){return f},dA:function(){return o},lf:function(){return s},vH:function(){return c}});var r=n(2982),a=n(4994),u=n(295),o=function(e,t,n){var o=t.options,c=t.setOptions;return new Promise((function(t,i){var f=e.toLowerCase();(0,u.YM)((function(){return fetch(a.P.STATIC_DATA.STATIC_QUOTES+f+".json")})).then((function(e){return e.json()})).then((function(a){null===n||void 0===n||n.map((function(e){return e(a)})),function(e,t,n){var a=t.options,u=t.setOptions,o=JSON.parse(JSON.stringify(a));if("all"===e.trim().toLowerCase()){var c,i=s(e,a);c=void 0===o[i].quotes?[]:o[i].quotes,o[i].quotes=[].concat((0,r.Z)(c),(0,r.Z)(n))}else o[s(e,a)].quotes=n;u(o)}(e,{options:o,setOptions:c},a),t()})).catch((function(e){return i(e)}))}))},s=function(e,t){return t.findIndex((function(t){return t.value===e}))},c=function(e){var t=e.philosopher;return e.options.filter((function(e){return e.value===t}))[0]},i=function(e){var t,n=e.philosopher;return null===(t=e.options.filter((function(e){return e.value===n}))[0])||void 0===t?void 0:t.quotes},f=function(e,t){return t[s(e,t)].fullName},p=function(e,t){return!!t[s(e,t)]}},3456:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},k$:function(){return u},o8:function(){return r}});var r=function(e){return"undefined"===typeof e},a=function(e){return 0===Object.values(e).length&&e.constructor===Object};function u(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}},9551:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(1413),a=n(2791),u=n(8687),o=n(295),s=n(4165),c=n(5861),i=n(303),f=n(3456),p=n(9234),d=n(5498),l=n.n(d),v=function(e,t){var n=window.document.createElement("a");n.style="display:none;",n.download=t,n.href=e,document.body.appendChild(n),n.click(),document.body.removeChild(n),n.remove()},h=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t,n){var r,a,u,o,c,i,f;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementsByTagName("html")[0],a=document.getElementsByTagName("body")[0],u=r.clientWidth,o=a.clientWidth,(c=t.scrollWidth-t.clientWidth)>t.clientWidth&&(u+=c,o+=c),r.style.width=u+"px",a.style.width=o+"px",e.next=10,l()(t,{scale:3});case 10:i=e.sent,f=i.toDataURL("image/png",1),v(f,n),r.style.width=null,a.style.width=null;case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t,n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,c.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("share"in navigator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,l()(t,{scale:3});case 4:e.sent.toBlob(function(){var e=(0,c.Z)((0,s.Z)().mark((function e(t){var r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[new File([t],n,{type:t.type})],a={files:r},!navigator.canShare(a)){e.next=13;break}return e.prev=3,e.next=6,navigator.share(a);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),"AbortError"!==e.t0.name&&console.error(e.t0.name,e.t0.message);case 11:e.next=14;break;case 13:console.warn("Sharing not supported",a);case 14:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})))();case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var x=n(184),k=a.lazy((function(){return(0,o.YM)((function(){return n.e(11).then(n.bind(n,6011))}))})),g=a.lazy((function(){return(0,o.YM)((function(){return n.e(358).then(n.bind(n,8358))}))})),y=function(){var e=(0,u.v9)((function(e){return e.quoteImage})),t=e.quotationText,o=e.philosopherFullName,d=e.signature,l=e.share,v=void 0!==l&&l,y=(0,a.useRef)(),b=(0,u.v9)((function(e){return e.philosophersData.currentPhilosopher})),w={exportRef:y,quotationText:t,philosopherFullName:o,signature:d};!function(e,t,n){var r=(0,u.I0)();(0,a.useEffect)((function(){(0,p.IE)(!0)}),[]),(0,a.useEffect)((function(){(0,c.Z)((0,s.Z)().mark((function a(){var u;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(u="".concat(e,"-quote-").concat((0,f.k$)(),".png"),void 0===t||!0!==t){a.next=8;break}return a.next=4,h(n.current,u);case 4:return a.next=6,m(n.current,u);case 6:a.next=10;break;case 8:return a.next=10,h(n.current,u);case 10:(0,p.IE)(!1),r((0,i.Mk)(""));case 12:case"end":return a.stop()}}),a)})))()}),[n,e,t])}(o,v,y);try{var S="".concat(b,".jpg");return n(2892)("./"+S),(0,x.jsx)(k,(0,r.Z)((0,r.Z)({},w),{},{imageName:S}))}catch(Z){return(0,x.jsx)(g,(0,r.Z)({},w))}}},9234:function(e,t,n){"use strict";n.d(t,{CQ:function(){return f},IE:function(){return c},lq:function(){return d},qZ:function(){return p},xh:function(){return i}});var r=n(4165),a=n(5861),u=n(2982),o=n(5938),s=n(4652),c=function(e){var t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},i=function(e,t){return e.map((function(e){return(0,o.vH)({philosopher:e.value,options:t})})).reverse()},f=function(e){return(0,u.Z)(e).sort((function(e,t){return e.fullName.localeCompare(t.fullName)}))};function p(e){var t=new Date,n=new Date(e);return t.setHours(0,0,0,0),{currentClientDate:t=t.getTime(),lastSyncClientDate:n=n.setHours(0,0,0,0)}}function d(e,t,n,r,a,u,o){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function e(t,n,a,u,o,c,i){var f,p,d,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.M_)({userName:t,markedQuotes:n,openSnackbar:a,setMarkedQuotes:u});case 2:if(f=e.sent,p=f.markedQuotesFromServer,d=f.dateFromServer,o(Date.now()),!p){e.next=19;break}if(!((l=Object.values(p).flat().length)>c)){e.next=13;break}u(p),a("Auto-Sync : Restored all marked quotes!",4e3),e.next=19;break;case 13:if(!(c>l)){e.next=19;break}if((d=new Date(d)).setHours(0,0,0,0),!(i>d)){e.next=19;break}return e.next=19,(0,s.yf)({userName:t,markedQuotes:n,openSnackbar:a});case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},4652:function(e,t,n){"use strict";n.d(t,{M_:function(){return c},yf:function(){return s},z9:function(){return i}});var r=n(4165),a=n(5861),u=n(4994),o=n(295),s=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userName,s=t.markedQuotes,t.openSnackbar,t.setSyncDate,e.next=3,(0,o.YM)((0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.P.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,markedQuotes:s,dateSynced:Date.now()})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,s,c,i,f,p,d,l,v,h,m,x;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.userName,t.markedQuotes,c=t.openSnackbar,t.setMarkedQuotes,e.next=3,(0,o.YM)((0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.P.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:s})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 3:return i=e.sent,e.next=6,i.json();case 6:if(i=e.sent,null===(n=i)||void 0===n||!n.ok){e.next=20;break}if(e.prev=8,l=null===(f=i)||void 0===f||null===(p=f.results)||void 0===p||null===(d=p[0])||void 0===d?void 0:d.markedQuotes,v=Object.values(l).flat().length,!(l&&v>0)){e.next=13;break}return e.abrupt("return",{markedQuotesFromServer:l,dateFromServer:null===(h=i)||void 0===h||null===(m=h.results)||void 0===m||null===(x=m[0])||void 0===x?void 0:x.dateSynced});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),c(JSON.stringify(e.t0));case 18:e.next=21;break;case 20:c(JSON.stringify(i.error));case 21:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n,s,c,i,f,p,d,l,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.apiCallType,c=t.userName,i=t.password,f=t.setIsLoggedIn,p=t.openSnackbar,d=t.setIsFetching,l=c.charAt(0).toUpperCase()+c.slice(1),d(!0),"login"!==s){e.next=9;break}return e.next=6,(0,o.YM)((0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.P.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:c,password:i})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 6:v=e.sent,e.next=12;break;case 9:return e.next=11,(0,o.YM)((0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.P.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:c,password:i})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 11:v=e.sent;case 12:return e.next=14,v.json();case 14:v=e.sent,d(!1),null!==(n=v)&&void 0!==n&&n.ok?(f(!0),p(l+" "+JSON.stringify(v.serverResponse))):p(JSON.stringify(v.error));case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2892:function(e,t,n){var r={"./BEAUVOIR.jpg":9073,"./BUKOWSKI.jpg":3792,"./CARL_JUNG.jpg":2063,"./FREUD.jpg":7393,"./MARK_TWAIN.jpg":5244,"./OSHO.jpg":6530,"./PETERSON.jpg":4500,"./RICKY_GERVAIS.png":8101,"./ROUSSEAU.jpg":6961};function a(e){var t=u(e);return n(t)}function u(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=u,e.exports=a,a.id=2892},9073:function(e,t,n){"use strict";e.exports=n.p+"static/media/BEAUVOIR.a37acf7026379a5c745f.jpg"},3792:function(e,t,n){"use strict";e.exports=n.p+"static/media/BUKOWSKI.3ed907dda532b04aa57a.jpg"},2063:function(e,t,n){"use strict";e.exports=n.p+"static/media/CARL_JUNG.12be5cab35dd5548822a.jpg"},7393:function(e,t,n){"use strict";e.exports=n.p+"static/media/FREUD.fa5e080abec887337460.jpg"},5244:function(e,t,n){"use strict";e.exports=n.p+"static/media/MARK_TWAIN.d04dc676af5be490f48a.jpg"},6530:function(e,t,n){"use strict";e.exports=n.p+"static/media/OSHO.45432ce7c4c8818ad65c.jpg"},4500:function(e,t,n){"use strict";e.exports=n.p+"static/media/PETERSON.f3968a4c45466650e225.jpg"},8101:function(e,t,n){"use strict";e.exports=n.p+"static/media/RICKY_GERVAIS.975580860d1cf99727fc.png"},6961:function(e,t,n){"use strict";e.exports=n.p+"static/media/ROUSSEAU.bd65f104307ba9482677.jpg"}}]);
//# sourceMappingURL=551.5992d2c5.chunk.js.map