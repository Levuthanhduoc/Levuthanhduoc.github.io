import{l as Jo,n as Qo,s as H,m as q,c as Co,i as Mo,r as s,e as Zo,q as _o,f as L,j as h,h as oe}from"./index-B6mmHA4u.js";import{u as ee}from"./useTheme-CzgnG2xl.js";import{P as $o}from"./Popper-C0SOWPBp.js";import{b as I,a as vo,f as te,i as xo}from"./ButtonBase-CuIIuAh8.js";import{u as re,a as pe}from"./Portal-DNv2eG0u.js";import{u as se}from"./TransitionGroupContext-hVJ43YWk.js";import{g as ne}from"./utils-BDIpzTzJ.js";import{G as Ro}from"./Grow-C0bGKjLZ.js";import{a as N}from"./useSlotProps-BSt2UrPC.js";function ae(t){return Qo("MuiTooltip",t)}const r=Jo("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);function ie(t){return Math.round(t*1e5)/1e5}const le=t=>{const{classes:o,disableInteractive:p,arrow:l,touch:R,placement:g}=t,K={popper:["popper",!p&&"popperInteractive",l&&"popperArrow"],tooltip:["tooltip",l&&"tooltipArrow",R&&"touch",`tooltipPlacement${Co(g.split("-")[0])}`],arrow:["arrow"]};return oe(K,ae,o)},ce=H($o,{name:"MuiTooltip",slot:"Popper",overridesResolver:(t,o)=>{const{ownerState:p}=t;return[o.popper,!p.disableInteractive&&o.popperInteractive,p.arrow&&o.popperArrow,!p.open&&o.popperClose]}})(q(({theme:t})=>({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none",variants:[{props:({ownerState:o})=>!o.disableInteractive,style:{pointerEvents:"auto"}},{props:({open:o})=>!o,style:{pointerEvents:"none"}},{props:({ownerState:o})=>o.arrow,style:{[`&[data-popper-placement*="bottom"] .${r.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${r.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${r.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}},[`&[data-popper-placement*="left"] .${r.arrow}`]:{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}}}},{props:({ownerState:o})=>o.arrow&&!o.isRtl,style:{[`&[data-popper-placement*="right"] .${r.arrow}`]:{left:0,marginLeft:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!!o.isRtl,style:{[`&[data-popper-placement*="right"] .${r.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!o.isRtl,style:{[`&[data-popper-placement*="left"] .${r.arrow}`]:{right:0,marginRight:"-0.71em"}}},{props:({ownerState:o})=>o.arrow&&!!o.isRtl,style:{[`&[data-popper-placement*="left"] .${r.arrow}`]:{left:0,marginLeft:"-0.71em"}}}]}))),me=H("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(t,o)=>{const{ownerState:p}=t;return[o.tooltip,p.touch&&o.touch,p.arrow&&o.tooltipArrow,o[`tooltipPlacement${Co(p.placement.split("-")[0])}`]]}})(q(({theme:t})=>({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:Mo(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium,[`.${r.popper}[data-popper-placement*="left"] &`]:{transformOrigin:"right center"},[`.${r.popper}[data-popper-placement*="right"] &`]:{transformOrigin:"left center"},[`.${r.popper}[data-popper-placement*="top"] &`]:{transformOrigin:"center bottom",marginBottom:"14px"},[`.${r.popper}[data-popper-placement*="bottom"] &`]:{transformOrigin:"center top",marginTop:"14px"},variants:[{props:({ownerState:o})=>o.arrow,style:{position:"relative",margin:0}},{props:({ownerState:o})=>o.touch,style:{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:`${ie(16/14)}em`,fontWeight:t.typography.fontWeightRegular}},{props:({ownerState:o})=>!o.isRtl,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginRight:"14px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginLeft:"14px"}}},{props:({ownerState:o})=>!o.isRtl&&o.touch,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginRight:"24px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginLeft:"24px"}}},{props:({ownerState:o})=>!!o.isRtl,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginLeft:"14px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginRight:"14px"}}},{props:({ownerState:o})=>!!o.isRtl&&o.touch,style:{[`.${r.popper}[data-popper-placement*="left"] &`]:{marginLeft:"24px"},[`.${r.popper}[data-popper-placement*="right"] &`]:{marginRight:"24px"}}},{props:({ownerState:o})=>o.touch,style:{[`.${r.popper}[data-popper-placement*="top"] &`]:{marginBottom:"24px"}}},{props:({ownerState:o})=>o.touch,style:{[`.${r.popper}[data-popper-placement*="bottom"] &`]:{marginTop:"24px"}}}]}))),ue=H("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(t,o)=>o.arrow})(q(({theme:t})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:Mo(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let k=!1;const Po=new te;let x={x:0,y:0};function A(t,o){return(p,...l)=>{o&&o(p,...l),t(p,...l)}}const xe=s.forwardRef(function(o,p){var wo,yo,bo;const l=Zo({props:o,name:"MuiTooltip"}),{arrow:R=!1,children:g,classes:K,components:P={},componentsProps:u={},describeChild:Oo=!1,disableFocusListener:Eo=!1,disableHoverListener:X=!1,disableInteractive:So=!1,disableTouchListener:Lo=!1,enterDelay:Y=100,enterNextDelay:J=0,enterTouchDelay:Io=700,followCursor:F=!1,id:No,leaveDelay:Q=0,leaveTouchDelay:ko=1500,onClose:Z,onOpen:_,open:Ao,placement:oo="bottom",PopperComponent:eo,PopperProps:c={},slotProps:d={},slots:C={},title:f,TransitionComponent:Fo=Ro,TransitionProps:Wo,...to}=l,m=s.isValidElement(g)?g:h.jsx("span",{children:g}),ro=ee(),Bo=_o(),[T,po]=s.useState(),[W,Uo]=s.useState(null),M=s.useRef(!1),B=So||F,so=I(),U=I(),$=I(),no=I(),[jo,ao]=re({controlled:Ao,default:!1,name:"Tooltip",state:"open"});let i=jo;const j=pe(No),w=s.useRef(),O=vo(()=>{w.current!==void 0&&(document.body.style.WebkitUserSelect=w.current,w.current=void 0),no.clear()});s.useEffect(()=>O,[O]);const io=e=>{Po.clear(),k=!0,ao(!0),_&&!i&&_(e)},E=vo(e=>{Po.start(800+Q,()=>{k=!1}),ao(!1),Z&&i&&Z(e),so.start(ro.transitions.duration.shortest,()=>{M.current=!1})}),S=e=>{M.current&&e.type!=="touchstart"||(T&&T.removeAttribute("title"),U.clear(),$.clear(),Y||k&&J?U.start(k?J:Y,()=>{io(e)}):io(e))},D=e=>{U.clear(),$.start(Q,()=>{E(e)})},[,lo]=s.useState(!1),co=e=>{xo(e.target)||(lo(!1),D(e))},mo=e=>{T||po(e.currentTarget),xo(e.target)&&(lo(!0),S(e))},uo=e=>{M.current=!0;const a=m.props;a.onTouchStart&&a.onTouchStart(e)},Do=e=>{uo(e),$.clear(),so.clear(),O(),w.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",no.start(Io,()=>{document.body.style.WebkitUserSelect=w.current,S(e)})},zo=e=>{m.props.onTouchEnd&&m.props.onTouchEnd(e),O(),$.start(ko,()=>{E(e)})};s.useEffect(()=>{if(!i)return;function e(a){a.key==="Escape"&&E(a)}return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[E,i]);const Vo=se(ne(m),po,p);!f&&f!==0&&(i=!1);const z=s.useRef(),Go=e=>{const a=m.props;a.onMouseMove&&a.onMouseMove(e),x={x:e.clientX,y:e.clientY},z.current&&z.current.update()},y={},V=typeof f=="string";Oo?(y.title=!i&&V&&!X?f:null,y["aria-describedby"]=i?j:null):(y["aria-label"]=V?f:null,y["aria-labelledby"]=i&&!V?j:null);const n={...y,...to,...m.props,className:L(to.className,m.props.className),onTouchStart:uo,ref:Vo,...F?{onMouseMove:Go}:{}},b={};Lo||(n.onTouchStart=Do,n.onTouchEnd=zo),X||(n.onMouseOver=A(S,n.onMouseOver),n.onMouseLeave=A(D,n.onMouseLeave),B||(b.onMouseOver=S,b.onMouseLeave=D)),Eo||(n.onFocus=A(mo,n.onFocus),n.onBlur=A(co,n.onBlur),B||(b.onFocus=mo,b.onBlur=co));const Ho=s.useMemo(()=>{var a;let e=[{name:"arrow",enabled:!!W,options:{element:W,padding:4}}];return(a=c.popperOptions)!=null&&a.modifiers&&(e=e.concat(c.popperOptions.modifiers)),{...c.popperOptions,modifiers:e}},[W,c]),v={...l,isRtl:Bo,arrow:R,disableInteractive:B,placement:oo,PopperComponentProp:eo,touch:M.current},G=le(v),fo=C.popper??P.Popper??ce,ho=C.transition??P.Transition??Fo??Ro,go=C.tooltip??P.Tooltip??me,To=C.arrow??P.Arrow??ue,qo=N(fo,{...c,...d.popper??u.popper,className:L(G.popper,c==null?void 0:c.className,(wo=d.popper??u.popper)==null?void 0:wo.className)},v),Ko=N(ho,{...Wo,...d.transition??u.transition},v),Xo=N(go,{...d.tooltip??u.tooltip,className:L(G.tooltip,(yo=d.tooltip??u.tooltip)==null?void 0:yo.className)},v),Yo=N(To,{...d.arrow??u.arrow,className:L(G.arrow,(bo=d.arrow??u.arrow)==null?void 0:bo.className)},v);return h.jsxs(s.Fragment,{children:[s.cloneElement(m,n),h.jsx(fo,{as:eo??$o,placement:oo,anchorEl:F?{getBoundingClientRect:()=>({top:x.y,left:x.x,right:x.x,bottom:x.y,width:0,height:0})}:T,popperRef:z,open:T?i:!1,id:j,transition:!0,...b,...qo,popperOptions:Ho,children:({TransitionProps:e})=>h.jsx(ho,{timeout:ro.transitions.duration.shorter,...e,...Ko,children:h.jsxs(go,{...Xo,children:[f,R?h.jsx(To,{...Yo,ref:Uo}):null]})})})]})});export{xe as T};
