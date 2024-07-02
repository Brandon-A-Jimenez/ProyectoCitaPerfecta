import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = { email: '', password: '' };

  constructor(private restService: RestService) {}

  login():void{
    this.restService.login(this.credentials).subscribe(response =>{
      console.log('Creación exitosa',response);
      localStorage.setItem('token', response.access_token);
    }, error =>{
      console.error('Error de creacion', error);
    });
  }
  ngOnInit(): void {
  }

}
