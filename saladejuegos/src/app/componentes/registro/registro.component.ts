import { Component, Output, EventEmitter, inject} from '@angular/core';
import { Auth , createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  email:string = '';
  password:string = '';
  errorMessage:string = '';
  flagError:boolean = false;

  dataAuth = inject(AuthService);

  constructor(private router:Router){

  }

  goBackLogin(path:string) {
    this.router.navigate([path]);
  }

  Register(){
    createUserWithEmailAndPassword(this.dataAuth.authData, this.email, this.password).then((res) => {

      signInWithEmailAndPassword(this.dataAuth.authData, this.email, this.password);
      this.router.navigate(['home']);
      
    }).catch((e) => {
      this.flagError = true;
      console.log(e.code)
      switch(e.code){
        case 'auth/invalid-email':
          this.errorMessage = "Email inválido o campos incompletos. Reintente con datos correctos...";
          break;
        
        case 'auth/missing-password':
          this.errorMessage = "Falta completar el campo de la contraseña. Reintente...";
          break;

        case 'auth/weak-password':
          this.errorMessage = "Contraseña muy corta. Reintente...";
          break;

        case 'auth/email-already-in-use':
          this.errorMessage = "El email ya se encuentra registrado. Reintente...";
          break;

        case 'auth/missing-email':
          this.errorMessage = "Falta completar el campo del email. Reintente...";
          break;

        default:
          this.errorMessage = "Hubo un error en el registro del usuario. Reintente..."
          break;

      }
    })
  }

  

}
