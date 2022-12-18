import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/CartItem';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CartDataObject } from '../models/CartDataObject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  cart: CartItem[] = [];

  constructor(private http: HttpClient) { }
  
  addCartItem(productId: String, quanity: number):void{
      this.cart.push({productId, quanity})
  }
  getCart(){
    return this.cart;
  }
  getCartDetails():Observable<CartDataObject>{
    return this.http.post<CartDataObject>(environment.apiUrl + "/total", this.cart);
  }
}
