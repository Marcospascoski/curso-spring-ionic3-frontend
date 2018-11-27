import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrdemConfirmationPage } from './ordem-confirmation';
import { PedidoService } from '../../services/domain/pedido.service';

@NgModule({
  declarations: [
    OrdemConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrdemConfirmationPage),
  ],
  providers:[
    PedidoService
  ]
})
export class OrdemConfirmationPageModule {}
