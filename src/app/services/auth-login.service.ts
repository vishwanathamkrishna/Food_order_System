import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UserDetails } from '../interfaces/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  api: string = 'http://localhost:8000/api/users';
  subject: Subject<string> = new Subject<string>();
  postid: any;
  constructor(private httpClient: HttpClient) {}

  getAllUserDetails(email: string): Observable<any> {
    return this.httpClient.get(this.api + '?email=' + email);
  }


  addUser(users: UserDetails): Observable<any>{

    const headers = { 'content-type': 'application/json'} ;
    const body = JSON.stringify(users);
    console.log('This is the Service');
    console.log(body);
    return this.httpClient.post('http://localhost:8000/api/user-registration', body,{ 'headers': headers});
  }

  getUserName(loginUser: string): Observable<any> {
    return this.httpClient.get(this.api + '?email=' + loginUser);
  }
}
