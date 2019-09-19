import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { FormBuilder } from '@angular/forms'
import { HahaformService } from '../hahaform.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products = products;
  checkoutForm;
  constructor(
    private formBuilder: FormBuilder,
    private hahaformService: HahaformService
  ) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        address: ''
      });
  }

  onSubmit(customerData){
    console.log(customerData)
    this.hahaformService.addToItem(customerData);
    this.checkoutForm.reset();

  }

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
  ngOnInit() {
    this.hahaformService.getItems();
  }
}
