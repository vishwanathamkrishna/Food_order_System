import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  data: string = '';
  userName: string;
  loginUserName: string = sessionStorage.getItem('loginUserName');
  result: any = [];
  constructor(private authService: AuthLoginService) {}

  ngOnInit(): void {
    this.authService.subject.subscribe((res) => (this.data = res));
    this.authService.getUserName(this.loginUserName).subscribe((res) =>{
    this.result = res;
    this.userName = this.result[0].name;

    });
  }

}
