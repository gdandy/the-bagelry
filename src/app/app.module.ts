import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AddressComponent } from './address/address.component';
import { LocalComponent } from './local/local.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'address', component: AddressComponent },
      { path: 'local', component: LocalComponent },
      { path: 'our-story', component: OurStoryComponent },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      { path: '**', component: PageNotFoundComponent }
    ]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
