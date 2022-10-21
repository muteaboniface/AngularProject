import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class = "notif-bar" [ngClass] =    "{fadeout: hideNotification}"> 
              <div class="close"><button class="close" (click)="hideNotif()">X</button></div>
              <p> This website uses cookies to provide a great user experience </p>
              </div>`,
  styles: [".notif-bar{margin: 0px 10px;padding: 10px 20px;text-align:center;background-color:magenta;}","p{font-size:25px;}",".close {float: right;margin-top: 0px;}",
  ".fadeout {visibility: hidden;opacity: 0;transition: visibility 0s 2s, opacity 2s linear;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hideNotification: boolean = false;

  hideNotif(){
    this.hideNotification = true;
  }
}
