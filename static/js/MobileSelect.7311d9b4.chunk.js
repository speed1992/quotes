"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[245],{5927:(e,l,t)=>{t.r(l),t.d(l,{default:()=>r});var n=t(5043),o=t(1589);const a={typeAheadDropDown:"mobile-select_typeAheadDropDown__OL+sR",darkTheme:"mobile-select_darkTheme__OMPaO",dropDownList:"mobile-select_dropDownList__O49by",active:"mobile-select_active__Ts+Jz"};var s=t(579);const c=n.lazy((()=>(0,o.Uw)((()=>t.e(47).then(t.bind(t,5946))))));function r(e){let{options:l,currentPhilosopher:t,onChangeHandler:o,onFocusHandlerCallback:r,placeholder:i,value:u,isFetchingOptions:d,recentPhilosophers:h,darkMode:p}=e;const[v,f]=(0,n.useState)([]),[m,g]=(0,n.useState)([]),[k,_]=(0,n.useState)(!1);(0,n.useEffect)((()=>g(u)),[u]);const w=(0,n.useRef)();(0,n.useEffect)((()=>{k&&l.length>1&&(g(""),f(l),_(!1))}),[l.length,k]);return(0,s.jsx)(c,{callback:()=>f([]),children:(0,s.jsxs)("div",{className:"".concat(a.typeAheadDropDown," ").concat(p?a.darkTheme:""),children:[(0,s.jsx)("input",{name:"search-philosopher",type:"text",onFocus:e=>{r(),_(!0)},onChange:e=>{const t=e.target.value;if(""===t)f(l);else{let e=[];if(t.length>0){const n=new RegExp("".concat(t),"i");e=l.filter((e=>{let{fullName:l}=e;return n.test(l)}))}f(e)}g(t)},placeholder:i,value:m,onBlur:()=>{g(u)}}),d?(0,s.jsx)("ul",{className:a.dropDownList,children:(0,s.jsx)("li",{children:"Loading..."})}):0===v.length?null:(0,s.jsx)("ul",{ref:w,className:"".concat(a.dropDownList," ").concat(p&&a.darkTheme),children:null===v||void 0===v?void 0:v.map(((e,l)=>{let{fullName:n,value:a}=e;return(0,s.jsx)("li",{style:""===m&&l<(null===h||void 0===h?void 0:h.length)?{color:"#FF00FF"}:{},id:t===a?"active":"",value:a,onClick:e=>((e,l)=>{void 0!==l&&(f([]),g(e),o({target:{value:l}}))})(n,a),children:n},a)}))})]})})}}}]);
//# sourceMappingURL=MobileSelect.7311d9b4.chunk.js.map