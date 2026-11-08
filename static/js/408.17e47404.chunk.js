"use strict";(globalThis.webpackChunkquotes||=[]).push([[408],{408(e,t,n){n.d(t,{A:()=>O});var i=n(5043),r=n(8387),o=n(8610);function s(e){try{return e.matches(":focus-visible")}catch(t){0}return!1}var l=n(2108),u=n(7786),a=n(5849);const c=n(1782).A;var p=n(1902);class d{static create(){return new d}static use(){const e=(0,p.A)(d.create).current,[t,n]=i.useState(!1);return e.shouldMount=t,e.setShouldMount=n,i.useEffect(e.mountEffect,[t]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=function(){let e,t;const n=new Promise((n,i)=>{e=n,t=i});return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}var h=n(8587),f=n(8168);var m=n(5540),b=n(8726);function v(e,t){var n=Object.create(null);return e&&i.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)}),n}function g(e,t,n){return null!=n[t]?n[t]:e.props[t]}function M(e,t,n){var r=v(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var i,r=Object.create(null),o=[];for(var s in e)s in t?o.length&&(r[s]=o,o=[]):o.push(s);var l={};for(var u in t){if(r[u])for(i=0;i<r[u].length;i++){var a=r[u][i];l[r[u][i]]=n(a)}l[u]=n(u)}for(i=0;i<o.length;i++)l[o[i]]=n(o[i]);return l}(t,r);return Object.keys(o).forEach(function(s){var l=o[s];if((0,i.isValidElement)(l)){var u=s in t,a=s in r,c=t[s],p=(0,i.isValidElement)(c)&&!c.props.in;!a||u&&!p?a||!u||p?a&&u&&(0,i.isValidElement)(c)&&(o[s]=(0,i.cloneElement)(l,{onExited:n.bind(null,l),in:c.props.in,exit:g(l,"exit",e),enter:g(l,"enter",e)})):o[s]=(0,i.cloneElement)(l,{in:!1}):o[s]=(0,i.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:g(l,"exit",e),enter:g(l,"enter",e)})}}),o}var x=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},y=function(e){function t(t,n){var i,r=(i=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}(0,m.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,r=s,v(n.children,function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:g(e,"appear",n),enter:g(e,"enter",n),exit:g(e,"exit",n)})})):M(e,o,s),firstRender:!1}},n.handleExited=function(e,t){var n=v(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=(0,f.A)({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,h.A)(e,["component","childFactory"]),o=this.state.contextValue,s=x(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(b.A.Provider,{value:o},s):i.createElement(b.A.Provider,{value:o},i.createElement(t,r,s))},t}(i.Component);y.propTypes={},y.defaultProps={component:"div",childFactory:function(e){return e}};const E=y;var R=n(3593),A=n(7819),k=n(579);const T=function(e){const{className:t,classes:n,pulsate:o=!1,rippleX:s,rippleY:l,rippleSize:u,in:a,onExited:c,timeout:p}=e,[d,h]=i.useState(!1),f=(0,r.A)(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),m={width:u,height:u,top:-u/2+l,left:-u/2+s},b=(0,r.A)(n.child,d&&n.childLeaving,o&&n.childPulsate);return a||d||h(!0),i.useEffect(()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}},[c,a,p]),(0,k.jsx)("span",{className:f,style:m,children:(0,k.jsx)("span",{className:b})})};var S=n(2532);const V=(0,S.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),P=A.i7`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,w=A.i7`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,C=A.i7`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,$=(0,l.A)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),j=(0,l.A)(T,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${V.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${P};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${V.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${V.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${V.childLeaving} {
    opacity: 0;
    animation-name: ${w};
    animation-duration: ${550}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${V.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${C};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,D=i.forwardRef(function(e,t){const n=(0,u.b)({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:l,...a}=n,[c,p]=i.useState([]),d=i.useRef(0),h=i.useRef(null);i.useEffect(()=>{h.current&&(h.current(),h.current=null)},[c]);const f=i.useRef(!1),m=(0,R.A)(),b=i.useRef(null),v=i.useRef(null),g=i.useCallback(e=>{const{pulsate:t,rippleX:n,rippleY:i,rippleSize:o,cb:l}=e;p(e=>[...e,(0,k.jsx)(j,{classes:{ripple:(0,r.A)(s.ripple,V.ripple),rippleVisible:(0,r.A)(s.rippleVisible,V.rippleVisible),ripplePulsate:(0,r.A)(s.ripplePulsate,V.ripplePulsate),child:(0,r.A)(s.child,V.child),childLeaving:(0,r.A)(s.childLeaving,V.childLeaving),childPulsate:(0,r.A)(s.childPulsate,V.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:i,rippleSize:o},d.current)]),d.current+=1,h.current=l},[s]),M=i.useCallback((e={},t={},n=()=>{})=>{const{pulsate:i=!1,center:r=o||t.pulsate,fakeElement:s=!1}=t;if("mousedown"===e?.type&&f.current)return void(f.current=!1);"touchstart"===e?.type&&(f.current=!0);const l=s?null:v.current,u=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(r||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(u.width/2),c=Math.round(u.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-u.left),c=Math.round(n-u.top)}if(r)p=Math.sqrt((2*u.width**2+u.height**2)/3),p%2===0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}e?.touches?null===b.current&&(b.current=()=>{g({pulsate:i,rippleX:a,rippleY:c,rippleSize:p,cb:n})},m.start(80,()=>{b.current&&(b.current(),b.current=null)})):g({pulsate:i,rippleX:a,rippleY:c,rippleSize:p,cb:n})},[o,g,m]),x=i.useCallback(()=>{M({},{pulsate:!0})},[M]),y=i.useCallback((e,t)=>{if(m.clear(),"touchend"===e?.type&&b.current)return b.current(),b.current=null,void m.start(0,()=>{y(e,t)});b.current=null,p(e=>e.length>0?e.slice(1):e),h.current=t},[m]);return i.useImperativeHandle(t,()=>({pulsate:x,start:M,stop:y}),[x,M,y]),(0,k.jsx)($,{className:(0,r.A)(V.root,s.root,l),ref:v,...a,children:(0,k.jsx)(E,{component:null,exit:!0,children:c})})});var B=n(552);function L(e){return(0,B.Ay)("MuiButtonBase",e)}const I=(0,S.A)("MuiButtonBase",["root","disabled","focusVisible"]),N=(0,l.A)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${I.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});function z(e,t,n,i=!1){return c(r=>(n&&n(r),i||e[t](r),!0))}const O=i.forwardRef(function(e,t){const n=(0,u.b)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:p=!1,children:h,className:f,component:m="button",disabled:b=!1,disableRipple:v=!1,disableTouchRipple:g=!1,focusRipple:M=!1,focusVisibleClassName:x,LinkComponent:y="a",onBlur:E,onClick:R,onContextMenu:A,onDragLeave:T,onFocus:S,onFocusVisible:V,onKeyDown:P,onKeyUp:w,onMouseDown:C,onMouseLeave:$,onMouseUp:j,onTouchEnd:B,onTouchMove:I,onTouchStart:O,tabIndex:X=0,TouchRippleProps:F,touchRippleRef:Y,type:U,...H}=n,K=i.useRef(null),W=d.use(),q=(0,a.A)(W.ref,Y),[G,J]=i.useState(!1);b&&G&&J(!1),i.useImperativeHandle(l,()=>({focusVisible:()=>{J(!0),K.current.focus()}}),[]);const Q=W.shouldMount&&!v&&!b;i.useEffect(()=>{G&&M&&!v&&W.pulsate()},[v,M,G,W]);const Z=z(W,"start",C,g),_=z(W,"stop",A,g),ee=z(W,"stop",T,g),te=z(W,"stop",j,g),ne=z(W,"stop",e=>{G&&e.preventDefault(),$&&$(e)},g),ie=z(W,"start",O,g),re=z(W,"stop",B,g),oe=z(W,"stop",I,g),se=z(W,"stop",e=>{s(e.target)||J(!1),E&&E(e)},!1),le=c(e=>{K.current||(K.current=e.currentTarget),s(e.target)&&(J(!0),V&&V(e)),S&&S(e)}),ue=()=>{const e=K.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},ae=c(e=>{M&&!e.repeat&&G&&" "===e.key&&W.stop(e,()=>{W.start(e)}),e.target===e.currentTarget&&ue()&&" "===e.key&&e.preventDefault(),P&&P(e),e.target===e.currentTarget&&ue()&&"Enter"===e.key&&!b&&(e.preventDefault(),R&&R(e))}),ce=c(e=>{M&&" "===e.key&&G&&!e.defaultPrevented&&W.stop(e,()=>{W.pulsate(e)}),w&&w(e),R&&e.target===e.currentTarget&&ue()&&" "===e.key&&!e.defaultPrevented&&R(e)});let pe=m;"button"===pe&&(H.href||H.to)&&(pe=y);const de={};"button"===pe?(de.type=void 0===U?"button":U,de.disabled=b):(H.href||H.to||(de.role="button"),b&&(de["aria-disabled"]=b));const he=(0,a.A)(t,K),fe={...n,centerRipple:p,component:m,disabled:b,disableRipple:v,disableTouchRipple:g,focusRipple:M,tabIndex:X,focusVisible:G},me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:i,classes:r}=e,s={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,o.A)(s,L,r);return n&&i&&(l.root+=` ${i}`),l})(fe);return(0,k.jsxs)(N,{as:pe,className:(0,r.A)(me.root,f),ownerState:fe,onBlur:se,onClick:R,onContextMenu:_,onFocus:le,onKeyDown:ae,onKeyUp:ce,onMouseDown:Z,onMouseLeave:ne,onMouseUp:te,onDragLeave:ee,onTouchEnd:re,onTouchMove:oe,onTouchStart:ie,ref:he,tabIndex:b?-1:X,type:U,...de,...H,children:[h,Q?(0,k.jsx)(D,{ref:q,center:p,...F}):null]})})}}]);
//# sourceMappingURL=408.17e47404.chunk.js.map