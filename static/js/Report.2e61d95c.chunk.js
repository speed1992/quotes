"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[57],{6228:(e,t,n)=>{n.d(t,{XY:()=>s,b0:()=>o,gZ:()=>r});const o=e=>"undefined"===typeof e,s=e=>0===Object.values(e).length&&e.constructor===Object;function r(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},8839:(e,t,n)=>{n.d(t,{g:()=>s});var o=n(4194);const s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e=new Date(e);const s=new Date,r=s.getTime()-e.getTime(),a=Math.floor(r/864e5);return n&&(0,o.n)("dev")&&(null===n||void 0===n||n("inside isCacheExpired "+s),null===n||void 0===n||n("startDate "+e),null===n||void 0===n||n("endDate "+s),null===n||void 0===n||n("dateDifferenceInMilliSeconds endDate.getTime() - startDate.getTime() "+r),null===n||void 0===n||n("dateDifference In hours "+Math.floor(r/36e5%24)),null===n||void 0===n||n("dateDifferenceInDays "+a),null===n||void 0===n||n("dateDifferenceInDays >= cacheTime "+a>=t),null===n||void 0===n||n("cacheTime "+t)),a>=t}},7442:(e,t,n)=>{n.d(t,{v:()=>s});n(5043);function o(e,t){const n=localStorage.getItem(e),o=JSON.parse(n);return void 0===o||"undefined"===o||"null"===o||null===o?t:o}const s=e=>{let{index:t,currentPhilosopher:n,markedMode:s,markedQuotes:r={},setMarkedQuotes:a,currentData:l,setCurrentData:i}=e,u=JSON.parse(JSON.stringify(r)),d=[];d=o(`${n}-MARKED_AS_READ`,[]),r&&void 0!==r[n]&&(d=[...d,...r[n]]),d=[...new Set(d)],t&&d.push(t),u[n]=d,a(u);const c=l.filter(((e,t)=>{let{id:n}=e;return-1===d.indexOf(n)}));i(JSON.parse(JSON.stringify(c)))}},4194:(e,t,n)=>{function o(e){let t=function(e){e=e.split("+").join(" ");for(var t,n={},o=/[?&]?([^=]+)=([^&]*)/g;t=o.exec(e);)n[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return n}(document.location.search),n=t[e]?t[e].toLowerCase():null;return!("false"!==n&&!n)}n.d(t,{n:()=>o})},3899:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var o=n(5043),s=n(3003),r=n(1342),a=n(5630),l=n(1866);const i="table_table__yNjzg",u="table_tableHeading__-u0tG",d="table_tableColumn__yamPG";var c=n(579);const p=e=>{let{tableData:t,columns:n}=e;return(0,c.jsx)("tbody",{children:t.map((e=>(0,c.jsx)("tr",{children:n.map((t=>{let{accessor:n}=t;const o=e[n]?e[n]:"\u2014\u2014";return(0,c.jsx)("td",{className:d,children:o},n)}))},e.id)))})},h=e=>{let{columns:t,handleSorting:n}=e;const[s,r]=(0,o.useState)(""),[a,l]=(0,o.useState)("asc");return(0,c.jsx)("thead",{children:(0,c.jsx)("tr",{children:t.map((e=>{let{label:t,accessor:o,sortable:i}=e;const d=i?s===o&&"asc"===a?"up":s===o&&"desc"===a?"down":"default":"";return(0,c.jsx)("th",{className:`${u} ${d}`,onClick:i?()=>(e=>{const t=e===s&&"asc"===a?"desc":"asc";r(e),l(t),n(e,t)})(o):null,children:t},o)}))})})};const m=(e,t)=>{const[n,s]=(0,o.useState)([]);(0,o.useEffect)((()=>{s(function(e,t){return[...e].sort(((e,n)=>{var o,s,r;const a=t.filter((e=>e.sortbyOrder));let{accessor:l="id",sortbyOrder:i="asc"}=Object.assign({},...a);if(null===e[l])return 1;if(null===n[l])return-1;if(null===e[l]&&null===n[l])return 0;const u=null===(o=e[l])||void 0===o||null===(s=o.toString())||void 0===s?void 0:s.localeCompare(null===(r=n[l])||void 0===r?void 0:r.toString(),"en",{numeric:!0});return"asc"===i?u:-u}))}(e,t))}),[e]);return[n,(e,t)=>{if(e){const o=[...n].sort(((n,o)=>{var s,r,a;return null===n[e]?1:null===o[e]?-1:null===n[e]&&null===o[e]?0:(null===(s=n[e])||void 0===s||null===(r=s.toString())||void 0===r?void 0:r.localeCompare(null===(a=o[e])||void 0===a?void 0:a.toString(),"en",{numeric:!0}))*("asc"===t?1:-1)}));s(o)}}]},f=e=>{let{data:t,columns:n}=e;const[o,s]=m(t,n);return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("table",{className:i,children:[(0,c.jsx)(h,{columns:n,handleSorting:s}),(0,c.jsx)(p,{columns:n,tableData:o})]})})},v=JSON.parse('[{"label":"Philosopher","accessor":"philosopher","sortable":true},{"label":"Read Count","accessor":"readCount","sortable":true},{"label":"Total Count","accessor":"totalCount","sortable":true},{"label":"% Completed","accessor":"percentageCompleted","sortable":true,"sortbyOrder":"desc"}]');var g=n(7308),S=n(6228),y=n(5499);const O=()=>{const[e,t]=(0,o.useState)([]),n=(0,s.wA)(),i=(0,s.d4)((e=>e.philosophersData.markedQuotes)),u=(0,s.d4)((e=>e.philosophersData.options)),d=(0,s.d4)((e=>e.philosophersData.darkMode)),p=(0,s.d4)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.originalOptions})),h=e=>n((0,a.a)(e)),m=e=>n((0,a.Xi)(e)),O=(0,s.d4)((e=>e.philosophersData.sorting));return(0,o.useEffect)((()=>{(0,r.g)({options:u,setOptions:m,originalOptions:p,setOriginalOptions:h,sorting:O})}),[]),(0,o.useEffect)((()=>{(e=>{let{markedQuotes:t,options:n,setData:o}=e;const s=[];let r=0;for(const l in t)if(t.hasOwnProperty(l)&&-1!==(0,g.bQ)(l,n)){let e=0;(0,S.b0)(t[l])||(e=t[l].length,r+=e);const o=(0,g.$)({philosopher:l,options:n}),a=null===o||void 0===o?void 0:o.length,i={id:(0,S.gZ)(),philosopher:(0,y.Yv)({currentPhilosopher:l,options:n}),readCount:e,totalCount:a||"\u2014\u2014",percentageCompleted:a?`${(e/a*100).toFixed(2)}%`:"\u2014\u2014"};s.push(i)}const a={philosopher:"Total Read",readCount:r,id:(0,S.gZ)()};s.push(a),o(s)})({markedQuotes:i,options:u,setData:t})}),[u.length]),(0,o.useEffect)((()=>{(0,l.lQ)(d)}),[d]),e.length>0?(0,c.jsx)(f,{data:e,columns:v}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",fontSize:"2rem",margin:"3rem"},children:"No records found!"}),(0,c.jsx)("div",{style:{fontSize:"2rem",margin:"3rem"},children:"Please use, marked mode feature, mark quotes as read and come back."})]})}},1342:(e,t,n)=>{n.d(t,{g:()=>v,T:()=>f});var o=n(8380),s=n(465);const r=15;var a=n(7308),l=n(1589),i=n(8839),u=n(2654),d=n(951),c=n(1866);const p=e=>{let{newOptions:t,oldOptions:n,oldOriginalOptions:o,setOptions:s,setOriginalOptions:r,sorting:l}=e;const i=[...d.Y,...t];let p=((e,t)=>{let n=JSON.parse(JSON.stringify(t));return n.forEach(((t,o)=>{const s=(0,a.bQ)(t.value,e);-1!==s&&(n[o].quotes=e[s].quotes)})),n})(n,[...i]);l===u.k?p=(0,c.Kf)(i,p):l===u.X&&(p=(0,c.XB)(p)),s([...p]),r(i)};var h=n(4194),m=n(5499);function f(e){let{philosopher:t,setIsFetching:n,setCurrentPhilosopher:o,currentData:s,setCurrentData:l,options:i,setOptions:u,markedMode:d,markedQuotes:c,setMarkedQuotes:p,recentPhilosophers:h,setRecentPhilosophers:f}=e;function v(){h&&f([...new Set([t,...h.slice(0,r-1)])]),o(t),(0,m.cJ)({philosopher:t,currentData:s,setCurrentData:l,options:i},{markedMode:d,markedQuotes:c,setMarkedQuotes:p}),n(!1)}n(!0),(0,a.$)({philosopher:t,options:i})?v():(0,a.rd)(t,{options:i,setOptions:u},[]).then(v)}const v=async e=>{let{options:t,setOptions:n,setSyncDate:r,setIsFetchingOptions:a,originalOptions:u,setOriginalOptions:d,sorting:c,syncDate:m,setLogs:f}=e;if((0,h.n)("dev")){const e=new Date;null===f||void 0===f||f("inside onFocusHandler"),null===f||void 0===f||f("isCacheExpired(syncDate, CACHE_IN_DAYS.ASSET_GRAPH, setLogs) || options.length === 1 "+(0,i.g)(m,s.K,f)||0),null===f||void 0===f||f("options.length "+t.length),null===f||void 0===f||f("current time "+e),null===f||void 0===f||f("syncDate "+new Date(m))}if((0,i.g)(m,s.K,f)||1===t.length){null===a||void 0===a||a(!0);let e=await(0,l.Uw)((()=>fetch(o.S.STATIC_DATA.STATIC_ASSET_GRAPH)));e=await e.json(),(0,h.n)("dev")&&(null===f||void 0===f||f("api response "+e)),p({newOptions:e,oldOptions:t,oldOriginalOptions:u,setOptions:n,setOriginalOptions:d,sorting:c}),null===a||void 0===a||a(!1),null===r||void 0===r||r(Date.now())}}},2654:(e,t,n)=>{n.d(t,{X:()=>s,k:()=>o});const o="latest",s="alphabetical"},1866:(e,t,n)=>{n.d(t,{Kf:()=>l,XB:()=>i,lQ:()=>a,xm:()=>u,z8:()=>d});var o=n(7308),s=n(7052),r=n(5499);const a=e=>{let t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},l=(e,t)=>e.map((e=>(0,o.iL)({philosopher:e.value,options:t}))).reverse(),i=e=>[...e].sort(((e,t)=>e.fullName.localeCompare(t.fullName)));async function u(e,t,n,o,r,a){const l=await(0,s.kr)({userName:e});if(l){if(l>a){let{markedQuotesFromServer:t}=await(0,s.sE)({userName:e,openSnackbar:n});o(t),n("Auto-Sync : Restored all marked quotes!",4e3)}else a>l&&await(0,s.G9)({userName:e,markedQuotes:t,openSnackbar:n});r(Date.now())}}const d=e=>{let{currentPhilosopher:t,options:n,markedQuotes:s,setStart:a,setEnd:l}=e;const i=(0,o.$)({philosopher:t,options:n}),u=(null===s||void 0===s?void 0:s[t])||[],d=i.filter((e=>!u.includes(e.id))).reduce(((e,t)=>{let{quote:n}=t;return""!==n?Math.min((0,r.sQ)(n),e):e}),1/0);d!==1/0&&(a(1),l(d))}},7052:(e,t,n)=>{n.d(t,{G9:()=>r,fk:()=>i,kr:()=>l,sE:()=>a});var o=n(8380),s=n(1589);const r=async e=>{let{userName:t,markedQuotes:n,openSnackbar:r,setSyncDate:a}=e;await(0,s.Uw)((async()=>await fetch(o.S.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:n,dateSynced:Date.now()})})))},a=async e=>{var t;let{userName:n,openSnackbar:r}=e,a=await(0,s.Uw)((async()=>await fetch(o.S.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n})})));if(a=await a.json(),null!==(t=a)&&void 0!==t&&t.ok)try{var l,i,u;const e=null===(l=a)||void 0===l||null===(i=l.results)||void 0===i||null===(u=i[0])||void 0===u?void 0:u.markedQuotes,t=Object.values(e).flat().length;var d,c,p;if(e&&t>0)return{markedQuotesFromServer:e,dateFromServer:null===(d=a)||void 0===d||null===(c=d.results)||void 0===c||null===(p=c[0])||void 0===p?void 0:p.dateSynced}}catch(h){r(JSON.stringify(h))}else r(JSON.stringify(a.error))},l=async e=>{var t;let{userName:n}=e,r=await(0,s.Uw)((async()=>await fetch(o.S.MARKED_QUOTES.GET_COUNT,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:n})})));var a;return r=await r.json(),null!==(t=r)&&void 0!==t&&t.ok?null===(a=r)||void 0===a?void 0:a.count:null},i=async e=>{var t;let{apiCallType:n,userName:r,password:a,setIsLoggedIn:l,openSnackbar:i,setIsFetching:u}=e;const d=r.charAt(0).toUpperCase()+r.slice(1);let c;u(!0),c="login"===n?await(0,s.Uw)((async()=>await fetch(o.S.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r,password:a})}))):await(0,s.Uw)((async()=>await fetch(o.S.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:r,password:a})}))),c=await c.json(),u(!1),null!==(t=c)&&void 0!==t&&t.ok?(l(!0),i(d+" "+JSON.stringify(c.serverResponse))):i(JSON.stringify(c.error))}},5499:(e,t,n)=>{n.d(t,{Yv:()=>a,cJ:()=>r,sQ:()=>i,tq:()=>l});var o=n(6228),s=n(7442);const r=(e,t)=>{let{currentPhilosopher:n,currentData:o,setCurrentData:r,options:a}=e,{markedMode:l=null,markedQuotes:i,setMarkedQuotes:u}=t;o&&r(o),void 0!==l&&l&&(0,s.v)({currentPhilosopher:n,markedMode:l,markedQuotes:i,setMarkedQuotes:u,currentData:o,setCurrentData:r})},a=e=>{let{currentPhilosopher:t,options:n}=e;const s=n.filter((e=>{let{value:n}=e;return t===n}));if(!(0,o.XY)(s))return s&&s[0].fullName},l=e=>{let{currentPhilosopher:t,options:n}=e;const s=n.filter((e=>{let{value:n}=e;return t===n}));if(!(0,o.XY)(s))return s&&s[0].fullNameInOtherLanguages};function i(e){return e.split(" ").filter((function(e){return""!==e})).length}},465:e=>{e.exports={K:1e3,r:1}}}]);
//# sourceMappingURL=Report.2e61d95c.chunk.js.map