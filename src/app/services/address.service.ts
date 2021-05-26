import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  api = 'http://localhost:3000/address';
  email: string = sessionStorage.getItem('loginUser');
  postid: any;
  constructor(private httpClient: HttpClient) {}

  getAllAddress(): Observable<any> {
    return this.httpClient.get(this.api);
  }

  getAddressByEmail(email: string): Observable<any> {
    return this.httpClient.get(this.api + '?email=' + email);
  }

  addNewAddress(address: any) {
    console.log(address);
    this.httpClient.post<any>(this.api, address).subscribe((val) => {
      this.postid = val.id;
    });
  }

  updateAdress(address: any, id: any) {
    console.log(address);
    this.httpClient.put(this.api + '/' + id, address).subscribe((data) => {
      console.log(data);
    });
  }
  deleteAddress(id: any) {
    this.httpClient.delete(this.api + '/' + id).subscribe((val) => {
      console.log(val);
    });
  }
}
