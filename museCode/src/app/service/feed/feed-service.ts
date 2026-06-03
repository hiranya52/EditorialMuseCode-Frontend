import { HttpClient, httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';
import { Category } from '../../../model/Category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {

  constructor(private http: HttpClient){}


  getAllCategories(): Observable<Category[]> {

    return this.http.get<Category[]>(API_ENDPOINTS.feed.getAllCategories);

  }

  setFeed(feed: string[]){

    return this.http.post(API_ENDPOINTS.feed.personalized, feed);

  }

}
