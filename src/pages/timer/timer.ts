import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FileService } from '../../services/file.service'
import { TimerModel } from '../../models/timerModel';

@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html'
})
export class TimerPage {

    timer:TimerModel = new TimerModel();

    constructor(public viewCtrl: ViewController,
                private fileSvc:FileService) {

    }

    ok(){        
        this.fileSvc.Save(this.timer);
        this.close();
    }

    cancel(){
        this.close();
    }

    close() {
        this.viewCtrl.dismiss();
    }
}
