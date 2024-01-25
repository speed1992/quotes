"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[890],{5938:(e,t,o)=>{o.d(t,{SD:()=>l,WB:()=>c,a2:()=>u,dA:()=>n,lf:()=>a,vH:()=>i});var s=o(4994),r=o(295);const n=(e,t,o)=>{let{options:n,setOptions:i}=t;return new Promise(((t,l)=>{const u=e.toLowerCase();(0,r.YM)((()=>fetch(s.P.STATIC_DATA.STATIC_QUOTES+u+".json"))).then((e=>e.json())).then((s=>{null===o||void 0===o||o.map((e=>e(s))),((e,t,o)=>{let{options:s,setOptions:r}=t;const n=JSON.parse(JSON.stringify(s));if("all"===e.trim().toLowerCase()){const t=a(e,s);let r;r=void 0===n[t].quotes?[]:n[t].quotes,n[t].quotes=[...r,...o]}else n[a(e,s)].quotes=o;r(n)})(e,{options:n,setOptions:i},s),t()})).catch((e=>l(e)))}))},a=(e,t)=>t.findIndex((t=>{let{value:o}=t;return o===e})),i=e=>{let{philosopher:t,options:o}=e;return o.filter((e=>{let{value:o}=e;return o===t}))[0]},l=e=>{var t;let{philosopher:o,options:s}=e;return null===(t=s.filter((e=>{let{value:t}=e;return t===o}))[0])||void 0===t?void 0:t.quotes},u=(e,t)=>t[a(e,t)].fullName,c=(e,t)=>!!t[a(e,t)]},3456:(e,t,o)=>{o.d(t,{Z:()=>r,k$:()=>n,o8:()=>s});const s=e=>"undefined"===typeof e,r=e=>0===Object.values(e).length&&e.constructor===Object;function n(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},8221:(e,t,o)=>{o.d(t,{d:()=>r});var s=o(2485);const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e=new Date(e);const o=new Date,r=o.getTime()-e.getTime(),n=Math.floor(r/864e5);return t&&(0,s.$)("dev")&&(t("inside isCacheExpired "+o),t("endDate "+o),t("dateDifferenceInMilliSeconds endDate.getTime() - startDate.getTime() "+r),t("dateDifference In hours"+Math.floor(r/36e5%24)),t("dateDifferenceInDays "+n),t("CACHE_TIME_IN_DAYS 1"),t("dateDifferenceInDays >= CACHE_TIME_IN_DAYS "+n>=1)),n>=1}},413:(e,t,o)=>{o.d(t,{H:()=>r});o(2791);function s(e,t){const o=localStorage.getItem(e),s=JSON.parse(o);return void 0===s||"undefined"===s||"null"===s||null===s?t:s}const r=e=>{let{index:t,currentPhilosopher:o,markedMode:r,markedQuotes:n={},setMarkedQuotes:a,currentData:i,setCurrentData:l}=e,u=JSON.parse(JSON.stringify(n)),c=[];const d="".concat(o,"-MARKED_AS_READ");c=s(d,[]),n&&void 0!==n[o]&&(c=[...c,...n[o]]),c=[...new Set(c)],t&&c.push(t),u[o]=c,a(u);const p=i.filter(((e,t)=>{let{id:o}=e;return-1===c.indexOf(o)}));l(JSON.parse(JSON.stringify(p)))}},2485:(e,t,o)=>{function s(e){let t=function(e){e=e.split("+").join(" ");for(var t,o={},s=/[?&]?([^=]+)=([^&]*)/g;t=s.exec(e);)o[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return o}(document.location.search),o=t[e]?t[e].toLowerCase():null;return!("false"!==o&&!o)}o.d(t,{$:()=>s})},9031:(e,t,o)=>{let s;o.d(t,{K:()=>s}),window.Worker?s=new Worker(new URL(o.p+o.u(345),o.b)):alert("Your browser doesn't support web workers.")},3890:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var s=o(2791),r=o(8687),n=o(4609),a=o(4891),i=o(9234);const l="table_table__DjpbW",u="table_tableHeading__bQNPH",c="table_tableColumn__X9yJG";var d=o(184);const p=e=>{let{tableData:t,columns:o}=e;return(0,d.jsx)("tbody",{children:t.map((e=>(0,d.jsx)("tr",{children:o.map((t=>{let{accessor:o}=t;const s=e[o]?e[o]:"\u2014\u2014";return(0,d.jsx)("td",{className:c,children:s},o)}))},e.id)))})},_=e=>{let{columns:t,handleSorting:o}=e;const[r,n]=(0,s.useState)(""),[a,i]=(0,s.useState)("asc");return(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:t.map((e=>{let{label:t,accessor:s,sortable:l}=e;const c=l?r===s&&"asc"===a?"up":r===s&&"desc"===a?"down":"default":"";return(0,d.jsx)("th",{className:"".concat(u," ").concat(c),onClick:l?()=>(e=>{const t=e===r&&"asc"===a?"desc":"asc";n(e),i(t),o(e,t)})(s):null,children:t},s)}))})})};const h=(e,t)=>{const[o,r]=(0,s.useState)([]);(0,s.useEffect)((()=>{r(function(e,t){return[...e].sort(((e,o)=>{const s=t.filter((e=>e.sortbyOrder));let{accessor:r="id",sortbyOrder:n="asc"}=Object.assign({},...s);if(null===e[r])return 1;if(null===o[r])return-1;if(null===e[r]&&null===o[r])return 0;const a=e[r].toString().localeCompare(o[r].toString(),"en",{numeric:!0});return"asc"===n?a:-a}))}(e,t))}),[e]);return[o,(e,t)=>{if(e){const s=[...o].sort(((o,s)=>null===o[e]?1:null===s[e]?-1:null===o[e]&&null===s[e]?0:o[e].toString().localeCompare(s[e].toString(),"en",{numeric:!0})*("asc"===t?1:-1)));r(s)}}]},m=e=>{let{data:t,columns:o}=e;const[s,r]=h(t,o);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("table",{className:l,children:[(0,d.jsx)(_,{columns:o,handleSorting:r}),(0,d.jsx)(p,{columns:o,tableData:s})]})})},f=JSON.parse('[{"label":"Philosopher","accessor":"philosopher","sortable":true},{"label":"Read Count","accessor":"readCount","sortable":true,"sortbyOrder":"desc"}]');var g=o(5938),D=o(3456),O=o(2922);const v=()=>{const[e,t]=(0,s.useState)([]),o=(0,r.I0)(),l=(0,r.v9)((e=>e.philosophersData.markedQuotes)),u=(0,r.v9)((e=>e.philosophersData.options)),c=(0,r.v9)((e=>e.philosophersData.darkMode)),p=(0,r.v9)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.originalOptions})),_=e=>o((0,a.Q6)(e)),h=e=>o((0,a.Uf)(e)),v=(0,r.v9)((e=>e.philosophersData.sorting));return(0,s.useEffect)((()=>{(0,n.D)({options:u,setOptions:h,originalOptions:p,setOriginalOptions:_,sorting:v})}),[]),(0,s.useEffect)((()=>{(e=>{let{markedQuotes:t,options:o,setData:s}=e;const r=[];let n=0;for(const i in t)if(t.hasOwnProperty(i)&&-1!==(0,g.lf)(i,o)){let e=0;(0,D.o8)(t[i])||(e=t[i].length,n+=e);const s={philosopher:(0,O.PZ)({currentPhilosopher:i,options:o}),readCount:e,id:(0,D.k$)()};r.push(s)}const a={philosopher:"Total Read",readCount:n,id:(0,D.k$)()};r.push(a),s(r)})({markedQuotes:l,options:u,setData:t})}),[u.length]),(0,s.useEffect)((()=>{(0,i.IE)(c)}),[c]),e.length>0?(0,d.jsx)(m,{data:e,columns:f}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",fontSize:"2rem",margin:"3rem"},children:"No records found!"}),(0,d.jsx)("div",{style:{fontSize:"2rem",margin:"3rem"},children:"Please use, marked mode feature, mark quotes as read and come back."})]})}},4609:(e,t,o)=>{o.d(t,{D:()=>m,H:()=>h});var s=o(4994);const r=8;var n=o(5938),a=o(295),i=o(8221),l=o(1930),u=o(2439),c=o(9234);const d=e=>{let{newOptions:t,oldOptions:o,oldOriginalOptions:s,setOptions:r,setOriginalOptions:a,sorting:i}=e;const d=[...u.R,...t];let p=((e,t)=>{let o=JSON.parse(JSON.stringify(t));return o.forEach(((t,s)=>{const r=(0,n.lf)(t.value,e);-1!==r&&(o[s].quotes=e[r].quotes)})),o})(o,[...d]);i===l.y?p=(0,c.xh)(d,p):i===l.P&&(p=(0,c.CQ)(p)),r([...p]),a(d)};var p=o(2485),_=o(2922);function h(e){let{philosopher:t,listRef:o,setIsFetching:s,setStart:a,setEnd:i,setSearchText:l,setCurrentPhilosopher:u,currentData:c,setCurrentData:d,options:p,setOptions:h,markedMode:m,markedQuotes:f,setMarkedQuotes:g,scrollPosition:D,setRowsRendered:O,recentPhilosophers:v,setRecentPhilosophers:k}=e;function S(){v&&k([...new Set([t,...v.slice(0,r-1)])]),u(t),(0,_.gt)({philosopher:t,currentData:c,setCurrentData:d,options:p},{markedMode:m,markedQuotes:f,setMarkedQuotes:g}),s(!1)}a(1),i(""),l(""),s(!0),(0,n.SD)({philosopher:t,options:p})?S():(0,n.dA)(t,{options:p,setOptions:h},[]).then(S)}const m=async e=>{let{options:t,setOptions:o,isLoggedIn:r,setSyncDate:n,isFetchingOptions:l,setIsFetchingOptions:u,originalOptions:c,setOriginalOptions:_,sorting:h,syncDate:m,setLogs:f}=e;if((0,p.$)("dev")){f("current time "+new Date),f("inside onFocusHandler"),f("isCacheExpired(syncDate) "+(0,i.d)(m)),f("syncDate "+m),f("syncDate "+new Date(m)),f("options.length "+t.length),f("isLoggedIn "+r)}if((0,i.d)(m,f)||1===t.length){!0!==r&&(null===n||void 0===n||n(Date.now())),null===u||void 0===u||u(!0);let e=await(0,a.YM)((()=>fetch(s.P.STATIC_DATA.STATIC_ASSET_GRAPH)));e=await e.json(),(0,p.$)("dev")&&f("api response "+e),d({newOptions:e,oldOptions:t,oldOriginalOptions:c,setOptions:o,setOriginalOptions:_,sorting:h}),null===u||void 0===u||u(!1)}}},1930:(e,t,o)=>{o.d(t,{P:()=>r,y:()=>s});const s="latest",r="alphabetical"},9234:(e,t,o)=>{o.d(t,{CQ:()=>i,IE:()=>n,lq:()=>l,xh:()=>a});var s=o(5938),r=o(4652);const n=e=>{let t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},a=(e,t)=>e.map((e=>(0,s.vH)({philosopher:e.value,options:t}))).reverse(),i=e=>[...e].sort(((e,t)=>e.fullName.localeCompare(t.fullName)));async function l(e,t,o,s,n,a){const i=await(0,r.gu)({userName:e});if(i){if(i>a){let{markedQuotesFromServer:t}=await(0,r.M_)({userName:e,openSnackbar:o});s(t),o("Auto-Sync : Restored all marked quotes!",4e3)}else a>i&&(await(0,r.yf)({userName:e,markedQuotes:t,openSnackbar:o}),o("Synced marked quotes with server!",4e3));n(Date.now())}}},4652:(e,t,o)=>{o.d(t,{M_:()=>a,gu:()=>i,yf:()=>n,z9:()=>l});var s=o(4994),r=o(295);const n=async e=>{let{userName:t,markedQuotes:o,openSnackbar:n,setSyncDate:a}=e;await(0,r.YM)((async()=>await fetch(s.P.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:o,dateSynced:Date.now()})})))},a=async e=>{var t;let{userName:o,openSnackbar:n}=e,a=await(0,r.YM)((async()=>await fetch(s.P.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o})})));if(a=await a.json(),null!==(t=a)&&void 0!==t&&t.ok)try{var i,l,u;const e=null===(i=a)||void 0===i||null===(l=i.results)||void 0===l||null===(u=l[0])||void 0===u?void 0:u.markedQuotes,t=Object.values(e).flat().length;var c,d,p;if(e&&t>0)return{markedQuotesFromServer:e,dateFromServer:null===(c=a)||void 0===c||null===(d=c.results)||void 0===d||null===(p=d[0])||void 0===p?void 0:p.dateSynced}}catch(_){n(JSON.stringify(_))}else n(JSON.stringify(a.error))},i=async e=>{var t;let{userName:o}=e,n=await(0,r.YM)((async()=>await fetch(s.P.MARKED_QUOTES.GET_COUNT,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o})})));return n=await n.json(),null!==(t=n)&&void 0!==t&&t.ok?n.count:null},l=async e=>{var t;let{apiCallType:o,userName:n,password:a,setIsLoggedIn:i,openSnackbar:l,setIsFetching:u}=e;const c=n.charAt(0).toUpperCase()+n.slice(1);let d;u(!0),d="login"===o?await(0,r.YM)((async()=>await fetch(s.P.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:a})}))):await(0,r.YM)((async()=>await fetch(s.P.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n,password:a})}))),d=await d.json(),u(!1),null!==(t=d)&&void 0!==t&&t.ok?(i(!0),l(c+" "+JSON.stringify(d.serverResponse))):l(JSON.stringify(d.error))}},2922:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$X:()=>searchByWordLength,AD:()=>getPhilosopherFullName_i10n,PZ:()=>getPhilosopherFullName,gt:()=>changeQuotesData});var _common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3456),_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(413),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9031);const changeQuotesData=(e,t)=>{let{currentPhilosopher:o,currentData:s,setCurrentData:r,options:n}=e,{markedMode:a=null,markedQuotes:i,setMarkedQuotes:l}=t;s&&r(s),void 0!==a&&a&&(0,_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_0__.H)({currentPhilosopher:o,markedMode:a,markedQuotes:i,setMarkedQuotes:l,currentData:s,setCurrentData:r})},getPhilosopherFullName=e=>{let{currentPhilosopher:t,options:o}=e;const s=o.filter((e=>{let{value:o}=e;return t===o}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.Z)(s))return s&&s[0].fullName},getPhilosopherFullName_i10n=e=>{let{currentPhilosopher:t,options:o}=e;const s=o.filter((e=>{let{value:o}=e;return t===o}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_2__.Z)(s))return s&&s[0].fullNameInOtherLanguages},searchByWordLength=async(start,end,quotes,_ref7,_ref8)=>{let{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}=_ref7,{setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher}=_ref8;return new Promise((resolve=>{void 0!==quotes&&("string"===typeof start&&""===start.trim()&&(start=0),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.K.postMessage({quotes:quotes,end:end,start:start,filterName:"wordCountFilter"}),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_1__.K.onmessage=event=>{const newData=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));changeQuotesData({currentData:newData,setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher},{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}),resolve()})}))};function getWordCount(e){return e.split(" ").filter((function(e){return""!==e})).length}}}]);
//# sourceMappingURL=890.96baa6b8.chunk.js.map