import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { importType } from '@angular/compiler/src/output/output_ast';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    canActivate: [AuthGuardService]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
