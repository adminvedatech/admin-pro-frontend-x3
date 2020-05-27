import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalSubaccountService {

  isHidden='ocultar';

  constructor() { }

  mostrarModal(){
    console.log('MOSTRAR');

    this.isHidden = '';
  }

  closeModal(){
    console.log('OCULTAR');

    this.isHidden = 'ocultar';
  }


}
