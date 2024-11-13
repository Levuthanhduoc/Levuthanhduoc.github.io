import{s as F,c as Rt,m as ct,r as i,e as dt,f as k,j as S,h as ut,l as Vt,n as qt,q as Mt}from"./index-Dy-TX3gv.js";import{t as x,g as Gt}from"./tabClasses-yx9TPoID.js";import{B as Wt,u as Jt,a as at}from"./ButtonBase-CHdZHK7o.js";import"./react-is.production.min-DUDD-a5e.js";import{u as Qt,o as Zt}from"./useTheme-C5fwKPZq.js";import{d as kt,o as Pt}from"./ownerWindow-1p4bbeQI.js";import{t as it,g as _t}from"./tabsClasses-CK8p6wuy.js";import{u as tt}from"./useSlotProps-Cb_3iaYJ.js";import{a as te,K as ee}from"./KeyboardArrowRight-JitJgFI4.js";const oe=e=>{const{classes:t,textColor:r,fullWidth:c,wrapped:s,icon:d,label:f,selected:b,disabled:p}=e,m={root:["root",d&&f&&"labelIcon",`textColor${Rt(r)}`,c&&"fullWidth",s&&"wrapped",b&&"selected",p&&"disabled"],icon:["iconWrapper","icon"]};return ut(m,Gt,t)},le=F(Wt,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.label&&r.icon&&t.labelIcon,t[`textColor${Rt(r.textColor)}`],r.fullWidth&&t.fullWidth,r.wrapped&&t.wrapped,{[`& .${x.iconWrapper}`]:t.iconWrapper},{[`& .${x.icon}`]:t.icon}]}})(ct(({theme:e})=>({...e.typography.button,maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center",lineHeight:1.25,variants:[{props:({ownerState:t})=>t.label&&(t.iconPosition==="top"||t.iconPosition==="bottom"),style:{flexDirection:"column"}},{props:({ownerState:t})=>t.label&&t.iconPosition!=="top"&&t.iconPosition!=="bottom",style:{flexDirection:"row"}},{props:({ownerState:t})=>t.icon&&t.label,style:{minHeight:72,paddingTop:9,paddingBottom:9}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="top",style:{[`& > .${x.icon}`]:{marginBottom:6}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="bottom",style:{[`& > .${x.icon}`]:{marginTop:6}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="start",style:{[`& > .${x.icon}`]:{marginRight:e.spacing(1)}}},{props:({ownerState:t,iconPosition:r})=>t.icon&&t.label&&r==="end",style:{[`& > .${x.icon}`]:{marginLeft:e.spacing(1)}}},{props:{textColor:"inherit"},style:{color:"inherit",opacity:.6,[`&.${x.selected}`]:{opacity:1},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}}},{props:{textColor:"primary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${x.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${x.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:{textColor:"secondary"},style:{color:(e.vars||e).palette.text.secondary,[`&.${x.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${x.disabled}`]:{color:(e.vars||e).palette.text.disabled}}},{props:({ownerState:t})=>t.fullWidth,style:{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"}},{props:({ownerState:t})=>t.wrapped,style:{fontSize:e.typography.pxToRem(12)}}]}))),Re=i.forwardRef(function(t,r){const c=dt({props:t,name:"MuiTab"}),{className:s,disabled:d=!1,disableFocusRipple:f=!1,fullWidth:b,icon:p,iconPosition:m="top",indicator:v,label:y,onChange:h,onClick:B,onFocus:P,selected:C,selectionFollowsFocus:g,textColor:j="inherit",value:E,wrapped:et=!1,...H}=c,O={...c,disabled:d,disableFocusRipple:f,selected:C,icon:!!p,iconPosition:m,label:!!y,fullWidth:b,textColor:j,wrapped:et},D=oe(O),z=p&&y&&i.isValidElement(p)?i.cloneElement(p,{className:k(D.icon,p.props.className)}):p,q=R=>{!C&&h&&h(R,E),B&&B(R)},X=R=>{g&&!C&&h&&h(R,E),P&&P(R)};return S.jsxs(le,{focusRipple:!f,className:k(D.root,s),ref:r,role:"tab","aria-selected":C,disabled:d,onClick:q,onFocus:X,ownerState:O,tabIndex:C?0:-1,...H,children:[m==="top"||m==="start"?S.jsxs(i.Fragment,{children:[z,y]}):S.jsxs(i.Fragment,{children:[y,z]}),v]})});function re(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}function ne(e,t,r,c={},s=()=>{}){const{ease:d=re,duration:f=300}=c;let b=null;const p=t[e];let m=!1;const v=()=>{m=!0},y=h=>{if(m){s(new Error("Animation cancelled"));return}b===null&&(b=h);const B=Math.min(1,(h-b)/f);if(t[e]=d(B)*(r-p)+p,B>=1){requestAnimationFrame(()=>{s(null)});return}requestAnimationFrame(y)};return p===r?(s(new Error("Element already at target position")),v):(requestAnimationFrame(y),v)}const se={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};function ae(e){const{onChange:t,...r}=e,c=i.useRef(),s=i.useRef(null),d=()=>{c.current=s.current.offsetHeight-s.current.clientHeight};return Jt(()=>{const f=kt(()=>{const p=c.current;d(),p!==c.current&&t(c.current)}),b=Pt(s.current);return b.addEventListener("resize",f),()=>{f.clear(),b.removeEventListener("resize",f)}},[t]),i.useEffect(()=>{d(),t(c.current)},[t]),S.jsx("div",{style:se,ref:s,...r})}function ie(e){return qt("MuiTabScrollButton",e)}const ce=Vt("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),de=e=>{const{classes:t,orientation:r,disabled:c}=e;return ut({root:["root",r,c&&"disabled"]},ie,t)},ue=F(Wt,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.orientation&&t[r.orientation]]}})({width:40,flexShrink:0,opacity:.8,[`&.${ce.disabled}`]:{opacity:0},variants:[{props:{orientation:"vertical"},style:{width:"100%",height:40,"& svg":{transform:"var(--TabScrollButton-svgRotate)"}}}]}),pe=i.forwardRef(function(t,r){const c=dt({props:t,name:"MuiTabScrollButton"}),{className:s,slots:d={},slotProps:f={},direction:b,orientation:p,disabled:m,...v}=c,y=Mt(),h={isRtl:y,...c},B=de(h),P=d.StartScrollButtonIcon??te,C=d.EndScrollButtonIcon??ee,g=tt({elementType:P,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:h}),j=tt({elementType:C,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:h});return S.jsx(ue,{component:"div",className:k(B.root,s),ref:r,role:null,ownerState:h,tabIndex:null,...v,style:{...v.style,...p==="vertical"&&{"--TabScrollButton-svgRotate":`rotate(${y?-90:90}deg)`}},children:b==="left"?S.jsx(P,{...g}):S.jsx(C,{...j})})}),It=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,Tt=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,_=(e,t,r)=>{let c=!1,s=r(e,t);for(;s;){if(s===e.firstChild){if(c)return;c=!0}const d=s.disabled||s.getAttribute("aria-disabled")==="true";if(!s.hasAttribute("tabindex")||d)s=r(e,s);else{s.focus();return}}},fe=e=>{const{vertical:t,fixed:r,hideScrollbar:c,scrollableX:s,scrollableY:d,centered:f,scrollButtonsHideMobile:b,classes:p}=e;return ut({root:["root",t&&"vertical"],scroller:["scroller",r&&"fixed",c&&"hideScrollbar",s&&"scrollableX",d&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",f&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",b&&"scrollButtonsHideMobile"],scrollableX:[s&&"scrollableX"],hideScrollbar:[c&&"hideScrollbar"]},_t,p)},be=F("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[{[`& .${it.scrollButtons}`]:t.scrollButtons},{[`& .${it.scrollButtons}`]:r.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,r.vertical&&t.vertical]}})(ct(({theme:e})=>({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex",variants:[{props:({ownerState:t})=>t.vertical,style:{flexDirection:"column"}},{props:({ownerState:t})=>t.scrollButtonsHideMobile,style:{[`& .${it.scrollButtons}`]:{[e.breakpoints.down("sm")]:{display:"none"}}}}]}))),he=F("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.scroller,r.fixed&&t.fixed,r.hideScrollbar&&t.hideScrollbar,r.scrollableX&&t.scrollableX,r.scrollableY&&t.scrollableY]}})({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap",variants:[{props:({ownerState:e})=>e.fixed,style:{overflowX:"hidden",width:"100%"}},{props:({ownerState:e})=>e.hideScrollbar,style:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}},{props:({ownerState:e})=>e.scrollableX,style:{overflowX:"auto",overflowY:"hidden"}},{props:({ownerState:e})=>e.scrollableY,style:{overflowY:"auto",overflowX:"hidden"}}]}),Se=F("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.flexContainer,r.vertical&&t.flexContainerVertical,r.centered&&t.centered]}})({display:"flex",variants:[{props:({ownerState:e})=>e.vertical,style:{flexDirection:"column"}},{props:({ownerState:e})=>e.centered,style:{justifyContent:"center"}}]}),me=F("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})(ct(({theme:e})=>({position:"absolute",height:2,bottom:0,width:"100%",transition:e.transitions.create(),variants:[{props:{indicatorColor:"primary"},style:{backgroundColor:(e.vars||e).palette.primary.main}},{props:{indicatorColor:"secondary"},style:{backgroundColor:(e.vars||e).palette.secondary.main}},{props:({ownerState:t})=>t.vertical,style:{height:"100%",width:2,right:0}}]}))),ve=F(ae)({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),Et={},Me=i.forwardRef(function(t,r){const c=dt({props:t,name:"MuiTabs"}),s=Qt(),d=Mt(),{"aria-label":f,"aria-labelledby":b,action:p,centered:m=!1,children:v,className:y,component:h="div",allowScrollButtonsMobile:B=!1,indicatorColor:P="primary",onChange:C,orientation:g="horizontal",ScrollButtonComponent:j=pe,scrollButtons:E="auto",selectionFollowsFocus:et,slots:H={},slotProps:O={},TabIndicatorProps:D={},TabScrollButtonProps:z={},textColor:q="primary",value:X,variant:R="standard",visibleScrollbar:ot=!1,...zt}=c,I=R==="scrollable",w=g==="vertical",U=w?"scrollTop":"scrollLeft",G=w?"top":"left",J=w?"bottom":"right",lt=w?"clientHeight":"clientWidth",Y=w?"height":"width",$={...c,component:h,allowScrollButtonsMobile:B,indicatorColor:P,orientation:g,vertical:w,scrollButtons:E,textColor:q,variant:R,visibleScrollbar:ot,fixed:!I,hideScrollbar:I&&!ot,scrollableX:I&&!w,scrollableY:I&&w,centered:m&&!I,scrollButtonsHideMobile:!B},W=fe($),$t=tt({elementType:H.StartScrollButtonIcon,externalSlotProps:O.startScrollButtonIcon,ownerState:$}),At=tt({elementType:H.EndScrollButtonIcon,externalSlotProps:O.endScrollButtonIcon,ownerState:$}),[pt,Lt]=i.useState(!1),[A,ft]=i.useState(Et),[bt,Nt]=i.useState(!1),[ht,Ft]=i.useState(!1),[St,jt]=i.useState(!1),[mt,Ht]=i.useState({overflow:"hidden",scrollbarWidth:0}),vt=new Map,M=i.useRef(null),L=i.useRef(null),yt=()=>{const o=M.current;let l;if(o){const n=o.getBoundingClientRect();l={clientWidth:o.clientWidth,scrollLeft:o.scrollLeft,scrollTop:o.scrollTop,scrollWidth:o.scrollWidth,top:n.top,bottom:n.bottom,left:n.left,right:n.right}}let a;if(o&&X!==!1){const n=L.current.children;if(n.length>0){const u=n[vt.get(X)];a=u?u.getBoundingClientRect():null}}return{tabsMeta:l,tabMeta:a}},K=at(()=>{const{tabsMeta:o,tabMeta:l}=yt();let a=0,n;w?(n="top",l&&o&&(a=l.top-o.top+o.scrollTop)):(n=d?"right":"left",l&&o&&(a=(d?-1:1)*(l[n]-o[n]+o.scrollLeft)));const u={[n]:a,[Y]:l?l[Y]:0};if(typeof A[n]!="number"||typeof A[Y]!="number")ft(u);else{const T=Math.abs(A[n]-u[n]),N=Math.abs(A[Y]-u[Y]);(T>=1||N>=1)&&ft(u)}}),rt=(o,{animation:l=!0}={})=>{l?ne(U,M.current,o,{duration:s.transitions.duration.standard}):M.current[U]=o},gt=o=>{let l=M.current[U];w?l+=o:l+=o*(d?-1:1),rt(l)},xt=()=>{const o=M.current[lt];let l=0;const a=Array.from(L.current.children);for(let n=0;n<a.length;n+=1){const u=a[n];if(l+u[lt]>o){n===0&&(l=o);break}l+=u[lt]}return l},Dt=()=>{gt(-1*xt())},Xt=()=>{gt(xt())},Ot=i.useCallback(o=>{Ht({overflow:null,scrollbarWidth:o})},[]),Ut=()=>{const o={};o.scrollbarSizeListener=I?S.jsx(ve,{onChange:Ot,className:k(W.scrollableX,W.hideScrollbar)}):null;const a=I&&(E==="auto"&&(bt||ht)||E===!0);return o.scrollButtonStart=a?S.jsx(j,{slots:{StartScrollButtonIcon:H.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:$t},orientation:g,direction:d?"right":"left",onClick:Dt,disabled:!bt,...z,className:k(W.scrollButtons,z.className)}):null,o.scrollButtonEnd=a?S.jsx(j,{slots:{EndScrollButtonIcon:H.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:At},orientation:g,direction:d?"left":"right",onClick:Xt,disabled:!ht,...z,className:k(W.scrollButtons,z.className)}):null,o},wt=at(o=>{const{tabsMeta:l,tabMeta:a}=yt();if(!(!a||!l)){if(a[G]<l[G]){const n=l[U]+(a[G]-l[G]);rt(n,{animation:o})}else if(a[J]>l[J]){const n=l[U]+(a[J]-l[J]);rt(n,{animation:o})}}}),Q=at(()=>{I&&E!==!1&&jt(!St)});i.useEffect(()=>{const o=kt(()=>{M.current&&K()});let l;const a=T=>{T.forEach(N=>{N.removedNodes.forEach(V=>{l==null||l.unobserve(V)}),N.addedNodes.forEach(V=>{l==null||l.observe(V)})}),o(),Q()},n=Pt(M.current);n.addEventListener("resize",o);let u;return typeof ResizeObserver<"u"&&(l=new ResizeObserver(o),Array.from(L.current.children).forEach(T=>{l.observe(T)})),typeof MutationObserver<"u"&&(u=new MutationObserver(a),u.observe(L.current,{childList:!0})),()=>{o.clear(),n.removeEventListener("resize",o),u==null||u.disconnect(),l==null||l.disconnect()}},[K,Q]),i.useEffect(()=>{const o=Array.from(L.current.children),l=o.length;if(typeof IntersectionObserver<"u"&&l>0&&I&&E!==!1){const a=o[0],n=o[l-1],u={root:M.current,threshold:.99},T=st=>{Nt(!st[0].isIntersecting)},N=new IntersectionObserver(T,u);N.observe(a);const V=st=>{Ft(!st[0].isIntersecting)},Ct=new IntersectionObserver(V,u);return Ct.observe(n),()=>{N.disconnect(),Ct.disconnect()}}},[I,E,St,v==null?void 0:v.length]),i.useEffect(()=>{Lt(!0)},[]),i.useEffect(()=>{K()}),i.useEffect(()=>{wt(Et!==A)},[wt,A]),i.useImperativeHandle(p,()=>({updateIndicator:K,updateScrollButtons:Q}),[K,Q]);const Bt=S.jsx(me,{...D,className:k(W.indicator,D.className),ownerState:$,style:{...A,...D.style}});let Z=0;const Yt=i.Children.map(v,o=>{if(!i.isValidElement(o))return null;const l=o.props.value===void 0?Z:o.props.value;vt.set(l,Z);const a=l===X;return Z+=1,i.cloneElement(o,{fullWidth:R==="fullWidth",indicator:a&&!pt&&Bt,selected:a,selectionFollowsFocus:et,onChange:C,textColor:q,value:l,...Z===1&&X===!1&&!o.props.tabIndex?{tabIndex:0}:{}})}),Kt=o=>{const l=L.current,a=Zt(l).activeElement;if(a.getAttribute("role")!=="tab")return;let u=g==="horizontal"?"ArrowLeft":"ArrowUp",T=g==="horizontal"?"ArrowRight":"ArrowDown";switch(g==="horizontal"&&d&&(u="ArrowRight",T="ArrowLeft"),o.key){case u:o.preventDefault(),_(l,a,Tt);break;case T:o.preventDefault(),_(l,a,It);break;case"Home":o.preventDefault(),_(l,null,It);break;case"End":o.preventDefault(),_(l,null,Tt);break}},nt=Ut();return S.jsxs(be,{className:k(W.root,y),ownerState:$,ref:r,as:h,...zt,children:[nt.scrollButtonStart,nt.scrollbarSizeListener,S.jsxs(he,{className:W.scroller,ownerState:$,style:{overflow:mt.overflow,[w?`margin${d?"Left":"Right"}`:"marginBottom"]:ot?void 0:-mt.scrollbarWidth},ref:M,children:[S.jsx(Se,{"aria-label":f,"aria-labelledby":b,"aria-orientation":g==="vertical"?"vertical":null,className:W.flexContainer,ownerState:$,onKeyDown:Kt,ref:L,role:"tablist",children:Yt}),pt&&Bt]}),nt.scrollButtonEnd]})});export{Me as T,Re as a};
