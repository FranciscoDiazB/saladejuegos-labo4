import{c as R,f as k}from"./chunk-FD45XJR3.js";import{A as y,C as v,E as A}from"./chunk-OZSLH7J7.js";import{a as S,b as E,c as P,d as O,e as F,f as L,g as N}from"./chunk-DL7Y5B5S.js";import"./chunk-OUYQLPYK.js";import{$ as f,$a as w,Ca as s,Da as u,Oa as b,Ta as h,Xa as o,Ya as n,Za as x,ab as M,bb as l,cb as C,da as m,eb as p,fb as d,gb as g,ib as _}from"./chunk-6R7DXF75.js";function D(r,e){if(r&1&&(o(0,"p",8),l(1),n()),r&2){let a=M();s(),C(a.errorMessage)}}var W=class r{constructor(e){this.router=e}email="";password="";errorMessage="";flagError=!1;dataAuth=f(A);goBackLogin(e){this.router.navigate([e])}Register(){y(this.dataAuth.authData,this.email,this.password).then(e=>{v(this.dataAuth.authData,this.email,this.password),this.router.navigate(["home"])}).catch(e=>{switch(this.flagError=!0,console.log(e.code),e.code){case"auth/invalid-email":this.errorMessage="Email inv\xE1lido o campos incompletos. Reintente con datos correctos...";break;case"auth/missing-password":this.errorMessage="Falta completar el campo de la contrase\xF1a. Reintente...";break;case"auth/weak-password":this.errorMessage="Contrase\xF1a muy corta. Reintente...";break;case"auth/email-already-in-use":this.errorMessage="El email ya se encuentra registrado. Reintente...";break;case"auth/missing-email":this.errorMessage="Falta completar el campo del email. Reintente...";break;default:this.errorMessage="Hubo un error en el registro del usuario. Reintente...";break}})}static \u0275fac=function(a){return new(a||r)(u(R))};static \u0275cmp=m({type:r,selectors:[["app-registro"]],standalone:!0,features:[_],decls:14,vars:3,consts:[[1,"divLogin"],[1,"login"],[2,"font-size","50px"],["type","text","name","u","placeholder","Email",1,"data-input",3,"ngModelChange","ngModel"],["type","password","name","p","placeholder","Contrase\xF1a",1,"data-input",3,"ngModelChange","ngModel"],[1,"custom-btn","btn-2",2,"width","100%","font-size","20px",3,"click"],["href","login"],[2,"text-align","center","color","#0bf4f3"],[2,"font-size","18px","border","1px solid rgba(243, 19, 224, 0.94)","background-color","#42083d","; color","#0bf4f3","padding","5px","text-align","center"]],template:function(a,t){a&1&&(o(0,"div",0)(1,"div",1)(2,"h1",2),l(3,"Registro"),n(),o(4,"form")(5,"input",3),g("ngModelChange",function(i){return d(t.email,i)||(t.email=i),i}),n(),o(6,"input",4),g("ngModelChange",function(i){return d(t.password,i)||(t.password=i),i}),n(),o(7,"button",5),w("click",function(){return t.Register()}),l(8,"Registrar Nuevo Usuario"),n()(),o(9,"a",6),x(10,"br"),o(11,"p",7),l(12,"\xBFYa tiene una cuenta? Inicie Sesi\xF3n..."),n()(),b(13,D,2,1,"p",8),n()()),a&2&&(s(5),p("ngModel",t.email),s(),p("ngModel",t.password),s(7),h(t.flagError?13:-1))},dependencies:[k,N,L,S,E,P,F,O],styles:['.divLogin[_ngcontent-%COMP%]{background-image:url("./media/fondo-LKMVR7LG.jpg");height:92.15vh}.login[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;position:fixed;top:40%;left:45%;margin:-150px 0 0 -150px;width:500px;height:400px;background:#ffffff0f;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(243,19,224,.94);padding:30px}h1[_ngcontent-%COMP%]{position:relative;text-align:center;font-family:Open Sans,sans-serif;text-shadow:0 0 5px #0bf4f3,0 0 10px #0bf4f3,0 0 20px #0bf4f3,0 0 40px #0bf4f3,0 0 80px #0bf4f3}.data-input[_ngcontent-%COMP%]{background-color:#42083d;color:#0bf4f3;margin-bottom:10px;width:95%;font-size:18px;display:block;padding:10px;border:1px solid rgba(243,19,224,.94);outline:none;border-radius:7px;box-shadow:0 0 25px 1px transparent;transition:box-shadow .4s linear,border-color .4s linear}.data-input[_ngcontent-%COMP%]:focus{border-color:#0bf4f3;box-shadow:0 0 20px 1px #0bf4f3}.custom-btn[_ngcontent-%COMP%]{color:#fff;margin-top:10px;height:40px;padding:10px 25px;font-family:Open Sans,sans-serif;font-weight:500;background:transparent;cursor:pointer;transition:all .3s ease;position:relative;display:inline-block}.btn-2[_ngcontent-%COMP%]{color:#0bf4f3;border:1px solid #0bf4f3;box-shadow:0 0 5px #0bf4f3,0 0 5px #0bf4f3 inset}.btn-2[_ngcontent-%COMP%]:before{height:0%;width:2px}.btn-2[_ngcontent-%COMP%]:hover{color:#fff;box-shadow:inset 0 0 10px #0bf4f3,0 0 20px #0bf4f3 inset,0 0 20px #0bf4f3 inset}']})};export{W as RegistroComponent};
