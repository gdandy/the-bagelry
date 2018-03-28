import { Component, OnInit } from '@angular/core';

export interface ImageAlt {
  src: string;
  altText: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: Array<ImageAlt> = [];

  constructor() { }

  ngOnInit() {
    this.images.push({ src: './assets/img/cs-1/sandwich-breakfast-14er.jpg', altText: 'The 14er Breakfast Sandwich'});
    this.images.push({ src: './assets/img/cs-1/the-bagelry-sign.jpg', altText: 'The Bagelry' });
    this.images.push({ src: './assets/img/cs-1/drinks-dazbog-coffee.jpg', altText: 'Proudly serving Dazbog Coffee' });
    this.images.push({ src: './assets/img/cs-1/bagel-mountain-power.jpg', altText: 'The Mountain Power Bagel' });
  }
}
