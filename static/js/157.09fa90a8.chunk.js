"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[157],{908:function(e,t,n){n.d(t,{k:function(){return r}});var r={makeDecision:function(e,t){for(var n=t.value,r=t.params,o=0;o<=e.length;o++){var s=e[o](n,r);if(s)return s}}}},4157:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(1413),o=n(5987),s=n(2791),i=n(5348),u=n(908),a=n(1278),c=n(9439),l=n(1087),d=n(9230),h=n(6258),f=n(295),p=n(3456);var m="row_actionItems__Y-npM";function x(e){return e%2?"ListItemOdd":"ListItemEven"}var v=n(4025),k=n(184),b=s.lazy((function(){return(0,f.YM)((function(){return n.e(519).then(n.bind(n,8519))}))})),j=s.lazy((function(){return(0,f.YM)((function(){return n.e(841).then(n.bind(n,3841))}))})),w=s.lazy((function(){return(0,f.YM)((function(){return n.e(388).then(n.bind(n,6388))}))})),g=function(e){var t=e.data,n=t.searchText,o=t.start,i=t.end,u=t.philosopherFullName,a=t.philosopherFullName_i10n,f=t.markedMode,g=t.currentQuote,R=t.currentPhilosopher,P=t.markedQuotes,D=t.setMarkedQuotes,M=t.currentData,y=t.setCurrentData,C=t.index,N=t.scrollPosition,Q=t.setScrollPosition,S=t.listRef,T=t.darkMode,F=(t.scheduledPosts,t.setScheduledQuotes,t.rowsRendered),I=t.setRowsRendered,Z=e.style,q=(0,v.D9)(R),L=(0,d.Ds)(),_=(0,c.Z)(L,1)[0],z=g.quote,Y=g.id,E={openSnackbar:_,searchText:n,start:o,end:i,philosopherFullName:u,index:C,philosopherFullName_i10n:a,darkMode:T},U=(0,s.useState)(!1),A=(0,c.Z)(U,2),H=A[0],B=A[1],O=(0,s.useCallback)(function(e,t){var n;return function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(r,o)}),t)}}((function(){return Q(parseInt(Y))}),500),[]);if(q&&q!==R&&!1===F&&I(!0),!(0,p.o8)(g))return(0,k.jsxs)("div",{className:x(C),style:Z,onMouseMove:O,onTouchStart:O,children:[(0,k.jsx)("span",{style:{position:"absolute",top:"10rem"},className:"row",children:(0,k.jsx)("span",{onClick:v.bA.bind(undefined,(0,r.Z)({quote:z},E)),children:"".concat(C+1,'. "').concat(z,'" \u2015 ').concat(u)})}),(0,k.jsx)("div",{style:{position:"absolute",top:"26rem"},className:"row",children:H?(0,k.jsx)(j,(0,r.Z)({inputText:z},E)):null}),(0,k.jsxs)("div",{className:m,style:{position:"absolute",bottom:"5rem"},children:[(0,k.jsx)("button",{role:"button",children:(0,k.jsx)(l.rU,{to:h.Z.image.route,state:{quotationText:z,philosopherFullName:u,signature:"Instagram: @philosophizetruth"},style:{textDecoration:"none",color:T?"#fff":"#000"},children:"Download Image"})}),(0,k.jsx)(w,{index:C,currentData:M,scrollPosition:N,setScrollPosition:Q,listRef:S}),f&&(0,k.jsx)(s.Suspense,{fallback:"",children:(0,k.jsx)(b,{index:Y,currentPhilosopher:R,markedQuotes:P,setMarkedQuotes:D,currentData:M,setCurrentData:y,setLocalTranslateKey:B})}),(0,k.jsx)("button",{role:"button",onClick:function(){return B(!0)},children:"Translate"}),(0,k.jsx)("button",{role:"button",children:(0,k.jsx)(l.rU,{to:h.Z.image.route,state:{quotationText:z,philosopherFullName:u,signature:"Instagram: @philosophizetruth",share:!0},style:{textDecoration:"none",color:T?"#fff":"#000"},children:"Share Image"})}),(0,k.jsx)("button",{role:"button",onClick:function(){return(0,v.Hi)(_,(function(){return Q(parseInt(Y))}))},children:"Copy URL"})]})]},C)},R=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h4",{children:"No search results found!"}),(0,k.jsx)("div",{children:"Guidlines:"}),(0,k.jsx)("div",{children:"1. Please check spelling of your search text."}),(0,k.jsx)("div",{children:" 2. Try searching a smaller and a more generic word."})]})};function P(){return(0,k.jsx)(R,{})}var D=[function(e,t){if(t.start<=20)return 500},function(e,t){var n=t.start;if(n>20&&n<=40)return 600},function(e,t){var n=t.start;if(n>40&&n<=60)return 1e3},function(e,t){var n=t.start;if(n>60&&n<=100)return 1400},function(e,t){if(t.start>100)return 2e3},function(){return 800}],M=n(2922),y=["index"];var C=function(e){var t=e.listRef,n=e.width,c=e.height,l=e.searchText,d=e.start,h=e.end,f=e.markedMode,p=e.currentData,m=e.setCurrentData,x=e.options,v=e.currentPhilosopher,b=e.markedQuotes,j=e.setMarkedQuotes,w=e.scrollPosition,R=e.setScrollPosition,C=e.darkMode,N=e.scheduledPosts,Q=e.setScheduledQuotes,S=e.rowsRendered,T=e.setRowsRendered,F=(0,M.PZ)({currentPhilosopher:v,options:x}),I=(0,M.AD)({currentPhilosopher:v,options:x});return(0,s.useEffect)((function(){S&&(0,a.Bj)(t,w,p,v)}),[S,v]),(0,s.useEffect)((function(){t.current&&(0,a.Bj)(t,w,p,v)}),[null===t||void 0===t?void 0:t.current]),(0,k.jsx)(i.ZP,{className:"List",height:c,rowCount:p.length,rowHeight:u.k.makeDecision(D,{params:{start:d}}),width:n,ref:t,rowRenderer:function(e){var n=e.index,s=(0,o.Z)(e,y);return(0,k.jsx)(g,(0,r.Z)({data:{searchText:l,start:d,end:h,philosopherFullName:F,philosopherFullName_i10n:I,markedMode:f,currentData:p,setCurrentData:m,currentQuote:p[n],index:n,currentPhilosopher:v,markedQuotes:b,setMarkedQuotes:j,scrollPosition:w,setScrollPosition:R,darkMode:C,listRef:t,scheduledPosts:N,setScheduledQuotes:Q,rowsRendered:S,setRowsRendered:T}},s))},onRowsRendered:function(){!1===S&&T(!0)},noRowsRenderer:P,style:{padding:"1rem"}})}},4025:function(e,t,n){n.d(t,{Hi:function(){return a},bA:function(){return i},D9:function(){return u}});var r=n(6998),o=n.n(r),s=n(2791);n(184);function i(e){var t=e.openSnackbar,n=e.philosopherFullName,r=e.quote;e.index;!function(e,t){if("all"===t.toLowerCase().trim()){var n=e.lastIndexOf("\u2015 "),r=(u="",(i=n-1)>(s=e).length-1?s:s.substring(0,i)+u+s.substring(i+1));r=function(e,t,n){return e.substr(0,t)+n+e.substr(t)}(r='"'+r,n,'"\n\n'),o()(r)}else o()('"'.concat(e,'"\n\n').concat(t));var s,i,u}(r,n),t("Copied!",1e3)}function u(e){var t=(0,s.useRef)(null);return(0,s.useEffect)((function(){t.current=e}),[e]),t.current}function a(e,t){t(),o()(window.location.href.toString()),e("Quote URL Copied. You can now share!",1e3)}}}]);
//# sourceMappingURL=157.09fa90a8.chunk.js.map