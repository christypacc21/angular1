import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  alert() {
    window.alert('asdfasdfkjasdfh');
    // window.alert("asdfasdfkjasdfh"); // doesnt work for "" -> hv error
  }



  // export class ProductListComponent implements OnInit {
  // constructor() { }
  // ngOnInit() {
  // }
}
