import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../../assets/accessories.jpeg',
      title: 'Accessories',
      subtitle: 'hats and more!'
    };
    this.slides[1] = {
      id: 1,
      src: '../../../assets/drinkWares.jpeg',
      title: 'Drinkwares',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: '../../../assets/sweatshirts.jpeg',
      title: 'Sweatshirts',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }

}
