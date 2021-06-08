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

  public compra: Compra = { idUsuario:"", moneda:"dolar", monto:"" };


  public response: CompraResponse = { id: 0,
                                      idUsuario: 0,
                                      monto: 0,
                                      moneda: "",
                                      cambio: 0,
                                      total: 0,
                                      fecha: "" };

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

  newCompra():void{
    this.compra={ idUsuario:"", moneda:"dolar", monto:"" };

    this.submitted=false;

    this.errorMessage="";
  }

  saveCompra():void{
    const { idUsuario:id, moneda, monto} =this.compra;
    if(id=="" || id==null || moneda=="" || moneda==null || monto=="" || monto==null) return;

    this.showSpinner("sp0")
    this.apiservice.create(this.compra)
    .subscribe(resp=>{

      this.response={...resp,fecha:`El ${new Date(resp.fecha).toLocaleDateString("en-US")} a las ${new Date(resp.fecha).toLocaleTimeString("en-US")}`};

      this.submitted=true;

      this.errorMessage=""


      this.hideSpinner("sp0")
    },
    error=>{
      this.errorMessage=error.error

      setTimeout(()=>this.errorMessage="",5000)

      this.submitted=false;

      this.hideSpinner("sp0")
    })
  }


}
