import { NavbarComponent } from './../Navbar/Navbar.component';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AudioService } from 'src/shared/Audio.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  animations: [
    trigger('shop',[
      transition(':enter', [
        style({ opacity: 0})  ,
        animate('250ms', style({
          opacity: 1
        }))
        ]),
        transition(':leave', [
          style({ opacity: 1})  ,
          animate('250ms', style({
            opacity: 0
          }))
          ])
    ])
  ]
})
export class ShopComponent implements OnInit {
  sum:number = NavbarComponent.dogeCoin;
  isOpen:boolean = false;
  notification:string = "";
  shopmultiplier:number[] = [1.2,1.2,1.2];


  constructor(private cookie:CookieService, private audioplayer:AudioService) { }

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
      this.shopmultiplier[0] = this.shopmultiplier[0] * 1.252;
      this.notification = ""
      this.cookie.set("sm1", this.shopmultiplier[0].toString());
      this.audioplayer.playAudio("assets/wav/buyItem.wav")
    }
    else
      this.notification = "Not enough DogeCoins!"
  }
  clickAuto()
  {
    if(NavbarComponent.dogeCoin >= 100 * this.shopmultiplier[1])
    {
      NavbarComponent.auto++;
      NavbarComponent.dogeCoin -=  (this.shopmultiplier[1] * 100);
      this.shopmultiplier[1] = this.shopmultiplier[1] * 1.252;
      this.notification = ""
      this.cookie.set("sm2", this.shopmultiplier[1].toString());
      this.audioplayer.playAudio("assets/wav/buyItem.wav")
    }
    else
      this.notification = "Not enough DogeCoins!"
  }
  clickElon()
  {
    if(NavbarComponent.dogeCoin >= 5000)
    {
      NavbarComponent.elon = true;
      NavbarComponent.dogeCoin -= 5000;
      NavbarComponent.multiplier += 10;
      NavbarComponent.auto += 10;
      this.audioplayer.playAudio("assets/wav/elon.mp3")
      this.notification = "TO THE MOOOOON!";
    }
    else
      this.notification = "Not enough DogeCoins!"
  }
  get staticElon(){
    return NavbarComponent.elon;
  }
}