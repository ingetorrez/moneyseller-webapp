export interface CompraResponse {
  id: number,
  idUsuario: number,
  monto: number,
  moneda: string,
  cambio: number,
  total: number,
  fecha: Date
}
