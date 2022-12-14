import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartServiceService } from 'src/app/services/shopping-cart-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: String = "";
  product: Product = { id: "1", name:"", image:"", description:"", price: 0, inStock: false, category_id: ""};

  constructor(private route: ActivatedRoute, private productServiceService: ProductServiceService, private shoppingCartService: ShoppingCartServiceService) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.productServiceService.getProductById(params["id"])
      .subscribe((product) => {
        this.product = product;
      })
    })
  }

  addToCart(productId:String, quanity:number):void{
    this.shoppingCartService.addCartItem(productId, quanity)
  }
}