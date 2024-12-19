import{r as m,l as A,n as F,s as w,b as V,j as e,f as H,h as W,m as B,c as re,A as ae}from"./index-I3WCFbXW.js";import{i as ie}from"./isSale-D05GErbs.js";import{C as le}from"./component.module-BD0YSLJX.js";import{B as b}from"./Box-DNtV_4QE.js";import{S as x}from"./Stack-Ss0VG_D_.js";import{T as f}from"./Typography-BVHtj-9O.js";import{T as O}from"./TextField-BBZMfPd-.js";import{v as k}from"./v4-Ch9TGLTe.js";import{I as ce}from"./InputAdornment-CYU1vYwm.js";import{c as N,S as pe,I as de}from"./IconButton-BvJRnmLf.js";import{B as I}from"./Button-DCQXrtrW.js";import{S as xe,a as J}from"./Select-BdJCyDMf.js";import{u as ee}from"./Backdrop-BzKM5jQo.js";import{D as E}from"./Divider-B_qJNzeC.js";import{A as me}from"./Add-DBJRnbdc.js";import{R as ue}from"./Remove-3_bKFvg2.js";import"./useThemeProps-B6AQUXeY.js";import"./listItemTextClasses-CiOVZ1QG.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./isMuiElement-DmcSjKRo.js";import"./dividerClasses-GL_stfPR.js";import"./react-is.production.min-DUDD-a5e.js";import"./utils-DHAL--83.js";import"./Paper-DxTlVd1j.js";import"./useTheme-BtXiHbqi.js";import"./Grow-CZOuELKs.js";import"./useSlotProps-BxS31xzD.js";import"./useControlled-ptgeMyCW.js";const Q=m.createContext({}),X=m.createContext({});function he(t){return F("MuiStep",t)}A("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const be=t=>{const{classes:r,orientation:n,alternativeLabel:o,completed:l}=t;return W({root:["root",n,o&&"alternativeLabel",l&&"completed"]},he,r)},ve=w("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.completed&&r.completed]}})({variants:[{props:{orientation:"horizontal"},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:"relative"}}]}),fe=m.forwardRef(function(r,n){const o=V({props:r,name:"MuiStep"}),{active:l,children:s,className:i,component:d="div",completed:v,disabled:j,expanded:u=!1,index:c,last:y,...a}=o,{activeStep:p,connector:S,alternativeLabel:C,orientation:L,nonLinear:h}=m.useContext(Q);let[g=!1,q=!1,z=!1]=[l,v,j];p===c?g=l!==void 0?l:!0:!h&&p>c?q=v!==void 0?v:!0:!h&&p<c&&(z=j!==void 0?j:!0);const D=m.useMemo(()=>({index:c,last:y,expanded:u,icon:c+1,active:g,completed:q,disabled:z}),[c,y,u,g,q,z]),M={...o,active:g,orientation:L,alternativeLabel:C,completed:q,disabled:z,expanded:u,component:d},P=be(M),T=e.jsxs(ve,{as:d,className:H(P.root,i),ref:n,ownerState:M,...a,children:[S&&C&&c!==0?S:null,s]});return e.jsx(X.Provider,{value:D,children:S&&!C&&c!==0?e.jsxs(m.Fragment,{children:[S,T]}):T})}),ge=N(e.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),je=N(e.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Se(t){return F("MuiStepIcon",t)}const Z=A("MuiStepIcon",["root","active","completed","error","text"]);var te;const ye=t=>{const{classes:r,active:n,completed:o,error:l}=t;return W({root:["root",n&&"active",o&&"completed",l&&"error"],text:["text"]},Se,r)},_=w(pe,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,r)=>r.root})(B(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${Z.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${Z.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${Z.error}`]:{color:(t.vars||t).palette.error.main}}))),Ce=w("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,r)=>r.text})(B(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}))),Le=m.forwardRef(function(r,n){const o=V({props:r,name:"MuiStepIcon"}),{active:l=!1,className:s,completed:i=!1,error:d=!1,icon:v,...j}=o,u={...o,active:l,completed:i,error:d},c=ye(u);if(typeof v=="number"||typeof v=="string"){const y=H(s,c.root);return d?e.jsx(_,{as:je,className:y,ref:n,ownerState:u,...j}):i?e.jsx(_,{as:ge,className:y,ref:n,ownerState:u,...j}):e.jsxs(_,{className:y,ref:n,ownerState:u,...j,children:[te||(te=e.jsx("circle",{cx:"12",cy:"12",r:"12"})),e.jsx(Ce,{className:c.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:u,children:v})]})}return v});function we(t){return F("MuiStepLabel",t)}const R=A("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),Ne=t=>{const{classes:r,orientation:n,active:o,completed:l,error:s,disabled:i,alternativeLabel:d}=t;return W({root:["root",n,s&&"error",i&&"disabled",d&&"alternativeLabel"],label:["label",o&&"active",l&&"completed",s&&"error",i&&"disabled",d&&"alternativeLabel"],iconContainer:["iconContainer",o&&"active",l&&"completed",s&&"error",i&&"disabled",d&&"alternativeLabel"],labelContainer:["labelContainer",d&&"alternativeLabel"]},we,r)},Me=w("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation]]}})({display:"flex",alignItems:"center",[`&.${R.alternativeLabel}`]:{flexDirection:"column"},[`&.${R.disabled}`]:{cursor:"default"},variants:[{props:{orientation:"vertical"},style:{textAlign:"left",padding:"8px 0"}}]}),ze=w("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,r)=>r.label})(B(({theme:t})=>({...t.typography.body2,display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${R.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${R.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${R.alternativeLabel}`]:{marginTop:16},[`&.${R.error}`]:{color:(t.vars||t).palette.error.main}}))),ke=w("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,r)=>r.iconContainer})({flexShrink:0,display:"flex",paddingRight:8,[`&.${R.alternativeLabel}`]:{paddingRight:0}}),Re=w("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,r)=>r.labelContainer})(B(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${R.alternativeLabel}`]:{textAlign:"center"}}))),G=m.forwardRef(function(r,n){const o=V({props:r,name:"MuiStepLabel"}),{children:l,className:s,componentsProps:i={},error:d=!1,icon:v,optional:j,slots:u={},slotProps:c={},StepIconComponent:y,StepIconProps:a,...p}=o,{alternativeLabel:S,orientation:C}=m.useContext(Q),{active:L,disabled:h,completed:g,icon:q}=m.useContext(X),z=v||q;let D=y;z&&!D&&(D=Le);const M={...o,active:L,alternativeLabel:S,completed:g,disabled:h,error:d,orientation:C},P=Ne(M),T={slots:u,slotProps:{stepIcon:a,...i,...c}},[ne,U]=ee("label",{elementType:ze,externalForwardedProps:T,ownerState:M}),[Y,se]=ee("stepIcon",{elementType:D,externalForwardedProps:T,ownerState:M});return e.jsxs(Me,{className:H(P.root,s),ref:n,ownerState:M,...p,children:[z||Y?e.jsx(ke,{className:P.iconContainer,ownerState:M,children:e.jsx(Y,{completed:g,active:L,error:d,icon:z,...se})}):null,e.jsxs(Re,{className:P.labelContainer,ownerState:M,children:[l?e.jsx(ne,{...U,className:H(P.label,U==null?void 0:U.className),children:l}):null,j]})]})});G&&(G.muiName="StepLabel");function qe(t){return F("MuiStepConnector",t)}const $=A("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]),Pe=t=>{const{classes:r,orientation:n,alternativeLabel:o,active:l,completed:s,disabled:i}=t,d={root:["root",n,o&&"alternativeLabel",l&&"active",s&&"completed",i&&"disabled"],line:["line",`line${re(n)}`]};return W(d,qe,r)},$e=w("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.completed&&r.completed]}})({flex:"1 1 auto",variants:[{props:{orientation:"vertical"},style:{marginLeft:12}},{props:{alternativeLabel:!0},style:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"}}]}),Ie=w("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.line,r[`line${re(n.orientation)}`]]}})(B(({theme:t})=>{const r=t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600];return{display:"block",borderColor:t.vars?t.vars.palette.StepConnector.border:r,variants:[{props:{orientation:"horizontal"},style:{borderTopStyle:"solid",borderTopWidth:1}},{props:{orientation:"vertical"},style:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}]}})),oe=m.forwardRef(function(r,n){const o=V({props:r,name:"MuiStepConnector"}),{className:l,...s}=o,{alternativeLabel:i,orientation:d="horizontal"}=m.useContext(Q),{active:v,disabled:j,completed:u}=m.useContext(X),c={...o,alternativeLabel:i,orientation:d,active:v,completed:u,disabled:j},y=Pe(c);return e.jsx($e,{className:H(y.root,l),ref:n,ownerState:c,...s,children:e.jsx(Ie,{className:y.line,ownerState:c})})});function He(t){return F("MuiStepper",t)}A("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);const De=t=>{const{orientation:r,nonLinear:n,alternativeLabel:o,classes:l}=t;return W({root:["root",r,n&&"nonLinear",o&&"alternativeLabel"]},He,l)},Te=w("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.nonLinear&&r.nonLinear]}})({display:"flex",variants:[{props:{orientation:"horizontal"},style:{flexDirection:"row",alignItems:"center"}},{props:{orientation:"vertical"},style:{flexDirection:"column"}},{props:{alternativeLabel:!0},style:{alignItems:"flex-start"}}]}),Ae=e.jsx(oe,{}),Fe=m.forwardRef(function(r,n){const o=V({props:r,name:"MuiStepper"}),{activeStep:l=0,alternativeLabel:s=!1,children:i,className:d,component:v="div",connector:j=Ae,nonLinear:u=!1,orientation:c="horizontal",...y}=o,a={...o,nonLinear:u,alternativeLabel:s,orientation:c,component:v},p=De(a),S=m.Children.toArray(i).filter(Boolean),C=S.map((h,g)=>m.cloneElement(h,{index:g,last:g+1===S.length,...h.props})),L=m.useMemo(()=>({activeStep:l,alternativeLabel:s,connector:j,nonLinear:u,orientation:c}),[l,s,j,u,c]);return e.jsx(Q.Provider,{value:L,children:e.jsx(Te,{as:v,ownerState:a,className:H(p.root,d),ref:n,...y,children:C})})}),Ve=N(e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle"),We=N(e.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z"}),"CreditCard"),Be=N(e.jsx("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2m0 4H4V6h16zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41z"}),"CreditScore"),Ue=N(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline"),Ee=N(e.jsx("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"}),"DoneAll"),Oe=N(e.jsx("path",{d:"M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m13.5-9 1.96 2.5H17V9.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"}),"LocalShipping"),Qe=N(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"Person"),Je=N(e.jsx("path",{d:"M12 13V9c0-.55-.45-1-1-1H7V6h5V4H9.5V3h-2v1H6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4v2H5v2h2.5v1h2v-1H11c.55 0 1-.45 1-1m7.59-.48-5.66 5.65-2.83-2.83-1.41 1.42L13.93 21 21 13.93z"}),"PriceCheck"),Ze=N(e.jsx("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7zM12 2l4 4-4 4-1.41-1.41L12.17 7H8V5h4.17l-1.59-1.59z"}),"ShoppingCartCheckout"),_e=N(e.jsx("path",{d:"M19.3 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5M12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07c-.64-2.46-2.4-4.47-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8"}),"TravelExplore");function Ge(t){const r=[[{name:"firstName",lable:"First name",require:!0,type:"text"},{name:"lastName",lable:"Last name",require:!0,type:"text"}],[{name:"phoneNumber",lable:"Phone number",require:!0,type:"text"},{name:"Email",lable:"email",require:!1,type:"email"}]];return e.jsx(b,{children:e.jsx(b,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:t.onSubmit,children:e.jsxs(x,{gap:"10px",children:[e.jsxs(b,{children:[e.jsx(f,{fontSize:"1.5em",children:"Shipping info"}),e.jsx(x,{gap:"20px",children:r.map(n=>e.jsx(x,{direction:{sm:"row"},gap:"10px",children:n.map(o=>e.jsx(O,{fullWidth:!0,type:o.type,name:o.name,size:"small",required:o.require,id:o.name,label:o.lable},k()))},k()))})]}),e.jsxs(b,{children:[e.jsx(f,{fontSize:"1.5em",children:"Address Finder"}),e.jsx(O,{id:"address",size:"small",required:!0,fullWidth:!0,slotProps:{input:{startAdornment:e.jsx(ce,{position:"start",children:e.jsx(_e,{})})}},variant:"outlined"})]}),e.jsx(x,{justifyContent:"center",alignItems:"center",children:e.jsxs(I,{type:"submit",sx:{width:{xs:"100%",sm:"80%"}},color:"error",variant:"outlined",children:[e.jsx(Be,{})," Payment"]})})]})})})}function Ke(t){const[r,n]=m.useState("visa"),o=[[{name:"CardNumber",lable:"Card Number",require:!0,type:"text"}],[{name:"expiryDate",lable:"Expiry Date",require:!0,type:"text"},{name:"cvv",lable:"CVV",require:!0,type:"text"}]],l=[[{name:"firstName",lable:"First name",require:!0,type:"text"},{name:"lastName",lable:"Last name",require:!0,type:"text"}],[{name:"phoneNumber",lable:"Phone number",require:!0,type:"text"},{name:"Email",lable:"email",require:!1,type:"email"}],[{name:"address",lable:"Address",require:!0,type:"text"},{name:"zipcode",lable:"Zipcode",require:!1,type:"text"}]];return e.jsx(b,{children:e.jsx(b,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:t.onSubmit,children:e.jsxs(x,{gap:"10px",children:[e.jsx(b,{children:e.jsxs(x,{gap:"20px",children:[e.jsxs(x,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[e.jsx(f,{fontSize:"1.5em",children:"Payment Method"}),e.jsxs(xe,{size:"small",id:"paymentMethod",name:"paymentMethod",defaultValue:r,onChange:s=>n(s.target.value),children:[e.jsx(J,{value:"visa",children:"Visa/MasterCard"}),e.jsx(J,{value:"paypal",children:"PayPal"}),e.jsx(J,{value:"localBank",children:"LocalBank"})]})]}),r=="visa"&&o.map(s=>e.jsx(x,{direction:{sm:"row"},gap:"10px",children:s.map(i=>e.jsx(O,{fullWidth:!0,type:i.type,name:i.name,size:"small",required:i.require,id:i.name,label:i.lable},k()))},k()))]})}),e.jsx(b,{children:e.jsxs(x,{gap:"20px",children:[e.jsx(f,{fontSize:"1.5em",children:"Billing Address"}),l.map(s=>e.jsx(x,{direction:{sm:"row"},gap:"10px",children:s.map(i=>e.jsx(O,{fullWidth:!0,type:i.type,name:i.name,size:"small",required:i.require,id:i.name,label:i.lable},k()))},k()))]})}),e.jsx(x,{justifyContent:"center",alignItems:"center",children:r=="paypal"?e.jsx(I,{type:"submit",sx:{width:{xs:"100%",sm:"80%"}},color:"error",variant:"outlined",children:"Order and Pay with PayPal"}):e.jsxs(I,{type:"submit",sx:{width:{xs:"100%",sm:"80%"}},color:"error",variant:"outlined",children:[e.jsx(Je,{})," Order and Pay"]})})]})})})}const K=[{label:"Cart",icon:e.jsx(Ze,{})},{label:"Info",icon:e.jsx(Qe,{})},{label:"Payment",icon:e.jsx(We,{})},{label:"Done",icon:e.jsx(Ee,{})}],Xe=w(oe)(({theme:t})=>({[`&.${$.alternativeLabel}`]:{top:22},[`&.${$.active}`]:{[`& .${$.line}`]:{backgroundImage:"linear-gradient(136deg, rgb(0, 0, 0) 0%, rgb(0, 76, 153) 50%, rgb(0, 123, 255) 100%);"}},[`&.${$.completed}`]:{[`& .${$.line}`]:{backgroundImage:"linear-gradient(136deg, rgb(0, 0, 0) 0%, rgb(0, 76, 153) 50%, rgb(0, 123, 255) 100%);"}},[`& .${$.line}`]:{height:3,border:0,backgroundColor:"#eaeaf0",borderRadius:1,...t.applyStyles("dark",{backgroundColor:t.palette.grey[800]})}})),Ye=w("div")(({theme:t})=>({backgroundColor:"#ccc",zIndex:1,color:"#fff",width:40,height:40,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center",...t.applyStyles("dark",{backgroundColor:t.palette.grey[700]}),variants:[{props:({ownerState:r})=>r.active,style:{backgroundImage:"linear-gradient(136deg, rgb(0, 123, 255) 0%, rgb(0, 76, 153) 50%, rgb(0, 0, 0) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"}},{props:({ownerState:r})=>r.completed,style:{backgroundImage:"linear-gradient(136deg, rgb(0, 123, 255) 0%, rgb(0, 76, 153) 50%, rgb(0, 0, 0) 100%)"}}]}));function et(t){const{active:r,completed:n,className:o}=t;return e.jsx(Ye,{ownerState:{completed:n,active:r},className:o,children:K[Number(t.icon)-1].icon})}function Rt(t){const{cart:r,setCart:n}=m.useContext(ae),[o,l]=m.useState(0),[s,i]=m.useState(null),d={maxWidth:"1540px",width:"100%",margin:"auto",padding:{xs:"60px 15px 70px 15px",sm:"60px 15px 70px 15px",md:"50px 30px 70px 30px",lg:"45px 50px 70px 50px"}},v=a=>{if(a){const p=Number(a.quantity),S=Number(a.price),C=parseFloat(a.sale);return p*(S-S*C)}return 0},j=a=>{a<o&&(o<=2&&i(null),l(a))},u=a=>{a.preventDefault();const p=new FormData(a.currentTarget);o<K.length-1&&l(o+1),o==1&&i({shipping:"0",tax:"0.2"}),console.log(p)},c=(a,p,S=0)=>{const C=[],L=Number(S);for(const h of r){let g={...h};if(h.id==a)switch(p){case"add":Number(h.quantity)<99&&(g={...h,quantity:`${Number(h.quantity)+1}`});break;case"remove":Number(h.quantity)>1&&(g={...h,quantity:`${Number(h.quantity)-1}`});break;case"custom":isNaN(L)||(L<1?g={...h,quantity:"1"}:L>99?g={...h,quantity:"99"}:g={...h,quantity:`${L}`});break;case"delete":continue}C.push(g)}localStorage.setItem("shopCart",JSON.stringify(C)),n(C)},y=a=>{const p={borderStyle:"solid",borderColor:"rgba(255, 255, 255, 0.23)",borderRadius:"0"},S=C=>{const L=Number(C.target.value);!isNaN(L)&&c(a.id,"custom",L)};return e.jsxs(x,{direction:"row",alignItems:"center",gap:{xs:"5px",sm:"50px"},children:[e.jsx(b,{width:"100px",children:e.jsx(b,{sx:{height:{xs:"50px",sm:"90px"},maxWidth:"140px",objectFit:"contain"},component:"img",src:a.picture})}),e.jsxs(x,{minHeight:"70px",direction:"column",justifyContent:"space-between",alignItems:"stretch",height:"100%",flex:1,children:[e.jsx(f,{sx:{wordBreak:"break-word"},children:a.name}),e.jsxs(b,{children:[e.jsxs(f,{sx:{color:"#B22222"},children:["$",Number(a.price)-Number(a.price)*Number(a.sale)]}),ie(a.timesale)&&e.jsxs(f,{sx:{textDecoration:"line-through",color:"rgba(211, 211, 211, 0.55)"},children:["$",a.price]})]}),o!=0&&e.jsxs(f,{children:["Quantity: ",a.quantity]})]}),o==0&&e.jsxs(x,{direction:{xs:"column",sm:"row-reverse"},alignItems:"center",sx:{border:"1px solid rgba(255, 255, 255, 0.23)",borderRadius:"4px"},children:[e.jsx(I,{color:"inherit",sx:{...p,borderWidth:{xs:"0 0 1px 0",sm:"0 0 0 1px"}},onClick:()=>c(a.id,"add"),children:e.jsx(me,{})}),e.jsx("input",{className:le.cleanInput,style:{width:"56px",textAlign:"center",padding:"6px 8px 6px 8px"},value:a.quantity,onChange:S}),e.jsx(I,{color:"inherit",sx:{...p,borderWidth:{xs:"1px 0 0 0",sm:"0 1px 0 0"}},onClick:()=>c(a.id,"remove"),children:e.jsx(ue,{})})]}),o==0&&e.jsx(b,{children:e.jsx(de,{onClick:()=>c(a.id,"delete"),children:e.jsx(Ue,{})})})]},a.id)};return e.jsxs(b,{sx:{...d,...t.sx,display:"flex",flexDirection:"column",gap:"30px"},overflow:"auto",children:[e.jsx(b,{sx:{backgroundColor:"rgb(0, 26, 51)"},padding:"10px",borderRadius:"5px",children:e.jsx(Fe,{activeStep:o,alternativeLabel:!0,connector:e.jsx(Xe,{}),children:K.map((a,p)=>e.jsx(fe,{onClick:()=>j(p),children:e.jsx(G,{sx:{cursor:"pointer"},StepIconComponent:et,children:a.label})},p))})}),e.jsx(b,{sx:{backgroundColor:"rgb(0, 26, 51)"},padding:"10px",borderRadius:"5px",children:e.jsxs(x,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",gap:"10px",children:[o==1&&e.jsx(b,{flex:{sm:1,md:2},children:e.jsx(Ge,{onSubmit:u})}),o==2&&e.jsx(b,{flex:{sm:1,md:2},children:e.jsx(Ke,{onSubmit:u})}),o==3&&e.jsxs(b,{flex:{sm:1,md:2},display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[e.jsx(Ve,{sx:{fontSize:50}}),e.jsx(f,{children:"All Done"}),e.jsx(f,{children:"Thank you for choosing us"})]}),e.jsx(E,{orientation:"vertical"}),e.jsx(E,{orientation:"horizontal"}),e.jsxs(b,{width:"100%",flex:{sm:1},children:[e.jsx(f,{fontSize:"1.5em",children:"Order Summary"}),e.jsx(E,{}),r&&r.map(a=>e.jsxs(b,{children:[y(a),e.jsx(E,{sx:{margin:"5px 0 5px 0"}},k())]},k())),e.jsxs(x,{gap:"5px",children:[e.jsxs(x,{direction:"row",justifyContent:"space-between",children:[e.jsxs(f,{children:["Value of ",r.length," item:"]}),e.jsxs(f,{children:["$",r.reduce((a,p)=>a+v(p),0)]})]}),(s==null?void 0:s.shipping)&&e.jsxs(x,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{children:"Shiping fee:"}),e.jsx(f,{children:Number((s==null?void 0:s.shipping)||"0")})]}),(s==null?void 0:s.tax)&&e.jsxs(x,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{children:"Tax fee:"}),e.jsx(f,{children:Number((s==null?void 0:s.tax)||"0")})]}),e.jsxs(x,{direction:"row",justifyContent:"space-between",children:[e.jsx(f,{fontWeight:700,children:"Order Total:"}),e.jsxs(f,{children:["$",(r.reduce((a,p)=>a+v(p),0)+Number((s==null?void 0:s.shipping)||"0")+Number((s==null?void 0:s.tax)||"0")).toFixed(2)]})]}),o==0&&e.jsx(x,{justifyContent:"center",alignItems:"center",children:e.jsxs(I,{sx:{width:"80%"},color:"error",variant:"outlined",onClick:()=>l(o+1),children:[e.jsx(Oe,{})," Shipping"]})})]})]})]})})]})}export{Rt as default};