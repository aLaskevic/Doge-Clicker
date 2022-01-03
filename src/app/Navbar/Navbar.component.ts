import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css'],
  animations: [
    trigger('fadeIn',[
      transition(':leave', [
      style({ opacity: 0})  ,
      animate('500ms', style({
        opacity: 1 , 
        top: '3%',
        transform:'rotateY(180deg)'
      }))
      ])
    ])
  ]
})
export class NavbarComponent implements OnInit {
  static dogeCoin:number = 1;
  static multiplier:number = 1.2;
  static auto:number = 1;
  static elon:boolean = false;
  coinClick:boolean = false;
  interval :any;

  @HostListener('document:click', ['$event'])
  clickout(event : any) {
    if(this.eRef.nativeElement.contains(event.target)) {
      NavbarComponent.dogeCoin = NavbarComponent.dogeCoin + NavbarComponent.multiplier + 1 * NavbarComponent.multiplier;
      this.coinClick = !this.coinClick;
    }
  }

   constructor(private eRef: ElementRef, private cookie: CookieService) {}

  ngOnInit() {
    if(this.cookie.check("dogeCoin"))
    {
      NavbarComponent.dogeCoin = +this.cookie.get("dogeCoin");
      NavbarComponent.multiplier = +this.cookie.get("multiplier");
      NavbarComponent.auto = +this.cookie.get("auto");
      NavbarComponent.elon = "true" == this.cookie.get("elon");
    }
    this.interval = setInterval(() => {
      NavbarComponent.dogeCoin = NavbarComponent.dogeCoin + NavbarComponent.auto;
      this.cookie.set("dogeCoin", NavbarComponent.dogeCoin.toString());
      this.cookie.set("multiplier", NavbarComponent.multiplier.toString());
      this.cookie.set("auto", NavbarComponent.auto.toString());
      this.cookie.set("elon", NavbarComponent.elon.toString());
  },100)
  }

  get staticDogecoin(){
    return NavbarComponent.dogeCoin;
  }

  get staticMultiplier(){
    return NavbarComponent.multiplier;
  }

  get staticauto(){
    return NavbarComponent.auto;
  }

  get staticElon(){
    return NavbarComponent.elon;
  }

}
