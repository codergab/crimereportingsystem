import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrimeNewsPage } from './crime-news';

@NgModule({
  declarations: [
    CrimeNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(CrimeNewsPage),
  ],
})
export class CrimeNewsPageModule {}
