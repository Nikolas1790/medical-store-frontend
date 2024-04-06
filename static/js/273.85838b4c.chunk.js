"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[273],{3960:function(e,n,r){r.r(n),r.d(n,{default:function(){return U}});var t,s,a,i=r(9439),o=r(2131),l=r(8482),u=r(9637),d=r(168),c=r(619),h=r(2683),p=h.ZP.p(t||(t=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 89px;\n  height: 25px;\n  color: ",";\n  background: ",";\n\n  font-size: 14px;\n  border-radius: 40px;\n\n"])),(function(e){var n=e.type;return(0,c.l8)(n)}),(function(e){var n=e.type;return(0,c.SI)(n)})),m=r(8003),x=r(3393),f=r(9558),g=r(4674),v=h.ZP.p(s||(s=(0,d.Z)(["\n  color: ",";\n  margin-left: 4px;\n"])),g.Z.greenLight),j=h.ZP.button(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ","; // default value if width is not provided\n  height: ",";\n  font-size: 14px;\n  border: 1px solid ",";\n  border-radius: 60px;\n\n  fill: ",";\n  stroke: ",";\n\n  transition: all 0.25s linear;\n  &:hover {\n    fill: ",";\n    stroke: ",";\n    \n    color: ",";\n    background:  ",";\n      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); \n      border: none;\n      "," {   \n        color: ","; /* \u0422\u0430\u043a \u0442\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u043d\u0435\u0442 \u0431\u0435\u043b\u044b\u043c \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 */\n      }\n    }\n"])),(function(e){return e.width||"196px"}),(function(e){return e.height||"44px"}),g.Z.greenAmazing,g.Z.greenLight,g.Z.greenLight,g.Z.white,g.Z.white,g.Z.white,g.Z.greenLight,v,g.Z.white),Z=r(8553),w=r(8162),y=r(2791),b=r(6277),C=r(8007),S=r(4798),R=r(469),I=r(1758),k=r(4420),A=r(1222),D=r(184),L=C.Ry({name:C.Z_().required(),suppliers:C.Z_().required(),amount:C.Z_().required(),address:C.Z_().required(),date:C.Z_().required(),status:C.Z_().required()});function _(e){var n=e.closeModals,r=e.isUpdate,t=e.existingSuppliers,s=(0,y.useState)(""),a=(0,i.Z)(s,2),o=a[0],l=a[1],d=(0,y.useState)(!1),h=(0,i.Z)(d,2),p=h[0],m=h[1],x=(0,y.useRef)(null),f=(0,k.I0)(),g=null===t||void 0===t?void 0:t[6];(0,y.useEffect)((function(){var e=function(e){x.current&&!x.current.contains(e.target)&&m(!1)};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}),[]);var v=r?{name:null===t||void 0===t?void 0:t[0],suppliers:null===t||void 0===t?void 0:t[2],amount:null===t||void 0===t?void 0:t[4].replace(/^\D*/,"").trim(),address:null===t||void 0===t?void 0:t[1],date:null===t||void 0===t?void 0:t[3],status:null===t||void 0===t?void 0:t[5]}:{name:"",suppliers:"",amount:"",address:"",date:"",status:""},j=(0,b.TA)({initialValues:v,validationSchema:L,onSubmit:function(e,t){var s=t.resetForm;console.log(e),f(r?(0,u.S6)({id:g,supplierData:e}):(0,u.GI)(e)),s(),n()}});return(0,D.jsxs)(S.KS,{children:[(0,D.jsx)(S.Pg,{onClick:n,children:(0,D.jsx)("svg",{width:26,height:26,children:(0,D.jsx)("use",{href:"".concat(Z.Z,"#icon-x")})})}),(0,D.jsx)(S.Dx,{children:r?"Edit product":"Add a new suppliers"}),(0,D.jsx)("div",{children:(0,D.jsxs)("form",{onSubmit:j.handleSubmit,children:[(0,D.jsxs)(S.LZ,{children:[(0,D.jsxs)(S.oY,{children:[(0,D.jsx)(S.II,{name:"name",type:"text",onChange:j.handleChange,onBlur:j.handleBlur,value:j.values.name,placeholder:"Suppliers Info",haserror:j.touched.name&&j.errors.name}),(0,D.jsx)(S.II,{name:"suppliers",type:"text",onChange:j.handleChange,onBlur:j.handleBlur,value:j.values.suppliers,placeholder:"Company",haserror:j.touched.suppliers&&j.errors.suppliers}),(0,D.jsx)(S.II,{name:"amount",type:"text",onChange:j.handleChange,onBlur:j.handleBlur,value:j.values.amount,placeholder:"Ammount",haserror:j.touched.amount&&j.errors.amount})]}),(0,D.jsxs)(S.oY,{children:[(0,D.jsx)(S.II,{name:"address",type:"text",onChange:j.handleChange,onBlur:j.handleBlur,value:j.values.address,placeholder:"Address",haserror:j.touched.address&&j.errors.address}),(0,D.jsx)(S.II,{name:"date",type:"date",onChange:j.handleChange,onBlur:j.handleBlur,value:j.values.date,placeholder:"Delivery date",haserror:j.touched.date&&j.errors.date}),(0,D.jsx)(A.Z,{isDropdownOpen:p,toggleDropdown:function(){return m(!p)},selectedCategory:o,setSelectedCategory:l,formik:j,categories:c.oR,hasError:j.touched.status&&j.errors.status,reservName:null===t||void 0===t?void 0:t[5],def:"supplies",fieldName:"status"})]})]}),(0,D.jsxs)(S.jG,{children:[(0,D.jsx)(R.Z,{width:"133px",label:"Add",type:"submit"}),(0,D.jsx)(I.Z,{width:"133px",label:"Cansel",onClick:n})]})]})})]})}function B(e){var n=e.width,r=e.height,t=e.name,s=e.isUpdate,a=e.item,o=(0,y.useState)(!1),l=(0,i.Z)(o,2),u=l[0],d=l[1];return(0,D.jsxs)("div",{children:[(0,D.jsx)(j,{width:n,height:r,onClick:function(){return d(!0)},children:"edit"===t?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)("svg",{width:14,height:14,children:(0,D.jsx)("use",{href:"".concat(Z.Z,"#icon-edit")})}),(0,D.jsx)(v,{children:"Edit"})]}):(0,D.jsx)("p",{children:"Add a new suppliers"})}),(0,D.jsx)(w.Z,{active:u,setActive:d,children:(0,D.jsx)(_,{closeModals:function(){return d()},isUpdate:s,existingSuppliers:a})})]})}function P(e){var n=e.suppliers,r=n?n.map((function(e){return[e.name,e.address,e.suppliers,e.date,e.amount,e.status,e._id]})):[],t=function(e,n,r){var t=r[e],s={};("action"!==n&&(s.borderRight="1px solid ".concat(g.Z.blackPrimarySecondary)),"date"===n)&&(t=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}));return"ammount"===n&&(t=t.replace(/^\D*/,"").trim()),"name"===n&&(s.paddingLeft="0px"),(0,D.jsx)(m.b,{style:s,children:"status"===n?(0,D.jsx)(p,{type:t,children:t}):"action"===n?(0,D.jsx)(B,{width:"82px",height:"34px",name:"edit",isUpdate:!0,item:t}):t})};return(0,D.jsxs)(o.zf,{children:[(0,D.jsx)(o.xD,{children:"All suppliers"}),(0,D.jsx)(o.lL,{children:(0,D.jsxs)(x.L,{numRows:r.length,defaultRowHeight:76,columnWidths:[191,188,166,215,162,189,129],enableColumnResizing:!1,enableRowResizing:!1,enableRowHeader:!1,children:[(0,D.jsx)(f.s,{name:"User Info",cellRenderer:function(e){return t(e,"name",r.map((function(e){return e[0]})))}}),(0,D.jsx)(f.s,{name:"Address",cellRenderer:function(e){return t(e,"address",r.map((function(e){return e[1]})))}}),(0,D.jsx)(f.s,{name:"Company",cellRenderer:function(e){return t(e,"company",r.map((function(e){return e[2]})))}}),(0,D.jsx)(f.s,{name:"Delivery date",cellRenderer:function(e){return t(e,"date",r.map((function(e){return e[3]})))}}),(0,D.jsx)(f.s,{name:"Ammount",cellRenderer:function(e){return t(e,"ammount",r.map((function(e){return e[4]})))}}),(0,D.jsx)(f.s,{name:"Status",cellRenderer:function(e){return t(e,"status",r.map((function(e){return e[5]})))}}),(0,D.jsx)(f.s,{name:"Action",cellRenderer:function(e){return t(e,"action",r)}})]},"table-".concat(r))})]})}var E=r(2962),q=r(2424);function z(){var e=(0,k.I0)(),n=(0,k.v9)(E.xF),r=(0,y.useState)(1),t=(0,i.Z)(r,2),s=t[0],a=t[1],d=(0,y.useState)(""),c=(0,i.Z)(d,2),h=c[0],p=c[1];(0,y.useEffect)((function(){e((0,u.H9)({page:s,limit:5,name:h}))}),[e,s,5,h]);var m=n.total||0,x=Math.ceil(m/5);return(0,D.jsx)(o.OO,{children:(0,D.jsxs)(o.b0,{children:[(0,D.jsxs)(o.Nc,{children:[(0,D.jsx)(l.Z,{dataFactory:u.H9,setFilterName:p,setCurrentPage:a}),(0,D.jsx)(B,{})]}),(0,D.jsxs)("div",{children:[(0,D.jsx)(P,{suppliers:n.suppliers}),(0,D.jsx)(q.t,{currentPage:s,totalPages:x,onPageChange:function(e){a(e)}})]})]})})}function U(){return(0,D.jsx)(z,{})}}}]);
//# sourceMappingURL=273.85838b4c.chunk.js.map