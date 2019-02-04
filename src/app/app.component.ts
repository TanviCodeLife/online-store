import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Gap';

  constructor(private authService: AuthenticationService, router: Router, private userService: UserService) {
    authService.user$.subscribe(user => {
      this.newMethod(user, userService, router);
    });
  }

  private newMethod(user, userService: UserService, router: Router) {
    if (user) {
      userService.save(user);
      const returnUrl = localStorage.getItem('returnUrl');
      router.navigateByUrl(returnUrl);
    }
  }
}
