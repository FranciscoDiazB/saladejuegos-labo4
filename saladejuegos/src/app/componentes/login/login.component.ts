import { Component } from '@angular/core';
import { Auth , signInWithEmailAndPassword} from '@angular/fire/auth';
import { Firestore , addDoc, collection, collectionData} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email:string = '';
  password:string = '';
  errorMessage:string = '';

  constructor(private router: Router, private firestore: Firestore, public auth:Auth){

  }

  Login(path:string){
    
    signInWithEmailAndPassword(this.auth, this.email, this.password).then((res) => {

      let col = collection(this.firestore, 'logslogin');
      addDoc(col, {ingreso: new Date(), "usuario": this.email})

      this.router.navigate([path]);

    }).catch((e) =>{

      console.log(e.code);

      switch(e.code){
        case 'auth/invalid-email':
          this.errorMessage = "Ingrese el formato de Email correcto. Reintente...";
          break;

        case 'auth/invalid-credential':
          this.errorMessage = "Usuario y/o contraseña incorrectos. Reintente...";
          break;
        
        case 'auth/missing-password':
          this.errorMessage = "Falta completar el campo de la contraseña. Reintente...";
          break;

        case 'auth/email-already-in-use':
          this.errorMessage = "El email ya se encuentra registrado. Reintente...";
          break;

        case 'auth/missing-email':
          this.errorMessage = "Falta completar el campo del email. Reintente...";
          break;
      }

    })

  }
  
  CompleteCredentialsUser(user:string){

    if(user == 'diego'){
      this.email = 'diegomori@gmail.com';
      this.password = 'diego1234A';
    }
    else{
      this.email = 'fran@gmail.com';
      this.password = 'nokia27';
    }

  }


}
