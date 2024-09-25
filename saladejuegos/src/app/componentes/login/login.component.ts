import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
  flagMsg:string = '';
  flagSucces:boolean = false;

  constructor(private router: Router){

  }

  login(path:string){
    if(this.email == "hola@gmail.com" && this.password == "12345"){
      this.flagMsg = "Usuario Exitoso"
      this.router.navigate([path]);
    }
    else if(this.email == ''|| this.password == ''){
      this.flagMsg = "Complete todos los campos"
    }
    else{
      this.flagMsg = "Usuario y/o contraseña incorrecta. Reingrese los datos..."
    }
  }  
}
