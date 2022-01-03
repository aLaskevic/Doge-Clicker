import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {


playAudio(path:string){
    let audio = new Audio();
    audio.src = path;
    audio.load();
    audio.play();
  }

constructor() {}

}
