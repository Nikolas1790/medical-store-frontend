"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[406],{469:function(n,e,r){r.d(e,{Z:function(){return u}});var t,i=r(619),a=r(168),o=r(4674),c=r(2683).ZP.button(t||(t=(0,a.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.29;\n\n  height: 44px;\n  width: ",";\n  border-radius: 60px;\n  color: ",";\n  background: ",";\n  transition: background 0.3s linear;\n\n  &:hover,\n  &:focus {\n    /* color: ","; */\n    background: ",";  \n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); \n  }\n  \n  @media (min-width: 768px) {\n    /* font-size: 16px; */\n    /* padding: ","; */\n  }\n"])),(function(n){return n.width||"100%"}),o.Z.white,o.Z.greenLight,o.Z.blackLight,o.Z.greenDarker,(function(n){return"true"===n.prop?"14px 28px":"12px 28px"})),s=r(184);function u(n){var e=n.className,r=n.label,t=n.onClick,a=n.icon,o=n.width;return(0,s.jsxs)(c,{className:e,onClick:t,type:"submit",width:o,children:[a&&(0,s.jsx)(i.k1,{}),r]})}},2424:function(n,e,r){r.d(e,{t:function(){return p}});var t,i,a=r(3433),o=r(168),c=r(4674),s=r(2683),u=s.ZP.div(t||(t=(0,o.Z)(["\n  display: flex;\n  justify-content: center; \n  align-items: center; \n"]))),d=s.ZP.button(i||(i=(0,o.Z)(["\n  background: ","; /* \u0411\u043e\u043b\u0435\u0435 \u0442\u0443\u0441\u043a\u043b\u044b\u0439 \u0444\u043e\u043d \u0434\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 (\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0439) \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b */\n  margin-right: 17px;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  \n  &:hover {\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7); \n  }\n\n  &:disabled {\n    cursor: default;\n    background: ",";\n    scale: 1.25;\n  }\n"])),(function(n){return n.disabled?c.Z.greenLight:c.Z.greenSupperLight}),c.Z.greenLight),l=r(184),p=function(n){var e=n.currentPage,r=n.totalPages,t=n.onPageChange,i=(0,a.Z)(Array(r).keys()).map((function(n){return n+1}));return(0,l.jsx)(u,{children:i.map((function(n){return(0,l.jsx)(d,{disabled:n===e,onClick:function(){return t(n)}},n)}))})}},8482:function(n,e,r){r.d(e,{Z:function(){return y}});var t,i,a,o=r(9439),c=r(5705),s=r(168),u=r(4674),d=r(2683),l=d.ZP.div(t||(t=(0,s.Z)(["\n  display: flex;\n  gap: 8px;\n  /* align-items: center;\n\n  width: 354px;\n  height: 44px;\n  background: red; */\n"]))),p=d.ZP.form(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 354px;\n"]))),h=d.ZP.input(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n\n  min-width: 224px;\n  height: 44px;\n  border: 1px solid ",";\n  border-radius: 60px;\n  box-shadow: 0px -1px 5px 0px rgba(71, 71, 71, 0.05);\n  background: ",";\n  padding: 13px 18px;\n\n  &::placeholder {\n    font-size: 12px; // \u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440\u0430\n    color: ",";\n  }\n"])),u.Z.blackPrimarySecondary,u.Z.white,u.Z.blackColorSecondary),x=r(4420),f=r(8007),g=r(469),m=r(2791),Z=r(184),b=f.Ry({userName:f.Z_().required("Required")});function y(n){var e=n.dataFactory,r=n.plholder,t=n.setFilterName,i=n.setCurrentPage,a=(0,m.useState)(!1),s=(0,o.Z)(a,2),u=s[0],d=s[1],f=(0,x.I0)(),y=(0,c.TA)({initialValues:{userName:""},validationSchema:b,onSubmit:function(n){i(1),t(n.userName),d("true"),f(e({name:n.userName}))}});return(0,Z.jsxs)(l,{children:[(0,Z.jsxs)(p,{onSubmit:y.handleSubmit,children:[(0,Z.jsx)(h,{id:"userName",name:"userName",type:"text",onChange:y.handleChange,value:y.values.userName,placeholder:r||"User Name"}),(0,Z.jsx)(g.Z,{label:"Filter",type:"submit",icon:!0})]}),u&&(0,Z.jsx)(g.Z,{label:"Rest",onClick:function(){return i(1),t(""),d(!1),f(e({})),void y.resetForm()},width:"116px"})]})}},619:function(n,e,r){r.d(e,{Lq:function(){return c},SI:function(){return p},dF:function(){return s},k1:function(){return o},l8:function(){return l},pQ:function(){return d},z2:function(){return u}});var t=r(4674),i=r(8553),a=r(184),o=function(){return(0,a.jsx)("svg",{width:"14",height:"14",children:(0,a.jsx)("use",{href:"".concat(i.Z,"#icon-filter")})})},c=function(n){switch(n){case"Income":return t.Z.red;case"Expense":return t.Z.greenLight;default:return t.Z.blackPrimary}},s=function(n){switch(n){case"Income":return t.Z.redSecondary;case"Expense":return t.Z.greenSecondary;default:return t.Z.blackPrimarySecondary}},u=function(n){switch(n){case"Completed":return t.Z.greenLight;case"Confirmed":return t.Z.violet;case"Pending":case"Shipped":return t.Z.orange;case"Cancelled":return t.Z.red;case"Processing":return t.Z.blue;case"Delivered":return t.Z.greenDarker;default:return t.Z.blackPrimary}},d=function(n){switch(n){case"Completed":case"Delivered":return t.Z.greenSecondary;case"Confirmed":return t.Z.violetSecondary;case"Pending":case"Shipped":return t.Z.orangeSecondary;case"Cancelled":return t.Z.redSecondary;case"Processing":return t.Z.blueSecondary;default:return t.Z.blackPrimarySecondary}},l=function(n){switch(n){case"Active":return t.Z.greenLight;case"Deactive":return t.Z.red;default:return t.Z.blackPrimary}},p=function(n){switch(n){case"Active":return t.Z.greenSecondary;case"Deactive":return t.Z.redSecondary;default:return t.Z.blackPrimarySecondary}}},406:function(n,e,r){r.r(e),r.d(e,{default:function(){return tn}});var t,i,a=r(9439),o=r(2131),c=r(8482),s=r(9637),u=r(4420),d=r(2962),l=r(2791),p=r(168),h=r(619),x=r(2683),f=x.ZP.p(t||(t=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 92px;\n  height: 25px;\n  color: ",";\n  background: ",";\n\n  font-size: 14px;\n  border-radius: 40px;\n\n"])),(function(n){var e=n.type;return(0,h.z2)(e)}),(function(n){var e=n.type;return(0,h.pQ)(e)})),g=r(8003),m=r(3393),Z=r(9558),b=r(4674),y=r(8553),v=x.ZP.div(i||(i=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n\n"]))),j=r(184);function k(n){var e=n.id,r=(0,u.I0)();return(0,j.jsxs)(v,{children:[(0,j.jsx)("button",{children:(0,j.jsx)("svg",{width:32,height:32,children:(0,j.jsx)("use",{href:"".concat(y.Z,"#icon-btn-edit")})})}),(0,j.jsx)("button",{onClick:function(){r((0,s.Ir)(e))},children:(0,j.jsx)("svg",{width:32,height:32,children:(0,j.jsx)("use",{href:"".concat(y.Z,"#icon-btn-dell")})})})]})}function w(n){var e=n.products,r=e?e.map((function(n){return[n.name,n.category,n.stock,n.suppliers,n.price,n._id]})):[],t=function(n,e,r){var t=r[n],i={};return"actions"!==e&&(i.borderRight="1px solid ".concat(b.Z.blackPrimarySecondary)),"name"===e&&(i.paddingLeft="0px"),(0,j.jsx)(g.b,{style:i,children:"status"===e?(0,j.jsx)(f,{type:t,children:t}):"actions"===e?(0,j.jsx)(k,{id:t[5]}):t})};return(0,j.jsxs)(o.zf,{children:[(0,j.jsx)(o.xD,{children:"All products"}),(0,j.jsx)(o.lL,{children:(0,j.jsxs)(m.L,{numRows:r.length,defaultRowHeight:76,columnWidths:[276,230,199,226,163,146],enableColumnResizing:!1,enableRowResizing:!1,enableRowHeader:!1,children:[(0,j.jsx)(Z.s,{name:"Product Info",cellRenderer:function(n){return t(n,"name",r.map((function(n){return n[0]})))}}),(0,j.jsx)(Z.s,{name:"Category",cellRenderer:function(n){return t(n,"category",r.map((function(n){return n[1]})))}}),(0,j.jsx)(Z.s,{name:"Stock",cellRenderer:function(n){return t(n,"stocks",r.map((function(n){return n[2]})))}}),(0,j.jsx)(Z.s,{name:"Suppliers",cellRenderer:function(n){return t(n,"suppliers",r.map((function(n){return n[3]})))}}),(0,j.jsx)(Z.s,{name:"Price",cellRenderer:function(n){return t(n,"price",r.map((function(n){return n[4]})))}}),(0,j.jsx)(Z.s,{name:"Action",cellRenderer:function(n){return t(n,"actions",r)}})]},"table-".concat(r))})]})}var P,C,S,L=r(2424),R=x.ZP.button(P||(P=(0,p.Z)(["\n  display: flex;\n  justify-content: center; \n  align-items: center; \n  gap: 8px;\n"]))),I=x.ZP.p(C||(C=(0,p.Z)(["\n  font-size: 14px;\n"]))),N=r(4164),z=x.ZP.div(S||(S=(0,p.Z)(["\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: center;    \n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: ",";    //\n    overflow: auto;\n    z-index:5;\n\n    transform: scale(0);\n    &.active {\n        transform: scale(1);\n    }\n"])),b.Z.blackColorSecondary);function A(n){var e=n.active,r=n.setActive,t=n.children;return(0,l.useEffect)((function(){var n=function(n){"Escape"===n.key&&r(!1)},t=function(n){n?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")};return e?(document.addEventListener("keydown",n),t(!0)):(document.removeEventListener("keydown",n),t(!1)),function(){document.removeEventListener("keydown",n),t(!1)}}),[e,r]),N.createPortal((0,j.jsx)(z,{className:e?"active":"",onClick:function(){return r(!1)},children:(0,j.jsx)("div",{onClick:function(n){return n.stopPropagation()},children:t})}),document.getElementById("modal"))}var q,B,D,E,F,_,M,V,H=r(5705),Q=r(8007),O=x.ZP.div(q||(q=(0,p.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  width: 536px;\n  min-height: 392px;\n  background: ",";\n  border-radius: 12px;\n  padding: 40px ;\n\n  /* @media (min-width: 768px) {\n    width: 500px;\n    height: 483px;\n    padding: 50px ;\n  } */\n"])),b.Z.white),T=x.ZP.button(B||(B=(0,p.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  stroke: ",";\n  background: transparent;\n  transition: transform 0.25s linear; \n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"])),b.Z.blackPrimary),J=x.ZP.h2(D||(D=(0,p.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n"]))),U=x.ZP.div(E||(E=(0,p.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),W=x.ZP.div(F||(F=(0,p.Z)(["\n    display: flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),G=x.ZP.input(_||(_=(0,p.Z)(["\n  width: 224px;\nheight: 44px;\nborder: 1px solid rgba(29, 30, 33, 0.1);\nborder-radius: 60px;\nbackground: rgb(255, 255, 255);\npadding: 13px 18px;\n\nborder-color: ",";\n"])),(function(n){return n.haserror?"red":"rgba(29, 30, 33, 0.1)"})),K=x.ZP.div(M||(M=(0,p.Z)(["\n  display: flex;\n  gap: 8px;\n  margin-top: 40px;\n"]))),X=r(469),Y=x.ZP.button(V||(V=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.29;\n\n  height: 44px;\n  width: ",";\n  border-radius: 60px;\n  color: ",";\n  background: ",";\n  transition: background 0.3s linear;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background: ",";  \n    border: 1px solid ",";\n    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4); \n  }\n  \n  @media (min-width: 768px) {\n    /* font-size: 16px; */\n    /* padding: ","; */\n  }\n"])),(function(n){return n.width||"100%"}),b.Z.blackColorSecondary,b.Z.blackPrimarySecondary,b.Z.greenLight,b.Z.white,b.Z.greenLight,(function(n){return"true"===n.prop?"14px 28px":"12px 28px"}));function $(n){var e=n.className,r=n.label,t=n.onClick,i=(n.icon,n.width);return(0,j.jsx)(Y,{className:e,onClick:t,type:"submit",width:i,children:r})}var nn=Q.Ry({productInfo:Q.Z_().required("Product info is required"),category:Q.Z_().required("Category is required"),stock:Q.Rx().required("Stock is required").positive("Stock must be positive"),suppliers:Q.Z_().required("Suppliers are required"),price:Q.Rx().required("Price is required").positive("Price must be positive")});function en(n){var e=n.closeModals,r=(0,H.TA)({initialValues:{productInfo:"",category:"",stock:"",suppliers:"",price:""},validationSchema:nn,onSubmit:function(n){console.log(n)}});return(0,j.jsxs)(O,{children:[(0,j.jsx)(T,{onClick:e,children:(0,j.jsx)("svg",{width:26,height:26,children:(0,j.jsx)("use",{href:"".concat(y.Z,"#icon-x")})})}),(0,j.jsx)(J,{children:"Add a new product"}),(0,j.jsx)("div",{children:(0,j.jsxs)("form",{onSubmit:r.handleSubmit,children:[(0,j.jsxs)(U,{children:[(0,j.jsxs)(W,{children:[(0,j.jsx)(G,{name:"productInfo",type:"text",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.productInfo,placeholder:"Product Info",haserror:r.touched.productInfo&&r.errors.productInfo}),(0,j.jsx)(G,{name:"stock",type:"text",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.stock,placeholder:"Stock",haserror:r.touched.stock&&r.errors.stock}),(0,j.jsx)(G,{name:"price",type:"text",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.price,placeholder:"Price",haserror:r.touched.price&&r.errors.price})]}),(0,j.jsxs)(W,{children:[(0,j.jsx)(G,{name:"category",type:"text",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.category,placeholder:"Category",haserror:r.touched.category&&r.errors.category}),(0,j.jsx)(G,{name:"suppliers",type:"text",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.suppliers,placeholder:"suppliers",haserror:r.touched.suppliers&&r.errors.suppliers})]})]}),(0,j.jsxs)(K,{children:[(0,j.jsx)(X.Z,{width:"133px",label:"Add"}),(0,j.jsx)($,{width:"133px",label:"Cansel",onClick:e})]})]})})]})}function rn(){var n=(0,u.I0)(),e=(0,u.v9)(d.rm),r=(0,l.useState)(1),t=(0,a.Z)(r,2),i=t[0],p=t[1],h=(0,l.useState)(""),x=(0,a.Z)(h,2),f=x[0],g=x[1],m=(0,l.useState)(!1),Z=(0,a.Z)(m,2),b=Z[0],y=Z[1];(0,l.useEffect)((function(){n((0,s.jI)({page:i,limit:5,name:f}))}),[n,i,5,f,e.total]);var v=e.total||0,k=Math.ceil(v/5);return(0,j.jsx)(o.OO,{children:(0,j.jsxs)(o.b0,{children:[(0,j.jsxs)(o.Nc,{children:[(0,j.jsx)(c.Z,{dataFactory:s.jI,plholder:"Product Name",setFilterName:g,setCurrentPage:p}),(0,j.jsxs)(R,{onClick:function(){return y(!0)},children:[(0,j.jsxs)("svg",{width:"42",height:"42",viewBox:"0 0 42 42",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,j.jsx)("rect",{width:"42",height:"42",rx:"21",fill:"#59B17A"}),(0,j.jsx)("path",{d:"M27 21H15M21 15V27V15Z",stroke:"white"})]}),(0,j.jsx)(I,{children:"Add a new product"})]})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)(w,{products:e.products}),(0,j.jsx)(L.t,{currentPage:i,totalPages:k,onPageChange:function(n){p(n)}})]}),(0,j.jsx)(A,{active:b,setActive:y,children:(0,j.jsx)(en,{closeModals:function(){return y()}})})]})})}function tn(){return(0,j.jsx)(rn,{})}},2962:function(n,e,r){r.d(e,{AQ:function(){return i},Fl:function(){return t},JV:function(){return c},rm:function(){return o},xF:function(){return a}});var t=function(n){return n.pharmacy.dashboarData},i=function(n){return n.pharmacy.ordersData},a=function(n){return n.pharmacy.suppliersData},o=function(n){return n.pharmacy.productsData},c=function(n){return n.pharmacy.customersData}}}]);
//# sourceMappingURL=406.668e3ea6.chunk.js.map