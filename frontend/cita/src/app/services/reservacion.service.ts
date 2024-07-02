import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
private baseURL = 'htpp://localhost:5000';
  constructor(private http: HttpClient) { }
  makeReservation(reservation: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.baseURL}/reserve`, reservation, { headers });
  }
}
