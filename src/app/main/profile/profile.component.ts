import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = [];
  loginUser: string = sessionStorage.getItem('loginUser');
  constructor(private profileService: AuthLoginService) {}

  ngOnInit(): void {
    this.profileService.getAllUserDetails(this.loginUser).subscribe((res) => {
      console.log(JSON.stringify(res));
      this.profile = res;
    }, null);
  }

}
