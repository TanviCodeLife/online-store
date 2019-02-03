import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [AuthGuardService]
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
