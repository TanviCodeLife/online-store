import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Gap';

  constructor(private authService: AuthenticationService, router: Router) {
    authService.user$.subscribe(user => {
      if (user) {
        const returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
