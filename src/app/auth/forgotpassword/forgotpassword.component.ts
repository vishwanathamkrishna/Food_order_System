import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  model: any = {};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onForgotPasswordSubmit(){
    this.router.navigate(['login']);
  }

}
