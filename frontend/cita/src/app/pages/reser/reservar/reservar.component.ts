import { Component, OnInit } from '@angular/core';
import { ReservacionService } from 'src/app/services/reservacion.service';
@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {
  reservation = { restaurant: false, hotel: false, transport: false, location: '' };
  locations = [
    { name: 'Restaurant Location', imageUrl: 'path/to/restaurant.jpg' },
    { name: 'Hotel Location', imageUrl: 'path/to/hotel.jpg' },
    { name: 'Transport Location', imageUrl: 'path/to/transport.jpg' }
  ];
  selectedImage = '';

  constructor(private reservacionService: ReservacionService) { }

  onServiceChange(): void {
    if (this.reservation.restaurant) {
      this.selectedImage = 'path/to/restaurant.jpg';
    } else if (this.reservation.hotel) {
      this.selectedImage = 'path/to/hotel.jpg';
    } else if (this.reservation.transport) {
      this.selectedImage = 'path/to/transport.jpg';
    } else {
      this.selectedImage = '';
    }
  }

  reserve(): void {
    const token = localStorage.getItem('token') || '';
    this.reservacionService.makeReservation(this.reservation, token).subscribe(response => {
      console.log('Reservation made successfully', response);
    }, error => {
      console.error('Error making reservation', error);
    });
  }
  ngOnInit(): void {
  }

}
