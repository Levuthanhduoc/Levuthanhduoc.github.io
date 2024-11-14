import{n as f,l as b,r as c,s as u,c as d,m as B,e as k,j as n,f as m,h as S}from"./index-DM2OrA4B.js";import{u as q}from"./useTheme-CBnNZ0fp.js";import{B as G,c as J}from"./Select-DVoAYFZE.js";import{P as A}from"./Paper-Dpwb2Z5E.js";import{a as Q}from"./Portal-f8K4Lwty.js";import{F as Z}from"./Fade-Dxi0WtAd.js";function _(e){return f("MuiDialog",e)}const C=b("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),oo=c.createContext({}),eo=u(G,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),to=e=>{const{classes:o,scroll:t,maxWidth:a,fullWidth:r,fullScreen:s}=e,i={root:["root"],container:["container",`scroll${d(t)}`],paper:["paper",`paperScroll${d(t)}`,`paperWidth${d(String(a))}`,r&&"paperFullWidth",s&&"paperFullScreen"]};return S(i,_,o)},ao=u(J,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),ro=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.container,o[`scroll${d(t.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),so=u(A,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.paper,o[`scrollPaper${d(t.scroll)}`],o[`paperWidth${d(String(t.maxWidth))}`],t.fullWidth&&o.paperFullWidth,t.fullScreen&&o.paperFullScreen]}})(B(({theme:e})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:o})=>!o.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${C.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(e.breakpoints.values).filter(o=>o!=="xs").map(o=>({props:{maxWidth:o},style:{maxWidth:`${e.breakpoints.values[o]}${e.breakpoints.unit}`,[`&.${C.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[o]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:o})=>o.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:o})=>o.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${C.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),Do=c.forwardRef(function(o,t){const a=k({props:o,name:"MuiDialog"}),r=q(),s={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":i,"aria-labelledby":l,"aria-modal":g=!0,BackdropComponent:T,BackdropProps:j,children:F,className:N,disableEscapeKeyDown:W=!1,fullScreen:U=!1,fullWidth:I=!1,maxWidth:L="sm",onBackdropClick:w,onClick:M,onClose:v,open:$,PaperComponent:Y=A,PaperProps:R={},scroll:E="paper",TransitionComponent:X=Z,transitionDuration:P=s,TransitionProps:z,...H}=a,x={...a,disableEscapeKeyDown:W,fullScreen:U,fullWidth:I,maxWidth:L,scroll:E},h=to(x),D=c.useRef(),O=p=>{D.current=p.target===p.currentTarget},K=p=>{M&&M(p),D.current&&(D.current=null,w&&w(p),v&&v(p,"backdropClick"))},y=Q(l),V=c.useMemo(()=>({titleId:y}),[y]);return n.jsx(ao,{className:m(h.root,N),closeAfterTransition:!0,components:{Backdrop:eo},componentsProps:{backdrop:{transitionDuration:P,as:T,...j}},disableEscapeKeyDown:W,onClose:v,open:$,ref:t,onClick:K,ownerState:x,...H,children:n.jsx(X,{appear:!0,in:$,timeout:P,role:"presentation",...z,children:n.jsx(ro,{className:m(h.container),onMouseDown:O,ownerState:x,children:n.jsx(so,{as:Y,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":y,"aria-modal":g,...R,className:m(h.paper,R.className),ownerState:x,children:n.jsx(oo.Provider,{value:V,children:F})})})})})});function io(e){return f("MuiDialogActions",e)}b("MuiDialogActions",["root","spacing"]);const lo=e=>{const{classes:o,disableSpacing:t}=e;return S({root:["root",!t&&"spacing"]},io,o)},no=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.disableSpacing&&o.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:e})=>!e.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),yo=c.forwardRef(function(o,t){const a=k({props:o,name:"MuiDialogActions"}),{className:r,disableSpacing:s=!1,...i}=a,l={...a,disableSpacing:s},g=lo(l);return n.jsx(no,{className:m(g.root,r),ownerState:l,ref:t,...i})});function po(e){return f("MuiDialogContent",e)}b("MuiDialogContent",["root","dividers"]);function Co(e){return f("MuiDialogTitle",e)}const co=b("MuiDialogTitle",["root"]),uo=e=>{const{classes:o,dividers:t}=e;return S({root:["root",t&&"dividers"]},po,o)},go=u("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.dividers&&o.dividers]}})(B(({theme:e})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:o})=>o.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}},{props:({ownerState:o})=>!o.dividers,style:{[`.${co.root} + &`]:{paddingTop:0}}}]}))),ko=c.forwardRef(function(o,t){const a=k({props:o,name:"MuiDialogContent"}),{className:r,dividers:s=!1,...i}=a,l={...a,dividers:s},g=uo(l);return n.jsx(go,{className:m(g.root,r),ownerState:l,ref:t,...i})});export{yo as D,Do as a,ko as b,oo as c,C as d,Co as g};
