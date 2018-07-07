import { Component, AfterViewInit } from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements AfterViewInit {
  title = 'The Bagelry';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  ngAfterViewInit() {
    // $('#myModal').modal({ show: true })
  }
}
