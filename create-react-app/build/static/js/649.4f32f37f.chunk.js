"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[649],{4649:function(e,r,t){t.r(r),t.d(r,{default:function(){return I}});var a=t(7313),s=t(4096),l=t(9860),n=t(7458),i=t(6396),o=t(6149),c=t(4117),d=t(6467),h=t(1689),u=t(7131),x=t(3604),m=t(1550),j=t(3306),p=t(8797),b=t(1405),Z=t(1095),v=t(7829),y=t(1171),g=t(6417),P=(0,y.Z)((0,g.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew"),f=t(9881),w=t(3984),C=t(1113),O=t(9019),N=t(4631),k=t(9536),S=t(2401);var z=function(e){let{open:r,onClose:t,job:u}=e;const[m,j]=a.useState({});a.useEffect((()=>(p(u.id),()=>{j({})})),[u]);const p=e=>{fetch("http://localhost:8080/jobCard/jobSpares/"+e).then((async e=>{if(!e.ok){const r=await e.text();throw new Error(r||e.statusText)}return e.json()})).then((e=>{j(e)})).catch((e=>{console.log(e.message)}))},b=a.useMemo((()=>[{accessorKey:"complaints",header:"Complaints",size:250},{accessorKey:"completed",header:"Status",size:100},{accessorKey:"remarks",header:"Remarks",size:250}]),[]),v=a.useMemo((()=>[{accessorKey:"sparesAndLabour",header:"Spares/Labour",size:250},{accessorKey:"qty",header:"Quantity",size:100},{accessorKey:"rate",header:"Rate",size:100},{accessorKey:"amount",header:"Amount",size:100}]),[]),y=(0,l.Z)(),P=a.useMemo((()=>(0,n.Z)({palette:{mode:y.palette.mode,primary:y.palette.secondary,info:{main:"rgb(255,122,0)"},background:{default:"rgba(0, 0, 0, 0)"}},typography:{button:{textTransform:"none",fontSize:"1.2rem"}},components:{MuiTooltip:{styleOverrides:{tooltip:{fontSize:"1.1rem"}}},MuiSwitch:{styleOverrides:{thumb:{color:"pink"}}}}})),[y]),f="#faf4f3",w="#f2f0f6";return(0,g.jsxs)(o.Z,{open:r,onClose:t,"aria-labelledby":"data-row-dialog-title",fullWidth:!0,maxWidth:"lg",children:[(0,g.jsx)(x.Z,{id:"data-row-dialog-title",children:(0,g.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[(0,g.jsx)(C.Z,{variant:"h4",children:"JobCard: "+u.jobId+" VehicleNo.: "+u.vehicleRegNo}),(0,g.jsx)(h.Z,{title:"Download Jobcard",children:(0,g.jsx)(Z.Z,{onClick:()=>{fetch("http://localhost:8080/jobCard/pdf/"+u.id).then((async e=>{if(!e.ok){const r=await e.text();throw new Error(r||e.statusText)}return e.blob()})).then((e=>{const r=window.URL.createObjectURL(e),t=document.createElement("a");t.href=r,t.setAttribute("download","Job_"+u.jobId+"_"+u.vehicleRegNo+".pdf"),document.body.appendChild(t),t.click(),t.parentNode.removeChild(t)})).catch((e=>{console.log(e.message)}))},children:"Print Jobcard"})}),(0,g.jsx)(h.Z,{title:"Print Bill",children:(0,g.jsx)(Z.Z,{onClick:()=>{fetch("http://localhost:8080/jobCard/billPdf/"+u.id).then((async e=>{if(!e.ok){const r=await e.text();throw new Error(r||e.statusText)}return e.blob()})).then((e=>{const r=window.URL.createObjectURL(e),t=document.createElement("a");t.href=r,t.setAttribute("download","Bill_"+u.jobId+"_"+u.vehicleRegNo+".pdf"),document.body.appendChild(t),t.click(),t.parentNode.removeChild(t)})).catch((e=>{console.log(e.message)}))},children:"Print Bill"})})]})}),(0,g.jsxs)(d.Z,{dividers:!0,style:{backgroundColor:"white",color:"black"},children:[" ",(0,g.jsxs)(O.ZP,{container:!0,direction:"row",spacing:S.dv,children:[(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsxs)(O.ZP,{container:!0,direction:"row",spacing:S.dv,children:[(0,g.jsx)(O.ZP,{item:!0,xs:6,children:(0,g.jsx)(N.Z,{label:"Owner Name",variant:"outlined",value:u.ownerName||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:6,children:(0,g.jsx)(N.Z,{label:"Owner PhoneNumber",variant:"outlined",value:u.ownerPhoneNumber||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:8,children:(0,g.jsx)(N.Z,{label:"Owner Address",fullWidth:!0,margin:"dense",multiline:!0,variant:"outlined",value:u.ownerAddress||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Owner Email",fullWidth:!0,margin:"dense",variant:"outlined",value:u.ownerEmailId||"",InputProps:{readOnly:!0}})})]})}),(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsx)(k.Z,{})}),(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsxs)(O.ZP,{container:!0,direction:"row",spacing:S.dv,children:[(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Vehicle Reg. No.",variant:"outlined",value:u.vehicleRegNo||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Vehicle Name",variant:"outlined",value:u.vehicleName||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Vehicle Model",variant:"outlined",value:u.vehicleModel||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Vehicle K.Ms",variant:"outlined",value:u.kiloMeters||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Technician Name",variant:"outlined",value:u.technicianName||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Driver Name",variant:"outlined",value:u.driver||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Vehicle Out Date",variant:"outlined",value:u.vehicleOutDate||"",InputProps:{readOnly:!0}})})]})}),(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsx)(k.Z,{})}),(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsx)(i.Z,{theme:P,children:(0,g.jsx)(s.P2,{columns:b,data:u.jobInfo||[],muiTablePaperProps:{elevation:0,sx:{borderRadius:"0",background:`linear-gradient(195deg, ${f}, ${w})`}}})})}),(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsx)(k.Z,{})}),(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsx)(i.Z,{theme:P,children:(0,g.jsx)(s.P2,{columns:v,data:m.jobSparesInfo||[],muiTablePaperProps:{elevation:0,sx:{borderRadius:"0",background:`linear-gradient(195deg, ${f}, ${w})`}}})})}),(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsx)(k.Z,{})}),(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsx)(i.Z,{theme:P,children:(0,g.jsx)(s.P2,{columns:v,data:m.jobLaborInfo||[],muiTablePaperProps:{elevation:0,sx:{borderRadius:"0",background:`linear-gradient(195deg, ${f}, ${w})`}}})})}),(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsx)(k.Z,{})}),(0,g.jsx)(O.ZP,{item:!0,xs:12,children:(0,g.jsxs)(O.ZP,{container:!0,direction:"row",spacing:S.dv,children:[(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Total Spares Value",variant:"outlined",value:m.totalSparesValue||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Total Labour Value",variant:"outlined",value:m.totalLabourValue||"",InputProps:{readOnly:!0}})}),(0,g.jsx)(O.ZP,{item:!0,xs:4,children:(0,g.jsx)(N.Z,{label:"Grand Total",variant:"outlined",value:m.grandTotal||"",InputProps:{readOnly:!0}})})]})})]})]}),(0,g.jsx)(c.Z,{children:(0,g.jsx)(Z.Z,{onClick:t,children:"Close"})})]})};const E=e=>{let{cell:r}=e;return(0,g.jsx)(v.Z,{component:"span",sx:()=>({cursor:"pointer",backgroundColor:"OPEN"===r.getValue()?"green":"red",borderRadius:"0.35rem",maxWidth:"9ch",p:"0.25rem"}),children:r.getValue()})};var I=()=>{const[e,r]=(0,a.useState)([]),[t,y]=(0,a.useState)(!1),[C,O]=(0,a.useState)({}),[N,k]=(0,a.useState)(!1),[S,I]=a.useState(!1),[T,K]=a.useState("");(0,a.useEffect)((()=>(M(),()=>{r([]),y(!1),O({}),k(!1)})),[]);const M=()=>{fetch("http://localhost:8080/jobCard").then((async e=>{if(!e.ok){const r=await e.text();throw new Error(r||e.statusText)}return e.json()})).then((e=>{r(e)})).catch((e=>{console.log(e.message)}))},R=()=>{O({}),y(!1),k(!1)},L=async e=>{await fetch("http://localhost:8080/jobCard/jobStatus",{method:"PUT",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((async e=>{if(!e.ok){const r=await e.text();throw new Error(r||e.statusText)}return e.json()})).then((e=>{console.log(e),O({}),y(!1),M()})).catch((e=>{console.log(e.message),K(e.message),I(!0),O({}),y(!1)}))},V=(0,a.useMemo)((()=>[{accessorKey:"jobId",header:"Job Card No.",size:150},{accessorKey:"jobStatus",header:"Status",size:150,filterVariant:"select",filterSelectOptions:["OPEN","CLOSED","CANCELLED"],Header:(0,g.jsx)("i",{style:{color:"blue"},children:"Status"}),Cell:E,muiTableBodyCellProps:e=>{let{cell:r}=e;return{onClick:()=>{O(r.row.original),y(!0)}}}},{accessorKey:"ownerName",header:"Owner Name",size:150},{accessorKey:"ownerPhoneNumber",header:"Phone",size:200},{accessorKey:"vehicleRegNo",header:"Reg. No.",size:150},{accessorKey:"vehicleName",header:"Vehicle Name",size:150},{accessorKey:"vehicleModel",header:"Model",size:200},{accessorKey:"kiloMeters",header:"kiloMeters",size:150},{accessorKey:"technicianName",header:"Technician",size:150},{accessorKey:"driver",header:"Driver",size:150},{accessorKey:"vehicleOutDate",header:"Vechicle Out Date",size:150},{accessorKey:"ownerAddress",header:"Address",size:150},{accessorKey:"ownerEmailId",header:"Email",size:150}]),[]),D=(0,l.Z)(),A=(0,a.useMemo)((()=>(0,n.Z)({palette:{mode:D.palette.mode,primary:D.palette.secondary,info:{main:"rgb(255,122,0)"},background:{default:"rgba(0, 0, 0, 0)"}},typography:{button:{textTransform:"none",fontSize:"1.2rem"}},components:{MuiTooltip:{styleOverrides:{tooltip:{fontSize:"1.1rem"}}},MuiSwitch:{styleOverrides:{thumb:{color:"pink"}}}}})),[D]);return(0,g.jsxs)("div",{children:[S&&(0,g.jsx)(w.Z,{sx:{width:"100%"},spacing:2,children:(0,g.jsx)(f.Z,{variant:"filled",severity:"info",onClose:()=>I(!1),children:T})}),(0,g.jsxs)(i.Z,{theme:A,children:[(0,g.jsx)(s.P2,{columns:V,data:e,editingMode:"modal",enableEditing:!0,muiTablePaperProps:{elevation:0,sx:{borderRadius:"0",background:"linear-gradient(195deg, #fff, #c38b81)"}},renderRowActions:e=>{let{row:r}=e;return(0,g.jsx)(v.Z,{sx:{display:"flex",gap:"1rem"},children:(0,g.jsx)(h.Z,{arrow:!0,placement:"right",title:"Open Job Card",children:(0,g.jsx)(u.Z,{onClick:()=>{O(r.original),k(!0)},children:(0,g.jsx)(P,{})})})})}})," "]}),(0,g.jsxs)(o.Z,{open:t,onClose:R,scroll:"paper","aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,g.jsx)(v.Z,{sx:{bgcolor:"#f44336",color:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.75rem 1.25rem"},children:(0,g.jsx)(x.Z,{id:"scroll-dialog-title",sx:{flexGrow:1,fontSize:"1.5rem"},children:C.vehicleRegNo})}),(0,g.jsx)(d.Z,{dividers:"paper"===scroll,children:(0,g.jsxs)(m.Z,{variant:"outlined",style:{margin:"1px 0"},children:[(0,g.jsx)(j.Z,{children:"Job Status"}),(0,g.jsxs)(p.Z,{value:(null===C||void 0===C?void 0:C.jobStatus)||"",onChange:e=>{const r={...C,jobStatus:e.target.value};O(r)},label:"Status",children:[(0,g.jsx)(b.Z,{value:"CLOSED",children:"CLOSED"}),(0,g.jsx)(b.Z,{value:"OPEN",children:"OPEN"}),(0,g.jsx)(b.Z,{value:"CANCELLED",children:"CANCELLED"})]})]})}),(0,g.jsxs)(c.Z,{children:[(0,g.jsx)(Z.Z,{onClick:()=>{L(C),M(),R()},color:"primary",children:"Save"}),(0,g.jsx)(Z.Z,{onClick:R,color:"secondary",children:"Close"})]})]}),(0,g.jsx)(z,{open:N,onClose:R,job:C})]})}}}]);