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
      nameSubAccount: [""],
      subAccountNumber:[""],
      subAccountBalance:[],
    });


}
