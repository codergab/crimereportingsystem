import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddCrimePage } from "../pages/add-crime/add-crime";
import { CrimeNewsPage } from "../pages/crime-news/crime-news";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListPage } from '../pages/list/list';
import { EmergencyPage } from '../pages/emergency/emergency';
import { CallNumber } from '../../node_modules/@ionic-native/call-number';
import { ProfilePage } from '../pages/profile/profile';
import { ContactPage } from '../pages/contact/contact';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

const firebaseConfig = {
  apiKey: "AIzaSyB_zux3M7BkDI9yTnFGuMyjlhxkuws2nW4",
  authDomain: "crime-app-ionic.firebaseapp.com",
  databaseURL: "https://crime-app-ionic.firebaseio.com",
  projectId: "crime-app-ionic",
  storageBucket: "crime-app-ionic.appspot.com",
  messagingSenderId: "583673320250"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddCrimePage,
    CrimeNewsPage,
    EmergencyPage,
    ProfilePage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddCrimePage,
    CrimeNewsPage,
    EmergencyPage,
    ProfilePage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
