(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[345],{4545:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var s=a(3003),n=a(3110);const o=()=>{const e=(0,s.wA)();return[function(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1400;e((0,n.tY)(t)),setTimeout((()=>e((0,n.tY)(""))),a)}]}},6228:(e,t,a)=>{"use strict";a.d(t,{XY:()=>n,b0:()=>s,gZ:()=>o});const s=e=>"undefined"===typeof e,n=e=>0===Object.values(e).length&&e.constructor===Object;function o(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}},7442:(e,t,a)=>{"use strict";a.d(t,{v:()=>n});a(5043);function s(e,t){const a=localStorage.getItem(e),s=JSON.parse(a);return void 0===s||"undefined"===s||"null"===s||null===s?t:s}const n=e=>{let{index:t,currentPhilosopher:a,markedMode:n,markedQuotes:o={},setMarkedQuotes:r,currentData:i,setCurrentData:l}=e,c=JSON.parse(JSON.stringify(o)),u=[];const d="".concat(a,"-MARKED_AS_READ");u=s(d,[]),o&&void 0!==o[a]&&(u=[...u,...o[a]]),u=[...new Set(u)],t&&u.push(t),c[a]=u,r(c);const p=i.filter(((e,t)=>{let{id:a}=e;return-1===u.indexOf(a)}));l(JSON.parse(JSON.stringify(p)))}},270:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var s=a(5043),n=a(3003),o=a(1589),r=a(8418),i=a(6228),l=a(1866),c=a(5239),u=a.n(c);const d=async(e,t)=>{const a=document.getElementsByTagName("html")[0],s=document.getElementsByTagName("body")[0];let n=a.clientWidth,o=s.clientWidth;const r=e.scrollWidth-e.clientWidth;r>e.clientWidth&&(n+=r,o+=r),a.style.width=n+"px",s.style.width=o+"px";((e,t)=>{const a=window.document.createElement("a");a.style="display:none;",a.download=t,a.href=e,document.body.appendChild(a),a.click(),document.body.removeChild(a),a.remove()})((await u()(e,{scale:3})).toDataURL("image/png",1),t),a.style.width=null,s.style.width=null};function p(e,t,a,o){const c=(0,n.wA)();(0,s.useEffect)((()=>{(0,l.lQ)(!0)}),[]),(0,s.useEffect)((()=>{!async function(){const s="".concat(e,"-quote-").concat((0,i.gZ)(),".png");void 0!==t&&!0===t?await(async(e,t)=>{(async()=>{"share"in navigator&&(await u()(e,{scale:3})).toBlob((async e=>{const a={files:[new File([e],t,{type:e.type})]};if(navigator.canShare(a))try{await navigator.share(a)}catch(s){"AbortError"!==s.name&&console.error(s.name,s.message)}else console.warn("Sharing not supported",a)}))})()})(a.current,s):await d(a.current,s),o||(0,l.lQ)(!1),c((0,r.GV)(""))}()}),[a,e,t])}var h=a(579);const m=s.lazy((()=>(0,o.Uw)((()=>a.e(876).then(a.bind(a,575)))))),v=s.lazy((()=>(0,o.Uw)((()=>a.e(962).then(a.bind(a,4383)))))),f=()=>{let{quotationText:e,philosopherFullName:t,signature:o,share:r=!1}=(0,n.d4)((e=>e.quoteImage));const i=(0,s.useRef)(),l=(0,n.d4)((e=>e.philosophersData.currentPhilosopher)),c={exportRef:i,quotationText:e,philosopherFullName:t,signature:o};p(t,r,i,(0,n.d4)((e=>e.philosophersData.darkMode)));try{const e="".concat(l,".jpg");return a(7853)("./"+e),(0,h.jsx)(m,{...c,imageName:e})}catch(u){return(0,h.jsx)(v,{...c})}}},1866:(e,t,a)=>{"use strict";a.d(t,{Kf:()=>i,XB:()=>l,lQ:()=>r,xm:()=>c,z8:()=>u});var s=a(7308),n=a(7052),o=a(5499);const r=e=>{let t=document.getElementsByTagName("html")[0];t.className="",e?t.classList.add("darkTheme"):t.classList.add("lightTheme")},i=(e,t)=>e.map((e=>(0,s.iL)({philosopher:e.value,options:t}))).reverse(),l=e=>[...e].sort(((e,t)=>e.fullName.localeCompare(t.fullName)));async function c(e,t,a,s,o,r){const i=await(0,n.kr)({userName:e});if(i){if(i>r){let{markedQuotesFromServer:t}=await(0,n.sE)({userName:e,openSnackbar:a});s(t),a("Auto-Sync : Restored all marked quotes!",4e3)}else r>i&&await(0,n.G9)({userName:e,markedQuotes:t,openSnackbar:a});o(Date.now())}}const u=e=>{let{currentPhilosopher:t,options:a,markedQuotes:n,setStart:r,setEnd:i}=e;const l=(0,s.$)({philosopher:t,options:a}),c=(null===n||void 0===n?void 0:n[t])||[],u=l.filter((e=>!c.includes(e.id))).reduce(((e,t)=>{let{quote:a}=t;return""!==a?Math.min((0,o.sQ)(a),e):e}),1/0);u!==1/0&&(r(1),i(u))}},7052:(e,t,a)=>{"use strict";a.d(t,{G9:()=>o,fk:()=>l,kr:()=>i,sE:()=>r});var s=a(8380),n=a(1589);const o=async e=>{let{userName:t,markedQuotes:a,openSnackbar:o,setSyncDate:r}=e;await(0,n.Uw)((async()=>await fetch(s.S.MARKED_QUOTES.BACKUP,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:t,markedQuotes:a,dateSynced:Date.now()})})))},r=async e=>{var t;let{userName:a,openSnackbar:o}=e,r=await(0,n.Uw)((async()=>await fetch(s.S.MARKED_QUOTES.RESTORE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:a})})));if(r=await r.json(),null!==(t=r)&&void 0!==t&&t.ok)try{var i,l,c;const e=null===(i=r)||void 0===i||null===(l=i.results)||void 0===l||null===(c=l[0])||void 0===c?void 0:c.markedQuotes,t=Object.values(e).flat().length;var u,d,p;if(e&&t>0)return{markedQuotesFromServer:e,dateFromServer:null===(u=r)||void 0===u||null===(d=u.results)||void 0===d||null===(p=d[0])||void 0===p?void 0:p.dateSynced}}catch(h){o(JSON.stringify(h))}else o(JSON.stringify(r.error))},i=async e=>{var t;let{userName:a}=e,o=await(0,n.Uw)((async()=>await fetch(s.S.MARKED_QUOTES.GET_COUNT,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:a})})));var r;return o=await o.json(),null!==(t=o)&&void 0!==t&&t.ok?null===(r=o)||void 0===r?void 0:r.count:null},l=async e=>{var t;let{apiCallType:a,userName:o,password:r,setIsLoggedIn:i,openSnackbar:l,setIsFetching:c}=e;const u=o.charAt(0).toUpperCase()+o.slice(1);let d;c(!0),d="login"===a?await(0,n.Uw)((async()=>await fetch(s.S.USER.LOGIN,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o,password:r})}))):await(0,n.Uw)((async()=>await fetch(s.S.USER.CREATE,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:o,password:r})}))),d=await d.json(),c(!1),null!==(t=d)&&void 0!==t&&t.ok?(i(!0),l(u+" "+JSON.stringify(d.serverResponse))):l(JSON.stringify(d.error))}},5499:(e,t,a)=>{"use strict";a.d(t,{Yv:()=>r,cJ:()=>o,sQ:()=>l,tq:()=>i});var s=a(6228),n=a(7442);const o=(e,t)=>{let{currentPhilosopher:a,currentData:s,setCurrentData:o,options:r}=e,{markedMode:i=null,markedQuotes:l,setMarkedQuotes:c}=t;s&&o(s),void 0!==i&&i&&(0,n.v)({currentPhilosopher:a,markedMode:i,markedQuotes:l,setMarkedQuotes:c,currentData:s,setCurrentData:o})},r=e=>{let{currentPhilosopher:t,options:a}=e;const n=a.filter((e=>{let{value:a}=e;return t===a}));if(!(0,s.XY)(n))return n&&n[0].fullName},i=e=>{let{currentPhilosopher:t,options:a}=e;const n=a.filter((e=>{let{value:a}=e;return t===a}));if(!(0,s.XY)(n))return n&&n[0].fullNameInOtherLanguages};function l(e){return e.split(" ").filter((function(e){return""!==e})).length}},9518:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(5043),n=a(3003),o=a(4545),r=a(5630);const i={modal:"exclusions-inclusions_modal__gxaat"};var l=a(579);const c=()=>{const e=(0,n.wA)(),[t]=(0,o.A)(),a=(0,n.d4)((e=>{var t;return null===e||void 0===e||null===(t=e.philosophersData)||void 0===t?void 0:t.searchFilters})),[c,u]=(0,s.useState)(a);return(0,l.jsxs)("div",{className:null===i||void 0===i?void 0:i.modal,children:[(0,l.jsx)("h5",{children:"Exclusions"}),(0,l.jsx)("textarea",{rows:"10",onChange:e=>{var t,a;return u({...c,exclusions:null===e||void 0===e||null===(t=e.target)||void 0===t||null===(a=t.value)||void 0===a?void 0:a.toLowerCase()})},value:null===c||void 0===c?void 0:c.exclusions}),(0,l.jsx)("h5",{children:"Inclusions"}),(0,l.jsx)("textarea",{rows:"10",onChange:e=>{var t,a;return u({...c,inclusions:null===e||void 0===e||null===(t=e.target)||void 0===t||null===(a=t.value)||void 0===a?void 0:a.toLowerCase()})},value:null===c||void 0===c?void 0:c.inclusions}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{onClick:()=>{e((0,r.cd)(c)),t("Exclusions/Inclusions Updated!",4e3)},children:"Add"})})]})}},7853:(e,t,a)=>{var s={"./BEAUVOIR.jpg":1848,"./BUKOWSKI.jpg":1322,"./CARL_JUNG.jpg":8094,"./FREUD.jpg":139,"./MARK_TWAIN.jpg":4554,"./OSHO.jpg":5984,"./PETERSON.jpg":3527,"./RICKY_GERVAIS.png":4507,"./ROUSSEAU.jpg":1502};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=o,e.exports=n,n.id=7853},1848:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/BEAUVOIR.a37acf7026379a5c745f.jpg"},1322:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/BUKOWSKI.3ed907dda532b04aa57a.jpg"},8094:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/CARL_JUNG.12be5cab35dd5548822a.jpg"},139:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/FREUD.fa5e080abec887337460.jpg"},4554:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/MARK_TWAIN.d04dc676af5be490f48a.jpg"},5984:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/OSHO.45432ce7c4c8818ad65c.jpg"},3527:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/PETERSON.f3968a4c45466650e225.jpg"},4507:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/RICKY_GERVAIS.975580860d1cf99727fc.png"},1502:(e,t,a)=>{"use strict";e.exports=a.p+"static/media/ROUSSEAU.bd65f104307ba9482677.jpg"}}]);
//# sourceMappingURL=GenerateQuoteImage.ffc5be62.chunk.js.map