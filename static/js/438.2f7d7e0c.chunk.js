"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[438],{2438:function(e,n,t){t.r(n);var s=t(1413),r=t(9439),i=t(2791),o=t(3050),a=t(295),l=t(7971),d=t(2362),c=t(2687),u=t(5422),h=t(184),p=i.lazy((function(){return(0,a.YM)((function(){return t.e(65).then(t.bind(t,9065))}))})),g=i.lazy((function(){return(0,a.YM)((function(){return t.e(375).then(t.bind(t,4375))}))})),f=i.lazy((function(){return(0,a.YM)((function(){return t.e(553).then(t.bind(t,2553))}))})),m=i.lazy((function(){return(0,a.YM)((function(){return t.e(483).then(t.bind(t,6483))}))}));n.default=function(e){var n=e.listRef,t=e.setSearchText,a=e.searchText,x=e.start,b=e.end,v=e.setStart,k=e.setEnd,M=e.isFetching,j=e.setIsFetching,S=e.markedMode,C=e.setMarkedMode,P=e.markedQuotes,F=e.currentData,O=e.setCurrentData,y=e.currentPhilosopher,I=e.originalData,D=e.setCurrentPhilosopher,Z=e.options,w=e.setOptions,N=e.darkMode,R=e.setDarkMode,E=e.setSorting,H=e.sorting,L=e.isFetchingOptions,z=e.setIsFetchingOptions,Y=e.originalOptions,_=e.setOriginalOptions,Q=e.userName,T=e.setUserName,q=e.setMarkedQuotes,U=e.isLoggedIn,V=e.setIsLoggedIn,W=e.password,X=e.setPassword,A=e.scrollPosition,B=e.setRowsRendered,G=e.syncDate,J=e.setSyncDate,K=e.recentPhilosophers,$=e.setRecentPhilosophers,ee={start:x,end:b,setStart:v,setEnd:k,setSearchText:t,setCurrentData:O},ne=(0,i.useState)(!1),te=(0,r.Z)(ne,2),se=te[0],re=te[1];return(0,h.jsxs)("div",{className:u.Z.header,children:[(0,h.jsxs)("div",{className:u.Z.mobileColumn,children:[se&&(0,h.jsx)(i.Suspense,{children:(0,h.jsx)(o.Z,{children:(0,h.jsx)(p,{markedMode:S,setMarkedMode:C,visible:se,options:Z,setOptions:w,toggleVisible:re,darkMode:N,setDarkMode:R,setSorting:E,sorting:H,userName:Q,setUserName:T,setMarkedQuotes:q,isLoggedIn:U,setIsLoggedIn:V,password:W,setPassword:X,setIsFetching:j})})}),(0,h.jsx)("div",{style:{paddingLeft:"0.5rem",paddingRight:"0.5rem"},onClick:function(){return re(!se)},children:"\u2630"})]}),(0,h.jsx)("div",{className:u.Z.mobileColumn,children:(0,h.jsx)(d.R,(0,s.Z)({isMobile:!0,listRef:n},ee))}),(0,h.jsx)("div",{className:u.Z.mobileColumn,children:(0,h.jsx)("input",{name:"search-text","data-testid":"search-text",className:u.Z.wordSearch,type:"text",placeholder:"Search word",value:a,onChange:function(e){var n=e.target.value;return t(n)}})}),(0,h.jsx)("div",{className:u.Z.mobileColumn,children:(0,h.jsx)(l.Z,{recentPhilosophers:K,isMobile:!0,isFetchingOptions:L,options:Z,currentPhilosopher:y,onFocusHandlerCallback:function(){return(0,c.D)({options:Z,setOptions:w,isLoggedIn:U,setSyncDate:J,isFetchingOptions:L,setIsFetchingOptions:z,originalOptions:Y,setOriginalOptions:_,sorting:H,syncDate:G})},onChangeHandler:function(e){var s=e.target.value;return(0,c.H)({philosopher:s,listRef:n,setIsFetching:j,setStart:v,setEnd:k,setSearchText:t,setCurrentPhilosopher:D,setCurrentData:O,options:Z,setOptions:w,scrollPosition:A,setRowsRendered:B,recentPhilosophers:K,setRecentPhilosophers:$})},darkMode:N})}),(0,h.jsx)(i.Suspense,{fallback:"",children:(0,h.jsxs)(g,{children:[(0,h.jsx)(m,{markedMode:S,found:F.length}),S&&(0,h.jsx)(f,{isFetching:M,currentData:F,originalData:I,markedQuotes:P,currentPhilosopher:y,isFetchingOptions:L})]})})]})}},7971:function(e,n,t){var s=t(3433),r=t(2791),i=t(5938),o=t(295),a=t(184),l=r.lazy((function(){return(0,o.YM)((function(){return Promise.all([t.e(533),t.e(637),t.e(272),t.e(950)]).then(t.bind(t,9950))}))})),d=r.lazy((function(){return(0,o.YM)((function(){return t.e(930).then(t.bind(t,7930))}))}));n.Z=function(e){var n,t,o=e.options,c=e.currentPhilosopher,u=e.onChangeHandler,h=e.onFocusHandlerCallback,p=e.isMobile,g=e.isFetchingOptions,f=e.recentPhilosophers,m=e.darkMode,x=(0,s.Z)(o);null===f||void 0===f||null===(n=f.slice())||void 0===n||null===(t=n.reverse())||void 0===t||t.forEach((function(e,n){var t=x.findIndex((function(n){return n.value===e})),s=x.splice(t,1);x.unshift(s[0])}));return c&&(null===o||void 0===o?void 0:o.length)>0&&(p?(0,a.jsx)(r.Suspense,{fallback:"",children:c&&(0,a.jsx)(d,{recentPhilosophers:f,onFocusHandlerCallback:h,onChangeHandler:u,currentPhilosopher:c,value:(0,i.a2)(c,x),placeholder:"Search philosopher",options:x,isFetchingOptions:g,darkMode:m})}):(0,a.jsx)(r.Suspense,{fallback:"",children:(0,a.jsx)(l,{onFocusHandler:h,onChangeHandler:u,options:x,currentPhilosopher:c,isFetchingOptions:g})}))}},2362:function(e,n,t){t.d(n,{R:function(){return l}});var s=t(2791),r=t(295),i=t(5470),o=t(184),a=s.lazy((function(){return(0,r.YM)((function(){return Promise.all([t.e(533),t.e(580)]).then(t.bind(t,2642))}))}));function l(e){var n=e.start,t=e.end,s=e.setStart,r=e.setEnd;e.setSearchText;return e.isMobile?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("label",{id:"labelEnd",className:i.Z.labelEnd,htmlFor:"end",children:["Words"," "]}),(0,o.jsx)("input",{id:"end",className:i.Z.smallInput,name:"end",type:"number",min:"0",value:t,onChange:function(e){var n=e.target.value;return r(n)}},"end")]}):(0,o.jsx)(a,{start:n,setStart:s,end:t,setEnd:r})}},5470:function(e,n){n.Z={smallInput:"wordLengthSearch_smallInput__oXkfQ",labelEnd:"wordLengthSearch_labelEnd__dDyyn"}}}]);
//# sourceMappingURL=438.2f7d7e0c.chunk.js.map