"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[428],{1428:function(e,t,r){r.r(t);var a=r(7313),s=r(4096),n=r(9860),i=r(7458),o=r(6396),l=r(7829),c=r(1689),d=r(7131),h=r(6149),x=r(6467),u=r(9019),m=r(9536),p=r(1113),b=r(4117),j=r(1095),f=r(1207),Z=r(2401),g=r(9546),y=r(6417);const k=(0,g.Z)((0,a.lazy)((()=>r.e(894).then(r.bind(r,2566)))));t.default=()=>{const[e,t]=(0,a.useState)([]),[r,g]=(0,a.useState)({}),[w,v]=(0,a.useState)(!1);(0,a.useEffect)((()=>(z(),()=>{t([])})),[]);const P=()=>{v(!1)},z=()=>{fetch("/api/labor").then((async e=>{if(!e.ok){const t=await e.text();throw new Error(t||e.statusText)}return e.json()})).then((e=>{t(e)})).catch((e=>{console.log(e.message)}))},C=(0,a.useMemo)((()=>[{accessorKey:"category",header:"Category",size:150,filterVariant:"multi-select"},{accessorKey:"desc",header:"Desc",size:250},{accessorKey:"amount",header:"Amount",size:100}]),[]),_=(0,n.Z)(),M=(0,a.useMemo)((()=>(0,i.Z)({palette:{mode:_.palette.mode,primary:_.palette.secondary,info:{main:"rgb(255,122,0)"},background:{default:"rgba(0, 0, 0, 0)"}},typography:{button:{textTransform:"none",fontSize:"1.2rem"}},components:{MuiTooltip:{styleOverrides:{tooltip:{fontSize:"1.1rem"}}},MuiSwitch:{styleOverrides:{thumb:{color:"pink"}}}}})),[_]);return(0,y.jsxs)("div",{children:[(0,y.jsxs)(o.Z,{theme:M,children:[(0,y.jsx)(s.P2,{columns:C,data:e,enableFacetedValues:!0,editingMode:"modal",enableEditing:!0,muiTablePaperProps:{elevation:0,sx:{borderRadius:"0",background:"linear-gradient(195deg, #e2d7d5, #4f4563)"}},renderRowActions:e=>{let{row:t}=e;return(0,y.jsx)(l.Z,{sx:{display:"flex",gap:"1rem"},children:(0,y.jsx)(c.Z,{arrow:!0,placement:"left",title:"Update Labor Info",children:(0,y.jsx)(d.Z,{onClick:()=>{v(!1),g(t.original),v(!0)},children:(0,y.jsx)(f.Z,{})})})})}})," "]}),(0,y.jsx)("br",{}),(0,y.jsxs)(h.Z,{open:w,onClose:P,"aria-labelledby":"data-row-dialog-title",fullWidth:!0,maxWidth:"lg",children:[(0,y.jsxs)(x.Z,{dividers:!0,style:{backgroundColor:"white",color:"black"},children:[" ",(0,y.jsx)(u.ZP,{container:!0,spacing:Z.dv,children:(0,y.jsx)(u.ZP,{item:!0,xs:12,children:(0,y.jsxs)(u.ZP,{container:!0,spacing:Z.dv,children:[(0,y.jsx)(u.ZP,{item:!0,xs:12,children:(0,y.jsx)(m.Z,{})}),(0,y.jsx)(u.ZP,{item:!0,xs:12,children:(0,y.jsx)(p.Z,{variant:"h2",children:"Updating Labor: "+r.desc})}),(0,y.jsx)(u.ZP,{item:!0,xs:12,children:(0,y.jsx)(k,{data:r,setLaborUpdateOpen:v,fetchAllLaborData:z})})]})})})]}),(0,y.jsx)(b.Z,{children:(0,y.jsx)(j.Z,{onClick:P,children:"Close"})})]}),(0,y.jsx)("br",{})]})}},1207:function(e,t,r){var a=r(1171),s=r(6417);t.Z=(0,a.Z)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")}}]);