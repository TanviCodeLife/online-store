import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  @Input() childCurrentEdit: Product;
  @Output() clickSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  finishedEditing(){
  this.clickSender.emit();
}

}
