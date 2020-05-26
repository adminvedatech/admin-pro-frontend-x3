import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ModalUploadService {

  public oculto:string = 'ocultar';
  public tipo: string = '';
  public url: string = '';

  constructor(private _router: Router,
              // private _bank: BankService
              ) { }


  ocultarModal(){
    this.oculto='ocultar';
    this.tipo = null;
  }

  mostrarModal(tipo: string, url: string){
    this.oculto = '';
    this.tipo = tipo;
    this.url = url;
  }


}
