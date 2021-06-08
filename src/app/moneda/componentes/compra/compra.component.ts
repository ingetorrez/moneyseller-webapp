import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Currency } from '../../modelos/currency';
import { Compra } from '../../modelos/compra';

import { NgxSpinnerService } from "ngx-spinner";
import { CompraResponse } from '../../modelos/compra-response';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {
  public currency: Currency = { dolar:0, real:0 };

  public compra: Compra = { idUsuario:0, moneda:"", monto:0 };


  public response: CompraResponse = { id: 0,
                                      idUsuario: 0,
                                      monto: 0,
                                      moneda: "",
                                      cambio: 0,
                                      total: 0,
                                      fecha: new Date() };

  submitted = false;
  errorMessage=""

  constructor(private apiservice: ApiService,
    private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.apiservice.getCurrency().subscribe(currency =>this.currency = currency);
  }

  showSpinner(name: string) {
    this.spinner.show(name);
  }

  hideSpinner(name: string) {
    this.spinner.hide(name);
  }

  // newCompra():void{
  //   this.response=new Compra
  // }

  saveCompra():void{
    return console.log(this.compra)
    this.showSpinner("sp0")
    this.apiservice.create(this.compra)
    .subscribe(resp=>{

      this.response=resp;

      this.submitted=true;

      this.errorMessage=""

      this.hideSpinner("sp0")
    },
    error=>{
      console.log(error)

      this.submitted=true;

      this.hideSpinner("sp0")
    })
  }


}
