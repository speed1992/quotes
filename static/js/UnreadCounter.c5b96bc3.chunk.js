"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[726],{8139:(t,n,o)=>{o.r(n),o.d(n,{default:()=>c});var e=o(5043),u=o(3003),l=o(7308),a=o(6228),s=o(579);const c=function(t){let{isFetching:n,isFetchingOptions:o,markedQuotes:c,currentPhilosopher:r}=t;const[i,d]=(0,e.useState)({totalQuoteCount:null,readCount:null,unreadCount:null}),h=(0,u.d4)((t=>t.philosophersData.options)),p=(0,l.$)({philosopher:r,options:h}),{totalQuoteCount:C,readCount:f,unreadCount:k}=i,g=C?"(".concat((f/C*100).toFixed(2),"%)"):"";return(0,e.useEffect)((()=>{if(!n&&!o&&p){const t=p.length,n=(0,a.b0)(c[r])?0:c[r].length;d({totalQuoteCount:t,readCount:n,unreadCount:t-n})}}),[r,n,o,c,p]),!p||n||o?null:(0,s.jsxs)("span",{children:[null!==C&&"Total: ".concat(C),null!==f&&" Read: ".concat(f," ").concat(g),null!==k&&" Unread: ".concat(k)]})}}}]);
//# sourceMappingURL=UnreadCounter.c5b96bc3.chunk.js.map