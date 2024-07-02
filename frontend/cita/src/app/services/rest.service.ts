import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private apiUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  registro(user: any): Observable<any>{
    return this.http.post('${this.baseURL}',user);
  }
  login(user: any): Observable<any>{
    return this.http.post('${this.baseURL}',user);
  }
}
