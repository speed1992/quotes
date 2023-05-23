"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[192],{3192:function(e,n,t){t.r(n);var r=t(4652),s=t(184);n.default=function(e){var n=e.userName,t=e.markedQuotes,a=e.openSnackbar,u=e.setMarkedQuotes,o=e.setIsLoggedIn,c=n.charAt(0).toUpperCase()+n.slice(1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"userName",children:["Hi ",c,"!"]}),(0,s.jsx)("button",{className:"menuBtn",onClick:function(){return(0,r.yf)({userName:n,markedQuotes:t,openSnackbar:a})},children:"Backup"}),(0,s.jsx)("button",{className:"menuBtn",onClick:function(){return(0,r.M_)({userName:n,markedQuotes:t,openSnackbar:a,setMarkedQuotes:u})},children:"Restore"}),(0,s.jsx)("button",{className:"menuBtn",onClick:function(){return o(!1)},children:"Logout"})]})}},4652:function(e,n,t){t.d(n,{yf:function(){return o},M_:function(){return c},z9:function(){return p}});var r=t(5861),s=t(4687),a=t.n(s),u=t(295),o=function(){var e=(0,r.Z)(a().mark((function e(n){var t,s,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.userName,s=n.markedQuotes,o=n.openSnackbar,e.next=3,(0,u.YM)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-backend.vercel.app/api/markedQuotes/",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:s,dateSynced:Date.now()})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 3:return c=e.sent,e.next=6,c.json();case 6:c=e.sent,o(JSON.stringify(c));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(n){var t,s,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.userName,n.markedQuotes,t=n.openSnackbar,s=n.setMarkedQuotes,e.next=3,(0,u.YM)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-backend.vercel.app/api/markedQuotes/",{method:"get",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 3:return o=e.sent,e.next=6,o.json();case 6:o=e.sent,s(o[0].markedQuotes),t("Restored data",2e3);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t,s,o,c,p,i,d,f;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=n.apiCallType,o=n.userName,c=n.password,p=n.setIsLoggedIn,i=n.openSnackbar,d=o.charAt(0).toUpperCase()+o.slice(1),"login"!==s){e.next=8;break}return e.next=5,(0,u.YM)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-backend.vercel.app/api/user/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o,password:c})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 5:f=e.sent,e.next=11;break;case 8:return e.next=10,(0,u.YM)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-backend.vercel.app/api/user/create",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o,password:c})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 10:f=e.sent;case 11:return e.next=13,f.json();case 13:f=e.sent,null!==(t=f)&&void 0!==t&&t.ok?(p(!0),i(d+" "+JSON.stringify(f.serverResponse))):i(JSON.stringify(f.error));case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=192.b29d4783.chunk.js.map