import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HahaformService {
  items=[{a:"aaaaa"}];

  addToItem(data){
    // console.log('start haha', this.items);
    this.items.push(data);
    console.log('haha data', this.items);
  }

  getItems() {
    return this.items;
  }

  // constructor() { }
}
