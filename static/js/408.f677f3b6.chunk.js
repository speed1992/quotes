"use strict";(globalThis.webpackChunkquotes=globalThis.webpackChunkquotes||[]).push([[408],{408(e,t,n){n.d(t,{A:()=>X});var r=n(5043),i=n(8387),o=n(8610);function s(e){try{return e.matches(":focus-visible")}catch(t){0}return!1}var l=n(2108),u=n(7786),a=n(5849);const c=n(1782).A;var p=n(1902);class d{static create(){return new d}static use(){const e=(0,p.A)(d.create).current,[t,n]=r.useState(!1);return e.shouldMount=t,e.setShouldMount=n,r.useEffect(e.mountEffect,[t]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=function(){let e,t;const n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())};start(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then(()=>this.ref.current?.start(...t))}stop(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then(()=>this.ref.current?.stop(...t))}pulsate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then(()=>this.ref.current?.pulsate(...t))}}var h=n(8587),f=n(8168);var m=n(5540),b=n(8726);function v(e,t){var n=Object.create(null);return e&&r.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)}),n}function g(e,t,n){return null!=n[t]?n[t]:e.props[t]}function y(e,t,n){var i=v(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var s in e)s in t?o.length&&(i[s]=o,o=[]):o.push(s);var l={};for(var u in t){if(i[u])for(r=0;r<i[u].length;r++){var a=i[u][r];l[i[u][r]]=n(a)}l[u]=n(u)}for(r=0;r<o.length;r++)l[o[r]]=n(o[r]);return l}(t,i);return Object.keys(o).forEach(function(s){var l=o[s];if((0,r.isValidElement)(l)){var u=s in t,a=s in i,c=t[s],p=(0,r.isValidElement)(c)&&!c.props.in;!a||u&&!p?a||!u||p?a&&u&&(0,r.isValidElement)(c)&&(o[s]=(0,r.cloneElement)(l,{onExited:n.bind(null,l),in:c.props.in,exit:g(l,"exit",e),enter:g(l,"enter",e)})):o[s]=(0,r.cloneElement)(l,{in:!1}):o[s]=(0,r.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:g(l,"exit",e),enter:g(l,"enter",e)})}}),o}var M=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},x=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,m.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,i,o=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,i=s,v(n.children,function(e){return(0,r.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:g(e,"appear",n),enter:g(e,"enter",n),exit:g(e,"exit",n)})})):y(e,o,s),firstRender:!1}},n.handleExited=function(e,t){var n=v(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=(0,f.A)({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,i=(0,h.A)(e,["component","childFactory"]),o=this.state.contextValue,s=M(this.state.children).map(n);return delete i.appear,delete i.enter,delete i.exit,null===t?r.createElement(b.A.Provider,{value:o},s):r.createElement(b.A.Provider,{value:o},r.createElement(t,i,s))},t}(r.Component);x.propTypes={},x.defaultProps={component:"div",childFactory:function(e){return e}};const A=x;var E=n(3593),R=n(3290),k=n(579);const w=function(e){const{className:t,classes:n,pulsate:o=!1,rippleX:s,rippleY:l,rippleSize:u,in:a,onExited:c,timeout:p}=e,[d,h]=r.useState(!1),f=(0,i.A)(t,n.ripple,n.rippleVisible,o&&n.ripplePulsate),m={width:u,height:u,top:-u/2+l,left:-u/2+s},b=(0,i.A)(n.child,d&&n.childLeaving,o&&n.childPulsate);return a||d||h(!0),r.useEffect(()=>{if(!a&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}},[c,a,p]),(0,k.jsx)("span",{className:f,style:m,children:(0,k.jsx)("span",{className:b})})};var T=n(2532);const S=(0,T.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),V=R.i7`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,C=R.i7`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,P=R.i7`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,$=(0,l.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),j=(0,l.Ay)(w,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${S.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${V};
    animation-duration: ${550}ms;
    animation-timing-function: ${e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}};
  }

  &.${S.ripplePulsate} {
    animation-duration: ${e=>{let{theme:t}=e;return t.transitions.duration.shorter}}ms;
  }

  & .${S.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${S.childLeaving} {
    opacity: 0;
    animation-name: ${C};
    animation-duration: ${550}ms;
    animation-timing-function: ${e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}};
  }

  & .${S.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${P};
    animation-duration: 2500ms;
    animation-timing-function: ${e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,D=r.forwardRef(function(e,t){const n=(0,u.b)({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:s={},className:l,...a}=n,[c,p]=r.useState([]),d=r.useRef(0),h=r.useRef(null);r.useEffect(()=>{h.current&&(h.current(),h.current=null)},[c]);const f=r.useRef(!1),m=(0,E.A)(),b=r.useRef(null),v=r.useRef(null),g=r.useCallback(e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:o,cb:l}=e;p(e=>[...e,(0,k.jsx)(j,{classes:{ripple:(0,i.A)(s.ripple,S.ripple),rippleVisible:(0,i.A)(s.rippleVisible,S.rippleVisible),ripplePulsate:(0,i.A)(s.ripplePulsate,S.ripplePulsate),child:(0,i.A)(s.child,S.child),childLeaving:(0,i.A)(s.childLeaving,S.childLeaving),childPulsate:(0,i.A)(s.childPulsate,S.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:o},d.current)]),d.current+=1,h.current=l},[s]),y=r.useCallback(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:r=!1,center:i=o||t.pulsate,fakeElement:s=!1}=t;if("mousedown"===e?.type&&f.current)return void(f.current=!1);"touchstart"===e?.type&&(f.current=!0);const l=s?null:v.current,u=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let a,c,p;if(i||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)a=Math.round(u.width/2),c=Math.round(u.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;a=Math.round(t-u.left),c=Math.round(n-u.top)}if(i)p=Math.sqrt((2*u.width**2+u.height**2)/3),p%2===0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-a),a)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}e?.touches?null===b.current&&(b.current=()=>{g({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},m.start(80,()=>{b.current&&(b.current(),b.current=null)})):g({pulsate:r,rippleX:a,rippleY:c,rippleSize:p,cb:n})},[o,g,m]),M=r.useCallback(()=>{y({},{pulsate:!0})},[y]),x=r.useCallback((e,t)=>{if(m.clear(),"touchend"===e?.type&&b.current)return b.current(),b.current=null,void m.start(0,()=>{x(e,t)});b.current=null,p(e=>e.length>0?e.slice(1):e),h.current=t},[m]);return r.useImperativeHandle(t,()=>({pulsate:M,start:y,stop:x}),[M,y,x]),(0,k.jsx)($,{className:(0,i.A)(S.root,s.root,l),ref:v,...a,children:(0,k.jsx)(A,{component:null,exit:!0,children:c})})}),B=D;var L=n(552);function I(e){return(0,L.Ay)("MuiButtonBase",e)}const N=(0,T.A)("MuiButtonBase",["root","disabled","focusVisible"]),z=(0,l.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${N.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}});function O(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c(i=>(n&&n(i),r||e[t](i),!0))}const X=r.forwardRef(function(e,t){const n=(0,u.b)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:p=!1,children:h,className:f,component:m="button",disabled:b=!1,disableRipple:v=!1,disableTouchRipple:g=!1,focusRipple:y=!1,focusVisibleClassName:M,LinkComponent:x="a",onBlur:A,onClick:E,onContextMenu:R,onDragLeave:w,onFocus:T,onFocusVisible:S,onKeyDown:V,onKeyUp:C,onMouseDown:P,onMouseLeave:$,onMouseUp:j,onTouchEnd:D,onTouchMove:L,onTouchStart:N,tabIndex:X=0,TouchRippleProps:F,touchRippleRef:Y,type:U,...q}=n,H=r.useRef(null),K=d.use(),W=(0,a.A)(K.ref,Y),[G,J]=r.useState(!1);b&&G&&J(!1),r.useImperativeHandle(l,()=>({focusVisible:()=>{J(!0),H.current.focus()}}),[]);const Q=K.shouldMount&&!v&&!b;r.useEffect(()=>{G&&y&&!v&&K.pulsate()},[v,y,G,K]);const Z=O(K,"start",P,g),_=O(K,"stop",R,g),ee=O(K,"stop",w,g),te=O(K,"stop",j,g),ne=O(K,"stop",e=>{G&&e.preventDefault(),$&&$(e)},g),re=O(K,"start",N,g),ie=O(K,"stop",D,g),oe=O(K,"stop",L,g),se=O(K,"stop",e=>{s(e.target)||J(!1),A&&A(e)},!1),le=c(e=>{H.current||(H.current=e.currentTarget),s(e.target)&&(J(!0),S&&S(e)),T&&T(e)}),ue=()=>{const e=H.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},ae=c(e=>{y&&!e.repeat&&G&&" "===e.key&&K.stop(e,()=>{K.start(e)}),e.target===e.currentTarget&&ue()&&" "===e.key&&e.preventDefault(),V&&V(e),e.target===e.currentTarget&&ue()&&"Enter"===e.key&&!b&&(e.preventDefault(),E&&E(e))}),ce=c(e=>{y&&" "===e.key&&G&&!e.defaultPrevented&&K.stop(e,()=>{K.pulsate(e)}),C&&C(e),E&&e.target===e.currentTarget&&ue()&&" "===e.key&&!e.defaultPrevented&&E(e)});let pe=m;"button"===pe&&(q.href||q.to)&&(pe=x);const de={};"button"===pe?(de.type=void 0===U?"button":U,de.disabled=b):(q.href||q.to||(de.role="button"),b&&(de["aria-disabled"]=b));const he=(0,a.A)(t,H),fe={...n,centerRipple:p,component:m,disabled:b,disableRipple:v,disableTouchRipple:g,focusRipple:y,tabIndex:X,focusVisible:G},me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,s={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,o.A)(s,I,i);return n&&r&&(l.root+=` ${r}`),l})(fe);return(0,k.jsxs)(z,{as:pe,className:(0,i.A)(me.root,f),ownerState:fe,onBlur:se,onClick:E,onContextMenu:_,onFocus:le,onKeyDown:ae,onKeyUp:ce,onMouseDown:Z,onMouseLeave:ne,onMouseUp:te,onDragLeave:ee,onTouchEnd:ie,onTouchMove:oe,onTouchStart:re,ref:he,tabIndex:b?-1:X,type:U,...de,...q,children:[h,Q?(0,k.jsx)(B,{ref:W,center:p,...F}):null]})})}}]);
//# sourceMappingURL=408.f677f3b6.chunk.js.map