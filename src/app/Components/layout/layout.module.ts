import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { SharedModule } from '../../Reutilizable/shared/shared.module';
import { ModalUsuarioComponent } from './Modales/modal-usuario/modal-usuario.component';
import { ModalRegistrarseComponent } from './Modales/modal-registrarse/modal-registrarse.component';
import { RangoComponent } from './Pages/rango/rango.component';
import { ModalRangoComponent } from './Modales/modal-rango/modal-rango.component';




@NgModule({
  declarations: [
    UsuarioComponent,
    ModalUsuarioComponent,
    ModalRegistrarseComponent,
    RangoComponent,
    ModalRangoComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
