import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  result: any = [];
  constructor(private router: Router, private authService: AuthLoginService) {}

  ngOnInit(): void {}
  
  handleSubmit() {
    this.authService.getAllUserDetails(this.model.username).subscribe((res) => {
      this.result = res;
      console.log(JSON.stringify(res));
      let status = res.filter((r) => {
        console.log(r.email);
        return (
          r.email === this.model.username
        );
      });

      // console.log(status);
      //  console.log(status.length);
      if (status.length > 0) {
        console.log('user logged in succesfully');
        //  console.log(JSON.stringify(this.model));
        sessionStorage.setItem('loginUser', this.model.username);
        this.authService.subject.next('loggedin');
        this.router.navigate(['/home']);
      } else {
        if (confirm('Wrong Email or Password'))
          console.log('user not logged in successfully');
      }
    });
  }

}
