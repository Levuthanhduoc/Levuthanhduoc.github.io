import{r as p,l as H,n as A,s as b,m as B,E as Q,e as D,j as l,f as V,h as I,c as k,F as Y}from"./index-DM2OrA4B.js";import{C as Z}from"./Close-tb_auOrM.js";import{b as tt,a as P}from"./ButtonBase-BE6pjX2P.js";import{e as z,u as nt}from"./useSlotProps-D-mFihm9.js";import{u as et}from"./useTheme-CBnNZ0fp.js";import{C as ot}from"./ClickAwayListener-_drNbBP5.js";import{P as rt}from"./Paper-Dpwb2Z5E.js";import{G as st}from"./Grow-BnheXJkS.js";import{I as at}from"./IconButton-PG1ydqr5.js";import"./TransitionGroupContext-BcqBKjiD.js";import"./utils-90jP_8Zv.js";import"./iconButtonClasses-CLWFGRA4.js";function it(t={}){const{autoHideDuration:n=null,disableWindowBlurListener:s=!1,onClose:e,open:i,resumeHideDuration:u}=t,d=tt();p.useEffect(()=>{if(!i)return;function o(r){r.defaultPrevented||r.key==="Escape"&&(e==null||e(r,"escapeKeyDown"))}return document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[i,e]);const h=P((o,r)=>{e==null||e(o,r)}),f=P(o=>{!e||o==null||d.start(o,()=>{h(null,"timeout")})});p.useEffect(()=>(i&&f(n),d.clear),[i,n,f,d]);const m=o=>{e==null||e(o,"clickaway")},c=d.clear,g=p.useCallback(()=>{n!=null&&f(u??n*.5)},[n,u,f]),x=o=>r=>{const a=o.onBlur;a==null||a(r),g()},v=o=>r=>{const a=o.onFocus;a==null||a(r),c()},C=o=>r=>{const a=o.onMouseEnter;a==null||a(r),c()},S=o=>r=>{const a=o.onMouseLeave;a==null||a(r),g()};return p.useEffect(()=>{if(!s&&i)return window.addEventListener("focus",g),window.addEventListener("blur",c),()=>{window.removeEventListener("focus",g),window.removeEventListener("blur",c)}},[s,i,g,c]),{getRootProps:(o={})=>{const r={...z(t),...z(o)};return{role:"presentation",...o,...r,onBlur:x(r),onFocus:v(r),onMouseEnter:C(r),onMouseLeave:S(r)}},onClickAway:m}}function ct(t){return A("MuiSnackbarContent",t)}H("MuiSnackbarContent",["root","message","action"]);const lt=t=>{const{classes:n}=t;return I({root:["root"],action:["action"],message:["message"]},ct,n)},ut=b(rt,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(t,n)=>n.root})(B(({theme:t})=>{const n=t.palette.mode==="light"?.8:.98,s=Q(t.palette.background.default,n);return{...t.typography.body2,color:t.vars?t.vars.palette.SnackbarContent.color:t.palette.getContrastText(s),backgroundColor:t.vars?t.vars.palette.SnackbarContent.bg:s,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(t.vars||t).shape.borderRadius,flexGrow:1,[t.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),pt=b("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(t,n)=>n.message})({padding:"8px 0"}),dt=b("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(t,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),ft=p.forwardRef(function(n,s){const e=D({props:n,name:"MuiSnackbarContent"}),{action:i,className:u,message:d,role:h="alert",...f}=e,m=e,c=lt(m);return l.jsxs(ut,{role:h,square:!0,elevation:6,className:V(c.root,u),ownerState:m,ref:s,...f,children:[l.jsx(pt,{className:c.message,ownerState:m,children:d}),i?l.jsx(dt,{className:c.action,ownerState:m,children:i}):null]})});function mt(t){return A("MuiSnackbar",t)}H("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const gt=t=>{const{classes:n,anchorOrigin:s}=t,e={root:["root",`anchorOrigin${k(s.vertical)}${k(s.horizontal)}`]};return I(e,mt,n)},T=b("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:s}=t;return[n.root,n[`anchorOrigin${k(s.anchorOrigin.vertical)}${k(s.anchorOrigin.horizontal)}`]]}})(B(({theme:t})=>({zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:n})=>n.anchorOrigin.vertical==="top",style:{top:8,[t.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:n})=>n.anchorOrigin.vertical!=="top",style:{bottom:8,[t.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:n})=>n.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[t.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:n})=>n.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[t.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:n})=>n.anchorOrigin.horizontal==="center",style:{[t.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),ht=p.forwardRef(function(n,s){const e=D({props:n,name:"MuiSnackbar"}),i=et(),u={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{action:d,anchorOrigin:{vertical:h,horizontal:f}={vertical:"bottom",horizontal:"left"},autoHideDuration:m=null,children:c,className:g,ClickAwayListenerProps:x,ContentProps:v,disableWindowBlurListener:C=!1,message:S,onBlur:N,onClose:o,onFocus:r,onMouseEnter:a,onMouseLeave:kt,open:E,resumeHideDuration:bt,TransitionComponent:O=st,transitionDuration:R=u,TransitionProps:{onEnter:M,onExited:L,...F}={},...U}=e,y={...e,anchorOrigin:{vertical:h,horizontal:f},autoHideDuration:m,disableWindowBlurListener:C,TransitionComponent:O,transitionDuration:R},$=gt(y),{getRootProps:G,onClickAway:W}=it({...y}),[K,j]=p.useState(!0),q=nt({elementType:T,getSlotProps:G,externalForwardedProps:U,ownerState:y,additionalProps:{ref:s},className:[$.root,g]}),X=w=>{j(!0),L&&L(w)},_=(w,J)=>{j(!1),M&&M(w,J)};return!E&&K?null:l.jsx(ot,{onClickAway:W,...x,children:l.jsx(T,{...q,children:l.jsx(O,{appear:!0,in:E,timeout:R,direction:h==="top"?"down":"up",onEnter:_,onExited:X,...F,children:c||l.jsx(ft,{message:S,action:d,...v})})})})});function Pt(){const{snack:t,setSnack:n}=p.useContext(Y),s=(i,u)=>{u!=="clickaway"&&n({...t,isOpen:!1})},e=l.jsx(p.Fragment,{children:l.jsx(at,{size:"small","aria-label":"close",color:"inherit",onClick:s,children:l.jsx(Z,{fontSize:"small"})})});return l.jsx(ht,{open:t.isOpen,autoHideDuration:6e3,onClose:s,message:t.message,action:e})}export{Pt as default};
