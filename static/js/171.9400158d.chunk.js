(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[171],{1278:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Bj:function(){return scrollToQuoteId},nI:function(){return isDesktop},rY:function(){return scrollToMemorizedRow},tq:function(){return isMobile},yC:function(){return search}});var _web_workers_worker__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9031),scrollToFirstRow=function(e){e.current&&e.current.scrollToRow(0)},scrollToMemorizedRow=function(e,t,r){r.length>0&&e.current&&(void 0!==t&&"undefined"!==t&&t&&t>0?e.current.scrollToRow(t):scrollToFirstRow(e))},scrollToQuoteId=function(e,t,r,n){var o=t[n];if((null===r||void 0===r?void 0:r.length)>0&&e.current)if(void 0!==o&&"undefined"!==o&&o&&o>0){var i=r.findIndex((function(e){return e.id===o}));i>-1&&e.current.scrollToRow(i)}else scrollToFirstRow(e)},search=function search(_ref2){var searchText=_ref2.searchText,currentData=_ref2.currentData,setCurrentData=_ref2.setCurrentData;return new Promise((function(resolve){void 0!==currentData&&(_web_workers_worker__WEBPACK_IMPORTED_MODULE_0__.K.postMessage({currentData:currentData,searchText:searchText,filterName:"searchTermFilter"}),_web_workers_worker__WEBPACK_IMPORTED_MODULE_0__.K.onmessage=function(event){var filteredQuotesFromWorker=JSON.parse(eval("(".concat(JSON.stringify(event.data),")")));resolve(filteredQuotesFromWorker)})}))},isMobile=function(){return window.innerWidth<=600},isDesktop=function(){return window.innerWidth>=600}},3171:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return P}});var n=r(1413),o=r(2791),i=r(9137),s=r(5938),a=r(295),u=r(4165),l=r(5861),c=r(2922),d=r(1278);function f(){return(f=(0,l.Z)((0,u.Z)().mark((function e(t,r){var n,o,i,s,a,l,f,p,_,h,v,g,m;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.searchText,o=t.start,i=t.end,s=t.currentPhilosopher,a=t.currentData,l=t.originalData,f=t.setCurrentData,p=t.options,_=r.markedMode,h=void 0!==_&&_,v=r.markedQuotes,g=r.setMarkedQuotes,m=[],""!==n||1!=o||""!=i){e.next=7;break}(0,c.gt)({currentPhilosopher:s,currentData:l,setCurrentData:f,options:p},{markedMode:h,markedQuotes:v,setMarkedQuotes:g}),e.next=13;break;case 7:return e.next=9,(0,d.yC)({searchText:n,currentData:l,setCurrentData:f,currentPhilosopher:s,options:p});case 9:if(!(m=e.sent)){e.next=13;break}return e.next=13,(0,c.$X)(o,i,m,{markedMode:h,markedQuotes:v,setMarkedQuotes:g},{currentData:a,setCurrentData:f,originalData:l,currentPhilosopher:s});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=r(184),_=o.lazy((function(){return(0,a.YM)((function(){return r.e(438).then(r.bind(r,2438))}))})),h=o.lazy((function(){return(0,a.YM)((function(){return Promise.all([r.e(533),r.e(637),r.e(2)]).then(r.bind(r,4002))}))})),v=function(e){return(0,p.jsx)(o.Suspense,{fallback:"",children:(0,d.tq)()?(0,p.jsx)("div",{className:"mobile",children:(0,p.jsx)(_,(0,n.Z)({},e))}):(0,p.jsx)("div",{className:"desktop",children:(0,p.jsx)(h,(0,n.Z)({},e))})})},g=o.lazy((function(){return(0,a.YM)((function(){return Promise.all([r.e(452),r.e(157)]).then(r.bind(r,4157))}))}));function m(e){var t=e.currentPhilosopher,r=e.setCurrentData,i=e.options,a=e.setOptions,c=e.setIsFetching;function d(){return(d=(0,l.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,void 0===t){e.next=7;break}if((0,s.SD)({philosopher:t,options:i})){e.next=7;break}return c(!0),e.next=7,(0,s.dA)(t,{options:i,setOptions:a},[r]);case 7:c(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[t]),(0,p.jsx)(g,(0,n.Z)({},e))}var b="home-page_content__X9oEf",y="home-page_homepage__Bl4LI",w=r(9439),x=r(9434),k=r(9230),D=r(9017),O=r(4891),z=r(9234);var T=r(1930);var M=o.lazy((function(){return(0,a.YM)((function(){return r.e(397).then(r.bind(r,3397))}))})),P=function(){var e,t,r=function(){var e=(0,k.Ds)(),t=(0,w.Z)(e,1)[0],r=(0,o.useRef)(),n=(0,x.I0)(),i=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.start})),a=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.end})),c=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.searchText})),d=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.currentPhilosopher})),f=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.currentData})),p=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.markedMode})),_=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.options})),h=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.markedQuotes})),v=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.scheduledPosts})),g=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.darkMode})),m=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.scrollPosition})),b=(0,s.SD)({philosopher:d,options:_}),y=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.originalOptions})),T=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.userName})),M=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.isLoggedIn})),P=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.password})),E=(0,x.v9)((function(e){var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.syncDate})),C=(0,x.v9)((function(e){return e.philosophersData.sorting})),R=(0,x.v9)((function(e){return e.philosophersData.voiceSpeed})),j=(0,o.useState)(!1),S=(0,w.Z)(j,2),L=S[0],N=S[1],I=(0,o.useState)(!1),F=(0,w.Z)(I,2),W=F[0],Z=F[1],A=(0,o.useState)(!1),Q=(0,w.Z)(A,2),H=Q[0],q=Q[1],B=(0,o.useCallback)((function(e){return n((0,O.i_)(e))}),[]),U=(0,o.useCallback)((function(e){return n((0,O.sp)(e))}),[]),Y=(0,o.useCallback)((function(e){return n((0,O.tA)(e))}),[]),K=(0,o.useCallback)((function(e){return n((0,O.Ue)(e))}),[]),V=(0,o.useCallback)((function(e){return n((0,O.xy)(e))}),[]),J=(0,o.useCallback)((function(e){return n((0,O.Wd)(e))}),[]),X=(0,o.useCallback)((function(e){return n((0,O.Uf)(e))}),[]),$=(0,o.useCallback)((function(e){return n((0,O.MQ)(e))}),[]),G=(0,o.useCallback)((function(e){return n((0,O.IW)(e))}),[]),ee=(0,o.useCallback)((function(e){return n((0,O.c9)(e))}),[]),te=(0,o.useCallback)((function(e){return n((0,O.Rs)(e))}),[]),re=(0,o.useCallback)((function(e){return n((0,O.Q6)(e))}),[]),ne=(0,o.useCallback)((function(e){return n((0,O.ih)(e))}),[]),oe=(0,o.useCallback)((function(e){return n((0,O.pA)(e))}),[]),ie=(0,o.useCallback)((function(e){return n((0,O.FH)(e))}),[]),se=(0,o.useCallback)((function(e){return n((0,O._F)(e))}),[]);return(0,o.useEffect)((function(){M&&(0,l.Z)((0,u.Z)().mark((function e(){var r,n,o,i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Object.values(h).flat().length,n=(0,z.qZ)(E),o=n.currentClientDate,i=n.lastSyncClientDate,!(o>i)){e.next=5;break}return e.next=5,(0,z.lq)(T,h,t,$,se,r,o);case 5:case"end":return e.stop()}}),e)})))()}),[M]),(0,o.useEffect)((function(){(0,s.WB)(d,_)||(0,D.D)({options:_,setOptions:X,isLoggedIn:M,setSyncDate:se,isFetchingOptions:W,setIsFetchingOptions:Z,originalOptions:y,setOriginalOptions:re,sorting:C})}),[d]),{listRef:r,dispatch:n,start:i,end:a,searchText:c,currentPhilosopher:d,currentData:f,markedMode:p,options:_,markedQuotes:h,scheduledPosts:v,darkMode:g,scrollPosition:m,originalData:b,isFetching:L,setIsFetching:N,setStart:B,setEnd:U,setSearchText:Y,setMarkedMode:K,setCurrentPhilosopher:V,setCurrentData:J,setOptions:X,setMarkedQuotes:$,setScheduledQuotes:G,setDarkMode:ee,setScrollPosition:te,originalOptions:y,setOriginalOptions:re,userName:T,setUserName:ne,isLoggedIn:M,setIsLoggedIn:oe,password:P,setPassword:ie,isFetchingOptions:W,setIsFetchingOptions:Z,rowsRendered:H,setRowsRendered:q,syncDate:E,setSyncDate:se,voiceSpeed:R}}(),a=function(){var e=(0,x.I0)(),t=(0,x.v9)((function(e){return e.philosophersData.originalOptions})),r=(0,x.v9)((function(e){return e.philosophersData.options})),n=(0,x.v9)((function(e){return e.philosophersData.sorting})),i=(0,o.useCallback)((function(t){return e((0,O.ge)(t))}),[]);return(0,o.useEffect)((function(){var o=function(t){return e((0,O.Uf)(t))};t.length>1&&(n===T.y?o((0,z.xh)(t,r)):n===T.P&&o((0,z.CQ)(r)))}),[n]),{sorting:n,setSorting:i,options:r,originalOptions:t}}(),_=a.options,h=a.sorting,g=a.setSorting,P=r,E=P.start,C=P.end,R=P.searchText,j=P.currentPhilosopher,S=P.currentData,L=P.markedMode,N=P.markedQuotes,I=P.darkMode,F=P.setDarkMode,W=P.originalData,Z=P.isFetching,A=P.setCurrentData,Q=P.setMarkedQuotes,H=P.isFetchingOptions,q=P.setIsFetchingOptions;return r=(0,n.Z)((0,n.Z)({},r),{},{setSorting:g,sorting:h,isFetchingOptions:H,setIsFetchingOptions:q}),(0,o.useEffect)((function(){W&&function(e,t){f.apply(this,arguments)}({searchText:R,start:E,end:C,currentPhilosopher:j,currentData:S,originalData:W,setCurrentData:A,options:_},{markedMode:L,markedQuotes:N,setMarkedQuotes:Q})}),[E,C,R,L,j,S.length,null===(e=N[j])||void 0===e||null===(t=e.quotes)||void 0===t?void 0:t.length]),(0,o.useEffect)((function(){(0,z.IE)(I)}),[I]),(0,o.useEffect)((function(){(0,d.nI)()&&(F(!1),(0,z.IE)(!1))}),[I]),(0,o.useEffect)((function(){document.title="".concat((0,c.PZ)({currentPhilosopher:j,options:_})," Quotes")}),[j]),(0,s.WB)(j,_)?(0,p.jsx)("div",{className:y,children:Z?(0,p.jsx)(M,{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,(0,n.Z)({},r)),(0,p.jsx)("div",{className:b,children:(0,p.jsx)(i.ZP,{children:function(e){var t=e.height,o=e.width;return(0,p.jsx)(m,(0,n.Z)((0,n.Z)({},r),{},{width:o,height:t}))}})})]})}):(0,p.jsx)(p.Fragment,{})}},888:function(e,t,r){"use strict";var n=r(9047);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,s){if(s!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},2007:function(e,t,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},5122:function(e,t,r){"use strict";var n=r(4836),o=r(5263);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s,a=n(r(6690)),u=n(r(9728)),l=n(r(4993)),c=n(r(3808)),d=n(r(6115)),f=n(r(1655)),p=n(r(8416)),_=o(r(2791)),h=n(r(5044));n(r(2007));function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){(0,p.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=(s=i=function(e){function t(){var e,r;(0,a.default)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return r=(0,l.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(o))),(0,p.default)((0,d.default)(r),"state",{height:r.props.defaultHeight||0,width:r.props.defaultWidth||0}),(0,p.default)((0,d.default)(r),"_parentNode",void 0),(0,p.default)((0,d.default)(r),"_autoSizer",void 0),(0,p.default)((0,d.default)(r),"_window",void 0),(0,p.default)((0,d.default)(r),"_detectElementResize",void 0),(0,p.default)((0,d.default)(r),"_onResize",(function(){var e=r.props,t=e.disableHeight,n=e.disableWidth,o=e.onResize;if(r._parentNode){var i=r._parentNode.offsetHeight||0,s=r._parentNode.offsetWidth||0,a=(r._window||window).getComputedStyle(r._parentNode)||{},u=parseInt(a.paddingLeft,10)||0,l=parseInt(a.paddingRight,10)||0,c=parseInt(a.paddingTop,10)||0,d=parseInt(a.paddingBottom,10)||0,f=i-c-d,p=s-u-l;(!t&&r.state.height!==f||!n&&r.state.width!==p)&&(r.setState({height:i-c-d,width:s-u-l}),o({height:i,width:s}))}})),(0,p.default)((0,d.default)(r),"_setRef",(function(e){r._autoSizer=e})),r}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._window=this._autoSizer.parentNode.ownerDocument.defaultView,this._detectElementResize=(0,h.default)(e,this._window),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.disableHeight,o=e.disableWidth,i=e.style,s=this.state,a=s.height,u=s.width,l={overflow:"visible"},c={};return n||(l.height=0,c.height=a),o||(l.width=0,c.width=u),_.createElement("div",{className:r,ref:this._setRef,style:g({},l,{},i)},t(c))}}]),t}(_.Component),(0,p.default)(i,"propTypes",null),s);t.default=m,(0,p.default)(m,"defaultProps",{onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}})},9137:function(e,t,r){"use strict";var n=r(4836);Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return o.default}});var o=n(r(5122))},5044:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n;n="undefined"!==typeof t?t:"undefined"!==typeof window?window:"undefined"!==typeof self?self:r.g;var o="undefined"!==typeof n.document&&n.document.attachEvent;if(!o){var i=function(){var e=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(e){return n.setTimeout(e,20)};return function(t){return e(t)}}(),s=function(){var e=n.cancelAnimationFrame||n.mozCancelAnimationFrame||n.webkitCancelAnimationFrame||n.clearTimeout;return function(t){return e(t)}}(),a=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,n=t.lastElementChild,o=r.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,o.style.width=r.offsetWidth+1+"px",o.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},u=function(e){if(!(e.target.className&&"function"===typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&s(this.__resizeRAF__),this.__resizeRAF__=i((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(r){r.call(t,e)})))}))}},l=!1,c="",d="animationstart",f="Webkit Moz O ms".split(" "),p="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),_=n.document.createElement("fakeelement");if(void 0!==_.style.animationName&&(l=!0),!1===l)for(var h=0;h<f.length;h++)if(void 0!==_.style[f[h]+"AnimationName"]){c="-"+f[h].toLowerCase()+"-",d=p[h],l=!0;break}var v="resizeanim",g="@"+c+"keyframes "+v+" { from { opacity: 0; } to { opacity: 0; } } ",m=c+"animation: 1ms "+v+"; "}return{addResizeListener:function(t,r){if(o)t.attachEvent("onresize",r);else{if(!t.__resizeTriggers__){var i=t.ownerDocument,s=n.getComputedStyle(t);s&&"static"==s.position&&(t.style.position="relative"),function(t){if(!t.getElementById("detectElementResize")){var r=(g||"")+".resize-triggers { "+(m||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',n=t.head||t.getElementsByTagName("head")[0],o=t.createElement("style");o.id="detectElementResize",o.type="text/css",null!=e&&o.setAttribute("nonce",e),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(t.createTextNode(r)),n.appendChild(o)}}(i),t.__resizeLast__={},t.__resizeListeners__=[],(t.__resizeTriggers__=i.createElement("div")).className="resize-triggers";var l='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';if(window.trustedTypes){var c=trustedTypes.createPolicy("react-virtualized-auto-sizer",{createHTML:function(){return l}});t.__resizeTriggers__.innerHTML=c.createHTML("")}else t.__resizeTriggers__.innerHTML=l;t.appendChild(t.__resizeTriggers__),a(t),t.addEventListener("scroll",u,!0),d&&(t.__resizeTriggers__.__animationListener__=function(e){e.animationName==v&&a(t)},t.__resizeTriggers__.addEventListener(d,t.__resizeTriggers__.__animationListener__))}t.__resizeListeners__.push(r)}},removeResizeListener:function(e,t){if(o)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",u,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(d,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(r){}}}}}},6115:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},6690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:function(e,t,r){var n=r(4062);function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},3808:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1655:function(e,t,r){var n=r(6015);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5263:function(e,t,r){var n=r(8698).default;function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=s?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(i,a,u):i[a]=e[a]}return i.default=e,r&&r.set(e,i),i},e.exports.__esModule=!0,e.exports.default=e.exports},4993:function(e,t,r){var n=r(8698).default,o=r(6115);e.exports=function(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6015:function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=171.9400158d.chunk.js.map