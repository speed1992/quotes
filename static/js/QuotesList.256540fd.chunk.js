"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[580],{3076:(e,t,o)=>{o.r(t),o.d(t,{default:()=>j});var r=o(5043),n=o(5816),s=o(1589),i=o(5795),l=o(3003),a=o(8418),c=o(4545),u=o(6228);var d=o(745);const h={actionItems:"row_actionItems__EzD7I",row:"row_row__K3zuG",quoteDescription:"row_quoteDescription__2gsqL",quoteText:"row_quoteText__joqzl"};var p=o(579);function m(e){let{openSnackbar:t,philosopherFullName:o,quote:r}=e;!function(e,t){if("all"===t.toLowerCase().trim()){let t=e.lastIndexOf("\u2015 "),s=(n="",(r=t-1)>(o=e).length-1?o:o.substring(0,r)+n+o.substring(r+1));s='"'+s,s=function(e,t,o){return e.substr(0,t)+o+e.substr(t)}(s,t,'"\n\n'),navigator.clipboard.writeText(s)}else navigator.clipboard.writeText('"'.concat(e,'"\n\n').concat(t));var o,r,n}(r,o),t("Quote Text Copied!")}const x=r.lazy((()=>(0,s.Uw)((()=>o.e(196).then(o.bind(o,7928)))))),f=r.lazy((()=>(0,s.Uw)((()=>o.e(27).then(o.bind(o,882)))))),w=e=>{let{data:{philosopherFullName:t,markedMode:o,currentQuote:n,currentPhilosopher:s,markedQuotes:i,setMarkedQuotes:w,currentData:k,setCurrentData:v,index:g,scrollPosition:b,setScrollPosition:j,listRef:q,darkMode:C,voiceSpeed:P,minMode:D},style:S}=e;const[M]=(0,c.A)(),{quote:T,id:N}=n,_=(0,r.useCallback)(function(e,t){let o;return function(){const r=this,n=arguments;clearTimeout(o),o=setTimeout((function(){e.apply(r,n)}),t)}}((()=>j(parseInt(N))),500),[N,j]),y=(0,l.wA)(),Q=(0,r.useCallback)((()=>m({quote:T,openSnackbar:M,philosopherFullName:t})),[M,t,T]),R=(0,r.useCallback)((()=>function(e){let{openSnackbar:t,philosopherFullName:o,quote:r}=e;navigator.clipboard.writeText('"'.concat(r,'"\n\n').concat(o,"\n\nWhat is the meaning of this quote?")),window.open("https://chatgpt.com/","_blank").focus()}({quote:T,openSnackbar:M,philosopherFullName:t})),[M,t,T]);return(0,u.b0)(n)?null:(0,p.jsxs)("div",{role:"row",className:h.row,style:S,onMouseMove:_,onTouchStart:_,children:[(0,p.jsx)("div",{role:"columnheader",className:h.rowChild,children:(0,p.jsx)("div",{className:h.quoteText,children:"".concat(g+1,'. "').concat(T,'" \u2015 ').concat(t)})}),(0,p.jsxs)("div",{role:"columnheader",id:"actionItems",className:h.actionItems,children:[(0,p.jsx)("button",{onClick:Q,children:"Copy"}),(0,p.jsx)("button",{onClick:()=>{y((0,d.oW)({quotationText:T,philosopherFullName:t,signature:"Instagram: @philosophizetruth"})),y((0,a.GV)("Image"))},style:{textDecoration:"none",color:C?"#fff":"#000"},children:"Download"}),!D&&(0,p.jsx)(f,{index:g,currentData:k,scrollPosition:b,setScrollPosition:j,listRef:q,voiceSpeed:P}),o&&(0,p.jsx)(x,{index:N,currentPhilosopher:s,markedQuotes:i,setMarkedQuotes:w,currentData:k,setCurrentData:v}),!D&&(0,p.jsx)("button",{onClick:()=>{y((0,d.oW)({quotationText:T,philosopherFullName:t,signature:"Instagram: @philosophizetruth",share:!0})),y((0,a.GV)("Image"))},style:{textDecoration:"none",color:C?"#fff":"#000"},children:"Share"}),(0,p.jsx)("button",{onClick:R,children:"Didn't Understand"})]})]},g)},k=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h4",{children:"No search results found!"}),(0,p.jsx)("div",{children:"Guidlines:"}),(0,p.jsx)("div",{children:"1. Please check spelling of your search text."}),(0,p.jsx)("div",{children:" 2. Try searching a smaller and a more generic word."})]});function v(){return(0,p.jsx)(k,{})}var g=o(5499);const b=r.lazy((()=>(0,s.Uw)((()=>o.e(112).then(o.bind(o,8618))))));const j=function(e){let{listRef:t,width:o,height:s,searchText:l,start:a,end:c,markedMode:u,currentData:d,setCurrentData:h,options:m,currentPhilosopher:x,markedQuotes:f,setMarkedQuotes:k,scrollPosition:j,setScrollPosition:q,darkMode:C,scheduledPosts:P,setScheduledQuotes:D,rowsRendered:S,setRowsRendered:M,voiceSpeed:T,minMode:N}=e;const _=(0,g.Yv)({currentPhilosopher:x,options:m}),y=(0,g.tq)({currentPhilosopher:x,options:m});return(0,r.useEffect)((()=>{S&&(0,i.qf)(t,j,d,x)}),[S,x]),(0,r.useEffect)((()=>{t.current&&(0,i.qf)(t,j,d,x)}),[null===t||void 0===t?void 0:t.current]),void 0!==x&&void 0!==d&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{}),(0,p.jsx)(n.Ay,{height:screen.height-screen.height/5,rowCount:null===d||void 0===d?void 0:d.length,rowHeight:550,width:o,ref:t,rowRenderer:function(e){let{index:o,...r}=e;return(0,p.jsx)(w,{data:{searchText:l,start:a,end:c,philosopherFullName:_,philosopherFullName_i10n:y,markedMode:u,currentData:d,setCurrentData:h,currentQuote:d[o],index:o,currentPhilosopher:x,markedQuotes:f,setMarkedQuotes:k,scrollPosition:j,setScrollPosition:q,darkMode:C,listRef:t,scheduledPosts:P,setScheduledQuotes:D,rowsRendered:S,setRowsRendered:M,voiceSpeed:T,minMode:N},...r})},noRowsRenderer:void 0!==x&&void 0!==d?v:null,style:{padding:"1rem",textAlign:(0,i.xl)()&&"center"}})]})}}}]);
//# sourceMappingURL=QuotesList.256540fd.chunk.js.map