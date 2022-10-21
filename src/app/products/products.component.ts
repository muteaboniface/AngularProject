import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cartoons = [
    {id:1,name:'Bugs Bunny',available:"Available",rating:8, Appearance:'Wild Hare',url:'../../assets/images/bunny1.webp',},
    {id:2,name:'Homer Simpson',available:'Not available',rating:7, Appearance:'The Tracey Ullman Show',url:'../../assets/images/simpson.webp',},
    {id:3,name:'Bart Simpson',available:"Available",rating:9, Appearance:"Homer Simpson's son",url:'../../assets/images/bart.webp',},
    {id:4,name:'Scooby-Doo',available:"Available",rating:8, Appearance:'Scooby Doo, Where Are You?',url:'../../assets/images/scooby.webp'},
    {id:5,name:'Mr. Magoo',available:'Not available',rating:7, Appearance:'The Ragtime Bear',url:'../../assets/images/magoo.webp',},
    {id:1,name:'Speed Racer',available:"Available",rating:8, Appearance:'Speed Race',url:'../../assets/images/speed.webp'}
  ];

// move data from parent to child 
// products > search

getallCartoons(){
    return this.cartoons.length;
}

getAvailableCartoons(){
    let len: number = this.cartoons.filter(function(cartoon){
      return cartoon.available ==='Available';
    }).length;
    console.log(len);
    return len;
}

getUnAvailableCartoons(){
  return this.cartoons.filter(cartoon => cartoon.available==='Not available').length;
}


}
