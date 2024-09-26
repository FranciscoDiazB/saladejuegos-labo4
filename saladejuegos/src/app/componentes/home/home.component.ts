import { Component, inject } from '@angular/core';
import { Auth , signOut} from '@angular/fire/auth';
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

  constructor(private router: Router, public auth:Auth){

  }

  user:string = '';

  goToQuienSoy(){
    this.router.navigate(['quiensoy']);
  }

  LogOut(){
    signOut(this.dataAuth.authData).then(() => {
      this.router.navigate(['login'])
    }).catch
  }
}
