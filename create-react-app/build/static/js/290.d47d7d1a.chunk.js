"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[290],{6290:function(e,o,r){r.r(o);var t=r(7313),n=r(3404),l=r(891),a=r(9546),i=r(1773),s=r(93),c=r(2373),d=r(1095),u=r(9881),p=r(3984),h=r(3483),v=r(6417);const m=(0,a.Z)((0,t.lazy)((()=>r.e(741).then(r.bind(r,1741))))),x=(0,a.Z)((0,t.lazy)((()=>Promise.all([r.e(5),r.e(812)]).then(r.bind(r,7812))))),f=(0,a.Z)((0,t.lazy)((()=>Promise.all([r.e(5),r.e(889)]).then(r.bind(r,4889)))));o.default=function(e){let{data:o}=e;const r={...o,id:null,jobId:null,invoiceId:null,jobStatus:null,jobCreationDate:null,jobCloseDate:null,kiloMeters:null,fuelPoints:null,vehicleOutDate:null,technicianName:null,driver:null,jobInfo:null,cover:null,glass:null,dashboardAndTools:null,spareWheel:null,jackeyHandles:null,toolKits:null,penDrive:null,wheelCap:null,acGrills:null},[a,g]=(0,t.useState)("UserDetails"),[Z,b]=(0,t.useState)(r||{}),[C,y]=(0,t.useState)(r||{}),[j,A]=(0,t.useState)([...Array(1)].map((()=>({complaints:"",completed:"",remarks:""})))),[M,S]=t.useState(!1),[w,k]=t.useState(""),[D,N]=t.useState("");function z(){return Z.ownerName&&Z.ownerAddress&&Z.ownerPhoneNumber}function $(){return C.vehicleRegNo&&C.vehicleName&&C.vehicleModel&&C.kiloMeters&&C.fuelPoints}function I(){return j[0].complaints}(0,t.useEffect)((()=>()=>{b({}),y({}),A([])}),[]);const P=async e=>{try{const o=await(0,h.j0)("/api/jobCard",e);k("JobCard "+o.jobId+" for "+o.vehicleRegNo+" created successfully"),N("success"),S(!0),b({}),y({}),A([...Array(1)].map((()=>({complaints:"",completed:"",remarks:""}))))}catch(o){console.log(o.message),k(o.message),N("info"),S(!0)}};return(0,v.jsxs)("div",{children:[(0,v.jsxs)(n.Z,{"aria-label":"breadcrumb",children:[(0,v.jsxs)(l.Z,{sx:{padding:"5px 15px",cursor:"pointer",textDecoration:"none",color:e=>e.palette.text.primary,borderBottom:z()?"3px solid green":"3px solid orange","&:hover":{color:e=>e.palette.secondary.main}},onClick:()=>g("UserDetails"),children:[(0,v.jsx)(s.Z,{sx:{verticalAlign:"middle",marginRight:"5px"}}),"User Details"]}),(0,v.jsxs)(l.Z,{sx:{padding:"5px 15px",cursor:"pointer",textDecoration:"none",color:e=>e.palette.text.primary,borderBottom:$()?"3px solid green":"3px solid orange","&:hover":{color:e=>e.palette.secondary.main}},onClick:()=>g("CarDetails"),children:[(0,v.jsx)(i.Z,{sx:{verticalAlign:"middle",marginRight:"5px"}}),"Car Details"]}),(0,v.jsxs)(l.Z,{sx:{padding:"5px 15px",cursor:"pointer",textDecoration:"none",color:e=>e.palette.text.primary,borderBottom:I()?"3px solid green":"3px solid orange","&:hover":{color:e=>e.palette.secondary.main}},onClick:()=>g("JobInfo"),children:[(0,v.jsx)(c.Z,{sx:{verticalAlign:"middle",marginRight:"5px"}}),"Job Info"]})]}),(0,v.jsxs)("div",{className:"content",children:["CarDetails"===a&&(0,v.jsx)(x,{data:C,updateData:y}),"UserDetails"===a&&(0,v.jsx)(m,{data:Z,updateData:b}),"JobInfo"===a&&(0,v.jsx)(f,{data:j,updateData:A})]}),(0,v.jsx)("br",{}),(0,v.jsx)("div",{className:"content",children:z()&&$()&&I()&&(0,v.jsx)(d.Z,{variant:"contained",color:"error",onClick:()=>{const e={jobStatus:"OPEN",ownerName:Z.ownerName,ownerAddress:Z.ownerAddress,ownerPhoneNumber:Z.ownerPhoneNumber,ownerEmailId:Z.ownerEmailId,vehicleRegNo:C.vehicleRegNo,vehicleName:C.vehicleName,vehicleModel:C.vehicleModel,kiloMeters:C.kiloMeters,fuelPoints:C.fuelPoints,technicianName:C.technicianName,driver:C.driver,vehicleOutDate:C.vehicleOutDate,cover:C.cover,glass:C.glass,dashboardAndTools:C.dashboardAndTools,spareWheel:C.spareWheel,jackeyHandles:C.jackeyHandles,toolKits:C.toolKits,penDrive:C.penDrive,wheelCap:C.wheelCap,acGrills:C.acGrills,jobInfo:j};P(e)},children:"Submit JobCard"})}),M&&(0,v.jsx)(p.Z,{sx:{width:"100%"},spacing:2,children:(0,v.jsx)(u.Z,{variant:"filled",severity:D,onClose:()=>S(!1),children:w})})]})}},1773:function(e,o,r){var t=r(4836);o.Z=void 0;var n=t(r(5045)),l=r(6417),a=(0,n.default)((0,l.jsx)("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5.81 10l1.04-3h10.29l1.04 3H5.81z"}),"DirectionsCarFilled");o.Z=a},93:function(e,o,r){var t=r(4836);o.Z=void 0;var n=t(r(5045)),l=r(6417),a=(0,n.default)((0,l.jsx)("path",{d:"M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM12 12c2.21 0 4-1.79 4-4V4.5c0-.83-.67-1.5-1.5-1.5-.52 0-.98.27-1.25.67-.27-.4-.73-.67-1.25-.67s-.98.27-1.25.67c-.27-.4-.73-.67-1.25-.67C8.67 3 8 3.67 8 4.5V8c0 2.21 1.79 4 4 4z"}),"Person4");o.Z=a},2373:function(e,o,r){var t=r(4836);o.Z=void 0;var n=t(r(5045)),l=r(6417),a=(0,n.default)([(0,l.jsx)("path",{d:"m22 20.59-4.69-4.69C18.37 14.55 19 12.85 19 11c0-4.42-3.58-8-8-8-4.08 0-7.44 3.05-7.93 7h2.02C5.57 7.17 8.03 5 11 5c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69L20.59 22 22 20.59z"},"0"),(0,l.jsx)("path",{d:"M8.43 9.69 9.65 15h1.64l1.26-3.78.95 2.28h2V12h-1l-1.25-3h-1.54l-1.12 3.37L9.35 7H7.7l-1.25 4H1v1.5h6.55z"},"1")],"Troubleshoot");o.Z=a},9881:function(e,o,r){r.d(o,{Z:function(){return z}});var t=r(3366),n=r(7462),l=r(7313),a=r(4146),i=r(1921),s=r(7551),c=r(7592),d=r(7342),u=r(1615),p=r(501),h=r(7430),v=r(2298);function m(e){return(0,v.Z)("MuiAlert",e)}var x=(0,h.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),f=r(7131),g=r(1171),Z=r(6417),b=(0,g.Z)((0,Z.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),C=(0,g.Z)((0,Z.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),y=(0,g.Z)((0,Z.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),j=(0,g.Z)((0,Z.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),A=r(1251);const M=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],S=(0,c.ZP)(p.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[r.variant],o[`${r.variant}${(0,u.Z)(r.color||r.severity)}`]]}})((e=>{let{theme:o,ownerState:r}=e;const t="light"===o.palette.mode?s._j:s.$n,l="light"===o.palette.mode?s.$n:s._j,a=r.color||r.severity;return(0,n.Z)({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},a&&"standard"===r.variant&&{color:o.vars?o.vars.palette.Alert[`${a}Color`]:t(o.palette[a].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${a}StandardBg`]:l(o.palette[a].light,.9),[`& .${x.icon}`]:o.vars?{color:o.vars.palette.Alert[`${a}IconColor`]}:{color:o.palette[a].main}},a&&"outlined"===r.variant&&{color:o.vars?o.vars.palette.Alert[`${a}Color`]:t(o.palette[a].light,.6),border:`1px solid ${(o.vars||o).palette[a].light}`,[`& .${x.icon}`]:o.vars?{color:o.vars.palette.Alert[`${a}IconColor`]}:{color:o.palette[a].main}},a&&"filled"===r.variant&&(0,n.Z)({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${a}FilledColor`],backgroundColor:o.vars.palette.Alert[`${a}FilledBg`]}:{backgroundColor:"dark"===o.palette.mode?o.palette[a].dark:o.palette[a].main,color:o.palette.getContrastText(o.palette[a].main)}))})),w=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),k=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),D=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),N={success:(0,Z.jsx)(b,{fontSize:"inherit"}),warning:(0,Z.jsx)(C,{fontSize:"inherit"}),error:(0,Z.jsx)(y,{fontSize:"inherit"}),info:(0,Z.jsx)(j,{fontSize:"inherit"})};var z=l.forwardRef((function(e,o){var r,l,s,c,p,h;const v=(0,d.Z)({props:e,name:"MuiAlert"}),{action:x,children:g,className:b,closeText:C="Close",color:y,components:j={},componentsProps:z={},icon:$,iconMapping:I=N,onClose:P,role:R="alert",severity:L="success",slotProps:H={},slots:B={},variant:V="standard"}=v,W=(0,t.Z)(v,M),T=(0,n.Z)({},v,{color:y,severity:L,variant:V}),_=(e=>{const{variant:o,color:r,severity:t,classes:n}=e,l={root:["root",`${o}${(0,u.Z)(r||t)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return(0,i.Z)(l,m,n)})(T),F=null!=(r=null!=(l=B.closeButton)?l:j.CloseButton)?r:f.Z,O=null!=(s=null!=(c=B.closeIcon)?c:j.CloseIcon)?s:A.Z,E=null!=(p=H.closeButton)?p:z.closeButton,J=null!=(h=H.closeIcon)?h:z.closeIcon;return(0,Z.jsxs)(S,(0,n.Z)({role:R,elevation:0,ownerState:T,className:(0,a.Z)(_.root,b),ref:o},W,{children:[!1!==$?(0,Z.jsx)(w,{ownerState:T,className:_.icon,children:$||I[L]||N[L]}):null,(0,Z.jsx)(k,{ownerState:T,className:_.message,children:g}),null!=x?(0,Z.jsx)(D,{ownerState:T,className:_.action,children:x}):null,null==x&&P?(0,Z.jsx)(D,{ownerState:T,className:_.action,children:(0,Z.jsx)(F,(0,n.Z)({size:"small","aria-label":C,title:C,color:"inherit",onClick:P},E,{children:(0,Z.jsx)(O,(0,n.Z)({fontSize:"small"},J))}))}):null]}))}))},891:function(e,o,r){r.d(o,{Z:function(){return M}});var t=r(3366),n=r(7462),l=r(7313),a=r(4146),i=r(1921),s=r(1615),c=r(7592),d=r(7342),u=r(7037),p=r(6983),h=r(1113),v=r(7430),m=r(2298);function x(e){return(0,m.Z)("MuiLink",e)}var f=(0,v.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=r(6428),Z=r(7551);const b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var C=e=>{let{theme:o,ownerState:r}=e;const t=(e=>b[e]||e)(r.color),n=(0,g.DW)(o,`palette.${t}`,!1)||r.color,l=(0,g.DW)(o,`palette.${t}Channel`);return"vars"in o&&l?`rgba(${l} / 0.4)`:(0,Z.Fq)(n,.4)},y=r(6417);const j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],A=(0,c.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o[`underline${(0,s.Z)(r.underline)}`],"button"===r.component&&o.button]}})((e=>{let{theme:o,ownerState:r}=e;return(0,n.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,n.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:C({theme:o,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}})}));var M=l.forwardRef((function(e,o){const r=(0,d.Z)({props:e,name:"MuiLink"}),{className:c,color:h="primary",component:v="a",onBlur:m,onFocus:f,TypographyClasses:g,underline:Z="always",variant:C="inherit",sx:M}=r,S=(0,t.Z)(r,j),{isFocusVisibleRef:w,onBlur:k,onFocus:D,ref:N}=(0,u.Z)(),[z,$]=l.useState(!1),I=(0,p.Z)(o,N),P=(0,n.Z)({},r,{color:h,component:v,focusVisible:z,underline:Z,variant:C}),R=(e=>{const{classes:o,component:r,focusVisible:t,underline:n}=e,l={root:["root",`underline${(0,s.Z)(n)}`,"button"===r&&"button",t&&"focusVisible"]};return(0,i.Z)(l,x,o)})(P);return(0,y.jsx)(A,(0,n.Z)({color:h,className:(0,a.Z)(R.root,c),classes:g,component:v,onBlur:e=>{k(e),!1===w.current&&$(!1),m&&m(e)},onFocus:e=>{D(e),!0===w.current&&$(!0),f&&f(e)},ref:I,ownerState:P,variant:C,sx:[...Object.keys(b).includes(h)?[]:[{color:h}],...Array.isArray(M)?M:[M]]},S))}))},1251:function(e,o,r){r(7313);var t=r(1171),n=r(6417);o.Z=(0,t.Z)((0,n.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")}}]);