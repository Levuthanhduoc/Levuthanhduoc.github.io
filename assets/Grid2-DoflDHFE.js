import{a0 as q,r as G,J as F,K as H,j as I,f as Q,h as V,n as X,s as Y,e as Z}from"./index-B6mmHA4u.js";import{s as v,u as ee}from"./useThemeProps-BvOx1PjC.js";import{i as ne}from"./InputBase-BYHp5D8w.js";const te=(e,n)=>e.filter(r=>n.includes(r)),S=(e,n,r)=>{const o=e.keys[0];Array.isArray(n)?n.forEach((s,t)=>{r((i,p)=>{t<=e.keys.length-1&&(t===0?Object.assign(i,p):i[e.up(e.keys[t])]=p)},s)}):n&&typeof n=="object"?(Object.keys(n).length>e.keys.length?e.keys:te(e.keys,Object.keys(n))).forEach(t=>{if(e.keys.includes(t)){const i=n[t];i!==void 0&&r((p,c)=>{o===t?Object.assign(p,c):p[e.up(t)]=c},i)}}):(typeof n=="number"||typeof n=="string")&&r((s,t)=>{Object.assign(s,t)},n)};function $(e){return`--Grid-${e}Spacing`}function b(e){return`--Grid-parent-${e}Spacing`}const E="--Grid-columns",y="--Grid-parent-columns",re=({theme:e,ownerState:n})=>{const r={};return S(e.breakpoints,n.size,(o,s)=>{let t={};s==="grow"&&(t={flexBasis:0,flexGrow:1,maxWidth:"100%"}),s==="auto"&&(t={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),typeof s=="number"&&(t={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${s} / var(${y}) - (var(${y}) - ${s}) * (var(${b("column")}) / var(${y})))`}),o(r,t)}),r},se=({theme:e,ownerState:n})=>{const r={};return S(e.breakpoints,n.offset,(o,s)=>{let t={};s==="auto"&&(t={marginLeft:"auto"}),typeof s=="number"&&(t={marginLeft:s===0?"0px":`calc(100% * ${s} / var(${y}) + var(${b("column")}) * ${s} / var(${y}))`}),o(r,t)}),r},oe=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={[E]:12};return S(e.breakpoints,n.columns,(o,s)=>{const t=s??12;o(r,{[E]:t,"> *":{[y]:t}})}),r},ie=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return S(e.breakpoints,n.rowSpacing,(o,s)=>{var i;const t=typeof s=="string"?s:(i=e.spacing)==null?void 0:i.call(e,s);o(r,{[$("row")]:t,"> *":{[b("row")]:t}})}),r},ce=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return S(e.breakpoints,n.columnSpacing,(o,s)=>{var i;const t=typeof s=="string"?s:(i=e.spacing)==null?void 0:i.call(e,s);o(r,{[$("column")]:t,"> *":{[b("column")]:t}})}),r},ae=({theme:e,ownerState:n})=>{if(!n.container)return{};const r={};return S(e.breakpoints,n.direction,(o,s)=>{o(r,{flexDirection:s})}),r},fe=({ownerState:e})=>({minWidth:0,boxSizing:"border-box",...e.container&&{display:"flex",flexWrap:"wrap",...e.wrap&&e.wrap!=="wrap"&&{flexWrap:e.wrap},gap:`var(${$("row")}) var(${$("column")})`}}),le=e=>{const n=[];return Object.entries(e).forEach(([r,o])=>{o!==!1&&o!==void 0&&n.push(`grid-${r}-${String(o)}`)}),n},ue=(e,n="xs")=>{function r(o){return o===void 0?!1:typeof o=="string"&&!Number.isNaN(Number(o))||typeof o=="number"&&o>0}if(r(e))return[`spacing-${n}-${String(e)}`];if(typeof e=="object"&&!Array.isArray(e)){const o=[];return Object.entries(e).forEach(([s,t])=>{r(t)&&o.push(`spacing-${s}-${String(t)}`)}),o}return[]},pe=e=>e===void 0?[]:typeof e=="object"?Object.entries(e).map(([n,r])=>`direction-${n}-${r}`):[`direction-xs-${String(e)}`],me=q(),ge=v("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>n.root});function de(e){return ee({props:e,name:"MuiGrid",defaultTheme:me})}function ye(e={}){const{createStyledComponent:n=ge,useThemeProps:r=de,componentName:o="MuiGrid"}=e,s=(c,a)=>{const{container:g,direction:l,spacing:u,wrap:f,size:x}=c,w={root:["root",g&&"container",f!=="wrap"&&`wrap-xs-${String(f)}`,...pe(l),...le(x),...g?ue(u,a.breakpoints.keys[0]):[]]};return V(w,j=>X(o,j),{})};function t(c,a,g=()=>!0){const l={};return c===null||(Array.isArray(c)?c.forEach((u,f)=>{u!==null&&g(u)&&a.keys[f]&&(l[a.keys[f]]=u)}):typeof c=="object"?Object.keys(c).forEach(u=>{const f=c[u];f!=null&&g(f)&&(l[u]=f)}):l[a.keys[0]]=c),l}const i=n(oe,ce,ie,re,ae,fe,se),p=G.forwardRef(function(a,g){const l=F(),u=r(a),f=H(u),{className:x,children:w,columns:j=12,container:h=!1,component:O="div",direction:P="row",wrap:R="wrap",size:z={},offset:M={},spacing:k=0,rowSpacing:T=k,columnSpacing:A=k,unstable_level:d=0,...B}=f,D=t(z,l.breakpoints,m=>m!==!1),W=t(M,l.breakpoints),_=a.columns??(d?void 0:j),K=a.spacing??(d?void 0:k),L=a.rowSpacing??a.spacing??(d?void 0:T),J=a.columnSpacing??a.spacing??(d?void 0:A),C={...f,level:d,columns:_,container:h,direction:P,wrap:R,spacing:K,rowSpacing:L,columnSpacing:J,size:D,offset:W},U=s(C,l);return I.jsx(i,{ref:g,as:O,ownerState:C,className:Q(U.root,x),...B,children:G.Children.map(w,m=>{var N;return G.isValidElement(m)&&ne(m,["Grid"])&&h&&m.props.container?G.cloneElement(m,{unstable_level:((N=m.props)==null?void 0:N.unstable_level)??d+1}):m})})});return p.muiName="Grid",p}const be=ye({createStyledComponent:Y("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,n)=>n.root}),componentName:"MuiGrid2",useThemeProps:e=>Z({props:e,name:"MuiGrid2"})});export{be as G};
