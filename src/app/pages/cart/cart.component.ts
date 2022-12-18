import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ShoppingCartServiceService } from '../../services/shopping-cart-service.service';
import { CartItem } from "../../models/CartItem"
import { Product } from 'src/app/models/Product';
import { Observable } from 'rxjs';
import { CartDataObject } from 'src/app/models/CartDataObject';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  emptyCart: Boolean = true;
  cart:CartItem[] = [];
  detailedCart: CartDataObject = {
    items: [],
    total: 0,
};
  constructor( public shoppingCartService:ShoppingCartServiceService) {

   }
  
  ngOnInit(): void {
    this.cart = this.shoppingCartService.getCart();
    if(this.cart){
      this.emptyCart = false;
      this.shoppingCartService.getCartDetails().subscribe((res:CartDataObject) => {this.detailedCart = res});
    }
  }

}
