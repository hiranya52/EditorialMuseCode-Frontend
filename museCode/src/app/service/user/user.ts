import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class User {

  constructor(private http: HttpClient) { }

  registerUser(userObj : User): Observable<User> {
    return this.http.post<User>(API_ENDPOINTS.user.registerUser, userObj);
  }

}
