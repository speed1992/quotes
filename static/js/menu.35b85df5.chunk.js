"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[860],{6466:function(e,n,t){t.d(n,{Z:function(){return r}});t(2791);var i="small-loader_loader__Bfz9o",s="small-loader_darkTheme__xBV+h",o=t(184),r=function(e){var n=e.darkMode;return(0,o.jsx)("span",{className:"".concat(i," ").concat(n?s:""),children:" "})}},9065:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var i=t(885),s=t(2791),o=t(8687),r=t(303),a=t(4755),l=t(6466),c=t(295),d=t(1930),u=t(4891),h="mobile-menu_darkTheme__7nZ95",m="mobile-menu_lightTheme__benFJ",p="mobile-menu_slide_menu__r8BpI",v="mobile-menu_voiceSpeed__UVmaK",k="mobile-menu_voices__MVFVx",f="mobile-menu_backupNote__5AAxy",x="mobile-menu_textCenter__Yzz5o",b="mobile-menu_paddingTop__XF4-r",g=t(184),_=s.lazy((function(){return(0,c.YM)((function(){return t.e(777).then(t.bind(t,7777))}))})),j=s.lazy((function(){return(0,c.YM)((function(){return t.e(994).then(t.bind(t,7581))}))})),y=s.lazy((function(){return(0,c.YM)((function(){return t.e(209).then(t.bind(t,7209))}))}));var M=function(e){var n=e.markedMode,t=e.setMarkedMode,c=e.visible,M=e.toggleVisible,C=e.darkMode,I=e.setDarkMode,N=e.setSorting,w=e.sorting,S=e.userName,V=e.setUserName,F=e.setMarkedQuotes,P=e.isLoggedIn,T=e.setIsLoggedIn,z=e.password,Z=e.setPassword,D=e.setIsFetching,L=(0,o.v9)((function(e){return e.philosophersData.voiceSpeed})),Y=(0,o.v9)((function(e){return e.philosophersData.voiceType})),A=(0,o.v9)((function(e){return e.philosophersData.markedQuotes})),Q=(0,s.useState)([]),q=(0,i.Z)(Q,2),B=q[0],U=q[1],R=(0,a.Z)(),E=(0,i.Z)(R,1)[0],J=(0,o.I0)(),K=function(e){e.target.id===d.y?N(d.y):N(d.P)};return(0,s.useEffect)((function(){new Promise((function(e){var n,t=window.speechSynthesis;n=setInterval((function(){0!==t.getVoices().length&&(e(t.getVoices()),clearInterval(n))}),10)})).then((function(e){return U(e)}))}),[]),(0,g.jsx)(y,{callback:(0,s.useCallback)((function(){return M(!1)}),[M]),children:(0,g.jsxs)("ul",{className:"".concat(p," ").concat(C?h:m),id:"slide_menu",style:{display:c?"block":"none"},children:[(0,g.jsxs)("li",{children:["Sort philosophers",(0,g.jsxs)("div",{children:[(0,g.jsx)("input",{type:"radio",id:d.y,name:"sortType",onClick:K,defaultChecked:w===d.y}),(0,g.jsx)("label",{htmlFor:d.y,children:"Latest"})]}),(0,g.jsxs)("div",{children:[(0,g.jsx)("input",{type:"radio",id:d.P,name:"sortType",onClick:K,defaultChecked:w===d.P}),(0,g.jsx)("label",{htmlFor:d.P,children:"Alphabetical"})]})]},"1"),(0,g.jsxs)("li",{children:["Marked Mode",(0,g.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){var n=e.target.checked;return t(n)}})]},"2"),(0,g.jsxs)("li",{children:["Dark Mode",(0,g.jsx)("input",{type:"checkbox",checked:C,onChange:function(e){var n=e.target.checked;return I(n)}})]},"3"),(0,g.jsxs)("li",{children:["Voice Speed[1-20]",(0,g.jsx)("input",{onChange:function(e){return J((0,u.u8)(e.target.value/10))},className:v,type:"number",value:L?10*L:""})]},"4"),(0,g.jsxs)("li",{children:[(0,g.jsx)("div",{children:"Available Voices"}),0!==(null===B||void 0===B?void 0:B.length)?(0,g.jsx)("select",{onChange:function(e){var n;J((0,u.g6)(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value)),speechSynthesis.cancel()},className:k,value:Y,children:null===B||void 0===B?void 0:B.map((function(e,n){return(0,g.jsx)("option",{value:n,children:null===e||void 0===e?void 0:e.name},null===e||void 0===e?void 0:e.name)}))}):(0,g.jsx)("div",{className:"".concat(x," ").concat(b),children:(0,g.jsx)(l.Z,{darkMode:!0})})]},"5"),(0,g.jsx)("li",{children:(0,g.jsx)("button",{onClick:(0,s.useCallback)((function(){return J((0,r.Mk)("Report"))}),[]),children:"Open Report"})},"6"),(0,g.jsxs)("li",{children:[(0,g.jsx)(j,{setUserName:V,userName:S,openSnackbar:E,isLoggedIn:P,setIsLoggedIn:T,setMarkedQuotes:F,markedQuotes:A,password:z,setPassword:Z,setIsFetching:D}),!P&&(0,g.jsx)("div",{className:f,children:"You can login to backup your marked quotes in database in case browser data gets deleted."})]},"7"),(0,g.jsx)("li",{children:(0,g.jsx)(_,{})},"8")]})})}}}]);
//# sourceMappingURL=menu.35b85df5.chunk.js.map