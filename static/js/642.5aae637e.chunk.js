(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[642],{4755:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(8687),s=r(4819);const n=()=>{const e=(0,o.I0)();return[function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1400;e((0,s.y7)(t)),setTimeout((()=>e((0,s.y7)(""))),r)}]}},5938:(e,t,r)=>{"use strict";r.d(t,{SD:()=>l,WB:()=>d,a2:()=>u,dA:()=>n,lf:()=>i,vH:()=>a});var o=r(4994),s=r(295);const n=(e,t,r)=>{let{options:n,setOptions:a}=t;return new Promise(((t,l)=>{const u=e.toLowerCase();(0,s.YM)((()=>fetch(o.P.STATIC_DATA.STATIC_QUOTES+u+".json"))).then((e=>e.json())).then((o=>{null===r||void 0===r||r.map((e=>e(o))),((e,t,r)=>{let{options:o,setOptions:s}=t;const n=JSON.parse(JSON.stringify(o));if("all"===e.trim().toLowerCase()){const t=i(e,o);let s;s=void 0===n[t].quotes?[]:n[t].quotes,n[t].quotes=[...s,...r]}else n[i(e,o)].quotes=r;s(n)})(e,{options:n,setOptions:a},o),t()})).catch((e=>l(e)))}))},i=(e,t)=>t.findIndex((t=>{let{value:r}=t;return r===e})),a=e=>{let{philosopher:t,options:r}=e;return r.filter((e=>{let{value:r}=e;return r===t}))[0]},l=e=>{var t;let{philosopher:r,options:o}=e;return null===(t=o.filter((e=>{let{value:t}=e;return t===r}))[0])||void 0===t?void 0:t.quotes},u=(e,t)=>t[i(e,t)].fullName,d=(e,t)=>!!t[i(e,t)]},3456:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s,k$:()=>n,o8:()=>o});const o=e=>"undefined"===typeof e,s=e=>0===Object.values(e).length&&e.constructor===Object;function n(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},413:(e,t,r)=>{"use strict";r.d(t,{H:()=>s});r(2791);function o(e,t){const r=localStorage.getItem(e),o=JSON.parse(r);return void 0===o||"undefined"===o||"null"===o||null===o?t:o}const s=e=>{let{index:t,currentPhilosopher:r,markedMode:s,markedQuotes:n={},setMarkedQuotes:i,currentData:a,setCurrentData:l}=e,u=JSON.parse(JSON.stringify(n)),d=[];const c="".concat(r,"-MARKED_AS_READ");d=o(c,[]),n&&void 0!==n[r]&&(d=[...d,...n[r]]),d=[...new Set(d)],t&&d.push(t),u[r]=d,i(u);const p=a.filter(((e,t)=>{let{id:r}=e;return-1===d.indexOf(r)}));l(JSON.parse(JSON.stringify(p)))}},1278:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bj:()=>scrollToQuoteId,nI:()=>isDesktop,rY:()=>scrollToMemorizedRow,tq:()=>isMobile,yC:()=>search});var _web_workers_worker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9031);const scrollToFirstRow=e=>{e.current&&e.current.scrollToRow(0)},scrollToMemorizedRow=(e,t,r)=>{(null===r||void 0===r?void 0:r.length)>0&&e.current&&(void 0!==t&&"undefined"!==t&&t&&t>0?e.current.scrollToRow(t):scrollToFirstRow(e))},scrollToQuoteId=(e,t,r,o)=>{const s=t[o];if((null===r||void 0===r?void 0:r.length)>0&&e.current)if(void 0!==s&&"undefined"!==s&&s&&s>0){const t=r.findIndex((e=>{let{id:t}=e;return t===s}));t>-1&&e.current.scrollToRow(t)}else scrollToFirstRow(e)},search=_ref2=>{let{searchText:searchText,currentData:currentData,setCurrentData:setCurrentData}=_ref2;return new Promise((resolve=>{void 0!==currentData&&(_web_workers_worker__WEBPACK_IMPORTED_MODULE_0__.K.postMessage({currentData:currentData,searchText:searchText,filterName:"searchTermFilter"}),_web_workers_worker__WEBPACK_IMPORTED_MODULE_0__.K.onmessage=event=>{const filteredQuotesFromWorker=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));resolve(filteredQuotesFromWorker)})}))},isMobile=()=>window.innerWidth<=600,isDesktop=()=>window.innerWidth>=600},9031:(e,t,r)=>{"use strict";let o;r.d(t,{K:()=>o}),window.Worker?o=new Worker(new URL(r.p+r.u(345),r.b)):alert("Your browser doesn't support web workers.")},2687:(e,t,r)=>{"use strict";r.d(t,{D:()=>_,H:()=>p});var o=r(4994);const s=5;var n=r(5938),i=r(295);var a=r(1930),l=r(2439),u=r(9234);const d=e=>{let{newOptions:t,oldOptions:r,oldOriginalOptions:o,setOptions:s,setOriginalOptions:i,sorting:d}=e;const c=[...l.R,...t];let p=((e,t)=>{let r=JSON.parse(JSON.stringify(t));return r.forEach(((t,o)=>{const s=(0,n.lf)(t.value,e);-1!==s&&(r[o].quotes=e[s].quotes)})),r})(r,[...c]);d===a.y?p=(0,u.xh)(c,p):d===a.P&&(p=(0,u.CQ)(p)),s([...p]),i(c)};var c=r(2922);function p(e){let{philosopher:t,listRef:r,setIsFetching:o,setStart:i,setEnd:a,setSearchText:l,setCurrentPhilosopher:u,currentData:d,setCurrentData:p,options:_,setOptions:h,markedMode:f,markedQuotes:v,setMarkedQuotes:m,scrollPosition:g,setRowsRendered:y,recentPhilosophers:w,setRecentPhilosophers:O}=e;function b(){w&&O([...new Set([t,...w.slice(0,s-1)])]),u(t),(0,c.gt)({philosopher:t,currentData:d,setCurrentData:p,options:_},{markedMode:f,markedQuotes:v,setMarkedQuotes:m}),o(!1)}i(1),a(""),l(""),o(!0),(0,n.SD)({philosopher:t,options:_})?b():(0,n.dA)(t,{options:_,setOptions:h},[]).then(b)}const _=async e=>{let{options:t,setOptions:r,isLoggedIn:s,setSyncDate:n,isFetchingOptions:a,setIsFetchingOptions:l,originalOptions:u,setOriginalOptions:c,sorting:p,syncDate:_}=e;if((e=>{e=new Date(e);const t=(new Date).getTime()-e.getTime();return Math.floor(t/864e5)>=1})(_)||1===t.length){!0!==s&&(null===n||void 0===n||n(Date.now())),null===l||void 0===l||l(!0);let e=await(0,i.YM)((()=>fetch(o.P.STATIC_DATA.STATIC_ASSET_GRAPH)));e=await e.json(),d({newOptions:e,oldOptions:t,oldOriginalOptions:u,setOptions:r,setOriginalOptions:c,sorting:p}),null===l||void 0===l||l(!1)}}},1930:(e,t,r)=>{"use strict";r.d(t,{P:()=>s,y:()=>o});const o="latest",s="alphabetical"},9642:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>D});var o=r(2791),s=r(9137),n=r(5938),i=r(295),a=r(2922),l=r(1278);var u=r(184);const d=o.lazy((()=>(0,i.YM)((()=>Promise.all([r.e(348),r.e(816)]).then(r.bind(r,6179))))));function c(e){const{currentPhilosopher:t,setCurrentData:r,options:s,setOptions:i,setIsFetching:a,isFetching:l}=e;return(0,o.useEffect)((()=>{a(!0),async function(){try{void 0!==t&&((0,n.SD)({philosopher:t,options:s})||await(0,n.dA)(t,{options:s,setOptions:i},[r])),a(!1)}catch(e){console.log(e)}}()}),[t]),!l&&(0,u.jsx)(d,{...e})}const p="home-page_content__X9oEf",_="home-page_contentMinMode__ashFP",h="home-page_homepage__Bl4LI",f="home-page_minMode__DzjH1";var v=r(8687),m=r(4755),g=r(2687),y=r(4891),w=r(9234);var O=r(1930);const b=o.lazy((()=>(0,i.YM)((()=>r.e(397).then(r.bind(r,3397)))))),k=o.lazy((()=>(0,i.YM)((()=>r.e(284).then(r.bind(r,9284)))))),D=()=>{var e,t;let r=function(){const[e]=(0,m.Z)(),t=(0,o.useRef)(),r=(0,v.I0)(),s=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.start})),i=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.end})),a=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.searchText})),l=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.currentPhilosopher})),u=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.currentData})),d=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.markedMode})),c=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.options})),p=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.markedQuotes})),_=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.scheduledPosts})),h=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.darkMode})),f=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.scrollPosition})),O=(0,n.SD)({philosopher:l,options:c}),b=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.originalOptions})),k=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.userName})),D=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.isLoggedIn})),M=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.password})),x=(0,v.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.syncDate})),P=(0,v.v9)((e=>e.philosophersData.sorting)),S=(0,v.v9)((e=>e.philosophersData.voiceSpeed)),T=(0,v.v9)((e=>e.philosophersData.recentPhilosophers)),E=(0,v.v9)((e=>e.philosophersData.minMode)),[C,N]=(0,o.useState)(!1),[z,R]=(0,o.useState)(!1),[L,j]=(0,o.useState)(!1),I=(0,o.useCallback)((e=>r((0,y.i_)(e))),[]),Q=(0,o.useCallback)((e=>r((0,y.sp)(e))),[]),A=(0,o.useCallback)((e=>r((0,y.tA)(e))),[]),F=(0,o.useCallback)((e=>r((0,y.Ue)(e))),[]),W=(0,o.useCallback)((e=>r((0,y.xy)(e))),[]),q=(0,o.useCallback)((e=>r((0,y.Wd)(e))),[]),U=(0,o.useCallback)((e=>r((0,y.Uf)(e))),[]),H=(0,o.useCallback)((e=>r((0,y.MQ)(e))),[]),B=(0,o.useCallback)((e=>r((0,y.IW)(e))),[]),J=(0,o.useCallback)((e=>r((0,y.c9)(e))),[]),K=(0,o.useCallback)((e=>r((0,y.Rs)(e))),[]),Y=(0,o.useCallback)((e=>r((0,y.Q6)(e))),[]),Z=(0,o.useCallback)((e=>r((0,y.ih)(e))),[]),V=(0,o.useCallback)((e=>r((0,y.pA)(e))),[]),X=(0,o.useCallback)((e=>r((0,y.FH)(e))),[]),$=(0,o.useCallback)((e=>r((0,y._F)(e))),[]),G=(0,o.useCallback)((e=>r((0,y.z6)(e))),[]),ee=(0,o.useCallback)((e=>r((0,y.xP)(e))),[]);return(0,o.useEffect)((()=>{D&&(async()=>{const t=Object.values(p).flat().length;let{currentClientDate:r,lastSyncClientDate:o}=(0,w.qZ)(x);r>o&&await(0,w.lq)(k,p,e,H,$,t,r)})()}),[D]),(0,o.useEffect)((()=>{(0,n.WB)(l,c)||(0,g.D)({options:c,setOptions:U,isLoggedIn:D,setSyncDate:$,isFetchingOptions:z,setIsFetchingOptions:R,originalOptions:b,setOriginalOptions:Y,sorting:P})}),[l]),{listRef:t,dispatch:r,start:s,end:i,searchText:a,currentPhilosopher:l,currentData:u,markedMode:d,options:c,markedQuotes:p,scheduledPosts:_,darkMode:h,scrollPosition:f,originalData:O,isFetching:C,setIsFetching:N,setStart:I,setEnd:Q,setSearchText:A,setMarkedMode:F,setCurrentPhilosopher:W,setCurrentData:q,setOptions:U,setMarkedQuotes:H,setScheduledQuotes:B,setDarkMode:J,setScrollPosition:K,originalOptions:b,setOriginalOptions:Y,userName:k,setUserName:Z,isLoggedIn:D,setIsLoggedIn:V,password:M,setPassword:X,isFetchingOptions:z,setIsFetchingOptions:R,rowsRendered:L,setRowsRendered:j,syncDate:x,setSyncDate:$,voiceSpeed:S,recentPhilosophers:T,setRecentPhilosophers:G,minMode:E,setMinMode:ee}}();const{options:i,sorting:d,setSorting:D}=function(){const e=(0,v.I0)(),t=(0,v.v9)((e=>e.philosophersData.originalOptions)),r=(0,v.v9)((e=>e.philosophersData.options)),s=(0,v.v9)((e=>e.philosophersData.sorting)),n=(0,o.useCallback)((t=>e((0,y.ge)(t))),[]);return(0,o.useEffect)((()=>{const o=t=>e((0,y.Uf)(t));let n=[];t.length>1&&(s===O.y?(n=(0,w.xh)(t,r),o(n)):s===O.P&&(n=(0,w.CQ)(r),o(n)))}),[s]),{sorting:s,setSorting:n,options:r,originalOptions:t}}(),{start:M,end:x,searchText:P,currentPhilosopher:S,currentData:T,markedMode:E,markedQuotes:C,darkMode:N,setDarkMode:z,originalData:R,isFetching:L,setCurrentData:j,setMarkedQuotes:I,isFetchingOptions:Q,setIsFetchingOptions:A,minMode:F,setMinMode:W}=r;return r={...r,setSorting:D,sorting:d,isFetchingOptions:Q,setIsFetchingOptions:A},(0,o.useEffect)((()=>{R&&async function(e,t){let{searchText:r,start:o,end:s,currentPhilosopher:n,currentData:i,originalData:u,setCurrentData:d,options:c}=e,{markedMode:p=!1,markedQuotes:_,setMarkedQuotes:h}=t,f=[];""===r&&1==o&&""==s?(0,a.gt)({currentPhilosopher:n,currentData:u,setCurrentData:d,options:c},{markedMode:p,markedQuotes:_,setMarkedQuotes:h}):(f=await(0,l.yC)({searchText:r,currentData:u,setCurrentData:d,currentPhilosopher:n,options:c}),f&&await(0,a.$X)(o,s,f,{markedMode:p,markedQuotes:_,setMarkedQuotes:h},{currentData:i,setCurrentData:d,originalData:u,currentPhilosopher:n}))}({searchText:P,start:M,end:x,currentPhilosopher:S,currentData:T,originalData:R,setCurrentData:j,options:i},{markedMode:E,markedQuotes:C,setMarkedQuotes:I})}),[M,x,P,E,S,null===T||void 0===T?void 0:T.length,null===(e=C[S])||void 0===e||null===(t=e.quotes)||void 0===t?void 0:t.length]),(0,o.useEffect)((()=>{(0,w.IE)(N)}),[N]),(0,o.useEffect)((()=>{(0,l.nI)()&&(z(!1),(0,w.IE)(!1))}),[N]),(0,o.useEffect)((()=>{document.title="".concat((0,a.PZ)({currentPhilosopher:S,options:i})," Quotes")}),[S]),(0,n.WB)(S,i)?(0,u.jsx)("div",{className:h,children:L?(0,u.jsx)(b,{}):(0,u.jsxs)(u.Fragment,{children:[!F&&(0,u.jsx)(k,{...r}),!(0,l.nI)()&&(0,u.jsx)("button",{className:f,onClick:()=>W(!F),children:"Toggle Min Mode"}),(0,u.jsx)("div",{className:F?_:p,children:(0,u.jsx)(s.ZP,{children:e=>{let{height:t,width:o}=e;return(0,u.jsx)(c,{...r,width:o,height:t})}})})]})}):(0,u.jsx)(u.Fragment,{})}},9234:(e,t,r)=>{"use strict";r.d(t,{CQ:()=>a,IE:()=>n,lq:()=>u,qZ:()=>l,xh:()=>i});var o=r(5938),s=r(4652);const n=e=>{let t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},i=(e,t)=>e.map((e=>(0,o.vH)({philosopher:e.value,options:t}))).reverse(),a=e=>[...e].sort(((e,t)=>e.fullName.localeCompare(t.fullName)));function l(e){let t=new Date,r=new Date(e);return t.setHours(0,0,0,0),t=t.getTime(),r=r.setHours(0,0,0,0),{currentClientDate:t,lastSyncClientDate:r}}async function u(e,t,r,o,n,i,a){let{markedQuotesFromServer:l,dateFromServer:u}=await(0,s.M_)({userName:e,markedQuotes:t,openSnackbar:r,setMarkedQuotes:o});if(n(Date.now()),l){const n=Object.values(l).flat().length;n>i?(o(l),r("Auto-Sync : Restored all marked quotes!",4e3)):i>n&&(u=new Date(u),u.setHours(0,0,0,0),a>u&&await(0,s.yf)({userName:e,markedQuotes:t,openSnackbar:r}))}}},4652:(e,t,r)=>{"use strict";r.d(t,{M_:()=>i,yf:()=>n,z9:()=>a});var o=r(4994),s=r(295);const n=async e=>{let{userName:t,markedQuotes:r,openSnackbar:n,setSyncDate:i}=e;await(0,s.YM)((async()=>await fetch(o.P.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:r,dateSynced:Date.now()})})))},i=async e=>{var t;let{userName:r,markedQuotes:n,openSnackbar:i,setMarkedQuotes:a}=e,l=await(0,s.YM)((async()=>await fetch(o.P.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r})})));if(l=await l.json(),null!==(t=l)&&void 0!==t&&t.ok)try{var u,d,c;const e=null===(u=l)||void 0===u||null===(d=u.results)||void 0===d||null===(c=d[0])||void 0===c?void 0:c.markedQuotes,t=Object.values(e).flat().length;var p,_,h;if(e&&t>0)return{markedQuotesFromServer:e,dateFromServer:null===(p=l)||void 0===p||null===(_=p.results)||void 0===_||null===(h=_[0])||void 0===h?void 0:h.dateSynced}}catch(f){i(JSON.stringify(f))}else i(JSON.stringify(l.error))},a=async e=>{var t;let{apiCallType:r,userName:n,password:i,setIsLoggedIn:a,openSnackbar:l,setIsFetching:u}=e;const d=n.charAt(0).toUpperCase()+n.slice(1);let c;u(!0),c="login"===r?await(0,s.YM)((async()=>await fetch(o.P.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:i})}))):await(0,s.YM)((async()=>await fetch(o.P.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:i})}))),c=await c.json(),u(!1),null!==(t=c)&&void 0!==t&&t.ok?(a(!0),l(d+" "+JSON.stringify(c.serverResponse))):l(JSON.stringify(c.error))}},2922:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$X:()=>searchByWordLength,AD:()=>getPhilosopherFullName_i10n,PZ:()=>getPhilosopherFullName,gt:()=>changeQuotesData});var _common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3456),_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(413),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9031);const changeQuotesData=(e,t)=>{let{currentPhilosopher:r,currentData:o,setCurrentData:s,options:n}=e,{markedMode:i=null,markedQuotes:a,setMarkedQuotes:l}=t;o&&s(o),void 0!==i&&i&&(0,_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__.H)({currentPhilosopher:r,markedMode:i,markedQuotes:a,setMarkedQuotes:l,currentData:o,setCurrentData:s})},getPhilosopherFullName=e=>{let{currentPhilosopher:t,options:r}=e;const o=r.filter((e=>{let{value:r}=e;return t===r}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.Z)(o))return o&&o[0].fullName},getPhilosopherFullName_i10n=e=>{let{currentPhilosopher:t,options:r}=e;const o=r.filter((e=>{let{value:r}=e;return t===r}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.Z)(o))return o&&o[0].fullNameInOtherLanguages},searchByWordLength=async(start,end,quotes,_ref7,_ref8)=>{let{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}=_ref7,{setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher}=_ref8;return new Promise((resolve=>{void 0!==quotes&&("string"===typeof start&&""===start.trim()&&(start=0),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.K.postMessage({quotes:quotes,end:end,start:start,filterName:"wordCountFilter"}),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.K.onmessage=event=>{const newData=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));changeQuotesData({currentData:newData,setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher},{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}),resolve()})}))};function getWordCount(e){return e.split(" ").filter((function(e){return""!==e})).length}},888:(e,t,r)=>{"use strict";var o=r(9047);function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,n,i){if(i!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:s};return r.PropTypes=r,r}},2007:(e,t,r)=>{e.exports=r(888)()},9047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5122:(e,t,r)=>{"use strict";var o=r(4836),s=r(5263);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i,a=o(r(6690)),l=o(r(9728)),u=o(r(4993)),d=o(r(3808)),c=o(r(6115)),p=o(r(1655)),_=o(r(8416)),h=s(r(2791)),f=o(r(5044));o(r(2007));function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){(0,_.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=(i=n=function(e){function t(){var e,r;(0,a.default)(this,t);for(var o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return r=(0,u.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(s))),(0,_.default)((0,c.default)(r),"state",{height:r.props.defaultHeight||0,width:r.props.defaultWidth||0}),(0,_.default)((0,c.default)(r),"_parentNode",void 0),(0,_.default)((0,c.default)(r),"_autoSizer",void 0),(0,_.default)((0,c.default)(r),"_window",void 0),(0,_.default)((0,c.default)(r),"_detectElementResize",void 0),(0,_.default)((0,c.default)(r),"_onResize",(function(){var e=r.props,t=e.disableHeight,o=e.disableWidth,s=e.onResize;if(r._parentNode){var n=r._parentNode.offsetHeight||0,i=r._parentNode.offsetWidth||0,a=(r._window||window).getComputedStyle(r._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,u=parseInt(a.paddingRight,10)||0,d=parseInt(a.paddingTop,10)||0,c=parseInt(a.paddingBottom,10)||0,p=n-d-c,_=i-l-u;(!t&&r.state.height!==p||!o&&r.state.width!==_)&&(r.setState({height:n-d-c,width:i-l-u}),s({height:n,width:i}))}})),(0,_.default)((0,c.default)(r),"_setRef",(function(e){r._autoSizer=e})),r}return(0,p.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=(0,f.default)(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,o=e.disableHeight,s=e.disableWidth,n=e.style,i=this.state,a=i.height,l=i.width,u={overflow:"visible"},d={};return o||(u.height=0,d.height=a),s||(u.width=0,d.width=l),h.createElement("div",{className:r,ref:this._setRef,style:m({},u,{},n)},t(d))}}]),t}(h.Component),(0,_.default)(n,"propTypes",null),i);t.default=g,(0,_.default)(g,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}})},9137:(e,t,r)=>{"use strict";var o=r(4836);Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return s.default}});var s=o(r(5122))},5044:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o;o="undefined"!==typeof t?t:"undefined"!==typeof window?window:"undefined"!==typeof self?self:r.g;var s="undefined"!==typeof o.document&&o.document.attachEvent;if(!s){var n=function(){var e=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||function(e){return o.setTimeout(e,20)};return function(t){return e(t)}}(),i=function(){var e=o.cancelAnimationFrame||o.mozCancelAnimationFrame||o.webkitCancelAnimationFrame||o.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,o=t.lastElementChild,s=r.firstElementChild;o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight,s.style.width=r.offsetWidth+1+"px",s.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},l=function(e){if(!(e.target.className&&"function"===typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&i(this.__resizeRAF__),this.__resizeRAF__=n((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(r){r.call(t,e)})))}))}},u=!1,d="",c="animationstart",p="Webkit Moz O ms".split(" "),_="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),h=o.document.createElement("fakeelement");if(void 0!==h.style.animationName&&(u=!0),!1===u)for(var f=0;f<p.length;f++)if(void 0!==h.style[p[f]+"AnimationName"]){d="-"+p[f].toLowerCase()+"-",c=_[f],u=!0;break}var v="resizeanim",m="@"+d+"keyframes "+v+" { from { opacity: 0; } to { opacity: 0; } } ",g=d+"animation: 1ms "+v+"; "}return{addResizeListener:function(t,r){if(s)t.attachEvent("onresize",r);else{if(!t.__resizeTriggers__){var n=t.ownerDocument,i=o.getComputedStyle(t);i&&"static"==i.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var r=(m||"")+".resize-triggers { "+(g||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=t.head||t.getElementsByTagName("head")[0],s=t.createElement("style");s.id="detectElementResize",s.type="text/css",null!=e&&s.setAttribute("nonce",e),s.styleSheet?s.styleSheet.cssText=r:s.appendChild(t.createTextNode(r)),o.appendChild(s)}}(n),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=n.createElement("div")).className="resize-triggers";var u='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var d=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return u}});t.__resizeTriggers__.innerHTML=d.createHTML("")}else t.__resizeTriggers__.innerHTML=u;t.appendChild(t.__resizeTriggers__),a(t),t.addEventListener("scroll",l,!0),c&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==v&&a(t)},t.__resizeTriggers__.addEventListener(c,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(r)}},removeResizeListener:function(e,t){if(s)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",l,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(c,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(r){}}}}}},6115:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},6690:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:(e,t,r)=>{var o=r(4062);function s(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,o(s.key),s)}}e.exports=function(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},8416:(e,t,r)=>{var o=r(4062);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},3808:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1655:(e,t,r)=>{var o=r(6015);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5263:(e,t,r)=>{var o=r(8698).default;function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n},e.exports.__esModule=!0,e.exports.default=e.exports},4993:(e,t,r)=>{var o=r(8698).default,s=r(6115);e.exports=function(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6015:e=>{function t(r,o){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5036:(e,t,r)=>{var o=r(8698).default;e.exports=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!==o(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:(e,t,r)=>{var o=r(8698).default,s=r(5036);e.exports=function(e){var t=s(e,"string");return"symbol"===o(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=642.5aae637e.chunk.js.map