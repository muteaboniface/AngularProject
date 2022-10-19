import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slogan:String = "Your one Stop Shop for all your coffee beans";

  newSlogan(){
    return "Method Slogan Test";
  }
}
