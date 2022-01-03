import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [		
    AppComponent,
      NavbarComponent,
      ShopComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [NavbarComponent, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
