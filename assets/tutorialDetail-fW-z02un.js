import{r as s,Y as c,j as t}from"./index-Cmwe-C8R.js";import{B as h}from"./breadcrumb-Cxn1zOEL.js";import{f}from"./fecthData-9SLkk-nw.js";import{B as i}from"./Box-zPS9oF5n.js";import{T as b,a as g}from"./Tabs-hoBjcsIo.js";import{D as j}from"./Divider-CHIF1_pv.js";import{F as D}from"./Backdrop-DOpgEXoI.js";import"./upperCaseFirstletter-xFsbV7lH.js";import"./react-is.production.min-DUDD-a5e.js";import"./IconButton-BfCg_MN7.js";import"./Typography-OTWVZArR.js";import"./useSlotProps-C6oBoK6l.js";import"./utils-DhY_fCm9.js";import"./tabClasses-DdtfDrdu.js";import"./useTheme-DxNQxXzT.js";import"./ownerWindow-BN2rbQ_G.js";import"./ownerDocument-DW-IO8s5.js";import"./tabsClasses-BRxMHEAY.js";import"./KeyboardArrowRight-aFcvLVm0.js";import"./dividerClasses-8b8wpaUB.js";const w={maxWidth:"1540px",width:"100%",margin:"auto",padding:{xs:"25px 0 0 0",sm:"45px 15px 70px 15px",md:"45px 30px 70px 30px",lg:"45px 50px 70px 50px"}},x="http://localhost:3000/",B=a=>t.jsx(D,{in:a.value==a.index,mountOnEnter:!0,unmountOnExit:!0,timeout:2e3,children:t.jsx(i,{role:"tabpanel",hidden:a.value!=a.index,id:`simple-tabpanel-${a.index}`,"aria-labelledby":`simple-tab-${a.index}`,sx:{...a.sx,zIndex:"-1"},children:a.children})});function A(){var n,l;const[a,m]=s.useState(0),[o,p]=s.useState(),{id:d}=c(),u=async()=>{try{const r=await f({url:x+`legos/info?name=tutorials&id=${d}`,methoud:"get"});if(r){const e=r.rows;p(e[0])}}catch(r){console.log(r)}};return s.useEffect(()=>{u()},[]),t.jsx(t.Fragment,{children:t.jsxs(i,{sx:w,children:[t.jsx(h,{sx:{width:"100%",margin:"auto",padding:"30px 0 30px 0"}}),t.jsxs(i,{sx:{border:"1px solid rgba(255, 255, 255, 0.12)",margin:"0 0 30px 0",padding:{xs:"0",sm:"0 35px 0 35px "},borderRadius:"5px"},children:[t.jsx(b,{value:a,onChange:(r,e)=>m(e),variant:"scrollable",scrollButtons:"auto",allowScrollButtonsMobile:!0,children:o&&((n=o.tutorialfile_uploaded_pdf)==null?void 0:n.map((r,e)=>t.jsx(g,{sx:{fontWeight:"bold"},label:`Book ${e+1}`,"aria-controls":`simple-tabpanel-${e}`},e)))}),t.jsx(j,{orientation:"horizontal",flexItem:!0}),t.jsx(i,{sx:{padding:"35px 0 35px 0"},children:o&&((l=o.tutorialfile_uploaded_pdf)==null?void 0:l.map((r,e)=>t.jsx(B,{value:a,index:e,children:t.jsx("iframe",{src:x+"storage/"+r,width:"100%",height:"600px"})},e)))})]})]})})}export{A as default};