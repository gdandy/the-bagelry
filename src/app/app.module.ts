import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { routerTransition } from './router.animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AddressComponent } from './address/address.component';
import { LocalComponent } from './local/local.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContractNavBarDirective } from './contract-nav-bar.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AddressComponent,
    LocalComponent,
    OurStoryComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ContractNavBarDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent, data: { state: 'home' } },
      { path: 'menu', component: MenuComponent, data: { state: 'menu' } },
      { path: 'address', component: AddressComponent, data: { state: 'address' } },
      { path: 'local', component: LocalComponent, data: { state: 'local' } },
      { path: 'our-story', component: OurStoryComponent, data: { state: 'our-story' } },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
