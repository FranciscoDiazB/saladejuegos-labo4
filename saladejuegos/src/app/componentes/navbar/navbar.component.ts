import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { signOut} from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  dataAuth = inject(AuthService);

  constructor(private router : Router){

  }

  LogOut(){
    signOut(this.dataAuth.authData).then(() => {
      this.router.navigate(['login'])
    }).catch
  }
}
