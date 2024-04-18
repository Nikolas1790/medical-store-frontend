"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[264],{1305:function(n,e,i){i.d(e,{AY:function(){return C},Dx:function(){return D},Gb:function(){return z},Hf:function(){return k},M8:function(){return M},Mt:function(){return A},W2:function(){return P},Wi:function(){return Y},Yb:function(){return R},c7:function(){return _},h7:function(){return W},ox:function(){return q},qg:function(){return S},r5:function(){return N},xo:function(){return L}});var t,r,o,a,s,d,l,p,c,u,x,h,m,f,g,w,Z=i(168),j=i(4674),b=i(2683),v=i(6277),y=i(1087),P=b.ZP.div(t||(t=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center ;\n"]))),k=b.ZP.div(r||(r=(0,Z.Z)(["\n  position: relative;\n  width: 375px;\n  height: 812px;\n  padding: 24px 20px;\n\n  @media (min-width: 768px) {\n    width: 768px;\n    height: 1024px;\n    padding: 24px 32px;\n  }\n  @media (min-width: 1440px) {\n    width: 1440px;\n    height: 800px;\n    padding: 28px  100px;\n  }\n"]))),N=(b.ZP.div(o||(o=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n"]))),(0,b.ZP)(y.OL)(a||(a=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n  font-size: 12px; \n  letter-spacing: -0.2px;\n  color: ","; \n  transition: color 0.3s linear; \n  text-decoration: none;\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: ",";\n    outline: none;\n }\n &:active {\n    color: black;\n  }\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"])),j.Z.blackModalColr,j.Z.greenDarker)),q=b.ZP.svg(s||(s=(0,Z.Z)(["\n  position: absolute;\n  right: -180px;\n  bottom: -188px;\n  width: 464px;\n  height: 345px;\n  @media (min-width: 768px) {\n    right: -180px;\n    bottom: -88px;\n  }\n"]))),C=b.ZP.div(d||(d=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n  margin-top: 148px;\n\n  @media (min-width: 768px) {\n    gap: 50px;\n    margin-top: 204px;\n  }\n  @media (min-width: 1440px) {\n    gap: 150px;\n    flex-direction: row;\n    margin-top: 226px;\n  }\n"]))),_=b.ZP.div(l||(l=(0,Z.Z)(["\n  position: relative;\n\n  @media (min-width: 768px) {\n    width: 614px;\n  }\n"]))),z=b.ZP.img(p||(p=(0,Z.Z)(["\n  position: absolute;\n  top: -58px;\n  right: 20px;\n  width: 95px;\n  height: 93px;\n\n  @media (min-width: 768px) {\n    top: -104px;\n    width: 179px;\n    height: 175px;\n  }\n"]))),D=b.ZP.h2(c||(c=(0,Z.Z)(["\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 1.2;\n\n  @media (min-width: 768px) {\n    font-size: 54px;\n    font-weight: 600;\n    line-height: 1.1;\n  }\n"]))),M=b.ZP.span(u||(u=(0,Z.Z)(["\n  color:",";\n"])),j.Z.greenLight),R=b.ZP.div(x||(x=(0,Z.Z)(["\n  @media (min-width: 768px) {\n    width: 323px;\n  }\n"]))),A=b.ZP.div(h||(h=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),S=b.ZP.div(m||(m=(0,Z.Z)(["\n  display:flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),W=b.ZP.div(f||(f=(0,Z.Z)(["\n  position:relative;\n  width: 100%;\n  height:44px;\n"]))),Y=(0,b.ZP)(v.gN)(g||(g=(0,Z.Z)(["\n  width: 100%;\n  height: 44px;\n  border: 1px solid\t",";\n  border-radius: 60px;\n  padding: 13px 18px;\n  outline: none;\n  background: ",";\n"])),j.Z.blackPrimarySecondary,j.Z.white),L=b.ZP.svg(w||(w=(0,Z.Z)(["\n  position: absolute;\n  top: 13px;\n  right: 18px;\n  cursor: pointer;\n  stroke: ",";\n  fill: none;\n"])),j.Z.blackPrimary)},264:function(n,e,i){i.r(e),i.d(e,{default:function(){return P}});var t=i(5861),r=i(9439),o=i(7757),a=i.n(o),s=i(6277),d=i(8007),l=i(2791),p=i(8553),c=i(4420),u=i(6781),x=i(2564),h=i(7689),m=i(1305),f=i(8976),g=i(9629),w=i(4099),Z=i(469),j=i(184),b={userName:"",email:"",password:""},v=d.Ry({userName:d.Z_().required("Required").min(2,"The name must have at least 2 letters"),email:d.Z_().matches(/^\w+([.-]?\w+)*@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Invalid email address").required("Required"),password:d.Z_().required("Required").min(7,"Password must be at least 7 characters")});function y(){var n=(0,l.useState)(!1),e=(0,r.Z)(n,2),i=e[0],o=e[1],d=(0,c.I0)(),y=(0,h.s0)(),P=function(){o((function(n){return!n}))},k=function(){var n=(0,t.Z)(a().mark((function n(e){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d((0,u.z2)(e)).unwrap();case 3:y("/dashboard"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),"Request failed with status code 409"===n.t0?x.Am.error("User with this email already exists."):x.Am.error("Registration failed. Please try again later.");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}();return(0,j.jsx)(m.W2,{children:(0,j.jsxs)(m.Hf,{children:[(0,j.jsx)(m.ox,{children:(0,j.jsx)("use",{href:"".concat(p.Z,"#icon-elements")})}),(0,j.jsx)(f.Z,{}),(0,j.jsxs)(m.AY,{children:[(0,j.jsxs)(m.c7,{children:[(0,j.jsxs)("picture",{children:[(0,j.jsx)("source",{srcSet:"".concat(w," 2x"),media:"(min-resolution: 192dpi)"}),(0,j.jsx)(m.Gb,{src:g,alt:"logo"})]}),(0,j.jsxs)(m.Dx,{children:["Your medication, delivered Say goodbye to all ",(0,j.jsx)(m.M8,{children:"your healthcare"})," worries with us"]})]}),(0,j.jsxs)(m.Yb,{children:[(0,j.jsx)(s.J9,{initialValues:b,validationSchema:v,onSubmit:k,children:function(n){var e=n.errors,t=n.touched;return(0,j.jsx)(s.l0,{children:(0,j.jsxs)(m.Mt,{children:[(0,j.jsxs)(m.qg,{children:[(0,j.jsx)(m.h7,{children:(0,j.jsx)(m.Wi,{id:"userName",name:"userName",type:"userName",placeholder:"Nik Ovson",error:e.userName&&t.userName?"true":"false",paddingleft:"65px",style:{borderColor:t.userName&&e.userName?"red":t.userName&&!e.userName?"green":"defaultColor"}})}),(0,j.jsx)(m.h7,{children:(0,j.jsx)(m.Wi,{id:"email",name:"email",type:"email",placeholder:"nik@google.com",error:e.email&&t.email?"true":"false",paddingleft:"53px",style:{borderColor:t.email&&e.email?"red":t.email&&!e.email?"green":"defaultColor"}})}),(0,j.jsxs)(m.h7,{children:[(0,j.jsx)(m.Wi,{id:"password",name:"password",type:i?"text":"password",placeholder:"********",paddingleft:"86px",style:{borderColor:t.password&&e.password?"red":t.password&&!e.password?"green":"defaultColor"}}),i?(0,j.jsx)(m.xo,{width:18,height:18,onMouseDown:function(n){n.preventDefault(),P()},children:(0,j.jsx)("use",{href:"".concat(p.Z,"#icon-eye")})}):(0,j.jsx)(m.xo,{width:18,height:18,onMouseDown:function(n){n.preventDefault(),P()},children:(0,j.jsx)("use",{href:"".concat(p.Z,"#icon-eye-off")})})]})]}),(0,j.jsx)(Z.Z,{label:"Register"})]})})}}),(0,j.jsx)(m.r5,{to:"/login",children:"Login"})]})]})]})})}function P(){return(0,j.jsx)(y,{})}},9629:function(n,e,i){n.exports=i.p+"static/media/white-round-pill.269f984b8b3db1a033a7.png"},4099:function(n,e,i){n.exports=i.p+"static/media/white-round-pill@2x.39960ed6faf577e756b1.png"}}]);
//# sourceMappingURL=264.4e749fd9.chunk.js.map