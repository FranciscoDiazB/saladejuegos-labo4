import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuiensoyComponent } from './componentes/quiensoy/quiensoy.component';
import { RegistroComponent } from './componentes/registro/registro.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: "full"},
    {path: 'login', loadComponent: () => import('./componentes/login/login.component').then((m) => m.LoginComponent)},
    {path: 'home', loadComponent: () => import('./componentes/home/home.component').then((m) => m.HomeComponent)},
    {path: 'quiensoy', loadComponent: () => import('./componentes/quiensoy/quiensoy.component').then((m) => m.QuiensoyComponent)},
    {path: 'registro', loadComponent: () => import('./componentes/registro/registro.component').then((m) => m.RegistroComponent)},
    {path: 'ahorcado', loadComponent: () => import('./componentes/juegos/ahorcado/ahorcado.component').then((m) => m.AhorcadoComponent)}, 
    {path: 'mayormenor', loadComponent: () => import('./componentes/juegos/mayormenor/mayormenor.component').then((m) => m.MayormenorComponent)}, 
    {path: 'preguntados', loadComponent: () => import('./componentes/juegos/preguntados/preguntados.component').then((m) => m.PreguntadosComponent)}
];
