import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
  providers: [AuthenticationService]
})
export class BsNavbarComponent implements OnInit {
  
  constructor(public authService: AuthenticationService) {
   }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

}
