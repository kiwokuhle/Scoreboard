import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import  Arr from '../../app/Array';
import {HomePage} from '../home/home';


/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  ScoreArray = Arr;

  Teams;
  Away=0;
  Home=0;

  TeamA= Arr[0];
  TeamB= Arr[1];


  


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
Check(a){
  this.Teams= a;
  console.log("s");

}

Try(){
  if(this.Teams == 'TeamA') {
    this.Home += 5;


  }

  else{
this.Away += 5;
  }
}

  Penalty(){
    if(this.Teams == 'TeamA') {
      this.Home += 3;

  
  
    }
  
    else{
  this.Away += 3;
    }
  }

    
 Convension(){
      if(this.Teams == 'TeamA') {
        this.Home += 2;
    
    
      }
    
      else{
    this.Away += 2;
      }
    

}
Penaltyundo(){
  if (this.Teams == 'TeamA') {
    this.Home -= 3;
    if (this.Home<0) {
      this.Home= 0;
      
    }
    
    
  }
  else{
    this.Away -= 3;
    if (this.Away<0) {
      this.Away = 0;
      
    }
  }
}


Tryundo(){
  if (this.Teams == 'TeamA') {
    this.Home -= 5;
    if (this.Home<0) {
      this.Home= 0;
      
    }
    
    
  }
  else{
    this.Away -= 5;
    if (this.Away<0) {
      this.Away = 0;
      
    }
  }
}

Convensionundo(){
  if (this.Teams == 'TeamA') {
    this.Home -= 2;
    if (this.Home<0) {
      this.Home= 0;
      
    }
    
    
  }
  else{
    this.Away -= 2;
    if (this.Away<0) {
      this.Away = 0;
      
    }
  }
}
Reset(){
  this.Home=0;
  this.Away=0;
  this.navCtrl.push(HomePage);
  

  
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

}
