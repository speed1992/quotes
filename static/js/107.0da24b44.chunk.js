"use strict";(self.webpackChunkquotes_app=self.webpackChunkquotes_app||[]).push([[107],{7762:function(e,t,n){n.d(t,{H:function(){return i}});var a=n(771),r=n(1278),s=n(3086),A=n(5260);function i(e){var t=e.philosopher,n=e.triggerChange,i=e.listRef,g=e.setTriggerChange,l=e.setIsFetching,o=e.setStart,f=e.setEnd,h=e.setSearchText;function c(){(0,a._Z)(t),(0,A.gt)(t),g(!n),(0,r.rY)(i),l(!1)}o(1),f(""),h(""),l(!0),"all"===t.trim().toLowerCase()?(0,s.jn)().then(c):(0,s.dA)(t).then(c)}},107:function(e,t,n){n.r(t);var a=n(1413),r=n(1440),s=(n(2791),n(771)),A=n(9665),i=n(8519),g=n(7762),l=n(2194),o=n(220),f=n(184);t.default=function(e){var t=e.listRef,n=e.setSearchText,h=e.searchText,c=e.setTriggerChange,u=e.triggerChange,v=e.start,p=e.end,P=e.setStart,d=e.setEnd,E=e.setIsFetching,m=e.translateKey,F=e.setTranslateKey,x={start:v,end:p,setStart:P,setEnd:d,setSearchText:n};return(0,f.jsx)("div",{className:"header",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"mobile-column",children:(0,f.jsx)(o.R,(0,a.Z)({isMobile:!0,vlistRef:t,setTriggerChange:c,triggerChange:u},x))}),(0,f.jsx)("div",{className:"mobile-column",children:(0,f.jsx)("input",{className:"wordSearch",type:"text",placeholder:"Search word",value:h,onChange:function(e){var t=e.target.value;return n(t)}})}),(0,f.jsx)("div",{className:"mobile-column",children:(0,f.jsx)(l.Z,{isMobile:!0,options:i.Z,defaultOption:s.KZ,onChangeHandler:function(e){var a=e.target.value;return(0,g.H)({philosopher:a,triggerChange:u,listRef:t,setTriggerChange:c,setIsFetching:E,setStart:P,setEnd:d,setSearchText:n})}})}),(0,f.jsxs)("div",{className:"mobile-column",children:[(0,f.jsx)("span",{children:(0,f.jsx)("img",{className:"translate-img",src:A,alt:"Toggle to translate"})}),(0,f.jsx)(r.Z,{size:"small",checked:m,onChange:function(e){var t=e.target.checked;F(t),c(!u)}})]})]})})}},2194:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(1413),r=n(1462),s=n(5628),A=(n(2791),n(771)),i=n(3086),g=n(184),l=function(e){var t=e.options,n=e.onChangeHandler;return e.isMobile?(0,g.jsx)("select",{className:"dropDown",onChange:n,value:A.KZ,children:t&&t.map((function(e){var t=e.id,n=e.fullName,a=e.value;return(0,g.jsx)("option",{value:a,children:n},t)}))}):void 0!==A.KZ&&(0,g.jsx)(r.Z,{disableClearable:!0,onChange:n,getOptionLabel:function(e){return e.fullName},value:t[(0,i.lf)(A.KZ)],options:t,size:"small",sx:{width:210},renderInput:function(e){return(0,g.jsx)(s.Z,(0,a.Z)((0,a.Z)({},e),{},{label:"Philosopher"}))},ListboxProps:{style:{maxHeight:"80vh"},position:"bottom-start"}})}},220:function(e,t,n){n.d(t,{R:function(){return s}});var a=n(5628),r=(n(2791),n(184));function s(e){var t=e.start,n=e.end,s=e.setStart,A=e.setEnd;e.setSearchText;return e.isMobile?(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)("input",{className:"smallInput",name:"start",type:"number",min:"1",value:t,onChange:function(e){var t=e.target.value;return s(t)}})," to "," ",(0,r.jsx)("input",{className:"smallInput",name:"end",type:"number",min:"0",value:n,onChange:function(e){var t=e.target.value;return A(t)}})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{className:"smallInput",id:"outlined-number",label:"Start",type:"number",size:"small",name:"start",min:"1",value:t,onChange:function(e){var t=e.target.value;return s(t)}}),(0,r.jsx)("span",{className:"to",children:" to "}),(0,r.jsx)(a.Z,{className:"smallInput",id:"outlined-number",label:"End",type:"number",size:"small",name:"end",min:"0",value:n,onChange:function(e){var t=e.target.value;return A(t)}})]})}},9665:function(e){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=107.0da24b44.chunk.js.map