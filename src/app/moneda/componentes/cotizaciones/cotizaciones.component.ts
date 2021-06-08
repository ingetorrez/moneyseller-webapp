import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Currency } from '../../modelos/currency';

import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss']
})
export class CotizacionesComponent implements OnInit {
  public currency: Currency = { dolar:0, real:0 };

  constructor(private apiservice: ApiService,
              private spinner: NgxSpinnerService) {

  }


  ngOnInit(): void {
    this.refreshCurrency();
  }

  refreshCurrency():void{
    this.showSpinner("sp0")
    this.apiservice.getCurrency().subscribe(currency =>
      {
        this.hideSpinner("sp0")
        this.currency = currency
      });

  }

  showSpinner(name: string) {
    this.spinner.show(name);
  }

  hideSpinner(name: string) {
    this.spinner.hide(name);
  }

}
