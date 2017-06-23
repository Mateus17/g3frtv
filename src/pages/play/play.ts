import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'play',
  templateUrl: 'play.html'
})
export class PlayPage {

  constructor(public navCtrl: NavController) {
    
  }

  playVideo () {
    /*var video = document.getElementById("#video");
    video.play();
    console.log('ok');*/
  }
  
  okDemo() {
    var videoPlayer = document.querySelector('.demo');
    videoPlayer.classList.remove('demo');
  }
}