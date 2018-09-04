import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCrimePage } from './add-crime';

@NgModule({
  declarations: [
    AddCrimePage,
  ],
  imports: [
    IonicPageModule.forChild(AddCrimePage),
  ],
})
export class AddCrimePageModule {}
