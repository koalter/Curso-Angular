import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { Routes, RouterModule } from '@angular/router'; 

import { MimoduloModule } from './mimodulo/mimodulo.module'
import { MimoduloModule2 } from './mimodulo2/mimodulo2.module';

/* componentes del proyecto */
import { AppComponent } from './app.component';
import { EntradaComponent } from './componentes/entrada/entrada.component';
/* componentes del proyecto: ruteados */
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
/* componente principal del modulo miModulo */
import { PanelComponent } from './mimodulo/componentes/panel/panel.component';
/* componente principal del modulo miModulo2 */
import { FamiliaComponent } from './mimodulo2/componentes/familia/familia.component';

import { ResaltarDirective } from './directivas/resaltar.directive';

import { ClientesService, ClientesServiceUseClass, ClientesServiceUseExisting, functionClientesServiceUseFactory } from './servicios/clientes.service';

const routes: Routes = [
  // { path: '', component: EntradaComponent },
  { path: '', redirectTo: 'formularios', pathMatch: 'full' },
  { path: 'entrada', component: EntradaComponent },
  { path: 'atributos', component: AtributosComponent },
  { path: 'estructura', component: EstructuraComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: 'clientes/:id', component: ClientesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'familia', component: FamiliaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    AtributosComponent,
    EstructuraComponent,
    FormulariosComponent,
    ResaltarDirective,
    ClientesComponent,
    UsuariosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes/*, { enableTracing: true }*/),
    MimoduloModule,
    MimoduloModule2
  ],
  // providers: [ClientesService],
  providers: [
    /* Original */
    { 
      provide: ClientesService,
      useClass: ClientesService
    }
    /* USECLASS */
    // { provide: ClientesService, useClass: ClientesServiceUseClass }
    /* USEEXISTING */
    // { provide: ClientesService, useExisting: ClientesServiceUseExisting }
    /* USEFACTORY */
    // { provide: ClientesService, useFactory: functionClientesServiceUseFactory }
    /* USEVALUE */
    // { provide: ClientesService, useValue: {
    //     clientes: [
    //       'Juan-useValue',
    //       'Ana-useValue',
    //       'Pedro-useValue',
    //       'Maria-useValue',
    //       'Pablo-useValue'
    //     ],
    //     getClientes() {
    //       return this.clientes
    //     },
    //     agregarCliente(client) {
    //       this.clientes.push(client)
    //     },
    //     borrarCliente() {
    //       this.clientes.pop()
    //     }
    //   } 
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
