import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CallNumber } from "@ionic-native/call-number";

@IonicPage()
@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html',
})
export class EmergencyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public caller: CallNumber, public alat: AlertController) {

  }

  dialNumber(number: string) {
    this.caller.callNumber(number,true)
    .then(res => console.log('dialer called'))
    .catch(err => {
      let alert = this.alat.create({
        message: err,
        buttons: ['Ok']
      })

      alert.present();
    })
  }

  ionViewDidLoad() {
    // this.presentLoading();
  }

  

}
