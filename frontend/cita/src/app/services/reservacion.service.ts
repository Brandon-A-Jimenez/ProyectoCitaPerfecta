import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
private baseURL = 'htpp://localhost:5000';
  constructor(private http: HttpClient) { }
  makeReservation(reservation: any): Observable<any>{
    return this.http.post('${this.baseUrl}/reserve',reservation);
  }
}
