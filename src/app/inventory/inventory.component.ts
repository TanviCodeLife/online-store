import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent {
  @Input() childAllProducts: Product[];
  @Output() clickSender = new EventEmitter();

  constructor() { }


  showProductEditForm(productToEdit: Product){
   this.clickSender.emit(productToEdit);
 }

}
