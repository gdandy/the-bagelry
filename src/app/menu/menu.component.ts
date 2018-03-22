import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: Array<MenuItem>;

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      new MenuItem('Everything Bagel', 'Bagel', 'Everything on this bagel', 0.65),
      new MenuItem('Bagelry Supreme', 'Breakfast', 'Everything on this bagel', 6.99)
    ];
  }
}
