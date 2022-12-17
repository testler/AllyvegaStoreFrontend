import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ShoppingCartServiceService } from '../../services/shopping-cart-service.service';
import { CartItem } from "../../models/CartItem"
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  emptyCart: Boolean = true;
  cart: CartItem[]|null = null;
  detailedCart: Product[]| null = null;
  total: Number = 0;
  constructor(private http: HttpClient, public shoppingCartService:ShoppingCartServiceService) {
    this.http
    .get(environment.apiUrl + "/total", this.cart)
    .subscribe( (response: Product[]) => {
      this.detailedCart = response;
      this.cart.forEach((item: { price: Number|any; }) => {
        this.total = this.total + item.price;
      });
    })
   }
  
  ngOnInit(): void {
    this.cart = this.shoppingCartService.getCartItems();
    this.emptyCart = (this.cart.length === 0);
  }

}
