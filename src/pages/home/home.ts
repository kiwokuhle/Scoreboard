import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { ScorePage } from '../score/score';
import { Teams } from '../../app/Object';
import Array from '../../app/Array';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Home;
  Away;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }
  GetStarted(){
    if (this.Home !=undefined && this.Away != undefined) {
      
  
    let obj = new Teams(this.Home,this.Away);
    Array.push(obj);
    console.log(Array);
    
    this.navCtrl.push(ScorePage);
  }else{

    let alert = this.alertCtrl.create({
      title: 'Confirm Teams',
      message: 'Home Team is {{TeamA}} and Away Team is {{TeamB}}',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, 
        {
          text: 'Agree',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  let alert = this.alertCtrl.create({
    title: 'Confirm Teams',
    message: 'Home Team is ' + this.Home + ' and Away Team is ' + this.Away,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }, 
      {
        text: 'Agree',
        handler: () => {
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
}
  
}




