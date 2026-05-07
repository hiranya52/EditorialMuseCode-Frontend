import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';
import { Register } from '../../../model/UserRegister.model';

@Injectable({
  providedIn: 'root',
})
export class User {

  constructor(private http: HttpClient) { }

  registerUser(userObj : Register): Observable<User> {
    return this.http.post<User>(API_ENDPOINTS.user.register, userObj);
  }

}
