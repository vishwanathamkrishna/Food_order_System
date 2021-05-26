import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any[] = [];
  cartList: Cart;
  loginUser: string = sessionStorage.getItem('loginUser');

  constructor() {}

  cartItems(items: any) {
    this.cartList = new Cart(
      items.id,
      items.restaurent_name,
      items.description,
      items.name,
      items.cost,
      this.loginUser
    );
    this.items.push(this.cartList);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
