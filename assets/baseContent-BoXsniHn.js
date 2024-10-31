const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/home-ZMGMji_z.js","assets/index-BhbbloSs.js","assets/index-DWOvFy9g.css","assets/Slide-BYeZXDsY.js","assets/useTheme-Dvw3qUtv.js","assets/utils-CMEVY23T.js","assets/TransitionGroupContext-Ckl_AVPF.js","assets/Box-BU2KJpl6.js","assets/memoTheme-CxUk2grW.js","assets/webgame-CBg3gdrv.js","assets/component.module-DjIFceot.js","assets/InputBase-CIHIhgIn.js","assets/createSimplePaletteValueFilter-CwGnd2rB.js","assets/styled-DCP-TiNp.js","assets/component-CPgrHimg.css","assets/Grow-CEY3PsMK.js","assets/resolveComponentProps-CibBwjS3.js","assets/IconButton-DHwWjsGE.js","assets/Typography-CRD_I8EL.js","assets/searchBar-ppMZgDjV.js","assets/useTranslation-BiFbDxlD.js","assets/fecthData-DEoavRWm.js","assets/Button--CpJxokd.js","assets/Popover-CWcXnV1r.js","assets/Fade-C3l7gR4D.js","assets/Grid2-8tQ5GSRU.js","assets/Pagination-CEKlS6tP.js","assets/shop-BeHExZCj.js","assets/placeholder1-DIi4LjHX.js","assets/Select-Ba-dTHNM.js","assets/listItemTextClasses-DSKaRm-u.js","assets/dividerClasses-B32DYMex.js","assets/useSlotProps-oUA-2tfk.js","assets/useId-BZMStXzg.js","assets/shopDetail-D4_Ey80-.js","assets/breadcrumb-BwXoceXh.js","assets/zalo-unQhDHqO.js","assets/Divider-BUsFZ8u2.js","assets/Tabs-DOMv7xhq.js","assets/Turorial-CjVD6-AF.js","assets/tutorialDetail-BHnMEebW.js","assets/gameDetail-BG-fdPm9.js"])))=>i.map(i=>d[i]);
import{k as _,h as v,b as R,r as y,u as k,j as e,R as o,_ as s,i as E,l as S}from"./index-BhbbloSs.js";import{B as h}from"./Box-BU2KJpl6.js";import{a as A,g as D,s as T,m as P,c as L,b as $}from"./memoTheme-CxUk2grW.js";function I(t){return String(t).match(/[\d.\-+]*\s*(.*)/)[1]||""}function O(t){return parseFloat(t)}function V(t){return D("MuiSkeleton",t)}A("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const z=t=>{const{classes:n,variant:a,animation:i,hasChildren:r,width:d,height:p}=t;return $({root:["root",a,i,r&&"withChildren",r&&!d&&"fitContent",r&&!p&&"heightAuto"]},V,n)},u=_`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,m=_`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,U=typeof u!="string"?v`
        animation: ${u} 2s ease-in-out 0.5s infinite;
      `:null,M=typeof m!="string"?v`
        &::after {
          animation: ${m} 2s linear 0.5s infinite;
        }
      `:null,B=T("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:a}=t;return[n.root,n[a.variant],a.animation!==!1&&n[a.animation],a.hasChildren&&n.withChildren,a.hasChildren&&!a.width&&n.fitContent,a.hasChildren&&!a.height&&n.heightAuto]}})(P(({theme:t})=>{const n=I(t.shape.borderRadius)||"px",a=O(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:R(t.palette.text.primary,t.palette.mode==="light"?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${n}/${Math.round(a/.6*10)/10}${n}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:({ownerState:i})=>i.hasChildren,style:{"& > *":{visibility:"hidden"}}},{props:({ownerState:i})=>i.hasChildren&&!i.width,style:{maxWidth:"fit-content"}},{props:({ownerState:i})=>i.hasChildren&&!i.height,style:{height:"auto"}},{props:{animation:"pulse"},style:U||{animation:`${u} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(
                90deg,
                transparent,
                ${(t.vars||t).palette.action.hover},
                transparent
              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:M||{"&::after":{animation:`${m} 2s linear 0.5s infinite`}}}]}})),l=y.forwardRef(function(n,a){const i=k({props:n,name:"MuiSkeleton"}),{animation:r="pulse",className:d,component:p="span",height:c,style:j,variant:b="text",width:C,...x}=i,f={...i,animation:r,component:p,variant:b,hasChildren:!!x.children},w=z(f);return e.jsx(B,{as:p,ref:a,className:L(w.root,d),ownerState:f,...x,style:{width:C,height:c,...j}})});function G(){return e.jsx(e.Fragment,{children:e.jsxs(h,{sx:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(l,{variant:"rounded",width:"100%",height:118}),e.jsx(l,{variant:"rounded",width:"100%",height:118}),e.jsx(l,{variant:"rounded",width:"100%",height:118}),e.jsx(l,{variant:"rounded",width:"100%",height:118}),e.jsx(l,{variant:"rounded",width:"100%",height:118})]})})}const g=o.lazy(()=>s(()=>import("./home-ZMGMji_z.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),X=o.lazy(()=>s(()=>import("./webgame-CBg3gdrv.js"),__vite__mapDeps([9,1,2,10,8,11,6,12,4,13,14,7,15,16,5,17,18,19,20,21,22,23,24,25,26]))),F=o.lazy(()=>s(()=>import("./shop-BeHExZCj.js"),__vite__mapDeps([27,1,2,10,8,11,6,12,4,13,14,20,7,3,5,17,18,28,15,16,29,30,31,32,23,24,22,33,21,25,26]))),H=o.lazy(()=>s(()=>import("./shopDetail-D4_Ey80-.js"),__vite__mapDeps([34,1,2,35,32,16,8,6,12,18,28,15,5,4,29,11,30,31,23,24,22,33,10,13,14,7,17,36,21,37,38]))),N=o.lazy(()=>s(()=>import("./Turorial-CjVD6-AF.js"),__vite__mapDeps([39,1,2,10,8,11,6,12,4,13,14,7,18,15,16,5,17,19,20,32,33,21,25,26]))),K=o.lazy(()=>s(()=>import("./tutorialDetail-BHnMEebW.js"),__vite__mapDeps([40,1,2,35,32,16,8,6,12,18,21,7,38,4,37,31,24,5]))),W=o.lazy(()=>s(()=>import("./gameDetail-BG-fdPm9.js"),__vite__mapDeps([41,1,2,35,32,16,8,6,12,18,21,7,17]))),q=[{path:"/",alt:"Home",element:e.jsx(g,{})},{path:"/home",alt:"Home",element:e.jsx(g,{})},{path:"/shop",alt:"Shop",element:e.jsx(F,{})},{path:"/shop/:id",alt:"Shop detail id",element:e.jsx(H,{})},{path:"/game",alt:"Game",element:e.jsx(X,{})},{path:"/game/:id",alt:"Game detail",element:e.jsx(W,{})},{path:"/tutorial",alt:"Creator Lab",element:e.jsx(N,{})},{path:"/tutorial/:id",alt:"Creator Lab detail",element:e.jsx(K,{})}];function Z(){return e.jsx(e.Fragment,{children:e.jsx(h,{className:"app-content",component:"main",children:e.jsx(h,{sx:{padding:{xs:"5px",sm:"40px",md:"50px"}},children:e.jsx(y.Suspense,{fallback:e.jsx(G,{}),children:e.jsx(E,{children:q.map(t=>e.jsx(S,{path:t.path,element:t.element},t.alt))})})})})})}export{Z as default};
