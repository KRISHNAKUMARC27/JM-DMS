"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[573],{7573:function(e,t,r){r.r(t);var o=r(7313),a=r(9019),n=r(4631),l=r(1095),s=r(6835),i=r(3477),c=r(4076),d=r(7478),u=r(3467),h=r(1689),x=r(7131),g=r(1207),p=r(4481),v=r(3497),Z=r(2401),m=r(9881),j=r(3984),f=r(3483),y=r(6417);t.default=function(){const[e,t]=(0,o.useState)({}),[r,C]=(0,o.useState)([]),[k,A]=(0,o.useState)(""),[M,S]=(0,o.useState)(""),[w,W]=o.useState(!1),[z,$]=o.useState(""),[E,b]=o.useState("");(0,o.useEffect)((()=>(L(),()=>{t({}),C([])})),[]);const L=async()=>{try{const e=await(0,f.A_)("/api/externalWork/externalWorkCategory");C(e)}catch(e){console.error(e.message)}},P=async e=>{try{const r=await(0,f.j0)("/api/externalWork/saveExternalWorkCategory",e);$("ExternalWorkCategory "+r.category+" created successfully"),b("success"),W(!0),t({}),L(),console.log(r)}catch(r){console.error(r.message),$(r.message),b("info"),W(!0)}};return(0,y.jsx)("div",{children:(0,y.jsx)(v.Z,{title:"ExternalWork Category Details",children:(0,y.jsxs)(a.ZP,{container:!0,direction:"row",spacing:Z.dv,children:[(0,y.jsxs)(a.ZP,{item:!0,xs:4,children:[(0,y.jsx)("br",{}),(0,y.jsx)(n.Z,{label:"Enter ExternalWork Category",required:!0,variant:"outlined",value:e.category||"",onChange:r=>{const o={...e,category:r.target.value};t(o)}})]}),(0,y.jsxs)(a.ZP,{item:!0,xs:12,children:[(0,y.jsx)("br",{}),(0,y.jsx)("div",{className:"content",children:e.category&&(0,y.jsx)(l.Z,{variant:"contained",color:"error",onClick:()=>(()=>{const t={category:e.category};P(t)})(),children:"Create ExternalWork Category"})})]}),(0,y.jsxs)(a.ZP,{item:!0,xs:12,children:[w&&(0,y.jsx)(j.Z,{sx:{width:"100%"},spacing:2,children:(0,y.jsx)(m.Z,{variant:"filled",severity:E,onClose:()=>W(!1),children:z})}),(0,y.jsx)(a.ZP,{item:!0,xs:12,children:(0,y.jsx)("div",{style:{overflowX:"auto"},children:(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(i.Z,{children:(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(d.Z,{children:"ExternalWork Category"}),(0,y.jsx)(d.Z,{children:"ExternalWork Count"}),(0,y.jsx)(d.Z,{children:"Action"})]})}),(0,y.jsx)(u.Z,{children:r.map(((e,t)=>(0,y.jsxs)(c.Z,{children:[(0,y.jsx)(d.Z,{children:(0,y.jsx)(n.Z,{variant:"outlined",value:(null===e||void 0===e?void 0:e.category)||"",onChange:o=>((e,t,o,a)=>{const n=[...r];n[o][a]=t,C(n),A(e),S(t)})(e.category,o.target.value,t,"category")})}),(0,y.jsx)(d.Z,{children:null===e||void 0===e?void 0:e.externalworkCount}),(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(h.Z,{arrow:!0,placement:"right",title:"Update",children:(0,y.jsx)(x.Z,{onClick:()=>{(async()=>{try{const e=await(0,f.pw)("/api/externalWork/externalWorkCategory/"+k+"/"+M,{});$("ExternalWorkCategory "+e.category+" updated successfully"),b("success"),W(!0),A(""),S(""),L()}catch(e){console.error(e.message),$(e.message),b("info"),W(!0),A(""),S("")}})()},children:(0,y.jsx)(g.Z,{})})}),(0,y.jsx)(h.Z,{arrow:!0,placement:"right",title:"Delete",children:(0,y.jsx)(x.Z,{onClick:()=>{(async e=>{try{const t=await(0,f.Jl)("/api/externalWork/externalWorkCategory/"+e);$("ExternalWorkCategory "+t.category+" deleted successfully"),b("success"),W(!0),L()}catch(t){$(t.message),b("info"),W(!0),console.error(t.message)}})(e.id)},children:(0,y.jsx)(p.Z,{})})})]})]},t)))})]})})})]})]})})})}},4481:function(e,t,r){var o=r(1171),a=r(6417);t.Z=(0,o.Z)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1207:function(e,t,r){var o=r(1171),a=r(6417);t.Z=(0,o.Z)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},9881:function(e,t,r){r.d(t,{Z:function(){return E}});var o=r(3366),a=r(7462),n=r(7313),l=r(4146),s=r(1921),i=r(7551),c=r(7592),d=r(7342),u=r(1615),h=r(501),x=r(7430),g=r(2298);function p(e){return(0,g.Z)("MuiAlert",e)}var v=(0,x.Z)("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Z=r(7131),m=r(1171),j=r(6417),f=(0,m.Z)((0,j.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),y=(0,m.Z)((0,j.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),C=(0,m.Z)((0,j.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),k=(0,m.Z)((0,j.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),A=r(1251);const M=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],S=(0,c.ZP)(h.Z,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,u.Z)(r.color||r.severity)}`]]}})((e=>{let{theme:t,ownerState:r}=e;const o="light"===t.palette.mode?i._j:i.$n,n="light"===t.palette.mode?i.$n:i._j,l=r.color||r.severity;return(0,a.Z)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},l&&"standard"===r.variant&&{color:t.vars?t.vars.palette.Alert[`${l}Color`]:o(t.palette[l].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${l}StandardBg`]:n(t.palette[l].light,.9),[`& .${v.icon}`]:t.vars?{color:t.vars.palette.Alert[`${l}IconColor`]}:{color:t.palette[l].main}},l&&"outlined"===r.variant&&{color:t.vars?t.vars.palette.Alert[`${l}Color`]:o(t.palette[l].light,.6),border:`1px solid ${(t.vars||t).palette[l].light}`,[`& .${v.icon}`]:t.vars?{color:t.vars.palette.Alert[`${l}IconColor`]}:{color:t.palette[l].main}},l&&"filled"===r.variant&&(0,a.Z)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert[`${l}FilledColor`],backgroundColor:t.vars.palette.Alert[`${l}FilledBg`]}:{backgroundColor:"dark"===t.palette.mode?t.palette[l].dark:t.palette[l].main,color:t.palette.getContrastText(t.palette[l].main)}))})),w=(0,c.ZP)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),W=(0,c.ZP)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),z=(0,c.ZP)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),$={success:(0,j.jsx)(f,{fontSize:"inherit"}),warning:(0,j.jsx)(y,{fontSize:"inherit"}),error:(0,j.jsx)(C,{fontSize:"inherit"}),info:(0,j.jsx)(k,{fontSize:"inherit"})};var E=n.forwardRef((function(e,t){var r,n,i,c,h,x;const g=(0,d.Z)({props:e,name:"MuiAlert"}),{action:v,children:m,className:f,closeText:y="Close",color:C,components:k={},componentsProps:E={},icon:b,iconMapping:L=$,onClose:P,role:I="alert",severity:_="success",slotProps:R={},slots:N={},variant:H="standard"}=g,B=(0,o.Z)(g,M),V=(0,a.Z)({},g,{color:C,severity:_,variant:H}),O=(e=>{const{variant:t,color:r,severity:o,classes:a}=e,n={root:["root",`${t}${(0,u.Z)(r||o)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,s.Z)(n,p,a)})(V),D=null!=(r=null!=(n=N.closeButton)?n:k.CloseButton)?r:Z.Z,T=null!=(i=null!=(c=N.closeIcon)?c:k.CloseIcon)?i:A.Z,F=null!=(h=R.closeButton)?h:E.closeButton,q=null!=(x=R.closeIcon)?x:E.closeIcon;return(0,j.jsxs)(S,(0,a.Z)({role:I,elevation:0,ownerState:V,className:(0,l.Z)(O.root,f),ref:t},B,{children:[!1!==b?(0,j.jsx)(w,{ownerState:V,className:O.icon,children:b||L[_]||$[_]}):null,(0,j.jsx)(W,{ownerState:V,className:O.message,children:m}),null!=v?(0,j.jsx)(z,{ownerState:V,className:O.action,children:v}):null,null==v&&P?(0,j.jsx)(z,{ownerState:V,className:O.action,children:(0,j.jsx)(D,(0,a.Z)({size:"small","aria-label":y,title:y,color:"inherit",onClick:P},F,{children:(0,j.jsx)(T,(0,a.Z)({fontSize:"small"},q))}))}):null]}))}))},1251:function(e,t,r){r(7313);var o=r(1171),a=r(6417);t.Z=(0,o.Z)((0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")}}]);