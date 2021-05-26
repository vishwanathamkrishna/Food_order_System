import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  api: string = 'http://localhost:3000/orders';
  postid: any;
  constructor(private httpClient: HttpClient) {}

  getOrderDetailsByEmail(email: string): Observable<any> {
    return this.httpClient.get(this.api + '?email=' + email);
  }

  newOrder(order: any) {
    this.httpClient.post<any>(this.api, order).subscribe((val) => {
      this.postid = val.id;
    });
  }

  deleteOrder(id: any) {
    this.httpClient.delete(this.api + '/' + id).subscribe((val) => {
      console.log(val);
    });
  }
}
