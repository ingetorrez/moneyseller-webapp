import { Injectable } from "@angular/core";
import { Currency } from '../modelos/currency';
import { Compra } from '../modelos/compra';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./../../../environments/environment"
import { CompraResponse } from '../modelos/compra-response';

@Injectable({
  providedIn: "root"
})

export class ApiService {
  private currency: Currency = { dolar:0, real:0 };
  private GetAllUrl = `${environment.apiUrl}Moneda/GetAll`;
  private CreateUrl = `${environment.apiUrl}Moneda/Comprar`;

  constructor(private http: HttpClient) {}

  public getCurrency(): Observable<Currency> {
    return this.http.get<Currency>(this.GetAllUrl);
  }

  public create(data:Compra): Observable<CompraResponse> {
    return this.http.post<CompraResponse>(this.CreateUrl, data);
  }
}
