import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormSubaccountService } from 'src/app/services/accounting-accounts/form-subaccount.service';
import { ModalSubaccountService } from 'src/app/services/accounting-accounts/modal-subaccount.service';
import Swal from "sweetalert2";
import { AccountingAccountService } from 'src/app/services/accounting-accounts/accounting-account.service';


@Component({
  selector: 'app-form-subaccount',
  templateUrl: './form-subaccount.component.html',
  styleUrls: ['./form-subaccount.component.css']
})
export class FormSubaccountComponent implements OnInit {

  form: FormGroup;
  cuenta:any='';
  subAccounts: any[] = [];
  subAccount: any = '';
  baseNumber: any ='';

  constructor(public _formSubAccount: FormSubaccountService,
              public _modalSubAccount: ModalSubaccountService,
              public _accounting: AccountingAccountService
              ) { }

  ngOnInit(): void {

    this._formSubAccount.form;

  }


  getCuenta() {
    this.cuenta = this._modalSubAccount.cuentas;
    this.subAccounts = this.cuenta.subCuentas;
    console.log('CUENTA ', this.cuenta);
    console.log('CUENTA ', this.subAccounts);

    this._formSubAccount.fillForm(this.cuenta);

  }

  closeModal() {
    this.cuenta= '';
    this._modalSubAccount.closeModal();
    this._formSubAccount.deleteDataForm();
  }

  existSubaccountArray(){


  }

  verifyCode(event) {
   console.log('EVENT ', event.target.value);
   let value: string = event.target.value.replace(/[^a-zA-Z 0-9.]+/g,'');
   console.log('VALUE SIN EXPRESIONES ', value);
   this.cuenta.account;
  //  this.baseNumber = value.slice(0,5);
    let account = this.cuenta.account.replace(/[^a-zA-Z 0-9.]+/g,'');
    this.baseNumber = account.slice(0,5);

   console.log('BASE NUMBER ', this.baseNumber);


   this.subAccount =  this.subAccounts.find(res => res.subAccountNumber === value);

   console.log('SELECT SUBACCOUNT ', this.subAccount);

   if(this.subAccount === undefined) {
     console.log('okkkkkkk');
     this.verifyLongNumber(value);
   }else {
    Swal.fire({
      icon: "error",
      text: "El numero de Subcuenta ya existe!",
      title: "Numero de Subcuenta"
    });
    console.log('EL VALOR YA EXISTE');

   }


  }


  verifyLongNumber(value:string) {

    if(value.length > 7) {
      Swal.fire({
        icon: "error",
        text: "El numero de la Subcuenta no debe ser mayor que 7 Digitos!",
        title: "Numero de Subcuenta"
      });

    }

    let valueLeng = value.slice(0,5);
    if(valueLeng.localeCompare(this.baseNumber) !== 0) {
      Swal.fire({
        icon: "error",
        text: "La Base del numero debe comenzar con" + '{this.baseNumber}',
        title: "Numero de Subcuenta"
      });

    }


  }

  onSubmit(){
    console.log('FORM VAlID', this._formSubAccount.form.valid);

    console.log('FORM ', this._formSubAccount.form.value);

    this._accounting.createSubAccount(this._formSubAccount.form.value).subscribe(res => {

      console.log('RESPUESTE ', res);

    })

  }



}
