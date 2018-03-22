import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('navExpand', [
      state('horizontal', style({
        display: 'block'
      })),
      state('open', style({
        display: 'block',
        transform: 'translateY(0)'
      })),
      state('closed', style({
        display: 'none',
        transform: 'translateY(-100%)'
      })),
      transition('closed => open', animate('150ms ease-in')),
      transition('open => closed', animate('50ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  expand = 'open';

  constructor() { }

  ngOnInit() {
    this.onResize(window);
  }

   @HostListener('window:resize', ['$event.target'])
  onResize(event) {
    if (event.innerWidth >= 768) {
      // Set to 'horizontal' for medium+ screens to always show up with no transition
      this.expand = 'horizontal';
      this.isCollapsed = false;
    } else {
      // the navigation menu shouldn't be expanded and it should be collapsed to the toggle when window is resized below medium
      this.expand = 'closed';
      this.isCollapsed = true;
    }
  }

  toggleExpanded() {
    this.expand = this.expand === 'open' ? 'closed' : 'open';
  }

  selectAndClose(): boolean {
    if (this.isCollapsed) {
      this.expand = 'closed';
    }

    return false;
  }
}
