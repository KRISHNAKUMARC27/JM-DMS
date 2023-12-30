"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[290],{6290:function(e,o,t){t.r(o);var r=t(7313),n=t(3404),a=t(891),l=t(9546),s=t(1773),i=t(93),c=t(2373),d=t(1095),u=t(9881),p=t(3984),h=t(6417);const m=(0,l.Z)((0,r.lazy)((()=>t.e(741).then(t.bind(t,1741))))),v=(0,l.Z)((0,r.lazy)((()=>Promise.all([t.e(5),t.e(812)]).then(t.bind(t,7812))))),x=(0,l.Z)((0,r.lazy)((()=>Promise.all([t.e(5),t.e(889)]).then(t.bind(t,4889)))));o.default=function(){const[e,o]=(0,r.useState)("UserDetails"),[t,l]=(0,r.useState)({}),[f,g]=(0,r.useState)({}),[Z,b]=(0,r.useState)([...Array(1)].map((()=>({complaints:"",completed:"",remarks:""})))),[y,C]=r.useState(!1),[j,A]=r.useState(""),[S,w]=r.useState("");function M(){return t.ownerName&&t.ownerAddress&&t.ownerPhoneNumber}function k(){return f.vehicleRegNo&&f.vehicleName&&f.vehicleModel&&f.kiloMeters&&f.fuelPoints}function N(){return Z[0].complaints}(0,r.useEffect)((()=>()=>{l({}),g({}),b([])}),[]);const z=async e=>{await fetch("http://192.168.0.110:8080/jobCard",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((async e=>{if(!e.ok){const o=await e.text();throw new Error(o||e.statusText)}return e.json()})).then((e=>{console.log(e),A("JobCard "+e.jobId+" for "+e.vehicleRegNo+" created successfully"),w("success"),C(!0),l({}),g({}),b([...Array(1)].map((()=>({complaints:"",completed:"",remarks:""}))))})).catch((e=>{console.log(e.message),A(e.message),w("info"),C(!0)}))};return(0,h.jsxs)("div",{children:[(0,h.jsxs)(n.Z,{"aria-label":"breadcrumb",children:[(0,h.jsxs)(a.Z,{sx:{padding:"5px 15px",cursor:"pointer",textDecoration:"none",color:e=>e.palette.text.primary,borderBottom:M()?"3px solid green":"3px solid orange","&:hover":{color:e=>e.palette.secondary.main}},onClick:()=>o("UserDetails"),children:[(0,h.jsx)(i.Z,{sx:{verticalAlign:"middle",marginRight:"5px"}}),"User Details"]}),(0,h.jsxs)(a.Z,{sx:{padding:"5px 15px",cursor:"pointer",textDecoration:"none",color:e=>e.palette.text.primary,borderBottom:k()?"3px solid green":"3px solid orange","&:hover":{color:e=>e.palette.secondary.main}},onClick:()=>o("CarDetails"),children:[(0,h.jsx)(s.Z,{sx:{verticalAlign:"middle",marginRight:"5px"}}),"Car Details"]}),(0,h.jsxs)(a.Z,{sx:{padding:"5px 15px",cursor:"pointer",textDecoration:"none",color:e=>e.palette.text.primary,borderBottom:N()?"3px solid green":"3px solid orange","&:hover":{color:e=>e.palette.secondary.main}},onClick:()=>o("JobInfo"),children:[(0,h.jsx)(c.Z,{sx:{verticalAlign:"middle",marginRight:"5px"}}),"Job Info"]})]}),(0,h.jsxs)("div",{className:"content",children:["CarDetails"===e&&(0,h.jsx)(v,{data:f,updateData:g}),"UserDetails"===e&&(0,h.jsx)(m,{data:t,updateData:l}),"JobInfo"===e&&(0,h.jsx)(x,{data:Z,updateData:b})]}),(0,h.jsx)("br",{}),(0,h.jsx)("div",{className:"content",children:M()&&k()&&N()&&(0,h.jsx)(d.Z,{variant:"contained",color:"error",onClick:()=>{const e={jobStatus:"OPEN",ownerName:t.ownerName,ownerAddress:t.ownerAddress,ownerPhoneNumber:t.ownerPhoneNumber,ownerEmailId:t.ownerEmailId,vehicleRegNo:f.vehicleRegNo,vehicleName:f.vehicleName,vehicleModel:f.vehicleModel,kiloMeters:f.kiloMeters,fuelPoints:f.fuelPoints,technicianName:f.technicianName,driver:f.driver,vehicleOutDate:f.vehicleOutDate,cover:f.cover,glass:f.glass,dashboardAndTools:f.dashboardAndTools,spareWheel:f.spareWheel,jackeyHandles:f.jackeyHandles,toolKits:f.toolKits,penDrive:f.penDrive,wheelCap:f.wheelCap,acGrills:f.acGrills,jobInfo:Z};z(e)},children:"Submit JobCard"})}),y&&(0,h.jsx)(p.Z,{sx:{width:"100%"},spacing:2,children:(0,h.jsx)(u.Z,{variant:"filled",severity:S,onClose:()=>C(!1),children:j})})]})}},1773:function(e,o,t){var r=t(4836);o.Z=void 0;var n=r(t(5045)),a=t(6417),l=(0,n.default)((0,a.jsx)("path",{d:"M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM7.5 16c-.83 0-1.5-.67-1.5-1.5S6.67 13 7.5 13s1.5.67 1.5 1.5S8.33 16 7.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5.81 10l1.04-3h10.29l1.04 3H5.81z"}),"DirectionsCarFilled");o.Z=l},93:function(e,o,t){var r=t(4836);o.Z=void 0;var n=r(t(5045)),a=t(6417),l=(0,n.default)((0,a.jsx)("path",{d:"M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM12 12c2.21 0 4-1.79 4-4V4.5c0-.83-.67-1.5-1.5-1.5-.52 0-.98.27-1.25.67-.27-.4-.73-.67-1.25-.67s-.98.27-1.25.67c-.27-.4-.73-.67-1.25-.67C8.67 3 8 3.67 8 4.5V8c0 2.21 1.79 4 4 4z"}),"Person4");o.Z=l},2373:function(e,o,t){var r=t(4836);o.Z=void 0;var n=r(t(5045)),a=t(6417),l=(0,n.default)([(0,a.jsx)("path",{d:"m22 20.59-4.69-4.69C18.37 14.55 19 12.85 19 11c0-4.42-3.58-8-8-8-4.08 0-7.44 3.05-7.93 7h2.02C5.57 7.17 8.03 5 11 5c3.31 0 6 2.69 6 6s-2.69 6-6 6c-2.42 0-4.5-1.44-5.45-3.5H3.4C4.45 16.69 7.46 19 11 19c1.85 0 3.55-.63 4.9-1.69L20.59 22 22 20.59z"},"0"),(0,a.jsx)("path",{d:"M8.43 9.69 9.65 15h1.64l1.26-3.78.95 2.28h2V12h-1l-1.25-3h-1.54l-1.12 3.37L9.35 7H7.7l-1.25 4H1v1.5h6.55z"},"1")],"Troubleshoot");o.Z=l},9881:function(e,o,t){t.d(o,{Z:function(){return D}});var r=t(3366),n=t(7462),a=t(7313),l=t(4146),s=t(1921),i=t(7551),c=t(7592),d=t(7342),u=t(1615),p=t(501),h=t(7430),m=t(2298);function v(e){return(0,m.Z)("MuiAlert",e)}var x=(0,h.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),f=t(7131),g=t(1171),Z=t(6417),b=(0,g.Z)((0,Z.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),y=(0,g.Z)((0,Z.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=(0,g.Z)((0,Z.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),j=(0,g.Z)((0,Z.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),A=t(1251);const S=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],w=(0,c.ZP)(p.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[t.variant],o[`${t.variant}${(0,u.Z)(t.color||t.severity)}`]]}})((e=>{let{theme:o,ownerState:t}=e;const r="light"===o.palette.mode?i._j:i.$n,a="light"===o.palette.mode?i.$n:i._j,l=t.color||t.severity;return(0,n.Z)({},o.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},l&&"standard"===t.variant&&{color:o.vars?o.vars.palette.Alert[`${l}Color`]:r(o.palette[l].light,.6),backgroundColor:o.vars?o.vars.palette.Alert[`${l}StandardBg`]:a(o.palette[l].light,.9),[`& .${x.icon}`]:o.vars?{color:o.vars.palette.Alert[`${l}IconColor`]}:{color:o.palette[l].main}},l&&"outlined"===t.variant&&{color:o.vars?o.vars.palette.Alert[`${l}Color`]:r(o.palette[l].light,.6),border:`1px solid ${(o.vars||o).palette[l].light}`,[`& .${x.icon}`]:o.vars?{color:o.vars.palette.Alert[`${l}IconColor`]}:{color:o.palette[l].main}},l&&"filled"===t.variant&&(0,n.Z)({fontWeight:o.typography.fontWeightMedium},o.vars?{color:o.vars.palette.Alert[`${l}FilledColor`],backgroundColor:o.vars.palette.Alert[`${l}FilledBg`]}:{backgroundColor:"dark"===o.palette.mode?o.palette[l].dark:o.palette[l].main,color:o.palette.getContrastText(o.palette[l].main)}))})),M=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,o)=>o.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),k=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,o)=>o.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),N=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,o)=>o.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),z={success:(0,Z.jsx)(b,{fontSize:"inherit"}),warning:(0,Z.jsx)(y,{fontSize:"inherit"}),error:(0,Z.jsx)(C,{fontSize:"inherit"}),info:(0,Z.jsx)(j,{fontSize:"inherit"})};var D=a.forwardRef((function(e,o){var t,a,i,c,p,h;const m=(0,d.Z)({props:e,name:"MuiAlert"}),{action:x,children:g,className:b,closeText:y="Close",color:C,components:j={},componentsProps:D={},icon:$,iconMapping:P=z,onClose:R,role:L="alert",severity:I="success",slotProps:B={},slots:H={},variant:V="standard"}=m,T=(0,r.Z)(m,S),W=(0,n.Z)({},m,{color:C,severity:I,variant:V}),F=(e=>{const{variant:o,color:t,severity:r,classes:n}=e,a={root:["root",`${o}${(0,u.Z)(t||r)}`,`${o}`],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(a,v,n)})(W),O=null!=(t=null!=(a=H.closeButton)?a:j.CloseButton)?t:f.Z,_=null!=(i=null!=(c=H.closeIcon)?c:j.CloseIcon)?i:A.Z,E=null!=(p=B.closeButton)?p:D.closeButton,J=null!=(h=B.closeIcon)?h:D.closeIcon;return(0,Z.jsxs)(w,(0,n.Z)({role:L,elevation:0,ownerState:W,className:(0,l.Z)(F.root,b),ref:o},T,{children:[!1!==$?(0,Z.jsx)(M,{ownerState:W,className:F.icon,children:$||P[I]||z[I]}):null,(0,Z.jsx)(k,{ownerState:W,className:F.message,children:g}),null!=x?(0,Z.jsx)(N,{ownerState:W,className:F.action,children:x}):null,null==x&&R?(0,Z.jsx)(N,{ownerState:W,className:F.action,children:(0,Z.jsx)(O,(0,n.Z)({size:"small","aria-label":y,title:y,color:"inherit",onClick:R},E,{children:(0,Z.jsx)(_,(0,n.Z)({fontSize:"small"},J))}))}):null]}))}))},891:function(e,o,t){t.d(o,{Z:function(){return S}});var r=t(3366),n=t(7462),a=t(7313),l=t(4146),s=t(1921),i=t(1615),c=t(7592),d=t(7342),u=t(7037),p=t(6983),h=t(1113),m=t(7430),v=t(2298);function x(e){return(0,v.Z)("MuiLink",e)}var f=(0,m.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=t(6428),Z=t(7551);const b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var y=e=>{let{theme:o,ownerState:t}=e;const r=(e=>b[e]||e)(t.color),n=(0,g.DW)(o,`palette.${r}`,!1)||t.color,a=(0,g.DW)(o,`palette.${r}Channel`);return"vars"in o&&a?`rgba(${a} / 0.4)`:(0,Z.Fq)(n,.4)},C=t(6417);const j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],A=(0,c.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,o[`underline${(0,i.Z)(t.underline)}`],"button"===t.component&&o.button]}})((e=>{let{theme:o,ownerState:t}=e;return(0,n.Z)({},"none"===t.underline&&{textDecoration:"none"},"hover"===t.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===t.underline&&(0,n.Z)({textDecoration:"underline"},"inherit"!==t.color&&{textDecorationColor:y({theme:o,ownerState:t})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===t.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${f.focusVisible}`]:{outline:"auto"}})}));var S=a.forwardRef((function(e,o){const t=(0,d.Z)({props:e,name:"MuiLink"}),{className:c,color:h="primary",component:m="a",onBlur:v,onFocus:f,TypographyClasses:g,underline:Z="always",variant:y="inherit",sx:S}=t,w=(0,r.Z)(t,j),{isFocusVisibleRef:M,onBlur:k,onFocus:N,ref:z}=(0,u.Z)(),[D,$]=a.useState(!1),P=(0,p.Z)(o,z),R=(0,n.Z)({},t,{color:h,component:m,focusVisible:D,underline:Z,variant:y}),L=(e=>{const{classes:o,component:t,focusVisible:r,underline:n}=e,a={root:["root",`underline${(0,i.Z)(n)}`,"button"===t&&"button",r&&"focusVisible"]};return(0,s.Z)(a,x,o)})(R);return(0,C.jsx)(A,(0,n.Z)({color:h,className:(0,l.Z)(L.root,c),classes:g,component:m,onBlur:e=>{k(e),!1===M.current&&$(!1),v&&v(e)},onFocus:e=>{N(e),!0===M.current&&$(!0),f&&f(e)},ref:P,ownerState:R,variant:y,sx:[...Object.keys(b).includes(h)?[]:[{color:h}],...Array.isArray(S)?S:[S]]},w))}))},1251:function(e,o,t){t(7313);var r=t(1171),n=t(6417);o.Z=(0,r.Z)((0,n.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")}}]);