"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[389],{389:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var u=t(9439),l=t(2791),r=t(295),a=t(184),i=l.lazy((function(){return(0,r.YM)((function(){return t.e(209).then(t.bind(t,7209))}))}));function o(e){var n=e.options,t=e.currentPhilosopher,r=e.onChangeHandler,o=e.onFocusHandlerCallback,c=e.placeholder,s=e.value,f=e.isFetchingOptions,h=(0,l.useState)([]),d=(0,u.Z)(h,2),v=d[0],p=d[1],g=(0,l.useState)([]),x=(0,u.Z)(g,2),j=x[0],k=x[1],m=(0,l.useState)(!1),w=(0,u.Z)(m,2),C=w[0],b=w[1];(0,l.useEffect)((function(){return k(s)}),[s]);var N=(0,l.useRef)();(0,l.useEffect)((function(){C&&n.length>1&&(k(""),p(n),b(!1))}),[n.length,C]);return(0,a.jsx)(i,{callback:function(){return p([])},children:(0,a.jsxs)("div",{className:"typeAheadDropDown",children:[(0,a.jsx)("input",{name:"search-philosopher",type:"text",onFocus:function(e){o(),b(!0)},onChange:function(e){var t=e.target.value;if(""===t)p(n);else{var u=[];if(t.length>0){var l=new RegExp("".concat(t),"i");u=n.filter((function(e){var n=e.fullName;return l.test(n)}))}p(u)}k(t)},placeholder:c,value:j,onBlur:function(){k(s)}}),f?(0,a.jsx)("ul",{className:"dropDownList",children:(0,a.jsx)("li",{children:"Loading..."})}):0===v.length?null:(0,a.jsx)("ul",{ref:N,className:"dropDownList",children:null===v||void 0===v?void 0:v.map((function(e){var n=e.fullName,u=e.value;return(0,a.jsx)("li",{id:t===u?"active":"",value:u,onClick:function(e){return function(e,n){void 0!==n&&(p([]),k(e),r({target:{value:n}}))}(n,u)},children:n},u)}))})]})})}}}]);
//# sourceMappingURL=389.69f1a74d.chunk.js.map