import{d as _}from"./chunk-ZXQU6U7T.js";import{D as v,E as O}from"./chunk-5JQEPOSU.js";import{Ba as c,Ca as d,Ma as h,Qa as g,Ra as e,Sa as t,Ta as r,Ua as x,Va as u,Wa as b,Xa as n,_ as s,ca as m,cb as C,ka as f,la as l}from"./chunk-E7KN2AWI.js";function k(i,a){if(i&1){let o=x();e(0,"div",5)(1,"img",6),u("click",function(){f(o);let M=b();return l(M.openAhorcado())}),t(),e(2,"h1",7),n(3,"Ahorcado"),t()(),e(4,"div",8),r(5,"img",9),e(6,"h1",7),n(7,"Menor o Mayor"),t()(),e(8,"div",10),r(9,"img",11),e(10,"h1",7),n(11,"Preguntados"),t()()}}function S(i,a){i&1&&(e(0,"h1",4),n(1,"Para poder acceder a los juegos tiene que Iniciar sesi\xF3n "),r(2,"br"),n(3,"o Registrar un nuevo usuario "),t())}var w=class i{constructor(a){this.router=a}dataAuth=s(O);user="";openAhorcado(){this.router.navigate(["ahorcado"])}LogOut(){v(this.dataAuth.authData).then(()=>{this.router.navigate(["login"])}).catch}static \u0275fac=function(o){return new(o||i)(d(_))};static \u0275cmp=m({type:i,selectors:[["app-home"]],standalone:!0,features:[C],decls:7,vars:1,consts:[[1,"divHome"],[1,"home"],[1,"h1-teal",2,"font-size","60px","position","fixed","right","60%"],[1,"fa-solid","fa-gamepad",2,"font-size","60px","color","#0bf4f3","position","fixed","top","9%","right","89%"],[1,"h1-pink",2,"color","aliceblue","font-size","40px","position","fixed","top","40%","right","18%"],[1,"containerGame",2,"top","40%","right","78%"],["src","media/ahorcado.jpg","width","200px","height","200px",2,"margin-right","40px",3,"click"],[1,"h1-pink",2,"text-align","center","color","aliceblue","font-size","25px"],[1,"containerGame",2,"top","40%","right","63%"],["src","media/mayormenor.jpg","alt","","width","200px","height","200px",2,"margin-right","40px"],[1,"containerGame",2,"top","40%","right","48%"],["src","media/preguntados.jpg","alt","","width","200px","height","200px",2,"margin-right","40px"]],template:function(o,p){o&1&&(e(0,"div",0)(1,"div",1)(2,"h1",2),n(3,"NEON MASTER"),t(),r(4,"i",3),h(5,k,12,0)(6,S,4,0,"h1",4),t()()),o&2&&(c(5),g(p.dataAuth.authData.currentUser!=null&&p.dataAuth.authData.currentUser.email?5:6))},styles:['.divImgs[_ngcontent-%COMP%]{position:fixed;top:40%;right:45%}.containerGame[_ngcontent-%COMP%]{width:200px;height:200px;position:fixed}.containerGame[_ngcontent-%COMP%]:hover{border:2px solid;border-color:#0bf4f3;box-shadow:0 0 20px 1px #0bf4f3;cursor:pointer}.h1-teal[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;text-shadow:0 0 5px #0bf4f3,0 0 10px #0bf4f3,0 0 20px #0bf4f3,0 0 40px #0bf4f3,0 0 80px #0bf4f3}.h1-pink[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;text-shadow:0 0 5px rgba(243,19,224,.94),0 0 10px rgba(243,19,224,.94),0 0 20px rgba(243,19,224,.94),0 0 40px rgba(243,19,224,.94),0 0 80px rgba(243,19,224,.94)}.divHome[_ngcontent-%COMP%]{background-image:url("./media/fondoHome-5NZUCLRL.jpg");height:92.15vh}.home[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;position:fixed;top:29%;left:15%;margin:-150px 0 0 -150px;border-radius:0%;width:1600px;height:700px;background:#ffffff0f;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(243,19,224,.94);padding:20px}.custom-btn[_ngcontent-%COMP%]{color:#fff;margin-top:10px;height:40px;padding:10px 25px;font-family:Open Sans,sans-serif;font-weight:500;background:transparent;cursor:pointer;transition:all .3s ease;position:relative;display:inline-block}.btn-2[_ngcontent-%COMP%]{color:#0bf4f3;border:1px solid rgba(243,19,224,.94);box-shadow:0 0 5px #f313e0f0,0 0 5px #f313e0f0 inset}.btn-2[_ngcontent-%COMP%]:before{height:0%;width:2px}.btn-2[_ngcontent-%COMP%]:hover{color:#fff;box-shadow:inset 0 0 10px #f313e0f0,0 0 20px #f313e0f0 inset,0 0 20px #f313e0f0 inset}']})};export{w as HomeComponent};
