"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[438],{2438:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var n=t(2791),o=t(3050),r=t(295),i=t(7971),a=t(2362),l=t(4609),d=t(5422),h=t(184);const c=n.lazy((()=>(0,r.YM)((()=>t.e(860).then(t.bind(t,9257)))))),u=n.lazy((()=>(0,r.YM)((()=>t.e(375).then(t.bind(t,4375)))))),p=n.lazy((()=>(0,r.YM)((()=>t.e(553).then(t.bind(t,2553)))))),g=n.lazy((()=>(0,r.YM)((()=>t.e(483).then(t.bind(t,6483))))));const m=function(e){let{listRef:s,setSearchText:t,searchText:r,start:m,end:x,setStart:b,setEnd:k,isFetching:M,setIsFetching:v,markedMode:j,setMarkedMode:S,markedQuotes:C,currentData:P,setCurrentData:F,currentPhilosopher:O,originalData:f,setCurrentPhilosopher:y,options:I,setOptions:D,darkMode:w,setDarkMode:N,setSorting:R,sorting:Z,isFetchingOptions:E,setIsFetchingOptions:L,originalOptions:H,setOriginalOptions:z,userName:Y,setUserName:_,setMarkedQuotes:Q,isLoggedIn:T,setIsLoggedIn:q,password:U,setPassword:V,scrollPosition:W,setRowsRendered:X,syncDate:A,setSyncDate:B,recentPhilosophers:G,setRecentPhilosophers:J,setLogs:K}=e;const $={start:m,end:x,setStart:b,setEnd:k,setSearchText:t,setCurrentData:F},[ee,se]=(0,n.useState)(!1);return(0,h.jsxs)("div",{className:d.Z.header,children:[(0,h.jsxs)("div",{className:d.Z.mobileColumn,children:[ee&&(0,h.jsx)(n.Suspense,{children:(0,h.jsx)(o.Z,{children:(0,h.jsx)(c,{markedMode:j,setMarkedMode:S,visible:ee,options:I,setOptions:D,toggleVisible:se,darkMode:w,setDarkMode:N,setSorting:R,sorting:Z,userName:Y,setUserName:_,setMarkedQuotes:Q,isLoggedIn:T,setIsLoggedIn:q,password:U,setPassword:V,setIsFetching:v})})}),(0,h.jsx)("div",{style:{paddingLeft:"0.5rem",paddingRight:"0.5rem"},onClick:()=>se(!ee),children:"\u2630"})]}),(0,h.jsx)("div",{className:d.Z.mobileColumn,children:(0,h.jsx)(a.R,{isMobile:!0,listRef:s,...$})}),(0,h.jsx)("div",{className:d.Z.mobileColumn,children:(0,h.jsx)("input",{name:"search-text","data-testid":"search-text",className:d.Z.wordSearch,type:"text",placeholder:"Search word",value:r,onChange:e=>{let{target:{value:s}}=e;return t(s)}})}),(0,h.jsx)("div",{className:d.Z.mobileColumn,children:(0,h.jsx)(i.Z,{recentPhilosophers:G,isMobile:!0,isFetchingOptions:E,options:I,currentPhilosopher:O,onFocusHandlerCallback:()=>(0,l.D)({options:I,setOptions:D,isLoggedIn:T,setSyncDate:B,isFetchingOptions:E,setIsFetchingOptions:L,originalOptions:H,setOriginalOptions:z,sorting:Z,syncDate:A,setLogs:K}),onChangeHandler:e=>{let{target:{value:n}}=e;return(0,l.H)({philosopher:n,listRef:s,setIsFetching:v,setStart:b,setEnd:k,setSearchText:t,setCurrentPhilosopher:y,setCurrentData:F,options:I,setOptions:D,scrollPosition:W,setRowsRendered:X,recentPhilosophers:G,setRecentPhilosophers:J})},darkMode:w})}),(0,h.jsx)(n.Suspense,{fallback:"",children:(0,h.jsxs)(u,{children:[(0,h.jsx)(g,{markedMode:j,found:null===P||void 0===P?void 0:P.length}),j&&(0,h.jsx)(p,{isFetching:M,currentData:P,originalData:f,markedQuotes:C,currentPhilosopher:O,isFetchingOptions:E})]})})]})}},7971:(e,s,t)=>{t.d(s,{Z:()=>d});var n=t(2791),o=t(5938),r=t(295),i=t(184);const a=n.lazy((()=>(0,r.YM)((()=>Promise.all([t.e(590),t.e(166),t.e(154),t.e(950)]).then(t.bind(t,9950)))))),l=n.lazy((()=>(0,r.YM)((()=>t.e(930).then(t.bind(t,7930)))))),d=e=>{var s,t;let{options:r,currentPhilosopher:d,onChangeHandler:h,onFocusHandlerCallback:c,isMobile:u,isFetchingOptions:p,recentPhilosophers:g,darkMode:m}=e;const x=[...r];null===g||void 0===g||null===(s=g.slice())||void 0===s||null===(t=s.reverse())||void 0===t||t.forEach(((e,s)=>{const t=x.findIndex((s=>s.value===e)),n=x.splice(t,1);x.unshift(n[0])}));return d&&(null===r||void 0===r?void 0:r.length)>0&&(u?(0,i.jsx)(n.Suspense,{fallback:"",children:d&&(0,i.jsx)(l,{recentPhilosophers:g,onFocusHandlerCallback:c,onChangeHandler:h,currentPhilosopher:d,value:(0,o.a2)(d,x),placeholder:"Search philosopher",options:x,isFetchingOptions:p,darkMode:m})}):(0,i.jsx)(n.Suspense,{fallback:"",children:(0,i.jsx)(a,{onFocusHandler:c,onChangeHandler:h,options:x,currentPhilosopher:d,isFetchingOptions:p})}))}},2362:(e,s,t)=>{t.d(s,{R:()=>l});var n=t(2791),o=t(295),r=t(5470),i=t(184);const a=n.lazy((()=>(0,o.YM)((()=>Promise.all([t.e(590),t.e(642)]).then(t.bind(t,2642))))));function l(e){let{start:s,end:t,setStart:n,setEnd:o,setSearchText:l,isMobile:d}=e;return d?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("label",{id:"labelEnd",className:r.Z.labelEnd,htmlFor:"end",children:["Words"," "]}),(0,i.jsx)("input",{id:"end",className:r.Z.smallInput,name:"end",type:"number",min:"0",value:t,onChange:e=>{let{target:{value:s}}=e;return o(s)}},"end")]}):(0,i.jsx)(a,{start:s,setStart:n,end:t,setEnd:o})}},5470:(e,s,t)=>{t.d(s,{Z:()=>n});const n={smallInput:"wordLengthSearch_smallInput__oXkfQ",labelEnd:"wordLengthSearch_labelEnd__dDyyn"}}}]);
//# sourceMappingURL=438.6e4349d3.chunk.js.map