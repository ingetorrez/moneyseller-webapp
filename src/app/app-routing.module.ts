
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionesComponent } from './moneda/componentes/cotizaciones/cotizaciones.component';
import { CompraComponent } from './moneda/componentes/compra/compra.component';




const routes: Routes = [
  { path: '', component: CotizacionesComponent },
  { path: 'cotizaciones', component: CotizacionesComponent },
  { path: 'compra', component: CompraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
