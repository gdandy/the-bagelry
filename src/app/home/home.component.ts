import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: Array<string>;

  constructor() { }

  ngOnInit() {
    this.images = [
      './assets/img/cs-1/sandwich-breakfast-14er.jpg',
      './assets/img/cs-1/the-bagelry-sign.jpg',
      './assets/img/cs-1/drinks-dazbog-coffee.jpg',
      './assets/img/cs-1/bagel-mountain-power.jpg'
     ];
  }
}
