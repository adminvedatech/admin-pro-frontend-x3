import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalSubaccountService {

  isHidden='ocultar';
  cuentas: any;
  constructor() { }

  mostrarModal(acc){
    console.log('MOSTRAR', acc);
    this.isHidden = '';
    this.cuentas = acc;
  }

  closeModal(){
    console.log('OCULTAR');

    this.isHidden = 'ocultar';
  }


}
