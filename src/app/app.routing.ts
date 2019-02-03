import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { CheckoutComponent } from './checkout/checkout.component';

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
    path: 'checkout',
    component: CheckoutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
