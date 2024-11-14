import{n as Q,l as X,s as z,G as Y,r as B,j as r,f as M,c as C,h as H,m as V,e as Z,i as W,k as J}from"./index-CwlP_Vb6.js";import{u as _,f as oe}from"./InputBase-C28EpNuM.js";import{B as te,c as D}from"./ButtonBase-4W-GQ8bR.js";import{u as se,b as ae}from"./Portal-DlBtAv44.js";import{g as re,c as U}from"./checkboxClasses-zjEjRyYo.js";import{T as K}from"./Typography-xoXBV13I.js";function ne(e){return Q("PrivateSwitchBase",e)}X("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const le=e=>{const{classes:o,checked:t,disabled:s,edge:a}=e,l={root:["root",t&&"checked",s&&"disabled",a&&`edge${C(a)}`],input:["input"]};return H(l,ne,o)},ce=z(te)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:o})=>e==="start"&&o.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:o})=>e==="end"&&o.size!=="small",style:{marginRight:-12}}]}),ie=z("input",{shouldForwardProp:Y})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),de=B.forwardRef(function(o,t){const{autoFocus:s,checked:a,checkedIcon:l,className:d,defaultChecked:n,disabled:g,disableFocusRipple:v=!1,edge:k=!1,icon:x,id:S,inputProps:j,inputRef:F,name:y,onBlur:b,onChange:h,onFocus:N,readOnly:O,required:P=!1,tabIndex:L,type:u,value:w,...q}=o,[f,I]=se({controlled:a,default:!!n,name:"SwitchBase",state:"checked"}),c=_(),E=p=>{N&&N(p),c&&c.onFocus&&c.onFocus(p)},R=p=>{b&&b(p),c&&c.onBlur&&c.onBlur(p)},m=p=>{if(p.nativeEvent.defaultPrevented)return;const G=p.target.checked;I(G),h&&h(p,G)};let i=g;c&&typeof i>"u"&&(i=c.disabled);const ee=u==="checkbox"||u==="radio",T={...o,checked:f,disabled:i,disableFocusRipple:v,edge:k},A=le(T);return r.jsxs(ce,{component:"span",className:M(A.root,d),centerRipple:!0,focusRipple:!v,disabled:i,tabIndex:null,role:void 0,onFocus:E,onBlur:R,ownerState:T,ref:t,...q,children:[r.jsx(ie,{autoFocus:s,checked:a,defaultChecked:n,className:A.input,disabled:i,id:ee?S:void 0,name:y,onChange:m,readOnly:O,ref:F,required:P,ownerState:T,tabIndex:L,type:u,...u==="checkbox"&&w===void 0?{}:{value:w},...j}),f?l:x]})}),pe=D(r.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ue=D(r.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),me=D(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),be=e=>{const{classes:o,indeterminate:t,color:s,size:a}=e,l={root:["root",t&&"indeterminate",`color${C(s)}`,`size${C(a)}`]},d=H(l,re,o);return{...o,...d}},he=z(de,{shouldForwardProp:e=>Y(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${C(t.size)}`],t.color!=="default"&&o[`color${C(t.color)}`]]}})(V(({theme:e})=>({color:(e.vars||e).palette.text.secondary,variants:[{props:{color:"default",disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:W(e.palette.action.active,e.palette.action.hoverOpacity)}}},...Object.entries(e.palette).filter(J()).map(([o])=>({props:{color:o,disableRipple:!1},style:{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:W(e.palette[o].main,e.palette.action.hoverOpacity)}}})),...Object.entries(e.palette).filter(J()).map(([o])=>({props:{color:o},style:{[`&.${U.checked}, &.${U.indeterminate}`]:{color:(e.vars||e).palette[o].main},[`&.${U.disabled}`]:{color:(e.vars||e).palette.action.disabled}}})),{props:{disableRipple:!1},style:{"&:hover":{"@media (hover: none)":{backgroundColor:"transparent"}}}}]}))),fe=r.jsx(ue,{}),Ce=r.jsx(pe,{}),ge=r.jsx(me,{}),Ie=B.forwardRef(function(o,t){const s=Z({props:o,name:"MuiCheckbox"}),{checkedIcon:a=fe,color:l="primary",icon:d=Ce,indeterminate:n=!1,indeterminateIcon:g=ge,inputProps:v,size:k="medium",disableRipple:x=!1,className:S,...j}=s,F=n?g:d,y=n?g:a,b={...s,disableRipple:x,color:l,indeterminate:n,size:k},h=be(b);return r.jsx(he,{type:"checkbox",inputProps:{"data-indeterminate":n,...v},icon:B.cloneElement(F,{fontSize:F.props.fontSize??k}),checkedIcon:B.cloneElement(y,{fontSize:y.props.fontSize??k}),ownerState:b,ref:t,className:M(h.root,S),disableRipple:x,...j,classes:h})});function ve(e){return Q("MuiFormControlLabel",e)}const $=X("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),ke=e=>{const{classes:o,disabled:t,labelPlacement:s,error:a,required:l}=e,d={root:["root",t&&"disabled",`labelPlacement${C(s)}`,a&&"error",l&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",a&&"error"]};return H(d,ve,o)},xe=z("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${$.label}`]:o.label},o.root,o[`labelPlacement${C(t.labelPlacement)}`]]}})(V(({theme:e})=>({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${$.disabled}`]:{cursor:"default"},[`& .${$.label}`]:{[`&.${$.disabled}`]:{color:(e.vars||e).palette.text.disabled}},variants:[{props:{labelPlacement:"start"},style:{flexDirection:"row-reverse",marginRight:-11}},{props:{labelPlacement:"top"},style:{flexDirection:"column-reverse"}},{props:{labelPlacement:"bottom"},style:{flexDirection:"column"}},{props:({labelPlacement:o})=>o==="start"||o==="top"||o==="bottom",style:{marginLeft:16}}]}))),ye=z("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(V(({theme:e})=>({[`&.${$.error}`]:{color:(e.vars||e).palette.error.main}}))),$e=B.forwardRef(function(o,t){const s=Z({props:o,name:"MuiFormControlLabel"}),{checked:a,className:l,componentsProps:d={},control:n,disabled:g,disableTypography:v,inputRef:k,label:x,labelPlacement:S="end",name:j,onChange:F,required:y,slots:b={},slotProps:h={},value:N,...O}=s,P=_(),L=g??n.props.disabled??(P==null?void 0:P.disabled),u=y??n.props.required,w={disabled:L,required:u};["checked","name","onChange","value","inputRef"].forEach(i=>{typeof n.props[i]>"u"&&typeof s[i]<"u"&&(w[i]=s[i])});const q=oe({props:s,muiFormControl:P,states:["error"]}),f={...s,disabled:L,labelPlacement:S,required:u,error:q.error},I=ke(f),c={slots:b,slotProps:{...d,...h}},[E,R]=ae("typography",{elementType:K,externalForwardedProps:c,ownerState:f});let m=x;return m!=null&&m.type!==K&&!v&&(m=r.jsx(E,{component:"span",...R,className:M(I.label,R==null?void 0:R.className),children:m})),r.jsxs(xe,{className:M(I.root,l),ownerState:f,ref:t,...O,children:[B.cloneElement(n,w),u?r.jsxs("div",{children:[m,r.jsxs(ye,{ownerState:f,"aria-hidden":!0,className:I.asterisk,children:[" ","*"]})]}):m]})});export{Ie as C,$e as F};
