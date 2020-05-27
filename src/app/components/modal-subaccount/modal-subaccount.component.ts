import { Component, OnInit } from '@angular/core';
import { ModalSubaccountService } from '../../services/accounting-accounts/modal-subaccount.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-subaccount',
  templateUrl: './modal-subaccount.component.html',
  styleUrls: ['./modal-subaccount.component.css']
})
export class ModalSubaccountComponent implements OnInit {

  isHidden= 'ocultar';

  constructor(public _modalSubaccount: ModalSubaccountService,
              ) { }

  ngOnInit(): void {

  }

  closeModal(){
    this._modalSubaccount.closeModal();
  }

  mostrarModal(){
    console.log('MOSTRAR');

    this.isHidden = '';
  }

}
