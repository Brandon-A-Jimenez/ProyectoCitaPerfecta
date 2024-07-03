import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextoComponent } from './footer/texto/texto.component';
import { ContenidoComponent } from './main/contenido/contenido.component';
import { NavComponent } from './nav/nav/nav.component';
import { InicioComponent } from './pages/home/inicio/inicio.component';
import { ReservarComponent } from './pages/reser/reservar/reservar.component';
import { SobreComponent } from './pages/sec/sobre/sobre.component';
import { MainComponent } from './nosotros/main/main.component';
import { FormulariosComponent } from './reser/formularios/formularios.component';
import { LoginComponent } from './pages/inicio/login/login.component';
import { JoinComponent } from './pages/crear/join/join.component';
import { RestService } from './services/rest.service';
import { ReservacionService } from './services/reservacion.service';
import { FacturaComponent } from './pages/factura/factura.component';

@NgModule({
  //declarar componentes
  declarations: [
    AppComponent,
    TextoComponent,
    ContenidoComponent,
    NavComponent,
    InicioComponent,
    ReservarComponent,
    SobreComponent, 
    MainComponent, 
    FormulariosComponent, 
    LoginComponent, 
    JoinComponent, FacturaComponent],
  imports: [ //modulos
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestService, ReservacionService], //servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
