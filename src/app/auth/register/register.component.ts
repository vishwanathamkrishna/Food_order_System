import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/interfaces/UserDetails';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userDetails!: UserDetails;
  registerUser  = new FormGroup({

    // step 2: Mapping the <form> elements in the ts file.
    name  : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required)


    // step:3 conecting html <form> to the above variables.


  });
  isSaved = false;
  constructor(private router: Router, private authService: AuthLoginService) {
   }

  ngOnInit(): void {
  }

  onUserSubmit(): any{

    /*this.userDetails.name = this.registerUser.value.name;
    this.userDetails.email = this.registerUser.value.email;
    this.userDetails.password = this.registerUser.value.password;
    this.userDetails.confirmPassword = this.registerUser.value.confirmPassword;*/
    this.userDetails = this.registerUser.value;

    this.authService.addUser(this.userDetails)
    // tslint:disable-next-line: deprecation
    .subscribe (data => {
      console.log(data);
    });
    console.log(this.userDetails.name);
    this.isSaved = true;
    alert('User Registered you can login now');
    this.router.navigate(['login']);
  }
}