(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[703],{4545:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var o=r(3003),s=r(3110);const n=()=>{const e=(0,o.wA)();return[function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1400;e((0,s.tY)(t)),setTimeout((()=>e((0,s.tY)(""))),r)}]}},6228:(e,t,r)=>{"use strict";r.d(t,{XY:()=>s,b0:()=>o,gZ:()=>n});const o=e=>"undefined"===typeof e,s=e=>0===Object.values(e).length&&e.constructor===Object;function n(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},8839:(e,t,r)=>{"use strict";r.d(t,{g:()=>s});var o=r(4194);const s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e=new Date(e);const s=new Date,n=s.getTime()-e.getTime(),i=Math.floor(n/864e5);return r&&(0,o.n)("dev")&&(null===r||void 0===r||r("inside isCacheExpired "+s),null===r||void 0===r||r("startDate "+e),null===r||void 0===r||r("endDate "+s),null===r||void 0===r||r("dateDifferenceInMilliSeconds endDate.getTime() - startDate.getTime() "+n),null===r||void 0===r||r("dateDifference In hours "+Math.floor(n/36e5%24)),null===r||void 0===r||r("dateDifferenceInDays "+i),null===r||void 0===r||r("dateDifferenceInDays >= cacheTime "+i>=t),null===r||void 0===r||r("cacheTime "+t)),i>=t}},7442:(e,t,r)=>{"use strict";r.d(t,{v:()=>s});r(5043);function o(e,t){const r=localStorage.getItem(e),o=JSON.parse(r);return void 0===o||"undefined"===o||"null"===o||null===o?t:o}const s=e=>{let{index:t,currentPhilosopher:r,markedMode:s,markedQuotes:n={},setMarkedQuotes:i,currentData:a,setCurrentData:l}=e,u=JSON.parse(JSON.stringify(n)),d=[];d=o(`${r}-MARKED_AS_READ`,[]),n&&void 0!==n[r]&&(d=[...d,...n[r]]),d=[...new Set(d)],t&&d.push(t),u[r]=d,i(u);const c=a.filter(((e,t)=>{let{id:r}=e;return-1===d.indexOf(r)}));l(JSON.parse(JSON.stringify(c)))}},4194:(e,t,r)=>{"use strict";function o(e){let t=function(e){e=e.split("+").join(" ");for(var t,r={},o=/[?&]?([^=]+)=([^&]*)/g;t=o.exec(e);)r[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return r}(document.location.search),r=t[e]?t[e].toLowerCase():null;return!("false"!==r&&!r)}r.d(t,{n:()=>o})},5795:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$P:()=>search,Fr:()=>isMobile,NB:()=>scrollToMemorizedRow,qf:()=>scrollToQuoteId,xl:()=>isDesktop});var _components_organisms_home_quotes_list_utils_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5499);const scrollToFirstRow=e=>{e.current&&e.current.scrollToRow(0)},scrollToMemorizedRow=(e,t,r)=>{(null===r||void 0===r?void 0:r.length)>0&&e.current&&(void 0!==t&&"undefined"!==t&&t&&t>0?e.current.scrollToRow(t):scrollToFirstRow(e))},scrollToQuoteId=(e,t,r,o)=>{const s=t[o];if((null===r||void 0===r?void 0:r.length)>0&&e.current)if(void 0!==s&&"undefined"!==s&&s&&s>0){const t=r.findIndex((e=>{let{id:t}=e;return t===s}));t>-1&&e.current.scrollToRow(t)}else scrollToFirstRow(e)},search=_ref2=>{let{searchText:searchText,start:start,end:end,setCurrentData:setCurrentData,searchFilters:searchFilters,markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes,currentData:currentData,currentPhilosopher:currentPhilosopher}=_ref2;return new Promise((resolve=>{if(void 0!==currentData){let worker;window.Worker?worker=new Worker(new URL(__webpack_require__.p+__webpack_require__.u(480),__webpack_require__.b)):alert("Your browser doesn't support web workers."),"string"===typeof start&&""===start.trim()&&(start=0),worker.postMessage({currentData:currentData,searchText:searchText,searchFilters:searchFilters,end:end,start:start}),worker.onmessage=event=>{var _worker;const filteredQuotesFromWorker=JSON.parse(eval(`(${JSON.stringify(event.data)})`));null===(_worker=worker)||void 0===_worker||_worker.terminate(),(0,_components_organisms_home_quotes_list_utils_utils__WEBPACK_IMPORTED_MODULE_0__.cJ)({currentData:filteredQuotesFromWorker,setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher},{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}),resolve()}}}))},isMobile=()=>window.innerWidth<=600,isDesktop=()=>window.innerWidth>=600},1342:(e,t,r)=>{"use strict";r.d(t,{g:()=>m,T:()=>_});var o=r(8380),s=r(465);const n=15;var i=r(7308),a=r(1589),l=r(8839),u=r(2654),d=r(951),c=r(1866);const p=e=>{let{newOptions:t,oldOptions:r,oldOriginalOptions:o,setOptions:s,setOriginalOptions:n,sorting:a}=e;const l=[...d.Y,...t];let p=((e,t)=>{let r=JSON.parse(JSON.stringify(t));return r.forEach(((t,o)=>{const s=(0,i.bQ)(t.value,e);-1!==s&&(r[o].quotes=e[s].quotes)})),r})(r,[...l]);a===u.k?p=(0,c.Kf)(l,p):a===u.X&&(p=(0,c.XB)(p)),s([...p]),n(l)};var f=r(4194),h=r(5499);function _(e){let{philosopher:t,setIsFetching:r,setCurrentPhilosopher:o,currentData:s,setCurrentData:a,options:l,setOptions:u,markedMode:d,markedQuotes:c,setMarkedQuotes:p,recentPhilosophers:f,setRecentPhilosophers:_}=e;function m(){f&&_([...new Set([t,...f.slice(0,n-1)])]),o(t),(0,h.cJ)({philosopher:t,currentData:s,setCurrentData:a,options:l},{markedMode:d,markedQuotes:c,setMarkedQuotes:p}),r(!1)}r(!0),(0,i.$)({philosopher:t,options:l})?m():(0,i.rd)(t,{options:l,setOptions:u},[]).then(m)}const m=async e=>{let{options:t,setOptions:r,setSyncDate:n,setIsFetchingOptions:i,originalOptions:u,setOriginalOptions:d,sorting:c,syncDate:h,setLogs:_}=e;if((0,f.n)("dev")){const e=new Date;null===_||void 0===_||_("inside onFocusHandler"),null===_||void 0===_||_("isCacheExpired(syncDate, CACHE_IN_DAYS.ASSET_GRAPH, setLogs) || options.length === 1 "+(0,l.g)(h,s.K,_)||0),null===_||void 0===_||_("options.length "+t.length),null===_||void 0===_||_("current time "+e),null===_||void 0===_||_("syncDate "+new Date(h))}if((0,l.g)(h,s.K,_)||1===t.length){null===i||void 0===i||i(!0);let e=await(0,a.Uw)((()=>fetch(o.S.STATIC_DATA.STATIC_ASSET_GRAPH)));e=await e.json(),(0,f.n)("dev")&&(null===_||void 0===_||_("api response "+e)),p({newOptions:e,oldOptions:t,oldOriginalOptions:u,setOptions:r,setOriginalOptions:d,sorting:c}),null===i||void 0===i||i(!1),null===n||void 0===n||n(Date.now())}}},2654:(e,t,r)=>{"use strict";r.d(t,{X:()=>s,k:()=>o});const o="latest",s="alphabetical"},5131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>D});var o=r(5043),s=r(9108),n=r(7308),i=r(1589);var a=r(579);const l=o.lazy((()=>(0,i.Uw)((()=>Promise.all([r.e(816),r.e(580)]).then(r.bind(r,3076))))));function u(e){const{currentPhilosopher:t,setCurrentData:r,options:s,setOptions:i,setIsFetching:u,isFetching:d}=e;return(0,o.useEffect)((()=>{u(!0),function(e,t,r,o,s){try{void 0!==e&&((0,n.$)({philosopher:e,options:t})||(0,n.rd)(e,{options:t,setOptions:r},[o])),s(!1)}catch(i){console.log(i)}}(t,s,i,r,u)}),[t]),!d&&(0,a.jsx)(l,{...e})}const d="home-page_content__uep2J",c="home-page_contentMinMode__8Ozpx",p="home-page_homepage__Is0Mv";var f=r(3003),h=r(4545),_=r(465),m=r(8839),g=r(5795),v=r(1342),y=r(5499),w=r(5630),b=r(951),k=r(1866);const O=()=>{var e,t;const{searchText:r,start:s,end:i,currentPhilosopher:a,currentData:l,options:u,searchFilters:d,markedMode:c,markedQuotes:p}=(0,f.d4)((e=>null===e||void 0===e?void 0:e.philosophersData)),h=(0,f.wA)(),_=(0,o.useCallback)((e=>h((0,w.E6)(e))),[]),m=(0,o.useCallback)((e=>h((0,w.KY)(e))),[]),v=(0,o.useMemo)((()=>(0,n.$)({philosopher:a,options:u})),[a,u]);(0,o.useEffect)((()=>{v&&async function(e,t){let{searchText:r,start:o,end:s,currentPhilosopher:n,originalData:i,setCurrentData:a,searchFilters:l}=e,{markedMode:u=!1,markedQuotes:d,setMarkedQuotes:c}=t;await(0,g.$P)({searchText:r,start:o,end:s,currentData:i,searchFilters:l,markedMode:u,markedQuotes:d,setMarkedQuotes:c,setCurrentData:a,originalData:i,currentPhilosopher:n})}({searchText:r,start:s,end:i,currentPhilosopher:a,currentData:l,originalData:v,setCurrentData:_,options:u,searchFilters:d},{markedMode:c,markedQuotes:p,setMarkedQuotes:m})}),[s,i,r,c,a,null===p||void 0===p||null===(e=p[a])||void 0===e||null===(t=e.quotes)||void 0===t?void 0:t.length,null===d||void 0===d?void 0:d.exclusions,null===d||void 0===d?void 0:d.inclusions])};var x=r(2654);const S=o.lazy((()=>(0,i.Uw)((()=>r.e(326).then(r.bind(r,9061)))))),T=o.lazy((()=>(0,i.Uw)((()=>r.e(456).then(r.bind(r,2836)))))),D=()=>{const{options:e,sorting:t,setSorting:r}=function(){const e=(0,f.wA)(),t=(0,f.d4)((e=>e.philosophersData.originalOptions)),r=(0,f.d4)((e=>e.philosophersData.options)),s=(0,f.d4)((e=>e.philosophersData.sorting)),n=(0,o.useCallback)((t=>e((0,w.$1)(t))),[]),i=(0,o.useRef)(!1);return(0,o.useEffect)((()=>{if(i.current){const o=t=>e((0,w.Xi)(t));let n=[];t.length>1&&(s===x.k?(n=(0,k.Kf)(t,r),o(n)):s===x.X&&(n=(0,k.XB)(r),o(n)))}else i.current=!0}),[s]),{sorting:s,setSorting:n,options:r,originalOptions:t}}();let i=function(){const[e]=(0,h.A)(),t=(0,o.useRef)(),r=(0,f.wA)(),{start:s,end:i,searchText:a,currentPhilosopher:l,populateWordCount:u,currentData:d,markedMode:c,options:p,markedQuotes:O,scheduledPosts:x,darkMode:S,scrollPosition:T,userName:D,isLoggedIn:M,password:C,syncDate:E,restoreQuotesFromServerCachedDate:P,originalOptions:z,sorting:N,voiceSpeed:R,recentPhilosophers:Q,minMode:j,searchFilters:A}=(0,f.d4)((e=>e.philosophersData)),L=(0,o.useMemo)((()=>(0,n.$)({philosopher:l,options:p})),[l,p]),[F,I]=(0,o.useState)(!1),[W,U]=(0,o.useState)(!1),[q,H]=(0,o.useState)(!1),J=(0,o.useCallback)((e=>r((0,w.zr)(e))),[]),K=(0,o.useCallback)((e=>r((0,w.IY)(e))),[]),Y=(0,o.useCallback)((e=>r((0,w.AC)(e))),[]),B=(0,o.useCallback)((e=>r((0,w._h)(e))),[]),X=(0,o.useCallback)((e=>r((0,w.l3)(e))),[]),$=(0,o.useCallback)((e=>r((0,w.E6)(e))),[]),G=(0,o.useCallback)((e=>r((0,w.Xi)(e))),[]),V=(0,o.useCallback)((e=>r((0,w.KY)(e))),[]),Z=(0,o.useCallback)((e=>r((0,w.bd)(e))),[]),ee=(0,o.useCallback)((e=>r((0,w.SH)(e))),[]),te=(0,o.useCallback)((e=>r((0,w.bx)(e))),[]),re=(0,o.useCallback)((e=>r((0,w.a)(e))),[]),oe=(0,o.useCallback)((e=>r((0,w.VH)(e))),[]),se=(0,o.useCallback)((e=>r((0,w.GU)(e))),[]),ne=(0,o.useCallback)((e=>r((0,w.QV)(e))),[]),ie=(0,o.useCallback)((e=>r((0,w.Ao)(e))),[]),ae=(0,o.useCallback)((e=>r((0,w.VD)(e))),[]),le=(0,o.useCallback)((e=>r((0,w.c8)(e))),[]),ue=(0,o.useCallback)((e=>r((0,w.Gw)(e))),[]),de=(0,o.useCallback)((e=>r((0,w.oq)(e))),[]),ce=(0,o.useCallback)((e=>r(ce(e))),[]);return(0,o.useEffect)((()=>{M&&(async()=>{const t=Object.values(O).flat().length;(0,m.g)(P,_.r)&&await(0,k.xm)(D,O,e,V,ae,t)})()}),[]),(0,o.useEffect)((()=>{(0,n.Qq)(l,p)||(0,v.g)({options:p,setOptions:G,isLoggedIn:M,setSyncDate:ie,isFetchingOptions:W,setIsFetchingOptions:U,originalOptions:z,setOriginalOptions:re,sorting:N})}),[l]),(0,o.useEffect)((()=>{(0,k.lQ)(S)}),[S]),(0,o.useEffect)((()=>{u&&(0,k.z8)({currentPhilosopher:l,options:p,markedQuotes:O,setStart:J,setEnd:K})}),[u,l,d]),(0,o.useEffect)((()=>{(0,g.xl)()&&(ee(!1),(0,k.lQ)(!1))}),[S]),(0,o.useEffect)((()=>{document.title=`${(0,y.Yv)({currentPhilosopher:l,options:p})} Quotes`}),[l]),(0,o.useEffect)((()=>{var e;let t=!1,r=!1,o=[...p];o=null===(e=o)||void 0===e?void 0:e.map((e=>{var o,s;return(null===O||void 0===O||null===(o=O[null===e||void 0===e?void 0:e.value])||void 0===o?void 0:o.length)>=(null===e||void 0===e||null===(s=e.quotes)||void 0===s?void 0:s.length)?(r=!0,(null===e||void 0===e?void 0:e.value)===l&&(t=!0),{...e,disabled:!0}):e})),c&&(r&&G(o),t&&X(null===b.A||void 0===b.A?void 0:b.A.currentPhilosopher))}),[]),(0,o.useMemo)((()=>({listRef:t,dispatch:r,start:s,end:i,searchText:a,currentPhilosopher:l,currentData:d,markedMode:c,options:p,markedQuotes:O,scheduledPosts:x,darkMode:S,scrollPosition:T,originalData:L,isFetching:F,setIsFetching:I,setStart:J,setEnd:K,setSearchText:Y,setMarkedMode:B,setCurrentPhilosopher:X,setCurrentData:$,setOptions:G,setMarkedQuotes:V,setScheduledQuotes:Z,setDarkMode:ee,setScrollPosition:te,originalOptions:z,setOriginalOptions:re,userName:D,setUserName:oe,isLoggedIn:M,setIsLoggedIn:se,password:C,setPassword:ne,isFetchingOptions:W,setIsFetchingOptions:U,rowsRendered:q,setRowsRendered:H,syncDate:E,setSyncDate:ie,voiceSpeed:R,recentPhilosophers:Q,setRecentPhilosophers:le,minMode:j,setMinMode:ue,setLogs:de,restoreQuotesFromServerCachedDate:P,setRestoreQuotesFromServerCachedDate:ae,setAutoPopulateWordCount:ce,populateWordCount:u})),[t,r,s,i,a,l,d,c,p,O,x,S,T,L,F,I,J,K,Y,B,X,$,G,V,Z,ee,te,z,re,D,oe,M,se,C,ne,W,U,q,H,E,ie,R,Q,le,j,ue,de,P,ae,ce,u])}();const{currentPhilosopher:l,isFetching:D,minMode:M}=i;return i={...i,setSorting:r,sorting:t},O(),(0,n.Qq)(l,e)?(0,a.jsx)("div",{className:p,children:D?(0,a.jsx)(S,{}):(0,a.jsxs)(a.Fragment,{children:[!M&&(0,a.jsx)(T,{...i}),(0,a.jsx)("div",{className:M?c:d,children:(0,a.jsx)(s.Ay,{children:e=>{let{height:t,width:r}=e;return(0,a.jsx)(u,{...i,width:r,height:t})}})})]})}):(0,a.jsx)(a.Fragment,{})}},1866:(e,t,r)=>{"use strict";r.d(t,{Kf:()=>a,XB:()=>l,lQ:()=>i,xm:()=>u,z8:()=>d});var o=r(7308),s=r(7052),n=r(5499);const i=e=>{let t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},a=(e,t)=>e.map((e=>(0,o.iL)({philosopher:e.value,options:t}))).reverse(),l=e=>[...e].sort(((e,t)=>e.fullName.localeCompare(t.fullName)));async function u(e,t,r,o,n,i){const a=await(0,s.kr)({userName:e});if(a){if(a>i){let{markedQuotesFromServer:t}=await(0,s.sE)({userName:e,openSnackbar:r});o(t),r("Auto-Sync : Restored all marked quotes!",4e3)}else i>a&&await(0,s.G9)({userName:e,markedQuotes:t,openSnackbar:r});n(Date.now())}}const d=e=>{let{currentPhilosopher:t,options:r,markedQuotes:s,setStart:i,setEnd:a}=e;const l=(0,o.$)({philosopher:t,options:r}),u=(null===s||void 0===s?void 0:s[t])||[],d=l.filter((e=>!u.includes(e.id))).reduce(((e,t)=>{let{quote:r}=t;return""!==r?Math.min((0,n.sQ)(r),e):e}),1/0);d!==1/0&&(i(1),a(d))}},7052:(e,t,r)=>{"use strict";r.d(t,{G9:()=>n,fk:()=>l,kr:()=>a,sE:()=>i});var o=r(8380),s=r(1589);const n=async e=>{let{userName:t,markedQuotes:r,openSnackbar:n,setSyncDate:i}=e;await(0,s.Uw)((async()=>await fetch(o.S.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:r,dateSynced:Date.now()})})))},i=async e=>{var t;let{userName:r,openSnackbar:n}=e,i=await(0,s.Uw)((async()=>await fetch(o.S.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r})})));if(i=await i.json(),null!==(t=i)&&void 0!==t&&t.ok)try{var a,l,u;const e=null===(a=i)||void 0===a||null===(l=a.results)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.markedQuotes,t=Object.values(e).flat().length;var d,c,p;if(e&&t>0)return{markedQuotesFromServer:e,dateFromServer:null===(d=i)||void 0===d||null===(c=d.results)||void 0===c||null===(p=c[0])||void 0===p?void 0:p.dateSynced}}catch(f){n(JSON.stringify(f))}else n(JSON.stringify(i.error))},a=async e=>{var t;let{userName:r}=e,n=await(0,s.Uw)((async()=>await fetch(o.S.MARKED_QUOTES.GET_COUNT,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r})})));var i;return n=await n.json(),null!==(t=n)&&void 0!==t&&t.ok?null===(i=n)||void 0===i?void 0:i.count:null},l=async e=>{var t;let{apiCallType:r,userName:n,password:i,setIsLoggedIn:a,openSnackbar:l,setIsFetching:u}=e;const d=n.charAt(0).toUpperCase()+n.slice(1);let c;u(!0),c="login"===r?await(0,s.Uw)((async()=>await fetch(o.S.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:i})}))):await(0,s.Uw)((async()=>await fetch(o.S.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:i})}))),c=await c.json(),u(!1),null!==(t=c)&&void 0!==t&&t.ok?(a(!0),l(d+" "+JSON.stringify(c.serverResponse))):l(JSON.stringify(c.error))}},5499:(e,t,r)=>{"use strict";r.d(t,{Yv:()=>i,cJ:()=>n,sQ:()=>l,tq:()=>a});var o=r(6228),s=r(7442);const n=(e,t)=>{let{currentPhilosopher:r,currentData:o,setCurrentData:n,options:i}=e,{markedMode:a=null,markedQuotes:l,setMarkedQuotes:u}=t;o&&n(o),void 0!==a&&a&&(0,s.v)({currentPhilosopher:r,markedMode:a,markedQuotes:l,setMarkedQuotes:u,currentData:o,setCurrentData:n})},i=e=>{let{currentPhilosopher:t,options:r}=e;const s=r.filter((e=>{let{value:r}=e;return t===r}));if(!(0,o.XY)(s))return s&&s[0].fullName},a=e=>{let{currentPhilosopher:t,options:r}=e;const s=r.filter((e=>{let{value:r}=e;return t===r}));if(!(0,o.XY)(s))return s&&s[0].fullNameInOtherLanguages};function l(e){return e.split(" ").filter((function(e){return""!==e})).length}},1497:(e,t,r)=>{"use strict";var o=r(3218);function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,n,i){if(i!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:s};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},144:(e,t,r)=>{"use strict";var o=r(4994),s=r(6305);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i,a=o(r(7383)),l=o(r(4579)),u=o(r(8452)),d=o(r(3072)),c=o(r(2475)),p=o(r(9511)),f=o(r(3693)),h=s(r(5043)),_=o(r(2235));o(r(5173));function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){(0,f.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=(i=n=function(e){function t(){var e,r;(0,a.default)(this,t);for(var o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return r=(0,u.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(s))),(0,f.default)((0,c.default)(r),"state",{height:r.props.defaultHeight||0,width:r.props.defaultWidth||0}),(0,f.default)((0,c.default)(r),"_parentNode",void 0),(0,f.default)((0,c.default)(r),"_autoSizer",void 0),(0,f.default)((0,c.default)(r),"_window",void 0),(0,f.default)((0,c.default)(r),"_detectElementResize",void 0),(0,f.default)((0,c.default)(r),"_onResize",(function(){var e=r.props,t=e.disableHeight,o=e.disableWidth,s=e.onResize;if(r._parentNode){var n=r._parentNode.offsetHeight||0,i=r._parentNode.offsetWidth||0,a=(r._window||window).getComputedStyle(r._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,u=parseInt(a.paddingRight,10)||0,d=parseInt(a.paddingTop,10)||0,c=parseInt(a.paddingBottom,10)||0,p=n-d-c,f=i-l-u;(!t&&r.state.height!==p||!o&&r.state.width!==f)&&(r.setState({height:n-d-c,width:i-l-u}),s({height:n,width:i}))}})),(0,f.default)((0,c.default)(r),"_setRef",(function(e){r._autoSizer=e})),r}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=(0,_.default)(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,o=e.disableHeight,s=e.disableWidth,n=e.style,i=this.state,a=i.height,l=i.width,u={overflow:"visible"},d={};return o||(u.height=0,d.height=a),s||(u.width=0,d.width=l),h.createElement("div",{className:r,ref:this._setRef,style:g({},u,{},n)},t(d))}}]),t}(h.Component),(0,f.default)(n,"propTypes",null),i);t.default=v,(0,f.default)(v,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}})},9108:(e,t,r)=>{"use strict";var o=r(4994);Object.defineProperty(t,"Ay",{enumerable:!0,get:function(){return s.default}});var s=o(r(144))},2235:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o;o="undefined"!==typeof t?t:"undefined"!==typeof window?window:"undefined"!==typeof self?self:r.g;var s="undefined"!==typeof o.document&&o.document.attachEvent;if(!s){var n=function(){var e=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||function(e){return o.setTimeout(e,20)};return function(t){return e(t)}}(),i=function(){var e=o.cancelAnimationFrame||o.mozCancelAnimationFrame||o.webkitCancelAnimationFrame||o.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,o=t.lastElementChild,s=r.firstElementChild;o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight,s.style.width=r.offsetWidth+1+"px",s.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},l=function(e){if(!(e.target.className&&"function"===typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&i(this.__resizeRAF__),this.__resizeRAF__=n((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(r){r.call(t,e)})))}))}},u=!1,d="",c="animationstart",p="Webkit Moz O ms".split(" "),f="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),h=o.document.createElement("fakeelement");if(void 0!==h.style.animationName&&(u=!0),!1===u)for(var _=0;_<p.length;_++)if(void 0!==h.style[p[_]+"AnimationName"]){d="-"+p[_].toLowerCase()+"-",c=f[_],u=!0;break}var m="resizeanim",g="@"+d+"keyframes "+m+" { from { opacity: 0; } to { opacity: 0; } } ",v=d+"animation: 1ms "+m+"; "}return{addResizeListener:function(t,r){if(s)t.attachEvent("onresize",r);else{if(!t.__resizeTriggers__){var n=t.ownerDocument,i=o.getComputedStyle(t);i&&"static"==i.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var r=(g||"")+".resize-triggers { "+(v||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=t.head||t.getElementsByTagName("head")[0],s=t.createElement("style");s.id="detectElementResize",s.type="text/css",null!=e&&s.setAttribute("nonce",e),s.styleSheet?s.styleSheet.cssText=r:s.appendChild(t.createTextNode(r)),o.appendChild(s)}}(n),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=n.createElement("div")).className="resize-triggers";var u='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var d=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return u}});t.__resizeTriggers__.innerHTML=d.createHTML("")}else t.__resizeTriggers__.innerHTML=u;t.appendChild(t.__resizeTriggers__),a(t),t.addEventListener("scroll",l,!0),c&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==m&&a(t)},t.__resizeTriggers__.addEventListener(c,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(r)}},removeResizeListener:function(e,t){if(s)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",l,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(c,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(r){}}}}}},2475:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},7383:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},4579:(e,t,r)=>{var o=r(7736);function s(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,o(s.key),s)}}e.exports=function(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},3693:(e,t,r)=>{var o=r(7736);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},3072:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9511:(e,t,r)=>{var o=r(5636);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},4994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},6305:(e,t,r)=>{var o=r(3738).default;function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n},e.exports.__esModule=!0,e.exports.default=e.exports},8452:(e,t,r)=>{var o=r(3738).default,s=r(2475);e.exports=function(e,t){if(t&&("object"==o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)},e.exports.__esModule=!0,e.exports.default=e.exports},5636:e=>{function t(r,o){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9045:(e,t,r)=>{var o=r(3738).default;e.exports=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=o(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7736:(e,t,r)=>{var o=r(3738).default,s=r(9045);e.exports=function(e){var t=s(e,"string");return"symbol"==o(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},3738:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},465:e=>{"use strict";e.exports={K:1e3,r:1}}}]);
//# sourceMappingURL=HomePage.c5d74881.chunk.js.map