(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[171],{3456:function(e,t,r){"use strict";r.d(t,{o8:function(){return n},Z:function(){return o},k$:function(){return i}});var n=function(e){return"undefined"===typeof e},o=function(e){return 0===Object.values(e).length&&e.constructor===Object};function i(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}},413:function(e,t,r){"use strict";r.d(t,{H:function(){return i}});var n=r(3433);r(2791);function o(e,t){var r=localStorage.getItem(e),n=JSON.parse(r);return void 0===n||"undefined"===n||"null"===n||null===n?t:n}var i=function(e){var t=e.index,r=e.currentPhilosopher,i=(e.markedMode,e.markedQuotes),s=void 0===i?{}:i,a=e.setMarkedQuotes,u=e.currentData,c=e.setCurrentData,_=JSON.parse(JSON.stringify(s)),l=[],d="".concat(r,"-MARKED_AS_READ");l=o(d,[]),s&&void 0!==s[r]&&(l=[].concat((0,n.Z)(l),(0,n.Z)(s[r]))),l=(0,n.Z)(new Set(l)),t&&l.push(t),_[r]=l,a(_);var f=u.filter((function(e,t){var r=e.id;return-1===l.indexOf(r)}));c(JSON.parse(JSON.stringify(f)))}},1278:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{rY:function(){return scrollToMemorizedRow},yC:function(){return search},tq:function(){return isMobile},nI:function(){return isDesktop}});var _web_workers_worker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9031),scrollToFirstRow=function(e){e.current&&e.current.scrollToRow(0)},scrollToMemorizedRow=function(e,t,r){r.length>0&&e.current&&(void 0!==t&&"undefined"!==t&&t&&t>0?e.current.scrollToRow(t):scrollToFirstRow(e))},search=function search(_ref){var searchText=_ref.searchText,currentData=_ref.currentData,setCurrentData=_ref.setCurrentData;return new Promise((function(resolve){void 0!==currentData&&(_web_workers_worker__WEBPACK_IMPORTED_MODULE_0__.K.postMessage({currentData:currentData,searchText:searchText,filterName:"searchTermFilter"}),_web_workers_worker__WEBPACK_IMPORTED_MODULE_0__.K.onmessage=function(event){var filteredQuotesFromWorker=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));resolve(filteredQuotesFromWorker)})}))},isMobile=function(){return window.innerWidth<=600},isDesktop=function(){return window.innerWidth>=600}},9031:function(e,t,r){"use strict";var n;r.d(t,{K:function(){return n}}),window.Worker?n=new Worker(new URL(r.p+r.u(345),r.b)):alert("Your browser doesn't support web workers.")},1930:function(e,t,r){"use strict";r.d(t,{y:function(){return n},P:function(){return o}});var n="latest",o="alphabetical"},3171:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(1413),o=r(9439),i=r(2791),s=r(9137),a=r(295),u=r(5861),c=r(4687),_=r.n(c),l=r(2922),d=r(1278);function f(){return(f=(0,u.Z)(_().mark((function e(t,r){var n,o,i,s,a,u,c,f,p,h,v,m,g;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.searchText,o=t.start,i=t.end,s=t.currentPhilosopher,a=t.currentData,u=t.originalData,c=t.setCurrentData,f=t.options,p=r.markedMode,h=void 0!==p&&p,v=r.markedQuotes,m=r.setMarkedQuotes,g=[],""!==n||1!=o||""!=i){e.next=7;break}(0,l.gt)({currentPhilosopher:s,currentData:u,setCurrentData:c,options:f},{markedMode:h,markedQuotes:v,setMarkedQuotes:m}),e.next=13;break;case 7:return e.next=9,(0,d.yC)({searchText:n,currentData:u,setCurrentData:c,currentPhilosopher:s,options:f});case 9:if(!(g=e.sent)){e.next=13;break}return e.next=13,(0,l.$X)(o,i,g,{markedMode:h,markedQuotes:v,setMarkedQuotes:m},{currentData:a,setCurrentData:c,originalData:u,currentPhilosopher:s});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=r(184),h=i.lazy((function(){return(0,a.YM)((function(){return r.e(438).then(r.bind(r,2438))}))})),v=i.lazy((function(){return(0,a.YM)((function(){return Promise.all([r.e(938),r.e(637),r.e(920)]).then(r.bind(r,6920))}))})),m=function(e){return(0,p.jsx)(i.Suspense,{fallback:"",children:(0,d.tq)()?(0,p.jsx)("div",{className:"mobile",children:(0,p.jsx)(h,(0,n.Z)({},e))}):(0,p.jsxs)("div",{className:"desktop",children:[(0,p.jsx)(v,(0,n.Z)({},e))," "]})})},g=r(5938),k=i.lazy((function(){return(0,a.YM)((function(){return r.e(356).then(r.bind(r,3356))}))})),w=i.lazy((function(){return(0,a.YM)((function(){return Promise.all([r.e(452),r.e(157)]).then(r.bind(r,4157))}))}));function b(e){var t=(0,i.useState)(!0),r=(0,o.Z)(t,2),s=r[0],a=r[1],c=e.currentPhilosopher,l=e.setCurrentData,d=e.options,f=e.setOptions,h=e.setQuotesLoaded;function v(){return(v=(0,u.Z)(_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,void 0===c){e.next=9;break}if((0,g.SD)({philosopher:c,options:d})){e.next=6;break}return e.next=6,(0,g.dA)(c,{options:d,setOptions:f},h,[l]);case 6:a(!1),e.next=10;break;case 9:a(!1);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return(0,i.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[c]),s?(0,p.jsx)(k,{}):(0,p.jsx)(w,(0,n.Z)({},e))}var x="home-page_content__X9oEf",y="home-page_homepage__Bl4LI",D=r(9434),O=r(9230),M=r(4652),P=r(4891);var E=r(1930),T=r(9234);var C=i.lazy((function(){return(0,a.YM)((function(){return r.e(356).then(r.bind(r,3356))}))})),z=function(){var e,t,r=(0,i.useState)(!1),a=(0,o.Z)(r,2),c=a[0],l=a[1],h=function(){var e=(0,O.Ds)(),t=(0,o.Z)(e,1)[0],r=(0,i.useRef)(),n=(0,D.I0)(),s=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.start})),a=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.end})),c=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.searchText})),l=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.currentPhilosopher})),d=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.currentData})),f=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.markedMode})),p=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.options})),h=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.quotesLoaded})),v=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.markedQuotes})),m=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.scheduledPosts})),k=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.darkMode})),w=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.scrollPosition})),b=(0,g.SD)({philosopher:l,options:p}),x=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.originalOptions})),y=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.userName})),E=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.isLoggedIn})),T=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.password})),C=(0,D.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.syncDate})),z=(0,i.useState)(!1),S=(0,o.Z)(z,2),N=S[0],R=S[1],L=function(e){return n((0,P.MQ)(e))};return(0,i.useEffect)((function(){E&&(0,u.Z)(_().mark((function e(){var r,o,i,s,a,u,c;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object.values(v).flat().length,o=new Date,i=new Date(C),o.setHours(0,0,0,0),o=o.getTime(),i=i.setHours(0,0,0,0),!(o>i)){e.next=26;break}return e.next=9,(0,M.M_)({userName:y,markedQuotes:v,openSnackbar:t,setMarkedQuotes:L});case 9:if(s=e.sent,a=s.markedQuotesFromServer,u=s.dateFromServer,_=Date.now(),n((0,P._F)(_)),!a){e.next=26;break}if(!((c=Object.values(a).flat().length)>r)){e.next=20;break}L(a),t("Auto-Sync : Restored all marked quotes!",4e3),e.next=26;break;case 20:if(!(r>c)){e.next=26;break}if((u=new Date(u)).setHours(0,0,0,0),!(o>u)){e.next=26;break}return e.next=26,(0,M.yf)({userName:y,markedQuotes:v,openSnackbar:t});case 26:case"end":return e.stop()}var _}),e)})))()}),[E]),{listRef:r,dispatch:n,start:s,end:a,searchText:c,currentPhilosopher:l,currentData:d,markedMode:f,options:p,quotesLoaded:h,markedQuotes:v,scheduledPosts:m,darkMode:k,scrollPosition:w,originalData:b,isFetching:N,setIsFetching:R,setStart:function(e){return n((0,P.i_)(e))},setEnd:function(e){return n((0,P.sp)(e))},setSearchText:function(e){return n((0,P.tA)(e))},setMarkedMode:function(e){return n((0,P.Ue)(e))},setCurrentPhilosopher:function(e){return n((0,P.xy)(e))},setCurrentData:function(e){return n((0,P.Wd)(e))},setOptions:function(e){return n((0,P.Uf)(e))},setQuotesLoaded:function(e){return n((0,P.Jg)(e))},setMarkedQuotes:L,setScheduledQuotes:function(e){return n((0,P.IW)(e))},setDarkMode:function(e){return n((0,P.c9)(e))},setScrollPosition:function(e){return n((0,P.Rs)(e))},originalOptions:x,setOriginalOptions:function(e){return n((0,P.Q6)(e))},userName:y,setUserName:function(e){return n((0,P.ih)(e))},isLoggedIn:E,setIsLoggedIn:function(e){return n((0,P.pA)(e))},password:T,setPassword:function(e){return n((0,P.FH)(e))}}}(),v=function(){var e=(0,D.I0)(),t=(0,D.v9)((function(e){return e.philosophersData.originalOptions})),r=(0,D.v9)((function(e){return e.philosophersData.options})),n=(0,D.v9)((function(e){return e.philosophersData.sorting}));return(0,i.useEffect)((function(){var o=function(t){return e((0,P.Uf)(t))};t.length>1&&(n===E.y?o((0,T.xh)(t,r)):n===E.P&&o((0,T.CQ)(r)))}),[n]),{sorting:n,setSorting:function(t){return e((0,P.ge)(t))},options:r,originalOptions:t}}(),k=v.options,w=v.sorting,z=v.setSorting,S=h,N=S.start,R=S.end,L=S.searchText,j=S.currentPhilosopher,Q=S.currentData,A=S.markedMode,W=S.quotesLoaded,U=S.markedQuotes,I=S.darkMode,q=S.setDarkMode,Z=S.originalData,F=S.isFetching,B=S.setCurrentData,K=S.setMarkedQuotes;h=(0,n.Z)((0,n.Z)({},h),{},{setSorting:z,sorting:w,isFetchingOptions:c,setIsFetchingOptions:l}),(0,i.useEffect)((function(){Z&&function(e,t){f.apply(this,arguments)}({searchText:L,start:N,end:R,currentPhilosopher:j,currentData:Q,originalData:Z,setCurrentData:B,options:k},{markedMode:A,markedQuotes:U,setMarkedQuotes:K})}),[N,R,L,A,W,j,Q.length,null===(e=U[j])||void 0===e||null===(t=e.quotes)||void 0===t?void 0:t.length]),(0,i.useEffect)((function(){(0,T.iA)(I)}),[I]),(0,i.useEffect)((function(){(0,d.nI)()&&(q(!1),(0,T.iA)(!1))}),[I]);return(0,p.jsx)("div",{className:y,children:F?(0,p.jsx)(C,{}):(0,p.jsxs)(p.Fragment,{children:[" ",(0,p.jsx)(m,(0,n.Z)({},h))," ",(0,p.jsx)("div",{className:x,children:(0,p.jsx)(s.ZP,{children:function(e){var t=e.height,r=e.width;return(0,p.jsx)(b,(0,n.Z)((0,n.Z)({},h),{},{width:r,height:t}))}})})]})})}},9234:function(e,t,r){"use strict";r.d(t,{iA:function(){return i},xh:function(){return s},CQ:function(){return a}});var n=r(3433),o=r(5938),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"darkTheme",r=document.getElementsByTagName("html")[0];e?r.classList.add(t):r.classList.remove(t)},s=function(e,t){return e.map((function(e){return(0,o.vH)({philosopher:e.value,options:t})})).reverse()},a=function(e){return(0,n.Z)(e).sort((function(e,t){return e.fullName.localeCompare(t.fullName)}))}},4652:function(e,t,r){"use strict";r.d(t,{yf:function(){return u},M_:function(){return c},z9:function(){return _}});var n=r(5861),o=r(4687),i=r.n(o),s=r(4994),a=r(295),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.userName,o=t.markedQuotes,t.openSnackbar,t.setSyncDate,e.next=3,(0,a.YM)((0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s.P.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r,markedQuotes:o,dateSynced:Date.now()})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(i().mark((function e(t){var r,o,u,c,_,l,d,f,p,h,v,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.userName,t.markedQuotes,u=t.openSnackbar,t.setMarkedQuotes,e.next=3,(0,a.YM)((0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s.P.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 3:return c=e.sent,e.next=6,c.json();case 6:if(c=e.sent,null===(r=c)||void 0===r||!r.ok){e.next=20;break}if(e.prev=8,f=null===(_=c)||void 0===_||null===(l=_.results)||void 0===l||null===(d=l[0])||void 0===d?void 0:d.markedQuotes,p=Object.values(f).flat().length,!(f&&p>0)){e.next=13;break}return e.abrupt("return",{markedQuotesFromServer:f,dateFromServer:null===(h=c)||void 0===h||null===(v=h.results)||void 0===v||null===(m=v[0])||void 0===m?void 0:m.dateSynced});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),u(JSON.stringify(e.t0));case 18:e.next=21;break;case 20:u(JSON.stringify(c.error));case 21:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,n.Z)(i().mark((function e(t){var r,o,u,c,_,l,d,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.apiCallType,u=t.userName,c=t.password,_=t.setIsLoggedIn,l=t.openSnackbar,d=u.charAt(0).toUpperCase()+u.slice(1),"login"!==o){e.next=8;break}return e.next=5,(0,a.YM)((0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s.P.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:u,password:c})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 5:f=e.sent,e.next=11;break;case 8:return e.next=10,(0,a.YM)((0,n.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(s.P.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:u,password:c})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 10:f=e.sent;case 11:return e.next=13,f.json();case 13:f=e.sent,null!==(r=f)&&void 0!==r&&r.ok?(_(!0),l(d+" "+JSON.stringify(f.serverResponse))):l(JSON.stringify(f.error));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2922:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{gt:function(){return changeQuotesData},PZ:function(){return getPhilosopherFullName},AD:function(){return getPhilosopherFullName_i10n},$X:function(){return searchByWordLength}});var C_Users_paras_Desktop_quotes_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5861),C_Users_paras_Desktop_quotes_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4687),C_Users_paras_Desktop_quotes_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(C_Users_paras_Desktop_quotes_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0__),_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3456),_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(413),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9031),changeQuotesData=function(e,t){var r=e.currentPhilosopher,n=e.currentData,o=e.setCurrentData,i=(e.options,t.markedMode),s=void 0===i?null:i,a=t.markedQuotes,u=t.setMarkedQuotes;n&&o(n),void 0!==s&&s&&(0,_common_utils_staticDataUtils__WEBPACK_IMPORTED_MODULE_1__.H)({currentPhilosopher:r,markedMode:s,markedQuotes:a,setMarkedQuotes:u,currentData:n,setCurrentData:o})},getPhilosopherFullName=function(e){var t=e.currentPhilosopher,r=e.options.filter((function(e){var r=e.value;return t===r}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_3__.Z)(r))return r&&r[0].fullName},getPhilosopherFullName_i10n=function(e){var t=e.currentPhilosopher,r=e.options.filter((function(e){var r=e.value;return t===r}));if(!(0,_common_utils_commonUtils__WEBPACK_IMPORTED_MODULE_3__.Z)(r))return r&&r[0].fullNameInOtherLanguages},searchByWordLength=function(){var _ref9=(0,C_Users_paras_Desktop_quotes_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)(C_Users_paras_Desktop_quotes_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().mark((function _callee(start,end,quotes,_ref7,_ref8){var markedMode,markedQuotes,setMarkedQuotes,setCurrentData,currentPhilosopher;return C_Users_paras_Desktop_quotes_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_0___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return markedMode=_ref7.markedMode,markedQuotes=_ref7.markedQuotes,setMarkedQuotes=_ref7.setMarkedQuotes,setCurrentData=_ref8.setCurrentData,currentPhilosopher=_ref8.currentPhilosopher,_context.abrupt("return",new Promise((function(resolve){void 0!==quotes&&("string"===typeof start&&""===start.trim()&&(start=0),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_2__.K.postMessage({quotes:quotes,end:end,start:start,filterName:"wordCountFilter"}),_common_web_workers_worker__WEBPACK_IMPORTED_MODULE_2__.K.onmessage=function(event){var newData=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));console.log(newData),changeQuotesData({currentData:newData,setCurrentData:setCurrentData,currentPhilosopher:currentPhilosopher},{markedMode:markedMode,markedQuotes:markedQuotes,setMarkedQuotes:setMarkedQuotes}),resolve()})})));case 3:case"end":return _context.stop()}}),_callee)})));return function(e,t,r,n,o){return _ref9.apply(this,arguments)}}();function getWordCount(e){return e.split(" ").filter((function(e){return""!==e})).length}},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5122:function(e,t,r){"use strict";var n=r(4836),o=r(5263);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s,a=n(r(6690)),u=n(r(9728)),c=n(r(4993)),_=n(r(3808)),l=n(r(6115)),d=n(r(1655)),f=n(r(8416)),p=o(r(2791)),h=n(r(5044));n(r(2007));function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){(0,f.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=(s=i=function(e){function t(){var e,r;(0,a.default)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return r=(0,c.default)(this,(e=(0,_.default)(t)).call.apply(e,[this].concat(o))),(0,f.default)((0,l.default)(r),"state",{height:r.props.defaultHeight||0,width:r.props.defaultWidth||0}),(0,f.default)((0,l.default)(r),"_parentNode",void 0),(0,f.default)((0,l.default)(r),"_autoSizer",void 0),(0,f.default)((0,l.default)(r),"_window",void 0),(0,f.default)((0,l.default)(r),"_detectElementResize",void 0),(0,f.default)((0,l.default)(r),"_onResize",(function(){var e=r.props,t=e.disableHeight,n=e.disableWidth,o=e.onResize;if(r._parentNode){var i=r._parentNode.offsetHeight||0,s=r._parentNode.offsetWidth||0,a=(r._window||window).getComputedStyle(r._parentNode)||{},u=parseInt(a.paddingLeft,10)||0,c=parseInt(a.paddingRight,10)||0,_=parseInt(a.paddingTop,10)||0,l=parseInt(a.paddingBottom,10)||0,d=i-_-l,f=s-u-c;(!t&&r.state.height!==d||!n&&r.state.width!==f)&&(r.setState({height:i-_-l,width:s-u-c}),o({height:i,width:s}))}})),(0,f.default)((0,l.default)(r),"_setRef",(function(e){r._autoSizer=e})),r}return(0,d.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=(0,h.default)(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.disableHeight,o=e.disableWidth,i=e.style,s=this.state,a=s.height,u=s.width,c={overflow:"visible"},_={};return n||(c.height=0,_.height=a),o||(c.width=0,_.width=u),p.createElement("div",{className:r,ref:this._setRef,style:m({},c,{},i)},t(_))}}]),t}(p.Component),(0,f.default)(i,"propTypes",null),s);t.default=g,(0,f.default)(g,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}})},9137:function(e,t,r){"use strict";var n=r(4836);Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return o.default}});var o=n(r(5122))},5044:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n;n="undefined"!==typeof t?t:"undefined"!==typeof window?window:"undefined"!==typeof self?self:r.g;var o="undefined"!==typeof n.document&&n.document.attachEvent;if(!o){var i=function(){var e=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(e){return n.setTimeout(e,20)};return function(t){return e(t)}}(),s=function(){var e=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,n=t.lastElementChild,o=r.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,o.style.width=r.offsetWidth+1+"px",o.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},u=function(e){if(!(e.target.className&&"function"===typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&s(this.__resizeRAF__),this.__resizeRAF__=i((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(r){r.call(t,e)})))}))}},c=!1,_="",l="animationstart",d="Webkit Moz O ms".split(" "),f="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),p="",h=n.document.createElement("fakeelement");if(void 0!==h.style.animationName&&(c=!0),!1===c)for(var v=0;v<d.length;v++)if(void 0!==h.style[d[v]+"AnimationName"]){p=d[v],_="-"+p.toLowerCase()+"-",l=f[v],c=!0;break}var m="resizeanim",g="@"+_+"keyframes "+m+" { from { opacity: 0; } to { opacity: 0; } } ",k=_+"animation: 1ms "+m+"; "}return{addResizeListener:function(t,r){if(o)t.attachEvent("onresize",r);else{if(!t.__resizeTriggers__){var i=t.ownerDocument,s=n.getComputedStyle(t);s&&"static"==s.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var r=(g||"")+".resize-triggers { "+(k||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',n=t.head||t.getElementsByTagName("head")[0],o=t.createElement("style");o.id="detectElementResize",o.type="text/css",null!=e&&o.setAttribute("nonce",e),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(t.createTextNode(r)),n.appendChild(o)}}(i),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=i.createElement("div")).className="resize-triggers";var c='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var _=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return c}});t.__resizeTriggers__.innerHTML=_.createHTML("")}else t.__resizeTriggers__.innerHTML=c;t.appendChild(t.__resizeTriggers__),a(t),t.addEventListener("scroll",u,!0),l&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==m&&a(t)},t.__resizeTriggers__.addEventListener(l,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(r)}},removeResizeListener:function(e,t){if(o)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",u,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(l,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(r){}}}}}},6115:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},6690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:function(e,t,r){var n=r(4062);function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},3808:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1655:function(e,t,r){var n=r(6015);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5263:function(e,t,r){var n=r(8698).default;function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(i,a,u):i[a]=e[a]}return i.default=e,r&&r.set(e,i),i},e.exports.__esModule=!0,e.exports.default=e.exports},4993:function(e,t,r){var n=r(8698).default,o=r(6115);e.exports=function(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6015:function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=171.7b831643.chunk.js.map