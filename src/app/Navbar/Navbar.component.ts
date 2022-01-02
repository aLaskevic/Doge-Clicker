import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

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
  interval :any;

  @HostListener('document:click', ['$event'])
  clickout(event : any) {
    if(this.eRef.nativeElement.contains(event.target)) {
      NavbarComponent.dogeCoin = NavbarComponent.dogeCoin + NavbarComponent.multiplier + 1 * NavbarComponent.multiplier;
    }
  }

   constructor(private eRef: ElementRef) {
    NavbarComponent.dogeCoin = 0;
  }

  ngOnInit() {
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
