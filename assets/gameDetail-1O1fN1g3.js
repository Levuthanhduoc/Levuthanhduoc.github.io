import{j as t,r as i,X as d}from"./index-B6mmHA4u.js";import{B as u}from"./breadcrumb-DbK4h7A-.js";import{f}from"./fecthData-CezMaoup.js";import{g}from"./richTextForm-BSV9hO8C.js";import{B as e}from"./Box-0kQeHJeA.js";import{I as v}from"./IconButton-fWfbYuXb.js";import{c as a}from"./ButtonBase-CuIIuAh8.js";import{T as j}from"./Typography-24q-dl45.js";import"./upperCaseFirstletter-xFsbV7lH.js";import"./react-is.production.min-DUDD-a5e.js";import"./useSlotProps-BSt2UrPC.js";import"./TransitionGroupContext-hVJ43YWk.js";import"./Select-Cv465N0A.js";import"./InputBase-BYHp5D8w.js";import"./ownerWindow-D-lKd2xy.js";import"./useTheme-CzgnG2xl.js";import"./listItemTextClasses-Dy15nuby.js";import"./dividerClasses-BWCHE6hw.js";import"./Portal-DNv2eG0u.js";import"./utils-BDIpzTzJ.js";import"./Fade-CavCQLHM.js";import"./Paper-Doqhdja4.js";import"./Grow-C0bGKjLZ.js";import"./TextField-BnKfs_Oc.js";import"./Collapse-CZdTODxY.js";import"./Tooltip-Cpc1zI1z.js";import"./Popper-C0SOWPBp.js";import"./toggleButtonClasses-CZp77Ioi.js";import"./Divider-BMCxrkE1.js";import"./ClickAwayListener-C3vC-r-L.js";import"./Stack-BV1E9Bxp.js";import"./useThemeProps-BvOx1PjC.js";import"./iconButtonClasses-y0oGgTvZ.js";const z=a(t.jsx("path",{d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"}),"Fullscreen"),w=a(t.jsx("path",{d:"M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"}),"FullscreenExit"),F={maxWidth:"1540px",width:"100%",margin:"auto",padding:{xs:"25px 0 0 0",sm:"45px 15px 70px 15px",md:"45px 30px 70px 30px",lg:"45px 50px 70px 50px"}},m="https://useful-rivalee-levutanhduoc-0dfdb3a6.koyeb.app/";function rt(){const[s,p]=i.useState(!1),[o,n]=i.useState(),{id:h}=d(),x=i.useRef(null),c=async()=>{try{const r=await f({url:m+`legos/info?name=games&${h}`,methoud:"get"});if(r){const l=r.rows;n(l[0])}}catch(r){console.log(r)}};return i.useEffect(()=>{c()},[]),t.jsx(t.Fragment,{children:t.jsxs(e,{sx:F,children:[t.jsx(u,{sx:{width:"100%",margin:"auto",padding:"30px 0 30px 0"}}),o&&t.jsx(e,{ref:x,sx:s?{position:"fixed",top:"0",left:"0",zIndex:"1200",width:"100%",height:"100%"}:{width:"100%",height:"500px"},onClick:r=>r.stopPropagation(),children:t.jsxs(e,{sx:{position:"relative",width:"100%",height:"100%"},children:[t.jsx("iframe",{src:m+"storage/"+o.gamefile_uploaded_zip+"/index.html",width:"100%",height:"100%"}),t.jsx(v,{sx:{position:"absolute",top:0,left:0},onClick:()=>p(!s),children:s?t.jsx(w,{}):t.jsx(z,{})})]})}),t.jsxs(e,{children:[t.jsx(j,{children:"Description"}),o!=null&&o.description?g(o.description):""]})]})})}export{rt as default};
