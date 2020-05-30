import { Injectable, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountingAccountService } from './accounting-account.service';
import Swal from "sweetalert2";
import { ModalSubaccountService } from './modal-subaccount.service';


@Injectable({
  providedIn: 'root'
})
export class FormSubaccountService {

  subAccountEdit: any ='';
  base: string = '';
  isReadOnly: boolean = false;
  public notificacion = new EventEmitter<any>();


  constructor(public _formBuilder: FormBuilder,
              public _accounting: AccountingAccountService,
              public _modalSubaccount: ModalSubaccountService) { }


  form:FormGroup = this._formBuilder.group({

     cuentas: this._formBuilder.group({
        id: ['', Validators.required]
      }),
      id: [""],
      nameSubAccount: ["", Validators.required],
      subAccountNumber:["", Validators.minLength(9)],
      subAccountBalance:['',Validators.required],
    });


    fillForm(data: any){

      console.log('SUBACCOUNT EDIT ', this.subAccountEdit);

      if(this.subAccountEdit) {
        console.log('SI AYYYYY');
        // this.isReadOnly = true;
        this.form.get('id').setValue(this.subAccountEdit.id);
        // this.form.get('subAccountNumber').setValue(this.subAccountEdit.subAccountNumber);

      }else {
          console.log('NO AYYYYYY');
          // this.isReadOnly = false;
          console.log('DATA IN FORM SERVICE', data);
          this.base = data.account.slice(0, -3);
         // let newBase = this.base.slice(0,-3);
         console.log('NEW NUMBERT ', this.base);
         let balance: number = 0.00;

         this.form.get('cuentas.id').setValue(data.id);
         // this.form.get('nameSubAccount').setValue(data.name);
         this.form.get('subAccountNumber').setValue(this.base);
        // this.form.get('subAccountBalance').setValue(balance);

      }




    }


    editData(data, id) {
      this.form.get('cuentas.id').setValue(id);
      this.form.get('nameSubAccount').setValue(data.nameSubAccount);
      this.form.get('subAccountNumber').setValue(data.subAccountNumber);
     this.form.get('subAccountBalance').setValue(data.subAccountBalance);
    }


    deleteDataForm(){
      this.form.get('id').setValue('');
      this.form.get('nameSubAccount').setValue('');
      this.form.get('subAccountNumber').setValue('');
      this.form.get('subAccountBalance').setValue('');
      // this.isReadOnly = false;

    }


    sendData() {

      this._accounting.createSubAccount(this.form.value).subscribe(

        res => {
          this.notificacion.emit(res);
          this.isReadOnly = false;
          // this._modalSubaccount.closeModal();
          this.deleteDataForm();
          this.subAccountEdit= '';
          // console.log('RESPUESTE ', res);
          Swal.fire({
            icon: "success",
            text: "Los datos se enviaron con exito",
            title: "Datos enviados"
          });

          // this.deleteDataForm();
        })

      }
    }




