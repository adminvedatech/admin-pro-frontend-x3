import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormSubaccountService {

  constructor(public _formBuilder: FormBuilder) { }


  form:FormGroup = this._formBuilder.group({

     cuentas: this._formBuilder.group({
        id: ['', Validators.required]
      }),
      nameSubAccount: ["", Validators.required],
      subAccountNumber:["", Validators.required],
      subAccountBalance:['',Validators.required],
    });


    fillForm(data: any){

      console.log('DATA IN FORM SERVICE', data);
      let number:string = data.account;
      let newNumber = number.slice(0,-2);
      console.log('NEW NUMBERT ', newNumber);
      let balance: number = 0.00;

      this.form.get('cuentas.id').setValue(data.id);
      // this.form.get('nameSubAccount').setValue(data.name);
      this.form.get('subAccountNumber').setValue(newNumber);
     // this.form.get('subAccountBalance').setValue(balance);


    }


    deleteDataForm(){
      this.form.get('nameSubAccount').setValue('');
      this.form.get('subAccountNumber').setValue('');
      this.form.get('subAccountBalance').setValue('');

    }



}
