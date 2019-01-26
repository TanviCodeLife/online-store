import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'Gap';
 productEditForm = false;
 masterAllProducts: Product[] = [
   new Product("Mid Rise True Skinny Jeans", "Jeans", 69.95, 20),
   new Product("Mid Rise True Skinny Jeans with Raw Hem", "Jeans", 80.95, 12),
   new Product("Long Sleeve Shirred Blouse", "Shirts", 59.95, 20),
   new Product("Tiered Ruffled Blouse", "Shirts", 49.95, 4)
 ];

 showProductEditForm(){
  this.productEditForm = true;
}
}
