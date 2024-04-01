"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[976],{1216:function(n,e,r){r.d(e,{r:function(){return i}});var t,a=r(168),c=r(4674),i=r(2683).ZP.button(t||(t=(0,a.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\ngap: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.29;\n\n  height: 44px;\n  width: 100%;\n  border-radius: 60px;\n  color: ",";\n  background: ",";\n  transition: background 0.3s linear;\n\n  &:hover,\n  &:focus {\n    /* color: ","; */\n    background: ",";  \n  }\n  \n  @media (min-width: 768px) {\n    /* font-size: 16px; */\n    /* padding: ","; */\n  }\n"])),c.Z.white,c.Z.greenLight,c.Z.blackLight,c.Z.greenDarker,(function(n){return"true"===n.prop?"14px 28px":"12px 28px"}))},6697:function(n,e,r){r.d(e,{Z:function(){return S}});var t,a,c,i,u=r(9439),o=r(5705),s=r(168),d=r(4674),l=r(2683),p=l.ZP.div(t||(t=(0,s.Z)(["\n  display: flex;\n  gap: 8px;\n  /* align-items: center;\n\n  width: 354px;\n  height: 44px;\n  background: red; */\n"]))),f=l.ZP.form(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: 354px;\n"]))),h=l.ZP.input(c||(c=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n\n  min-width: 224px;\n  height: 44px;\n  border: 1px solid ",";\n  border-radius: 60px;\n  box-shadow: 0px -1px 5px 0px rgba(71, 71, 71, 0.05);\n  background: ",";\n  padding: 13px 18px;\n\n  &::placeholder {\n    font-size: 12px; // \u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043b\u0435\u0439\u0441\u0445\u043e\u043b\u0434\u0435\u0440\u0430\n    color: ",";\n  }\n"])),d.Z.blackPrimarySecondary,d.Z.white,d.Z.textColorSecondary),m=l.ZP.div(i||(i=(0,s.Z)(["\n  width: 116px;\n"]))),x=r(4420),g=r(8007),Z=r(619),y=r(1216),b=r(184);function k(n){var e=n.className,r=n.label,t=n.onClick,a=n.icon;return(0,b.jsxs)(y.r,{className:e,onClick:t,type:"submit",children:[a&&(0,b.jsx)(Z.k1,{}),r]})}var v=r(2791),j=g.Ry({userName:g.Z_().required("Required")});function S(n){var e=n.dataFactory,r=n.plholder,t=(0,v.useState)(!1),a=(0,u.Z)(t,2),c=a[0],i=a[1],s=(0,x.I0)(),d=(0,o.TA)({initialValues:{userName:""},validationSchema:j,onSubmit:function(n){i("true"),s(e({name:n.userName}))}});return(0,b.jsxs)(p,{children:[(0,b.jsxs)(f,{onSubmit:d.handleSubmit,children:[(0,b.jsx)(h,{id:"userName",name:"userName",type:"text",onChange:d.handleChange,value:d.values.userName,placeholder:r||"User Name"}),(0,b.jsx)(k,{label:"Filter",type:"submit",icon:!0})]}),c&&(0,b.jsx)(m,{children:(0,b.jsx)(k,{label:"Rest",onClick:function(){return i(!1),s(e({})),void d.resetForm()}})})]})}},619:function(n,e,r){r.d(e,{Lq:function(){return u},SI:function(){return p},dF:function(){return o},k1:function(){return i},l8:function(){return l},pQ:function(){return d},z2:function(){return s}});var t=r(4674),a=r(8553),c=r(184),i=function(){return(0,c.jsx)("svg",{width:"14",height:"14",children:(0,c.jsx)("use",{href:"".concat(a.Z,"#icon-filter")})})},u=function(n){switch(n){case"Income":return t.Z.red;case"Expense":return t.Z.greenLight;default:return t.Z.blackPrimary}},o=function(n){switch(n){case"Income":return t.Z.redSecondary;case"Expense":return t.Z.greenSecondary;default:return t.Z.blackPrimarySecondary}},s=function(n){switch(n){case"Completed":return t.Z.greenLight;case"Confirmed":return t.Z.violet;case"Pending":case"Shipped":return t.Z.orange;case"Cancelled":return t.Z.red;case"Processing":return t.Z.blue;case"Delivered":return t.Z.greenDarker;default:return t.Z.blackPrimary}},d=function(n){switch(n){case"Completed":case"Delivered":return t.Z.greenSecondary;case"Confirmed":return t.Z.violetSecondary;case"Pending":case"Shipped":return t.Z.orangeSecondary;case"Cancelled":return t.Z.redSecondary;case"Processing":return t.Z.blueSecondary;default:return t.Z.blackPrimarySecondary}},l=function(n){switch(n){case"Active":return t.Z.greenLight;case"Deactive":return t.Z.red;default:return t.Z.blackPrimary}},p=function(n){switch(n){case"Active":return t.Z.greenSecondary;case"Deactive":return t.Z.redSecondary;default:return t.Z.blackPrimarySecondary}}},9976:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t,a=r(2131),c=r(6697),i=r(9637),u=r(4420),o=r(2962),s=r(2791),d=r(168),l=r(619),p=r(2683).ZP.p(t||(t=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 92px;\n  height: 25px;\n  color: ",";\n  background: ",";\n\n  font-size: 14px;\n  border-radius: 40px;\n\n"])),(function(n){var e=n.type;return(0,l.z2)(e)}),(function(n){var e=n.type;return(0,l.pQ)(e)})),f=r(8003),h=r(3393),m=r(9558),x=r(4674),g=r(184);function Z(n){var e=n.products;console.log(e);var r=e?e.map((function(n){return[n.name,n.category,n.stock,n.suppliers,n.price]})):[],t=function(n,e,r){var t=r[n],a={};return"actions"!==e&&(a.borderRight="1px solid ".concat(x.Z.blackPrimarySecondary)),"name"===e&&(a.paddingLeft="0px"),(0,g.jsx)(f.b,{style:a,children:"status"===e?(0,g.jsx)(p,{type:t,children:t}):t})};return(0,g.jsxs)(a.zf,{children:[(0,g.jsx)(a.xD,{children:"All products"}),(0,g.jsx)(a.lL,{children:(0,g.jsxs)(h.L,{numRows:r.length,defaultRowHeight:76,columnWidths:[276,230,199,226,163,146],enableColumnResizing:!1,enableRowResizing:!1,enableRowHeader:!1,children:[(0,g.jsx)(m.s,{name:"Product Info",cellRenderer:function(n){return t(n,"name",r.map((function(n){return n[0]})))}}),(0,g.jsx)(m.s,{name:"Category",cellRenderer:function(n){return t(n,"category",r.map((function(n){return n[1]})))}}),(0,g.jsx)(m.s,{name:"Stock",cellRenderer:function(n){return t(n,"stocks",r.map((function(n){return n[2]})))}}),(0,g.jsx)(m.s,{name:"Suppliers",cellRenderer:function(n){return t(n,"suppliers",r.map((function(n){return n[3]})))}}),(0,g.jsx)(m.s,{name:"Price",cellRenderer:function(n){return t(n,"price",r.map((function(n){return n[4]})))}}),(0,g.jsx)(m.s,{name:"Action",cellRenderer:function(n){return t(n,"actions",r.map((function(n){return n[5]})))}})]})})]})}function y(){var n=(0,u.I0)(),e=(0,u.v9)(o.rm);return(0,s.useEffect)((function(){n((0,i.SB)({}))}),[n]),(0,g.jsx)(a.OO,{children:(0,g.jsxs)(a.b0,{children:[(0,g.jsx)(c.Z,{dataFactory:i.SB,plholder:"Product  Name"}),(0,g.jsx)(Z,{products:e})]})})}function b(){return(0,g.jsx)(y,{})}},2962:function(n,e,r){r.d(e,{AQ:function(){return a},Fl:function(){return t},JV:function(){return u},rm:function(){return i},xF:function(){return c}});var t=function(n){return n.pharmacy.dashboarData},a=function(n){return n.pharmacy.ordersData},c=function(n){return n.pharmacy.suppliersData},i=function(n){return n.pharmacy.productsData},u=function(n){return n.pharmacy.customersData}}}]);
//# sourceMappingURL=976.692d5aec.chunk.js.map