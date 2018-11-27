import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdemConfirmationPage } from './ordem-confirmation';

@NgModule({
  declarations: [
    OrdemConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdemConfirmationPage),
  ],
})
export class OrdemConfirmationPageModule {}
