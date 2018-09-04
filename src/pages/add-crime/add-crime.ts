import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { CrimeNewsPage } from '../crime-news/crime-news';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-add-crime',
  templateUrl: 'add-crime.html',
})
export class AddCrimePage {

  formData = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    gender: '',
    date: '',
    description: '',
    files: '',
    location: '',
    state: '',
    town: '',
    title: '',
    fileType: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public popup: AlertController, public db: AngularFireDatabase,public toast: ToastController) {
    // console.log(this.crimeType);
  }
  addCrime() {
    this.db.list('/reports').push({
      date: this.formData.date,
      description: this.formData.description,
      files: '',
      idKey: Math.floor(Math.random() + 1),
      location: this.formData.location,
      state: this.formData.state,
      town: this.formData.town,
      title: this.formData.title,
      type: this.formData.fileType
    }).then(() => {
      let alert = this.popup.create({
        message: 'Crime Report Added Successfully',
        buttons: ['Ok']
      });
      alert.present();
      this.navCtrl.setRoot(CrimeNewsPage);
    })
   
  }

  ionViewDidLoad() {
    let toaster;
    if(navigator.onLine) {
      toaster = this.toast.create({
        message: 'Preparing Report Form...',
        duration: 4000,
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
        
        // showCloseButton: true
      });
      // toaster.present();
    }
    toaster.present();
  }

}
