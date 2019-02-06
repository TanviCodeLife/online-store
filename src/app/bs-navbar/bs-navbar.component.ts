import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  providers: [AuthenticationService]
})
export class BsNavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService) {

   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
