import{r as c,j as A}from"./index-CwlP_Vb6.js";import{u as B}from"./useTheme-DOG2b9s6.js";import{g as D,T as G,r as H,a as u}from"./utils-DKEapR5W.js";import{u as J}from"./TransitionGroupContext-Cn_vegxN.js";const K={entering:{opacity:1},entered:{opacity:1}},V=c.forwardRef(function(x,y){const e=B(),h={enter:e.transitions.duration.enteringScreen,exit:e.transitions.duration.leavingScreen},{addEndListener:l,appear:g=!0,children:s,easing:E,in:f,onEnter:p,onEntered:R,onEntering:T,onExit:m,onExited:v,onExiting:w,style:a,timeout:d=h,TransitionComponent:F=G,...P}=x,r=c.useRef(null),j=J(r,D(s),y),i=t=>n=>{if(t){const o=r.current;n===void 0?t(o):t(o,n)}},L=i(T),k=i((t,n)=>{H(t);const o=u({style:a,timeout:d,easing:E},{mode:"enter"});t.style.webkitTransition=e.transitions.create("opacity",o),t.style.transition=e.transitions.create("opacity",o),p&&p(t,n)}),C=i(R),S=i(w),b=i(t=>{const n=u({style:a,timeout:d,easing:E},{mode:"exit"});t.style.webkitTransition=e.transitions.create("opacity",n),t.style.transition=e.transitions.create("opacity",n),m&&m(t)}),z=i(v),q=t=>{l&&l(r.current,t)};return A.jsx(F,{appear:g,in:f,nodeRef:r,onEnter:k,onEntered:C,onEntering:L,onExit:b,onExited:z,onExiting:S,addEndListener:q,timeout:d,...P,children:(t,n)=>c.cloneElement(s,{style:{opacity:0,visibility:t==="exited"&&!f?"hidden":void 0,...K[t],...a,...s.props.style},ref:j,...n})})});export{V as F};
