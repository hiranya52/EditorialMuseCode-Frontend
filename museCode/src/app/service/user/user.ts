import { LogIn } from './../../pages/log-in/log-in';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';
import { Register } from '../../../model/Register.model';

@Injectable({
  providedIn: 'root',
})
export class User {

  constructor(private http: HttpClient) { }

  register(userObj : Register): Observable<Register> {
    return this.http.post<Register>(API_ENDPOINTS.user.register, userObj);
  }

  logIn(userObj : LogIn): Observable<LogIn> {
    return this.http.post<LogIn>(API_ENDPOINTS.user.LogIn, userObj);
  }



}
