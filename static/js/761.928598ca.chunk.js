"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[761],{761:function(e,n,t){t.r(n);var r=t(9439),s=t(2791),a=t(4652),u=t(184);n.default=function(e){var n=e.setUserName,t=e.userName,o=e.setIsLoggedIn,c=e.openSnackbar,p=(0,s.useState)(""),i=(0,r.Z)(p,2),f=i[0],d=i[1];return(0,u.jsxs)(u.Fragment,{children:["Username",(0,u.jsx)("input",{type:"text",className:"userInput",onChange:function(e){return n(e.target.value)},value:t}),"Password",(0,u.jsx)("input",{type:"password",className:"userInput",onChange:function(e){return d(e.target.value)},value:f}),(0,u.jsx)("button",{className:"menuBtn",onClick:function(){return(0,a.z9)({apiCallType:"login",userName:t,password:f,setIsLoggedIn:o,openSnackbar:c})},children:"Login"}),(0,u.jsx)("button",{className:"menuBtn",onClick:function(){return(0,a.z9)({apiCallType:"register",userName:t,password:f,setIsLoggedIn:o,openSnackbar:c})},children:"Register"})]})}},4652:function(e,n,t){t.d(n,{yf:function(){return o},M_:function(){return c},z9:function(){return p}});var r=t(5861),s=t(4687),a=t.n(s),u=t(295),o=function(){var e=(0,r.Z)(a().mark((function e(n){var t,s,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.userName,s=n.markedQuotes,o=n.openSnackbar,e.next=3,(0,u.YM)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-backend.vercel.app/api/markedQuotes/",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:s,dateSynced:Date.now()})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 3:return c=e.sent,e.next=6,c.json();case 6:c=e.sent,o(JSON.stringify(c));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(n){var t,s,o,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.userName,n.markedQuotes,s=n.openSnackbar,o=n.setMarkedQuotes,"philosophizetruth"!==t){e.next=10;break}return e.next=4,(0,u.YM)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-backend.vercel.app/api/markedQuotes/",{method:"get",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 4:return c=e.sent,e.next=7,c.json();case 7:c=e.sent,o(c[0].markedQuotes),s("Restored data",2e3);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t,s,o,c,p,i,f,d;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=n.apiCallType,o=n.userName,c=n.password,p=n.setIsLoggedIn,i=n.openSnackbar,f=o.charAt(0).toUpperCase()+o.slice(1),"login"!==s){e.next=8;break}return e.next=5,(0,u.YM)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-backend.vercel.app/api/user/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o,password:c})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 5:d=e.sent,e.next=11;break;case 8:return e.next=10,(0,u.YM)((0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-backend.vercel.app/api/user/create",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o,password:c})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 10:d=e.sent;case 11:return e.next=13,d.json();case 13:d=e.sent,null!==(t=d)&&void 0!==t&&t.ok?(p(!0),i(f+" "+JSON.stringify(d.serverResponse))):i(JSON.stringify(d.error));case 15:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=761.928598ca.chunk.js.map