import { Component, inject } from '@angular/core';
import { signOut} from '@angular/fire/auth';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  dataAuth = inject(AuthService);

  constructor(private router: Router){

  }

  user:string = '';

  openAhorcado(){
    this.router.navigate(['ahorcado']);
  }

  openMayorMenor(){
    this.router.navigate(['mayormenor']);
  }

  LogOut(){
    signOut(this.dataAuth.authData).then(() => {
      this.router.navigate(['login'])
    }).catch
  }
}
