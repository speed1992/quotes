"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[761],{761:function(e,s,n){n.r(s);var t=n(4652),a=n(184);s.default=function(e){var s=e.setUserName,n=e.userName,r=e.isLoggedIn,u=e.setIsLoggedIn,o=e.openSnackbar,c=(e.markedQuotes,e.setMarkedQuotes,e.password),i=e.setPassword,l=e.setIsFetching,g=n.charAt(0).toUpperCase()+n.slice(1);return(0,a.jsx)(a.Fragment,{children:r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"userName",children:["Hi ",g,"!"]}),(0,a.jsx)("button",{className:"menuBtn",onClick:function(){return u(!1)},children:"Logout"})]}):(0,a.jsxs)(a.Fragment,{children:["Username",(0,a.jsx)("input",{type:"text",className:"userInput",onChange:function(e){return s(e.target.value)},value:n}),"Password",(0,a.jsx)("input",{type:"password",className:"userInput",onChange:function(e){return i(e.target.value)},value:c}),(0,a.jsx)("button",{className:"menuBtn",onClick:function(){return(0,t.z9)({apiCallType:"login",userName:n,password:c,setIsLoggedIn:u,openSnackbar:o,setIsFetching:l})},children:"Login"}),(0,a.jsx)("button",{className:"menuBtn",onClick:function(){return(0,t.z9)({apiCallType:"register",userName:n,password:c,setIsLoggedIn:u,openSnackbar:o,setIsFetching:l})},children:"Register"})]})})}}}]);
//# sourceMappingURL=761.a7206ed1.chunk.js.map