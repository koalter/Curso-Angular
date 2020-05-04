import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './componentes/panel/panel.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';



@NgModule({
  declarations: [PanelComponent, ContenidoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent
  ]
})
export class MimoduloModule { }
