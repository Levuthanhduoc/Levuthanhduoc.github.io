import{j as e,l as me,n as he,s as Q,c as fe,m as ge,W as Te,r as l,e as ve,q as He,f as q,h as je,V as Ve,X as Le,F as De}from"./index-DM2OrA4B.js";import{B as ke}from"./breadcrumb-4W6Me75n.js";import{C as ie}from"./component.module-DLKJmnkV.js";import{B as d}from"./Box-BbP3bFHc.js";import{I as Y}from"./IconButton-PG1ydqr5.js";import{c as T,i as ce}from"./ButtonBase-BE6pjX2P.js";import{T as w}from"./Typography-q6gfxOC6.js";import{m as Ee,p as $e,v as Oe,a as Be,z as Pe}from"./zalo-unQhDHqO.js";import{f as Ne}from"./fecthData-DEoavRWm.js";import{g as Xe}from"./richTextForm-CNulHJ86.js";import{P as Ue}from"./index-BHclELd3.js";import{A as Ye}from"./addtoCart-BaHBbR1A.js";import{R as We,T as Ge,a as _e,b as de,c as Ke}from"./Remove-DPOhwG7Y.js";import{A as qe}from"./Add-LJeMvgAW.js";import{B as ee}from"./Button-zkMrwkMc.js";import{D as P}from"./Divider-DdWrIPP-.js";import{S as F}from"./Stack-CsDVGOxZ.js";import{T as Qe,a as Je}from"./Tabs-yh2ELlO8.js";import{T as E}from"./TableCell-C_5eAIv8.js";import{a as be,u as Ze}from"./Portal-f8K4Lwty.js";import{u as et}from"./TransitionGroupContext-BcqBKjiD.js";import{v as tt}from"./visuallyHidden-Dan1xhjv.js";import{T as ot}from"./TextField-CEV-ElYw.js";import{S as st}from"./Send-BCi6v7Sh.js";import{b as nt,S as it,a as rt}from"./Select-DVoAYFZE.js";import{F as at}from"./Fade-Dxi0WtAd.js";import"./upperCaseFirstletter-xFsbV7lH.js";import"./react-is.production.min-DUDD-a5e.js";import"./useSlotProps-D-mFihm9.js";import"./iconButtonClasses-CLWFGRA4.js";import"./useTheme-CBnNZ0fp.js";import"./Collapse-DEjJgCl2.js";import"./utils-90jP_8Zv.js";import"./Tooltip-Dg102x6K.js";import"./Popper-Bz5Zff2A.js";import"./Grow-BnheXJkS.js";import"./toggleButtonClasses-M5_TO2xX.js";import"./ClickAwayListener-_drNbBP5.js";import"./Paper-Dpwb2Z5E.js";import"./dividerClasses-DKbsAxLf.js";import"./useThemeProps-B-F4mYKR.js";import"./tabClasses-CFqHO07D.js";import"./ownerWindow-Dmb1eM3V.js";import"./tabsClasses-iagpr8Cq.js";import"./KeyboardArrowRight-0Jexu4qz.js";import"./InputBase-BhJa5mql.js";import"./listItemTextClasses-CcDxfJ3_.js";const lt=T(e.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),ct=T(e.jsx("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function dt(t){return he("MuiRating",t)}const K=me("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]);function ut(t){const o=t.toString().split(".")[1];return o?o.length:0}function se(t,o){if(t==null)return t;const n=Math.round(t/o)*o;return Number(n.toFixed(ut(o)))}const pt=t=>{const{classes:o,size:n,readOnly:c,disabled:p,emptyValueFocused:g,focusVisible:v}=t,x={root:["root",`size${fe(n)}`,p&&"disabled",v&&"focusVisible",c&&"readOnly"],label:["label","pristine"],labelEmptyValue:[g&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return je(x,dt,o)},xt=Q("span",{name:"MuiRating",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[{[`& .${K.visuallyHidden}`]:o.visuallyHidden},o.root,o[`size${fe(n.size)}`],n.readOnly&&o.readOnly]}})(ge(({theme:t})=>({display:"inline-flex",position:"relative",fontSize:t.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",width:"min-content",WebkitTapHighlightColor:"transparent",[`&.${K.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${K.focusVisible} .${K.iconActive}`]:{outline:"1px solid #999"},[`& .${K.visuallyHidden}`]:tt,variants:[{props:{size:"small"},style:{fontSize:t.typography.pxToRem(18)}},{props:{size:"large"},style:{fontSize:t.typography.pxToRem(30)}},{props:({ownerState:o})=>o.readOnly,style:{pointerEvents:"none"}}]}))),ye=Q("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:t},o)=>[o.label,t.emptyValueFocused&&o.labelEmptyValueActive]})({cursor:"inherit",variants:[{props:({ownerState:t})=>t.emptyValueFocused,style:{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}}]}),mt=Q("span",{name:"MuiRating",slot:"Icon",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.icon,n.iconEmpty&&o.iconEmpty,n.iconFilled&&o.iconFilled,n.iconHover&&o.iconHover,n.iconFocus&&o.iconFocus,n.iconActive&&o.iconActive]}})(ge(({theme:t})=>({display:"flex",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),pointerEvents:"none",variants:[{props:({ownerState:o})=>o.iconActive,style:{transform:"scale(1.2)"}},{props:({ownerState:o})=>o.iconEmpty,style:{color:(t.vars||t).palette.action.disabled}}]}))),ht=Q("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:t=>Te(t)&&t!=="iconActive",overridesResolver:(t,o)=>{const{iconActive:n}=t;return[o.decimal,n&&o.iconActive]}})({position:"relative",variants:[{props:({iconActive:t})=>t,style:{transform:"scale(1.2)"}}]});function ft(t){const{value:o,...n}=t;return e.jsx("span",{...n})}function ue(t){const{classes:o,disabled:n,emptyIcon:c,focus:p,getLabelText:g,highlightSelectedOnly:v,hover:x,icon:S,IconContainerComponent:m,isActive:b,itemValue:f,labelProps:i,name:R,onBlur:$,onChange:A,onClick:M,onFocus:C,readOnly:a,ownerState:r,ratingValue:s,ratingValueRounded:h}=t,y=v?f===s:f<=s,I=f<=x,D=f<=p,W=f===h,O=`${R}-${be()}`,H=e.jsx(mt,{as:m,value:f,className:q(o.icon,y?o.iconFilled:o.iconEmpty,I&&o.iconHover,D&&o.iconFocus,b&&o.iconActive),ownerState:{...r,iconEmpty:!y,iconFilled:y,iconHover:I,iconFocus:D,iconActive:b},children:c&&!y?c:S});return a?e.jsx("span",{...i,children:H}):e.jsxs(l.Fragment,{children:[e.jsxs(ye,{ownerState:{...r,emptyValueFocused:void 0},htmlFor:O,...i,children:[H,e.jsx("span",{className:o.visuallyHidden,children:g(f)})]}),e.jsx("input",{className:o.visuallyHidden,onFocus:C,onBlur:$,onChange:A,onClick:M,disabled:n,value:f,id:O,type:"radio",name:R,checked:W})]})}const gt=e.jsx(lt,{fontSize:"inherit"}),vt=e.jsx(ct,{fontSize:"inherit"});function jt(t){return`${t||"0"} Star${t!==1?"s":""}`}const bt=l.forwardRef(function(o,n){const c=ve({name:"MuiRating",props:o}),{className:p,defaultValue:g=null,disabled:v=!1,emptyIcon:x=vt,emptyLabelText:S="Empty",getLabelText:m=jt,highlightSelectedOnly:b=!1,icon:f=gt,IconContainerComponent:i=ft,max:R=5,name:$,onChange:A,onChangeActive:M,onMouseLeave:C,onMouseMove:a,precision:r=1,readOnly:s=!1,size:h="medium",value:y,...I}=c,D=be($),[W,O]=Ze({controlled:y,default:g,name:"Rating"}),H=se(W,r),we=He(),[{hover:V,focus:J},G]=l.useState({hover:-1,focus:-1});let N=H;V!==-1&&(N=V),J!==-1&&(N=J);const[Ce,te]=l.useState(!1),re=l.useRef(),Se=et(re,n),Re=u=>{a&&a(u);const j=re.current,{right:z,left:Z,width:X}=j.getBoundingClientRect();let U;we?U=(z-u.clientX)/X:U=(u.clientX-Z)/X;let L=se(R*U+r/2,r);L=Ve(L,r,R),G(B=>B.hover===L&&B.focus===L?B:{hover:L,focus:L}),te(!1),M&&V!==L&&M(u,L)},Me=u=>{C&&C(u);const j=-1;G({hover:j,focus:j}),M&&V!==j&&M(u,j)},ae=u=>{let j=u.target.value===""?null:parseFloat(u.target.value);V!==-1&&(j=V),O(j),A&&A(u,j)},Ie=u=>{u.clientX===0&&u.clientY===0||(G({hover:-1,focus:-1}),O(null),A&&parseFloat(u.target.value)===H&&A(u,null))},ze=u=>{ce(u.target)&&te(!0);const j=parseFloat(u.target.value);G(z=>({hover:z.hover,focus:j}))},Fe=u=>{if(V!==-1)return;ce(u.target)||te(!1);const j=-1;G(z=>({hover:z.hover,focus:j}))},[Ae,le]=l.useState(!1),_={...c,defaultValue:g,disabled:v,emptyIcon:x,emptyLabelText:S,emptyValueFocused:Ae,focusVisible:Ce,getLabelText:m,icon:f,IconContainerComponent:i,max:R,precision:r,readOnly:s,size:h},k=pt(_);return e.jsxs(xt,{ref:Se,onMouseMove:Re,onMouseLeave:Me,className:q(k.root,p,s&&"MuiRating-readOnly"),ownerState:_,role:s?"img":null,"aria-label":s?m(N):null,...I,children:[Array.from(new Array(R)).map((u,j)=>{const z=j+1,Z={classes:k,disabled:v,emptyIcon:x,focus:J,getLabelText:m,highlightSelectedOnly:b,hover:V,icon:f,IconContainerComponent:i,name:D,onBlur:Fe,onChange:ae,onClick:Ie,onFocus:ze,ratingValue:N,ratingValueRounded:H,readOnly:s,ownerState:_},X=z===Math.ceil(N)&&(V!==-1||J!==-1);if(r<1){const U=Array.from(new Array(1/r));return e.jsx(ht,{className:q(k.decimal,X&&k.iconActive),ownerState:_,iconActive:X,children:U.map((L,B)=>{const oe=se(z-1+(B+1)*r,r);return e.jsx(ue,{...Z,isActive:!1,itemValue:oe,labelProps:{style:U.length-1===B?{}:{width:oe===N?`${(B+1)*r*100}%`:"0%",overflow:"hidden",position:"absolute"}}},oe)})},z)}return e.jsx(ue,{...Z,isActive:X,itemValue:z},z)}),!s&&!v&&e.jsxs(ye,{className:q(k.label,k.labelEmptyValue),ownerState:_,children:[e.jsx("input",{className:k.visuallyHidden,value:"",id:`${D}-empty`,type:"radio",name:D,checked:H==null,onFocus:()=>le(!0),onBlur:()=>le(!1),onChange:ae}),e.jsx("span",{className:k.visuallyHidden,children:S})]})]})});function yt(t){return he("MuiTableContainer",t)}me("MuiTableContainer",["root"]);const wt=t=>{const{classes:o}=t;return je({root:["root"]},yt,o)},Ct=Q("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(t,o)=>o.root})({width:"100%",overflowX:"auto"}),St=l.forwardRef(function(o,n){const c=ve({props:o,name:"MuiTableContainer"}),{className:p,component:g="div",...v}=c,x={...c,component:g},S=wt(x);return e.jsx(Ct,{ref:n,as:g,className:q(S.root,p),ownerState:x,...v})}),Rt=T(e.jsx("path",{d:"M11 9h2V6h3V4h-3V1h-2v3H8v2h3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25"}),"AddShoppingCart"),pe=T(e.jsx("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIosOutlined"),Mt=T([e.jsx("path",{d:"M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"},"0"),e.jsx("path",{d:"M14 17H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"},"1")],"ArticleOutlined"),It=T(e.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder"),zt=T(e.jsx("path",{d:"M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12zm-9.18-.5L7.4 12l3.54 3.54 5.66-5.66-1.41-1.41-4.24 4.24z"}),"GppGoodOutlined"),Ft=T(e.jsx("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft"),At=T(e.jsx("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight"),Tt=T(e.jsx("path",{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zm-.5 1.5 1.96 2.5H17V9.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"LocalShippingOutlined");function Ht(t){const[o,n]=l.useState(0),[c,p]=l.useState(0),[g,v]=l.useState(!1),[x,S]=l.useState(0),m=l.useRef(),b=l.useRef({startX:0,startY:0,scrollLeft:0,scrollTop:0}),f={border:" 3px solid black",borderRadius:"15px"},i=()=>{c<0&&(p(c+100),n(o-1),m.current&&m.current.children[o-1].scrollIntoView({behavior:"smooth",block:"nearest"}))},R=()=>{c>(t.pictures.length-1)*-100&&(p(c-100),n(o+1),m.current&&m.current.children[o+1].scrollIntoView({behavior:"smooth",block:"nearest"}))},$=a=>{n(a),p(a*-100)},A=a=>{if(!m.current)return;const r=m.current,s=a.pageX-r.offsetLeft,h=a.pageY-r.offsetTop,y=r.scrollLeft,I=r.scrollTop;b.current={startX:s,startY:h,scrollLeft:y,scrollTop:I},v(!0)},M=()=>{v(!1),S(0)},C=a=>{if(!g||!m.current)return;if(x==0){S(a.pageY);return}a.preventDefault();const r=m.current,s=a.pageX-r.offsetLeft,h=a.pageY-r.offsetTop,y=(s-b.current.startX)*1.5,I=(h-b.current.startY)*1.5;r.scrollLeft=b.current.scrollLeft-y,r.scrollTop=b.current.scrollTop-I};return e.jsx(e.Fragment,{children:e.jsxs(d,{display:"flex",flexDirection:{sx:"column",sm:"row"},sx:t.sx||{height:"600px",width:"550px"},children:[e.jsx(d,{ref:m,sx:{display:"flex",flex:1,backgroundColor:"rgba(38, 38, 38,0.5)",flexDirection:"column",width:"100%",overflowY:"scroll",scrollbarWidth:"none"},onMouseDown:a=>A(a),onMouseUp:M,onMouseMove:a=>C(a),onMouseLeave:()=>{M()},children:t.pictures.map((a,r)=>e.jsx(d,{sx:r==o?f:{},onClick:()=>$(r),children:e.jsx("img",{style:{userSelect:"none"},draggable:!1,className:ie.shopCardImage,src:a})},r))}),e.jsxs(d,{sx:{flex:3,position:"relative",overflow:"hidden",display:"flex",alignItems:"center",backgroundColor:"rgba(38, 38, 38,0.5)"},children:[e.jsx(Y,{sx:{position:"absolute",left:0,zIndex:"1"},onClick:()=>i(),children:e.jsx(Ft,{})}),e.jsx(d,{sx:{display:"flex",flexDirection:"row",position:"absolute",transition:"1s ease-in-out",transform:`translateX(${c}%)`},children:t.pictures.map((a,r)=>e.jsx(d,{sx:{flexShrink:"0",width:"100%"},children:e.jsx("img",{className:ie.shopCardImage,src:a})},r))}),e.jsx(Y,{sx:{position:"absolute",right:0,zIndex:"1"},onClick:()=>R(),children:e.jsx(At,{})})]})]})})}function Vt(t){const[o,n]=l.useState("start"),c=p=>{const g=new Date(p).getTime(),v=new Date().getTime(),x=g-v,S=Math.floor(x/(24*60*60*1e3)),m=Math.floor(x%(24*60*60*1e3)/(60*60*1e3)),b=Math.floor(x%(60*60*1e3)/(60*1e3)),f=Math.floor(x%(60*1e3)/1e3),i=`${S}d : ${m}h : ${b}m:${f}s`;x>0?n(i):n(void 0)};return l.useEffect(()=>{const p=setInterval(()=>{o&&t.timer?c(t.timer):clearInterval(p)},1e3);return()=>{clearInterval(p)}},[]),e.jsx(e.Fragment,{children:e.jsx(w,{sx:{color:"#B22222",textAlign:"center"},children:o||"END"})})}function Lt(t){return e.jsx(e.Fragment,{children:e.jsx(d,{sx:{backgroundColor:"rgb(224, 224, 224)",position:"relative",width:"100%",height:"1.25rem",borderRadius:"0.99rem",overflow:"hidden",margin:"0.75rem",...t.sx},children:e.jsx(d,{sx:{backgroundColor:"rgb(255, 213, 2)",height:"100%",width:`${t.fill}%`}})})})}const xe="https://luckybrickserver.onrender.com",Dt={maxWidth:"1540px",width:"100%",margin:"auto",padding:{xs:"25px 0 0 0",sm:"45px 15px 70px 15px",md:"45px 30px 70px 30px",lg:"45px 50px 70px 50px"}},ne=t=>e.jsx(at,{in:t.value==t.index,mountOnEnter:!0,unmountOnExit:!0,timeout:2e3,children:e.jsx(d,{role:"tabpanel",hidden:t.value!=t.index,id:`simple-tabpanel-${t.index}`,"aria-labelledby":`simple-tab-${t.index}`,sx:{...t.sx,zIndex:"-1"},children:t.children})});function Ao(){const{id:t}=Le(),[o,n]=l.useState(0),[c,p]=l.useState(0),[g,v]=l.useState(0),[x,S]=l.useState("relevant"),[m,b]=l.useState(!1),f=l.useContext(De),[i,R]=l.useState(),$=[{name:"master card",icon:Ee},{name:"paypal",icon:$e},{name:"visa",icon:Oe},{name:"momo",icon:Be},{name:"zalopay",icon:Pe}],A=[{id:"tab-0",name:"Description"},{id:"tab-1",name:"Additional Information"},{id:"tab-2",name:"Review"}],M=[{name:"Helpfulness",value:"helpfull"},{name:"Most relevant",value:"relevant"},{name:"Rating - Low to High",value:"ratingASC"},{name:"Rating: High to Low",value:"ratingDES"},{name:"Date - oldest first",value:"dateASC"},{name:"Date - newest first",value:"dateDES"}],C={total:152,detail:[7,2,7,11,125]},a=(s,h,y)=>{const D=[...h].reduce((W,O,H)=>W+O*(H+1),0)/s;return Math.floor(D*10)/10},r=async()=>{try{const s=await Ne({url:xe+`legos/info?name=legos&id=${t}`,methoud:"get"});if(s){const h=s.rows;R(h[0])}}catch(s){console.log(s)}};return l.useEffect(()=>{r()},[]),l.useEffect(()=>{v(a(C.total,C.detail))},[i]),e.jsx(e.Fragment,{children:e.jsxs(d,{sx:Dt,children:[e.jsx(ke,{sx:{width:"100%",margin:"auto",padding:"30px 0 30px 0"}}),i&&e.jsxs(e.Fragment,{children:[e.jsxs(d,{sx:{display:"flex",flexDirection:{xs:"column",sm:"column",md:"row"},gap:"15px",width:"100%"},children:[e.jsx(d,{sx:{flex:1,display:"flex",justifyContent:"center"},children:e.jsx(Ht,{sx:{width:"100%",maxHeight:"500px",gap:"5px"},pictures:i.image_uploaded_png.map(s=>xe+"storage/"+s)})}),e.jsxs(d,{sx:{flex:1,display:"flex",flexDirection:"column",gap:"10px",padding:"0 15px 0 15px"},children:[e.jsx(w,{sx:{fontSize:{md:"26px",lg:"28px"},lineHeight:{md:"31.2px",lg:"33.6px"}},children:i.name}),e.jsxs(d,{display:"flex",flexDirection:"row",alignItems:"center",gap:"15px",sx:{fontSize:"20px",lineHeight:"20px"},children:[e.jsxs(w,{sx:{color:"#B22222",fontSize:"28px",lineHeight:"28px"},children:["$",i.price-i.price*i.sale]}),e.jsxs(w,{sx:{textDecoration:"line-through",color:"rgba(211, 211, 211, 0.55)",fontSize:"20px",lineHeight:"20px"},children:["$",i.price]}),e.jsxs(d,{className:ie.salePill,children:["- ",i.sale*100,"%"]})]}),i.timesale&&e.jsxs(d,{sx:{display:"inline-block",padding:{xs:"8px 15px",sm:"16px 30px"},border:"1px solid #B22222",borderRadius:"2.5px",textAlign:"center",minWidth:{xs:"100px",sm:"300px"}},children:[e.jsx(w,{children:"HURRY UP! SALE ENDS IN:"}),e.jsx(Vt,{timer:i.timesale})]}),e.jsxs(d,{children:[e.jsx(w,{children:"Quantity"}),e.jsxs(d,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",flexGrow:0,sx:{borderRadius:"5px",width:"127px",backgroundColor:"rgba(38, 38, 38,0.5)"},children:[e.jsx(Y,{onClick:()=>p(c>0?c-1:0),children:e.jsx(We,{})}),e.jsx(w,{children:c}),e.jsx(Y,{onClick:()=>p(c+1),children:e.jsx(qe,{})})]})]}),e.jsxs(d,{children:[e.jsxs(ee,{sx:{backgroundColor:"black",color:"white"},onClick:()=>Ye({id:`${i.id}`,name:i.name,sale:`${i.sale}`,price:`${i.price}`},f),children:[e.jsx(w,{sx:{padding:"8px 8px 4px 8px"},children:"Add to cart"}),e.jsx(Rt,{})]}),e.jsx(Y,{children:e.jsx(It,{})})]}),e.jsx(P,{orientation:"horizontal",flexItem:!0}),e.jsxs(ee,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(F,{direction:"row",gap:"10px",children:[e.jsx(Tt,{}),e.jsx(w,{children:"Deliveries and Returns"})]}),e.jsx(pe,{})]}),e.jsx(P,{orientation:"horizontal",flexItem:!0}),e.jsxs(ee,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(F,{direction:"row",gap:"10px",children:[e.jsx(Mt,{}),e.jsx(w,{children:"Building Instructions"})]}),e.jsx(pe,{})]}),e.jsx(P,{orientation:"horizontal",flexItem:!0}),e.jsxs(F,{display:"flex",direction:"row",alignItems:"center",gap:"15px",flexWrap:"wrap",children:[e.jsx(zt,{}),e.jsxs(w,{children:["Guarantee Safe",e.jsx("br",{}),"Checkout"]}),e.jsx(F,{direction:"row",gap:"5px",children:$.map(s=>e.jsx("img",{style:{width:"48px",height:"30px"},alt:s.name,src:s.icon},s.name))})]})]})]}),e.jsxs(d,{sx:{border:"1px solid rgba(255, 255, 255, 0.12)",margin:"30px 0 30px 0",padding:"0 35px 0 35px ",borderRadius:"5px"},children:[e.jsx(Qe,{value:o,onChange:(s,h)=>n(h),variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0,children:A.map((s,h)=>e.jsx(Je,{sx:{fontWeight:"bold"},label:s.name,"aria-controls":`simple-tabpanel-${h}`},s.id))}),e.jsx(P,{orientation:"horizontal",flexItem:!0}),e.jsxs(d,{sx:{padding:"35px 0 35px 0"},children:[e.jsx(ne,{value:o,index:0,children:i.description&&Ue(Xe(i.description))}),e.jsx(ne,{value:o,index:1,children:e.jsx(St,{component:d,children:e.jsxs(Ge,{sx:{minWidth:650},size:"small","aria-label":"a dense table",children:[e.jsx(_e,{children:e.jsxs(de,{children:[e.jsx(E,{align:"center",children:"Age"}),e.jsx(E,{align:"center",children:"Serial Number"}),e.jsx(E,{align:"center",children:"Total pieces"}),e.jsx(E,{align:"center",children:"Category"})]})}),e.jsx(Ke,{children:e.jsxs(de,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(E,{align:"center",children:i.age}),e.jsx(E,{align:"center",children:i.serial}),e.jsx(E,{align:"center",children:i.pieces}),e.jsx(E,{align:"center",children:i.category})]})})]})})}),e.jsxs(ne,{value:o,index:2,children:[e.jsxs(F,{direction:{xs:"column",md:"row"},padding:"0 0 40px 0",children:[e.jsxs(F,{padding:{xs:"0 0 40px 0",md:"0"},children:[e.jsx(w,{children:"Overall Rating"}),e.jsxs(F,{direction:"row",alignItems:"center",children:[e.jsx(bt,{name:"size-large",defaultValue:Math.floor(g),size:"large",readOnly:!0}),e.jsxs(w,{sx:{padding:"8px 8px 2px 8px"},children:[g," (",C.total," Reviews)"]})]})]}),e.jsx(P,{orientation:"vertical",flexItem:!0}),e.jsx(P,{orientation:"horizontal",flexItem:!0}),e.jsx(F,{flexGrow:1,padding:{xs:"40px 0 0 0",md:"0 0 0 40px"},children:C.detail.map((s,h)=>{const y=Math.abs(h-4),I=C.detail[y]/C.total*100;return e.jsxs(F,{direction:"row",justifyItems:"center",alignItems:"center",children:[e.jsxs(w,{sx:{flexShrink:0},children:[y+1," star"]}),e.jsx(Lt,{sx:{width:{xs:"100px",sm:"300px",md:"25vw"}},fill:I}),e.jsxs(w,{sx:{flexShrink:0},children:["(",C.detail[y],")"]})]},h)})})]}),e.jsx(P,{orientation:"horizontal",flexItem:!0}),e.jsx(F,{padding:{xs:"40px 0 40px 0"},children:e.jsxs(F,{gap:"10px",children:[m?e.jsxs(d,{sx:{width:"100%",position:"relative"},children:[e.jsx(ot,{id:"outlined-basic",sx:{width:"100%"},label:"Review",rows:5,variant:"outlined",multiline:!0}),e.jsx(Y,{sx:{position:"absolute",bottom:0,right:0},onClick:()=>b(!1),children:e.jsx(st,{})})]}):e.jsx(ee,{onClick:()=>b(!0),children:"Leave a review"}),e.jsx(nt,{size:"small",children:e.jsx(it,{sx:{padding:"0"},value:x,onChange:s=>{S(s.target.value)},id:"sortOption",children:M.map(s=>e.jsx(rt,{value:s.value,children:s.name},s.name))})})]})})]})]})]})]})]})})}export{Ao as default};
