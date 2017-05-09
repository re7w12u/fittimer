import { Component } from '@angular/core';
import { NavController, PopoverController  } from 'ionic-angular';
import { TimerPage } from '../timer/timer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public popoverCtrl:PopoverController) {

  }

  newTimer(){
    let popover = this.popoverCtrl.create(TimerPage);
    popover.present();
  }

}
