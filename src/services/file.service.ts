import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { TimerModel } from '../models/timerModel';

@Injectable()
export class FileService {

     private path:string = "timer.sequence.txt";
    

    constructor(private file:File){

    }


    public Save(timer:TimerModel){
        alert(this.file);
        this.file.checkFile(this.file.dataDirectory, this.path)
            .then( res => {
                    if(res){
                        this.writeToFile(timer, {append: true, replace: false});
                    }else{
                        return this.file.createFile(this.file.dataDirectory, this.path, false)
                        .then(res => this.writeToFile(timer, {append: true, replace: false}))                        
                    }
                }
            )       
            .catch(err => console.log(err));
    }

    writeToFile(timer, options){
            this.file.writeFile(this.file.dataDirectory, 
            this.path,
            timer.toString(),
            options)
    }

}
