"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[890],{3890:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r=t(885),o=t(2791),a=t(8687),s=t(2687),u=t(4891),i=t(9234),l="table_table__DjpbW",c="table_tableHeading__bQNPH",d="table_tableColumn__X9yJG",f=t(184),h=function(n){var e=n.tableData,t=n.columns;return(0,f.jsx)("tbody",{children:e.map((function(n){return(0,f.jsx)("tr",{children:t.map((function(e){var t=e.accessor,r=n[t]?n[t]:"\u2014\u2014";return(0,f.jsx)("td",{className:d,children:r},t)}))},n.id)}))})},p=function(n){var e=n.columns,t=n.handleSorting,a=(0,o.useState)(""),s=(0,r.Z)(a,2),u=s[0],i=s[1],l=(0,o.useState)("asc"),d=(0,r.Z)(l,2),h=d[0],p=d[1];return(0,f.jsx)("thead",{children:(0,f.jsx)("tr",{children:e.map((function(n){var e=n.label,r=n.accessor,o=n.sortable,a=o?u===r&&"asc"===h?"up":u===r&&"desc"===h?"down":"default":"";return(0,f.jsx)("th",{className:"".concat(c," ").concat(a),onClick:o?function(){return function(n){var e=n===u&&"asc"===h?"desc":"asc";i(n),p(e),t(n,e)}(r)}:null,children:e},r)}))})})},m=t(2982);var v=function(n,e){var t=(0,o.useState)([]),a=(0,r.Z)(t,2),s=a[0],u=a[1];(0,o.useEffect)((function(){u(function(n,e){return(0,m.Z)(n).sort((function(n,t){var r=e.filter((function(n){return n.sortbyOrder})),o=Object.assign.apply(Object,[{}].concat((0,m.Z)(r))),a=o.accessor,s=void 0===a?"id":a,u=o.sortbyOrder,i=void 0===u?"asc":u;if(null===n[s])return 1;if(null===t[s])return-1;if(null===n[s]&&null===t[s])return 0;var l=n[s].toString().localeCompare(t[s].toString(),"en",{numeric:!0});return"asc"===i?l:-l}))}(n,e))}),[n]);return[s,function(n,e){if(n){var t=(0,m.Z)(s).sort((function(t,r){return null===t[n]?1:null===r[n]?-1:null===t[n]&&null===r[n]?0:t[n].toString().localeCompare(r[n].toString(),"en",{numeric:!0})*("asc"===e?1:-1)}));u(t)}}]},b=function(n){var e=n.data,t=n.columns,o=v(e,t),a=(0,r.Z)(o,2),s=a[0],u=a[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("table",{className:l,children:[(0,f.jsx)(p,{columns:t,handleSorting:u}),(0,f.jsx)(h,{columns:t,tableData:s})]})})},g=JSON.parse('[{"label":"Philosopher","accessor":"philosopher","sortable":true},{"label":"Read Count","accessor":"readCount","sortable":true,"sortbyOrder":"desc"}]'),j=t(5938),x=t(3456),k=t(2922),S=function(){var n=(0,o.useState)([]),e=(0,r.Z)(n,2),t=e[0],l=e[1],c=(0,a.I0)(),d=(0,a.v9)((function(n){return n.philosophersData.markedQuotes})),h=(0,a.v9)((function(n){return n.philosophersData.options})),p=(0,a.v9)((function(n){return n.philosophersData.darkMode})),m=(0,a.v9)((function(n){var e;return null===n||void 0===n||null===(e=n.philosophersData)||void 0===e?void 0:e.originalOptions})),v=function(n){return c((0,u.Q6)(n))},S=function(n){return c((0,u.Uf)(n))},O=(0,a.v9)((function(n){return n.philosophersData.sorting}));return(0,o.useEffect)((function(){(0,s.D)({options:h,setOptions:S,originalOptions:m,setOriginalOptions:v,sorting:O})}),[]),(0,o.useEffect)((function(){!function(n){var e=n.markedQuotes,t=n.options,r=n.setData,o=[],a=0;for(var s in e)if(e.hasOwnProperty(s)&&-1!==(0,j.lf)(s,t)){var u=0;(0,x.o8)(e[s])||(a+=u=e[s].length);var i={philosopher:(0,k.PZ)({currentPhilosopher:s,options:t}),readCount:u,id:(0,x.k$)()};o.push(i)}var l={philosopher:"Total Read",readCount:a,id:(0,x.k$)()};o.push(l),r(o)}({markedQuotes:d,options:h,setData:l})}),[h.length]),(0,o.useEffect)((function(){(0,i.IE)(p)}),[p]),t.length>0?(0,f.jsx)(b,{data:t,columns:g}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",fontSize:"2rem",margin:"3rem"},children:"No records found!"}),(0,f.jsx)("div",{style:{fontSize:"2rem",margin:"3rem"},children:"Please use, marked mode feature, mark quotes as read and come back."})]})}}}]);
//# sourceMappingURL=890.2686ab3d.chunk.js.map