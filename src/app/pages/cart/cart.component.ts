import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ShoppingCartServiceService } from '../../services/shopping-cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  emptyCart: Boolean = true;
  cart: Object[]|any = [
    { qty: Number,
      id: String,
      item: Object,
    }
  ];
  constructor(private http: HttpClient, public shoppingCartService:ShoppingCartServiceService) {
    this.cart = shoppingCartService.getCartItems();
    this.emptyCart = (this.cart.length === 0);
    this.http
    .get(environment.apiUrl + "/total", this.cart)
    .subscribe( (response) => {
      this.cart = response;
    })
   }
  
  ngOnInit(): void {
  }

}
