import{f as N}from"./index-Dy-TX3gv.js";import{u as v}from"./TransitionGroupContext-Z5cKEwOP.js";function E(n){return typeof n=="string"}function H(n,f,e){return n===void 0||E(n)?f:{...f,ownerState:{...f.ownerState,...e}}}function O(n,f=[]){if(n===void 0)return{};const e={};return Object.keys(n).filter(s=>s.match(/^on[A-Z]/)&&typeof n[s]=="function"&&!f.includes(s)).forEach(s=>{e[s]=n[s]}),e}function k(n){if(n===void 0)return{};const f={};return Object.keys(n).filter(e=>!(e.match(/^on[A-Z]/)&&typeof n[e]=="function")).forEach(e=>{f[e]=n[e]}),f}function R(n){const{getSlotProps:f,additionalProps:e,externalSlotProps:s,externalForwardedProps:t,className:m}=n;if(!f){const h=N(e==null?void 0:e.className,m,t==null?void 0:t.className,s==null?void 0:s.className),r={...e==null?void 0:e.style,...t==null?void 0:t.style,...s==null?void 0:s.style},o={...e,...t,...s};return h.length>0&&(o.className=h),Object.keys(r).length>0&&(o.style=r),{props:o,internalRef:void 0}}const u=O({...t,...s}),y=k(s),l=k(t),c=f(u),a=N(c==null?void 0:c.className,e==null?void 0:e.className,m,t==null?void 0:t.className,s==null?void 0:s.className),i={...c==null?void 0:c.style,...e==null?void 0:e.style,...t==null?void 0:t.style,...s==null?void 0:s.style},g={...c,...e,...l,...y};return a.length>0&&(g.className=a),Object.keys(i).length>0&&(g.style=i),{props:g,internalRef:c.ref}}function C(n,f,e){return typeof n=="function"?n(f,e):n}function W(n){var i;const{elementType:f,externalSlotProps:e,ownerState:s,skipResolvingSlotProps:t=!1,...m}=n,u=t?{}:C(e,s),{props:y,internalRef:l}=R({...m,externalSlotProps:u}),c=v(l,u==null?void 0:u.ref,(i=n.additionalProps)==null?void 0:i.ref);return H(f,{...y,ref:c},s)}export{H as a,O as e,R as m,C as r,W as u};
