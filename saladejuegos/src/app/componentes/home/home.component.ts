import { Component } from '@angular/core';
import { Auth , signOut} from '@angular/fire/auth';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router, public auth:Auth){

  }

  user:string = '';

  goToQuienSoy(){
    this.router.navigate(['quiensoy']);
  }

  LogOut(){
    signOut(this.auth).then(() => {
      this.router.navigate(['login'])
    })
  }
}
