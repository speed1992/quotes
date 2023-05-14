"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[669],{6669:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(9439),s=n(2791),a=n(9434),o=n(1087),u=n(9230),c=n(6258),i=n(295),d=n(1930),p=n(4891),l=n(5861),h=n(4687),k=n.n(h),f=function(){var e=(0,l.Z)(k().mark((function e(t){var n,r,s,a;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.userName,r=t.markedQuotes,s=t.openSnackbar,"philosophizetruth"!==n){e.next=9;break}return e.next=4,(0,i.YM)((0,l.Z)(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-backend.vercel.app/api/markedQuotes/",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({userName:"philosophizetruth",markedQuotes:r,dateSynced:Date.now()})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 4:return a=e.sent,e.next=7,a.json();case 7:a=e.sent,s(JSON.stringify(a),2e3);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,l.Z)(k().mark((function e(t){var n,r,s,a;return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.userName,t.markedQuotes,r=t.openSnackbar,s=t.setMarkedQuotes,"philosophizetruth"!==n){e.next=10;break}return e.next=4,(0,i.YM)((0,l.Z)(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quotes-backend.vercel.app/api/markedQuotes/",{method:"get",headers:{"Content-Type":"application/json"}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));case 4:return a=e.sent,e.next=7,a.json();case 7:a=e.sent,s(a[0].markedQuotes),r("Restored data",2e3);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(184),b=s.lazy((function(){return(0,i.YM)((function(){return n.e(777).then(n.bind(n,7777))}))})),j=s.lazy((function(){return(0,i.YM)((function(){return n.e(209).then(n.bind(n,7209))}))}));var v=function(e){var t=e.markedMode,n=e.setMarkedMode,s=e.visible,i=e.toggleVisible,l=e.darkMode,h=e.setDarkMode,k=e.setSorting,v=e.sorting,y=e.userName,g=e.setUserName,M=e.setMarkedQuotes,C=(0,a.v9)((function(e){return e.philosophersData.voiceSpeed})),N=(0,a.v9)((function(e){return e.philosophersData.markedQuotes})),Q=(0,u.Ds)(),S=(0,r.Z)(Q,1)[0],w=(0,a.I0)(),D=function(e){e.target.id===d.y?k(d.y):k(d.P)};return(0,m.jsx)(j,{callback:function(){return i(!1)},children:(0,m.jsxs)("ul",{id:"slide_menu",style:{display:s?"block":"none"},children:[(0,m.jsxs)("li",{children:["Sort philosophers",(0,m.jsxs)("div",{children:[(0,m.jsx)("input",{type:"radio",id:d.y,name:"sortType",onClick:D,defaultChecked:v===d.y}),(0,m.jsx)("label",{htmlFor:d.y,children:"Latest"})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("input",{type:"radio",id:d.P,name:"sortType",onClick:D,defaultChecked:v===d.P}),(0,m.jsx)("label",{htmlFor:d.P,children:"Alphabetical"})]})]}),(0,m.jsxs)("li",{children:["Marked Mode",(0,m.jsx)("input",{type:"checkbox",checked:t,onChange:function(e){var t=e.target.checked;return n(t)}})]}),(0,m.jsxs)("li",{children:["Dark Mode",(0,m.jsx)("input",{type:"checkbox",checked:l,onChange:function(e){var t=e.target.checked;return h(t)}})]}),(0,m.jsxs)("li",{children:["Voice Speed[1-20]",(0,m.jsx)("input",{onChange:function(e){return w((0,p.u8)(e.target.value/10))},className:"voiceSpeed",type:"number",value:C?10*C:""})]}),(0,m.jsx)("li",{children:(0,m.jsx)(o.rU,{to:c.Z.report.route,style:{textDecoration:"none",color:"#000"},children:(0,m.jsx)("button",{children:"Open Report"})})}),(0,m.jsxs)("li",{children:["Username",(0,m.jsx)("input",{className:"userName",type:"text",onChange:function(e){return g(e.target.value)},value:y}),(0,m.jsx)("button",{onClick:function(){return f({userName:y,markedQuotes:N,openSnackbar:S})},children:"Backup"}),(0,m.jsx)("button",{onClick:function(){return x({userName:y,markedQuotes:N,openSnackbar:S,setMarkedQuotes:M})},children:"Restore"})]}),(0,m.jsx)("li",{children:(0,m.jsx)(b,{})})]})})}}}]);
//# sourceMappingURL=669.0f36f30b.chunk.js.map