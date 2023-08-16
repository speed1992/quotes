"use strict";(self.webpackChunkquotes=self.webpackChunkquotes||[]).push([[637],{637:function(e,n,t){t.d(n,{Z:function(){return le}});var i,r=t(9439),o=t(4942),u=t(7462),a=t(3366),l=t(2791),c=t(3733),s=t(4419),p=t(4923),d=t(551),f=t(2071),h=t(7054).Z,v=!0,m=!1,b={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function g(e){e.metaKey||e.altKey||e.ctrlKey||(v=!0)}function y(){v=!1}function R(){"hidden"===this.visibilityState&&m&&(v=!0)}function x(e){var n=e.target;try{return n.matches(":focus-visible")}catch(t){}return v||function(e){var n=e.type,t=e.tagName;return!("INPUT"!==t||!b[n]||e.readOnly)||"TEXTAREA"===t&&!e.readOnly||!!e.isContentEditable}(n)}var E=function(){var e=l.useCallback((function(e){var n;null!=e&&((n=e.ownerDocument).addEventListener("keydown",g,!0),n.addEventListener("mousedown",y,!0),n.addEventListener("pointerdown",y,!0),n.addEventListener("touchstart",y,!0),n.addEventListener("visibilitychange",R,!0))}),[]),n=l.useRef(!1);return{isFocusVisibleRef:n,onFocus:function(e){return!!x(e)&&(n.current=!0,!0)},onBlur:function(){return!!n.current&&(m=!0,window.clearTimeout(i),i=window.setTimeout((function(){m=!1}),100),n.current=!1,!0)},ref:e}},Z=t(3433);function M(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var T=t(7326),w=t(4578),k=t(5545);function C(e,n){var t=Object.create(null);return e&&l.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,l.isValidElement)(e)?n(e):e}(e)})),t}function P(e,n,t){return null!=t[n]?t[n]:e.props[n]}function V(e,n,t){var i=C(e.children),r=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var i,r=Object.create(null),o=[];for(var u in e)u in n?o.length&&(r[u]=o,o=[]):o.push(u);var a={};for(var l in n){if(r[l])for(i=0;i<r[l].length;i++){var c=r[l][i];a[r[l][i]]=t(c)}a[l]=t(l)}for(i=0;i<o.length;i++)a[o[i]]=t(o[i]);return a}(n,i);return Object.keys(r).forEach((function(o){var u=r[o];if((0,l.isValidElement)(u)){var a=o in n,c=o in i,s=n[o],p=(0,l.isValidElement)(s)&&!s.props.in;!c||a&&!p?c||!a||p?c&&a&&(0,l.isValidElement)(s)&&(r[o]=(0,l.cloneElement)(u,{onExited:t.bind(null,u),in:s.props.in,exit:P(u,"exit",e),enter:P(u,"enter",e)})):r[o]=(0,l.cloneElement)(u,{in:!1}):r[o]=(0,l.cloneElement)(u,{onExited:t.bind(null,u),in:!0,exit:P(u,"exit",e),enter:P(u,"enter",e)})}})),r}var S=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},L=function(e){function n(n,t){var i,r=(i=e.call(this,n,t)||this).handleExited.bind((0,T.Z)(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}(0,w.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,i,r=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,i=o,C(t.children,(function(e){return(0,l.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:P(e,"appear",t),enter:P(e,"enter",t),exit:P(e,"exit",t)})}))):V(e,r,o),firstRender:!1}},t.handleExited=function(e,n){var t=C(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,u.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,i=(0,a.Z)(e,["component","childFactory"]),r=this.state.contextValue,o=S(this.state.children).map(t);return delete i.appear,delete i.enter,delete i.exit,null===n?l.createElement(k.Z.Provider,{value:r},o):l.createElement(k.Z.Provider,{value:r},l.createElement(n,i,o))},n}(l.Component);L.propTypes={},L.defaultProps={component:"div",childFactory:function(e){return e}};var j=L,D=t(2554),F=t(184);var B=function(e){var n=e.className,t=e.classes,i=e.pulsate,o=void 0!==i&&i,u=e.rippleX,a=e.rippleY,s=e.rippleSize,p=e.in,d=e.onExited,f=e.timeout,h=l.useState(!1),v=(0,r.Z)(h,2),m=v[0],b=v[1],g=(0,c.Z)(n,t.ripple,t.rippleVisible,o&&t.ripplePulsate),y={width:s,height:s,top:-s/2+a,left:-s/2+u},R=(0,c.Z)(t.child,m&&t.childLeaving,o&&t.childPulsate);return p||m||b(!0),l.useEffect((function(){if(!p&&null!=d){var e=setTimeout(d,f);return function(){clearTimeout(e)}}}),[d,p,f]),(0,F.jsx)("span",{className:g,style:y,children:(0,F.jsx)("span",{className:R})})},N=t(5878);var O,I,z,K,X,U,A,Y,q=(0,N.Z)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),H=["center","classes","className"],W=(0,D.F4)(X||(X=O||(O=M(["\n  0% {\n    transform: scale(0);\n    opacity: 0.1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0.3;\n  }\n"])))),G=(0,D.F4)(U||(U=I||(I=M(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"])))),J=(0,D.F4)(A||(A=z||(z=M(["\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.92);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n"])))),Q=(0,p.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),$=(0,p.ZP)(B,{name:"MuiTouchRipple",slot:"Ripple"})(Y||(Y=K||(K=M(["\n  opacity: 0;\n  position: absolute;\n\n  &."," {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  &."," {\n    animation-duration: ","ms;\n  }\n\n  & ."," {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & ."," {\n    opacity: 0;\n    animation-name: ",";\n    animation-duration: ","ms;\n    animation-timing-function: ",";\n  }\n\n  & ."," {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: ",";\n    animation-duration: 2500ms;\n    animation-timing-function: ",";\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n"]))),q.rippleVisible,W,550,(function(e){return e.theme.transitions.easing.easeInOut}),q.ripplePulsate,(function(e){return e.theme.transitions.duration.shorter}),q.child,q.childLeaving,G,550,(function(e){return e.theme.transitions.easing.easeInOut}),q.childPulsate,J,(function(e){return e.theme.transitions.easing.easeInOut})),_=l.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiTouchRipple"}),i=t.center,o=void 0!==i&&i,s=t.classes,p=void 0===s?{}:s,f=t.className,h=(0,a.Z)(t,H),v=l.useState([]),m=(0,r.Z)(v,2),b=m[0],g=m[1],y=l.useRef(0),R=l.useRef(null);l.useEffect((function(){R.current&&(R.current(),R.current=null)}),[b]);var x=l.useRef(!1),E=l.useRef(0),M=l.useRef(null),T=l.useRef(null);l.useEffect((function(){return function(){E.current&&clearTimeout(E.current)}}),[]);var w=l.useCallback((function(e){var n=e.pulsate,t=e.rippleX,i=e.rippleY,r=e.rippleSize,o=e.cb;g((function(e){return[].concat((0,Z.Z)(e),[(0,F.jsx)($,{classes:{ripple:(0,c.Z)(p.ripple,q.ripple),rippleVisible:(0,c.Z)(p.rippleVisible,q.rippleVisible),ripplePulsate:(0,c.Z)(p.ripplePulsate,q.ripplePulsate),child:(0,c.Z)(p.child,q.child),childLeaving:(0,c.Z)(p.childLeaving,q.childLeaving),childPulsate:(0,c.Z)(p.childPulsate,q.childPulsate)},timeout:550,pulsate:n,rippleX:t,rippleY:i,rippleSize:r},y.current)])})),y.current+=1,R.current=o}),[p]),k=l.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},i=n.pulsate,r=void 0!==i&&i,u=n.center,a=void 0===u?o||n.pulsate:u,l=n.fakeElement,c=void 0!==l&&l;if("mousedown"===(null==e?void 0:e.type)&&x.current)x.current=!1;else{"touchstart"===(null==e?void 0:e.type)&&(x.current=!0);var s,p,d,f=c?null:T.current,h=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(a||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)s=Math.round(h.width/2),p=Math.round(h.height/2);else{var v=e.touches&&e.touches.length>0?e.touches[0]:e,m=v.clientX,b=v.clientY;s=Math.round(m-h.left),p=Math.round(b-h.top)}if(a)(d=Math.sqrt((2*Math.pow(h.width,2)+Math.pow(h.height,2))/3))%2===0&&(d+=1);else{var g=2*Math.max(Math.abs((f?f.clientWidth:0)-s),s)+2,y=2*Math.max(Math.abs((f?f.clientHeight:0)-p),p)+2;d=Math.sqrt(Math.pow(g,2)+Math.pow(y,2))}null!=e&&e.touches?null===M.current&&(M.current=function(){w({pulsate:r,rippleX:s,rippleY:p,rippleSize:d,cb:t})},E.current=setTimeout((function(){M.current&&(M.current(),M.current=null)}),80)):w({pulsate:r,rippleX:s,rippleY:p,rippleSize:d,cb:t})}}),[o,w]),C=l.useCallback((function(){k({},{pulsate:!0})}),[k]),P=l.useCallback((function(e,n){if(clearTimeout(E.current),"touchend"===(null==e?void 0:e.type)&&M.current)return M.current(),M.current=null,void(E.current=setTimeout((function(){P(e,n)})));M.current=null,g((function(e){return e.length>0?e.slice(1):e})),R.current=n}),[]);return l.useImperativeHandle(n,(function(){return{pulsate:C,start:k,stop:P}}),[C,k,P]),(0,F.jsx)(Q,(0,u.Z)({className:(0,c.Z)(q.root,p.root,f),ref:T},h,{children:(0,F.jsx)(j,{component:null,exit:!0,children:b})}))})),ee=_,ne=t(7225);function te(e){return(0,ne.Z)("MuiButtonBase",e)}var ie,re=(0,N.Z)("MuiButtonBase",["root","disabled","focusVisible"]),oe=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ue=(0,p.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:function(e,n){return n.root}})((ie={display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"}},(0,o.Z)(ie,"&.".concat(re.disabled),{pointerEvents:"none",cursor:"default"}),(0,o.Z)(ie,"@media print",{colorAdjust:"exact"}),ie)),ae=l.forwardRef((function(e,n){var t=(0,d.Z)({props:e,name:"MuiButtonBase"}),i=t.action,o=t.centerRipple,p=void 0!==o&&o,v=t.children,m=t.className,b=t.component,g=void 0===b?"button":b,y=t.disabled,R=void 0!==y&&y,x=t.disableRipple,Z=void 0!==x&&x,M=t.disableTouchRipple,T=void 0!==M&&M,w=t.focusRipple,k=void 0!==w&&w,C=t.LinkComponent,P=void 0===C?"a":C,V=t.onBlur,S=t.onClick,L=t.onContextMenu,j=t.onDragLeave,D=t.onFocus,B=t.onFocusVisible,N=t.onKeyDown,O=t.onKeyUp,I=t.onMouseDown,z=t.onMouseLeave,K=t.onMouseUp,X=t.onTouchEnd,U=t.onTouchMove,A=t.onTouchStart,Y=t.tabIndex,q=void 0===Y?0:Y,H=t.TouchRippleProps,W=t.touchRippleRef,G=t.type,J=(0,a.Z)(t,oe),Q=l.useRef(null),$=l.useRef(null),_=(0,f.Z)($,W),ne=E(),ie=ne.isFocusVisibleRef,re=ne.onFocus,ae=ne.onBlur,le=ne.ref,ce=l.useState(!1),se=(0,r.Z)(ce,2),pe=se[0],de=se[1];R&&pe&&de(!1),l.useImperativeHandle(i,(function(){return{focusVisible:function(){de(!0),Q.current.focus()}}}),[]);var fe=l.useState(!1),he=(0,r.Z)(fe,2),ve=he[0],me=he[1];l.useEffect((function(){me(!0)}),[]);var be=ve&&!Z&&!R;function ge(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:T;return h((function(i){return n&&n(i),!t&&$.current&&$.current[e](i),!0}))}l.useEffect((function(){pe&&k&&!Z&&ve&&$.current.pulsate()}),[Z,k,pe,ve]);var ye=ge("start",I),Re=ge("stop",L),xe=ge("stop",j),Ee=ge("stop",K),Ze=ge("stop",(function(e){pe&&e.preventDefault(),z&&z(e)})),Me=ge("start",A),Te=ge("stop",X),we=ge("stop",U),ke=ge("stop",(function(e){ae(e),!1===ie.current&&de(!1),V&&V(e)}),!1),Ce=h((function(e){Q.current||(Q.current=e.currentTarget),re(e),!0===ie.current&&(de(!0),B&&B(e)),D&&D(e)})),Pe=function(){var e=Q.current;return g&&"button"!==g&&!("A"===e.tagName&&e.href)},Ve=l.useRef(!1),Se=h((function(e){k&&!Ve.current&&pe&&$.current&&" "===e.key&&(Ve.current=!0,$.current.stop(e,(function(){$.current.start(e)}))),e.target===e.currentTarget&&Pe()&&" "===e.key&&e.preventDefault(),N&&N(e),e.target===e.currentTarget&&Pe()&&"Enter"===e.key&&!R&&(e.preventDefault(),S&&S(e))})),Le=h((function(e){k&&" "===e.key&&$.current&&pe&&!e.defaultPrevented&&(Ve.current=!1,$.current.stop(e,(function(){$.current.pulsate(e)}))),O&&O(e),S&&e.target===e.currentTarget&&Pe()&&" "===e.key&&!e.defaultPrevented&&S(e)})),je=g;"button"===je&&(J.href||J.to)&&(je=P);var De={};"button"===je?(De.type=void 0===G?"button":G,De.disabled=R):(J.href||J.to||(De.role="button"),R&&(De["aria-disabled"]=R));var Fe=(0,f.Z)(n,le,Q);var Be=(0,u.Z)({},t,{centerRipple:p,component:g,disabled:R,disableRipple:Z,disableTouchRipple:T,focusRipple:k,tabIndex:q,focusVisible:pe}),Ne=function(e){var n=e.disabled,t=e.focusVisible,i=e.focusVisibleClassName,r=e.classes,o={root:["root",n&&"disabled",t&&"focusVisible"]},u=(0,s.Z)(o,te,r);return t&&i&&(u.root+=" ".concat(i)),u}(Be);return(0,F.jsxs)(ue,(0,u.Z)({as:je,className:(0,c.Z)(Ne.root,m),ownerState:Be,onBlur:ke,onClick:S,onContextMenu:Re,onFocus:Ce,onKeyDown:Se,onKeyUp:Le,onMouseDown:ye,onMouseLeave:Ze,onMouseUp:Ee,onDragLeave:xe,onTouchEnd:Te,onTouchMove:we,onTouchStart:Me,ref:Fe,tabIndex:R?-1:q,type:G},De,J,{children:[v,be?(0,F.jsx)(ee,(0,u.Z)({ref:_,center:p},H)):null]}))})),le=ae}}]);
//# sourceMappingURL=637.866e897e.chunk.js.map