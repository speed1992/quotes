"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[63],{2438:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var n=t(2791),r=t(3050),a=t(295),o=t(7971),i=t(2362),l=t(4609),d=t(5422),c=t(184);const h=n.lazy((()=>(0,a.YM)((()=>t.e(635).then(t.bind(t,9257)))))),u=n.lazy((()=>(0,a.YM)((()=>t.e(0).then(t.bind(t,4375)))))),p=n.lazy((()=>(0,a.YM)((()=>t.e(852).then(t.bind(t,2553)))))),g=n.lazy((()=>(0,a.YM)((()=>t.e(30).then(t.bind(t,6483))))));const m=function(e){let{listRef:s,setSearchText:t,searchText:a,start:m,end:b,setStart:x,setEnd:M,isFetching:k,setIsFetching:v,markedMode:j,setMarkedMode:F,markedQuotes:S,currentData:C,setCurrentData:P,currentPhilosopher:O,originalData:I,setCurrentPhilosopher:f,options:y,setOptions:Z,darkMode:w,setDarkMode:D,setSorting:N,sorting:E,isFetchingOptions:L,setIsFetchingOptions:R,originalOptions:H,setOriginalOptions:_,userName:z,setUserName:Y,setMarkedQuotes:Q,isLoggedIn:T,setIsLoggedIn:U,password:q,setPassword:V,scrollPosition:W,setRowsRendered:A,syncDate:B,setSyncDate:G,recentPhilosophers:J,setRecentPhilosophers:K,setLogs:X}=e;const[$,ee]=(0,n.useState)(!1);return(0,c.jsxs)("div",{className:d.Z.header,children:[(0,c.jsxs)("div",{className:d.Z.mobileColumn,children:[$&&(0,c.jsx)(n.Suspense,{children:(0,c.jsx)(r.Z,{children:(0,c.jsx)(h,{markedMode:j,setMarkedMode:F,visible:$,options:y,setOptions:Z,toggleVisible:ee,darkMode:w,setDarkMode:D,setSorting:N,sorting:E,userName:z,setUserName:Y,setMarkedQuotes:Q,isLoggedIn:T,setIsLoggedIn:U,password:q,setPassword:V,setIsFetching:v})})}),(0,c.jsx)("div",{style:{paddingLeft:"0.5rem",paddingRight:"0.5rem"},onClick:()=>ee(!$),children:"\u2630"})]}),(0,c.jsx)("div",{className:d.Z.mobileColumn,children:(0,c.jsx)(i.R,{label:!0,isStartFeatureEnabled:!1})}),(0,c.jsx)("div",{className:d.Z.mobileColumn,children:(0,c.jsx)("input",{name:"search-text","data-testid":"search-text",className:d.Z.wordSearch,type:"text",placeholder:"Search word",value:a,onChange:e=>{let{target:{value:s}}=e;return t(s)}})}),(0,c.jsx)("div",{className:d.Z.mobileColumn,children:(0,c.jsx)(o.Z,{recentPhilosophers:J,isMobile:!0,isFetchingOptions:L,options:y,currentPhilosopher:O,onFocusHandlerCallback:()=>(0,l.D)({options:y,setOptions:Z,isLoggedIn:T,setSyncDate:G,isFetchingOptions:L,setIsFetchingOptions:R,originalOptions:H,setOriginalOptions:_,sorting:E,syncDate:B,setLogs:X}),onChangeHandler:e=>{let{target:{value:n}}=e;return(0,l.H)({philosopher:n,listRef:s,setIsFetching:v,setStart:x,setEnd:M,setSearchText:t,setCurrentPhilosopher:f,setCurrentData:P,options:y,setOptions:Z,scrollPosition:W,setRowsRendered:A,recentPhilosophers:J,setRecentPhilosophers:K})},darkMode:w})}),(0,c.jsx)(n.Suspense,{fallback:"",children:(0,c.jsxs)(u,{children:[(0,c.jsx)(g,{markedMode:j,found:null===C||void 0===C?void 0:C.length}),j&&(0,c.jsx)(p,{isFetching:k,currentData:C,originalData:I,markedQuotes:S,currentPhilosopher:O,isFetchingOptions:L})]})})]})}},7971:(e,s,t)=>{t.d(s,{Z:()=>d});var n=t(2791),r=t(5938),a=t(295),o=t(184);const i=n.lazy((()=>(0,a.YM)((()=>Promise.all([t.e(590),t.e(166),t.e(154),t.e(95)]).then(t.bind(t,9950)))))),l=n.lazy((()=>(0,a.YM)((()=>t.e(227).then(t.bind(t,7930)))))),d=e=>{var s,t;let{options:a,currentPhilosopher:d,onChangeHandler:c,onFocusHandlerCallback:h,isMobile:u,isFetchingOptions:p,recentPhilosophers:g,darkMode:m}=e;const b=[...a];null===g||void 0===g||null===(s=g.slice())||void 0===s||null===(t=s.reverse())||void 0===t||t.forEach(((e,s)=>{const t=b.findIndex((s=>s.value===e)),n=b.splice(t,1);b.unshift(n[0])}));return d&&(null===a||void 0===a?void 0:a.length)>0&&(u?(0,o.jsx)(n.Suspense,{fallback:"",children:d&&(0,o.jsx)(l,{recentPhilosophers:g,onFocusHandlerCallback:h,onChangeHandler:c,currentPhilosopher:d,value:(0,r.a2)(d,b),placeholder:"Search philosopher",options:b,isFetchingOptions:p,darkMode:m})}):(0,o.jsx)(n.Suspense,{fallback:"",children:(0,o.jsx)(i,{onFocusHandler:h,onChangeHandler:c,options:b,currentPhilosopher:d,isFetchingOptions:p})}))}},2362:(e,s,t)=>{t.d(s,{R:()=>d});var n=t(2791),r=t(295),a=t(8614),o=t(5470),i=t(184);const l=n.lazy((()=>(0,r.YM)((()=>Promise.all([t.e(590),t.e(157)]).then(t.bind(t,2642))))));function d(e){let{isMobile:s=!0,isStartFeatureEnabled:t=!1,label:n=!1}=e;const{start:r,end:d,setStart:c,setEnd:h}=(0,a.t)();return s?(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsxs)("label",{id:"labelEnd",className:o.Z.labelEnd,htmlFor:"end",children:["Words"," "]}),t&&(0,i.jsx)("input",{id:"start",className:o.Z.smallInput,name:"start",type:"number",min:"0",value:r,onChange:e=>{let{target:{value:s}}=e;return c(s)}},"start"),(0,i.jsx)("input",{id:"end",className:"".concat(o.Z.smallInput," ").concat(t?o.Z.endMargin:""),name:"end",type:"number",min:"0",value:d,onChange:e=>{let{target:{value:s}}=e;return h(s)}},"end")]}):(0,i.jsx)(l,{start:r,setStart:c,end:d,setEnd:h})}},5470:(e,s,t)=>{t.d(s,{Z:()=>n});const n={smallInput:"wordLengthSearch_smallInput__FVbpF",labelEnd:"wordLengthSearch_labelEnd__xIH1U",endMargin:"wordLengthSearch_endMargin__y2fkC"}}}]);
//# sourceMappingURL=MobileHeader.b93390f4.chunk.js.map