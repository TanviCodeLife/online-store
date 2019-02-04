import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  providers: [AuthenticationService]
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  constructor(public authService: AuthenticationService) {
    authService.appUser$.subscribe(appUser => this.appUser = appUser);
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
