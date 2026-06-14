import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(private http: HttpClient){}

  getUserProfile(userId: number): Observable<User>{

    return this.http.get<User>(API_ENDPOINTS.profile.getUserProfile(userId));

  }

}
