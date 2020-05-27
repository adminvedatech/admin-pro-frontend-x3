import { NgModule } from '@angular/core';

// IMPORTA RUTAS HIJAS DE LA PAGINA
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagenofoundComponent } from '../pagenofound/pagenofound.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { BankMovementCsvComponent } from './bank-accounts/bank-movement-csv/bank-movement-csv.component';
import { BankMovementReconciledComponent } from './bank-accounts/bank-movement-reconciled/bank-movement-reconciled.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountingAccountComponent } from './accounting-account/accounting-account.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { ModalSubaccountComponent } from '../components/modal-subaccount/modal-subaccount.component';
import { FormSubaccountComponent } from '../components/modal-subaccount/form-subaccount/form-subaccount.component';


@NgModule({
  declarations: [
    PagesComponent,
     DashboardComponent,
    GraphicsComponent,
    PagenofoundComponent,
    AccountSettingsComponent,
    BankAccountsComponent,
    BankMovementCsvComponent,
    AccountingAccountComponent,
    ModalSubaccountComponent,
    FormSubaccountComponent,
    BankMovementReconciledComponent

 ],
 exports:[
    // PagesComponent,
    DashboardComponent,
     GraphicsComponent,
     PagenofoundComponent,
     AccountSettingsComponent,
     ModalUploadComponent,
     FormSubaccountComponent,
     ModalSubaccountComponent,

 ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PAGES_ROUTES
  ],
  providers:[]
})
export class PagesModule { }
