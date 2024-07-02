import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../services/rest.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {
  user = {email: '',password:''};
  constructor(private restService: RestService) { }

  register(): void {
    this.restService.registro(this.user).subscribe(response => {
      console.log('User registered successfully', response);
    }, error => {
      console.error('Error registering user', error);
    });
  }
  ngOnInit(): void {
  }

}
