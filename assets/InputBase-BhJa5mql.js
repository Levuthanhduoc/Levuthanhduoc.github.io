import{r,j as S,l as Fe,n as He,s as he,m as be,e as Me,f as ue,c as J,h as We,aj as Te,ab as Oe}from"./index-DM2OrA4B.js";import{u as ye}from"./TransitionGroupContext-BcqBKjiD.js";import{u as Q}from"./ButtonBase-BE6pjX2P.js";import{o as de,d as Le}from"./ownerWindow-Dmb1eM3V.js";function tt(e,t){var n,i,a;return r.isValidElement(e)&&t.indexOf(e.type.muiName??((a=(i=(n=e.type)==null?void 0:n._payload)==null?void 0:i.value)==null?void 0:a.muiName))!==-1}function N(e){return parseInt(e,10)||0}const Ne={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Pe(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflowing}const Ve=r.forwardRef(function(t,n){const{onChange:i,maxRows:a,minRows:c=1,style:R,value:z,...M}=t,{current:v}=r.useRef(z!=null),m=r.useRef(null),A=ye(n,m),h=r.useRef(null),w=r.useRef(null),y=r.useCallback(()=>{const u=m.current,o=de(u).getComputedStyle(u);if(o.width==="0px")return{outerHeightStyle:0,overflowing:!1};const p=w.current;p.style.width=o.width,p.value=u.value||t.placeholder||"x",p.value.slice(-1)===`
`&&(p.value+=" ");const k=o.boxSizing,x=N(o.paddingBottom)+N(o.paddingTop),V=N(o.borderBottomWidth)+N(o.borderTopWidth),B=p.scrollHeight;p.value="x";const E=p.scrollHeight;let d=B;c&&(d=Math.max(Number(c)*E,d)),a&&(d=Math.min(Number(a)*E,d)),d=Math.max(d,E);const W=d+(k==="border-box"?x+V:0),T=Math.abs(d-B)<=1;return{outerHeightStyle:W,overflowing:T}},[a,c,t.placeholder]),C=r.useCallback(()=>{const u=y();if(Pe(u))return;const g=u.outerHeightStyle,o=m.current;h.current!==g&&(h.current=g,o.style.height=`${g}px`),o.style.overflow=u.overflowing?"hidden":""},[y]);Q(()=>{const u=()=>{C()};let g;const o=Le(u),p=m.current,k=de(p);k.addEventListener("resize",o);let x;return typeof ResizeObserver<"u"&&(x=new ResizeObserver(u),x.observe(p)),()=>{o.clear(),cancelAnimationFrame(g),k.removeEventListener("resize",o),x&&x.disconnect()}},[y,C]),Q(()=>{C()});const P=u=>{v||C(),i&&i(u)};return S.jsxs(r.Fragment,{children:[S.jsx("textarea",{value:z,onChange:P,ref:A,rows:c,style:R,...M}),S.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:w,tabIndex:-1,style:{...Ne.shadow,...R,paddingTop:0,paddingBottom:0}})]})});function ce(e){return typeof e=="string"}function $e({props:e,states:t,muiFormControl:n}){return t.reduce((i,a)=>(i[a]=e[a],n&&typeof e[a]>"u"&&(i[a]=n[a]),i),{})}const ge=r.createContext(void 0);function je(){return r.useContext(ge)}function pe(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function De(e,t=!1){return e&&(pe(e.value)&&e.value!==""||t&&pe(e.defaultValue)&&e.defaultValue!=="")}function nt(e){return e.startAdornment}function Ue(e){return He("MuiInputBase",e)}const X=Fe("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);var fe;const Ge=(e,t)=>{const{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,n.size==="small"&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${J(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},qe=(e,t)=>{const{ownerState:n}=e;return[t.input,n.size==="small"&&t.inputSizeSmall,n.multiline&&t.inputMultiline,n.type==="search"&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},Ke=e=>{const{classes:t,color:n,disabled:i,error:a,endAdornment:c,focused:R,formControl:z,fullWidth:M,hiddenLabel:v,multiline:m,readOnly:A,size:h,startAdornment:w,type:y}=e,C={root:["root",`color${J(n)}`,i&&"disabled",a&&"error",M&&"fullWidth",R&&"focused",z&&"formControl",h&&h!=="medium"&&`size${J(h)}`,m&&"multiline",w&&"adornedStart",c&&"adornedEnd",v&&"hiddenLabel",A&&"readOnly"],input:["input",i&&"disabled",y==="search"&&"inputTypeSearch",m&&"inputMultiline",h==="small"&&"inputSizeSmall",v&&"inputHiddenLabel",w&&"inputAdornedStart",c&&"inputAdornedEnd",A&&"readOnly"]};return We(C,Ue,t)},_e=he("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Ge})(be(({theme:e})=>({...e.typography.body1,color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${X.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"},variants:[{props:({ownerState:t})=>t.multiline,style:{padding:"4px 0 5px"}},{props:({ownerState:t,size:n})=>t.multiline&&n==="small",style:{paddingTop:1}},{props:({ownerState:t})=>t.fullWidth,style:{width:"100%"}}]}))),Ze=he("input",{name:"MuiInputBase",slot:"Input",overridesResolver:qe})(be(({theme:e})=>{const t=e.palette.mode==="light",n={color:"currentColor",...e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5},transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})},i={opacity:"0 !important"},a=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:t?.42:.5};return{font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${X.formControl} &`]:{"&::-webkit-input-placeholder":i,"&::-moz-placeholder":i,"&::-ms-input-placeholder":i,"&:focus::-webkit-input-placeholder":a,"&:focus::-moz-placeholder":a,"&:focus::-ms-input-placeholder":a},[`&.${X.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},variants:[{props:({ownerState:c})=>!c.disableInjectingGlobalStyles,style:{animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}}},{props:{size:"small"},style:{paddingTop:1}},{props:({ownerState:c})=>c.multiline,style:{height:"auto",resize:"none",padding:0,paddingTop:0}},{props:{type:"search"},style:{MozAppearance:"textfield"}}]}})),me=Te({"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}),ot=r.forwardRef(function(t,n){const i=Me({props:t,name:"MuiInputBase"}),{"aria-describedby":a,autoComplete:c,autoFocus:R,className:z,color:M,components:v={},componentsProps:m={},defaultValue:A,disabled:h,disableInjectingGlobalStyles:w,endAdornment:y,error:C,fullWidth:P=!1,id:u,inputComponent:g="input",inputProps:o={},inputRef:p,margin:k,maxRows:x,minRows:V,multiline:B=!1,name:E,onBlur:d,onChange:W,onClick:T,onFocus:Y,onKeyDown:xe,onKeyUp:Se,placeholder:ve,readOnly:$,renderSuffix:ee,rows:O,size:Je,slotProps:te={},slots:ne={},startAdornment:F,type:oe="text",value:we,...Ce}=i,L=o.value!=null?o.value:we,{current:j}=r.useRef(L!=null),I=r.useRef(),Re=r.useCallback(l=>{},[]),ze=ye(I,p,o.ref,Re),[D,U]=r.useState(!1),s=je(),f=$e({props:i,muiFormControl:s,states:["color","disabled","error","hiddenLabel","size","required","filled"]});f.focused=s?s.focused:D,r.useEffect(()=>{!s&&h&&D&&(U(!1),d&&d())},[s,h,D,d]);const G=s&&s.onFilled,q=s&&s.onEmpty,H=r.useCallback(l=>{De(l)?G&&G():q&&q()},[G,q]);Q(()=>{j&&H({value:L})},[L,H,j]);const Ae=l=>{Y&&Y(l),o.onFocus&&o.onFocus(l),s&&s.onFocus?s.onFocus(l):U(!0)},Ie=l=>{d&&d(l),o.onBlur&&o.onBlur(l),s&&s.onBlur?s.onBlur(l):U(!1)},ke=(l,...le)=>{if(!j){const se=l.target||I.current;if(se==null)throw new Error(Oe(1));H({value:se.value})}o.onChange&&o.onChange(l,...le),W&&W(l,...le)};r.useEffect(()=>{H(I.current)},[]);const Be=l=>{I.current&&l.currentTarget===l.target&&I.current.focus(),T&&T(l)};let K=g,b=o;B&&K==="input"&&(O?b={type:void 0,minRows:O,maxRows:O,...b}:b={type:void 0,maxRows:x,minRows:V,...b},K=Ve);const Ee=l=>{H(l.animationName==="mui-auto-fill-cancel"?I.current:{value:"x"})};r.useEffect(()=>{s&&s.setAdornedStart(!!F)},[s,F]);const _={...i,color:f.color||"primary",disabled:f.disabled,endAdornment:y,error:f.error,focused:f.focused,formControl:s,fullWidth:P,hiddenLabel:f.hiddenLabel,multiline:B,size:f.size,startAdornment:F,type:oe},re=Ke(_),ie=ne.root||v.Root||_e,Z=te.root||m.root||{},ae=ne.input||v.Input||Ze;return b={...b,...te.input??m.input},S.jsxs(r.Fragment,{children:[!w&&typeof me=="function"&&(fe||(fe=S.jsx(me,{}))),S.jsxs(ie,{...Z,ref:n,onClick:Be,...Ce,...!ce(ie)&&{ownerState:{..._,...Z.ownerState}},className:ue(re.root,Z.className,z,$&&"MuiInputBase-readOnly"),children:[F,S.jsx(ge.Provider,{value:null,children:S.jsx(ae,{"aria-invalid":f.error,"aria-describedby":a,autoComplete:c,autoFocus:R,defaultValue:A,disabled:f.disabled,id:u,onAnimationStart:Ee,name:E,placeholder:ve,readOnly:$,required:f.required,rows:O,value:L,onKeyDown:xe,onKeyUp:Se,type:oe,...b,...!ce(ae)&&{as:K,ownerState:{..._,...b.ownerState}},ref:ze,className:ue(re.input,b.className,$&&"MuiInputBase-readOnly"),onBlur:Ie,onChange:ke,onFocus:Ae})}),y,ee?ee({...f,startAdornment:F}):null]})]})});export{ge as F,ot as I,ce as a,X as b,_e as c,Ze as d,qe as e,$e as f,nt as g,De as h,tt as i,Ge as r,je as u};