"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[890],{3456:(e,t,o)=>{o.d(t,{Z:()=>r,k$:()=>n,o8:()=>s});const s=e=>"undefined"===typeof e,r=e=>0===Object.values(e).length&&e.constructor===Object;function n(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},8221:(e,t,o)=>{o.d(t,{d:()=>r});var s=o(2485);const r=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e=new Date(e);const r=new Date,n=r.getTime()-e.getTime(),a=Math.floor(n/864e5);return o&&(0,s.$)("dev")&&(o("inside isCacheExpired "+r),o("startDate "+e),o("endDate "+r),o("dateDifferenceInMilliSeconds endDate.getTime() - startDate.getTime() "+n),o("dateDifference In hours "+Math.floor(n/36e5%24)),o("dateDifferenceInDays "+a),o("dateDifferenceInDays >= cacheTime "+a>=t),o("cacheTime "+t)),a>=t}},413:(e,t,o)=>{o.d(t,{H:()=>r});o(2791);function s(e,t){const o=localStorage.getItem(e),s=JSON.parse(o);return void 0===s||"undefined"===s||"null"===s||null===s?t:s}const r=e=>{let{index:t,currentPhilosopher:o,markedMode:r,markedQuotes:n={},setMarkedQuotes:a,currentData:i,setCurrentData:l}=e,c=JSON.parse(JSON.stringify(n)),u=[];const d="".concat(o,"-MARKED_AS_READ");u=s(d,[]),n&&void 0!==n[o]&&(u=[...u,...n[o]]),u=[...new Set(u)],t&&u.push(t),c[o]=u,a(c);const p=i.filter(((e,t)=>{let{id:o}=e;return-1===u.indexOf(o)}));l(JSON.parse(JSON.stringify(p)))}},2485:(e,t,o)=>{function s(e){let t=function(e){e=e.split("+").join(" ");for(var t,o={},s=/[?&]?([^=]+)=([^&]*)/g;t=s.exec(e);)o[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return o}(document.location.search),o=t[e]?t[e].toLowerCase():null;return!("false"!==o&&!o)}o.d(t,{$:()=>s})},9031:(e,t,o)=>{let s;o.d(t,{K:()=>s}),window.Worker?s=new Worker(new URL(o.p+o.u(345),o.b)):alert("Your browser doesn't support web workers.")},3890:(e,t,o)=>{o.r(t),o.d(t,{default:()=>k});var s=o(2791),r=o(4420),n=o(4609),a=o(4891),i=o(9234);const l="table_table__awqB+",c="table_tableHeading__TogSS",u="table_tableColumn__ajfcX";var d=o(184);const p=e=>{let{tableData:t,columns:o}=e;return(0,d.jsx)("tbody",{children:t.map((e=>(0,d.jsx)("tr",{children:o.map((t=>{let{accessor:o}=t;const s=e[o]?e[o]:"\u2014\u2014";return(0,d.jsx)("td",{className:u,children:s},o)}))},e.id)))})},_=e=>{let{columns:t,handleSorting:o}=e;const[r,n]=(0,s.useState)(""),[a,i]=(0,s.useState)("asc");return(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:t.map((e=>{let{label:t,accessor:s,sortable:l}=e;const u=l?r===s&&"asc"===a?"up":r===s&&"desc"===a?"down":"default":"";return(0,d.jsx)("th",{className:"".concat(c," ").concat(u),onClick:l?()=>(e=>{const t=e===r&&"asc"===a?"desc":"asc";n(e),i(t),o(e,t)})(s):null,children:t},s)}))})})};const h=(e,t)=>{const[o,r]=(0,s.useState)([]);(0,s.useEffect)((()=>{r(function(e,t){return[...e].sort(((e,o)=>{const s=t.filter((e=>e.sortbyOrder));let{accessor:r="id",sortbyOrder:n="asc"}=Object.assign({},...s);if(null===e[r])return 1;if(null===o[r])return-1;if(null===e[r]&&null===o[r])return 0;const a=e[r].toString().localeCompare(o[r].toString(),"en",{numeric:!0});return"asc"===n?a:-a}))}(e,t))}),[e]);return[o,(e,t)=>{if(e){const s=[...o].sort(((o,s)=>null===o[e]?1:null===s[e]?-1:null===o[e]&&null===s[e]?0:o[e].toString().localeCompare(s[e].toString(),"en",{numeric:!0})*("asc"===t?1:-1)));r(s)}}]},m=e=>{let{data:t,columns:o}=e;const[s,r]=h(t,o);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("table",{className:l,children:[(0,d.jsx)(_,{columns:o,handleSorting:r}),(0,d.jsx)(p,{columns:o,tableData:s})]})})},f=JSON.parse('[{"label":"Philosopher","accessor":"philosopher","sortable":true},{"label":"Read Count","accessor":"readCount","sortable":true,"sortbyOrder":"desc"}]');var g=o(5938),D=o(3456),O=o(2922);const k=()=>{const[e,t]=(0,s.useState)([]),o=(0,r.I0)(),l=(0,r.v9)((e=>e.philosophersData.markedQuotes)),c=(0,r.v9)((e=>e.philosophersData.options)),u=(0,r.v9)((e=>e.philosophersData.darkMode)),p=(0,r.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.originalOptions})),_=e=>o((0,a.Q6)(e)),h=e=>o((0,a.Uf)(e)),k=(0,r.v9)((e=>e.philosophersData.sorting));return(0,s.useEffect)((()=>{(0,n.D)({options:c,setOptions:h,originalOptions:p,setOriginalOptions:_,sorting:k})}),[]),(0,s.useEffect)((()=>{(e=>{let{markedQuotes:t,options:o,setData:s}=e;const r=[];let n=0;for(const i in t)if(t.hasOwnProperty(i)&&-1!==(0,g.lf)(i,o)){let e=0;(0,D.o8)(t[i])||(e=t[i].length,n+=e);const s={philosopher:(0,O.PZ)({currentPhilosopher:i,options:o}),readCount:e,id:(0,D.k$)()};r.push(s)}const a={philosopher:"Total Read",readCount:n,id:(0,D.k$)()};r.push(a),s(r)})({markedQuotes:l,options:c,setData:t})}),[c.length]),(0,s.useEffect)((()=>{(0,i.IE)(u)}),[u]),e.length>0?(0,d.jsx)(m,{data:e,columns:f}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",fontSize:"2rem",margin:"3rem"},children:"No records found!"}),(0,d.jsx)("div",{style:{fontSize:"2rem",margin:"3rem"},children:"Please use, marked mode feature, mark quotes as read and come back."})]})}},4609:(e,t,o)=>{o.d(t,{D:()=>f,H:()=>m});var s=o(4994),r=o(6677);const n=8;var a=o(5938),i=o(295),l=o(8221),c=o(1930),u=o(2439),d=o(9234);const p=e=>{let{newOptions:t,oldOptions:o,oldOriginalOptions:s,setOptions:r,setOriginalOptions:n,sorting:i}=e;const l=[...u.R,...t];let p=((e,t)=>{let o=JSON.parse(JSON.stringify(t));return o.forEach(((t,s)=>{const r=(0,a.lf)(t.value,e);-1!==r&&(o[s].quotes=e[r].quotes)})),o})(o,[...l]);i===c.y?p=(0,d.xh)(l,p):i===c.P&&(p=(0,d.CQ)(p)),r([...p]),n(l)};var _=o(2485),h=o(2922);function m(e){let{philosopher:t,listRef:o,setIsFetching:s,setStart:r,setEnd:i,setSearchText:l,setCurrentPhilosopher:c,currentData:u,setCurrentData:d,options:p,setOptions:_,markedMode:m,markedQuotes:f,setMarkedQuotes:g,scrollPosition:D,setRowsRendered:O,recentPhilosophers:k,setRecentPhilosophers:v}=e;function w(){k&&v([...new Set([t,...k.slice(0,n-1)])]),c(t),(0,h.gt)({philosopher:t,currentData:u,setCurrentData:d,options:p},{markedMode:m,markedQuotes:f,setMarkedQuotes:g}),s(!1)}r(1),i(""),l(""),s(!0),(0,a.SD)({philosopher:t,options:p})?w():(0,a.dA)(t,{options:p,setOptions:_},[]).then(w)}const f=async e=>{let{options:t,setOptions:o,isLoggedIn:n,setSyncDate:a,isFetchingOptions:c,setIsFetchingOptions:u,originalOptions:d,setOriginalOptions:h,sorting:m,syncDate:f,setLogs:g}=e;if((0,_.$)("dev")){const e=new Date;g("inside onFocusHandler"),g("isCacheExpired(syncDate, CACHE_IN_DAYS.ASSET_GRAPH, setLogs) || options.length === 1 "+(0,l.d)(f,r.c,g)||0),g("options.length "+t.length),g("current time "+e),g("syncDate "+new Date(f))}if((0,l.d)(f,r.c,g)||1===t.length){null===u||void 0===u||u(!0);let e=await(0,i.YM)((()=>fetch(s.P.STATIC_DATA.STATIC_ASSET_GRAPH)));e=await e.json(),(0,_.$)("dev")&&g("api response "+e),p({newOptions:e,oldOptions:t,oldOriginalOptions:d,setOptions:o,setOriginalOptions:h,sorting:m}),null===u||void 0===u||u(!1),null===a||void 0===a||a(Date.now())}}},1930:(e,t,o)=>{o.d(t,{P:()=>r,y:()=>s});const s="latest",r="alphabetical"},9234:(e,t,o)=>{o.d(t,{CQ:()=>i,IE:()=>n,lq:()=>l,xh:()=>a});var s=o(5938),r=o(4652);const n=e=>{let t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},a=(e,t)=>e.map((e=>(0,s.vH)({philosopher:e.value,options:t}))).reverse(),i=e=>[...e].sort(((e,t)=>e.fullName.localeCompare(t.fullName)));async function l(e,t,o,s,n,a){const i=await(0,r.gu)({userName:e});if(i){if(i>a){let{markedQuotesFromServer:t}=await(0,r.M_)({userName:e,openSnackbar:o});s(t),o("Auto-Sync : Restored all marked quotes!",4e3)}else a>i&&await(0,r.yf)({userName:e,markedQuotes:t,openSnackbar:o});n(Date.now())}}},4652:(e,t,o)=>{o.d(t,{M_:()=>a,gu:()=>i,yf:()=>n,z9:()=>l});var s=o(4994),r=o(295);const n=async e=>{let{userName:t,markedQuotes:o,openSnackbar:n,setSyncDate:a}=e;await(0,r.YM)((async()=>await fetch(s.P.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:o,dateSynced:Date.now()})})))},a=async e=>{var t;let{userName:o,openSnackbar:n}=e,a=await(0,r.YM)((async()=>await fetch(s.P.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o})})));if(a=await a.json(),null!==(t=a)&&void 0!==t&&t.ok)try{var i,l,c;const e=null===(i=a)||void 0===i||null===(l=i.results)||void 0===l||null===(c=l[0])||void 0===c?void 0:c.markedQuotes,t=Object.values(e).flat().length;var u,d,p;if(e&&t>0)return{markedQuotesFromServer:e,dateFromServer:null===(u=a)||void 0===u||null===(d=u.results)||void 0===d||null===(p=d[0])||void 0===p?void 0:p.dateSynced}}catch(_){n(JSON.stringify(_))}else n(JSON.stringify(a.error))},i=async e=>{var t;let{userName:o}=e,n=await(0,r.YM)((async()=>await fetch(s.P.MARKED_QUOTES.GET_COUNT,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o})})));var a;return n=await n.json(),null!==(t=n)&&void 0!==t&&t.ok?null===(a=n)||void 0===a?void 0:a.count:null},l=async e=>{var t;let{apiCallType:o,userName:n,password:a,setIsLoggedIn:i,openSnackbar:l,setIsFetching:c}=e;const u=n.charAt(0).toUpperCase()+n.slice(1);let d;c(!0),d="login"===o?await(0,r.YM)((async()=>await fetch(s.P.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:a})}))):await(0,r.YM)((async()=>await fetch(s.P.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:a})}))),d=await d.json(),c(!1),null!==(t=d)&&void 0!==t&&t.ok?(i(!0),l(u+" "+JSON.stringify(d.serverResponse))):l(JSON.stringify(d.error))}},2922:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$X:()=>searchByWordLength,AD:()=>getPhilosopherFullName_i10n,PZ:()=>getPhilosopherFullName,gt:()=>changeQuotesData});var _common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3456),_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(413),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9031);const changeQuotesData=(e,t)=>{let{currentPhilosopher:o,currentData:s,setCurrentData:r,options:n}=e,{markedMode:a=null,markedQuotes:i,setMarkedQuotes:l}=t;s&&r(s),void 0!==a&&a&&(0,_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__.H)({currentPhilosopher:o,markedMode:a,markedQuotes:i,setMarkedQuotes:l,currentData:s,setCurrentData:r})},getPhilosopherFullName=e=>{let{currentPhilosopher:t,options:o}=e;const s=o.filter((e=>{let{value:o}=e;return t===o}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.Z)(s))return s&&s[0].fullName},getPhilosopherFullName_i10n=e=>{let{currentPhilosopher:t,options:o}=e;const s=o.filter((e=>{let{value:o}=e;return t===o}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.Z)(s))return s&&s[0].fullNameInOtherLanguages},searchByWordLength=async(start,end,quotes,_ref7,_ref8)=>{let{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}=_ref7,{setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher}=_ref8;return new Promise((resolve=>{void 0!==quotes&&("string"===typeof start&&""===start.trim()&&(start=0),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.K.postMessage({quotes:quotes,end:end,start:start,filterName:"wordCountFilter"}),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.K.onmessage=event=>{const newData=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));changeQuotesData({currentData:newData,setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher},{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}),resolve()})}))};function getWordCount(e){return e.split(" ").filter((function(e){return""!==e})).length}},6677:e=>{e.exports={c:1e3,I:1}}}]);
//# sourceMappingURL=890.0e5ea624.chunk.js.map