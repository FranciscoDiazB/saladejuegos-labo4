import{a as y,c as L,d as S}from"./chunk-W4UEMMHQ.js";import{c as k}from"./chunk-FD45XJR3.js";import{C as v,E as N}from"./chunk-OZSLH7J7.js";import{a as O,b as P,c as E,d as R,e as D,f as F,g as I}from"./chunk-DL7Y5B5S.js";import"./chunk-OUYQLPYK.js";import{$ as b,$a as d,Ca as l,Da as c,Oa as x,Ta as C,Xa as n,Ya as i,Za as m,ab as _,bb as a,cb as w,da as h,eb as g,fb as f,gb as u,ib as M}from"./chunk-6R7DXF75.js";function T(s,o){if(s&1&&(m(0,"br")(1,"br")(2,"br"),n(3,"p",10),a(4),i()),s&2){let t=_();l(4),w(t.errorMessage)}}var A=class s{constructor(o,t){this.router=o;this.firestore=t}email="";password="";errorMessage="";dataAuth=b(N);ngOnInit(){console.log(this.dataAuth.authData.currentUser?.email)}Login(o){v(this.dataAuth.authData,this.email,this.password).then(t=>{let e=S(this.firestore,"logslogin");L(e,{ingreso:new Date,usuario:this.email}),this.router.navigate([o])}).catch(t=>{switch(console.log(t.code),t.code){case"auth/invalid-email":this.errorMessage="Ingrese el formato de Email correcto. Reintente...";break;case"auth/invalid-credential":this.errorMessage="Usuario y/o contrase\xF1a incorrectos. Reintente...";break;case"auth/missing-password":this.errorMessage="Falta completar el campo de la contrase\xF1a. Reintente...";break;default:this.errorMessage="Hubo un error en el login. Reintente...";break}})}CompleteCredentialsUser(o){o=="diego"?(this.email="diegomori@gmail.com",this.password="diego1234A"):(this.email="fran@gmail.com",this.password="nokia27")}static \u0275fac=function(t){return new(t||s)(c(k),c(y))};static \u0275cmp=h({type:s,selectors:[["app-login"]],standalone:!0,features:[M],decls:18,vars:3,consts:[[1,"divLogin"],[1,"login"],[2,"font-size","50px"],["type","text","name","u","placeholder","Email",1,"data-input",3,"ngModelChange","ngModel"],["type","password","name","p","placeholder","Contrase\xF1a",1,"data-input",3,"ngModelChange","ngModel"],[1,"custom-btn","btn-2",2,"width","100%","font-size","20px",3,"click"],["href","registro"],[2,"text-align","center","color","#0bf4f3"],[1,"custom-btn","btn-2",2,"position","fixed","right","20%","font-size","15px",3,"click"],[1,"custom-btn","btn-2",2,"position","fixed","right","57%","font-size","15px",3,"click"],[2,"font-size","18px","border","1px solid rgba(243, 19, 224, 0.94)","background-color","#42083d","; color","#0bf4f3","padding","5px","text-align","center"]],template:function(t,e){t&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Login"),i(),n(4,"form")(5,"input",3),u("ngModelChange",function(r){return f(e.email,r)||(e.email=r),r}),i(),n(6,"input",4),u("ngModelChange",function(r){return f(e.password,r)||(e.password=r),r}),i(),n(7,"button",5),d("click",function(){return e.Login("home")}),a(8,"Ingresar"),i()(),n(9,"a",6),m(10,"br"),n(11,"p",7),a(12,"\xBFNo tiene una cuenta? Registre un nuevo usuario..."),i()(),n(13,"button",8),d("click",function(){return e.CompleteCredentialsUser("")}),a(14,"Usuario Dos"),i(),n(15,"button",9),d("click",function(){return e.CompleteCredentialsUser("diego")}),a(16,"Usuario Uno"),i(),x(17,T,5,1),i()()),t&2&&(l(5),g("ngModel",e.email),l(),g("ngModel",e.password),l(11),C(e.errorMessage!=""?17:-1))},dependencies:[I,F,O,P,E,D,R],styles:['.divLogin[_ngcontent-%COMP%]{background-image:url("./media/fondo-LKMVR7LG.jpg");height:92.15vh}h1[_ngcontent-%COMP%]{position:relative;text-align:center;font-family:Open Sans,sans-serif;text-shadow:0 0 5px #0bf4f3,0 0 10px #0bf4f3,0 0 20px #0bf4f3,0 0 40px #0bf4f3,0 0 80px #0bf4f3}.login[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;position:fixed;top:40%;left:45%;margin:-150px 0 0 -150px;width:500px;height:450px;background:#ffffff0f;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(14.5px);-webkit-backdrop-filter:blur(14.5px);border:1px solid rgba(243,19,224,.94);padding:30px}.data-input[_ngcontent-%COMP%]{background-color:#42083d;color:#0bf4f3;margin-bottom:10px;width:95%;font-size:18px;display:block;padding:10px;border:1px solid rgba(243,19,224,.94);outline:none;border-radius:7px;box-shadow:0 0 25px 1px transparent;transition:box-shadow .4s linear,border-color .4s linear}.data-input[_ngcontent-%COMP%]:focus{border-color:#0bf4f3;box-shadow:0 0 20px 1px #0bf4f3}.custom-btn[_ngcontent-%COMP%]{color:#fff;margin-top:10px;height:40px;padding:10px 25px;font-family:Open Sans,sans-serif;font-weight:500;background:transparent;cursor:pointer;transition:all .3s ease;position:relative;display:inline-block}.btn-2[_ngcontent-%COMP%]{color:#0bf4f3;border:1px solid #0bf4f3;box-shadow:0 0 5px #0bf4f3,0 0 5px #0bf4f3 inset}.btn-2[_ngcontent-%COMP%]:before{height:0%;width:2px}.btn-2[_ngcontent-%COMP%]:hover{color:#fff;box-shadow:inset 0 0 10px #0bf4f3,0 0 20px #0bf4f3 inset,0 0 20px #0bf4f3 inset}']})};export{A as LoginComponent};
