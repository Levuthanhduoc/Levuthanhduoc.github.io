import{l as T,n as C,s as B,c as l,m as S,r as j,e as w,j as W,f as M,ak as P,h as R,k as O}from"./index-WlRZvL0H.js";function U(r){return C("MuiTypography",r)}const N=T("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]),A={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},E=P(),$=r=>{const{align:a,gutterBottom:t,noWrap:e,paragraph:n,variant:i,classes:s}=r,o={root:["root",i,r.align!=="inherit"&&`align${l(a)}`,t&&"gutterBottom",e&&"noWrap",n&&"paragraph"]};return R(o,U,s)},k=B("span",{name:"MuiTypography",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:t}=r;return[a.root,t.variant&&a[t.variant],t.align!=="inherit"&&a[`align${l(t.align)}`],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})(S(({theme:r})=>{var a;return{margin:0,variants:[{props:{variant:"inherit"},style:{font:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}},...Object.entries(r.typography).filter(([t,e])=>t!=="inherit"&&e&&typeof e=="object").map(([t,e])=>({props:{variant:t},style:e})),...Object.entries(r.palette).filter(O()).map(([t])=>({props:{color:t},style:{color:(r.vars||r).palette[t].main}})),...Object.entries(((a=r.palette)==null?void 0:a.text)||{}).filter(([,t])=>typeof t=="string").map(([t])=>({props:{color:`text${l(t)}`},style:{color:(r.vars||r).palette.text[t]}})),{props:({ownerState:t})=>t.align!=="inherit",style:{textAlign:"var(--Typography-textAlign)"}},{props:({ownerState:t})=>t.noWrap,style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},{props:({ownerState:t})=>t.gutterBottom,style:{marginBottom:"0.35em"}},{props:({ownerState:t})=>t.paragraph,style:{marginBottom:16}}]}})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},V=j.forwardRef(function(a,t){const{color:e,...n}=w({props:a,name:"MuiTypography"}),i=!A[e],s=E({...n,...i&&{color:e}}),{align:o="inherit",className:g,component:h,gutterBottom:x=!1,noWrap:d=!1,paragraph:y=!1,variant:p="body1",variantMapping:c=f,...u}=s,m={...s,align:o,color:e,className:g,component:h,gutterBottom:x,noWrap:d,paragraph:y,variant:p,variantMapping:c},b=h||(y?"p":c[p]||f[p])||"span",v=$(m);return W.jsx(k,{as:b,ref:t,className:M(v.root,g),...u,ownerState:m,style:{...o!=="inherit"&&{"--Typography-textAlign":o},...u.style}})});export{V as T,N as t};
