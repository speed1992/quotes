"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[157],{908:function(e,t,n){n.d(t,{k:function(){return r}});var r={makeDecision:function(e,t){for(var n=t.value,r=t.params,o=0;o<=e.length;o++){var i=e[o](n,r);if(i)return i}}}},4157:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=n(1413),o=n(5987),i=n(2791),s=n(5348),a=n(908),u=n(1278),c=n(9439),l=n(1087),d=n(9230),h=n(6258),f=n(295),p=n(3456),m=Math.max,x=Math.min;function v(e,t,n){var r,o,i,s,a,u,c=0,l=!1,d=!1,h=!0;if("function"!==typeof e)throw new TypeError("Expected a function");function f(t){var n=r,i=o;return r=o=void 0,c=t,s=e.apply(i,n)}function p(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function v(){var e=Date.now();if(p(e))return k(e);a=setTimeout(v,function(e){var n=t-(e-u);return d?x(n,i-(e-c)):n}(e))}function k(e){return a=void 0,h&&r?f(e):(r=o=void 0,s)}function b(){var e=Date.now(),n=p(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return function(e){return c=e,a=setTimeout(v,t),l?f(e):s}(u);if(d)return a=setTimeout(v,t),f(u)}return void 0===a&&(a=setTimeout(v,t)),s}return t=Number(t)||0,"object"===typeof n&&(l=!!n.leading,i=(d="maxWait"in n)?m(Number(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},b.flush=function(){return void 0===a?s:k(Date.now())},b}var k="row_actionItems__Y-npM";function b(e){return e%2?"ListItemOdd":"ListItemEven"}var g=n(4025),j=n(184),P=i.lazy((function(){return(0,f.YM)((function(){return n.e(519).then(n.bind(n,8519))}))})),w=i.lazy((function(){return(0,f.YM)((function(){return n.e(841).then(n.bind(n,3841))}))})),D=i.lazy((function(){return(0,f.YM)((function(){return n.e(388).then(n.bind(n,6388))}))})),M=function(e){var t=e.data,n=t.searchText,o=t.start,s=t.end,a=t.philosopherFullName,u=t.philosopherFullName_i10n,f=t.markedMode,m=t.currentQuote,x=t.currentPhilosopher,M=t.markedQuotes,y=t.setMarkedQuotes,N=t.currentData,T=t.setCurrentData,Q=t.index,S=t.scrollPosition,C=t.setScrollPosition,F=t.listRef,Z=t.darkMode,R=(t.scheduledPosts,t.setScheduledQuotes,e.style),q=(0,i.useRef)(),I=(0,d.Ds)(),_=(0,c.Z)(I,1)[0],z=m.quote,L=m.id,Y={openSnackbar:_,searchText:n,start:o,end:s,philosopherFullName:a,index:Q,philosopherFullName_i10n:u,darkMode:Z},E=(0,i.useState)(!1),A=(0,c.Z)(E,2),O=A[0],U=A[1],W=v((function(){return C(Q)}),500);if(!(0,p.o8)(m))return(0,j.jsxs)("div",{className:b(Q),style:R,onMouseMove:W,onTouchStart:W,children:[(0,j.jsx)("span",{style:{position:"absolute",top:"10rem"},className:"row",children:(0,j.jsx)("span",{ref:q,onClick:g.bA.bind(undefined,(0,r.Z)({quote:z},Y)),children:"".concat(Q+1,'. "').concat(z,'" \u2015 ').concat(a)})}),(0,j.jsx)("div",{style:{position:"absolute",top:"26rem"},className:"row",children:O?(0,j.jsx)(w,(0,r.Z)({inputText:z},Y)):null}),(0,j.jsxs)("div",{className:k,style:{position:"absolute",bottom:"5rem"},children:[(0,j.jsx)("button",{children:(0,j.jsx)(l.rU,{to:h.Z.image.route,state:{quotationText:z,philosopherFullName:a,signature:"Instagram: @philosophizetruth"},style:{textDecoration:"none",color:Z?"#fff":"#000"},children:"Download Image"})}),(0,j.jsx)(D,{index:Q,currentData:N,scrollPosition:S,setScrollPosition:C,listRef:F}),f&&(0,j.jsx)(i.Suspense,{fallback:"",children:(0,j.jsx)(P,{index:L,currentPhilosopher:x,markedQuotes:M,setMarkedQuotes:y,currentData:N,setCurrentData:T,setLocalTranslateKey:U})}),(0,j.jsx)("button",{onClick:function(){return U(!0)},children:"Translate"}),(0,j.jsx)("button",{children:(0,j.jsx)(l.rU,{to:h.Z.image.route,state:{quotationText:z,philosopherFullName:a,signature:"Instagram: @philosophizetruth",share:!0},style:{textDecoration:"none",color:Z?"#fff":"#000"},children:"Share"})})]})]},Q)},y=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h4",{children:"No search results found!"}),(0,j.jsx)("div",{children:"Guidlines:"}),(0,j.jsx)("div",{children:"1. Please check spelling of your search text."}),(0,j.jsx)("div",{children:" 2. Try searching a smaller and a more generic word."})]})};function N(){return(0,j.jsx)(y,{})}var T=[function(e,t){if(t.start<=20)return 500},function(e,t){var n=t.start;if(n>20&&n<=40)return 600},function(e,t){var n=t.start;if(n>40&&n<=60)return 1e3},function(e,t){var n=t.start;if(n>60&&n<=100)return 1400},function(e,t){if(t.start>100)return 2e3},function(){return 800}],Q=n(2922),S=["index"];var C=function(e){var t=e.listRef,n=e.width,c=e.height,l=e.searchText,d=e.start,h=e.end,f=e.markedMode,p=e.currentData,m=e.setCurrentData,x=e.options,v=e.currentPhilosopher,k=e.markedQuotes,b=e.setMarkedQuotes,g=e.scrollPosition,P=e.setScrollPosition,w=e.darkMode,D=e.scheduledPosts,y=e.setScheduledQuotes,C=(0,Q.PZ)({currentPhilosopher:v,options:x}),F=(0,Q.AD)({currentPhilosopher:v,options:x});return(0,i.useEffect)((function(){(0,u.rY)(t,g,p)}),[t]),(0,j.jsx)(s.ZP,{className:"List",height:c,rowCount:p.length,rowHeight:a.k.makeDecision(T,{params:{start:d}}),width:n,ref:t,rowRenderer:function(e){var n=e.index,i=(0,o.Z)(e,S);return(0,j.jsx)(M,(0,r.Z)({data:{searchText:l,start:d,end:h,philosopherFullName:C,philosopherFullName_i10n:F,markedMode:f,currentData:p,setCurrentData:m,currentQuote:p[n],index:n,currentPhilosopher:v,markedQuotes:k,setMarkedQuotes:b,scrollPosition:g,setScrollPosition:P,darkMode:w,listRef:t,scheduledPosts:D,setScheduledQuotes:y}},i))},noRowsRenderer:N,style:{padding:"1rem"}})}},4025:function(e,t,n){n.d(t,{bA:function(){return i}});var r=n(6998),o=n.n(r);n(184);function i(e){var t=e.openSnackbar,n=e.philosopherFullName,r=e.quote;e.index;!function(e,t){if("all"===t.toLowerCase().trim()){var n=e.lastIndexOf("\u2015 "),r=(a="",(s=n-1)>(i=e).length-1?i:i.substring(0,s)+a+i.substring(s+1));r=function(e,t,n){return e.substr(0,t)+n+e.substr(t)}(r='"'+r,n,'"\n\n'),o()(r)}else o()('"'.concat(e,'"\n\n').concat(t));var i,s,a}(r,n),t("Copied!",1e3)}}}]);
//# sourceMappingURL=157.92fcfe9c.chunk.js.map