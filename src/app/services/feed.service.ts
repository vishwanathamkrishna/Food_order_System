import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  api = 'http://127.0.0.1:8000/api/feed';
  constructor(private httpClient: HttpClient) {}

  getAllFeed(): Observable<any> {
    return this.httpClient.get(this.api);
  }
}
