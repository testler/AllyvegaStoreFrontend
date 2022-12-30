import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-show-page',
  templateUrl: './product-show-page.component.html',
  styleUrls: ['./product-show-page.component.css']
})
export class ProductShowPageComponent implements OnInit {
  productId: String = "";
  product: Product = { id: "", name:"", image:"", description:"", price: 0, inStock: false, category_id: ""};
  constructor() { }

  ngOnInit(): void {
  }

}
