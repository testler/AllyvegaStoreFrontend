import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoriesList: any  = [
    {
      id:"All",
      name:"All Items",
      image:"../../assets/allItems.jpeg"
    }
    ];
  constructor(private http: HttpClient) {
    this.http
    .get(environment.apiUrl)
    .subscribe((response: any) => {
      this.categoriesList = [...this.categoriesList, ...response];
    });
   }

  ngOnInit(): void {
  }

}
