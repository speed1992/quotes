"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[362],{6959:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var o=t(5043),s=t(3003),n=t(5795);const a={modalContainer:"modal_modalContainer__lvRIc",close:"modal_close__w35Nl",desktopCloseBtn:"modal_desktopCloseBtn__L8AA3",lightMode:"modal_lightMode__ayeZe",titleBar:"modal_titleBar__+I0Z-",title:"modal_title__ZytCK"};var l=t(8418),i=t(579);const u=e=>{let{children:r,title:t}=e;const u=(0,s.wA)(),d=(0,s.d4)((e=>{var r;return null===e||void 0===e||null===(r=e.philosophersData)||void 0===r?void 0:r.darkMode}));return(0,i.jsxs)("div",{className:`${a.modalContainer} ${d?a.darkMode:a.lightMode}`,children:[(0,i.jsxs)("div",{className:a.titleBar,children:[(0,i.jsx)("span",{className:a.title,children:t}),(0,i.jsx)("button",{className:`${a.close} ${(0,n.xl)()?a.desktopCloseBtn:""}`,onClick:(0,o.useCallback)((()=>u((0,l.GV)(""),[]))),children:"X"})]}),r]})}},6228:(e,r,t)=>{t.d(r,{XY:()=>s,b0:()=>o,gZ:()=>n});const o=e=>"undefined"===typeof e,s=e=>0===Object.values(e).length&&e.constructor===Object;function n(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},7442:(e,r,t)=>{t.d(r,{v:()=>s});t(5043);function o(e,r){const t=localStorage.getItem(e),o=JSON.parse(t);return void 0===o||"undefined"===o||"null"===o||null===o?r:o}const s=e=>{let{index:r,currentPhilosopher:t,markedMode:s,markedQuotes:n={},setMarkedQuotes:a,currentData:l,setCurrentData:i}=e,u=JSON.parse(JSON.stringify(n)),d=[];d=o(`${t}-MARKED_AS_READ`,[]),n&&void 0!==n[t]&&(d=[...d,...n[t]]),d=[...new Set(d)],r&&d.push(r),u[t]=d,a(u);const c=l.filter(((e,r)=>{let{id:t}=e;return-1===d.indexOf(t)}));i(JSON.parse(JSON.stringify(c)))}},5795:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$P:()=>search,Fr:()=>isMobile,NB:()=>scrollToMemorizedRow,qf:()=>scrollToQuoteId,xl:()=>isDesktop});var _components_organisms_home_quotes_list_utils_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5499);const scrollToFirstRow=e=>{e.current&&e.current.scrollToRow(0)},scrollToMemorizedRow=(e,r,t)=>{(null===t||void 0===t?void 0:t.length)>0&&e.current&&(void 0!==r&&"undefined"!==r&&r&&r>0?e.current.scrollToRow(r):scrollToFirstRow(e))},scrollToQuoteId=(e,r,t,o)=>{const s=r[o];if((null===t||void 0===t?void 0:t.length)>0&&e.current)if(void 0!==s&&"undefined"!==s&&s&&s>0){const r=t.findIndex((e=>{let{id:r}=e;return r===s}));r>-1&&e.current.scrollToRow(r)}else scrollToFirstRow(e)},search=_ref2=>{let{searchText:searchText,start:start,end:end,setCurrentData:setCurrentData,searchFilters:searchFilters,markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes,currentData:currentData,currentPhilosopher:currentPhilosopher}=_ref2;return new Promise((resolve=>{if(void 0!==currentData){let worker;window.Worker?worker=new Worker(new URL(__webpack_require__.p+__webpack_require__.u(480),__webpack_require__.b)):alert("Your browser doesn't support web workers."),"string"===typeof start&&""===start.trim()&&(start=0),worker.postMessage({currentData:currentData,searchText:searchText,searchFilters:searchFilters,end:end,start:start}),worker.onmessage=event=>{var _worker;const filteredQuotesFromWorker=JSON.parse(eval(`(${JSON.stringify(event.data)})`));null===(_worker=worker)||void 0===_worker||_worker.terminate(),(0,_components_organisms_home_quotes_list_utils_utils__WEBPACK_IMPORTED_MODULE_0__.cJ)({currentData:filteredQuotesFromWorker,setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher},{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}),resolve()}}}))},isMobile=()=>window.innerWidth<=600,isDesktop=()=>window.innerWidth>=600},5499:(e,r,t)=>{t.d(r,{Yv:()=>a,cJ:()=>n,sQ:()=>i,tq:()=>l});var o=t(6228),s=t(7442);const n=(e,r)=>{let{currentPhilosopher:t,currentData:o,setCurrentData:n,options:a}=e,{markedMode:l=null,markedQuotes:i,setMarkedQuotes:u}=r;o&&n(o),void 0!==l&&l&&(0,s.v)({currentPhilosopher:t,markedMode:l,markedQuotes:i,setMarkedQuotes:u,currentData:o,setCurrentData:n})},a=e=>{let{currentPhilosopher:r,options:t}=e;const s=t.filter((e=>{let{value:t}=e;return r===t}));if(!(0,o.XY)(s))return s&&s[0].fullName},l=e=>{let{currentPhilosopher:r,options:t}=e;const s=t.filter((e=>{let{value:t}=e;return r===t}));if(!(0,o.XY)(s))return s&&s[0].fullNameInOtherLanguages};function i(e){return e.split(" ").filter((function(e){return""!==e})).length}}}]);
//# sourceMappingURL=Modal.b5fa8120.chunk.js.map