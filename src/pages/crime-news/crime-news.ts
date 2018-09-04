import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-crime-news',
  templateUrl: 'crime-news.html',
})
export class CrimeNewsPage {

  crimeNews$;
  fetchedState: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, public popup: AlertController) {
  }

  ionViewDidLoad() {
    let toaster;
    if(navigator.onLine) {
      toaster = this.toast.create({
        message: 'Fetching News From Resource',
        duration: 5000,
        // showCloseButton: true
      });
    }else {
      toaster = this.popup.create({
        message: 'This Page Requires Internet to Run Properly, Please Connect to the Internet and Try Again',
        buttons: [
          {
            text: "Back",
            role: 'back',
            handler: () => { this.navCtrl.push(HomePage)}
          }
        ]
      });
    }
    
    toaster.present();
  }

  goHome() {
    this.navCtrl.setRoot(HomePage);
  }


}
