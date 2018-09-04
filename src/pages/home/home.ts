import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddCrimePage } from '../add-crime/add-crime';
import { CrimeNewsPage } from '../crime-news/crime-news';
import { EmergencyPage } from '../emergency/emergency';
import { ProfilePage } from '../profile/profile';
import { ContactPage } from '../contact/contact';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: NativeTransitionOptions = {
    direction: 'left',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
  };



  constructor(public navCtrl: NavController, private naviTrans: NativePageTransitions) {
  }
  
  reportCrime() {
    // this.naviTrans.slide(this.options);
    this.navCtrl.push(AddCrimePage);
  }

  readCrime() {
    this.navCtrl.push(CrimeNewsPage);
  }

  emergency() {
    this.navCtrl.push(EmergencyPage);
  }

  profilepage() {
    this.navCtrl.push(ProfilePage);
  }

  contactPage() {
    this.navCtrl.push(ContactPage);
  }
}
