import{l as m,n as y,s as x,m as g,r as b,e as w,j as C,f as R,i as u,ac as c,h}from"./index-B6mmHA4u.js";import{u as $}from"./useTheme-CzgnG2xl.js";function k(e){return y("MuiPaper",e)}const S=m("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]),q=e=>{const{square:a,elevation:o,variant:r,classes:t}=e,n={root:["root",r,!a&&"rounded",r==="elevation"&&`elevation${o}`]};return h(n,k,t)},M=x("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(g(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow"),variants:[{props:({ownerState:a})=>!a.square,style:{borderRadius:e.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(e.vars||e).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),E=b.forwardRef(function(a,o){var d;const r=w({props:a,name:"MuiPaper"}),t=$(),{className:n,component:i="div",elevation:s=1,square:f=!1,variant:l="elevation",...v}=r,p={...r,component:i,elevation:s,square:f,variant:l},P=q(p);return C.jsx(M,{as:i,ownerState:p,className:R(P.root,n),ref:o,...v,style:{...l==="elevation"&&{"--Paper-shadow":(t.vars||t).shadows[s],...t.vars&&{"--Paper-overlay":(d=t.vars.overlays)==null?void 0:d[s]},...!t.vars&&t.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${u("#fff",c(s))}, ${u("#fff",c(s))})`}},...v.style}})});export{E as P,S as p};
