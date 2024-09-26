import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-quiensoy',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterOutlet],
  templateUrl: './quiensoy.component.html',
  styleUrl: './quiensoy.component.scss'
})
export class QuiensoyComponent {

  constructor(private router:Router){

  }
  
  goBackHome(){
    this.router.navigate(['home']);
  }

}
