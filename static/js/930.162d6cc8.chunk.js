"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[930],{7930:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var o=t(9439),l=t(2791),r=t(295),a={typeAheadDropDown:"mobile-select_typeAheadDropDown__M8PaJ",darkTheme:"mobile-select_darkTheme__ZRirJ",dropDownList:"mobile-select_dropDownList__EyTz8",active:"mobile-select_active__Xic62"},c=t(184),i=l.lazy((function(){return(0,r.YM)((function(){return t.e(209).then(t.bind(t,7209))}))}));function u(e){var n=e.options,t=e.currentPhilosopher,r=e.onChangeHandler,u=e.onFocusHandlerCallback,s=e.placeholder,d=e.value,h=e.isFetchingOptions,f=e.recentPhilosophers,p=e.darkMode,v=(0,l.useState)([]),m=(0,o.Z)(v,2),g=m[0],k=m[1],_=(0,l.useState)([]),w=(0,o.Z)(_,2),D=w[0],b=w[1],x=(0,l.useState)(!1),j=(0,o.Z)(x,2),y=j[0],F=j[1];(0,l.useEffect)((function(){return b(d)}),[d]);var C=(0,l.useRef)();(0,l.useEffect)((function(){y&&n.length>1&&(b(""),k(n),F(!1))}),[n.length,y]);return(0,c.jsx)(i,{callback:function(){return k([])},children:(0,c.jsxs)("div",{className:"".concat(a.typeAheadDropDown," ").concat(p?a.darkTheme:""),children:[(0,c.jsx)("input",{name:"search-philosopher",type:"text",onFocus:function(e){u(),F(!0)},onChange:function(e){var t=e.target.value;if(""===t)k(n);else{var o=[];if(t.length>0){var l=new RegExp("".concat(t),"i");o=n.filter((function(e){var n=e.fullName;return l.test(n)}))}k(o)}b(t)},placeholder:s,value:D,onBlur:function(){b(d)}}),h?(0,c.jsx)("ul",{className:a.dropDownList,children:(0,c.jsx)("li",{children:"Loading..."})}):0===g.length?null:(0,c.jsx)("ul",{ref:C,className:"".concat(a.dropDownList," ").concat(p&&a.darkTheme),children:null===g||void 0===g?void 0:g.map((function(e,n){var o=e.fullName,l=e.value;return(0,c.jsx)("li",{style:""===D&&n<(null===f||void 0===f?void 0:f.length)?{color:"#FF00FF"}:{},id:t===l?"active":"",value:l,onClick:function(e){return function(e,n){void 0!==n&&(k([]),b(e),r({target:{value:n}}))}(o,l)},children:o},l)}))})]})})}}}]);
//# sourceMappingURL=930.162d6cc8.chunk.js.map