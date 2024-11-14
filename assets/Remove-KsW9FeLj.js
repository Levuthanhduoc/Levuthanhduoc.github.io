import{l as b,n as v,s as y,m as $,r as p,e as f,j as i,f as m,h as T,i as w}from"./index-0Al3NA_R.js";import{a as k,b as C}from"./TableCell-CoRWT7gY.js";import{c as U}from"./ButtonBase-D-qFk_4g.js";function S(o){return v("MuiTable",o)}b("MuiTable",["root","stickyHeader"]);const B=o=>{const{classes:e,stickyHeader:t}=o;return T({root:["root",t&&"stickyHeader"]},S,e)},N=y("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.stickyHeader&&e.stickyHeader]}})($(({theme:o})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...o.typography.body2,padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:e})=>e.stickyHeader,style:{borderCollapse:"separate"}}]}))),g="table",V=p.forwardRef(function(e,t){const s=f({props:e,name:"MuiTable"}),{className:n,component:a=g,padding:l="normal",size:r="medium",stickyHeader:c=!1,...d}=s,u={...s,component:a,padding:l,size:r,stickyHeader:c},R=B(u),j=p.useMemo(()=>({padding:l,size:r,stickyHeader:c}),[l,r,c]);return i.jsx(k.Provider,{value:j,children:i.jsx(N,{as:a,role:a===g?null:"table",ref:t,className:m(R.root,n),ownerState:u,...d})})});function O(o){return v("MuiTableBody",o)}b("MuiTableBody",["root"]);const P=o=>{const{classes:e}=o;return T({root:["root"]},O,e)},z=y("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-row-group"}),A={variant:"body"},h="tbody",W=p.forwardRef(function(e,t){const s=f({props:e,name:"MuiTableBody"}),{className:n,component:a=h,...l}=s,r={...s,component:a},c=P(r);return i.jsx(C.Provider,{value:A,children:i.jsx(z,{className:m(c.root,n),as:a,ref:t,role:a===h?null:"rowgroup",ownerState:r,...l})})});function E(o){return v("MuiTableHead",o)}b("MuiTableHead",["root"]);const D=o=>{const{classes:e}=o;return T({root:["root"]},E,e)},I=y("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-header-group"}),q={variant:"head"},x="thead",X=p.forwardRef(function(e,t){const s=f({props:e,name:"MuiTableHead"}),{className:n,component:a=x,...l}=s,r={...s,component:a},c=D(r);return i.jsx(C.Provider,{value:q,children:i.jsx(I,{as:a,className:m(c.root,n),ref:t,role:a===x?null:"rowgroup",ownerState:r,...l})})});function F(o){return v("MuiTableRow",o)}const M=b("MuiTableRow",["root","selected","hover","head","footer"]),G=o=>{const{classes:e,selected:t,hover:s,head:n,footer:a}=o;return T({root:["root",t&&"selected",s&&"hover",n&&"head",a&&"footer"]},F,e)},J=y("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.root,t.head&&e.head,t.footer&&e.footer]}})($(({theme:o})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${M.hover}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${M.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:w(o.palette.primary.main,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:w(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}}}))),H="tr",Y=p.forwardRef(function(e,t){const s=f({props:e,name:"MuiTableRow"}),{className:n,component:a=H,hover:l=!1,selected:r=!1,...c}=s,d=p.useContext(C),u={...s,component:a,hover:l,selected:r,head:d&&d.variant==="head",footer:d&&d.variant==="footer"},R=G(u);return i.jsx(J,{as:a,ref:t,className:m(R.root,n),role:a===H?null:"row",ownerState:u,...c})}),Z=U(i.jsx("path",{d:"M19 13H5v-2h14z"}),"Remove");export{Z as R,V as T,X as a,Y as b,W as c};
