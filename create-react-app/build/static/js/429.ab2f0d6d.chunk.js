"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[429],{1429:function(e,a,r){r.r(a),r.d(a,{default:function(){return T}});var t=r(7313),o=r(9546),s=r(4096),n=r(9860),l=r(7458),i=r(6396),d=r(1689),c=r(7131),h=r(6149),u=r(6467),m=r(9019),p=r(1113),j=r(1095),x=r(4117),b=r(4631),g=r(1207),v=r(1171),y=r(6417),Z=(0,v.Z)((0,y.jsx)("path",{d:"m22.7 19-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"}),"Build"),w=r(7829),f=r(2401),P=r(9881),N=r(3984);const C=(0,o.Z)((0,t.lazy)((()=>r.e(741).then(r.bind(r,1741))))),S=(0,o.Z)((0,t.lazy)((()=>r.e(67).then(r.bind(r,7812))))),k=(0,o.Z)((0,t.lazy)((()=>r.e(404).then(r.bind(r,4889))))),I=(0,o.Z)((0,t.lazy)((()=>Promise.all([r.e(111),r.e(304)]).then(r.bind(r,7304))))),A=(0,o.Z)((0,t.lazy)((()=>Promise.all([r.e(111),r.e(983)]).then(r.bind(r,1983)))));var T=()=>{const[e,a]=(0,t.useState)([]),[r,o]=(0,t.useState)({}),[v,T]=(0,t.useState)({}),[L,M]=(0,t.useState)({}),[z,O]=(0,t.useState)({}),[D,V]=(0,t.useState)([...Array(1)].map((()=>({complaints:"",completed:"",remarks:""})))),[E,K]=(0,t.useState)(!1),[J,R]=(0,t.useState)({}),[U,q]=(0,t.useState)([...Array(1)].map((()=>({sparesId:"",category:"",sparesAndLabour:"",qty:"",rate:"",amount:""})))),[W,_]=(0,t.useState)([...Array(1)].map((()=>({sparesId:"",category:"",sparesAndLabour:"",qty:"0",rate:"0",amount:"0"})))),[G,H]=(0,t.useState)(!1),[F,B]=t.useState(!1),[Q,X]=t.useState("");(0,t.useEffect)((()=>(Y(),()=>{a([])})),[]);const Y=()=>{fetch("/api/jobCard/status/OPEN").then((async e=>{if(!e.ok){const a=await e.text();throw new Error(a||e.statusText)}return e.json()})).then((e=>{a(e)})).catch((e=>{console.log(e.message)}))};const $=async e=>{await fetch("/api/jobCard",{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((async e=>{if(!e.ok){const a=await e.text();throw new Error(a||e.statusText)}return e.json()})).then((e=>{console.log(e),te()})).catch((e=>{console.log(e.message)}))},ee=e=>{var a;T(e),a=e.id,fetch("/api/jobCard/jobSpares/"+a).then((async e=>{if(!e.ok){const a=await e.text();throw new Error(a||e.statusText)}return e.json()})).then((e=>{q(e.jobSparesInfo),_(e.jobLaborInfo);let a={totalSparesValue:e.totalSparesValue,totalLabourValue:e.totalLabourValue,grandTotal:e.grandTotal};R(a),H(!0)})).catch((e=>{console.log(e.message)}))},ae=e=>e.reduce(((e,a)=>e+(Number(a.amount)||0)),0),re=async e=>{await fetch("/api/jobCard/jobSpares",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((async e=>{if(!e.ok){const a=await e.text();throw new Error(a||e.statusText)}return e.json()})).then((e=>{console.log(e),oe()})).catch((e=>{console.log(e.message),X(e.message),B(!0)}))},te=()=>{K(!1),o({}),M({}),O({}),V([...Array(1)].map((()=>({complaints:"",completed:"",remarks:""})))),H(!1),T({}),q([...Array(1)].map((()=>({sparesId:"",category:"",sparesAndLabour:"",qty:"",rate:"",amount:""})))),_([...Array(1)].map((()=>({sparesId:"",category:"",sparesAndLabour:"",qty:"0",rate:"0",amount:"0"})))),R({})},oe=()=>{H(!1),T({}),q([...Array(1)].map((()=>({sparesId:"",category:"",sparesAndLabour:"",qty:"",rate:"",amount:""})))),_([...Array(1)].map((()=>({sparesId:"",category:"",sparesAndLabour:"",qty:"0",rate:"0",amount:"0"})))),R({})},se=(0,t.useMemo)((()=>[{accessorKey:"jobId",header:"Job Card No.",size:150},{accessorKey:"jobStatus",header:"Status",size:150,filterVariant:"select",filterSelectOptions:["OPEN","CLOSED","CANCELLED"]},{accessorKey:"ownerName",header:"Owner Name",size:150},{accessorKey:"ownerPhoneNumber",header:"Phone",size:200},{accessorKey:"vehicleRegNo",header:"Reg. No.",size:150},{accessorKey:"vehicleName",header:"Vehicle Name",size:150},{accessorKey:"vehicleModel",header:"Model",size:200},{accessorKey:"technicianName",header:"Technician Name",size:150}]),[]),ne=(0,n.Z)(),le=(0,t.useMemo)((()=>(0,l.Z)({palette:{mode:ne.palette.mode,primary:ne.palette.secondary,info:{main:"rgb(255,122,0)"},background:{default:"rgba(0, 0, 0, 0)"}},typography:{button:{textTransform:"none",fontSize:"1.2rem"}},components:{MuiTooltip:{styleOverrides:{tooltip:{fontSize:"1.1rem"}}},MuiSwitch:{styleOverrides:{thumb:{color:"pink"}}}}})),[ne]);function ie(){return(0,y.jsx)("hr",{style:{color:"#000000",backgroundColor:"#000000",height:1,borderColor:"#000000"}})}return(0,y.jsxs)("div",{children:[(0,y.jsxs)(i.Z,{theme:le,children:[(0,y.jsx)(s.P2,{columns:se,data:e,editingMode:"modal",enableEditing:!0,muiTablePaperProps:{elevation:0,sx:{borderRadius:"0",background:"linear-gradient(195deg, #e2d7d5, #4f4563)"}},renderRowActions:e=>{let{row:a}=e;return(0,y.jsxs)(w.Z,{sx:{display:"flex",gap:"1rem"},children:[(0,y.jsx)(d.Z,{arrow:!0,placement:"left",title:"Update Job Info",children:(0,y.jsx)(c.Z,{onClick:()=>{(e=>{let a={vehicleRegNo:e.vehicleRegNo,vehicleName:e.vehicleName,vehicleModel:e.vehicleModel,kiloMeters:e.kiloMeters,technicianName:e.technicianName,vehicleOutDate:e.vehicleOutDate,fuelPoints:e.fuelPoints,driver:e.driver,cover:e.cover,glass:e.glass,dashboardAndTools:e.dashboardAndTools,spareWheel:e.spareWheel,jackeyHandles:e.jackeyHandles,toolKits:e.toolKits,penDrive:e.penDrive,wheelCap:e.wheelCap,acGrills:e.acGrills},r={ownerName:e.ownerName,ownerAddress:e.ownerAddress,ownerPhoneNumber:e.ownerPhoneNumber,ownerEmailId:e.ownerEmailId};o(e),M(r),O(a),V(e.jobInfo),K(!0)})(a.original)},children:(0,y.jsx)(g.Z,{})})}),(0,y.jsx)(d.Z,{arrow:!0,placement:"right",title:"Update Job Spares",children:(0,y.jsx)(c.Z,{onClick:()=>{ee(a.original)},children:(0,y.jsx)(Z,{})})})]})}})," "]}),(0,y.jsx)("br",{}),(0,y.jsxs)(h.Z,{open:E,onClose:te,"aria-labelledby":"data-row-dialog-title",fullWidth:!0,maxWidth:"lg",children:[(0,y.jsxs)(u.Z,{dividers:!0,style:{backgroundColor:"white",color:"black"},children:[" ",(0,y.jsx)(m.ZP,{container:!0,spacing:f.dv,children:(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsxs)(m.ZP,{container:!0,spacing:f.dv,children:[(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsx)(ie,{})}),(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsx)(p.Z,{variant:"h2",children:"Updating JobCard: "+r.jobId+" VehicleNo.: "+r.vehicleRegNo})}),(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsx)(k,{data:D,updateData:V})}),(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsx)(S,{data:z,updateData:O})}),(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsx)(C,{data:L,updateData:M})}),(0,y.jsx)(m.ZP,{item:!0,lg:3,md:6,sm:6,xs:12,children:L.ownerName&&L.ownerAddress&&L.ownerPhoneNumber&&z.vehicleRegNo&&z.vehicleName&&z.vehicleModel&&z.kiloMeters&&z.fuelPoints&&(console.log(JSON.stringify(D)),D[0].complaints)&&(0,y.jsx)(j.Z,{variant:"contained",color:"error",onClick:()=>{const e={id:r.id,jobId:r.jobId,jobStatus:r.jobStatus,jobCreationDate:r.jobCreationDate,ownerName:L.ownerName,ownerAddress:L.ownerAddress,ownerPhoneNumber:L.ownerPhoneNumber,ownerEmailId:L.ownerEmailId,vehicleRegNo:z.vehicleRegNo,vehicleName:z.vehicleName,vehicleModel:z.vehicleModel,kiloMeters:z.kiloMeters,fuelPoints:z.fuelPoints,technicianName:z.technicianName,driver:z.driver,vehicleOutDate:z.vehicleOutDate,cover:z.cover,glass:z.glass,dashboardAndTools:z.dashboardAndTools,spareWheel:z.spareWheel,jackeyHandles:z.jackeyHandles,toolKits:z.toolKits,penDrive:z.penDrive,wheelCap:z.wheelCap,acGrills:z.acGrills,jobInfo:D};$(e)},children:"Update JobCard"})}),(0,y.jsx)(m.ZP,{item:!0,lg:3,md:6,sm:6,xs:12,children:(0,y.jsx)(j.Z,{variant:"contained",color:"error",onClick:te,children:"Cancel UpdateJobInfo"})})]})})})]}),(0,y.jsx)(x.Z,{children:(0,y.jsx)(j.Z,{onClick:te,children:"Close"})})]}),(0,y.jsx)("br",{}),(0,y.jsxs)(h.Z,{open:G,onClose:te,"aria-labelledby":"data-row-dialog-title",fullWidth:!0,maxWidth:"lg",children:[(0,y.jsxs)(u.Z,{dividers:!0,style:{backgroundColor:"white",color:"black"},children:[" ",(0,y.jsx)(m.ZP,{container:!0,spacing:f.dv,children:(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsxs)(m.ZP,{container:!0,spacing:f.dv,children:[(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsx)(ie,{})}),(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsx)(p.Z,{variant:"h2",children:"Updating Spares for JobCard: "+v.jobId+" VehicleNo.: "+v.vehicleRegNo})}),(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsx)(I,{data:U,updateData:q})}),(0,y.jsx)(m.ZP,{item:!0,xs:12,children:(0,y.jsx)(A,{data:W,updateData:_})}),(0,y.jsx)(m.ZP,{item:!0,xs:4,children:(0,y.jsx)(b.Z,{label:"Total Spares Value",required:!0,variant:"outlined",value:J.totalSparesValue||"",InputProps:{readOnly:!0}})}),(0,y.jsx)(m.ZP,{item:!0,xs:4,children:(0,y.jsx)(b.Z,{label:"Total Labour Value",required:!0,variant:"outlined",value:J.totalLabourValue||"",InputProps:{readOnly:!0}})}),(0,y.jsx)(m.ZP,{item:!0,xs:4,children:(0,y.jsx)(b.Z,{label:"Grand Total",required:!0,variant:"outlined",value:J.grandTotal||"",InputProps:{readOnly:!0}})}),(0,y.jsx)(m.ZP,{item:!0,lg:3,md:6,sm:6,xs:12,children:function(){var e,a;return(null===(e=U[0])||void 0===e?void 0:e.sparesAndLabour)||(null===(a=W[0])||void 0===a?void 0:a.sparesAndLabour)}()&&(0,y.jsx)(j.Z,{variant:"contained",color:"error",onClick:()=>{const e=ae(U);(e=>{const a={...J,totalSparesValue:e};R(a)})(e);const a=ae(W);(e=>{const a={...J,totalLabourValue:e};R(a)})(a);const r=e+a;(e=>{const a={...J,grandTotal:e};R(a)})(r);const t={id:v.id,jobId:v.jobId,jobSparesInfo:U,jobLaborInfo:W,totalSparesValue:e,totalLabourValue:a,grandTotal:r};re(t)},children:"Update JobSpares"})}),(0,y.jsx)(m.ZP,{item:!0,lg:3,md:6,sm:6,xs:12,children:(0,y.jsx)(j.Z,{variant:"contained",color:"error",onClick:oe,children:"Cancel Update Spares"})})]})})})]}),(0,y.jsx)(x.Z,{children:(0,y.jsx)(j.Z,{onClick:te,children:"Close"})})]}),F&&(0,y.jsx)(N.Z,{sx:{width:"100%"},spacing:2,children:(0,y.jsx)(P.Z,{variant:"filled",severity:"info",onClose:()=>B(!1),children:Q})})]})}},1207:function(e,a,r){var t=r(1171),o=r(6417);a.Z=(0,t.Z)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")}}]);