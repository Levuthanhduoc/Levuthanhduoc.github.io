import{j as o,r}from"./index-D5pX6302.js";import{I as n}from"./IconButton-CSP1vh8m.js";import{c as i}from"./ButtonBase-9oSa2JUu.js";import"./iconButtonClasses-DcT-f4kU.js";import"./TransitionGroupContext-z8OabIrq.js";const l=i([o.jsx("path",{d:"M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"},"0"),o.jsx("path",{d:"m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"},"1")],"KeyboardDoubleArrowUp");function x(){const[s,t]=r.useState(!1),e=()=>{window.scrollY>300?t(!0):t(!1)};return r.useEffect(()=>{window.addEventListener("scroll",e)},[]),o.jsx(o.Fragment,{children:s&&o.jsx(n,{sx:{position:"fixed",zIndex:1e3,bottom:"5%",right:"5%",background:" #0056B3"},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:o.jsx(l,{})})})}export{x as default};
