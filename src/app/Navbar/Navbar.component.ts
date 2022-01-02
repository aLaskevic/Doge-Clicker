import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrls: ['./Navbar.component.css']
})
export class NavbarComponent implements OnInit {
  static dogeCoin:number = 1;
  static multiplier:number = 1.2;
  static auto:number = 1;
  static freq:number = 100;
  static elon:boolean = false;
  savecoins:string="";
  interval :any;

  @HostListener('document:click', ['$event'])
  clickout(event : any) {
    if(this.eRef.nativeElement.contains(event.target)) {
      NavbarComponent.dogeCoin = NavbarComponent.dogeCoin + NavbarComponent.multiplier + 1 * NavbarComponent.multiplier;
      this.savecoins = NavbarComponent.toString();
      this.cookie.set("dogeCoin", this.savecoins);
    }
  }

   constructor(private eRef: ElementRef, private cookie: CookieService) {
    NavbarComponent.dogeCoin = 0;
  }

  ngOnInit() {
    if(this.cookie.check("dogeCoin"))
      NavbarComponent.dogeCoin = +this.cookie.get("dogeCoin");
    
    this.interval = setInterval(() => {
      NavbarComponent.dogeCoin = NavbarComponent.dogeCoin + NavbarComponent.auto;
  },NavbarComponent.freq)
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

  get staticfreq(){
    return NavbarComponent.freq;
  }

  get staticElon(){
    return NavbarComponent.elon;
  }

}
