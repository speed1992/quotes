"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[776],{908:function(e,t,r){r.d(t,{k:function(){return n}});var n={makeDecision:function(e,t){for(var r=t.value,n=t.params,o=0;o<=e.length;o++){var s=e[o](r,n);if(s)return s}}}},6776:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(1413),o=r(5987),s=r(2791),i=r(5348),a=r(908),u=r(1278),c=r(9439),l=r(1087),d=r(4755),h=r(6258),f=r(295),p=r(3456);var m="row_actionItems__Y-npM",x="row_row__G696K",v=r(4025),k=r(184),j=s.lazy((function(){return(0,f.YM)((function(){return r.e(519).then(r.bind(r,8519))}))})),w=s.lazy((function(){return(0,f.YM)((function(){return r.e(841).then(r.bind(r,3841))}))})),g=s.lazy((function(){return(0,f.YM)((function(){return r.e(388).then(r.bind(r,6388))}))})),b=function(e){var t=e.data,r=t.searchText,o=t.start,i=t.end,a=t.philosopherFullName,u=t.philosopherFullName_i10n,f=t.markedMode,b=t.currentQuote,M=t.currentPhilosopher,P=t.markedQuotes,R=t.setMarkedQuotes,S=t.currentData,D=t.setCurrentData,N=t.index,Q=t.scrollPosition,T=t.setScrollPosition,C=t.listRef,y=t.darkMode,F=(t.scheduledPosts,t.setScheduledQuotes,t.rowsRendered),Z=t.setRowsRendered,_=t.voiceSpeed,q=t.minMode,I=e.style,z=(0,v.D9)(M),Y=(0,d.Z)(),A=(0,c.Z)(Y,1)[0],E=b.quote,L=b.id,B={openSnackbar:A,searchText:r,start:o,end:i,philosopherFullName:a,index:N,philosopherFullName_i10n:u,darkMode:y},G=(0,s.useState)(!1),K=(0,c.Z)(G,2),U=K[0],H=K[1],O=(0,s.useCallback)(function(e,t){var r;return function(){var n=this,o=arguments;clearTimeout(r),r=setTimeout((function(){e.apply(n,o)}),t)}}((function(){return T(parseInt(L))}),500),[L,T]),J=(0,s.useCallback)((function(){return(0,v.bA)({quote:E,openSnackbar:A,philosopherFullName:a})}),[A,a,E]);if(z&&z!==M&&!1===F&&Z(!0),!(0,p.o8)(b))return(0,k.jsxs)("div",{role:"row",className:x,style:I,onMouseMove:O,onTouchStart:O,children:[(0,k.jsx)("div",{role:"columnheader",className:"row",children:(0,k.jsx)("span",{onClick:J,children:"".concat(N+1,'. "').concat(E,'" \u2015 ').concat(a)})}),(0,k.jsx)("div",{role:"columnheader",className:"row",children:U?(0,k.jsx)(w,(0,n.Z)({inputText:E},B)):null}),(0,k.jsxs)("div",{role:"columnheader",className:m,children:[(0,k.jsx)("button",{children:(0,k.jsx)(l.rU,{to:h.Z.image.route,state:{quotationText:E,philosopherFullName:a,signature:"Instagram: @philosophizetruth"},style:{textDecoration:"none",color:y?"#fff":"#000"},children:"Download Image"})}),!q&&(0,k.jsx)(g,{index:N,currentData:S,scrollPosition:Q,setScrollPosition:T,listRef:C,voiceSpeed:_}),f&&(0,k.jsx)(s.Suspense,{fallback:"",children:(0,k.jsx)(j,{index:L,currentPhilosopher:M,markedQuotes:P,setMarkedQuotes:R,currentData:S,setCurrentData:D,setLocalTranslateKey:H})}),!q&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("button",{onClick:function(){return H(!0)},children:"Translate"}),(0,k.jsx)("button",{children:(0,k.jsx)(l.rU,{to:h.Z.image.route,state:{quotationText:E,philosopherFullName:a,signature:"Instagram: @philosophizetruth",share:!0},style:{textDecoration:"none",color:y?"#fff":"#000"},children:"Share Image"})})]})]})]},N)},M=function(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("h4",{children:"No search results found!"}),(0,k.jsx)("div",{children:"Guidlines:"}),(0,k.jsx)("div",{children:"1. Please check spelling of your search text."}),(0,k.jsx)("div",{children:" 2. Try searching a smaller and a more generic word."})]})};function P(){return(0,k.jsx)(M,{})}var R=[function(e,t){if(t.start<=20)return 500},function(e,t){var r=t.start;if(r>20&&r<=40)return 600},function(e,t){var r=t.start;if(r>40&&r<=60)return 1e3},function(e,t){var r=t.start;if(r>60&&r<=100)return 1400},function(e,t){if(t.start>100)return 2e3},function(){return 800}],S=r(2922),D=["index"];var N=function(e){var t=e.listRef,r=e.width,c=e.height,l=e.searchText,d=e.start,h=e.end,f=e.markedMode,p=e.currentData,m=e.setCurrentData,x=e.options,v=e.currentPhilosopher,j=e.markedQuotes,w=e.setMarkedQuotes,g=e.scrollPosition,M=e.setScrollPosition,N=e.darkMode,Q=e.scheduledPosts,T=e.setScheduledQuotes,C=e.rowsRendered,y=e.setRowsRendered,F=e.voiceSpeed,Z=e.minMode,_=(0,S.PZ)({currentPhilosopher:v,options:x}),q=(0,S.AD)({currentPhilosopher:v,options:x});return(0,s.useEffect)((function(){C&&(0,u.Bj)(t,g,p,v)}),[C,v]),(0,s.useEffect)((function(){t.current&&(0,u.Bj)(t,g,p,v)}),[null===t||void 0===t?void 0:t.current]),(0,k.jsx)(i.ZP,{className:"List",height:c,rowCount:p.length,rowHeight:a.k.makeDecision(R,{params:{start:d}}),width:r,ref:t,rowRenderer:function(e){var r=e.index,s=(0,o.Z)(e,D);return(0,k.jsx)(b,(0,n.Z)({data:{searchText:l,start:d,end:h,philosopherFullName:_,philosopherFullName_i10n:q,markedMode:f,currentData:p,setCurrentData:m,currentQuote:p[r],index:r,currentPhilosopher:v,markedQuotes:j,setMarkedQuotes:w,scrollPosition:g,setScrollPosition:M,darkMode:N,listRef:t,scheduledPosts:Q,setScheduledQuotes:T,rowsRendered:C,setRowsRendered:y,voiceSpeed:F,minMode:Z}},s))},onRowsRendered:function(){!1===C&&y(!0)},noRowsRenderer:P,style:{padding:"1rem"}})}},4025:function(e,t,r){r.d(t,{bA:function(){return i},D9:function(){return a}});var n=r(6998),o=r.n(n),s=r(2791);r(184);function i(e){var t=e.openSnackbar,r=e.philosopherFullName;!function(e,t){if("all"===t.toLowerCase().trim()){var r=e.lastIndexOf("\u2015 "),n=(a="",(i=r-1)>(s=e).length-1?s:s.substring(0,i)+a+s.substring(i+1));n=function(e,t,r){return e.substr(0,t)+r+e.substr(t)}(n='"'+n,r,'"\n\n'),o()(n)}else o()('"'.concat(e,'"\n\n').concat(t));var s,i,a}(e.quote,r),t("Quote Text Copied!")}function a(e){var t=(0,s.useRef)(null);return(0,s.useEffect)((function(){t.current=e}),[e]),t.current}}}]);
//# sourceMappingURL=776.701613f9.chunk.js.map