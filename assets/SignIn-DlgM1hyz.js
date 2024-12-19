import{l as O,n as W,s as y,B as L,r as n,b as R,j as e,f as M,h as P,A as q,o as z,C as J}from"./index-I3WCFbXW.js";import{c as V,g as H,a as Z,b as G,D as K}from"./DialogContent-Jz-xlqUj.js";import{T as g}from"./Typography-BVHtj-9O.js";import{O as Q,b as T}from"./Select-BdJCyDMf.js";import{B as j}from"./Button-DCQXrtrW.js";import{A as X}from"./AppTheme-CXjsRzWy.js";import{C as Y}from"./ColorModeSelect-Biz1nuTL.js";import{B as w}from"./Box-DNtV_4QE.js";import{a as k,T as E}from"./TextField-BBZMfPd-.js";import{L as F}from"./Link-DoDuPMP_.js";import{F as _,C as ee}from"./FormControlLabel-1b3upk4q.js";import{C as se}from"./Card-BD4Dn6cO.js";import{S as te}from"./Stack-Ss0VG_D_.js";import"./useTheme-BtXiHbqi.js";import"./Backdrop-BzKM5jQo.js";import"./utils-DHAL--83.js";import"./IconButton-BvJRnmLf.js";import"./Paper-DxTlVd1j.js";import"./listItemTextClasses-CiOVZ1QG.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-DmcSjKRo.js";import"./dividerClasses-GL_stfPR.js";import"./react-is.production.min-DUDD-a5e.js";import"./Grow-CZOuELKs.js";import"./useSlotProps-BxS31xzD.js";import"./useControlled-ptgeMyCW.js";import"./toggleButtonClasses-dmdrdYqR.js";import"./tabClasses-DQSVpPBV.js";import"./checkboxClasses-CwfmelS1.js";import"./useThemeProps-B6AQUXeY.js";function oe(s){return W("MuiDialogContentText",s)}O("MuiDialogContentText",["root"]);const re=s=>{const{classes:t}=s,o=P({root:["root"]},oe,t);return{...t,...o}},ae=y(g,{shouldForwardProp:s=>L(s)||s==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(s,t)=>t.root})({}),ne=n.forwardRef(function(t,r){const o=R({props:t,name:"MuiDialogContentText"}),{children:m,className:u,...p}=o,i=re(p);return e.jsx(ae,{component:"p",variant:"body1",color:"textSecondary",ref:r,ownerState:p,className:M(i.root,u),...o,classes:i})}),ie=s=>{const{classes:t}=s;return P({root:["root"]},H,t)},le=y(g,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(s,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),pe=n.forwardRef(function(t,r){const o=R({props:t,name:"MuiDialogTitle"}),{className:m,id:u,...p}=o,i=o,h=ie(i),{titleId:C=u}=n.useContext(V);return e.jsx(le,{component:"h2",className:M(h.root,m),ownerState:i,ref:r,variant:"h6",id:u??C,...p})});function ce({open:s,handleClose:t}){return e.jsxs(Z,{open:s,onClose:t,PaperProps:{component:"form",onSubmit:r=>{r.preventDefault(),t()},sx:{backgroundImage:"none"}},children:[e.jsx(pe,{children:"Reset password"}),e.jsxs(G,{sx:{display:"flex",flexDirection:"column",gap:2,width:"100%"},children:[e.jsx(ne,{children:"Enter your account's email address, and we'll send you a link to reset your password."}),e.jsx(Q,{autoFocus:!0,required:!0,margin:"dense",id:"email",name:"email",label:"Email address",placeholder:"Email address",type:"email",fullWidth:!0})]}),e.jsxs(K,{sx:{pb:3,px:3},children:[e.jsx(j,{onClick:t,children:"Cancel"}),e.jsx(j,{variant:"contained",type:"submit",children:"Continue"})]})]})}const de="https://luckybrickserver.onrender.com/",ue=y(se)(({theme:s})=>({display:"flex",flexDirection:"column",alignSelf:"center",width:"100%",padding:s.spacing(4),gap:s.spacing(2),margin:"auto",[s.breakpoints.up("sm")]:{maxWidth:"450px"},boxShadow:"hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",...s.applyStyles("dark",{boxShadow:"hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px"})})),me=y(te)(({theme:s})=>({height:"calc((1 - var(--template-frame-height, 0)) * 100dvh)",minHeight:"100%",padding:s.spacing(2),[s.breakpoints.up("sm")]:{padding:s.spacing(4)},"&::before":{content:'""',display:"block",position:"absolute",zIndex:-1,inset:0,backgroundImage:"radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",backgroundRepeat:"no-repeat",...s.applyStyles("dark",{backgroundImage:"none"})}}));function Ve(s){const[t,r]=n.useState(null),[o,m]=n.useState(!1),[u,p]=n.useState(""),[i,h]=n.useState(!1),[C,b]=n.useState(""),[I,S]=n.useState(!1),{setLogin:U}=n.useContext(q),D=z(),B=()=>{S(!0)},A=()=>{S(!1)},N=async c=>{let a=[];if(c.preventDefault(),o||i)return;const f=new FormData(c.currentTarget),x=JSON.stringify({name:f.get("username"),password:f.get("password")});try{const d=await fetch(de+"users/login",{method:"POST",body:x,credentials:"include",headers:{"Content-Type":"application/json"}});if(d.ok){const l=await d.json();if(l.status){const v=new Date(Date.now()+828e5);document.cookie=`name=${l.data.name};expires=${v};`,document.cookie=`role=${l.data.role};expires=${v};`,U(!0),D("/");return}else a=[...a,...l.data.message]}}catch(d){let l="";typeof d=="string"?l=d.toUpperCase():d instanceof Error&&(l=d.message),a.push(l)}a.length>0&&r(a)},$=()=>{const c=document.getElementById("username"),a=document.getElementById("password"),f=new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/);let x=!0;return r(null),!c.value||c.value.length<=3?(m(!0),p("Please enter a valid username with more than 3 character"),x=!1):(m(!1),p("")),!a.value||!f.test(a.value)?(h(!0),b("Password must have 8 to 16 character long. At least 1 number, 1 uppercase, 1 lowercase 1 special character. No space."),x=!1):(h(!1),b("")),x};return e.jsxs(X,{...s,children:[e.jsx(J,{enableColorScheme:!0}),e.jsxs(me,{direction:"column",justifyContent:"space-between",children:[e.jsx(Y,{sx:{position:"fixed",top:"1rem",right:"1rem"}}),e.jsxs(ue,{variant:"outlined",children:[e.jsx(g,{component:"h1",variant:"h4",sx:{width:"100%",fontSize:"clamp(2rem, 10vw, 2.15rem)"},children:"Sign in"}),t&&e.jsx(w,{sx:{color:"rgb(145, 8, 8)"},children:t.map((c,a)=>e.jsx(g,{children:c},a))}),e.jsxs(w,{component:"form",onSubmit:N,noValidate:!0,sx:{display:"flex",flexDirection:"column",width:"100%",gap:2},children:[e.jsxs(T,{children:[e.jsx(k,{htmlFor:"username",children:"Username"}),e.jsx(E,{error:o,helperText:u,id:"username",type:"username",name:"username",placeholder:"Jonh",autoComplete:"username",autoFocus:!0,required:!0,fullWidth:!0,variant:"outlined",color:o?"error":"primary"})]}),e.jsxs(T,{children:[e.jsxs(w,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(k,{htmlFor:"password",children:"Password"}),e.jsx(F,{component:"button",type:"button",onClick:B,variant:"body2",sx:{alignSelf:"baseline"},children:"Forgot your password?"})]}),e.jsx(E,{error:i,helperText:C,name:"password",placeholder:"••••••",type:"password",id:"password",autoComplete:"current-password",autoFocus:!0,required:!0,fullWidth:!0,variant:"outlined",color:i?"error":"primary"})]}),e.jsx(_,{control:e.jsx(ee,{value:"remember",color:"primary"}),label:"Remember me"}),e.jsx(ce,{open:I,handleClose:A}),e.jsx(j,{type:"submit",fullWidth:!0,variant:"contained",onClick:$,children:"Sign in"}),e.jsxs(g,{sx:{textAlign:"center"},children:["Don't have an account?"," ",e.jsx("span",{style:{cursor:"pointer"},onClick:()=>D("/signup"),children:e.jsx(F,{variant:"body2",sx:{alignSelf:"center"},children:"Sign up"})})]})]})]})]})]})}export{Ve as default};
