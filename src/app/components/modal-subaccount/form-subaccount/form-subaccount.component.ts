import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormSubaccountService } from 'src/app/services/accounting-accounts/form-subaccount.service';
import { ModalSubaccountService } from 'src/app/services/accounting-accounts/modal-subaccount.service';
import Swal from "sweetalert2";
import { AccountingAccountService } from 'src/app/services/accounting-accounts/accounting-account.service';
import { BankService } from 'src/app/services/bankservice/bank.service';


@Component({
  selector: 'app-form-subaccount',
  templateUrl: './form-subaccount.component.html',
  styleUrls: ['./form-subaccount.component.css']
})
export class FormSubaccountComponent implements OnInit {

  form: FormGroup;
  cuenta:any ='';
  subAccounts: any[] = [];
  subAccount: any = '';
  baseNumber: string ='';
  isReadOnly: boolean = false;
  public notificacion = new EventEmitter<any>();


  constructor(public _formSubAccount: FormSubaccountService,
              public _modalSubAccount: ModalSubaccountService,
              public _accounting: AccountingAccountService,
              public _bankservice: BankService
              ) { }

  ngOnInit(): void {

    this._formSubAccount.form;

  }


  getCuenta() {
    this.cuenta = this._modalSubAccount.cuentas;
    this.baseNumber = this.cuenta.account.slice(0,6);
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

  // existSubaccountArray(){


  // }

  verifyCode(event) {
   console.log('EVENT ', event.target.value);


  //  let value: string = event.target.value.replace(/[^a-zA-Z 0-9.]+/g,'');
    // let account = this.cuenta.account.replace(/[^a-zA-Z 0-9.]+/g,'');
    // this.baseNumber = account.slice(0,5);

  }

  onSubmit() {
    if(!this.verifyLongNumber()) {

      console.log('ERROR EN LOS DATOS');


    }else {
      this._formSubAccount.sendData();
    }
      // this.closeModal();
  }

   verifyLongNumber():boolean {

      if(this._formSubAccount.subAccountEdit) {
        console.log('SUBACCOUNT EDIT ', this._formSubAccount.subAccountEdit);

        return true;
      }

          // Verifica que estemos en la base de la cuenta, y que no exista numero duplicado
          this.subAccount = '';
          let value: string = this._formSubAccount.form.get('subAccountNumber').value;
          console.log('VALUE ', value);
          console.log('SUBACCOUNTS ', this.subAccounts);


          this.subAccount =  this.subAccounts.find(res => res.subAccountNumber === value);
          console.log('SUBACCOUNT FIND ', this.subAccount);

          if(this.baseNumber.localeCompare(value.slice(0,6)) != 0) {

            Swal.fire({
                icon: "error",
                text: "El numero debe comenzar con: " + this.baseNumber,
                title: "Error en el numero de Subcuenta"
             });

            console.log('NO ESTA EN BASE NUMBER');
               return false;

                }else if(this.subAccount !== undefined ){

            console.log('THIS.SUBACCOUNT RETURN FALSE');
            Swal.fire({
              icon: "error",
              text: "El numero de Subcuenta ya existe",
              title: "Error en el numero de Subcuenta"
             });
               return false;

          }
           console.log('DATA OK RETURN TRUE');

               return true;

          }

  }




