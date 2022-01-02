import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [		
    AppComponent,
      NavbarComponent,
      ShopComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
