import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private httpClient: HttpClient
  ) { }

  saveTweet(newPosts): Observable<any> {
    return this.httpClient.post('http://localhost:3000/posts', newPosts);
  }

  getPosts(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/posts');
  }
}
