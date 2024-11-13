import{r as c,u as R,j as f,b as d,M as P,c as r,N as q}from"./index-BhbbloSs.js";import{a as h,g as m,s as z,m as M,c as B,b as E,r as F}from"./memoTheme-CxUk2grW.js";import{u as G}from"./useTheme-Dvw3qUtv.js";import{B as A,c as D}from"./createSimplePaletteValueFilter-CwGnd2rB.js";function H(a){return m("MuiPaper",a)}h("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const J=a=>{const{square:o,elevation:t,variant:e,classes:n}=a,i={root:["root",e,!o&&"rounded",e==="elevation"&&`elevation${t}`]};return E(i,H,n)},K=z("div",{name:"MuiPaper",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.root,o[t.variant],!t.square&&o.rounded,t.variant==="elevation"&&o[`elevation${t.elevation}`]]}})(M(({theme:a})=>({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow"),variants:[{props:({ownerState:o})=>!o.square,style:{borderRadius:a.shape.borderRadius}},{props:{variant:"outlined"},style:{border:`1px solid ${(a.vars||a).palette.divider}`}},{props:{variant:"elevation"},style:{boxShadow:"var(--Paper-shadow)",backgroundImage:"var(--Paper-overlay)"}}]}))),ia=c.forwardRef(function(o,t){var g;const e=R({props:o,name:"MuiPaper"}),n=G(),{className:i,component:l="div",elevation:s=1,square:v=!1,variant:u="elevation",...y}=e,x={...e,component:l,elevation:s,square:v,variant:u},C=J(x);return f.jsx(K,{as:l,ownerState:x,className:B(C.root,i),ref:t,...y,style:{...u==="elevation"&&{"--Paper-shadow":(n.vars||n).shadows[s],...n.vars&&{"--Paper-overlay":(g=n.vars.overlays)==null?void 0:g[s]},...!n.vars&&n.palette.mode==="dark"&&{"--Paper-overlay":`linear-gradient(${d("#fff",P(s))}, ${d("#fff",P(s))})`}},...y.style}})});function Q(a){return m("MuiButton",a)}const p=h("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),X=c.createContext({}),Y=c.createContext(void 0),Z=a=>{const{color:o,disableElevation:t,fullWidth:e,size:n,variant:i,classes:l}=a,s={root:["root",i,`${i}${r(o)}`,`size${r(n)}`,`${i}Size${r(n)}`,`color${r(o)}`,t&&"disableElevation",e&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${r(n)}`],endIcon:["icon","endIcon",`iconSize${r(n)}`]},v=E(s,Q,l);return{...l,...v}},k=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],_=z(A,{shouldForwardProp:a=>F(a)||a==="classes",name:"MuiButton",slot:"Root",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.root,o[t.variant],o[`${t.variant}${r(t.color)}`],o[`size${r(t.size)}`],o[`${t.variant}Size${r(t.size)}`],t.color==="inherit"&&o.colorInherit,t.disableElevation&&o.disableElevation,t.fullWidth&&o.fullWidth]}})(M(({theme:a})=>{const o=a.palette.mode==="light"?a.palette.grey[300]:a.palette.grey[800],t=a.palette.mode==="light"?a.palette.grey.A100:a.palette.grey[700];return{...a.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(a.vars||a).shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${p.disabled}`]:{color:(a.vars||a).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(a.vars||a).shadows[2],"&:hover":{boxShadow:(a.vars||a).shadows[4],"@media (hover: none)":{boxShadow:(a.vars||a).shadows[2]}},"&:active":{boxShadow:(a.vars||a).shadows[8]},[`&.${p.focusVisible}`]:{boxShadow:(a.vars||a).shadows[6]},[`&.${p.disabled}`]:{color:(a.vars||a).palette.action.disabled,boxShadow:(a.vars||a).shadows[0],backgroundColor:(a.vars||a).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${p.disabled}`]:{border:`1px solid ${(a.vars||a).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(a.palette).filter(D()).map(([e])=>({props:{color:e},style:{"--variant-textColor":(a.vars||a).palette[e].main,"--variant-outlinedColor":(a.vars||a).palette[e].main,"--variant-outlinedBorder":a.vars?`rgba(${a.vars.palette[e].mainChannel} / 0.5)`:d(a.palette[e].main,.5),"--variant-containedColor":(a.vars||a).palette[e].contrastText,"--variant-containedBg":(a.vars||a).palette[e].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(a.vars||a).palette[e].dark,"--variant-textBg":a.vars?`rgba(${a.vars.palette[e].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:d(a.palette[e].main,a.palette.action.hoverOpacity),"--variant-outlinedBorder":(a.vars||a).palette[e].main,"--variant-outlinedBg":a.vars?`rgba(${a.vars.palette[e].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:d(a.palette[e].main,a.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":a.vars?a.vars.palette.Button.inheritContainedBg:o,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":a.vars?a.vars.palette.Button.inheritContainedHoverBg:t,"--variant-textBg":a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:d(a.palette.text.primary,a.palette.action.hoverOpacity),"--variant-outlinedBg":a.vars?`rgba(${a.vars.palette.text.primaryChannel} / ${a.vars.palette.action.hoverOpacity})`:d(a.palette.text.primary,a.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:a.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:a.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:a.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:a.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:a.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:a.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${p.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${p.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),aa=z("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.startIcon,o[`iconSize${r(t.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...k]}),oa=z("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(a,o)=>{const{ownerState:t}=a;return[o.endIcon,o[`iconSize${r(t.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...k]}),sa=c.forwardRef(function(o,t){const e=c.useContext(X),n=c.useContext(Y),i=q(e,o),l=R({props:i,name:"MuiButton"}),{children:s,color:v="primary",component:u="button",className:y,disabled:x=!1,disableElevation:C=!1,disableFocusRipple:g=!1,endIcon:$,focusVisibleClassName:N,fullWidth:W=!1,size:O="medium",startIcon:w,type:I,variant:T="text",...L}=l,S={...l,color:v,component:u,disabled:x,disableElevation:C,disableFocusRipple:g,fullWidth:W,size:O,type:I,variant:T},b=Z(S),j=w&&f.jsx(aa,{className:b.startIcon,ownerState:S,children:w}),V=$&&f.jsx(oa,{className:b.endIcon,ownerState:S,children:$}),U=n||"";return f.jsxs(_,{ownerState:S,className:B(e.className,b.root,y,U),component:u,disabled:x,focusRipple:!g,focusVisibleClassName:B(b.focusVisible,N),ref:t,type:I,...L,classes:b,children:[j,s,V]})});export{sa as B,ia as P};