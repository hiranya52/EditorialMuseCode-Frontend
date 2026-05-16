import { HttpClient, httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../../../core/api/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class FeedService {

  constructor(private http: HttpClient){}

  setFeed(feed: string[]){

    return this.http.post(API_ENDPOINTS.feed.personalized, feed);

  }

}
