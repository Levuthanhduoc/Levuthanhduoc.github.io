import{a0 as V,ad as v,ae as u,af as T,aa as b,ag as D,r as p,K as B,j as F,f as M,h as E,n as G,ah as h,s as N,e as O}from"./index-D5pX6302.js";import{s as U,u as $}from"./useThemeProps-BvER-489.js";const A=V(),I=U("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root});function K(e){return $({props:e,name:"MuiStack",defaultTheme:A})}function L(e,s){const n=p.Children.toArray(e).filter(Boolean);return n.reduce((a,c,t)=>(a.push(c),t<n.length-1&&a.push(p.cloneElement(s,{key:`separator-${t}`})),a),[])}const q=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],z=({ownerState:e,theme:s})=>{let n={display:"flex",flexDirection:"column",...v({theme:s},u({values:e.direction,breakpoints:s.breakpoints.values}),a=>({flexDirection:a}))};if(e.spacing){const a=T(s),c=Object.keys(s.breakpoints.values).reduce((o,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(o[r]=!0),o),{}),t=u({values:e.direction,base:c}),d=u({values:e.spacing,base:c});typeof t=="object"&&Object.keys(t).forEach((o,r,i)=>{if(!t[o]){const l=r>0?t[i[r-1]]:"column";t[o]=l}}),n=b(n,v({theme:s},d,(o,r)=>e.useFlexGap?{gap:h(a,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${q(r?t[r]:e.direction)}`]:h(a,o)}}))}return n=D(s.breakpoints,n),n};function H(e={}){const{createStyledComponent:s=I,useThemeProps:n=K,componentName:a="MuiStack"}=e,c=()=>E({root:["root"]},o=>G(a,o),{}),t=s(z);return p.forwardRef(function(o,r){const i=n(o),f=B(i),{component:l="div",direction:k="column",spacing:x=0,divider:y,children:g,className:j,useFlexGap:C=!1,...P}=f,S={direction:k,spacing:x,useFlexGap:C},R=c();return F.jsx(t,{as:l,ownerState:S,ref:r,className:M(R.root,j),...P,children:y?L(g,y):g})})}const W=H({createStyledComponent:N("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,s)=>s.root}),useThemeProps:e=>O({props:e,name:"MuiStack"})});export{W as S};
