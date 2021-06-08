import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotizacionesComponent } from './componentes/cotizaciones/cotizaciones.component';

import { NgxSpinnerModule } from "ngx-spinner";
import { CompraComponent } from './componentes/compra/compra.component';

@NgModule({
  declarations: [
    CotizacionesComponent,
    CompraComponent
  ],
  exports:[
    CotizacionesComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ]
})
export class MonedaModule { }
