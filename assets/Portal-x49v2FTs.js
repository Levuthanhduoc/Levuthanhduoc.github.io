import{r as o,a as k,j as g,O as v}from"./index-Dy-TX3gv.js";import{r as N,m as T,a as D}from"./useSlotProps-Cb_3iaYJ.js";import{u as y,s as I}from"./TransitionGroupContext-Z5cKEwOP.js";import{g as U}from"./utils-DxtO0HGO.js";import{u as R}from"./ButtonBase-CHdZHK7o.js";let b=0;function G(t){const[e,r]=o.useState(t),n=t||e;return o.useEffect(()=>{e==null&&(b+=1,r(`mui-${b}`))},[e]),n}const L={...k},w=L.useId;function H(t){if(w!==void 0){const e=w();return t??e}return G(t)}function J({controlled:t,default:e,name:r,state:n="value"}){const{current:l}=o.useRef(t!==void 0),[a,s]=o.useState(e),u=l?t:a,f=o.useCallback(c=>{l||s(c)},[]);return[u,f]}function K(t,e){const{className:r,elementType:n,ownerState:l,externalForwardedProps:a,getSlotOwnerState:s,internalForwardedProps:u,...f}=e,{component:c,slots:d={[t]:void 0},slotProps:C={[t]:void 0},...h}=a,p=d[t]||n,i=N(C[t],l),{props:{component:m,...P},internalRef:F}=T({className:r,...f,externalForwardedProps:t==="root"?h:void 0,externalSlotProps:i}),j=y(F,i==null?void 0:i.ref,e.ref),S=s?s(P):{},O={...l,...S},E=t==="root"?m||c:m,x=D(p,{...t==="root"&&!c&&!d[t]&&u,...t!=="root"&&!d[t]&&u,...P,...E&&{as:E},ref:j},O);return Object.keys(S).forEach(V=>{delete x[V]}),[p,x]}function M(t){return typeof t=="function"?t():t}const Q=o.forwardRef(function(e,r){const{children:n,container:l,disablePortal:a=!1}=e,[s,u]=o.useState(null),f=y(o.isValidElement(n)?U(n):null,r);if(R(()=>{a||u(M(l)||document.body)},[l,a]),R(()=>{if(s&&!a)return I(r,s),()=>{I(r,null)}},[r,s,a]),a){if(o.isValidElement(n)){const c={ref:f};return o.cloneElement(n,c)}return g.jsx(o.Fragment,{children:n})}return g.jsx(o.Fragment,{children:s&&v.createPortal(n,s)})});export{Q as P,H as a,K as b,J as u};
