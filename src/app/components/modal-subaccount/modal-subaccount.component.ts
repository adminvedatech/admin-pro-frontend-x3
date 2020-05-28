import { Component, OnInit } from '@angular/core';
import { ModalSubaccountService } from '../../services/accounting-accounts/modal-subaccount.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormSubaccountService } from 'src/app/services/accounting-accounts/form-subaccount.service';

@Component({
  selector: 'app-modal-subaccount',
  templateUrl: './modal-subaccount.component.html',
  styleUrls: ['./modal-subaccount.component.css']
})
export class ModalSubaccountComponent implements OnInit {

  isHidden= 'ocultar';
  account: any= '';

  constructor(public _modalSubaccount: ModalSubaccountService,
              public _formSubaccount: FormSubaccountService
              ) { }

  ngOnInit(): void {

    this.account = this._modalSubaccount.cuentas;
    console.log('CUENTAS ', this.account);

  }

  closeModal(){
    this._modalSubaccount.closeModal();
    this._formSubaccount.deleteDataForm();
    this.account = '';
  }

  mostrarModal(){
    console.log('MOSTRAR');
    this.isHidden = '';

  }

}
