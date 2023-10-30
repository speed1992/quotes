"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[605],{6466:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var r="small-loader_loader__ulY5G",o="small-loader_darkTheme__z-xia",s=n(184),i=function(e){var t=e.darkMode;return(0,s.jsx)("span",{className:"".concat(r," ").concat(t?o:""),children:" "})}},908:function(e,t,n){n.d(t,{k:function(){return r}});var r={makeDecision:function(e,t){for(var n=t.value,r=t.params,o=0;o<=e.length;o++){var s=e[o](n,r);if(s)return s}}}},605:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r=n(1413),o=n(5987),s=n(2791),i=n(5348),a=n(908),u=n(1278),c=n(4165),l=n(5861),d=n(9439),h=n(1243),f=n(1087),p=n(4755),m=n(6258),x=n(6466),v=n(295),k=n(3456);var j="row_actionItems__Y-npM",b="row_row__G696K",g="row_quoteDescription__tvqXE",w=n(4025),M=n(184),_=s.lazy((function(){return(0,v.YM)((function(){return n.e(519).then(n.bind(n,8519))}))})),S=s.lazy((function(){return(0,v.YM)((function(){return n.e(841).then(n.bind(n,3841))}))})),Z=s.lazy((function(){return(0,v.YM)((function(){return n.e(388).then(n.bind(n,6388))}))})),N=function(e){var t=e.data,n=t.searchText,o=t.start,i=t.end,a=t.philosopherFullName,u=t.philosopherFullName_i10n,v=t.markedMode,N=t.currentQuote,R=t.currentPhilosopher,y=t.markedQuotes,P=t.setMarkedQuotes,C=t.currentData,D=t.setCurrentData,T=t.index,I=t.scrollPosition,F=t.setScrollPosition,q=t.listRef,Q=t.darkMode,z=(t.scheduledPosts,t.setScheduledQuotes,t.rowsRendered),J=t.setRowsRendered,O=t.voiceSpeed,Y=t.minMode,G=e.style,B=(0,s.useState)({button:"",status:!1}),E=(0,d.Z)(B,2),H=E[0],L=E[1],W=(0,s.useState)(null),U=(0,d.Z)(W,2),A=U[0],V=U[1],X=(0,w.D9)(R),K=(0,p.Z)(),$=(0,d.Z)(K,1)[0],ee=N.quote,te=N.id,ne={openSnackbar:$,searchText:n,start:o,end:i,philosopherFullName:a,index:T,philosopherFullName_i10n:u,darkMode:Q,setIsLocalFetching:L},re=(0,s.useState)(!1),oe=(0,d.Z)(re,2),se=oe[0],ie=oe[1],ae=(0,s.useCallback)(function(e,t){var n;return function(){var r=this,o=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(r,o)}),t)}}((function(){return F(parseInt(te))}),500),[te,F]),ue=(0,s.useCallback)((function(){return(0,w.bA)({quote:ee,openSnackbar:$,philosopherFullName:a})}),[$,a,ee]);if(X&&X!==R&&!1===z&&J(!0),!(0,k.o8)(N))return(0,M.jsx)("div",{role:"row",className:b,style:G,onMouseMove:ae,onTouchStart:ae,children:A?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("div",{children:A}),(0,M.jsx)("div",{className:g,children:(0,M.jsx)("button",{onClick:function(){return V(null)},children:"Close Description"})})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("div",{role:"columnheader",className:"row",children:(0,M.jsx)("span",{onClick:ue,children:"".concat(T+1,'. "').concat(ee,'" \u2015 ').concat(a)})}),(0,M.jsx)("div",{role:"columnheader",className:"row",children:se?(0,M.jsx)(S,(0,r.Z)({inputText:ee},ne)):null}),(0,M.jsxs)("div",{role:"columnheader",className:j,children:[(0,M.jsx)("button",{children:(0,M.jsx)(f.rU,{to:m.Z.image.route,state:{quotationText:ee,philosopherFullName:a,signature:"Instagram: @philosophizetruth"},style:{textDecoration:"none",color:Q?"#fff":"#000"},children:"Download"})}),!Y&&(0,M.jsx)(Z,{index:T,currentData:C,scrollPosition:I,setScrollPosition:F,listRef:q,voiceSpeed:O}),v&&(0,M.jsx)(s.Suspense,{fallback:"",children:(0,M.jsx)(_,{index:te,currentPhilosopher:R,markedQuotes:y,setMarkedQuotes:P,currentData:C,setCurrentData:D,setLocalTranslateKey:ie})}),!Y&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)("button",{onClick:function(){return ie(!0)},children:["Translate ","translate"===H.button&&H.status&&(0,M.jsx)(x.Z,{darkMode:!0})]}),(0,M.jsx)("button",{children:(0,M.jsx)(f.rU,{to:m.Z.image.route,state:{quotationText:ee,philosopherFullName:a,signature:"Instagram: @philosophizetruth",share:!0},style:{textDecoration:"none",color:Q?"#fff":"#000"},children:"Share"})})]}),(0,M.jsxs)("button",{onClick:(0,l.Z)((0,c.Z)().mark((function e(){var t,n,r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L({button:"describe_quote",status:!0}),n={method:"POST",url:"https://api.edenai.run/v2/text/topic_extraction",headers:{authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGM1ZWJjMTktMGZlMi00NmU0LWJjM2QtOThkOTdiNTcyYWYxIiwidHlwZSI6ImFwaV90b2tlbiJ9.fQIkRStyHmpBofuqfieRHCnB5y0hhtSeLRh689nWHSs"},data:{show_original_response:!1,fallback_providers:"",providers:"google, ibm, openai",text:"".concat(ee," ").concat(a,"\n                                            What is the meaning of this quote"),language:"en"}},r="",e.next=5,null===h.Z||void 0===h.Z||null===(t=h.Z.request(n))||void 0===t?void 0:t.then((function(e){Object.values(e.data).forEach((function(e){var t,n;null!==(t=e.items[0])&&void 0!==t&&t.category&&(r+="".concat(null===(n=e.items[0])||void 0===n?void 0:n.category))}))})).catch((function(e){console.error(e)}));case 5:L({button:"",status:!1}),V(JSON.stringify(r));case 7:case"end":return e.stop()}}),e)}))),children:["Describe ","describe_quote"===(null===H||void 0===H?void 0:H.button)&&(null===H||void 0===H?void 0:H.status)&&(0,M.jsx)(x.Z,{darkMode:!0})]})]})]})},T)},R="quote-list_textCenter__qcfwr",y=function(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("h4",{children:"No search results found!"}),(0,M.jsx)("div",{children:"Guidlines:"}),(0,M.jsx)("div",{children:"1. Please check spelling of your search text."}),(0,M.jsx)("div",{children:" 2. Try searching a smaller and a more generic word."})]})};function P(){return(0,M.jsx)(y,{})}var C=[function(e,t){if(t.start<=20)return 500},function(e,t){var n=t.start;if(n>20&&n<=40)return 600},function(e,t){var n=t.start;if(n>40&&n<=60)return 1e3},function(e,t){var n=t.start;if(n>60&&n<=100)return 1400},function(e,t){if(t.start>100)return 2e3},function(){return 800}],D=n(2922),T=["index"];var I=function(e){var t=e.listRef,n=e.width,c=e.height,l=e.searchText,d=e.start,h=e.end,f=e.markedMode,p=e.currentData,m=e.setCurrentData,x=e.options,v=e.currentPhilosopher,k=e.markedQuotes,j=e.setMarkedQuotes,b=e.scrollPosition,g=e.setScrollPosition,w=e.darkMode,_=e.scheduledPosts,S=e.setScheduledQuotes,Z=e.rowsRendered,y=e.setRowsRendered,I=e.voiceSpeed,F=e.minMode,q=(0,D.PZ)({currentPhilosopher:v,options:x}),Q=(0,D.AD)({currentPhilosopher:v,options:x});return(0,s.useEffect)((function(){Z&&(0,u.Bj)(t,b,p,v)}),[Z,v]),(0,s.useEffect)((function(){t.current&&(0,u.Bj)(t,b,p,v)}),[null===t||void 0===t?void 0:t.current]),v&&p?(0,M.jsx)(i.ZP,{className:(0,u.nI)()&&R,height:c,rowCount:p.length,rowHeight:a.k.makeDecision(C,{params:{start:d}}),width:n,ref:t,rowRenderer:function(e){var n=e.index,s=(0,o.Z)(e,T);return(0,M.jsx)(N,(0,r.Z)({data:{searchText:l,start:d,end:h,philosopherFullName:q,philosopherFullName_i10n:Q,markedMode:f,currentData:p,setCurrentData:m,currentQuote:p[n],index:n,currentPhilosopher:v,markedQuotes:k,setMarkedQuotes:j,scrollPosition:b,setScrollPosition:g,darkMode:w,listRef:t,scheduledPosts:_,setScheduledQuotes:S,rowsRendered:Z,setRowsRendered:y,voiceSpeed:I,minMode:F}},s))},onRowsRendered:function(){!1===Z&&y(!0)},noRowsRenderer:P,style:{padding:"1rem"}}):(0,M.jsx)(M.Fragment,{})}},4025:function(e,t,n){n.d(t,{bA:function(){return i},D9:function(){return a}});var r=n(6998),o=n.n(r),s=n(2791);n(184);function i(e){var t=e.openSnackbar,n=e.philosopherFullName;!function(e,t){if("all"===t.toLowerCase().trim()){var n=e.lastIndexOf("\u2015 "),r=(a="",(i=n-1)>(s=e).length-1?s:s.substring(0,i)+a+s.substring(i+1));r=function(e,t,n){return e.substr(0,t)+n+e.substr(t)}(r='"'+r,n,'"\n\n'),o()(r)}else o()('"'.concat(e,'"\n\n').concat(t));var s,i,a}(e.quote,n),t("Quote Text Copied!")}function a(e){var t=(0,s.useRef)(null);return(0,s.useEffect)((function(){t.current=e}),[e]),t.current}}}]);
//# sourceMappingURL=605.00c325aa.chunk.js.map