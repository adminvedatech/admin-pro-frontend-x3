import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormSubaccountService } from 'src/app/services/accounting-accounts/form-subaccount.service';

@Component({
  selector: 'app-form-subaccount',
  templateUrl: './form-subaccount.component.html',
  styleUrls: ['./form-subaccount.component.css']
})
export class FormSubaccountComponent implements OnInit {

  form: FormGroup;

  constructor(public _formSubAccount: FormSubaccountService
              ) { }

  ngOnInit(): void {

    this._formSubAccount.form;

  }


}
