import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthLoginService, private router: Router) {}

  ngOnInit(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.authService.subject.next('');
    this.router.navigate(['/login']);
  }

}
