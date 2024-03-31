"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[80],{4080:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,i,o,a,l,s=t(2131),c=function(n){return n.pharmacy.dashboarData},d=t(2791),p=t(9637),u=t(4420),x=t(9667),h=t(9558),m=t(168),f=t(4674),b=t(2683),g=b.ZP.div(r||(r=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),y=b.ZP.div(i||(i=(0,m.Z)(["\n\n  min-width: 630px;\n  height: 512px;\n  /* border: 1px solid red; */\n\n  border: 1px solid ",";\n  border-radius: 8px;\n  background: rgb(255, 255, 255);\n  overflow: hidden;\n"])),f.Z.blackPrimarySecondary),j=t(8003),Z=b.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .bp5-table-container {    \n    box-shadow: none;    \n  }\n\n  .bp5-table-header {\n    display: flex;\n    align-items: center;\n    height: 58px;\n    background-color: ","; \n\n    font-size: 14px;  \n    font-weight: 500;\n    color: ",";\n    box-shadow: none; \n  }\n  .bp5-table-column-name{\n    margin-left: -10px;\n  }\n\n  .bp5-table-header::after {\n    content: ''; /* \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 */\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0; /* \u0420\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u0442 \u043b\u0438\u043d\u0438\u044e \u0432 \u043d\u0438\u0436\u043d\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u044f\u0447\u0435\u0439\u043a\u0438 */\n    border-bottom: 1px solid ","; \n  }\n\n  .bp5-table-cell {  \n    position: relative; \n    display: flex;\n    align-items: center;\n    font-size: 16px;\n    background: ",";\n    padding-left: 20px;\n    box-shadow: none; \n    padding: 0;\n\n  }\n  .bp5-table-cell::after {\n    content: ''; /* \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043f\u0441\u0435\u0432\u0434\u043e\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 */\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0; /* \u0420\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u0442 \u043b\u0438\u043d\u0438\u044e \u0432 \u043d\u0438\u0436\u043d\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u044f\u0447\u0435\u0439\u043a\u0438 */\n    border-bottom: 1px solid ","; \n  }\n"])),f.Z.white,f.Z.textColorSecondary,f.Z.blackPrimarySecondary,f.Z.white,f.Z.blackPrimarySecondary),w=(0,b.ZP)(j.b)(a||(a=(0,m.Z)(["\n/* width: 80px;\nheight: 25px;\nbackground: red; */\n\n    color: ",";\n\n"])),(function(n){return function(n){switch(n){case"Income":return"green";case"Expense":return"red";default:return"black"}}(n.type)})),v=t(184);function k(){var n=(0,u.I0)(),e=(0,u.v9)(c).incomeExpenses;(0,d.useEffect)((function(){n((0,p.Q)())}),[n]);var t=e?e.map((function(n){var e=n.name,t=n.amount;return[n.type,e,t]})):[],r=function(n,e,t){var r={};return"sum"===e&&(r.justifyContent="flex-end"),(0,v.jsx)(w,{style:r,type:t[n],children:t[n]})};return(0,v.jsxs)(y,{children:[(0,v.jsx)(s.xD,{children:"Income/Expenses"}),(0,v.jsx)(Z,{children:(0,v.jsxs)(x.L,{numRows:t.length,defaultRowHeight:65,columnWidths:[120,393,77],enableColumnResizing:!1,enableRowResizing:!1,enableRowHeader:!1,children:[(0,v.jsx)(h.s,{name:"Today",cellRenderer:function(n){return r(n,"type",t.map((function(n){return n[0]})))}}),(0,v.jsx)(h.s,{name:"",cellRenderer:function(n){return r(n,"details",t.map((function(n){return n[1]})))}}),(0,v.jsx)(h.s,{name:"",cellRenderer:function(n){return r(n,"sum",t.map((function(n){return n[2]})))}})]})})]})}var R=b.ZP.div(l||(l=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .bp5-table-container {    \n    box-shadow: none;    \n  }\n\n  .bp5-table-header {\n    position: relative;\n    display: flex;\n    align-items: center;\n    height: 58px;\n    background-color: ","; \n    padding-left: 10px;\n\n    font-size: 14px;  \n    font-weight: 500;\n    color: ",";\n    box-shadow: none; //\n    border-bottom: 1px solid ",";\n  }\n\n  .bp5-table-header:not(:last-child)::after {\n    content: ''; \n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0; \n    border-right: 1px solid ","; \n  }\n  \n  .bp5-table-column-header-cell:first-child .bp5-table-column-name {\n    margin-left: -20px;\n  }\n\n\n\n\n .bp5-table-cell { \n  display: flex;\n  align-items: center;\n  background: ",";\n  font-size: 16px;\n  font-weight: 500;\n  padding-left: 20px;\n  box-shadow: none; //\n  border-bottom: 1px solid ",";\n  \n}\n"])),f.Z.white,f.Z.textColorSecondary,f.Z.blackPrimarySecondary,f.Z.blackPrimarySecondary,f.Z.white,f.Z.blackPrimarySecondary);function P(){var n=(0,u.I0)(),e=(0,u.v9)(c).recentCustomers;(0,d.useEffect)((function(){n((0,p.Q)())}),[n]),console.log(e);var t=e?e.map((function(n){return[n.name,n.email,n.spent,n.image]})):[],r=function(n,e,t){var r={};return"name"===e&&(r.paddingLeft="0px"),console.log(t),"name"!==e&&"email"!==e||(r.borderRight="1px solid ".concat(f.Z.blackPrimarySecondary)),(0,v.jsx)(j.b,{style:r,children:"name"===e?(0,v.jsxs)("div",{children:[(0,v.jsx)("img",{src:"",alt:"ffffff",style:{width:"50px",height:"50px",marginRight:"10px"}}),t[n]]}):t[n]})};return(0,v.jsxs)(y,{children:[(0,v.jsx)(s.xD,{children:"Recent Customers"}),(0,v.jsx)(R,{children:(0,v.jsxs)(x.L,{numRows:t.length,defaultRowHeight:78,columnWidths:[203,269,118],enableColumnResizing:!1,enableRowResizing:!1,enableRowHeader:!1,children:[(0,v.jsx)(h.s,{name:"Name",cellRenderer:function(n){return function(n,e,t){var r={},i=t[n];return"name"===e?r.paddingLeft="0px":"email"===e&&(r.borderRight="1px solid ".concat(f.Z.blackPrimarySecondary)),"name"===e?(0,v.jsx)(j.b,{style:r,children:(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,v.jsx)("img",{src:i[3],alt:i[0],style:{width:"36px",height:"36px",marginRight:"10px"}}),(0,v.jsx)("span",{children:i[0]})]})}):(0,v.jsx)(j.b,{style:r,children:i[e]})}(n,"name",t)}}),(0,v.jsx)(h.s,{name:"Email",cellRenderer:function(n){return r(n,"email",t.map((function(n){return n[1]})))}}),(0,v.jsx)(h.s,{name:"Spent",cellRenderer:function(n){return r(n,"spent",t.map((function(n){return n[2]})))}})]})})]})}var C,S,z,E,I,L=t(8553),H=b.ZP.div(C||(C=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),_=b.ZP.li(S||(S=(0,m.Z)(["\n  width: 240px;\n  height: 108px;\n  border-radius: 8px;\n  background: ",";\n  border: 1px solid ",";\n  padding: 14px 18px;\n\n\n  fill: transparent;\n  stroke: ",";\n  &:first-child {\n    border-color: ",";\n  }\n"])),f.Z.white,f.Z.blackPrimarySecondary,f.Z.blackPrimary,f.Z.greenLight),D=b.ZP.div(z||(z=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 28px;\n  \n"]))),Q=b.ZP.h4(E||(E=(0,m.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  color: ",";\n  \n"])),f.Z.textColorSecondary),O=b.ZP.p(I||(I=(0,m.Z)(["\n  font-size: 24px;\n  font-weight: 600;\n  line-height: 1.33;\n  \n"])));function W(){var n=(0,u.I0)(),e=(0,u.v9)(c),t=[{name:"products",icon:"#icon-streamline",value:"".concat(e.productsCount)},{name:"suppliers",icon:"#icon-users",value:"".concat(e.suppliersCount)},{name:"customers",icon:"#icon-users",value:"".concat(e.customersCount)}];return(0,d.useEffect)((function(){n((0,p.Q)())}),[n]),(0,v.jsx)(H,{children:t.map((function(n){return(0,v.jsxs)(_,{children:[(0,v.jsxs)(D,{children:[(0,v.jsx)("svg",{width:20,height:20,children:(0,v.jsx)("use",{href:"".concat(L.Z).concat(n.icon)})}),(0,v.jsxs)(Q,{children:["All ",n.name]})]}),(0,v.jsx)(O,{children:e.customersCount?n.value:0})]},n.name)}))})}function A(){return(0,v.jsx)(s.OO,{children:(0,v.jsxs)(s.b0,{children:[(0,v.jsx)(W,{}),(0,v.jsxs)(g,{children:[(0,v.jsx)(P,{}),(0,v.jsx)(k,{})]})]})})}function N(){return(0,v.jsx)(A,{})}}}]);
//# sourceMappingURL=80.332c3505.chunk.js.map