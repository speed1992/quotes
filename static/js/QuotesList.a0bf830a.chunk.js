"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[580],{3076:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var r=o(5043),n=o(5816),s=o(5795),i=o(3003),l=o(8418),a=o(4545),c=o(1589),u=o(6228);var d=o(745);const h={actionItems:"row_actionItems__EzD7I",row:"row_row__K3zuG",quoteDescription:"row_quoteDescription__2gsqL",quoteText:"row_quoteText__joqzl"};var p=o(579);function m(e){let{openSnackbar:t,philosopherFullName:o,quote:r}=e;!function(e,t){if("all"===t.toLowerCase().trim()){let t=e.lastIndexOf("\u2015 "),s=(n="",(r=t-1)>(o=e).length-1?o:o.substring(0,r)+n+o.substring(r+1));s='"'+s,s=function(e,t,o){return e.substr(0,t)+o+e.substr(t)}(s,t,'"\n\n'),navigator.clipboard.writeText(s)}else navigator.clipboard.writeText('"'.concat(e,'"\n\n').concat(t));var o,r,n}(r,o),t("Quote Text Copied!")}const x=r.lazy((()=>(0,c.Uw)((()=>o.e(196).then(o.bind(o,7928)))))),f=r.lazy((()=>(0,c.Uw)((()=>o.e(27).then(o.bind(o,882)))))),w=e=>{let{data:{philosopherFullName:t,markedMode:o,currentQuote:n,currentPhilosopher:s,markedQuotes:c,setMarkedQuotes:w,currentData:k,setCurrentData:v,index:g,scrollPosition:b,setScrollPosition:q,listRef:j,darkMode:C,voiceSpeed:P,minMode:D},style:S}=e;const[M]=(0,a.A)(),{quote:T,id:N}=n,_=(0,r.useCallback)(function(e,t){let o;return function(){const r=this,n=arguments;clearTimeout(o),o=setTimeout((function(){e.apply(r,n)}),t)}}((()=>q(parseInt(N))),500),[N,q]),Q=(0,i.wA)(),R=(0,r.useCallback)((()=>m({quote:T,openSnackbar:M,philosopherFullName:t})),[M,t,T]),y=(0,r.useCallback)((()=>function(e){let{openSnackbar:t,philosopherFullName:o,quote:r}=e;navigator.clipboard.writeText('"'.concat(r,'"\n\n').concat(o,"\n\nWhat is the meaning of this quote?")),window.open("https://chatgpt.com/","_blank").focus()}({quote:T,openSnackbar:M,philosopherFullName:t})),[M,t,T]);return(0,u.b0)(n)?null:(0,p.jsxs)("div",{role:"row",className:h.row,style:S,onMouseMove:_,onTouchStart:_,children:[(0,p.jsx)("div",{role:"columnheader",className:h.rowChild,children:(0,p.jsx)("div",{className:h.quoteText,children:"".concat(g+1,'. "').concat(T,'" \u2015 ').concat(t)})}),(0,p.jsxs)("div",{role:"columnheader",id:"actionItems",className:h.actionItems,children:[(0,p.jsx)("button",{onClick:R,children:"Copy"}),(0,p.jsx)("button",{onClick:()=>{Q((0,d.oW)({quotationText:T,philosopherFullName:t,signature:"Instagram: @philosophizetruth"})),Q((0,l.GV)("Image"))},style:{textDecoration:"none",color:C?"#fff":"#000"},children:"Download"}),!D&&(0,p.jsx)(f,{index:g,currentData:k,scrollPosition:b,setScrollPosition:q,listRef:j,voiceSpeed:P}),o&&(0,p.jsx)(x,{index:N,currentPhilosopher:s,markedQuotes:c,setMarkedQuotes:w,currentData:k,setCurrentData:v}),!D&&(0,p.jsx)("button",{onClick:()=>{Q((0,d.oW)({quotationText:T,philosopherFullName:t,signature:"Instagram: @philosophizetruth",share:!0})),Q((0,l.GV)("Image"))},style:{textDecoration:"none",color:C?"#fff":"#000"},children:"Share"}),(0,p.jsx)("button",{onClick:y,children:"Didn't Understand"})]})]},g)},k=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h4",{children:"No search results found!"}),(0,p.jsx)("div",{children:"Guidlines:"}),(0,p.jsx)("div",{children:"1. Please check spelling of your search text."}),(0,p.jsx)("div",{children:" 2. Try searching a smaller and a more generic word."})]});function v(){return(0,p.jsx)(k,{})}var g=o(5499);const b=function(e){let{listRef:t,width:o,height:i,searchText:l,start:a,end:c,markedMode:u,currentData:d,setCurrentData:h,options:m,currentPhilosopher:x,markedQuotes:f,setMarkedQuotes:k,scrollPosition:b,setScrollPosition:q,darkMode:j,scheduledPosts:C,setScheduledQuotes:P,rowsRendered:D,setRowsRendered:S,voiceSpeed:M,minMode:T}=e;const N=(0,g.Yv)({currentPhilosopher:x,options:m}),_=(0,g.tq)({currentPhilosopher:x,options:m});return(0,r.useEffect)((()=>{D&&(0,s.qf)(t,b,d,x)}),[D,x]),(0,r.useEffect)((()=>{t.current&&(0,s.qf)(t,b,d,x)}),[null===t||void 0===t?void 0:t.current]),void 0!==x&&void 0!==d&&(0,p.jsx)(n.Ay,{height:screen.height-screen.height/5,rowCount:null===d||void 0===d?void 0:d.length,rowHeight:550,width:o,ref:t,rowRenderer:function(e){let{index:o,...r}=e;return(0,p.jsx)(w,{data:{searchText:l,start:a,end:c,philosopherFullName:N,philosopherFullName_i10n:_,markedMode:u,currentData:d,setCurrentData:h,currentQuote:d[o],index:o,currentPhilosopher:x,markedQuotes:f,setMarkedQuotes:k,scrollPosition:b,setScrollPosition:q,darkMode:j,listRef:t,scheduledPosts:C,setScheduledQuotes:P,rowsRendered:D,setRowsRendered:S,voiceSpeed:M,minMode:T},...r})},noRowsRenderer:void 0!==x&&void 0!==d?v:null,style:{padding:"1rem",textAlign:(0,s.xl)()&&"center"}})}}}]);
//# sourceMappingURL=QuotesList.a0bf830a.chunk.js.map