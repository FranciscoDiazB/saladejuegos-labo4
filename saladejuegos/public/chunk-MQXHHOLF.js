import{a as v,c as P,d as O}from"./chunk-XZNJYQPG.js";import{a as D}from"./chunk-UMH36HZQ.js";import{D as y}from"./chunk-DTMHAA3M.js";import{a as L,b as S,c as z,d as E,e as R,f as F,g as T}from"./chunk-GXVHS54K.js";import{$ as b,K as s,L as g,P as h,R as C,S as n,T as o,U as c,W as p,X as _,Y as a,Z as k,aa as m,ba as f,da as M,pa as w,v as u,x}from"./chunk-WNPDPR7F.js";function A(d,i){if(d&1&&(c(0,"br")(1,"br")(2,"br"),n(3,"p",10),a(4),o()),d&2){let t=_();s(4),k(t.errorMessage)}}var N=class d{constructor(i,t){this.router=i;this.firestore=t}email="";password="";errorMessage="";dataAuth=u(D);Login(i){y(this.dataAuth.authData,this.email,this.password).then(t=>{let e=O(this.firestore,"logslogin");P(e,{ingreso:new Date,usuario:this.email}),this.router.navigate([i])}).catch(t=>{switch(console.log(t.code),t.code){case"auth/invalid-email":this.errorMessage="Ingrese el formato de Email correcto. Reintente...";break;case"auth/invalid-credential":this.errorMessage="Usuario y/o contrase\xF1a incorrectos. Reintente...";break;case"auth/missing-password":this.errorMessage="Falta completar el campo de la contrase\xF1a. Reintente...";break;default:this.errorMessage="Hubo un error en el login. Reintente...";break}})}CompleteCredentialsUser(i){i=="diego"?(this.email="diegomori@gmail.com",this.password="diego1234A"):(this.email="fran@gmail.com",this.password="nokia27")}static \u0275fac=function(t){return new(t||d)(g(w),g(v))};static \u0275cmp=x({type:d,selectors:[["app-login"]],standalone:!0,features:[M],decls:18,vars:3,consts:[[1,"divLogin"],[1,"login"],[2,"font-size","50px"],["type","text","name","u","placeholder","Email",1,"data-input",3,"ngModelChange","ngModel"],["type","password","name","p","placeholder","Contrase\xF1a",1,"data-input",3,"ngModelChange","ngModel"],[1,"custom-btn","btn-2",2,"width","100%","font-size","20px",3,"click"],["href","registro"],[2,"text-align","center","color","#0bf4f3"],[1,"custom-btn","btn-2",2,"position","fixed","right","20%","font-size","15px",3,"click"],[1,"custom-btn","btn-2",2,"position","fixed","right","57%","font-size","15px",3,"click"],[2,"font-size","18px","border","1px solid rgba(243, 19, 224, 0.94)","background-color","#42083d","; color","#0bf4f3","padding","5px","text-align","center"]],template:function(t,e){t&1&&(n(0,"div",0)(1,"div",1)(2,"h1",2),a(3,"Login"),o(),n(4,"form")(5,"input",3),f("ngModelChange",function(r){return m(e.email,r)||(e.email=r),r}),o(),n(6,"input",4),f("ngModelChange",function(r){return m(e.password,r)||(e.password=r),r}),o(),n(7,"button",5),p("click",function(){return e.Login("home")}),a(8,"Ingresar"),o()(),n(9,"a",6),c(10,"br"),n(11,"p",7),a(12,"\xBFNo tiene una cuenta? Registre un nuevo usuario..."),o()(),n(13,"button",8),p("click",function(){return e.CompleteCredentialsUser("")}),a(14,"Usuario Dos"),o(),n(15,"button",9),p("click",function(){return e.CompleteCredentialsUser("diego")}),a(16,"Usuario Uno"),o(),h(17,A,5,1),o()()),t&2&&(s(5),b("ngModel",e.email),s(),b("ngModel",e.password),s(11),C(e.errorMessage!=""?17:-1))},dependencies:[T,F,L,S,z,R,E],styles:['.btn[_ngcontent-%COMP%]{display:inline-block;padding:4px 10px;margin-top:20px;margin-bottom:0;font-size:13px;line-height:18px;color:#333;text-align:center;text-shadow:0 1px 1px rgba(255,255,255,.75);vertical-align:middle;background-color:#e742e7;background-image:-moz-linear-gradient(top,#e742e7,#e742e7);background-image:-ms-linear-gradient(top,#e742e7,#e742e7);background-image:-webkit-gradient(linear,0 0,0 100%,from(#e742e7),to(#e742e7));background-image:-webkit-linear-gradient(top,#e742e7,#e742e7);background-image:-o-linear-gradient(top,#e742e7,#e742e7);background-image:linear-gradient(top,#e742e7,#e742e7);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(startColorstr=#e742e7,endColorstr=#e742e7,GradientType=0);border-color:#e742e7 #e742e7 #e742e7;border-color:rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.25);border:1px solid #e6e6e6;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px #fff3,0 1px 2px #0000000d;cursor:pointer}.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:active, .btn.active[_ngcontent-%COMP%], .btn.disabled[_ngcontent-%COMP%], .btn[disabled][_ngcontent-%COMP%]{background-color:#c729cc}.btn-large[_ngcontent-%COMP%]{padding:9px 14px;font-size:15px;line-height:normal;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.btn[_ngcontent-%COMP%]:hover{color:#fff;text-decoration:none;background-color:#28bb1b}.btn-primary[_ngcontent-%COMP%], .btn-primary[_ngcontent-%COMP%]:hover{text-shadow:0 -1px 0 rgba(0,0,0,.25);color:#fff}.btn-primary.active[_ngcontent-%COMP%]{color:#ffffffbf}.btn-primary[_ngcontent-%COMP%]{background-color:#e742e7;background-image:-moz-linear-gradient(top,#d16ede,#e742e7);background-image:-ms-linear-gradient(top,#d16ede,#e742e7);background-image:-webkit-gradient(linear,0 0,0 100%,from(#d16ede),to(#e742e7));background-image:-webkit-linear-gradient(top,#d16ede,#e742e7);background-image:-o-linear-gradient(top,#d16ede,#e742e7);background-image:linear-gradient(top,#d16ede,#e742e7);background-repeat:repeat-x;filter:progid:dximagetransform.microsoft.gradient(startColorstr=#d16ede,endColorstr=#e742e7,GradientType=0);border:1px solid #aa1b97;text-shadow:1px 1px 1px rgba(0,0,0,.4);box-shadow:inset 0 1px #fff3,0 1px 2px #00000080}.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:active, .btn-primary.active[_ngcontent-%COMP%], .btn-primary.disabled[_ngcontent-%COMP%], .btn-primary[disabled][_ngcontent-%COMP%]{filter:none;background-color:#e742e7}.btn-block[_ngcontent-%COMP%]{width:100%;display:block}.divLogin[_ngcontent-%COMP%]{background-image:url("./media/fondo-LKMVR7LG.jpg");height:98vh}h1[_ngcontent-%COMP%]{position:relative;text-align:center;font-family:Open Sans,sans-serif;text-shadow:0 0 5px #0bf4f3,0 0 10px #0bf4f3,0 0 20px #0bf4f3,0 0 40px #0bf4f3,0 0 80px #0bf4f3}.login[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;position:fixed;top:40%;left:45%;margin:-150px 0 0 -150px;width:500px;height:450px;background:#ffffff0f;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(14.5px);-webkit-backdrop-filter:blur(14.5px);border:1px solid rgba(243,19,224,.94);padding:30px}.data-input[_ngcontent-%COMP%]{background-color:#42083d;color:#0bf4f3;margin-bottom:10px;width:95%;font-size:18px;display:block;padding:10px;border:1px solid rgba(243,19,224,.94);outline:none;border-radius:7px;box-shadow:0 0 25px 1px transparent;transition:box-shadow .4s linear,border-color .4s linear}.data-input[_ngcontent-%COMP%]:focus{border-color:#0bf4f3;box-shadow:0 0 20px 1px #0bf4f3}.custom-btn[_ngcontent-%COMP%]{color:#fff;margin-top:10px;height:40px;padding:10px 25px;font-family:Open Sans,sans-serif;font-weight:500;background:transparent;cursor:pointer;transition:all .3s ease;position:relative;display:inline-block}.btn-2[_ngcontent-%COMP%]{color:#0bf4f3;border:1px solid #0bf4f3;box-shadow:0 0 5px #0bf4f3,0 0 5px #0bf4f3 inset}.btn-2[_ngcontent-%COMP%]:before{height:0%;width:2px}.btn-2[_ngcontent-%COMP%]:hover{color:#fff;box-shadow:inset 0 0 10px #0bf4f3,0 0 20px #0bf4f3 inset,0 0 20px #0bf4f3 inset}']})};export{N as LoginComponent};
