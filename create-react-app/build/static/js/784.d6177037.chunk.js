"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[784],{9784:function(e,a,s){s.r(a);var r=s(7313),t=s(4096),i=s(9860),c=s(7458),n=s(6396),o=s(7829),d=s(1689),l=s(7131),h=s(6149),p=s(6467),u=s(9019),m=s(9536),y=s(1113),x=s(4117),j=s(1095),b=s(1207),g=s(2401),Z=s(9546),f=s(3483),z=s(6417);const K=(0,Z.Z)((0,r.lazy)((()=>s.e(811).then(s.bind(s,8190)))));a.default=()=>{const[e,a]=(0,r.useState)([]),[s,Z]=(0,r.useState)({}),[k,S]=(0,r.useState)(!1);(0,r.useEffect)((()=>(M(),()=>{a([])})),[]);const P=()=>{S(!1)},M=async()=>{try{const e=await(0,f.A_)("/api/spares");a(e)}catch(e){console.error(e.message)}},v=(0,r.useMemo)((()=>[{accessorKey:"category",header:"Category",size:150,filterVariant:"multi-select"},{accessorKey:"partNumber",header:"PartNo./Type",size:150},{accessorKey:"desc",header:"Desc",size:250},{accessorKey:"qty",header:"Quantity",size:100},{accessorKey:"sellRate",header:"Sell Rate",size:100},{accessorKey:"amount",header:"Amount",size:100},{accessorKey:"purchaseRate",header:"Purchase Rate",size:100},{accessorKey:"rack",header:"Rack/Bin",size:150},{accessorKey:"misc1",header:"Misc 1",size:150},{accessorKey:"misc2",header:"Units",size:150},{accessorKey:"misc3",header:"MRP",size:150},{accessorKey:"minThresh",header:"Min Threshold",size:150},{accessorKey:"minThreshDate",header:"Min Threshold Date",size:150},{accessorKey:"updateDate",header:"Update Date",size:150}]),[]),w=(0,i.Z)(),_=(0,r.useMemo)((()=>(0,c.Z)({palette:{mode:w.palette.mode,primary:w.palette.secondary,info:{main:"rgb(255,122,0)"},background:{default:"rgba(0, 0, 0, 0)"}},typography:{button:{textTransform:"none",fontSize:"1.2rem"}},components:{MuiTooltip:{styleOverrides:{tooltip:{fontSize:"1.1rem"}}},MuiSwitch:{styleOverrides:{thumb:{color:"pink"}}}}})),[w]);return(0,z.jsxs)("div",{children:[(0,z.jsxs)(n.Z,{theme:_,children:[(0,z.jsx)(t.P2,{columns:v,data:e,enableFacetedValues:!0,editingMode:"modal",enableEditing:!0,muiTablePaperProps:{elevation:0,sx:{borderRadius:"0",background:"linear-gradient(195deg, #e2d7d5, #d6763c)"}},initialState:{pagination:{pageSize:10}},renderRowActions:e=>{let{row:a}=e;return(0,z.jsx)(o.Z,{sx:{display:"flex",gap:"1rem"},children:(0,z.jsx)(d.Z,{arrow:!0,placement:"left",title:"Update Spares Info",children:(0,z.jsx)(l.Z,{onClick:()=>{S(!1),Z(a.original),S(!0)},children:(0,z.jsx)(b.Z,{})})})})}})," "]}),(0,z.jsx)("br",{}),(0,z.jsxs)(h.Z,{open:k,onClose:P,"aria-labelledby":"data-row-dialog-title",fullWidth:!0,maxWidth:"lg",children:[(0,z.jsxs)(p.Z,{dividers:!0,style:{backgroundColor:"white",color:"black"},children:[" ",(0,z.jsx)(u.ZP,{container:!0,spacing:g.dv,children:(0,z.jsx)(u.ZP,{item:!0,xs:12,children:(0,z.jsxs)(u.ZP,{container:!0,spacing:g.dv,children:[(0,z.jsx)(u.ZP,{item:!0,xs:12,children:(0,z.jsx)(m.Z,{})}),(0,z.jsx)(u.ZP,{item:!0,xs:12,children:(0,z.jsx)(y.Z,{variant:"h2",children:"Updating Spares: "+s.desc})}),(0,z.jsx)(u.ZP,{item:!0,xs:12,children:(0,z.jsx)(K,{data:s,setSparesUpdateOpen:S,fetchAllSparesData:M})})]})})})]}),(0,z.jsx)(x.Z,{children:(0,z.jsx)(j.Z,{onClick:P,children:"Close"})})]}),(0,z.jsx)("br",{})]})}},1207:function(e,a,s){var r=s(1171),t=s(6417);a.Z=(0,r.Z)((0,t.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")}}]);