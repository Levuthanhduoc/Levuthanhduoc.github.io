import{r as i,l as u,n as p,s as h,e as f,j as c,f as C,h as y}from"./index-CwlP_Vb6.js";const M=i.createContext({});function v(s){return p("MuiList",s)}const U=u("MuiList",["root","padding","dense","subheader"]),P=s=>{const{classes:e,disablePadding:t,dense:a,subheader:o}=s;return y({root:["root",!t&&"padding",a&&"dense",o&&"subheader"]},v,e)},T=h("ul",{name:"MuiList",slot:"Root",overridesResolver:(s,e)=>{const{ownerState:t}=s;return[e.root,!t.disablePadding&&e.padding,t.dense&&e.dense,t.subheader&&e.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:s})=>!s.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:s})=>s.subheader,style:{paddingTop:0}}]}),j=i.forwardRef(function(e,t){const a=f({props:e,name:"MuiList"}),{children:o,className:r,component:d="ul",dense:n=!1,disablePadding:m=!1,subheader:g,...x}=a,L=i.useMemo(()=>({dense:n}),[n]),l={...a,component:d,dense:n,disablePadding:m},b=P(l);return c.jsx(M.Provider,{value:L,children:c.jsxs(T,{as:d,className:C(b.root,r),ref:t,ownerState:l,...x,children:[g,o]})})});function I(s){return p("MuiListItemText",s)}const w=u("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);export{M as L,j as a,w as b,I as g,U as l};
