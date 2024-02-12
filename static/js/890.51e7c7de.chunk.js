"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[890],{3456:(e,t,s)=>{s.d(t,{Z:()=>r,k$:()=>n,o8:()=>o});const o=e=>"undefined"===typeof e,r=e=>0===Object.values(e).length&&e.constructor===Object;function n(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},8221:(e,t,s)=>{s.d(t,{d:()=>r});var o=s(2485);const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e=new Date(e);const s=new Date,r=s.getTime()-e.getTime(),n=Math.floor(r/864e5);return t&&(0,o.$)("dev")&&(t("inside isCacheExpired "+s),t("startDate "+e),t("endDate "+s),t("dateDifferenceInMilliSeconds endDate.getTime() - startDate.getTime() "+r),t("dateDifference In hours "+Math.floor(r/36e5%24)),t("dateDifferenceInDays "+n),t("dateDifferenceInDays >= CACHE_TIME_IN_DAYS "+n>=15),t("CACHE_TIME_IN_DAYS 15")),n>=15}},413:(e,t,s)=>{s.d(t,{H:()=>r});s(2791);function o(e,t){const s=localStorage.getItem(e),o=JSON.parse(s);return void 0===o||"undefined"===o||"null"===o||null===o?t:o}const r=e=>{let{index:t,currentPhilosopher:s,markedMode:r,markedQuotes:n={},setMarkedQuotes:a,currentData:i,setCurrentData:l}=e,c=JSON.parse(JSON.stringify(n)),u=[];const d="".concat(s,"-MARKED_AS_READ");u=o(d,[]),n&&void 0!==n[s]&&(u=[...u,...n[s]]),u=[...new Set(u)],t&&u.push(t),c[s]=u,a(c);const p=i.filter(((e,t)=>{let{id:s}=e;return-1===u.indexOf(s)}));l(JSON.parse(JSON.stringify(p)))}},2485:(e,t,s)=>{function o(e){let t=function(e){e=e.split("+").join(" ");for(var t,s={},o=/[?&]?([^=]+)=([^&]*)/g;t=o.exec(e);)s[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return s}(document.location.search),s=t[e]?t[e].toLowerCase():null;return!("false"!==s&&!s)}s.d(t,{$:()=>o})},9031:(e,t,s)=>{let o;s.d(t,{K:()=>o}),window.Worker?o=new Worker(new URL(s.p+s.u(345),s.b)):alert("Your browser doesn't support web workers.")},3890:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var o=s(2791),r=s(4420),n=s(4609),a=s(4891),i=s(9234);const l="table_table__DjpbW",c="table_tableHeading__bQNPH",u="table_tableColumn__X9yJG";var d=s(184);const p=e=>{let{tableData:t,columns:s}=e;return(0,d.jsx)("tbody",{children:t.map((e=>(0,d.jsx)("tr",{children:s.map((t=>{let{accessor:s}=t;const o=e[s]?e[s]:"\u2014\u2014";return(0,d.jsx)("td",{className:u,children:o},s)}))},e.id)))})},_=e=>{let{columns:t,handleSorting:s}=e;const[r,n]=(0,o.useState)(""),[a,i]=(0,o.useState)("asc");return(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:t.map((e=>{let{label:t,accessor:o,sortable:l}=e;const u=l?r===o&&"asc"===a?"up":r===o&&"desc"===a?"down":"default":"";return(0,d.jsx)("th",{className:"".concat(c," ").concat(u),onClick:l?()=>(e=>{const t=e===r&&"asc"===a?"desc":"asc";n(e),i(t),s(e,t)})(o):null,children:t},o)}))})})};const h=(e,t)=>{const[s,r]=(0,o.useState)([]);(0,o.useEffect)((()=>{r(function(e,t){return[...e].sort(((e,s)=>{const o=t.filter((e=>e.sortbyOrder));let{accessor:r="id",sortbyOrder:n="asc"}=Object.assign({},...o);if(null===e[r])return 1;if(null===s[r])return-1;if(null===e[r]&&null===s[r])return 0;const a=e[r].toString().localeCompare(s[r].toString(),"en",{numeric:!0});return"asc"===n?a:-a}))}(e,t))}),[e]);return[s,(e,t)=>{if(e){const o=[...s].sort(((s,o)=>null===s[e]?1:null===o[e]?-1:null===s[e]&&null===o[e]?0:s[e].toString().localeCompare(o[e].toString(),"en",{numeric:!0})*("asc"===t?1:-1)));r(o)}}]},m=e=>{let{data:t,columns:s}=e;const[o,r]=h(t,s);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("table",{className:l,children:[(0,d.jsx)(_,{columns:s,handleSorting:r}),(0,d.jsx)(p,{columns:s,tableData:o})]})})},f=JSON.parse('[{"label":"Philosopher","accessor":"philosopher","sortable":true},{"label":"Read Count","accessor":"readCount","sortable":true,"sortbyOrder":"desc"}]');var g=s(5938),D=s(3456),O=s(2922);const k=()=>{const[e,t]=(0,o.useState)([]),s=(0,r.I0)(),l=(0,r.v9)((e=>e.philosophersData.markedQuotes)),c=(0,r.v9)((e=>e.philosophersData.options)),u=(0,r.v9)((e=>e.philosophersData.darkMode)),p=(0,r.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.originalOptions})),_=e=>s((0,a.Q6)(e)),h=e=>s((0,a.Uf)(e)),k=(0,r.v9)((e=>e.philosophersData.sorting));return(0,o.useEffect)((()=>{(0,n.D)({options:c,setOptions:h,originalOptions:p,setOriginalOptions:_,sorting:k})}),[]),(0,o.useEffect)((()=>{(e=>{let{markedQuotes:t,options:s,setData:o}=e;const r=[];let n=0;for(const i in t)if(t.hasOwnProperty(i)&&-1!==(0,g.lf)(i,s)){let e=0;(0,D.o8)(t[i])||(e=t[i].length,n+=e);const o={philosopher:(0,O.PZ)({currentPhilosopher:i,options:s}),readCount:e,id:(0,D.k$)()};r.push(o)}const a={philosopher:"Total Read",readCount:n,id:(0,D.k$)()};r.push(a),o(r)})({markedQuotes:l,options:c,setData:t})}),[c.length]),(0,o.useEffect)((()=>{(0,i.IE)(u)}),[u]),e.length>0?(0,d.jsx)(m,{data:e,columns:f}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",fontSize:"2rem",margin:"3rem"},children:"No records found!"}),(0,d.jsx)("div",{style:{fontSize:"2rem",margin:"3rem"},children:"Please use, marked mode feature, mark quotes as read and come back."})]})}},4609:(e,t,s)=>{s.d(t,{D:()=>m,H:()=>h});var o=s(4994);const r=8;var n=s(5938),a=s(295),i=s(8221),l=s(1930),c=s(2439),u=s(9234);const d=e=>{let{newOptions:t,oldOptions:s,oldOriginalOptions:o,setOptions:r,setOriginalOptions:a,sorting:i}=e;const d=[...c.R,...t];let p=((e,t)=>{let s=JSON.parse(JSON.stringify(t));return s.forEach(((t,o)=>{const r=(0,n.lf)(t.value,e);-1!==r&&(s[o].quotes=e[r].quotes)})),s})(s,[...d]);i===l.y?p=(0,u.xh)(d,p):i===l.P&&(p=(0,u.CQ)(p)),r([...p]),a(d)};var p=s(2485),_=s(2922);function h(e){let{philosopher:t,listRef:s,setIsFetching:o,setStart:a,setEnd:i,setSearchText:l,setCurrentPhilosopher:c,currentData:u,setCurrentData:d,options:p,setOptions:h,markedMode:m,markedQuotes:f,setMarkedQuotes:g,scrollPosition:D,setRowsRendered:O,recentPhilosophers:k,setRecentPhilosophers:y}=e;function v(){k&&y([...new Set([t,...k.slice(0,r-1)])]),c(t),(0,_.gt)({philosopher:t,currentData:u,setCurrentData:d,options:p},{markedMode:m,markedQuotes:f,setMarkedQuotes:g}),o(!1)}a(1),i(""),l(""),o(!0),(0,n.SD)({philosopher:t,options:p})?v():(0,n.dA)(t,{options:p,setOptions:h},[]).then(v)}const m=async e=>{let{options:t,setOptions:s,isLoggedIn:r,setSyncDate:n,isFetchingOptions:l,setIsFetchingOptions:c,originalOptions:u,setOriginalOptions:_,sorting:h,syncDate:m,setLogs:f}=e;if((0,p.$)("dev")){const e=new Date;f("inside onFocusHandler"),f("isCacheExpired(syncDate, setLogs) || options.length === 1 "+(0,i.d)(m,f)||0),f("options.length "+t.length),f("current time "+e),f("syncDate "+new Date(m))}if((0,i.d)(m,f)||1===t.length){null===c||void 0===c||c(!0);let e=await(0,a.YM)((()=>fetch(o.P.STATIC_DATA.STATIC_ASSET_GRAPH)));e=await e.json(),(0,p.$)("dev")&&f("api response "+e),d({newOptions:e,oldOptions:t,oldOriginalOptions:u,setOptions:s,setOriginalOptions:_,sorting:h}),null===c||void 0===c||c(!1),null===n||void 0===n||n(Date.now())}}},1930:(e,t,s)=>{s.d(t,{P:()=>r,y:()=>o});const o="latest",r="alphabetical"},9234:(e,t,s)=>{s.d(t,{CQ:()=>i,IE:()=>n,lq:()=>l,xh:()=>a});var o=s(5938),r=s(4652);const n=e=>{let t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},a=(e,t)=>e.map((e=>(0,o.vH)({philosopher:e.value,options:t}))).reverse(),i=e=>[...e].sort(((e,t)=>e.fullName.localeCompare(t.fullName)));async function l(e,t,s,o,n,a){const i=await(0,r.gu)({userName:e});if(i){if(i>a){let{markedQuotesFromServer:t}=await(0,r.M_)({userName:e,openSnackbar:s});o(t),s("Auto-Sync : Restored all marked quotes!",4e3)}else a>i&&await(0,r.yf)({userName:e,markedQuotes:t,openSnackbar:s});n(Date.now())}}},4652:(e,t,s)=>{s.d(t,{M_:()=>a,gu:()=>i,yf:()=>n,z9:()=>l});var o=s(4994),r=s(295);const n=async e=>{let{userName:t,markedQuotes:s,openSnackbar:n,setSyncDate:a}=e;await(0,r.YM)((async()=>await fetch(o.P.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:s,dateSynced:Date.now()})})))},a=async e=>{var t;let{userName:s,openSnackbar:n}=e,a=await(0,r.YM)((async()=>await fetch(o.P.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:s})})));if(a=await a.json(),null!==(t=a)&&void 0!==t&&t.ok)try{var i,l,c;const e=null===(i=a)||void 0===i||null===(l=i.results)||void 0===l||null===(c=l[0])||void 0===c?void 0:c.markedQuotes,t=Object.values(e).flat().length;var u,d,p;if(e&&t>0)return{markedQuotesFromServer:e,dateFromServer:null===(u=a)||void 0===u||null===(d=u.results)||void 0===d||null===(p=d[0])||void 0===p?void 0:p.dateSynced}}catch(_){n(JSON.stringify(_))}else n(JSON.stringify(a.error))},i=async e=>{var t;let{userName:s}=e,n=await(0,r.YM)((async()=>await fetch(o.P.MARKED_QUOTES.GET_COUNT,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:s})})));return n=await n.json(),null!==(t=n)&&void 0!==t&&t.ok?n.count:null},l=async e=>{var t;let{apiCallType:s,userName:n,password:a,setIsLoggedIn:i,openSnackbar:l,setIsFetching:c}=e;const u=n.charAt(0).toUpperCase()+n.slice(1);let d;c(!0),d="login"===s?await(0,r.YM)((async()=>await fetch(o.P.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:a})}))):await(0,r.YM)((async()=>await fetch(o.P.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:a})}))),d=await d.json(),c(!1),null!==(t=d)&&void 0!==t&&t.ok?(i(!0),l(u+" "+JSON.stringify(d.serverResponse))):l(JSON.stringify(d.error))}},2922:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$X:()=>searchByWordLength,AD:()=>getPhilosopherFullName_i10n,PZ:()=>getPhilosopherFullName,gt:()=>changeQuotesData});var _common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3456),_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(413),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9031);const changeQuotesData=(e,t)=>{let{currentPhilosopher:s,currentData:o,setCurrentData:r,options:n}=e,{markedMode:a=null,markedQuotes:i,setMarkedQuotes:l}=t;o&&r(o),void 0!==a&&a&&(0,_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__.H)({currentPhilosopher:s,markedMode:a,markedQuotes:i,setMarkedQuotes:l,currentData:o,setCurrentData:r})},getPhilosopherFullName=e=>{let{currentPhilosopher:t,options:s}=e;const o=s.filter((e=>{let{value:s}=e;return t===s}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.Z)(o))return o&&o[0].fullName},getPhilosopherFullName_i10n=e=>{let{currentPhilosopher:t,options:s}=e;const o=s.filter((e=>{let{value:s}=e;return t===s}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.Z)(o))return o&&o[0].fullNameInOtherLanguages},searchByWordLength=async(start,end,quotes,_ref7,_ref8)=>{let{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}=_ref7,{setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher}=_ref8;return new Promise((resolve=>{void 0!==quotes&&("string"===typeof start&&""===start.trim()&&(start=0),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.K.postMessage({quotes:quotes,end:end,start:start,filterName:"wordCountFilter"}),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.K.onmessage=event=>{const newData=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));changeQuotesData({currentData:newData,setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher},{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}),resolve()})}))};function getWordCount(e){return e.split(" ").filter((function(e){return""!==e})).length}}}]);
//# sourceMappingURL=890.51e7c7de.chunk.js.map