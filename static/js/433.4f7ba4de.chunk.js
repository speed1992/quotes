"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[433],{908:function(e,t,n){n.d(t,{k:function(){return r}});var r={makeDecision:function(e,t){for(var n=t.value,r=t.params,o=0;o<=e.length;o++){var s=e[o](n,r);if(s)return s}}}},8433:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(1413),o=n(5987),s=n(2791),i=n(5348),u=n(908),a=n(1278),l=n(9439),c=n(1087),d=n(9230),h=n(6258),f=n(295),p=n(3456),m=n(4571),x="row_actionItems__Y-npM";function k(e){return e%2?"ListItemOdd":"ListItemEven"}var v=n(4025),j=n(184),w=s.lazy((function(){return(0,f.YM)((function(){return n.e(519).then(n.bind(n,8519))}))})),b=s.lazy((function(){return(0,f.YM)((function(){return n.e(841).then(n.bind(n,3841))}))})),g=s.lazy((function(){return(0,f.YM)((function(){return n.e(388).then(n.bind(n,6388))}))})),P=function(e){var t=e.data,n=t.searchText,o=t.start,i=t.end,u=t.philosopherFullName,a=t.philosopherFullName_i10n,f=t.markedMode,P=t.currentQuote,R=t.currentPhilosopher,D=t.markedQuotes,M=t.setMarkedQuotes,N=t.currentData,S=t.setCurrentData,y=t.index,C=t.scrollPosition,Q=t.setScrollPosition,T=t.listRef,F=t.darkMode,I=(t.scheduledPosts,t.setScheduledQuotes,t.rowsRendered),Z=t.setRowsRendered,q=e.style,L=(0,v.D9)(R),_=(0,d.Ds)(),z=(0,l.Z)(_,1)[0],Y=P.quote,E=P.id,A={openSnackbar:z,searchText:n,start:o,end:i,philosopherFullName:u,index:y,philosopherFullName_i10n:a,darkMode:F},H=(0,s.useState)(!1),U=(0,l.Z)(H,2),B=U[0],O=U[1],G=(0,s.useCallback)((0,m.D)((function(){return Q(parseInt(E))}),500),[]);if(L&&L!==R&&!1===I&&Z(!0),!(0,p.o8)(P))return(0,j.jsxs)("div",{role:"row",className:k(y),style:q,onMouseMove:G,onTouchStart:G,children:[(0,j.jsx)("span",{role:"columnheader",style:{position:"absolute",top:"10rem"},className:"row",children:(0,j.jsx)("span",{onClick:v.bA.bind(undefined,(0,r.Z)({quote:Y},A)),children:"".concat(y+1,'. "').concat(Y,'" \u2015 ').concat(u)})}),(0,j.jsx)("div",{role:"columnheader",style:{position:"absolute",top:"26rem"},className:"row",children:B?(0,j.jsx)(b,(0,r.Z)({inputText:Y},A)):null}),(0,j.jsxs)("div",{role:"columnheader",className:x,style:{position:"absolute",bottom:"5rem"},children:[(0,j.jsx)("button",{children:(0,j.jsx)(c.rU,{to:h.Z.image.route,state:{quotationText:Y,philosopherFullName:u,signature:"Instagram: @philosophizetruth"},style:{textDecoration:"none",color:F?"#fff":"#000"},children:"Download Image"})}),(0,j.jsx)(g,{index:y,currentData:N,scrollPosition:C,setScrollPosition:Q,listRef:T}),f&&(0,j.jsx)(s.Suspense,{fallback:"",children:(0,j.jsx)(w,{index:E,currentPhilosopher:R,markedQuotes:D,setMarkedQuotes:M,currentData:N,setCurrentData:S,setLocalTranslateKey:O})}),(0,j.jsx)("button",{onClick:function(){return O(!0)},children:"Translate"}),(0,j.jsx)("button",{children:(0,j.jsx)(c.rU,{to:h.Z.image.route,state:{quotationText:Y,philosopherFullName:u,signature:"Instagram: @philosophizetruth",share:!0},style:{textDecoration:"none",color:F?"#fff":"#000"},children:"Share Image"})}),(0,j.jsx)("button",{onClick:function(){return(0,v.Hi)(z,(function(){return Q(parseInt(E))}))},children:"Share Link"})]})]},y)},R=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h4",{children:"No search results found!"}),(0,j.jsx)("div",{children:"Guidlines:"}),(0,j.jsx)("div",{children:"1. Please check spelling of your search text."}),(0,j.jsx)("div",{children:" 2. Try searching a smaller and a more generic word."})]})};function D(){return(0,j.jsx)(R,{})}var M=[function(e,t){if(t.start<=20)return 500},function(e,t){var n=t.start;if(n>20&&n<=40)return 600},function(e,t){var n=t.start;if(n>40&&n<=60)return 1e3},function(e,t){var n=t.start;if(n>60&&n<=100)return 1400},function(e,t){if(t.start>100)return 2e3},function(){return 800}],N=n(2922),S=["index"];var y=function(e){var t=e.listRef,n=e.width,l=e.height,c=e.searchText,d=e.start,h=e.end,f=e.markedMode,p=e.currentData,m=e.setCurrentData,x=e.options,k=e.currentPhilosopher,v=e.markedQuotes,w=e.setMarkedQuotes,b=e.scrollPosition,g=e.setScrollPosition,R=e.darkMode,y=e.scheduledPosts,C=e.setScheduledQuotes,Q=e.rowsRendered,T=e.setRowsRendered,F=(0,N.PZ)({currentPhilosopher:k,options:x}),I=(0,N.AD)({currentPhilosopher:k,options:x});return(0,s.useEffect)((function(){Q&&(0,a.Bj)(t,b,p,k)}),[Q,k]),(0,s.useEffect)((function(){t.current&&(0,a.Bj)(t,b,p,k)}),[null===t||void 0===t?void 0:t.current]),(0,j.jsx)(i.ZP,{className:"List",height:l,rowCount:p.length,rowHeight:u.k.makeDecision(M,{params:{start:d}}),width:n,ref:t,rowRenderer:function(e){var n=e.index,s=(0,o.Z)(e,S);return(0,j.jsx)(P,(0,r.Z)({data:{searchText:c,start:d,end:h,philosopherFullName:F,philosopherFullName_i10n:I,markedMode:f,currentData:p,setCurrentData:m,currentQuote:p[n],index:n,currentPhilosopher:k,markedQuotes:v,setMarkedQuotes:w,scrollPosition:b,setScrollPosition:g,darkMode:R,listRef:t,scheduledPosts:y,setScheduledQuotes:C,rowsRendered:Q,setRowsRendered:T}},s))},onRowsRendered:function(){!1===Q&&T(!0)},noRowsRenderer:D,style:{padding:"1rem"}})}},4025:function(e,t,n){n.d(t,{Hi:function(){return a},bA:function(){return i},D9:function(){return u}});var r=n(6998),o=n.n(r),s=n(2791);n(184);function i(e){var t=e.openSnackbar,n=e.philosopherFullName,r=e.quote;e.index;!function(e,t){if("all"===t.toLowerCase().trim()){var n=e.lastIndexOf("\u2015 "),r=(u="",(i=n-1)>(s=e).length-1?s:s.substring(0,i)+u+s.substring(i+1));r=function(e,t,n){return e.substr(0,t)+n+e.substr(t)}(r='"'+r,n,'"\n\n'),o()(r)}else o()('"'.concat(e,'"\n\n').concat(t));var s,i,u}(r,n),t("Copied!",1e3)}function u(e){var t=(0,s.useRef)(null);return(0,s.useEffect)((function(){t.current=e}),[e]),t.current}function a(e,t){t(),o()(window.location.href.toString()),e("Quote URL Copied. You can now share!",1e3)}}}]);
//# sourceMappingURL=433.4f7ba4de.chunk.js.map