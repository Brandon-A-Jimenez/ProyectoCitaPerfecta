import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/home/inicio/inicio.component';
import { ReservarComponent } from './pages/reser/reservar/reservar.component';
import { SobreComponent } from './pages/sec/sobre/sobre.component';
import { LoginComponent } from './pages/inicio/login/login.component';
import { JoinComponent } from './pages/crear/join/join.component';

const routes: Routes = [
  {path: 'home/inicio', component: InicioComponent},
  {path: 'sec/sobre', component: SobreComponent},
  {path: 'reser/reservar', component: ReservarComponent},
  {path: 'crear/join',component:JoinComponent},
  {path: 'inicio/login',component:LoginComponent},
  {path: '',redirectTo: '/home/inicio', pathMatch:'full'},
  {path: '**', redirectTo: '/home/inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
