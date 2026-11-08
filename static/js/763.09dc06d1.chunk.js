"use strict";(globalThis.webpackChunkquotes||=[]).push([[763],{4763(e,t,n){n.d(t,{A:()=>z});var o=n(5043),i=n(8387),r=n(9230);function s(e){try{return e.matches(":focus-visible")}catch(t){0}return!1}var a=n(8549),l=n(2753),u=n(6733),c=n(3859),p=n(1101);const d={};function h(e){const{nativeButton:t,nativeButtonProp:n,internalNativeButton:i=t,allowInferredHostMismatch:r=!1,disabled:s,type:a,hasFormAction:l=!1,tabIndex:u=0,focusableWhenDisabled:c,stopEventPropagation:p=!1,onBeforeKeyDown:h,onBeforeKeyUp:f}=e,m=o.useRef(null),b=!0===c,g=function(e){const{focusableWhenDisabled:t,disabled:n,composite:i=!1,tabIndex:r=0,isNativeButton:s}=e,a=i&&!1!==t,l=i&&!1===t;return o.useMemo(()=>{const e={onKeyDown(e){n&&t&&"Tab"!==e.key&&e.preventDefault()}};return i||(e.tabIndex=r,!s&&n&&(e.tabIndex=t?r:-1)),(s&&(t||a)||!s&&n)&&(e["aria-disabled"]=n),!s||t&&!l||(e.disabled=n),e},[i,n,t,a,l,s,r])}({focusableWhenDisabled:b,disabled:s,isNativeButton:t,tabIndex:u});const y=o.useCallback(()=>{const e=m.current;return null==e?t:"BUTTON"===e.tagName||Boolean("A"===e.tagName&&e.href)},[t]),v=o.useMemo(()=>{const e=b?{}:{tabIndex:s?-1:u};return t?(e.type=void 0!==a||l?a:"button",b||(e.disabled=s)):(e.role="button",!b&&s&&(e["aria-disabled"]=s)),b?{...e,...g}:e},[s,b,g,l,t,u,a]);return{getButtonProps:o.useCallback((e=d)=>{const{onClick:t,onKeyDown:n,onKeyUp:o,...i}=e;return{...v,...i,onClick:e=>{p&&e.stopPropagation(),s?e.preventDefault():t?.(e)},onKeyDown:e=>{b&&g.onKeyDown(e),s||(h?.(e),n?.(e),e.target!==e.currentTarget||y()||(" "!==e.key?"Enter"===e.key&&(e.preventDefault(),e.currentTarget.click()):e.preventDefault()))},onKeyUp:e=>{s||(f?.(e),o?.(e),e.target!==e.currentTarget||y()||" "!==e.key||e.defaultPrevented||e.currentTarget.click())}}},[v,s,b,g,y,h,f,p]),rootRef:m}}var f=n(9341);class m{ref={current:null};shouldMount=!1;mounted=null;didMount=!1;setShouldMount=null;static create(){return new m}static use(){const e=(0,f.A)(m.create).current,[t,n]=o.useState(!1);return e.shouldMount=t,e.setShouldMount=n,o.useEffect(e.mountEffect,[t]),e}mount(){return this.mounted||(this.mounted=function(){let e,t;const n=new Promise((n,o)=>{e=n,t=o});return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&(null!==this.ref.current&&(this.didMount=!0),this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}var b=n(1516),g=n(2506),y=n(7819),v=n(1338),M=n(579);const A=function(e){const{className:t,classes:n,pulsate:r=!1,rippleX:s,rippleY:a,rippleSize:l,in:u,onExited:c,timeout:p}=e,[d,h]=o.useState(!1),f=(0,g.A)(),m=o.useRef(!1),b=o.useRef(c);b.current=c;const y=null!=c,v=(0,i.A)(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),A={width:l,height:l,top:-l/2+a,left:-l/2+s},x=(0,i.A)(n.child,d&&n.childLeaving,r&&n.childPulsate);return u||d||h(!0),o.useEffect(()=>{!u&&y?m.current||(m.current=!0,f.start(p,()=>{m.current=!1,b.current?.()})):(m.current=!1,f.clear())},[f,y,u,p]),(0,M.jsx)("span",{className:v,style:A,children:(0,M.jsx)("span",{className:x})})};const x=(0,n(332).A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]);var k=n(5977);const R={},w=[],B=()=>{};function D(e,t){const n=new Set(t),o=new Map;let i=[];for(const s of e)n.has(s)?i.length>0&&(o.set(s,i),i=[]):i.push(s);const r=[];for(const s of t){const e=o.get(s);e&&r.push(...e),r.push(s)}return r.push(...i),r}const T=y.i7`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,P=y.i7`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,V=y.i7`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;const S=(0,a.A)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),$=(0,a.A)(A,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${x.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${x.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${x.childLeaving} {
    opacity: 0;
  }

  & .${x.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme:e})=>function(e){if("always"===e.motion.reducedMotion)return null;const t=y.AH`
    &.${x.rippleVisible} {
      animation-name: ${T};
      animation-duration: ${550}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${x.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${x.childLeaving} {
      animation-name: ${P};
      animation-duration: ${550}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${x.childPulsate} {
      animation-name: ${V};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;return"system"===e.motion.reducedMotion?y.AH`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    `:t}(e)}
`,I=o.forwardRef(function(e,t){const n=(0,u.b)({props:e,name:"MuiTouchRipple"}),r=(0,v.A)(),s=(0,k.A)(r.motion.reducedMotion,!1),{center:a=!1,classes:l=R,className:c,...d}=n,[h,f]=o.useState({items:w,order:w}),m=h.items,y=o.useRef(0),A=o.useRef(null),T=o.useRef(!1);(0,b.A)(()=>(T.current=!0,()=>{T.current=!1})),o.useEffect(()=>{A.current&&(A.current(),A.current=null)},[m]);const P=o.useRef(!1),V=(0,g.A)(),I=o.useRef(null),C=o.useRef(null),K=(0,p.A)(e=>{T.current&&f(t=>{const n=t.items.filter(t=>t.key!==e),o=D(t.order.filter(t=>t!==e),n.filter(e=>!e.exiting).map(e=>e.key));return{items:n,order:o}})}),N=(0,p.A)(e=>{const{pulsate:t,rippleX:n,rippleY:o,rippleSize:i,cb:r}=e,s=y.current;y.current+=1,f(e=>{const r=[...e.items,{key:s,pulsate:t,rippleX:n,rippleY:o,rippleSize:i,exiting:!1}];return{items:r,order:D(e.order,r.filter(e=>!e.exiting).map(e=>e.key))}}),A.current=r}),E=(0,p.A)((e=R,t=R,n=B)=>{const{pulsate:o=!1,center:i=a||t.pulsate,fakeElement:r=!1}=t;if("mousedown"===e?.type&&P.current)return void(P.current=!1);"touchstart"===e?.type&&(P.current=!0);const s=r?null:C.current,{rippleX:l,rippleY:u,rippleSize:c}=function({event:e,element:t,center:n}){const o=t?t.getBoundingClientRect():{width:0,height:0,left:0,top:0};let i,r,s;if(n||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)i=Math.round(o.width/2),r=Math.round(o.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;i=Math.round(t-o.left),r=Math.round(n-o.top)}if(n)s=Math.sqrt((2*o.width**2+o.height**2)/3),s%2===0&&(s+=1);else{const e=2*Math.max(Math.abs((t?t.clientWidth:0)-i),i)+2,n=2*Math.max(Math.abs((t?t.clientHeight:0)-r),r)+2;s=Math.sqrt(e**2+n**2)}return{rippleX:i,rippleY:r,rippleSize:s}}({event:e,element:s,center:i});e?.touches?null===I.current&&(I.current=()=>{N({pulsate:o,rippleX:l,rippleY:u,rippleSize:c,cb:n})},V.start(80,()=>{I.current&&(I.current(),I.current=null)})):N({pulsate:o,rippleX:l,rippleY:u,rippleSize:c,cb:n})}),L=(0,p.A)(()=>{E(R,{pulsate:!0})}),z=(0,p.A)((e,t)=>{if(V.clear(),"touchend"===e?.type&&I.current)return I.current(),I.current=null,void V.start(0,()=>{z(e,t)});I.current=null,f(e=>{const t=e.items.findIndex(e=>!e.exiting);if(-1===t)return e;const n=e.items.slice();return n[t]={...n[t],exiting:!0},{items:n,order:D(e.order,n.filter(e=>!e.exiting).map(e=>e.key))}}),A.current=t});o.useImperativeHandle(t,()=>({pulsate:L,start:E,stop:z}),[L,E,z]);const X=new Map(m.map(e=>[e.key,e])),F=h.order.map(e=>X.get(e)).filter(Boolean);return(0,M.jsx)(S,{className:(0,i.A)(x.root,l.root,c),ref:C,...d,children:F.map(e=>(0,M.jsx)($,{classes:{ripple:(0,i.A)(l.ripple,x.ripple),rippleVisible:(0,i.A)(l.rippleVisible,x.rippleVisible),ripplePulsate:(0,i.A)(l.ripplePulsate,x.ripplePulsate),child:(0,i.A)(l.child,x.child),childLeaving:(0,i.A)(l.childLeaving,x.childLeaving),childPulsate:(0,i.A)(l.childPulsate,x.childPulsate)},timeout:s.shouldReduceMotion?0:550,pulsate:e.pulsate,rippleX:e.rippleX,rippleY:e.rippleY,rippleSize:e.rippleSize,in:!e.exiting,onExited:()=>K(e.key)},e.key))})});var C=n(250),K=n(8608);const N=(0,a.A)("button",{name:"MuiButtonBase",slot:"Root"})((0,l.A)(({theme:e})=>({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${C.A.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"},variants:[{props:{internalDisabledThemeFocusVisible:!1},style:e.focusVisible&&{...K.Jc,[`&.${C.A.focusVisible}`]:e.focusVisible}}]}))),E=o.forwardRef(function(e,t){const n=(0,u.b)({props:e,name:"MuiButtonBase"}),{action:a,centerRipple:l=!1,children:d,className:f,component:b="button",disabled:g=!1,disableRipple:y=!1,disableTouchRipple:v=!1,focusRipple:A=!1,focusVisibleClassName:x,focusableWhenDisabled:k,suppressFocusVisible:R=!1,internalNativeButton:w,internalDisabledThemeFocusVisible:B=!1,LinkComponent:D="a",nativeButton:T,onBlur:P,onClick:V,onContextMenu:S,onDragLeave:$,onFocus:K,onFocusVisible:E,onKeyDown:z,onKeyUp:X,onMouseDown:F,onMouseLeave:U,onMouseUp:Y,onTouchEnd:j,onTouchMove:W,onTouchStart:H,tabIndex:O=0,TouchRippleProps:q,touchRippleRef:J,type:G,...Q}=n,Z=Boolean(Q.href||Q.to),_=Boolean(Q.formAction);let ee=b;"button"===ee&&Z&&(ee=D);const te="string"===typeof ee?"button"===ee:w??!1,ne=T??te,oe=m.use(),ie=(0,c.A)(oe.ref,J),[re,se]=o.useState(!1);(g||R)&&re&&se(!1);const ae=(0,p.A)(e=>{A&&!e.repeat&&re&&" "===e.key&&oe.stop(e,()=>{oe.start(e)})}),le=(0,p.A)(e=>{A&&" "===e.key&&re&&!e.defaultPrevented&&oe.stop(e,()=>{oe.pulsate(e)})}),{getButtonProps:ue,rootRef:ce}=h({nativeButton:ne,nativeButtonProp:T,internalNativeButton:te,allowInferredHostMismatch:Z||"string"===typeof ee,disabled:g,type:G,hasFormAction:_,tabIndex:O,onBeforeKeyDown:ae,onBeforeKeyUp:le}),{onClick:pe,onKeyDown:de,onKeyUp:he,...fe}=ue({onClick:V,onKeyDown:z,onKeyUp:X});o.useImperativeHandle(a,()=>({focusVisible:()=>{se(!0),ce.current.focus()}}),[ce]);const me=oe.shouldMount&&!y&&!g;o.useEffect(()=>{re&&A&&!y&&oe.pulsate()},[y,A,re,oe]);const be=L(oe,"start",F,v),ge=L(oe,"stop",S,v),ye=L(oe,"stop",$,v),ve=L(oe,"stop",Y,v),Me=L(oe,"stop",e=>{re&&e.preventDefault(),U&&U(e)},v),Ae=L(oe,"start",H,v),xe=L(oe,"stop",j,v),ke=L(oe,"stop",W,v),Re=L(oe,"stop",e=>{s(e.target)||se(!1),P&&P(e)},!1),we=(0,p.A)(e=>{ce.current||(ce.current=e.currentTarget),!R&&s(e.target)&&(se(!0),E&&E(e)),K&&K(e)}),Be={};Z&&(Be.tabIndex=g?-1:O,g&&(Be["aria-disabled"]=g),Be.type=G);const De=(0,c.A)(t,ce),Te={...n,centerRipple:l,component:b,disabled:g,disableRipple:y,disableTouchRipple:v,focusRipple:A,suppressFocusVisible:R,tabIndex:O,focusVisible:re,internalDisabledThemeFocusVisible:B},Pe=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:o,suppressFocusVisible:i,classes:s}=e,a={root:["root",t&&"disabled",n&&!i&&"focusVisible"]},l=(0,r.A)(a,C.W,s);return n&&!i&&o&&(l.root+=` ${o}`),l})(Te);return(0,M.jsxs)(N,{as:ee,className:(0,i.A)(Pe.root,f),ownerState:Te,onBlur:Re,onClick:pe,onContextMenu:ge,onFocus:we,onKeyDown:de,onKeyUp:he,onMouseDown:be,onMouseLeave:Me,onMouseUp:ve,onDragLeave:ye,onTouchEnd:xe,onTouchMove:ke,onTouchStart:Ae,ref:De,...Z?Be:fe,...Q,children:[d,me?(0,M.jsx)(I,{ref:ie,center:l,...q}):null]})});function L(e,t,n,o=!1){return(0,p.A)(i=>(n&&n(i),o||e[t](i),!0))}const z=E},250(e,t,n){n.d(t,{W:()=>r});var o=n(332),i=n(2991);function r(e){return(0,i.Ay)("MuiButtonBase",e)}const s=(0,o.A)("MuiButtonBase",["root","disabled","focusVisible"]);n.d(t,["A",0,s])}}]);
//# sourceMappingURL=763.09dc06d1.chunk.js.map