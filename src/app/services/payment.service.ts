import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  api = 'http://localhost:3000/payments';
  email: string = sessionStorage.getItem('loginUser');
  postid: any;

  constructor(private httpClient: HttpClient) {}

  getAllPayments(): Observable<any> {
    return this.httpClient.get(this.api);
  }

  getPaymentsByEmail(email: string): Observable<any> {
    return this.httpClient.get(this.api + '?email=' + email);
  }

  addNewCard(card: any) {
    console.log(card);
    this.httpClient.post<any>(this.api, card).subscribe((val) => {
      this.postid = val.id;
    });
  }

  updateCard(card: any, id: any) {
    console.log(card);
    this.httpClient.put(this.api + '/' + id, card).subscribe((data) => {
      console.log(data);
    });
  }

  deleteCard(id: any) {
    this.httpClient.delete(this.api + '/' + id).subscribe((val) => {
      console.log(val);
    });
  }
}
