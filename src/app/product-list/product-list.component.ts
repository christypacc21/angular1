import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  alert(product) {
    window.alert('asdfasdfkjasdfh');
    // window.alert(`product: ${product}`); -> seems template string sin jo dou (string + var geh combination)
    // window.alert("asdfasdfkjasdfh"); // doesnt work for "" -> hv error
  }

  onNotify(){
    window.alert("notify is pressed!")
  }



  // export class ProductListComponent implements OnInit {
  // constructor() { }
  // ngOnInit() {
  // }
}
