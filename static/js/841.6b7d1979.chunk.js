"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[841],{3841:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var o=e(1087),r=e(6258),i=e(4025),a=e(9439),u=e(2791),s=e(4994);function l(t){var n=t.from,e=t.to,o=t.inputText,r=t.signal;return fetch(s.P.TRANSLATE,{method:"POST",body:JSON.stringify({q:o,source:n,target:e,format:"text",api_key:""}),headers:{"Content-Type":"application/json"},signal:r}).catch((function(t){}))}function c(t){var n=this,e=t.inputText,o=t.from,r=t.to,i=(0,u.useState)(""),s=(0,a.Z)(i,2),c=s[0],d=s[1];return(0,u.useEffect)((function(){var t=new AbortController,i=t.signal;return l.bind(n,{inputText:e,from:o,to:r,signal:i})().then((function(t){return t.json()})).then((function(t){var n=t.translatedText;return d(n)})).catch((function(t){})),function(){t.abort(),d("")}}),[e,o,r]),c}var d=e(184),f=function(t){var n=t.inputText,e=t.from,a=void 0===e?"en":e,u=t.to,s=void 0===u?"hi":u,l=t.openSnackbar,f=t.searchText,h=t.start,p=t.end,x=(t.philosopherFullName,t.index),m=t.philosopherFullName_i10n,T=t.darkMode,g=c({inputText:n,from:a,to:s}),v=m[s];return""!==g&&void 0!==g&&g?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{onClick:i.bA.bind(undefined,{openSnackbar:l,searchText:f,start:h,end:p,quote:g,philosopherFullName:v,index:x}),children:[g," \u2015 ",v]},x),(0,d.jsx)("div",{children:(0,d.jsx)("button",{style:{marginTop:"10px"},children:(0,d.jsx)(o.rU,{to:r.Z.image.route,state:{quotationText:g,philosopherFullName:v,signature:"\u0907\u0902\u0938\u094d\u091f\u093e\u0917\u094d\u0930\u093e\u092e: @jaaginsaan"},style:{textDecoration:"none",color:T?"#fff":"#000",marginTop:"10px"},children:"Download Hindi Image"})})})]}):null}}}]);
//# sourceMappingURL=841.6b7d1979.chunk.js.map