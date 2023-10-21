"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[728],{1728:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r=t(9439),o=t(2791),a=t(8687),s=t(2687),i=t(4891),u=t(9234),c=t(184),l=function(n){var e=n.tableData,t=n.columns;return(0,c.jsx)("tbody",{children:e.map((function(n){return(0,c.jsx)("tr",{children:t.map((function(e){var t=e.accessor,r=n[t]?n[t]:"\u2014\u2014";return(0,c.jsx)("td",{children:r},t)}))},n.id)}))})},d=function(n){var e=n.columns,t=n.handleSorting,a=(0,o.useState)(""),s=(0,r.Z)(a,2),i=s[0],u=s[1],l=(0,o.useState)("asc"),d=(0,r.Z)(l,2),f=d[0],h=d[1];return(0,c.jsx)("thead",{children:(0,c.jsx)("tr",{children:e.map((function(n){var e=n.label,r=n.accessor,o=n.sortable,a=o?i===r&&"asc"===f?"up":i===r&&"desc"===f?"down":"default":"";return(0,c.jsx)("th",{onClick:o?function(){return function(n){var e=n===i&&"asc"===f?"desc":"asc";u(n),h(e),t(n,e)}(r)}:null,className:a,children:e},r)}))})})},f=t(3433);var h=function(n,e){var t=(0,o.useState)([]),a=(0,r.Z)(t,2),s=a[0],i=a[1];(0,o.useEffect)((function(){i(function(n,e){return(0,f.Z)(n).sort((function(n,t){var r=e.filter((function(n){return n.sortbyOrder})),o=Object.assign.apply(Object,[{}].concat((0,f.Z)(r))),a=o.accessor,s=void 0===a?"id":a,i=o.sortbyOrder,u=void 0===i?"asc":i;if(null===n[s])return 1;if(null===t[s])return-1;if(null===n[s]&&null===t[s])return 0;var c=n[s].toString().localeCompare(t[s].toString(),"en",{numeric:!0});return"asc"===u?c:-c}))}(n,e))}),[n]);return[s,function(n,e){if(n){var t=(0,f.Z)(s).sort((function(t,r){return null===t[n]?1:null===r[n]?-1:null===t[n]&&null===r[n]?0:t[n].toString().localeCompare(r[n].toString(),"en",{numeric:!0})*("asc"===e?1:-1)}));i(t)}}]},p=function(n){var e=n.caption,t=n.data,o=n.columns,a=h(t,o),s=(0,r.Z)(a,2),i=s[0],u=s[1];return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("table",{className:"table",children:[e&&(0,c.jsx)("caption",{children:e}),(0,c.jsx)(d,{columns:o,handleSorting:u}),(0,c.jsx)(l,{columns:o,tableData:i})]})})},v=JSON.parse('[{"label":"Philosopher","accessor":"philosopher","sortable":true},{"label":"Read Count","accessor":"readCount","sortable":true,"sortbyOrder":"desc"}]'),m=t(5938),g=t(3456),b=t(2922),j=function(){var n=(0,o.useState)([]),e=(0,r.Z)(n,2),t=e[0],l=e[1],d=(0,a.I0)(),f=(0,a.v9)((function(n){return n.philosophersData.markedQuotes})),h=(0,a.v9)((function(n){return n.philosophersData.options})),j=(0,a.v9)((function(n){return n.philosophersData.darkMode})),x=(0,a.v9)((function(n){var e;return null===n||void 0===n||null===(e=n.philosophersData)||void 0===e?void 0:e.originalOptions})),k=function(n){return d((0,i.Q6)(n))},S=function(n){return d((0,i.Uf)(n))},O=(0,a.v9)((function(n){return n.philosophersData.sorting}));return(0,o.useEffect)((function(){(0,s.D)({options:h,setOptions:S,originalOptions:x,setOriginalOptions:k,sorting:O})}),[]),(0,o.useEffect)((function(){!function(n){var e=n.markedQuotes,t=n.options,r=n.setData,o=[],a=0;for(var s in e)if(e.hasOwnProperty(s)&&-1!==(0,m.lf)(s,t)){var i=0;(0,g.o8)(e[s])||(a+=i=e[s].length);var u={philosopher:(0,b.PZ)({currentPhilosopher:s,options:t}),readCount:i,id:(0,g.k$)()};o.push(u)}var c={philosopher:"Total Read",readCount:a,id:(0,g.k$)()};o.push(c),r(o)}({markedQuotes:f,options:h,setData:l})}),[h.length]),(0,o.useEffect)((function(){(0,u.IE)(j)}),[j]),t.length>0?(0,c.jsx)(p,{data:t,columns:v}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",fontSize:"2rem",margin:"3rem"},children:"No records found!"}),(0,c.jsx)("div",{style:{fontSize:"2rem",margin:"3rem"},children:"Please use, marked mode feature, mark quotes as read and come back."})]})}}}]);
//# sourceMappingURL=728.1a8d7436.chunk.js.map