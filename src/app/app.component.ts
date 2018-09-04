import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AddCrimePage } from '../pages/add-crime/add-crime';
import { ProfilePage } from '../pages/profile/profile';
import { CrimeNewsPage } from '../pages/crime-news/crime-news';
import { ContactPage } from '../pages/contact/contact';
import { EmergencyPage } from '../pages/emergency/emergency';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: '', title: 'Home', component: HomePage },
      { icon: '', title: 'Add Report ', component: AddCrimePage },
      { icon: '', title: 'Latest Crime News ', component: CrimeNewsPage },
      { icon: '', title: 'Emergency Numbers ', component: EmergencyPage },
      { icon: '', title: "User's Profile", component: ProfilePage },
      { icon: '', title: 'Contact Us', component: ContactPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
