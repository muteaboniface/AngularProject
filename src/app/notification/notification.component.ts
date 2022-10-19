import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class = "notif-bar"> 
              <p> This website uses cookies to provide a great user experience </p>
              </div>`,
  styles: [".notif-bar{margin: 0px 10px;padding: 10px 20px;text-align:center;background-color:yellow;}","p{font-size:45px;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
