import{r as s,X as c,j as t}from"./index-0Al3NA_R.js";import{B as h}from"./breadcrumb-Dz7Gyg4r.js";import{f}from"./fecthData-DEoavRWm.js";import{B as o}from"./Box-DUsLuOV7.js";import{T as b,a as g}from"./Tabs-DsfPMrDP.js";import{D as j}from"./Divider-Dnyb-12i.js";import{F as D}from"./Fade-DeKg-6gJ.js";import"./upperCaseFirstletter-xFsbV7lH.js";import"./react-is.production.min-DUDD-a5e.js";import"./ButtonBase-D-qFk_4g.js";import"./TransitionGroupContext-Cev5wNdk.js";import"./Typography-KH2Ibf2p.js";import"./useSlotProps-RwgGCZMo.js";import"./tabClasses-eP6rTLxW.js";import"./useTheme-CvEDvl7a.js";import"./ownerWindow-DYy2niX-.js";import"./tabsClasses-CfF85QbV.js";import"./KeyboardArrowRight-DQSfyPGG.js";import"./dividerClasses-D3bDTxOs.js";import"./utils-BHYmojG2.js";const v={maxWidth:"1540px",width:"100%",margin:"auto",padding:{xs:"25px 0 0 0",sm:"45px 15px 70px 15px",md:"45px 30px 70px 30px",lg:"45px 50px 70px 50px"}},x="https://luckybrickserver.onrender.com/",w=a=>t.jsx(D,{in:a.value==a.index,mountOnEnter:!0,unmountOnExit:!0,timeout:2e3,children:t.jsx(o,{role:"tabpanel",hidden:a.value!=a.index,id:`simple-tabpanel-${a.index}`,"aria-labelledby":`simple-tab-${a.index}`,sx:{...a.sx,zIndex:"-1"},children:a.children})});function A(){var n,l;const[a,m]=s.useState(0),[i,p]=s.useState(),{id:d}=c(),u=async()=>{try{const r=await f({url:x+`legos/info?name=tutorials&id=${d}`,methoud:"get"});if(r){const e=r.rows;p(e[0])}}catch(r){console.log(r)}};return s.useEffect(()=>{u()},[]),t.jsx(t.Fragment,{children:t.jsxs(o,{sx:v,children:[t.jsx(h,{sx:{width:"100%",margin:"auto",padding:"30px 0 30px 0"}}),t.jsxs(o,{sx:{border:"1px solid rgba(255, 255, 255, 0.12)",margin:"0 0 30px 0",padding:{xs:"0",sm:"0 35px 0 35px "},borderRadius:"5px"},children:[t.jsx(b,{value:a,onChange:(r,e)=>m(e),variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0,children:i&&((n=i.tutorialfile_uploaded_pdf)==null?void 0:n.map((r,e)=>t.jsx(g,{sx:{fontWeight:"bold"},label:`Book ${e+1}`,"aria-controls":`simple-tabpanel-${e}`},e)))}),t.jsx(j,{orientation:"horizontal",flexItem:!0}),t.jsx(o,{sx:{padding:"35px 0 35px 0"},children:i&&((l=i.tutorialfile_uploaded_pdf)==null?void 0:l.map((r,e)=>t.jsx(w,{value:a,index:e,children:t.jsx("iframe",{src:x+"storage/"+r,width:"100%",height:"600px"})},e)))})]})]})})}export{A as default};