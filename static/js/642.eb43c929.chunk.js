(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[642],{4755:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var o=r(4420),s=r(4819);const n=()=>{const e=(0,o.I0)();return[function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1400;e((0,s.y7)(t)),setTimeout((()=>e((0,s.y7)(""))),r)}]}},3456:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s,k$:()=>n,o8:()=>o});const o=e=>"undefined"===typeof e,s=e=>0===Object.values(e).length&&e.constructor===Object;function n(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},8221:(e,t,r)=>{"use strict";r.d(t,{d:()=>s});var o=r(2485);const s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e=new Date(e);const r=new Date,s=r.getTime()-e.getTime(),n=Math.floor(s/864e5);return t&&(0,o.$)("dev")&&(t("inside isCacheExpired "+r),t("startDate "+e),t("endDate "+r),t("dateDifferenceInMilliSeconds endDate.getTime() - startDate.getTime() "+s),t("dateDifference In hours "+Math.floor(s/36e5%24)),t("dateDifferenceInDays "+n),t("dateDifferenceInDays >= CACHE_TIME_IN_DAYS "+n>=15),t("CACHE_TIME_IN_DAYS 15")),n>=15}},4571:(e,t,r)=>{"use strict";function o(e,t){let r;return function(){const o=this,s=arguments;clearTimeout(r),r=setTimeout((function(){e.apply(o,s)}),t)}}r.d(t,{D:()=>o})},413:(e,t,r)=>{"use strict";r.d(t,{H:()=>s});r(2791);function o(e,t){const r=localStorage.getItem(e),o=JSON.parse(r);return void 0===o||"undefined"===o||"null"===o||null===o?t:o}const s=e=>{let{index:t,currentPhilosopher:r,markedMode:s,markedQuotes:n={},setMarkedQuotes:i,currentData:a,setCurrentData:l}=e,u=JSON.parse(JSON.stringify(n)),c=[];const d="".concat(r,"-MARKED_AS_READ");c=o(d,[]),n&&void 0!==n[r]&&(c=[...c,...n[r]]),c=[...new Set(c)],t&&c.push(t),u[r]=c,i(u);const _=a.filter(((e,t)=>{let{id:r}=e;return-1===c.indexOf(r)}));l(JSON.parse(JSON.stringify(_)))}},2485:(e,t,r)=>{"use strict";function o(e){let t=function(e){e=e.split("+").join(" ");for(var t,r={},o=/[?&]?([^=]+)=([^&]*)/g;t=o.exec(e);)r[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return r}(document.location.search),r=t[e]?t[e].toLowerCase():null;return!("false"!==r&&!r)}r.d(t,{$:()=>o})},1278:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Bj:()=>scrollToQuoteId,nI:()=>isDesktop,rY:()=>scrollToMemorizedRow,tq:()=>isMobile,yC:()=>search});var _web_workers_worker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9031);const scrollToFirstRow=e=>{e.current&&e.current.scrollToRow(0)},scrollToMemorizedRow=(e,t,r)=>{(null===r||void 0===r?void 0:r.length)>0&&e.current&&(void 0!==t&&"undefined"!==t&&t&&t>0?e.current.scrollToRow(t):scrollToFirstRow(e))},scrollToQuoteId=(e,t,r,o)=>{const s=t[o];if((null===r||void 0===r?void 0:r.length)>0&&e.current)if(void 0!==s&&"undefined"!==s&&s&&s>0){const t=r.findIndex((e=>{let{id:t}=e;return t===s}));t>-1&&e.current.scrollToRow(t)}else scrollToFirstRow(e)},search=_ref2=>{let{searchText:searchText,currentData:currentData,setCurrentData:setCurrentData}=_ref2;return new Promise((resolve=>{void 0!==currentData&&(_web_workers_worker__WEBPACK_IMPORTED_MODULE_0__.K.postMessage({currentData:currentData,searchText:searchText,filterName:"searchTermFilter"}),_web_workers_worker__WEBPACK_IMPORTED_MODULE_0__.K.onmessage=event=>{const filteredQuotesFromWorker=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));resolve(filteredQuotesFromWorker)})}))},isMobile=()=>window.innerWidth<=600,isDesktop=()=>window.innerWidth>=600},9031:(e,t,r)=>{"use strict";let o;r.d(t,{K:()=>o}),window.Worker?o=new Worker(new URL(r.p+r.u(345),r.b)):alert("Your browser doesn't support web workers.")},4609:(e,t,r)=>{"use strict";r.d(t,{D:()=>h,H:()=>f});var o=r(4994);const s=8;var n=r(5938),i=r(295),a=r(8221),l=r(1930),u=r(2439),c=r(9234);const d=e=>{let{newOptions:t,oldOptions:r,oldOriginalOptions:o,setOptions:s,setOriginalOptions:i,sorting:a}=e;const d=[...u.R,...t];let _=((e,t)=>{let r=JSON.parse(JSON.stringify(t));return r.forEach(((t,o)=>{const s=(0,n.lf)(t.value,e);-1!==s&&(r[o].quotes=e[s].quotes)})),r})(r,[...d]);a===l.y?_=(0,c.xh)(d,_):a===l.P&&(_=(0,c.CQ)(_)),s([..._]),i(d)};var _=r(2485),p=r(2922);function f(e){let{philosopher:t,listRef:r,setIsFetching:o,setStart:i,setEnd:a,setSearchText:l,setCurrentPhilosopher:u,currentData:c,setCurrentData:d,options:_,setOptions:f,markedMode:h,markedQuotes:m,setMarkedQuotes:g,scrollPosition:v,setRowsRendered:y,recentPhilosophers:w,setRecentPhilosophers:b}=e;function k(){w&&b([...new Set([t,...w.slice(0,s-1)])]),u(t),(0,p.gt)({philosopher:t,currentData:c,setCurrentData:d,options:_},{markedMode:h,markedQuotes:m,setMarkedQuotes:g}),o(!1)}i(1),a(""),l(""),o(!0),(0,n.SD)({philosopher:t,options:_})?k():(0,n.dA)(t,{options:_,setOptions:f},[]).then(k)}const h=async e=>{let{options:t,setOptions:r,isLoggedIn:s,setSyncDate:n,isFetchingOptions:l,setIsFetchingOptions:u,originalOptions:c,setOriginalOptions:p,sorting:f,syncDate:h,setLogs:m}=e;if((0,_.$)("dev")){const e=new Date;m("inside onFocusHandler"),m("isCacheExpired(syncDate, setLogs) || options.length === 1 "+(0,a.d)(h,m)||0),m("options.length "+t.length),m("current time "+e),m("syncDate "+new Date(h))}if((0,a.d)(h,m)||1===t.length){null===u||void 0===u||u(!0);let e=await(0,i.YM)((()=>fetch(o.P.STATIC_DATA.STATIC_ASSET_GRAPH)));e=await e.json(),(0,_.$)("dev")&&m("api response "+e),d({newOptions:e,oldOptions:t,oldOriginalOptions:c,setOptions:r,setOriginalOptions:p,sorting:f}),null===u||void 0===u||u(!1),null===n||void 0===n||n(Date.now())}}},1930:(e,t,r)=>{"use strict";r.d(t,{P:()=>s,y:()=>o});const o="latest",s="alphabetical"},9642:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var o=r(2791),s=r(9137),n=r(5938),i=r(295),a=r(1278),l=r(184);const u=o.lazy((()=>(0,i.YM)((()=>Promise.all([r.e(348),r.e(493)]).then(r.bind(r,9493))))));function c(e){const{currentPhilosopher:t,setCurrentData:r,options:s,setOptions:i,setIsFetching:a,isFetching:c}=e;return(0,o.useEffect)((()=>{a(!0),async function(){try{void 0!==t&&((0,n.SD)({philosopher:t,options:s})||await(0,n.dA)(t,{options:s,setOptions:i},[r])),a(!1)}catch(e){console.log(e)}}()}),[t]),!c&&(0,l.jsx)(u,{...e})}const d="home-page_content__X9oEf",_="home-page_contentMinMode__ashFP",p="home-page_homepage__Bl4LI",f="home-page_minMode__DzjH1";var h=r(4420),m=r(4755),g=r(8221),v=r(4571),y=r(2922);async function w(e,t){let{searchText:r,start:o,end:s,currentPhilosopher:n,currentData:i,originalData:l,setCurrentData:u,options:c}=e,{markedMode:d=!1,markedQuotes:_,setMarkedQuotes:p}=t,f=[];""===r&&1==o&&""==s?(0,y.gt)({currentPhilosopher:n,currentData:l,setCurrentData:u,options:c},{markedMode:d,markedQuotes:_,setMarkedQuotes:p}):(f=await(0,a.yC)({searchText:r,currentData:l,setCurrentData:u,currentPhilosopher:n,options:c}),f&&await(0,y.$X)(o,s,f,{markedMode:d,markedQuotes:_,setMarkedQuotes:p},{currentData:i,setCurrentData:u,originalData:l,currentPhilosopher:n}))}var b=r(4609),k=r(4891),O=r(9234);var D=r(1930);const M=o.lazy((()=>(0,i.YM)((()=>r.e(397).then(r.bind(r,3397)))))),x=o.lazy((()=>(0,i.YM)((()=>r.e(284).then(r.bind(r,9284)))))),P=()=>{const{options:e,sorting:t,setSorting:r}=function(){const e=(0,h.I0)(),t=(0,h.v9)((e=>e.philosophersData.originalOptions)),r=(0,h.v9)((e=>e.philosophersData.options)),s=(0,h.v9)((e=>e.philosophersData.sorting)),n=(0,o.useCallback)((t=>e((0,k.ge)(t))),[]);return(0,o.useEffect)((()=>{const o=t=>e((0,k.Uf)(t));let n=[];t.length>1&&(s===D.y?(n=(0,O.xh)(t,r),o(n)):s===D.P&&(n=(0,O.CQ)(r),o(n)))}),[s]),{sorting:s,setSorting:n,options:r,originalOptions:t}}();let i=function(){var e,t;const[r,s]=(0,o.useState)(!0),[i]=(0,m.Z)(),l=(0,o.useRef)(),u=(0,h.I0)(),{start:c,end:d,searchText:_,currentPhilosopher:p,currentData:f,markedMode:D,options:M,markedQuotes:x,scheduledPosts:P,darkMode:T,scrollPosition:E,originalData:S=(0,n.SD)({philosopher:p,options:M}),originalOptions:C,userName:N,isLoggedIn:R,password:z,syncDate:L,restoreQuotesFromServerCachedDate:I,sorting:j,voiceSpeed:Q,recentPhilosophers:A,minMode:F}=(0,h.v9)((e=>e.philosophersData)),[W,U]=(0,o.useState)(!1),[H,q]=(0,o.useState)(!1),[B,K]=(0,o.useState)(!1),J=(0,o.useCallback)((e=>u((0,k.i_)(e))),[]),Y=(0,o.useCallback)((e=>u((0,k.sp)(e))),[]),Z=(0,o.useCallback)((e=>u((0,k.tA)(e))),[]),$=(0,o.useCallback)((e=>u((0,k.Ue)(e))),[]),V=(0,o.useCallback)((e=>u((0,k.xy)(e))),[]),G=(0,o.useCallback)((e=>u((0,k.Wd)(e))),[]),X=(0,o.useCallback)((e=>u((0,k.Uf)(e))),[]),ee=(0,o.useCallback)((e=>u((0,k.MQ)(e))),[]),te=(0,o.useCallback)((e=>u((0,k.IW)(e))),[]),re=(0,o.useCallback)((e=>u((0,k.c9)(e))),[]),oe=(0,o.useCallback)((e=>u((0,k.Rs)(e))),[]),se=(0,o.useCallback)((e=>u((0,k.Q6)(e))),[]),ne=(0,o.useCallback)((e=>u((0,k.ih)(e))),[]),ie=(0,o.useCallback)((e=>u((0,k.pA)(e))),[]),ae=(0,o.useCallback)((e=>u((0,k.FH)(e))),[]),le=(0,o.useCallback)((e=>u((0,k._F)(e))),[]),ue=(0,o.useCallback)((e=>u((0,k.LU)(e))),[]),ce=(0,o.useCallback)((e=>u((0,k.z6)(e))),[]),de=(0,o.useCallback)((e=>u((0,k.xP)(e))),[]),_e=(0,o.useCallback)((e=>u((0,k.Yp)(e))),[]),pe=(0,v.D)(w,500);return(0,o.useEffect)((()=>{R&&(async()=>{const e=Object.values(x).flat().length;(0,g.d)(I)&&await(0,O.lq)(N,x,i,ee,ue,e)})()}),[R]),(0,o.useEffect)((()=>{(0,n.WB)(p,M)||(0,b.D)({options:M,setOptions:X,isLoggedIn:R,setSyncDate:le,isFetchingOptions:H,setIsFetchingOptions:q,originalOptions:C,setOriginalOptions:se,sorting:j})}),[p]),(0,o.useEffect)((()=>{S&&(r?(w({searchText:_,start:c,end:d,currentPhilosopher:p,currentData:f,originalData:S,setCurrentData:G,options:M},{markedMode:D,markedQuotes:x,setMarkedQuotes:ee}),s(!1)):pe({searchText:_,start:c,end:d,currentPhilosopher:p,currentData:f,originalData:S,setCurrentData:G,options:M},{markedMode:D,markedQuotes:x,setMarkedQuotes:ee}))}),[c,d,_,D,p,null===f||void 0===f?void 0:f.length,null===(e=x[p])||void 0===e||null===(t=e.quotes)||void 0===t?void 0:t.length]),(0,o.useEffect)((()=>{(0,O.IE)(T)}),[T]),(0,o.useEffect)((()=>{(0,a.nI)()&&(re(!1),(0,O.IE)(!1))}),[T]),(0,o.useEffect)((()=>{document.title="".concat((0,y.PZ)({currentPhilosopher:p,options:M})," Quotes")}),[p]),{listRef:l,dispatch:u,start:c,end:d,searchText:_,currentPhilosopher:p,currentData:f,markedMode:D,options:M,markedQuotes:x,scheduledPosts:P,darkMode:T,scrollPosition:E,originalData:S,isFetching:W,setIsFetching:U,setStart:J,setEnd:Y,setSearchText:Z,setMarkedMode:$,setCurrentPhilosopher:V,setCurrentData:G,setOptions:X,setMarkedQuotes:ee,setScheduledQuotes:te,setDarkMode:re,setScrollPosition:oe,originalOptions:C,setOriginalOptions:se,userName:N,setUserName:ne,isLoggedIn:R,setIsLoggedIn:ie,password:z,setPassword:ae,isFetchingOptions:H,setIsFetchingOptions:q,rowsRendered:B,setRowsRendered:K,syncDate:L,setSyncDate:le,voiceSpeed:Q,recentPhilosophers:A,setRecentPhilosophers:ce,minMode:F,setMinMode:de,setLogs:_e,restoreQuotesFromServerCachedDate:I,setRestoreQuotesFromServerCachedDate:ue}}();const{currentPhilosopher:u,isFetching:P,minMode:T,setMinMode:E}=i;return i={...i,setSorting:r,sorting:t},(0,n.WB)(u,e)?(0,l.jsx)("div",{className:p,children:P?(0,l.jsx)(M,{}):(0,l.jsxs)(l.Fragment,{children:[!T&&(0,l.jsx)(x,{...i}),!(0,a.nI)()&&(0,l.jsx)("button",{className:f,onClick:()=>E(!T),children:"Toggle Min Mode"}),(0,l.jsx)("div",{className:T?_:d,children:(0,l.jsx)(s.ZP,{children:e=>{let{height:t,width:r}=e;return(0,l.jsx)(c,{...i,width:r,height:t})}})})]})}):(0,l.jsx)(l.Fragment,{})}},9234:(e,t,r)=>{"use strict";r.d(t,{CQ:()=>a,IE:()=>n,lq:()=>l,xh:()=>i});var o=r(5938),s=r(4652);const n=e=>{let t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},i=(e,t)=>e.map((e=>(0,o.vH)({philosopher:e.value,options:t}))).reverse(),a=e=>[...e].sort(((e,t)=>e.fullName.localeCompare(t.fullName)));async function l(e,t,r,o,n,i){const a=await(0,s.gu)({userName:e});if(a){if(a>i){let{markedQuotesFromServer:t}=await(0,s.M_)({userName:e,openSnackbar:r});o(t),r("Auto-Sync : Restored all marked quotes!",4e3)}else i>a&&await(0,s.yf)({userName:e,markedQuotes:t,openSnackbar:r});n(Date.now())}}},4652:(e,t,r)=>{"use strict";r.d(t,{M_:()=>i,gu:()=>a,yf:()=>n,z9:()=>l});var o=r(4994),s=r(295);const n=async e=>{let{userName:t,markedQuotes:r,openSnackbar:n,setSyncDate:i}=e;await(0,s.YM)((async()=>await fetch(o.P.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:r,dateSynced:Date.now()})})))},i=async e=>{var t;let{userName:r,openSnackbar:n}=e,i=await(0,s.YM)((async()=>await fetch(o.P.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r})})));if(i=await i.json(),null!==(t=i)&&void 0!==t&&t.ok)try{var a,l,u;const e=null===(a=i)||void 0===a||null===(l=a.results)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.markedQuotes,t=Object.values(e).flat().length;var c,d,_;if(e&&t>0)return{markedQuotesFromServer:e,dateFromServer:null===(c=i)||void 0===c||null===(d=c.results)||void 0===d||null===(_=d[0])||void 0===_?void 0:_.dateSynced}}catch(p){n(JSON.stringify(p))}else n(JSON.stringify(i.error))},a=async e=>{var t;let{userName:r}=e,n=await(0,s.YM)((async()=>await fetch(o.P.MARKED_QUOTES.GET_COUNT,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r})})));return n=await n.json(),null!==(t=n)&&void 0!==t&&t.ok?n.count:null},l=async e=>{var t;let{apiCallType:r,userName:n,password:i,setIsLoggedIn:a,openSnackbar:l,setIsFetching:u}=e;const c=n.charAt(0).toUpperCase()+n.slice(1);let d;u(!0),d="login"===r?await(0,s.YM)((async()=>await fetch(o.P.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:i})}))):await(0,s.YM)((async()=>await fetch(o.P.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:i})}))),d=await d.json(),u(!1),null!==(t=d)&&void 0!==t&&t.ok?(a(!0),l(c+" "+JSON.stringify(d.serverResponse))):l(JSON.stringify(d.error))}},2922:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$X:()=>searchByWordLength,AD:()=>getPhilosopherFullName_i10n,PZ:()=>getPhilosopherFullName,gt:()=>changeQuotesData});var _common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3456),_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(413),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9031);const changeQuotesData=(e,t)=>{let{currentPhilosopher:r,currentData:o,setCurrentData:s,options:n}=e,{markedMode:i=null,markedQuotes:a,setMarkedQuotes:l}=t;o&&s(o),void 0!==i&&i&&(0,_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__.H)({currentPhilosopher:r,markedMode:i,markedQuotes:a,setMarkedQuotes:l,currentData:o,setCurrentData:s})},getPhilosopherFullName=e=>{let{currentPhilosopher:t,options:r}=e;const o=r.filter((e=>{let{value:r}=e;return t===r}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.Z)(o))return o&&o[0].fullName},getPhilosopherFullName_i10n=e=>{let{currentPhilosopher:t,options:r}=e;const o=r.filter((e=>{let{value:r}=e;return t===r}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.Z)(o))return o&&o[0].fullNameInOtherLanguages},searchByWordLength=async(start,end,quotes,_ref7,_ref8)=>{let{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}=_ref7,{setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher}=_ref8;return new Promise((resolve=>{void 0!==quotes&&("string"===typeof start&&""===start.trim()&&(start=0),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.K.postMessage({quotes:quotes,end:end,start:start,filterName:"wordCountFilter"}),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.K.onmessage=event=>{const newData=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));changeQuotesData({currentData:newData,setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher},{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}),resolve()})}))};function getWordCount(e){return e.split(" ").filter((function(e){return""!==e})).length}},888:(e,t,r)=>{"use strict";var o=r(9047);function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,t,r,s,n,i){if(i!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:s};return r.PropTypes=r,r}},2007:(e,t,r)=>{e.exports=r(888)()},9047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5122:(e,t,r)=>{"use strict";var o=r(4836),s=r(5263);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i,a=o(r(6690)),l=o(r(9728)),u=o(r(4993)),c=o(r(3808)),d=o(r(6115)),_=o(r(1655)),p=o(r(8416)),f=s(r(2791)),h=o(r(5044));o(r(2007));function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){(0,p.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=(i=n=function(e){function t(){var e,r;(0,a.default)(this,t);for(var o=arguments.length,s=new Array(o),n=0;n<o;n++)s[n]=arguments[n];return r=(0,u.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(s))),(0,p.default)((0,d.default)(r),"state",{height:r.props.defaultHeight||0,width:r.props.defaultWidth||0}),(0,p.default)((0,d.default)(r),"_parentNode",void 0),(0,p.default)((0,d.default)(r),"_autoSizer",void 0),(0,p.default)((0,d.default)(r),"_window",void 0),(0,p.default)((0,d.default)(r),"_detectElementResize",void 0),(0,p.default)((0,d.default)(r),"_onResize",(function(){var e=r.props,t=e.disableHeight,o=e.disableWidth,s=e.onResize;if(r._parentNode){var n=r._parentNode.offsetHeight||0,i=r._parentNode.offsetWidth||0,a=(r._window||window).getComputedStyle(r._parentNode)||{},l=parseInt(a.paddingLeft,10)||0,u=parseInt(a.paddingRight,10)||0,c=parseInt(a.paddingTop,10)||0,d=parseInt(a.paddingBottom,10)||0,_=n-c-d,p=i-l-u;(!t&&r.state.height!==_||!o&&r.state.width!==p)&&(r.setState({height:n-c-d,width:i-l-u}),s({height:n,width:i}))}})),(0,p.default)((0,d.default)(r),"_setRef",(function(e){r._autoSizer=e})),r}return(0,_.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=(0,h.default)(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,o=e.disableHeight,s=e.disableWidth,n=e.style,i=this.state,a=i.height,l=i.width,u={overflow:"visible"},c={};return o||(u.height=0,c.height=a),s||(u.width=0,c.width=l),f.createElement("div",{className:r,ref:this._setRef,style:g({},u,{},n)},t(c))}}]),t}(f.Component),(0,p.default)(n,"propTypes",null),i);t.default=v,(0,p.default)(v,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}})},9137:(e,t,r)=>{"use strict";var o=r(4836);Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return s.default}});var s=o(r(5122))},5044:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var o;o="undefined"!==typeof t?t:"undefined"!==typeof window?window:"undefined"!==typeof self?self:r.g;var s="undefined"!==typeof o.document&&o.document.attachEvent;if(!s){var n=function(){var e=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||function(e){return o.setTimeout(e,20)};return function(t){return e(t)}}(),i=function(){var e=o.cancelAnimationFrame||o.mozCancelAnimationFrame||o.webkitCancelAnimationFrame||o.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,o=t.lastElementChild,s=r.firstElementChild;o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight,s.style.width=r.offsetWidth+1+"px",s.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},l=function(e){if(!(e.target.className&&"function"===typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&i(this.__resizeRAF__),this.__resizeRAF__=n((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(r){r.call(t,e)})))}))}},u=!1,c="",d="animationstart",_="Webkit Moz O ms".split(" "),p="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),f=o.document.createElement("fakeelement");if(void 0!==f.style.animationName&&(u=!0),!1===u)for(var h=0;h<_.length;h++)if(void 0!==f.style[_[h]+"AnimationName"]){c="-"+_[h].toLowerCase()+"-",d=p[h],u=!0;break}var m="resizeanim",g="@"+c+"keyframes "+m+" { from { opacity: 0; } to { opacity: 0; } } ",v=c+"animation: 1ms "+m+"; "}return{addResizeListener:function(t,r){if(s)t.attachEvent("onresize",r);else{if(!t.__resizeTriggers__){var n=t.ownerDocument,i=o.getComputedStyle(t);i&&"static"==i.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var r=(g||"")+".resize-triggers { "+(v||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=t.head||t.getElementsByTagName("head")[0],s=t.createElement("style");s.id="detectElementResize",s.type="text/css",null!=e&&s.setAttribute("nonce",e),s.styleSheet?s.styleSheet.cssText=r:s.appendChild(t.createTextNode(r)),o.appendChild(s)}}(n),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=n.createElement("div")).className="resize-triggers";var u='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var c=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return u}});t.__resizeTriggers__.innerHTML=c.createHTML("")}else t.__resizeTriggers__.innerHTML=u;t.appendChild(t.__resizeTriggers__),a(t),t.addEventListener("scroll",l,!0),d&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==m&&a(t)},t.__resizeTriggers__.addEventListener(d,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(r)}},removeResizeListener:function(e,t){if(s)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",l,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(d,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(r){}}}}}},6115:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},6690:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:(e,t,r)=>{var o=r(4062);function s(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,o(s.key),s)}}e.exports=function(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},8416:(e,t,r)=>{var o=r(4062);e.exports=function(e,t,r){return(t=o(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},3808:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1655:(e,t,r)=>{var o=r(6015);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5263:(e,t,r)=>{var o=r(8698).default;function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n},e.exports.__esModule=!0,e.exports.default=e.exports},4993:(e,t,r)=>{var o=r(8698).default,s=r(6115);e.exports=function(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return s(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6015:e=>{function t(r,o){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,o)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},5036:(e,t,r)=>{var o=r(8698).default;e.exports=function(e,t){if("object"!=o(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=o(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:(e,t,r)=>{var o=r(8698).default,s=r(5036);e.exports=function(e){var t=s(e,"string");return"symbol"==o(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=642.eb43c929.chunk.js.map