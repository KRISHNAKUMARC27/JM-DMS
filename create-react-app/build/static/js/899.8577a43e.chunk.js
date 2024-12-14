"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[899],{2899:function(e,t,a){a.r(t);var r=a(7313),n=a(9019),s=a(6835),l=a(3477),o=a(4076),i=a(7478),d=a(3467),c=a(1550),h=a(3306),u=a(8797),x=a(1405),j=a(8111),g=a(4631),m=a(1095),p=a(3497),y=a(2401),v=a(6417);t.default=e=>{let{data:t,updateData:a}=e;const[Z,f]=r.useState([]),[b,k]=r.useState([]),[w,W]=r.useState([]);r.useEffect((()=>(C(),E(),()=>{f([]),k([]),W([])})),[]);const C=()=>{fetch("/api/externalWork/externalWorkCategory").then((async e=>{if(!e.ok){const t=await e.text();throw new Error(t||e.statusText)}return e.json()})).then((e=>{f(e)})).catch((e=>{console.log(e.message)}))},E=()=>{fetch("/api/externalWork").then((async e=>{if(!e.ok){const t=await e.text();throw new Error(t||e.statusText)}return e.json()})).then((e=>{W(e)})).catch((e=>{console.log(e.message)}))},A=(e,r,n)=>{const s=[...t];s[e][r]=n,a(s)},I=e=>{(async e=>{await fetch("/api/externalWork/findExternalWorkInventoryWithFilter",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((async e=>{if(!e.ok){const t=await e.text();throw new Error(t||e.statusText)}return e.json()})).then((e=>{console.log(e),k(e)})).catch((e=>{console.log(e.message)}))})({categoryList:[e]})};return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(p.Z,{title:"Job ExternalWork Information",children:(0,v.jsx)(n.ZP,{container:!0,direction:"row",spacing:y.dv,children:(0,v.jsxs)(n.ZP,{item:!0,xs:12,children:[(0,v.jsx)("div",{style:{overflowX:"auto"},children:(0,v.jsxs)(s.Z,{style:{minWidth:1e3},children:[(0,v.jsx)(l.Z,{children:(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(i.Z,{children:"ExternalWork Category"}),(0,v.jsx)(i.Z,{children:"ExternalWork"}),(0,v.jsx)(i.Z,{children:"Quantity"}),(0,v.jsx)(i.Z,{children:"Rate"}),(0,v.jsx)(i.Z,{children:"Amount"}),(0,v.jsx)(i.Z,{children:"Action"})]})}),(0,v.jsx)(d.Z,{children:t.map(((e,r)=>(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(i.Z,{children:(0,v.jsxs)(c.Z,{variant:"standard",sx:{m:1,minWidth:120},children:[(0,v.jsx)(h.Z,{id:"demo-simple-select-standard-label"}),(0,v.jsx)(u.Z,{fullWidth:!0,labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard-label",value:(null===e||void 0===e?void 0:e.category)||"",label:"Category Type",sx:{"& .MuiSelect-select":{color:"black"}},onChange:e=>{I(e.target.value),A(r,"category",e.target.value)},children:Z.map((e=>(0,v.jsx)(x.Z,{value:e.category,children:e.category},e.id)))})]})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(j.Z,{options:b.filter((e=>!t.some((t=>t.sparesId===e.id)))),getOptionLabel:e=>e.desc,style:{width:300},value:w.find((t=>t.desc===e.sparesAndLabour))||null,isOptionEqualToValue:(e,t)=>e.id===t.id,onChange:(t,a)=>{console.log("new value is "+JSON.stringify(a)),A(r,"sparesAndLabour",a.desc),A(r,"rate",a.amount),A(r,"amount",a.amount*(null===e||void 0===e?void 0:e.qty)||0),A(r,"sparesId",a.id)},renderInput:t=>(0,v.jsx)(g.Z,{...t,label:"Search ExternalWork",disabled:!!e.sparesId})})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(g.Z,{fullWidth:!0,value:(null===e||void 0===e?void 0:e.qty)||"",onChange:t=>{const a=t.target.value;A(r,"qty",a),A(r,"amount",a*(null===e||void 0===e?void 0:e.rate)||0)}})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(g.Z,{fullWidth:!0,value:(null===e||void 0===e?void 0:e.rate)||"",onChange:e=>A(r,"rate",e.target.value)})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(g.Z,{fullWidth:!0,value:(null===e||void 0===e?void 0:e.amount)||"",onChange:e=>A(r,"amount",e.target.value)})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(m.Z,{variant:"contained",color:"error",onClick:()=>(e=>{const r=[...t];r.splice(e,1),r.length>0?a(r):a([...Array(1)].map((()=>({sparesId:"",category:"",sparesAndLabour:"",qty:"",rate:"",amount:""}))))})(r),children:"Delete"})})]},r)))})]})}),(0,v.jsxs)(n.ZP,{item:!0,xs:12,children:[(0,v.jsx)("br",{}),(0,v.jsx)(m.Z,{variant:"contained",color:"error",onClick:()=>{const e=[...Array(1)].map((()=>({sparesId:"",category:"",sparesAndLabour:"",qty:"",rate:"",amount:""})));a((t=>[...t,...e]))},children:"Add Row"})]})]})})})})}}}]);