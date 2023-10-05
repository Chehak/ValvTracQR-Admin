"use strict";(self.webpackChunkValvTracAdmin=self.webpackChunkValvTracAdmin||[]).push([[882],{882:(et,h,s)=>{s.r(h),s.d(h,{AuthModule:()=>tt});var c=s(6814),A=s(9441),m=s(5420),u=s(6041),t=s(5879),l=s(2296);const y=function(){return["/dashboards/dashboard1"]};let _=(()=>{var e;class i{}return(e=i).\u0275fac=function(a){return new(a||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-error"]],standalone:!0,features:[t.jDz],decls:10,vars:2,consts:[[1,"blank-layout-container","justify-content-center"],[1,"row"],[1,"col-12","text-center"],["src","assets/images/backgrounds/errorimg.svg","alt","error-bg"],[1,"auth-title","f-w-600"],[1,"f-s-20","f-w-600","m-b-30"],["mat-flat-button","","color","primary",3,"routerLink"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"h2",4),t._uU(5,"Opps!!!"),t.qZA(),t.TgZ(6,"h6",5),t._uU(7," This page you are looking for could not be found. "),t.qZA(),t.TgZ(8,"a",6),t._uU(9,"Go back to Home"),t.qZA()()()()),2&a&&(t.xp6(8),t.Q6J("routerLink",t.DdM(1,y)))},dependencies:[m.Bz,m.rH,u.q,l.zs]}),i})();var r=s(6223),g=s(982),p=s(4170),d=s(2032);function C(e,i){1&e&&(t.TgZ(0,"div",21),t._uU(1," Email is required. "),t.qZA())}function U(e,i){if(1&e&&(t.TgZ(0,"mat-hint",19),t.YNc(1,C,2,0,"div",20),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.f.email.errors&&o.f.email.errors.required)}}const I=function(){return["/auth/login"]};let Z=(()=>{var e;class i{constructor(a,n){this.settings=a,this.router=n,this.options=this.settings.getOptions(),this.form=new r.cw({email:new r.NI("",[r.kI.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/dashboards/dashboard1"])}}return(e=i).\u0275fac=function(a){return new(a||e)(t.Y36(g.p),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-forgot-password"]],standalone:!0,features:[t.jDz],decls:26,vars:5,consts:[[1,"blank-layout-container","justify-content-center"],[1,"position-relative","row","w-100","h-100"],[1,"col-lg-7","col-xl-8","bg-gredient","p-0"],[1,"p-24","h-100"],[1,"align-items-center","justify-content-center","img-height","d-none","d-lg-flex"],["src","assets/images/backgrounds/login-bg.svg","alt","login",2,"max-width","500px"],[1,"col-lg-5","col-xl-4","p-0","d-flex","justify-content-center"],[1,"p-32","d-flex","align-items-start","align-items-lg-center","justify-content-center","h-100"],[1,"row","justify-content-center","w-100"],[1,"col-lg-9"],[1,"f-w-700","f-s-24","m-0"],[1,"f-s-14","d-block","mat-body-1","m-t-8"],[1,"m-t-30",3,"formGroup","ngSubmit"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","type","email","formControlName","email"],["class","m-b-16 error-msg",4,"ngIf"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],["mat-stroked-button","","color","primary",1,"w-100","m-t-8",3,"routerLink"],[1,"m-b-16","error-msg"],["class","text-error",4,"ngIf"],[1,"text-error"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t._uU(5,"JC Valves"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"img",5),t.qZA()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"h4",10),t._uU(13,"Forgot your password?"),t.qZA(),t.TgZ(14,"span",11),t._uU(15,"Please enter the email address associated with your account and We will email you a link to reset your password."),t.qZA(),t.TgZ(16,"form",12),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(17,"mat-label",13),t._uU(18,"Email Adddress"),t.qZA(),t.TgZ(19,"mat-form-field",14),t._UZ(20,"input",15),t.YNc(21,U,2,1,"mat-hint",16),t.qZA(),t.TgZ(22,"button",17),t._uU(23," Forgot Password "),t.qZA(),t.TgZ(24,"a",18),t._uU(25," Back to Login "),t.qZA()()()()()()()()),2&a&&(t.xp6(16),t.Q6J("formGroup",n.form),t.xp6(5),t.Q6J("ngIf",n.f.email.touched&&n.f.email.invalid),t.xp6(1),t.Q6J("disabled",!n.form.valid),t.xp6(2),t.Q6J("routerLink",t.DdM(4,I)))},dependencies:[m.Bz,m.rH,u.q,p.KE,p.hX,p.bx,d.Nt,l.zs,l.lW,r.u5,r._Y,r.Fj,r.JJ,r.JL,r.UX,r.sg,r.u,c.O5]}),i})();var v=s(5986),T=s(5195);function J(e,i){1&e&&(t.TgZ(0,"div",34),t._uU(1," Name is required. "),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"div",34),t._uU(1," Name should be 6 character. "),t.qZA())}function S(e,i){if(1&e&&(t.TgZ(0,"mat-hint",32),t.YNc(1,J,2,0,"div",33),t.YNc(2,N,2,0,"div",33),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.fManager.uname.errors&&o.fManager.uname.errors.required),t.xp6(1),t.Q6J("ngIf",o.fManager.uname.errors&&o.fManager.uname.errors.minlength)}}function k(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"i",35),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.inputType="password")}),t.qZA()}}function L(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"i",36),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.inputType="text")}),t.qZA()}}function Q(e,i){1&e&&(t.TgZ(0,"div",34),t._uU(1," Password is required. "),t.qZA())}function Y(e,i){if(1&e&&(t.TgZ(0,"mat-hint",32),t.YNc(1,Q,2,0,"div",33),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.fManager.password.errors&&o.fManager.password.errors.required)}}function M(e,i){1&e&&(t.TgZ(0,"div",34),t._uU(1," Name is required. "),t.qZA())}function F(e,i){1&e&&(t.TgZ(0,"div",34),t._uU(1," Name should be 6 character. "),t.qZA())}function j(e,i){if(1&e&&(t.TgZ(0,"mat-hint",32),t.YNc(1,M,2,0,"div",33),t.YNc(2,F,2,0,"div",33),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.fShop.unameShop.errors&&o.fShop.unameShop.errors.required),t.xp6(1),t.Q6J("ngIf",o.fShop.unameShop.errors&&o.fShop.unameShop.errors.minlength)}}function P(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"i",35),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.inputTypeShop="password")}),t.qZA()}}function R(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"i",36),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.inputTypeShop="text")}),t.qZA()}}function E(e,i){1&e&&(t.TgZ(0,"div",34),t._uU(1," Password is required. "),t.qZA())}function G(e,i){if(1&e&&(t.TgZ(0,"mat-hint",32),t.YNc(1,E,2,0,"div",33),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.fShop.passwordShop.errors&&o.fShop.passwordShop.errors.required)}}const w=function(){return["/auth/forgot-password"]};let b=(()=>{var e;class i{constructor(a,n){this.settings=a,this.router=n,this.inputType="password",this.inputTypeShop="password",this.options=this.settings.getOptions(),this.formManager=new r.cw({uname:new r.NI("",[r.kI.required,r.kI.minLength(6)]),password:new r.NI("",[r.kI.required])}),this.formShop=new r.cw({unameShop:new r.NI("",[r.kI.required,r.kI.minLength(6)]),passwordShop:new r.NI("",[r.kI.required])})}get fManager(){return this.formManager.controls}get fShop(){return this.formShop.controls}submitManager(){this.router.navigate(["/dashboard/dashboard-view"])}submitShop(){this.router.navigate(["/dashboard/dashboard-view"])}}return(e=i).\u0275fac=function(a){return new(a||e)(t.Y36(g.p),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],standalone:!0,features:[t.jDz],decls:75,vars:18,consts:[[1,"container"],[1,"blank-layout-container","justify-content-center"],[1,"position-relative","row","w-100","h-100"],[1,"col-lg-6","col-xl-8"],[1,"p-24","h-100"],[1,"align-items-center","justify-content-center","d-sm-flex"],[1,"shadow-none","bg-light-primary","overflow-hidden"],[1,"col-lg-9","max-width-form",2,"padding","30px"],[1,"row"],[1,"col","sm-7"],[1,"f-w-700","f-s-24","m-0"],[1,"f-s-14","d-block","mat-body-1","m-t-8"],[1,"col-sm-5","d-none","d-lg-flex"],["src","assets/images/backgrounds/welcome-bg2.png","alt","welcome","width","200","height","120",1,"welcome-img"],[1,"or-border","m-t-30"],[1,"m-t-30",3,"formGroup","ngSubmit"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","uname"],["class","m-b-16 error-msg",4,"ngIf"],["matInput","","formControlName","password",3,"type"],["class","fa fa-eye eye-icon",3,"click",4,"ngIf"],["class","fa fa-eye-slash eye-icon",3,"click",4,"ngIf"],[1,"d-flex","align-items-center","m-b-12"],["color","primary"],[1,"text-primary","f-w-600","text-decoration-none","m-l-auto","f-s-14",3,"routerLink"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],[1,"col-lg-6","col-xl-8","p-0"],[1,"col-sm-7"],["src","assets/images/backgrounds/shop_floor.png","alt","welcome","width","200","height","120",1,"welcome-img"],["matInput","","formControlName","unameShop"],["matInput","","formControlName","passwordShop",3,"type"],[1,"m-b-16","error-msg"],["class","text-error",4,"ngIf"],[1,"text-error"],[1,"fa","fa-eye","eye-icon",3,"click"],[1,"fa","fa-eye-slash","eye-icon",3,"click"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"JC Valves"),t.qZA()(),t.TgZ(3,"div",1)(4,"div",2)(5,"div",3)(6,"div",4)(7,"div",5)(8,"mat-card",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"h4",10),t._uU(13,"Manager"),t.qZA(),t.TgZ(14,"span",11),t._uU(15,"Flexibly manage your production."),t.qZA()(),t.TgZ(16,"div",12),t._UZ(17,"img",13),t.qZA()(),t.TgZ(18,"div",14),t._uU(19,"Sign in with"),t.qZA(),t.TgZ(20,"form",15),t.NdJ("ngSubmit",function(){return n.submitManager()}),t.TgZ(21,"mat-label",16),t._uU(22,"Username"),t.qZA(),t.TgZ(23,"mat-form-field",17),t._UZ(24,"input",18),t.YNc(25,S,3,2,"mat-hint",19),t.qZA(),t.TgZ(26,"mat-label",16),t._uU(27,"Password"),t.qZA(),t.TgZ(28,"mat-form-field",17),t._UZ(29,"input",20),t.YNc(30,k,1,0,"i",21),t.YNc(31,L,1,0,"i",22),t.YNc(32,Y,2,1,"mat-hint",19),t.qZA(),t.TgZ(33,"div",23)(34,"mat-checkbox",24),t._uU(35,"Remember this Device"),t.qZA(),t.TgZ(36,"a",25),t._uU(37,"Forgot Password ?"),t.qZA()(),t.TgZ(38,"button",26),t._uU(39," Sign In "),t.qZA()()()()()()(),t.TgZ(40,"div",27)(41,"div",4)(42,"div",5)(43,"mat-card",6)(44,"div",7)(45,"div",8)(46,"div",28)(47,"h4",10),t._uU(48,"Shop floor view"),t.qZA(),t.TgZ(49,"span",11),t._uU(50,"Record working time and completed tasks"),t.qZA()(),t.TgZ(51,"div",12),t._UZ(52,"img",29),t.qZA()(),t.TgZ(53,"div",14),t._uU(54,"Sign in with"),t.qZA(),t.TgZ(55,"form",15),t.NdJ("ngSubmit",function(){return n.submitShop()}),t.TgZ(56,"mat-label",16),t._uU(57,"Username"),t.qZA(),t.TgZ(58,"mat-form-field",17),t._UZ(59,"input",30),t.YNc(60,j,3,2,"mat-hint",19),t.qZA(),t.TgZ(61,"mat-label",16),t._uU(62,"Password"),t.qZA(),t.TgZ(63,"mat-form-field",17),t._UZ(64,"input",31),t.YNc(65,P,1,0,"i",21),t.YNc(66,R,1,0,"i",22),t.YNc(67,G,2,1,"mat-hint",19),t.qZA(),t.TgZ(68,"div",23)(69,"mat-checkbox",24),t._uU(70,"Remember this Device"),t.qZA(),t.TgZ(71,"a",25),t._uU(72,"Forgot Password ?"),t.qZA()(),t.TgZ(73,"button",26),t._uU(74," Sign In "),t.qZA()()()()()()()()()),2&a&&(t.xp6(20),t.Q6J("formGroup",n.formManager),t.xp6(5),t.Q6J("ngIf",n.fManager.uname.touched&&n.fManager.uname.invalid),t.xp6(4),t.Q6J("type",n.inputType),t.xp6(1),t.Q6J("ngIf","text"==n.inputType),t.xp6(1),t.Q6J("ngIf","password"==n.inputType),t.xp6(1),t.Q6J("ngIf",n.fManager.password.touched&&n.fManager.password.invalid),t.xp6(4),t.Q6J("routerLink",t.DdM(16,w)),t.xp6(2),t.Q6J("disabled",!n.formManager),t.xp6(17),t.Q6J("formGroup",n.formShop),t.xp6(5),t.Q6J("ngIf",n.fShop.unameShop.touched&&n.fShop.unameShop.invalid),t.xp6(4),t.Q6J("type",n.inputTypeShop),t.xp6(1),t.Q6J("ngIf","text"==n.inputTypeShop),t.xp6(1),t.Q6J("ngIf","password"==n.inputTypeShop),t.xp6(1),t.Q6J("ngIf",n.fShop.passwordShop.touched&&n.fShop.passwordShop.invalid),t.xp6(4),t.Q6J("routerLink",t.DdM(17,w)),t.xp6(2),t.Q6J("disabled",!n.formShop.valid))},dependencies:[m.Bz,m.rH,u.q,v.oG,p.KE,p.hX,p.bx,d.Nt,T.a8,l.lW,r.u5,r._Y,r.Fj,r.JJ,r.JL,r.UX,r.sg,r.u,c.O5],styles:[".eye-icon[_ngcontent-%COMP%]{position:absolute;right:6px;top:20px}"]}),i})();function z(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Name is required. "),t.qZA())}function D(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Name should be 6 character. "),t.qZA())}function X(e,i){if(1&e&&(t.TgZ(0,"mat-hint",23),t.YNc(1,z,2,0,"div",24),t.YNc(2,D,2,0,"div",24),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.f.uname.errors&&o.f.uname.errors.required),t.xp6(1),t.Q6J("ngIf",o.f.uname.errors&&o.f.uname.errors.minlength)}}function H(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Email is required. "),t.qZA())}function O(e,i){if(1&e&&(t.TgZ(0,"mat-hint",23),t.YNc(1,H,2,0,"div",24),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.f.email.errors&&o.f.email.errors.required)}}function B(e,i){1&e&&(t.TgZ(0,"div",25),t._uU(1," Password is required. "),t.qZA())}function K(e,i){if(1&e&&(t.TgZ(0,"mat-hint",23),t.YNc(1,B,2,0,"div",24),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.f.password.errors&&o.f.password.errors.required)}}const V=function(){return["/auth/login"]};let x=(()=>{var e;class i{constructor(a,n){this.settings=a,this.router=n,this.options=this.settings.getOptions(),this.form=new r.cw({uname:new r.NI("",[r.kI.required,r.kI.minLength(6)]),email:new r.NI("",[r.kI.required]),password:new r.NI("",[r.kI.required])})}get f(){return this.form.controls}submit(){this.router.navigate(["/dashboards/dashboard1"])}}return(e=i).\u0275fac=function(a){return new(a||e)(t.Y36(g.p),t.Y36(m.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],standalone:!0,features:[t.jDz],decls:40,vars:7,consts:[[1,"blank-layout-container","justify-content-center"],[1,"position-relative","row","w-100","h-100"],[1,"col-lg-7","col-xl-8","bg-gredient","p-0"],[1,"p-24","h-100"],[1,"align-items-center","justify-content-center","img-height","d-none","d-lg-flex"],["src","assets/images/backgrounds/login-bg.svg","alt","login",2,"max-width","500px"],[1,"col-lg-5","col-xl-4","p-0"],[1,"p-32","d-flex","align-items-start","align-items-lg-center","justify-content-center","h-100"],[1,"row","justify-content-center","w-100"],[1,"col-lg-9","max-width-form"],[1,"f-w-700","f-s-24","m-0"],[1,"f-s-14","d-block","mat-body-1","m-t-8"],[1,"or-border","m-t-30"],[1,"m-t-30",3,"formGroup","ngSubmit"],[1,"mat-subtitle-2","f-s-14","f-w-600","m-b-12","d-block"],["appearance","outline","color","primary",1,"w-100"],["matInput","","formControlName","uname"],["class","m-b-16 error-msg",4,"ngIf"],["matInput","","type","email","formControlName","email"],["matInput","","type","password","formControlName","password"],["mat-flat-button","","color","primary",1,"w-100",3,"disabled"],[1,"d-block","f-w-500","d-block","m-t-24"],[1,"text-decoration-none","text-primary","f-w-500","f-s-14",3,"routerLink"],[1,"m-b-16","error-msg"],["class","text-error",4,"ngIf"],[1,"text-error"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),t._uU(5,"JC Valves"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"img",5),t.qZA()()(),t.TgZ(8,"div",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"h4",10),t._uU(13,"Welcome to JC Valves"),t.qZA(),t.TgZ(14,"span",11),t._uU(15,"Your Admin Dashboard"),t.qZA(),t.TgZ(16,"div",12),t._uU(17,"Sign up with"),t.qZA(),t.TgZ(18,"form",13),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(19,"mat-label",14),t._uU(20,"Name"),t.qZA(),t.TgZ(21,"mat-form-field",15),t._UZ(22,"input",16),t.YNc(23,X,3,2,"mat-hint",17),t.qZA(),t.TgZ(24,"mat-label",14),t._uU(25,"Email Address"),t.qZA(),t.TgZ(26,"mat-form-field",15),t._UZ(27,"input",18),t.YNc(28,O,2,1,"mat-hint",17),t.qZA(),t.TgZ(29,"mat-label",14),t._uU(30,"Password"),t.qZA(),t.TgZ(31,"mat-form-field",15),t._UZ(32,"input",19),t.YNc(33,K,2,1,"mat-hint",17),t.qZA(),t.TgZ(34,"button",20),t._uU(35," Sign Up "),t.qZA()(),t.TgZ(36,"span",21),t._uU(37,"Already have an Account? "),t.TgZ(38,"a",22),t._uU(39," Sign In"),t.qZA()()()()()()()()),2&a&&(t.xp6(18),t.Q6J("formGroup",n.form),t.xp6(5),t.Q6J("ngIf",n.f.uname.touched&&n.f.uname.invalid),t.xp6(5),t.Q6J("ngIf",n.f.email.touched&&n.f.email.invalid),t.xp6(5),t.Q6J("ngIf",n.f.password.touched&&n.f.password.invalid),t.xp6(1),t.Q6J("disabled",!n.form.valid),t.xp6(4),t.Q6J("routerLink",t.DdM(6,V)))},dependencies:[m.Bz,m.rH,u.q,p.KE,p.hX,p.bx,d.Nt,l.lW,r.u5,r._Y,r.Fj,r.JJ,r.JL,r.UX,r.sg,r.u,c.O5]}),i})();const W=[{path:"",children:[{path:"error",component:_},{path:"forgot-password",component:Z},{path:"login",component:b},{path:"register",component:x}]}];var q=s(617),$=s(9134);let tt=(()=>{var e;class i{}return(e=i).\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,m.Bz.forChild(W),q.Ps,T.QW,d.c,v.p9,l.ot,r.u5,r.UX,$.et.pick(A),b,x,Z,_]}),i})()}}]);