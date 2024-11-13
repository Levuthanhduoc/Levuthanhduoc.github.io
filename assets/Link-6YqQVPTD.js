import{n as S,l as T,a9 as C,i,s as A,c as L,m as F,r as g,e as R,j as M,f as P,h as j,k as U}from"./index-B6mmHA4u.js";import{u as z}from"./useTheme-CzgnG2xl.js";import{T as B}from"./Typography-24q-dl45.js";import{i as k}from"./ButtonBase-CuIIuAh8.js";function N(e){return S("MuiLink",e)}const E=T("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),H=({theme:e,ownerState:r})=>{const t=r.color,o=C(e,`palette.${t}`,!1)||r.color,n=C(e,`palette.${t}Channel`);return"vars"in e&&n?`rgba(${n} / 0.4)`:i(o,.4)},v={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},W=e=>{const{classes:r,component:t,focusVisible:o,underline:n}=e,l={root:["root",`underline${L(n)}`,t==="button"&&"button",o&&"focusVisible"]};return j(l,N,r)},O=A(B,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`underline${L(t.underline)}`],t.component==="button"&&r.button]}})(F(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:r,ownerState:t})=>r==="always"&&t.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(U()).map(([r])=>({props:{underline:"always",color:r},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[r].mainChannel} / 0.4)`:i(e.palette[r].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:i(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:i(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${E.focusVisible}`]:{outline:"auto"}}}]}))),K=g.forwardRef(function(r,t){const o=R({props:r,name:"MuiLink"}),n=z(),{className:l,color:s="primary",component:p="a",onBlur:d,onFocus:y,TypographyClasses:h,underline:b="always",variant:f="inherit",sx:u,...x}=o,[w,m]=g.useState(!1),D=a=>{k(a.target)||m(!1),d&&d(a)},$=a=>{k(a.target)&&m(!0),y&&y(a)},c={...o,color:s,component:p,focusVisible:w,underline:b,variant:f},V=W(c);return M.jsx(O,{color:s,className:P(V.root,l),classes:h,component:p,onBlur:D,onFocus:$,ref:t,ownerState:c,variant:f,...x,sx:[...v[s]===void 0?[{color:s}]:[],...Array.isArray(u)?u:[u]],style:{...x.style,...b==="always"&&s!=="inherit"&&!v[s]&&{"--Link-underlineColor":H({theme:n,ownerState:c})}}})});export{K as L};
