import { Component, inject, OnInit} from '@angular/core';
import { signInWithEmailAndPassword} from '@angular/fire/auth';
import { Firestore , addDoc, collection, collectionData} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';
  errorMessage:string = '';

  dataAuth = inject(AuthService);

  constructor(private router: Router, private firestore: Firestore){

  }

  ngOnInit(): void {
    console.log(this.dataAuth.authData.currentUser?.email);
  }

  Login(path:string){
    
    signInWithEmailAndPassword(this.dataAuth.authData, this.email, this.password).then((res) => {

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

        default:
          this.errorMessage = "Hubo un error en el login. Reintente...";
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
