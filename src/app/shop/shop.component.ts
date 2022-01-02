import { NavbarComponent } from './../Navbar/Navbar.component';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  sum:number = NavbarComponent.dogeCoin;
  isOpen:boolean = false;
  notification:string = "";
  shopmultiplier:number[] = [1.2,1.2,1.2];

  constructor(private cookie:CookieService) { }

  ngOnInit() {
    if(this.cookie.check("sm1") && this.cookie.check("dogeCoin"))
    {
      this.shopmultiplier[0] = +this.cookie.get("sm1");
      this.shopmultiplier[1] = +this.cookie.get("sm2");
    }
  }
  toggleShop(){
      this.isOpen = !this.isOpen;
      this.notification = "";
  }
  clickMultiply()
  {
    if(NavbarComponent.dogeCoin >= 20 * this.shopmultiplier[0])
    {
      NavbarComponent.multiplier++;
      NavbarComponent.dogeCoin = NavbarComponent.dogeCoin - 20 * this.shopmultiplier[0];
      this.shopmultiplier[0] = this.shopmultiplier[0] * 1.352;
      this.notification = ""
      this.cookie.set("sm1", this.shopmultiplier[0].toString());
    }
    else
      this.notification = "Not enough DogeCoins!"
  }
  clickAuto()
  {
    if(NavbarComponent.dogeCoin >= 100 * this.shopmultiplier[1])
    {
      NavbarComponent.auto++;
      NavbarComponent.dogeCoin = NavbarComponent.dogeCoin - 100 * this.shopmultiplier[1];
      this.shopmultiplier[1] = this.shopmultiplier[1] * 1.352;
      this.notification = ""
      this.cookie.set("sm2", this.shopmultiplier[1].toString());
    }
    else
      this.notification = "Not enough DogeCoins!"
  }
  clickElon()
  {
    if(NavbarComponent.dogeCoin >= 5000)
    {
      NavbarComponent.elon = true;
      this.notification = "TO THE MOOOOON!";
      NavbarComponent.dogeCoin -= 5000
    }
    else
      this.notification = "Not enough DogeCoins!"
  }
  get staticElon(){
    return NavbarComponent.elon;
  }
}