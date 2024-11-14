import{n as O,l as L,r as p,s as b,G as T,c as r,m as V,Q as j,e as F,j as g,f as $,h as G,k as U,i as c}from"./index-WlRZvL0H.js";import{B as D}from"./ButtonBase--83mAgTW.js";function H(o){return O("MuiButton",o)}const e=L("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),A=p.createContext({}),Q=p.createContext(void 0),q=o=>{const{color:a,disableElevation:t,fullWidth:n,size:i,variant:s,classes:l}=o,u={root:["root",s,`${s}${r(a)}`,`size${r(i)}`,`${s}Size${r(i)}`,`color${r(a)}`,t&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon",`iconSize${r(i)}`],endIcon:["icon","endIcon",`iconSize${r(i)}`]},x=G(u,H,l);return{...l,...x}},I=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],J=b(D,{shouldForwardProp:o=>T(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.root,a[t.variant],a[`${t.variant}${r(t.color)}`],a[`size${r(t.size)}`],a[`${t.variant}Size${r(t.size)}`],t.color==="inherit"&&a.colorInherit,t.disableElevation&&a.disableElevation,t.fullWidth&&a.fullWidth]}})(V(({theme:o})=>{const a=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],t=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return{...o.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":{textDecoration:"none"},[`&.${e.disabled}`]:{color:(o.vars||o).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(o.vars||o).shadows[2],"&:hover":{boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2]}},"&:active":{boxShadow:(o.vars||o).shadows[8]},[`&.${e.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},[`&.${e.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",[`&.${e.disabled}`]:{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(o.palette).filter(U()).map(([n])=>({props:{color:n},style:{"--variant-textColor":(o.vars||o).palette[n].main,"--variant-outlinedColor":(o.vars||o).palette[n].main,"--variant-outlinedBorder":o.vars?`rgba(${o.vars.palette[n].mainChannel} / 0.5)`:c(o.palette[n].main,.5),"--variant-containedColor":(o.vars||o).palette[n].contrastText,"--variant-containedBg":(o.vars||o).palette[n].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(o.vars||o).palette[n].dark,"--variant-textBg":o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:c(o.palette[n].main,o.palette.action.hoverOpacity),"--variant-outlinedBorder":(o.vars||o).palette[n].main,"--variant-outlinedBg":o.vars?`rgba(${o.vars.palette[n].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:c(o.palette[n].main,o.palette.action.hoverOpacity)}}}})),{props:{color:"inherit"},style:{color:"inherit",borderColor:"currentColor","--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedBg:a,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":o.vars?o.vars.palette.Button.inheritContainedHoverBg:t,"--variant-textBg":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:c(o.palette.text.primary,o.palette.action.hoverOpacity),"--variant-outlinedBg":o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:c(o.palette.text.primary,o.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:o.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:o.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:o.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${e.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${e.disabled}`]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}})),K=b("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.startIcon,a[`iconSize${r(t.size)}`]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...I]}),X=b("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:t}=o;return[a.endIcon,a[`iconSize${r(t.size)}`]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...I]}),_=p.forwardRef(function(a,t){const n=p.useContext(A),i=p.useContext(Q),s=j(n,a),l=F({props:s,name:"MuiButton"}),{children:u,color:x="primary",component:y="button",className:w,disabled:S=!1,disableElevation:R=!1,disableFocusRipple:z=!1,endIcon:f,focusVisibleClassName:h,fullWidth:E=!1,size:P="medium",startIcon:C,type:B,variant:W="text",...k}=l,v={...l,color:x,component:y,disabled:S,disableElevation:R,disableFocusRipple:z,fullWidth:E,size:P,type:B,variant:W},d=q(v),M=C&&g.jsx(K,{className:d.startIcon,ownerState:v,children:C}),m=f&&g.jsx(X,{className:d.endIcon,ownerState:v,children:f}),N=i||"";return g.jsxs(J,{ownerState:v,className:$(n.className,d.root,w,N),component:y,disabled:S,focusRipple:!z,focusVisibleClassName:$(d.focusVisible,h),ref:t,type:B,...k,classes:d,children:[M,u,m]})});export{_ as B};
