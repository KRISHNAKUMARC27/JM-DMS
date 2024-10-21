"use strict";(self.webpackChunkberry_free_material_react_cra=self.webpackChunkberry_free_material_react_cra||[]).push([[812,67],{7812:function(e,t,a){a.r(t);var i=a(9019),r=a(4631),n=a(6835),s=a(3477),l=a(4076),o=a(7478),c=a(3467),d=a(8797),u=a(1405),p=a(3497),v=a(2401),h=a(6417);t.default=e=>{let{data:t,updateData:a}=e;const m=e=>i=>{const r={...t,[e]:i.target.value};a(r)};return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(p.Z,{title:"Job Card Vehicle Details",children:(0,h.jsxs)(i.ZP,{container:!0,direction:"row",spacing:v.dv,children:[(0,h.jsx)(i.ZP,{item:!0,xs:6,children:(0,h.jsx)(r.Z,{label:"Vehicle Reg. No.",required:!0,variant:"outlined",value:t.vehicleRegNo||"",onChange:e=>{const i={...t,vehicleRegNo:e.target.value.toUpperCase()};a(i)}})}),(0,h.jsx)(i.ZP,{item:!0,xs:6,children:(0,h.jsx)(r.Z,{label:"Vehicle Name",required:!0,variant:"outlined",value:t.vehicleName||"",onChange:e=>{const i={...t,vehicleName:e.target.value};a(i)}})}),(0,h.jsx)(i.ZP,{item:!0,xs:6,children:(0,h.jsx)(r.Z,{label:"Vehicle Model",required:!0,variant:"outlined",value:t.vehicleModel||"",onChange:e=>{const i={...t,vehicleModel:e.target.value};a(i)}})}),(0,h.jsx)(i.ZP,{item:!0,xs:6,children:(0,h.jsx)(r.Z,{label:"Vehicle K.Ms",required:!0,variant:"outlined",value:t.kiloMeters||"",onChange:e=>{const i={...t,kiloMeters:e.target.value};a(i)}})}),(0,h.jsx)(i.ZP,{item:!0,xs:6,children:(0,h.jsx)(r.Z,{label:"Fuel Points",required:!0,variant:"outlined",value:t.fuelPoints||"",onChange:e=>{const i={...t,fuelPoints:e.target.value};a(i)}})}),(0,h.jsx)(i.ZP,{item:!0,xs:6,children:(0,h.jsx)(r.Z,{label:"Technician Name",variant:"outlined",value:t.technicianName||"",onChange:e=>{const i={...t,technicianName:e.target.value};a(i)}})}),(0,h.jsx)(i.ZP,{item:!0,xs:12,children:(0,h.jsxs)(n.Z,{children:[(0,h.jsx)(s.Z,{children:(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(o.Z,{children:"ITEMS"}),(0,h.jsx)(o.Z,{children:"OK/NOT OK"})]})}),(0,h.jsx)(c.Z,{children:Object.entries({"COVER ":"cover","GLASS ":"glass","SPARE WHEEL":"spareWheel","DASHBOARD & TOOL":"dashboardAndTools","JACKEY HANDLES":"jackeyHandles","TOOL KITS":"toolKits","PEN DRIVE":"penDrive","WHEEL CAP":"wheelCap","A/C GRILLS":"acGrills"}).map((e=>{let[a,i]=e;return(0,h.jsxs)(l.Z,{children:[(0,h.jsx)(o.Z,{children:a}),(0,h.jsx)(o.Z,{children:(0,h.jsxs)(d.Z,{value:t[i]||"",onChange:m(i),children:[(0,h.jsx)(u.Z,{value:"OK",children:"OK"}),(0,h.jsx)(u.Z,{value:"NOT OK",children:"NOT OK"})]})})]},a)}))})]})}),(0,h.jsx)(i.ZP,{item:!0,xs:6,children:(0,h.jsx)(r.Z,{label:"Driver Name",variant:"outlined",value:t.driver||"",onChange:e=>{const i={...t,driver:e.target.value};a(i)}})}),(0,h.jsx)(i.ZP,{item:!0,xs:6,children:(0,h.jsx)(r.Z,{label:"Vehicle Out Date",variant:"outlined",value:t.vehicleOutDate||"",onChange:e=>{const i={...t,vehicleOutDate:e.target.value};a(i)}})})]})})})}},1405:function(e,t,a){a.d(t,{Z:function(){return $}});var i=a(3366),r=a(7462),n=a(7313),s=a(4146),l=a(1921),o=a(7551),c=a(7592),d=a(7342),u=a(1195),p=a(5272),v=a(4993),h=a(6983),m=a(9273),g=a(7363),b=a(1081),Z=a(7430),x=a(2298);function j(e){return(0,x.Z)("MuiMenuItem",e)}var C=(0,Z.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),f=a(6417);const y=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],O=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((e=>{let{theme:t,ownerState:a}=e;return(0,r.Z)({},t.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,o.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:(0,o.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${C.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,o.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,o.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${C.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${C.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity},[`& + .${m.Z.root}`]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},[`& + .${m.Z.inset}`]:{marginLeft:52},[`& .${b.Z.root}`]:{marginTop:0,marginBottom:0},[`& .${b.Z.inset}`]:{paddingLeft:36},[`& .${g.Z.root}`]:{minWidth:36}},!a.dense&&{[t.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&(0,r.Z)({minHeight:32,paddingTop:4,paddingBottom:4},t.typography.body2,{[`& .${g.Z.root} svg`]:{fontSize:"1.25rem"}}))}));var $=n.forwardRef((function(e,t){const a=(0,d.Z)({props:e,name:"MuiMenuItem"}),{autoFocus:o=!1,component:c="li",dense:p=!1,divider:m=!1,disableGutters:g=!1,focusVisibleClassName:b,role:Z="menuitem",tabIndex:x,className:C}=a,$=(0,i.Z)(a,y),N=n.useContext(u.Z),P=n.useMemo((()=>({dense:p||N.dense||!1,disableGutters:g})),[N.dense,p,g]),k=n.useRef(null);(0,v.Z)((()=>{o&&k.current&&k.current.focus()}),[o]);const M=(0,r.Z)({},a,{dense:P.dense,divider:m,disableGutters:g}),V=(e=>{const{disabled:t,dense:a,divider:i,disableGutters:n,selected:s,classes:o}=e,c={root:["root",a&&"dense",t&&"disabled",!n&&"gutters",i&&"divider",s&&"selected"]},d=(0,l.Z)(c,j,o);return(0,r.Z)({},o,d)})(a),S=(0,h.Z)(k,t);let D;return a.disabled||(D=void 0!==x?x:-1),(0,f.jsx)(u.Z.Provider,{value:P,children:(0,f.jsx)(O,(0,r.Z)({ref:S,role:Z,tabIndex:D,component:c,focusVisibleClassName:(0,s.Z)(V.focusVisible,b),className:(0,s.Z)(V.root,C)},$,{ownerState:M,classes:V}))})}))}}]);