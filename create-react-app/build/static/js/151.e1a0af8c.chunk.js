"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[151],{6120:function(e,a,t){t.r(a);var r=t(7313),s=t(9019),l=t(3306),n=t(8797),c=t(1405),o=t(4631),i=t(1095),d=t(3497),u=t(2401),x=t(9881),h=t(3984),g=t(3483),m=t(6417);a.default=function(e){let{data:a,setExternalWorkUpdateOpen:t,fetchAllExternalWorkData:j}=e;const[y,v]=(0,r.useState)(a||{}),[f,p]=(0,r.useState)([]),[k,Z]=r.useState(!1),[b,C]=r.useState(""),[W,_]=r.useState("");(0,r.useEffect)((()=>(E(),()=>{v({}),p([])})),[]),(0,r.useEffect)((()=>{v(a||{})}),[a]);const E=async()=>{try{const e=await(0,g.A_)("/api/externalWork/externalWorkCategory");p(e)}catch(e){console.error(e.message)}};return(0,m.jsxs)("div",{children:[(0,m.jsx)(d.Z,{title:"Enter ExternalWork Details",children:(0,m.jsxs)(s.ZP,{container:!0,direction:"row",spacing:u.dv,children:[(0,m.jsxs)(s.ZP,{item:!0,xs:3,children:[(0,m.jsx)(l.Z,{id:"demo-select-small",required:!0,children:"Category Type"}),(0,m.jsx)(n.Z,{labelId:"demo-select-small",id:"demo-select-small",value:y.category||"",label:"Category Type",onChange:e=>{const a={...y,category:e.target.value};v(a)},children:f.map((e=>(0,m.jsx)(c.Z,{value:e.category,children:e.category},e.id)))})]}),(0,m.jsxs)(s.ZP,{item:!0,xs:6,children:[(0,m.jsx)("br",{}),(0,m.jsx)(o.Z,{label:"ExternalWork Description",required:!0,variant:"standard",fullWidth:!0,value:y.desc||"",onChange:e=>{const a={...y,desc:e.target.value};v(a)}})]}),(0,m.jsx)(s.ZP,{item:!0,xs:4,children:(0,m.jsx)(o.Z,{label:"Amount",required:!0,variant:"outlined",value:y.amount||"",onChange:e=>{const a={...y,amount:e.target.value};v(a)}})})]})}),(0,m.jsx)("br",{}),(0,m.jsx)("div",{className:"content",children:y.category&&y.desc&&null!==y.amount&&void 0!==y.amount&&(0,m.jsx)(i.Z,{variant:"contained",color:"error",onClick:()=>(async e=>{try{const a=await(0,g.j0)("/api/externalWork",e);j&&j(),t&&t(!1),C(a.desc+" added successfully "),_("success"),Z(!0),console.log(a)}catch(a){console.log(a.message),C(a.message),_("info"),Z(!0)}})(y),children:"Add/Update ExternalWork"})}),k&&(0,m.jsx)(h.Z,{sx:{width:"100%"},spacing:2,children:(0,m.jsx)(x.Z,{variant:"filled",severity:W,onClose:()=>Z(!1),children:b})})]})}}}]);