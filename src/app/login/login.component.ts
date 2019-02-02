import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})

export class LoginComponent implements OnInit {
  user: any;

  constructor(public authService: AuthenticationService) {
    this.authService.user$.subscribe(user => {
      console.log(user);
    });
   }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
