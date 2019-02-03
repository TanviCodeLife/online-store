import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { ProductsComponent } from './products/products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BsNavbarComponent,
    LoginComponent,
    CheckoutComponent,
    ProductsComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
