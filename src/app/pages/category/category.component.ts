import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { Product } from 'src/app/models/Product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryid: string|null = "";
  category: any|null;
  categoryList: [Product]|null = null;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }
  ngOnInit() {
    this.route.paramMap
    .subscribe( params => {
      this.categoryid = params.get("category");
    })
    this.http
    .get(environment.apiUrl + "/get/" + this.categoryid)
    .subscribe( (response: Object[]|any) => {
      this.category = response;
      this.categoryList = response.products;
    } )
  }

}
