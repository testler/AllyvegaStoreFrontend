import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  cart: CartItem[] = [];

  constructor() { }
  
  addCartItem(productId: String, quanity: number):void{
      this.cart.push({productId, quanity})
  }
}
