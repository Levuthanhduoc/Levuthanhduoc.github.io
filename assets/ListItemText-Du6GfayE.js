import{l as w,n as G,s as M,r as c,e as $,j as a,f as P,h as B,m as J}from"./index-D5pX6302.js";import{i as K,a as E}from"./InputBase-DTykFqmy.js";import{L as b,b as R,g as O}from"./listItemTextClasses-B1_4AOWS.js";import{u as Q}from"./TransitionGroupContext-z8OabIrq.js";import{t as z,T as A}from"./Typography-CrxpHmPT.js";function X(e){return G("MuiListItem",e)}w("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);function ut(e){return G("MuiListItemButton",e)}const Z=w("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function _(e){return G("MuiListItemSecondaryAction",e)}w("MuiListItemSecondaryAction",["root","disableGutters"]);const tt=e=>{const{disableGutters:t,classes:s}=e;return B({root:["root",t&&"disableGutters"]},_,s)},et=M("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),H=c.forwardRef(function(t,s){const o=$({props:t,name:"MuiListItemSecondaryAction"}),{className:n,...d}=o,r=c.useContext(b),l={...o,disableGutters:r.disableGutters},m=tt(l);return a.jsx(et,{className:P(m.root,n),ownerState:l,ref:s,...d})});H.muiName="ListItemSecondaryAction";const st=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.hasSecondaryAction&&t.secondaryAction]},ot=e=>{const{alignItems:t,classes:s,dense:o,disableGutters:n,disablePadding:d,divider:r,hasSecondaryAction:l}=e;return B({root:["root",o&&"dense",!n&&"gutters",!d&&"padding",r&&"divider",t==="flex-start"&&"alignItemsFlexStart",l&&"secondaryAction"],container:["container"]},X,s)},nt=M("div",{name:"MuiListItem",slot:"Root",overridesResolver:st})(J(({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>!t.disablePadding&&t.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:t})=>!t.disablePadding&&!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>!t.disablePadding&&!!t.secondaryAction,style:{paddingRight:48}},{props:({ownerState:t})=>!!t.secondaryAction,style:{[`& > .${Z.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>t.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:t})=>t.hasSecondaryAction,style:{paddingRight:48}}]}))),rt=M("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),yt=c.forwardRef(function(t,s){const o=$({props:t,name:"MuiListItem"}),{alignItems:n="center",children:d,className:r,component:l,components:m={},componentsProps:u={},ContainerComponent:h="li",ContainerProps:{className:T,...j}={},dense:x=!1,disableGutters:i=!1,disablePadding:p=!1,divider:C=!1,secondaryAction:y,slotProps:V={},slots:W={},...Y}=o,U=c.useContext(b),N=c.useMemo(()=>({dense:x||U.dense||!1,alignItems:n,disableGutters:i}),[n,U.dense,x,i]),q=c.useRef(null),g=c.Children.toArray(d),k=g.length&&K(g[g.length-1],["ListItemSecondaryAction"]),L={...o,alignItems:n,dense:N.dense,disableGutters:i,disablePadding:p,divider:C,hasSecondaryAction:k},F=ot(L),D=Q(q,s),S=W.root||m.Root||nt,I=V.root||u.root||{},v={className:P(F.root,I.className,r),...Y};let f=l||"li";return k?(f=!v.component&&!l?"div":f,h==="li"&&(f==="li"?f="div":v.component==="li"&&(v.component="div")),a.jsx(b.Provider,{value:N,children:a.jsxs(rt,{as:h,className:P(F.container,T),ref:D,ownerState:L,...j,children:[a.jsx(S,{...I,...!E(S)&&{as:f,ownerState:{...L,...I.ownerState}},...v,children:g}),g.pop()]})})):a.jsx(b.Provider,{value:N,children:a.jsxs(S,{...I,as:f,ref:D,...!E(S)&&{ownerState:{...L,...I.ownerState}},...v,children:[g,y&&a.jsx(H,{children:y})]})})}),it=e=>{const{classes:t,inset:s,primary:o,secondary:n,dense:d}=e;return B({root:["root",s&&"inset",d&&"dense",o&&n&&"multiline"],primary:["primary"],secondary:["secondary"]},O,t)},at=M("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[{[`& .${R.primary}`]:t.primary},{[`& .${R.secondary}`]:t.secondary},t.root,s.inset&&t.inset,s.primary&&s.secondary&&t.multiline,s.dense&&t.dense]}})({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4,[`.${z.root}:where(& .${R.primary})`]:{display:"block"},[`.${z.root}:where(& .${R.secondary})`]:{display:"block"},variants:[{props:({ownerState:e})=>e.primary&&e.secondary,style:{marginTop:6,marginBottom:6}},{props:({ownerState:e})=>e.inset,style:{paddingLeft:56}}]}),gt=c.forwardRef(function(t,s){const o=$({props:t,name:"MuiListItemText"}),{children:n,className:d,disableTypography:r=!1,inset:l=!1,primary:m,primaryTypographyProps:u,secondary:h,secondaryTypographyProps:T,...j}=o,{dense:x}=c.useContext(b);let i=m??n,p=h;const C={...o,disableTypography:r,inset:l,primary:!!i,secondary:!!p,dense:x},y=it(C);return i!=null&&i.type!==A&&!r&&(i=a.jsx(A,{variant:x?"body2":"body1",className:y.primary,component:u!=null&&u.variant?void 0:"span",...u,children:i})),p!=null&&p.type!==A&&!r&&(p=a.jsx(A,{variant:"body2",className:y.secondary,color:"textSecondary",...T,children:p})),a.jsxs(at,{className:P(y.root,d),ownerState:C,ref:s,...j,children:[i,p]})});export{yt as L,gt as a,ut as g,Z as l};
