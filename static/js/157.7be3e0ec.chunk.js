"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[157],{908:function(e,t,r){r.d(t,{k:function(){return n}});var n={makeDecision:function(e,t){for(var r=t.value,n=t.params,o=0;o<=e.length;o++){var s=e[o](r,n);if(s)return s}}}},4157:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(1413),o=r(5987),s=r(2791),i=r(5348),u=r(908),a=r(1278),l=r(9439),c=r(1087),d=r(9230),h=r(6258),f=r(295),p=r(3456);var m="row_actionItems__Y-npM";function x(e){return e%2?"ListItemOdd":"ListItemEven"}var v=r(4025),k=r(184),j=s.lazy((function(){return(0,f.YM)((function(){return r.e(519).then(r.bind(r,8519))}))})),b=s.lazy((function(){return(0,f.YM)((function(){return r.e(841).then(r.bind(r,3841))}))})),w=s.lazy((function(){return(0,f.YM)((function(){return r.e(388).then(r.bind(r,6388))}))})),g=function(e){var t=e.data,r=t.searchText,o=t.start,i=t.end,u=t.philosopherFullName,a=t.philosopherFullName_i10n,f=t.markedMode,g=t.currentQuote,P=t.currentPhilosopher,R=t.markedQuotes,D=t.setMarkedQuotes,M=t.currentData,y=t.setCurrentData,N=t.index,Q=t.scrollPosition,S=t.setScrollPosition,T=t.listRef,C=t.darkMode,F=(t.scheduledPosts,t.setScheduledQuotes,t.rowsRendered),Z=t.setRowsRendered,I=e.style,q=(0,v.D9)(P),_=(0,d.Ds)(),z=(0,l.Z)(_,1)[0],L=g.quote,E=g.id,Y={openSnackbar:z,searchText:r,start:o,end:i,philosopherFullName:u,index:N,philosopherFullName_i10n:a,darkMode:C},A=(0,s.useState)(!1),B=(0,l.Z)(A,2),O=B[0],U=B[1],G=(0,s.useCallback)(function(e,t){var r;return function(){var n=this,o=arguments;clearTimeout(r),r=setTimeout((function(){e.apply(n,o)}),t)}}((function(){return S(parseInt(E))}),500),[]);if(q&&q!==P&&!1===F&&Z(!0),!(0,p.o8)(g))return(0,k.jsxs)("div",{role:"row",className:x(N),style:I,onMouseMove:G,onTouchStart:G,children:[(0,k.jsx)("span",{role:"columnheader",style:{position:"absolute",top:"10rem"},className:"row",children:(0,k.jsx)("span",{onClick:v.bA.bind(undefined,(0,n.Z)({quote:L},Y)),children:"".concat(N+1,'. "').concat(L,'" \u2015 ').concat(u)})}),(0,k.jsx)("div",{role:"columnheader",style:{position:"absolute",top:"26rem"},className:"row",children:O?(0,k.jsx)(b,(0,n.Z)({inputText:L},Y)):null}),(0,k.jsxs)("div",{role:"columnheader",className:m,style:{position:"absolute",bottom:"5rem"},children:[(0,k.jsx)("button",{children:(0,k.jsx)(c.rU,{to:h.Z.image.route,state:{quotationText:L,philosopherFullName:u,signature:"Instagram: @philosophizetruth"},style:{textDecoration:"none",color:C?"#fff":"#000"},children:"Download Image"})}),(0,k.jsx)(w,{index:N,currentData:M,scrollPosition:Q,setScrollPosition:S,listRef:T}),f&&(0,k.jsx)(s.Suspense,{fallback:"",children:(0,k.jsx)(j,{index:E,currentPhilosopher:P,markedQuotes:R,setMarkedQuotes:D,currentData:M,setCurrentData:y,setLocalTranslateKey:U})}),(0,k.jsx)("button",{onClick:function(){return U(!0)},children:"Translate"}),(0,k.jsx)("button",{children:(0,k.jsx)(c.rU,{to:h.Z.image.route,state:{quotationText:L,philosopherFullName:u,signature:"Instagram: @philosophizetruth",share:!0},style:{textDecoration:"none",color:C?"#fff":"#000"},children:"Share Image"})})]})]},N)},P=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h4",{children:"No search results found!"}),(0,k.jsx)("div",{children:"Guidlines:"}),(0,k.jsx)("div",{children:"1. Please check spelling of your search text."}),(0,k.jsx)("div",{children:" 2. Try searching a smaller and a more generic word."})]})};function R(){return(0,k.jsx)(P,{})}var D=[function(e,t){if(t.start<=20)return 500},function(e,t){var r=t.start;if(r>20&&r<=40)return 600},function(e,t){var r=t.start;if(r>40&&r<=60)return 1e3},function(e,t){var r=t.start;if(r>60&&r<=100)return 1400},function(e,t){if(t.start>100)return 2e3},function(){return 800}],M=r(2922),y=["index"];var N=function(e){var t=e.listRef,r=e.width,l=e.height,c=e.searchText,d=e.start,h=e.end,f=e.markedMode,p=e.currentData,m=e.setCurrentData,x=e.options,v=e.currentPhilosopher,j=e.markedQuotes,b=e.setMarkedQuotes,w=e.scrollPosition,P=e.setScrollPosition,N=e.darkMode,Q=e.scheduledPosts,S=e.setScheduledQuotes,T=e.rowsRendered,C=e.setRowsRendered,F=(0,M.PZ)({currentPhilosopher:v,options:x}),Z=(0,M.AD)({currentPhilosopher:v,options:x});return(0,s.useEffect)((function(){T&&(0,a.Bj)(t,w,p,v)}),[T,v]),(0,s.useEffect)((function(){t.current&&(0,a.Bj)(t,w,p,v)}),[null===t||void 0===t?void 0:t.current]),(0,k.jsx)(i.ZP,{className:"List",height:l,rowCount:p.length,rowHeight:u.k.makeDecision(D,{params:{start:d}}),width:r,ref:t,rowRenderer:function(e){var r=e.index,s=(0,o.Z)(e,y);return(0,k.jsx)(g,(0,n.Z)({data:{searchText:c,start:d,end:h,philosopherFullName:F,philosopherFullName_i10n:Z,markedMode:f,currentData:p,setCurrentData:m,currentQuote:p[r],index:r,currentPhilosopher:v,markedQuotes:j,setMarkedQuotes:b,scrollPosition:w,setScrollPosition:P,darkMode:N,listRef:t,scheduledPosts:Q,setScheduledQuotes:S,rowsRendered:T,setRowsRendered:C}},s))},onRowsRendered:function(){!1===T&&C(!0)},noRowsRenderer:R,style:{padding:"1rem"}})}},4025:function(e,t,r){r.d(t,{bA:function(){return i},D9:function(){return u}});var n=r(6998),o=r.n(n),s=r(2791);r(184);function i(e){var t=e.openSnackbar,r=e.philosopherFullName,n=e.quote;e.index;!function(e,t){if("all"===t.toLowerCase().trim()){var r=e.lastIndexOf("\u2015 "),n=(u="",(i=r-1)>(s=e).length-1?s:s.substring(0,i)+u+s.substring(i+1));n=function(e,t,r){return e.substr(0,t)+r+e.substr(t)}(n='"'+n,r,'"\n\n'),o()(n)}else o()('"'.concat(e,'"\n\n').concat(t));var s,i,u}(n,r),t("Copied!",1e3)}function u(e){var t=(0,s.useRef)(null);return(0,s.useEffect)((function(){t.current=e}),[e]),t.current}}}]);
//# sourceMappingURL=157.7be3e0ec.chunk.js.map