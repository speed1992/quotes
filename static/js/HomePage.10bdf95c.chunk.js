(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[703],{4545:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var o=r(3003),s=r(3110);const n=()=>{const e=(0,o.wA)();return[function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1400;e((0,s.tY)(t)),setTimeout((()=>e((0,s.tY)(""))),r)}]}},6228:(e,t,r)=>{"use strict";r.d(t,{XY:()=>s,b0:()=>o,gZ:()=>n});const o=e=>"undefined"===typeof e,s=e=>0===Object.values(e).length&&e.constructor===Object;function n(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},8839:(e,t,r)=>{"use strict";r.d(t,{g:()=>s});var o=r(4194);const s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e=new Date(e);const s=new Date,n=s.getTime()-e.getTime(),i=Math.floor(n/864e5);return r&&(0,o.n)("dev")&&(null===r||void 0===r||r("inside isCacheExpired "+s),null===r||void 0===r||r("startDate "+e),null===r||void 0===r||r("endDate "+s),null===r||void 0===r||r("dateDifferenceInMilliSeconds endDate.getTime() - startDate.getTime() "+n),null===r||void 0===r||r("dateDifference In hours "+Math.floor(n/36e5%24)),null===r||void 0===r||r("dateDifferenceInDays "+i),null===r||void 0===r||r("dateDifferenceInDays >= cacheTime "+i>=t),null===r||void 0===r||r("cacheTime "+t)),i>=t}},7442:(e,t,r)=>{"use strict";r.d(t,{v:()=>s});r(5043);function o(e,t){const r=localStorage.getItem(e),o=JSON.parse(r);return void 0===o||"undefined"===o||"null"===o||null===o?t:o}const s=e=>{let{index:t,currentPhilosopher:r,markedMode:s,markedQuotes:n={},setMarkedQuotes:i,currentData:a,setCurrentData:l}=e,u=JSON.parse(JSON.stringify(n)),c=[];const d="".concat(r,"-MARKED_AS_READ");c=o(d,[]),n&&void 0!==n[r]&&(c=[...c,...n[r]]),c=[...new Set(c)],t&&c.push(t),u[r]=c,i(u);const p=a.filter(((e,t)=>{let{id:r}=e;return-1===c.indexOf(r)}));l(JSON.parse(JSON.stringify(p)))}},4194:(e,t,r)=>{"use strict";function o(e){let t=function(e){e=e.split("+").join(" ");for(var t,r={},o=/[?&]?([^=]+)=([^&]*)/g;t=o.exec(e);)r[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return r}(document.location.search),r=t[e]?t[e].toLowerCase():null;return!("false"!==r&&!r)}r.d(t,{n:()=>o})},5795:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$P:()=>search,Fr:()=>isMobile,NB:()=>scrollToMemorizedRow,qf:()=>scrollToQuoteId,xl:()=>isDesktop});var _web_workers_worker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3653);const scrollToFirstRow=e=>{e.current&&e.current.scrollToRow(0)},scrollToMemorizedRow=(e,t,r)=>{(null===r||void 0===r?void 0:r.length)>0&&e.current&&(void 0!==t&&"undefined"!==t&&t&&t>0?e.current.scrollToRow(t):scrollToFirstRow(e))},scrollToQuoteId=(e,t,r,o)=>{const s=t[o];if((null===r||void 0===r?void 0:r.length)>0&&e.current)if(void 0!==s&&"undefined"!==s&&s&&s>0){const t=r.findIndex((e=>{let{id:t}=e;return t===s}));t>-1&&e.current.scrollToRow(t)}else scrollToFirstRow(e)},search=_ref2=>{let{searchText:searchText,currentData:currentData,searchFilters:searchFilters}=_ref2;return new Promise((resolve=>{void 0!==currentData&&(_web_workers_worker__WEBPACK_IMPORTED_MODULE_0__.D.postMessage({currentData:currentData,searchText:searchText,searchFilters:searchFilters,filterName:"searchTermFilter"}),_web_workers_worker__WEBPACK_IMPORTED_MODULE_0__.D.onmessage=event=>{const filteredQuotesFromWorker=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));resolve(filteredQuotesFromWorker)})}))},isMobile=()=>window.innerWidth<=600,isDesktop=()=>window.innerWidth>=600},3653:(e,t,r)=>{"use strict";let o;r.d(t,{D:()=>o}),window.Worker?o=new Worker(new URL(r.p+r.u(480),r.b)):alert("Your browser doesn't support web workers.")},1342:(e,t,r)=>{"use strict";r.d(t,{g:()=>m,T:()=>h});var o=r(8380),s=r(465);const n=15;var i=r(7308),a=r(1589),l=r(8839),u=r(2654),c=r(951),d=r(1866);const p=e=>{let{newOptions:t,oldOptions:r,oldOriginalOptions:o,setOptions:s,setOriginalOptions:n,sorting:a}=e;const l=[...c.Y,...t];let p=((e,t)=>{let r=JSON.parse(JSON.stringify(t));return r.forEach(((t,o)=>{const s=(0,i.bQ)(t.value,e);-1!==s&&(r[o].quotes=e[s].quotes)})),r})(r,[...l]);a===u.k?p=(0,d.Kf)(l,p):a===u.X&&(p=(0,d.XB)(p)),s([...p]),n(l)};var _=r(4194),f=r(5499);function h(e){let{philosopher:t,setIsFetching:r,setCurrentPhilosopher:o,currentData:s,setCurrentData:a,options:l,setOptions:u,markedMode:c,markedQuotes:d,setMarkedQuotes:p,recentPhilosophers:_,setRecentPhilosophers:h}=e;function m(){_&&h([...new Set([t,..._.slice(0,n-1)])]),o(t),(0,f.cJ)({philosopher:t,currentData:s,setCurrentData:a,options:l},{markedMode:c,markedQuotes:d,setMarkedQuotes:p}),r(!1)}r(!0),(0,i.$)({philosopher:t,options:l})?m():(0,i.rd)(t,{options:l,setOptions:u},[]).then(m)}const m=async e=>{let{options:t,setOptions:r,setSyncDate:n,setIsFetchingOptions:i,originalOptions:u,setOriginalOptions:c,sorting:d,syncDate:f,setLogs:h}=e;if((0,_.n)("dev")){const e=new Date;null===h||void 0===h||h("inside onFocusHandler"),null===h||void 0===h||h("isCacheExpired(syncDate, CACHE_IN_DAYS.ASSET_GRAPH, setLogs) || options.length === 1 "+(0,l.g)(f,s.K,h)||0),null===h||void 0===h||h("options.length "+t.length),null===h||void 0===h||h("current time "+e),null===h||void 0===h||h("syncDate "+new Date(f))}if((0,l.g)(f,s.K,h)||1===t.length){null===i||void 0===i||i(!0);let e=await(0,a.Uw)((()=>fetch(o.S.STATIC_DATA.STATIC_ASSET_GRAPH)));e=await e.json(),(0,_.n)("dev")&&(null===h||void 0===h||h("api response "+e)),p({newOptions:e,oldOptions:t,oldOriginalOptions:u,setOptions:r,setOriginalOptions:c,sorting:d}),null===i||void 0===i||i(!1),null===n||void 0===n||n(Date.now())}}},2654:(e,t,r)=>{"use strict";r.d(t,{X:()=>s,k:()=>o});const o="latest",s="alphabetical"},2090:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var o=r(5043),s=r(9108),n=r(7308),i=r(1589);var a=r(579);const l=o.lazy((()=>(0,i.Uw)((()=>Promise.all([r.e(816),r.e(580)]).then(r.bind(r,3076))))));function u(e){const{currentPhilosopher:t,setCurrentData:r,options:s,setOptions:i,setIsFetching:u,isFetching:c}=e;return(0,o.useEffect)((()=>{u(!0),function(e,t,r,o,s){try{void 0!==e&&((0,n.$)({philosopher:e,options:t})||(0,n.rd)(e,{options:t,setOptions:r},[o])),s(!1)}catch(i){console.log(i)}}(t,s,i,r,u)}),[t]),!c&&(0,a.jsx)(l,{...e})}const c="home-page_content__Jkn8g",d="home-page_contentMinMode__qSHsr",p="home-page_homepage__vHOIY";var _=r(7030),f=r(3003),h=r(2654),m=r(5630),g=r(1866);const v=o.lazy((()=>(0,i.Uw)((()=>r.e(326).then(r.bind(r,9061)))))),w=o.lazy((()=>(0,i.Uw)((()=>r.e(456).then(r.bind(r,2836)))))),y=()=>{const{options:e,sorting:t,setSorting:r}=function(){const e=(0,f.wA)(),t=(0,f.d4)((e=>e.philosophersData.originalOptions)),r=(0,f.d4)((e=>e.philosophersData.options)),s=(0,f.d4)((e=>e.philosophersData.sorting)),n=(0,o.useCallback)((t=>e((0,m.$1)(t))),[]);return(0,o.useEffect)((()=>{const o=t=>e((0,m.Xi)(t));let n=[];t.length>1&&(s===h.k?(n=(0,g.Kf)(t,r),o(n)):s===h.X&&(n=(0,g.XB)(r),o(n)))}),[s]),{sorting:s,setSorting:n,options:r,originalOptions:t}}();let i=(0,_.S)();const{currentPhilosopher:l,isFetching:y,minMode:b}=i;return i={...i,setSorting:r,sorting:t},(0,n.Qq)(l,e)?(0,a.jsx)("div",{className:p,children:y?(0,a.jsx)(v,{}):(0,a.jsxs)(a.Fragment,{children:[!b&&(0,a.jsx)(w,{...i}),(0,a.jsx)("div",{className:b?d:c,children:(0,a.jsx)(s.Ay,{children:e=>{let{height:t,width:r}=e;return(0,a.jsx)(u,{...i,width:r,height:t})}})})]})}):(0,a.jsx)(a.Fragment,{})}},7030:(e,t,r)=>{"use strict";r.d(t,{S:()=>h});var o=r(5043),s=r(3003),n=r(4545),i=r(465),a=r(7308),l=r(8839),u=r(5499),c=r(5795);var d=r(1342),p=r(5630),_=r(951),f=r(1866);function h(){var e,t;const[r]=(0,n.A)(),h=(0,o.useRef)(),m=(0,s.wA)(),{start:g,end:v,searchText:w,currentPhilosopher:y,populateWordCount:b,currentData:k,markedMode:O,options:D,markedQuotes:x,scheduledPosts:S,darkMode:E,scrollPosition:M,userName:T,isLoggedIn:P,password:C,syncDate:N,restoreQuotesFromServerCachedDate:z,originalOptions:R,sorting:L,voiceSpeed:A,recentPhilosophers:Q,minMode:j,searchFilters:F}=(0,s.d4)((e=>e.philosophersData)),I=(0,o.useMemo)((()=>(0,a.$)({philosopher:y,options:D})),[y,D]),[U,W]=(0,o.useState)(!1),[q,K]=(0,o.useState)(!1),[H,B]=(0,o.useState)(!1),J=(0,o.useCallback)((e=>m((0,p.zr)(e))),[]),Y=(0,o.useCallback)((e=>m((0,p.IY)(e))),[]),X=(0,o.useCallback)((e=>m((0,p.AC)(e))),[]),G=(0,o.useCallback)((e=>m((0,p._h)(e))),[]),V=(0,o.useCallback)((e=>m((0,p.l3)(e))),[]),$=(0,o.useCallback)((e=>m((0,p.E6)(e))),[]),Z=(0,o.useCallback)((e=>m((0,p.Xi)(e))),[]),ee=(0,o.useCallback)((e=>m((0,p.KY)(e))),[]),te=(0,o.useCallback)((e=>m((0,p.bd)(e))),[]),re=(0,o.useCallback)((e=>m((0,p.SH)(e))),[]),oe=(0,o.useCallback)((e=>m((0,p.bx)(e))),[]),se=(0,o.useCallback)((e=>m((0,p.a)(e))),[]),ne=(0,o.useCallback)((e=>m((0,p.VH)(e))),[]),ie=(0,o.useCallback)((e=>m((0,p.GU)(e))),[]),ae=(0,o.useCallback)((e=>m((0,p.QV)(e))),[]),le=(0,o.useCallback)((e=>m((0,p.Ao)(e))),[]),ue=(0,o.useCallback)((e=>m((0,p.VD)(e))),[]),ce=(0,o.useCallback)((e=>m((0,p.c8)(e))),[]),de=(0,o.useCallback)((e=>m((0,p.Gw)(e))),[]),pe=(0,o.useCallback)((e=>m((0,p.oq)(e))),[]),_e=(0,o.useCallback)((e=>m(_e(e))),[]);return(0,o.useEffect)((()=>{P&&(async()=>{const e=Object.values(x).flat().length;(0,l.g)(z,i.r)&&await(0,f.xm)(T,x,r,ee,ue,e)})()}),[]),(0,o.useEffect)((()=>{(0,a.Qq)(y,D)||(0,d.g)({options:D,setOptions:Z,isLoggedIn:P,setSyncDate:le,isFetchingOptions:q,setIsFetchingOptions:K,originalOptions:R,setOriginalOptions:se,sorting:L})}),[y]),(0,o.useEffect)((()=>{I&&async function(e,t){let{searchText:r,start:o,end:s,currentPhilosopher:n,currentData:i,originalData:a,setCurrentData:l,options:d,searchFilters:p}=e,{markedMode:_=!1,markedQuotes:f,setMarkedQuotes:h}=t,m=[];m=await(0,c.$P)({searchText:r,currentData:a,setCurrentData:l,currentPhilosopher:n,options:d,searchFilters:p}),m&&await(0,u.Ke)(o,s,m,{markedMode:_,markedQuotes:f,setMarkedQuotes:h},{currentData:i,setCurrentData:l,originalData:a,currentPhilosopher:n})}({searchText:w,start:g,end:v,currentPhilosopher:y,currentData:k,originalData:I,setCurrentData:$,options:D,searchFilters:F},{markedMode:O,markedQuotes:x,setMarkedQuotes:ee})}),[g,v,w,O,y,null===(e=x[y])||void 0===e||null===(t=e.quotes)||void 0===t?void 0:t.length,null===F||void 0===F?void 0:F.exclusions,null===F||void 0===F?void 0:F.inclusions]),(0,o.useEffect)((()=>{(0,f.lQ)(E)}),[E]),(0,o.useEffect)((()=>{b&&(0,f.z8)({setStart:J,setEnd:Y,currentData:k})}),[b,y,k]),(0,o.useEffect)((()=>{(0,c.xl)()&&(re(!1),(0,f.lQ)(!1))}),[E]),(0,o.useEffect)((()=>{document.title="".concat((0,u.Yv)({currentPhilosopher:y,options:D})," Quotes")}),[y]),(0,o.useEffect)((()=>{var e;let t=!1,r=!1,o=[...D];o=null===(e=o)||void 0===e?void 0:e.map((e=>{var o,s;return(null===x||void 0===x||null===(o=x[null===e||void 0===e?void 0:e.value])||void 0===o?void 0:o.length)>=(null===e||void 0===e||null===(s=e.quotes)||void 0===s?void 0:s.length)?(r=!0,(null===e||void 0===e?void 0:e.value)===y&&(t=!0),{...e,disabled:!0}):e})),O&&(r&&Z(o),t&&V(null===_.A||void 0===_.A?void 0:_.A.currentPhilosopher))}),[y,O,x]),(0,o.useMemo)((()=>({listRef:h,dispatch:m,start:g,end:v,searchText:w,currentPhilosopher:y,currentData:k,markedMode:O,options:D,markedQuotes:x,scheduledPosts:S,darkMode:E,scrollPosition:M,originalData:I,isFetching:U,setIsFetching:W,setStart:J,setEnd:Y,setSearchText:X,setMarkedMode:G,setCurrentPhilosopher:V,setCurrentData:$,setOptions:Z,setMarkedQuotes:ee,setScheduledQuotes:te,setDarkMode:re,setScrollPosition:oe,originalOptions:R,setOriginalOptions:se,userName:T,setUserName:ne,isLoggedIn:P,setIsLoggedIn:ie,password:C,setPassword:ae,isFetchingOptions:q,setIsFetchingOptions:K,rowsRendered:H,setRowsRendered:B,syncDate:N,setSyncDate:le,voiceSpeed:A,recentPhilosophers:Q,setRecentPhilosophers:ce,minMode:j,setMinMode:de,setLogs:pe,restoreQuotesFromServerCachedDate:z,setRestoreQuotesFromServerCachedDate:ue,setAutoPopulateWordCount:_e,populateWordCount:b})),[h,m,g,v,w,y,k,O,D,x,S,E,M,I,U,W,J,Y,X,G,V,$,Z,ee,te,re,oe,R,se,T,ne,P,ie,C,ae,q,K,H,B,N,le,A,Q,ce,j,de,pe,z,ue,_e,b])}},1866:(e,t,r)=>{"use strict";r.d(t,{Kf:()=>a,XB:()=>l,lQ:()=>i,xm:()=>u,z8:()=>c});var o=r(7308),s=r(7052),n=r(5499);const i=e=>{let t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},a=(e,t)=>e.map((e=>(0,o.iL)({philosopher:e.value,options:t}))).reverse(),l=e=>[...e].sort(((e,t)=>e.fullName.localeCompare(t.fullName)));async function u(e,t,r,o,n,i){const a=await(0,s.kr)({userName:e});if(a){if(a>i){let{markedQuotesFromServer:t}=await(0,s.sE)({userName:e,openSnackbar:r});o(t),r("Auto-Sync : Restored all marked quotes!",4e3)}else i>a&&await(0,s.G9)({userName:e,markedQuotes:t,openSnackbar:r});n(Date.now())}}const c=e=>{let{setStart:t,setEnd:r,currentData:o}=e;const s=null===o||void 0===o?void 0:o.reduce(((e,t)=>{let{quote:r}=t;return""!==r?Math.min((0,n.sQ)(r),e):e}),1/0);s!==1/0&&(t(1),r(s))}},7052:(e,t,r)=>{"use strict";r.d(t,{G9:()=>n,fk:()=>l,kr:()=>a,sE:()=>i});var o=r(8380),s=r(1589);const n=async e=>{let{userName:t,markedQuotes:r,openSnackbar:n,setSyncDate:i}=e;await(0,s.Uw)((async()=>await fetch(o.S.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:r,dateSynced:Date.now()})})))},i=async e=>{var t;let{userName:r,openSnackbar:n}=e,i=await(0,s.Uw)((async()=>await fetch(o.S.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r})})));if(i=await i.json(),null!==(t=i)&&void 0!==t&&t.ok)try{var a,l,u;const e=null===(a=i)||void 0===a||null===(l=a.results)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.markedQuotes,t=Object.values(e).flat().length;var c,d,p;if(e&&t>0)return{markedQuotesFromServer:e,dateFromServer:null===(c=i)||void 0===c||null===(d=c.results)||void 0===d||null===(p=d[0])||void 0===p?void 0:p.dateSynced}}catch(_){n(JSON.stringify(_))}else n(JSON.stringify(i.error))},a=async e=>{var t;let{userName:r}=e,n=await(0,s.Uw)((async()=>await fetch(o.S.MARKED_QUOTES.GET_COUNT,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r})})));var i;return n=await n.json(),null!==(t=n)&&void 0!==t&&t.ok?null===(i=n)||void 0===i?void 0:i.count:null},l=async e=>{var t;let{apiCallType:r,userName:n,password:i,setIsLoggedIn:a,openSnackbar:l,setIsFetching:u}=e;const c=n.charAt(0).toUpperCase()+n.slice(1);let d;u(!0),d="login"===r?await(0,s.Uw)((async()=>await fetch(o.S.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:i})}))):await(0,s.Uw)((async()=>await fetch(o.S.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:i})}))),d=await d.json(),u(!1),null!==(t=d)&&void 0!==t&&t.ok?(a(!0),l(c+" "+JSON.stringify(d.serverResponse))):l(JSON.stringify(d.error))}},5499:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ke:()=>searchByWordLength,Yv:()=>getPhilosopherFullName,cJ:()=>changeQuotesData,sQ:()=>getWordCount,tq:()=>getPhilosopherFullName_i10n});var _common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6228),_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7442),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3653);const changeQuotesData=(e,t)=>{let{currentPhilosopher:r,currentData:o,setCurrentData:s,options:n}=e,{markedMode:i=null,markedQuotes:a,setMarkedQuotes:l}=t;o&&s(o),void 0!==i&&i&&(0,_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__.v)({currentPhilosopher:r,markedMode:i,markedQuotes:a,setMarkedQuotes:l,currentData:o,setCurrentData:s})},getPhilosopherFullName=e=>{let{currentPhilosopher:t,options:r}=e;const o=r.filter((e=>{let{value:r}=e;return t===r}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.XY)(o))return o&&o[0].fullName},getPhilosopherFullName_i10n=e=>{let{currentPhilosopher:t,options:r}=e;const o=r.filter((e=>{let{value:r}=e;return t===r}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.XY)(o))return o&&o[0].fullNameInOtherLanguages},searchByWordLength=async(start,end,quotes,_ref7,_ref8)=>{let{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}=_ref7,{setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher}=_ref8;return new Promise((resolve=>{void 0!==quotes&&("string"===typeof start&&""===start.trim()&&(start=0),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.D.postMessage({quotes:quotes,end:end,start:start,filterName:"wordCountFilter"}),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.D.onmessage=event=>{const newData=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));changeQuotesData({currentData:newData,setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher},{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}),resolve()})}))};function getWordCount(e){return e.split(" ").filter((function(e){return""!==e})).length}},1497:(e,t,r)=>{"use strict";var o=r(3218);function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,n,i){if(i!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:s};return r.PropTypes=r,r}},5173:(e,t,r)=>{e.exports=r(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},144:(e,t,r)=>{"use strict";var o=r(4994),s=r(6305);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i,a=o(r(7383)),l=o(r(4579)),u=o(r(8452)),c=o(r(3072)),d=o(r(2475)),p=o(r(9511)),_=o(r(3693)),f=s(r(5043)),h=o(r(2235));o(r(5173));function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){(0,_.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=(i=n=function(e){function t(){var e,r;(0,a.default)(this,t);for(var o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return r=(0,u.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(s))),(0,_.default)((0,d.default)(r),"state",{height:r.props.defaultHeight||0,width:r.props.defaultWidth||0}),(0,_.default)((0,d.default)(r),"_parentNode",void 0),(0,_.default)((0,d.default)(r),"_autoSizer",void 0),(0,_.default)((0,d.default)(r),"_window",void 0),(0,_.default)((0,d.default)(r),"_detectElementResize",void 0),(0,_.default)((0,d.default)(r),"_onResize",(function(){var e=r.props,t=e.disableHeight,o=e.disableWidth,s=e.onResize;if(r._parentNode){var n=r._parentNode.offsetHeight||0,i=r._parentNode.offsetWidth||0,a=(r._window||window).getComputedStyle(r._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,u=parseInt(a.paddingRight,10)||0,c=parseInt(a.paddingTop,10)||0,d=parseInt(a.paddingBottom,10)||0,p=n-c-d,_=i-l-u;(!t&&r.state.height!==p||!o&&r.state.width!==_)&&(r.setState({height:n-c-d,width:i-l-u}),s({height:n,width:i}))}})),(0,_.default)((0,d.default)(r),"_setRef",(function(e){r._autoSizer=e})),r}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=(0,h.default)(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,o=e.disableHeight,s=e.disableWidth,n=e.style,i=this.state,a=i.height,l=i.width,u={overflow:"visible"},c={};return o||(u.height=0,c.height=a),s||(u.width=0,c.width=l),f.createElement("div",{className:r,ref:this._setRef,style:g({},u,{},n)},t(c))}}]),t}(f.Component),(0,_.default)(n,"propTypes",null),i);t.default=v,(0,_.default)(v,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}})},9108:(e,t,r)=>{"use strict";var o=r(4994);Object.defineProperty(t,"Ay",{enumerable:!0,get:function(){return s.default}});var s=o(r(144))},2235:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o;o="undefined"!==typeof t?t:"undefined"!==typeof window?window:"undefined"!==typeof self?self:r.g;var s="undefined"!==typeof o.document&&o.document.attachEvent;if(!s){var n=function(){var e=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||function(e){return o.setTimeout(e,20)};return function(t){return e(t)}}(),i=function(){var e=o.cancelAnimationFrame||o.mozCancelAnimationFrame||o.webkitCancelAnimationFrame||o.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,o=t.lastElementChild,s=r.firstElementChild;o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight,s.style.width=r.offsetWidth+1+"px",s.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},l=function(e){if(!(e.target.className&&"function"===typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&i(this.__resizeRAF__),this.__resizeRAF__=n((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(r){r.call(t,e)})))}))}},u=!1,c="",d="animationstart",p="Webkit Moz O ms".split(" "),_="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),f=o.document.createElement("fakeelement");if(void 0!==f.style.animationName&&(u=!0),!1===u)for(var h=0;h<p.length;h++)if(void 0!==f.style[p[h]+"AnimationName"]){c="-"+p[h].toLowerCase()+"-",d=_[h],u=!0;break}var m="resizeanim",g="@"+c+"keyframes "+m+" { from { opacity: 0; } to { opacity: 0; } } ",v=c+"animation: 1ms "+m+"; "}return{addResizeListener:function(t,r){if(s)t.attachEvent("onresize",r);else{if(!t.__resizeTriggers__){var n=t.ownerDocument,i=o.getComputedStyle(t);i&&"static"==i.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var r=(g||"")+".resize-triggers { "+(v||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=t.head||t.getElementsByTagName("head")[0],s=t.createElement("style");s.id="detectElementResize",s.type="text/css",null!=e&&s.setAttribute("nonce",e),s.styleSheet?s.styleSheet.cssText=r:s.appendChild(t.createTextNode(r)),o.appendChild(s)}}(n),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=n.createElement("div")).className="resize-triggers";var u='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var c=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return u}});t.__resizeTriggers__.innerHTML=c.createHTML("")}else t.__resizeTriggers__.innerHTML=u;t.appendChild(t.__resizeTriggers__),a(t),t.addEventListener("scroll",l,!0),d&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==m&&a(t)},t.__resizeTriggers__.addEventListener(d,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(r)}},removeResizeListener:function(e,t){if(s)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",l,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(d,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(r){}}}}}},2475:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},7383:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},4579:(e,t,r)=>{var o=r(7736);function s(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,o(s.key),s)}}e.exports=function(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},3693:(e,t,r)=>{var o=r(7736);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},3072:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9511:(e,t,r)=>{var o=r(5636);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},4994:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},6305:(e,t,r)=>{var o=r(3738).default;function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n},e.exports.__esModule=!0,e.exports.default=e.exports},8452:(e,t,r)=>{var o=r(3738).default,s=r(2475);e.exports=function(e,t){if(t&&("object"==o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)},e.exports.__esModule=!0,e.exports.default=e.exports},5636:e=>{function t(r,o){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},9045:(e,t,r)=>{var o=r(3738).default;e.exports=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=o(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7736:(e,t,r)=>{var o=r(3738).default,s=r(9045);e.exports=function(e){var t=s(e,"string");return"symbol"==o(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},3738:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},465:e=>{"use strict";e.exports={K:1e3,r:1}}}]);
//# sourceMappingURL=HomePage.10bdf95c.chunk.js.map