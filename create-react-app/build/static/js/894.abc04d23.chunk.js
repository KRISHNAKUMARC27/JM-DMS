"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[894],{2566:function(e,t,a){a.r(t);var s=a(7313),r=a(9019),n=a(3306),o=a(8797),c=a(1405),l=a(4631),i=a(1095),d=a(3497),u=a(2401),h=a(9881),x=a(3984),g=a(6417);t.default=function(e){let{data:t,setLaborUpdateOpen:a,fetchAllLaborData:m}=e;const[f,j]=(0,s.useState)(t||{}),[y,b]=(0,s.useState)([]),[p,v]=s.useState(!1),[Z,w]=s.useState(""),[C,_]=s.useState("");(0,s.useEffect)((()=>(k(),()=>{j({}),b([])})),[]),(0,s.useEffect)((()=>{j(t||{})}),[t]);const k=()=>{fetch("/api/labor/laborCategory").then((async e=>{if(!e.ok){const t=await e.text();throw new Error(t||e.statusText)}return e.json()})).then((e=>{b(e)})).catch((e=>{console.log(e.message)}))};return(0,g.jsxs)("div",{children:[(0,g.jsx)(d.Z,{title:"Enter Labor Details",children:(0,g.jsxs)(r.ZP,{container:!0,direction:"row",spacing:u.dv,children:[(0,g.jsxs)(r.ZP,{item:!0,xs:3,children:[(0,g.jsx)(n.Z,{id:"demo-select-small",required:!0,children:"Category Type"}),(0,g.jsx)(o.Z,{labelId:"demo-select-small",id:"demo-select-small",value:f.category||"",label:"Category Type",onChange:e=>{const t={...f,category:e.target.value};j(t)},children:y.map((e=>(0,g.jsx)(c.Z,{value:e.category,children:e.category},e.id)))})]}),(0,g.jsxs)(r.ZP,{item:!0,xs:6,children:[(0,g.jsx)("br",{}),(0,g.jsx)(l.Z,{label:"Labor Description",required:!0,variant:"standard",fullWidth:!0,value:f.desc||"",onChange:e=>{const t={...f,desc:e.target.value};j(t)}})]}),(0,g.jsx)(r.ZP,{item:!0,xs:4,children:(0,g.jsx)(l.Z,{label:"Amount",required:!0,variant:"outlined",value:f.amount||"",onChange:e=>{const t={...f,amount:e.target.value};j(t)}})})]})}),(0,g.jsx)("br",{}),(0,g.jsx)("div",{className:"content",children:f.category&&f.desc&&null!==f.amount&&void 0!==f.amount&&(0,g.jsx)(i.Z,{variant:"contained",color:"error",onClick:()=>(async e=>{await fetch("/api/labor",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((async e=>{if(!e.ok){const t=await e.text();throw new Error(t||e.statusText)}return e.json()})).then((e=>{m&&m(),a&&a(!1),w(e.desc+" added successfully "),_("success"),v(!0),console.log(e)})).catch((e=>{console.log(e.message),w(e.message),_("info"),v(!0)}))})(f),children:"Add/Update Labor"})}),p&&(0,g.jsx)(x.Z,{sx:{width:"100%"},spacing:2,children:(0,g.jsx)(h.Z,{variant:"filled",severity:C,onClose:()=>v(!1),children:Z})})]})}}}]);