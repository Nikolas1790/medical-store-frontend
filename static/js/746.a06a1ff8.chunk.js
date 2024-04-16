"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[746],{2424:function(n,e,r){r.d(e,{t:function(){return f}});var t,i,a,o=r(3433),c=r(168),u=r(4674),s=r(2683),d=s.ZP.div(t||(t=(0,c.Z)(["\n  display: flex;\n  justify-content: start; \n  align-items: center; \n\n  @media (min-width: 768px) {  \n    justify-content: center; \n  }\n"]))),l=s.ZP.button(i||(i=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: ",";\n  background: ","; /* \u0411\u043e\u043b\u0435\u0435 \u0442\u0443\u0441\u043a\u043b\u044b\u0439 \u0444\u043e\u043d \u0434\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 (\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0439) \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b */\n  margin-right:  ",";\n  width: 18px;\n  height: ",";\n  border-radius: 4px;\n  color: ",";\n\n  transition: all 0.25s linear;\n  &:focus {\n    outline: none;\n  }\n  &:hover {\n    box-shadow: ",";\n  }\n\n  &:disabled {\n    cursor: default;\n    color: ",";\n    scale: 1.25;\n    box-shadow: none;\n  }\n"])),(function(n){var e=n.disabled,r=n.current;return e&&r?0:1}),(function(n){var e=n.disabled,r=n.current;return e?u.Z.greenLight:r?u.Z.white:u.Z.greenSupperLight}),(function(n){return"last"===n.current?"0":"17px"}),(function(n){return n.current?"14px":"18px"}),u.Z.blackModalColr,(function(n){return n.isClicked?"none":"0px 4px 8px rgba(0, 0, 0, 0.7)"}),u.Z.white),p=s.ZP.svg(a||(a=(0,c.Z)(["\n  width: 16px;\n  height: 16px;\n  stroke: ",";\n\n  transition: all 0.25s linear;\n  &:focus,\n  &:hover {\n    stroke: ",";\n  };\n"])),u.Z.blackColorSecondary,u.Z.blackModalColr),h=r(8553),x=r(184),f=function(n){var e=n.currentPage,r=n.totalPages,t=n.onPageChange,i=(0,o.Z)(Array(r).keys()).map((function(n){return n+1}));return(0,x.jsxs)(d,{children:[(0,x.jsx)(l,{disabled:1===e,current:"true",onClick:function(){e>1&&t(e-1)},children:(0,x.jsx)(p,{children:(0,x.jsx)("use",{href:"".concat(h.Z,"#icon-chevron-left")})})}),i.map((function(n){return(0,x.jsx)(l,{disabled:n===e,onClick:function(){return t(n)},children:n},n)})),(0,x.jsx)(l,{disabled:e===r,current:"last",onClick:function(){e<r&&t(e+1)},children:(0,x.jsx)(p,{children:(0,x.jsx)("use",{href:"".concat(h.Z,"#icon-chevron-right")})})})]})}},8482:function(n,e,r){r.d(e,{Z:function(){return j}});var t,i,a,o=r(9439),c=r(6277),u=r(168),s=r(4674),d=r(2683),l=d.ZP.div(t||(t=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n"]))),p=d.ZP.form(i||(i=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 300px;\n\n  @media (min-width: 375px) {  \n    width: 335px;\n  }\n  @media (min-width: 768px) {  \n    gap: 14px;\n    width: 354px;\n  }\n"]))),h=d.ZP.input(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n\n  min-width: 215px;\n  height: 44px;\n  border: 1px solid ",";\n  border-radius: 60px;\n  box-shadow: 0px -1px 5px 0px rgba(71, 71, 71, 0.05);\n  background: ",";\n  padding: 13px 18px;\n\n  &::placeholder {\n    font-size: 12px; \n    color: ",";\n  }\n  &:hover,\n  &:focus {\n    outline: none;\n  }\n\n  @media (min-width: 768px) {  \n    min-width: 224px;\n  }\n"])),s.Z.blackPrimarySecondary,s.Z.white,s.Z.blackColorSecondary),x=r(4420),f=r(8007),m=r(469),g=r(2791),w=r(184),b=f.Ry({userName:f.Z_().required("Required")});function j(n){var e=n.dataFactory,r=n.plholder,t=n.setFilterName,i=n.setCurrentPage,a=(0,g.useState)(!1),u=(0,o.Z)(a,2),s=u[0],d=u[1],f=(0,x.I0)(),j=(0,c.TA)({initialValues:{userName:""},validationSchema:b,onSubmit:function(n){i(1),t(n.userName),d("true"),f(e({name:n.userName}))}});return(0,w.jsxs)(l,{children:[(0,w.jsxs)(p,{onSubmit:j.handleSubmit,children:[(0,w.jsx)(h,{id:"userName",name:"userName",type:"text",onChange:j.handleChange,value:j.values.userName,placeholder:r||"User Name"}),(0,w.jsx)(m.Z,{label:"Filter",type:"submit",icon:!0})]}),s&&(0,w.jsx)(m.Z,{label:"Reset",onClick:function(){return i(1),t(""),d(!1),f(e({})),void j.resetForm()},width:"116px"})]})}},1746:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var t,i=r(9439),a=r(2131),o=r(4420),c=r(2962),u=r(9637),s=r(2791),d=r(168),l=r(619),p=r(2683).ZP.p(t||(t=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 89px;\n  height: 23px;\n  color: ",";\n  background: ",";\n  font-size: 12px;\n  border-radius: 40px;\n\n  @media (min-width: 768px) {  \n    width: 92px;\n    height: 25px;\n    font-size: 14px;\n  };\n  @media (min-width: 1440px) {  \n    width: 89px;\n  };\n"])),(function(n){var e=n.type;return(0,l.z2)(e)}),(function(n){var e=n.type;return(0,l.pQ)(e)})),h=r(8003),x=r(3393),f=r(9558),m=r(4674),g=r(184);function w(n){var e=n.orders,r=n.currentPage,t=e?e.map((function(n){return[n.photo,n.name,n.address,n.products,n.order_date,n.price,n.status]})):[],o=(0,s.useState)([265,218,191,232,184,150]),c=(0,i.Z)(o,2),u=c[0],d=c[1],l=(0,s.useState)(76),w=(0,i.Z)(l,2),b=w[0],j=w[1];(0,s.useEffect)((function(){var n=function(){window.innerWidth<768?(j(74),d([114,96,110,120,85,118])):window.innerWidth>=768&&window.innerWidth<1440?d([205,158,131,172,125,129]):d([265,218,191,232,184,150])};return n(),window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]);var Z=function(n,e,r){var t=r[n],i={};("status"!==e&&(i.borderRight="1px solid ".concat(m.Z.blackPrimarySecondary)),"order"===e)&&(t=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}));return(0,g.jsx)(h.b,{style:i,children:"status"===e?(0,g.jsx)(p,{type:t,children:t}):t})};return(0,g.jsxs)(a.zf,{width:"671px",children:[(0,g.jsx)(a.xD,{children:"All orders"}),(0,g.jsx)(a.lL,{children:(0,g.jsxs)(x.L,{numRows:t.length,defaultRowHeight:b,columnWidths:u,enableColumnResizing:!1,enableRowResizing:!1,enableRowHeader:!1,children:[(0,g.jsx)(f.s,{name:"User Info",cellRenderer:function(n){return function(n,e,r){var t={},i=r[n];return"name"===e&&(t.borderRight="1px solid ".concat(m.Z.blackPrimarySecondary)),"name"===e&&(t.paddingLeft="0px"),(0,g.jsx)(h.b,{style:t,children:(0,g.jsxs)(a.PR,{children:[(0,g.jsx)(a.qe,{src:i[0],alt:i[1]}),(0,g.jsx)("p",{children:i[1]})]})})}(n,"name",t)}}),(0,g.jsx)(f.s,{name:"Address",cellRenderer:function(n){return Z(n,"address",t.map((function(n){return n[2]})))}}),(0,g.jsx)(f.s,{name:"Products",cellRenderer:function(n){return Z(n,"products",t.map((function(n){return n[3]})))}}),(0,g.jsx)(f.s,{name:"Order date",cellRenderer:function(n){return Z(n,"order",t.map((function(n){return n[4]})))}}),(0,g.jsx)(f.s,{name:"Price",cellRenderer:function(n){return Z(n,"price",t.map((function(n){return n[5]})))}}),(0,g.jsx)(f.s,{name:"Status",cellRenderer:function(n){return Z(n,"status",t.map((function(n){return n[6]})))}})]},"table-".concat(r,"-").concat(t[0]))})]})}var b=r(8482),j=r(2424);function Z(){var n=(0,o.I0)(),e=(0,o.v9)(c.AQ),r=(0,s.useState)(1),t=(0,i.Z)(r,2),d=t[0],l=t[1],p=(0,s.useState)(""),h=(0,i.Z)(p,2),x=h[0],f=h[1];(0,s.useEffect)((function(){n((0,u.gp)({page:d,limit:5,name:x}))}),[n,d,5,x]);var m=e.total||0,Z=Math.ceil(m/5);return(0,g.jsx)(a.OO,{children:(0,g.jsxs)(a.b0,{children:[(0,g.jsx)(b.Z,{dataFactory:u.gp,setFilterName:f,setCurrentPage:l}),(0,g.jsxs)("div",{children:[(0,g.jsx)(w,{orders:e.orders,currentPage:d}),(0,g.jsx)(j.t,{currentPage:d,totalPages:Z,onPageChange:function(n){l(n)}})]})]})})}function y(){return(0,g.jsx)(Z,{})}},2962:function(n,e,r){r.d(e,{AQ:function(){return i},Fl:function(){return t},JV:function(){return c},rm:function(){return o},xF:function(){return a}});var t=function(n){return n.pharmacy.dashboarData},i=function(n){return n.pharmacy.ordersData},a=function(n){return n.pharmacy.suppliersData},o=function(n){return n.pharmacy.productsData},c=function(n){return n.pharmacy.customersData}}}]);
//# sourceMappingURL=746.a06a1ff8.chunk.js.map